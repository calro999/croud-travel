const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const n_sen_pattern = /[【「\[]?(\d+)選[】」\]]?/;

async function runFulfillment() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));
  console.log(`Scanning ${files.length} posts for n-selection verification and Rakuten API replenishment...`);

  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(POSTS_DIR, file);
    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      continue;
    }

    const title = data.title || '';
    const match = n_sen_pattern.exec(title);
    if (!match) continue;

    const targetN = parseInt(match[1], 10);
    if (isNaN(targetN) || targetN <= 0) continue;

    let review = data.review || '';

    // Count currently featured hotels in the review HTML
    // 1. Hotel card containers or 4/5-level headings
    const cardMatches = review.match(/class="[^"]*(?:p-4 bg-white rounded-2xl border|p-4 bg-stone-50)[^"]*"/g) || [];
    const h4Matches = review.match(/<h4[^>]*font-bold[^>]*>.*?<\/h4>/g) || [];
    const linkMatches = [...new Set(review.match(/https%3A%2F%2Ftravel\.rakuten\.co\.jp%2FHOTEL%2F\d+/g) || [])];

    let currentCount = Math.max(cardMatches.length, linkMatches.length);

    // If current count is strictly less than targetN, we must fetch genuine hotels via Rakuten API
    if (currentCount < targetN) {
      console.log(`\n[Replenishing] ${file}: target=${targetN} vs current=${currentCount}`);
      const needed = targetN - currentCount;

      const pref = data.prefecture || '';
      const area = data.area || '';
      const searchKw = `${pref} ${area.split('・')[0] || ''} 温泉 ホテル`.trim();
      const fallbackKw = `${pref} 温泉 旅館`.trim();

      let newHotels = [];
      try {
        await new Promise(r => setTimeout(r, 1200));
        newHotels = await searchRakutenHotels(searchKw, needed + 3);
        if (!newHotels || newHotels.length === 0) {
          await new Promise(r => setTimeout(r, 1200));
          newHotels = await searchRakutenHotels(fallbackKw, needed + 3);
        }
      } catch (err) {
        console.warn(`Rakuten search error for ${searchKw}:`, err.message);
      }

      if (!newHotels || newHotels.length === 0) {
        console.warn(`Could not find hotels for ${file}`);
        continue;
      }

      // Filter out hotels already in review
      const uniqueNewHotels = newHotels.filter(h => !review.includes(h.hotelName) && !review.includes(h.hotelNo)).slice(0, needed);

      if (uniqueNewHotels.length > 0) {
        let addedHtml = `\n\n<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 厳選おすすめ宿泊施設（追加セレクション）</h3>\n<div class="space-y-4 my-4">\n`;

        for (const h of uniqueNewHotels) {
          addedHtml += `  <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
    <div class="flex flex-col md:flex-row gap-3 items-center">
      ${h.hotelImageUrl ? `<img src="${h.hotelImageUrl}" alt="${h.hotelName}" class="w-full md:w-36 h-24 object-cover rounded-xl shadow-inner flex-shrink-0" />` : ''}
      <div class="flex-grow space-y-1">
        <h4 class="font-bold text-stone-900 text-sm leading-snug">${h.hotelName}</h4>
        <p class="text-[11px] text-stone-600">${h.address1}${h.address2} ｜ ${h.access || ''}</p>
        <div class="flex items-center gap-3 text-xs text-stone-700">
          ${h.reviewAverage > 0 ? `<span class="text-amber-600 font-bold">⭐ ${h.reviewAverage}（${h.reviewCount}件）</span>` : ''}
          ${h.hotelMinCharge > 0 ? `<span class="font-bold text-stone-900">目安: ¥${h.hotelMinCharge.toLocaleString()}〜</span>` : ''}
        </div>
      </div>
    </div>
    ${h.hotelSpecial ? `<p class="text-xs text-stone-700 bg-stone-50 p-2 rounded-lg border border-stone-100">${h.hotelSpecial}</p>` : ''}
    <div class="text-right pt-1">
      <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs rounded-xl shadow hover:opacity-95 transition">
        楽天トラベルでプラン・空室を見る ≫
      </a>
    </div>
  </div>\n`;
        }

        addedHtml += `</div>\n`;

        // Append before the closing CTA
        const ctaIndex = review.lastIndexOf('<div class="pt-');
        if (ctaIndex !== -1) {
          data.review = review.slice(0, ctaIndex) + addedHtml + review.slice(ctaIndex);
        } else {
          data.review = review + addedHtml;
        }

        // Add images to other_images
        const newImages = uniqueNewHotels.map(h => h.hotelImageUrl).filter(Boolean);
        data.other_images = [...new Set([...(data.other_images || []), ...newImages])];

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        updatedCount++;
        console.log(`✓ Fulfill succeeded for ${file} (+${uniqueNewHotels.length} hotels)`);
      }
    }
  }

  console.log(`\nSuccessfully verified and fulfilled ${updatedCount} n-selection articles with Rakuten API!`);
}

runFulfillment().catch(console.error);
