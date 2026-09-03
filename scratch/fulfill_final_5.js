const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

const targetFiles = [
  { file: "fukui-onsen-ranking-hotels-guide.json", kw: "福井 あわら温泉 旅館", needed: 1 },
  { file: "silver-week-glamping-luxury-guide.json", kw: "グランピング 関東 富士山", needed: 7 },
  { file: "okayama-onsen-ranking-hotels-guide.json", kw: "岡山 湯原温泉 旅館", needed: 1 },
  { file: "okinawa-onsen-ranking-hotels-guide.json", kw: "沖縄 温泉 リゾート ホテル", needed: 5 },
  { file: "kochi-onsen-ranking-hotels-guide.json", kw: "高知 温泉 ホテル 旅館", needed: 1 }
];

async function run() {
  for (const item of targetFiles) {
    const filePath = path.join(POSTS_DIR, item.file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let review = data.review || '';

    console.log(`Fetching ${item.needed} hotels for ${item.file} ("${item.kw}")...`);
    await new Promise(r => setTimeout(r, 1500));
    const hotels = await searchRakutenHotels(item.kw, item.needed + 5);

    const uniqueHotels = hotels.filter(h => !review.includes(h.hotelName) && !review.includes(h.hotelNo)).slice(0, item.needed);

    if (uniqueHotels.length > 0) {
      let addedHtml = `\n\n<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 厳選おすすめ宿泊施設（特集セレクション）</h3>\n<div class="space-y-4 my-4">\n`;

      for (const h of uniqueHotels) {
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

      const ctaIndex = review.lastIndexOf('<div class="pt-');
      if (ctaIndex !== -1) {
        data.review = review.slice(0, ctaIndex) + addedHtml + review.slice(ctaIndex);
      } else {
        data.review = review + addedHtml;
      }

      const newImages = uniqueHotels.map(h => h.hotelImageUrl).filter(Boolean);
      data.other_images = [...new Set([...(data.other_images || []), ...newImages])];

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✓ Completely fulfilled: ${item.file}`);
    }
  }
}

run().catch(console.error);
