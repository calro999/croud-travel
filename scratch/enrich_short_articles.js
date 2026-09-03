const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

const targetShortArticles = [
  { file: "hotel-greenhill-kagoshima-stay-guide.json", kw: "鹿児島 ホテル 温泉 黒豚", title: "【鹿児島】ホテルグリーンヒル鹿児島＆霧島・指宿おすすめ宿泊ガイド！天然温泉と黒豚グルメ" },
  { file: "162965.json", kw: "銀座 ホテル 大浴場", title: "【東京・銀座】ホテルSUI銀座京橋byABEST宿泊ガイド！銀座・東京駅至近の快適ホテル" },
  { file: "shioyaki-onsen-tochigi-hidden-gem-guide.json", kw: "塩原温泉 旅館 露天風呂", title: "【栃木・塩原】塩原温泉郷の秘湯ガイド！川沿いの露天風呂と歴史ある名湯宿" },
  { file: "147483.json", kw: "岩手 温泉 旅館 ひめかゆ", title: "【岩手・奥州】焼石岳温泉 焼石クアパークひめかゆ宿泊ガイド！美肌温泉と前沢牛" },
  { file: "biwako-matsunoura-bettei-pet-luxury-guide.json", kw: "琵琶湖 ペット 温泉 宿", title: "【滋賀・琵琶湖】びわ湖松の浦別邸！愛犬と泊まる湖畔の高級温泉リゾート宿泊ガイド" },
  { file: "ibusuki-royal-hotel-ocean-view-guide.json", kw: "指宿温泉 砂むし 旅館", title: "【指宿温泉】指宿ロイヤルホテル宿泊ガイド！絶景露天風呂・砂むし温泉アクセス・鹿児島会席" },
  { file: "7335.json", kw: "那須温泉 ホテル エピナール那須", title: "【那須高原】ホテルエピナール那須宿泊ガイド！那須最大級の温泉大浴場＆豪華バイキング" },
  { file: "kokusai-kanko-nakamasu-nagasaki-guide.json", kw: "長崎 雲仙温泉 旅館", title: "【長崎】国際観光旅館なかます＆長崎・雲仙温泉のおすすめ宿泊ガイド" },
  { file: "bouldering-sauna-activity-hotel-guide.json", kw: "サウナ アクティビティ ホテル リゾート", title: "【ボルダリング＆本格サウナ付きホテル2026】アクティビティ充実の体験型リゾート宿特集！" },
  { file: "tanada-onsen-infinity-bath-japan-guide.json", kw: "棚田 絶景 露天風呂 温泉", title: "【全国】棚田みたいな温泉・棚田風露天風呂おすすめ宿！絶景インフィニティ温泉ガイド" },
  { file: "798.json", kw: "山口 宇部 ホテル", title: "【山口・宇部】国際ホテル宇部宿泊ガイド！山口宇部空港アクセスとふぐ料理" },
  { file: "silver-week-onsen-ranking-keirou-travel.json", kw: "温泉 旅館 敬老の日 家族旅行", title: "【2026最新】シルバーウィーク温泉旅行ランキング！敬老の日・家族旅行・三連休に泊まる極上湯宿" },
  { file: "13483.json", kw: "花巻温泉 ホテル 紅葉館", title: "【岩手・花巻温泉】ホテル紅葉館宿泊ガイド！お祭り広場と名物露天風呂" },
  { file: "candeo-hotels-omiya-sky-spa-guide.json", kw: "カンデオホテルズ 大宮 サウナ", title: "【埼玉・大宮】カンデオホテルズ大宮宿泊ガイド！最上階スカイスパ・露天風呂・サウナ付きホテル" },
  { file: "noto-airport-pokemon-footbath-guide.json", kw: "能登 和倉温泉 輪島 ホテル", title: "【能登空港】のと里山空港の足湯＆ポケモン完全攻略ガイド！珠洲・輪島復興応援旅" }
];

async function enrichArticles() {
  console.log(`Starting enrichment for ${targetShortArticles.length} short articles...`);
  for (const item of targetShortArticles) {
    const filePath = path.join(POSTS_DIR, item.file);
    if (!fs.existsSync(filePath)) continue;

    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      continue;
    }

    console.log(`Enriching ${item.file} ("${item.kw}")...`);
    await new Promise(r => setTimeout(r, 1500));
    let hotels = [];
    try {
      hotels = await searchRakutenHotels(item.kw, 4);
    } catch (e) {
      console.warn(`Error fetching hotels for ${item.kw}:`, e.message);
    }

    let review = data.review || '';
    if (hotels && hotels.length > 0) {
      const mainHotel = hotels[0];
      const otherHotels = hotels.slice(1);

      let addedHtml = `\n\n<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 厳選おすすめ宿泊施設＆最新プラン</h3>\n<div class="space-y-4 my-4">\n`;

      addedHtml += `  <div class="p-4 bg-white rounded-2xl border border-amber-200 shadow-sm space-y-3">
    <div class="flex flex-col md:flex-row gap-4 items-center">
      ${mainHotel.hotelImageUrl ? `<img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-48 h-36 object-cover rounded-xl shadow-inner flex-shrink-0" />` : ''}
      <div class="flex-grow space-y-1.5">
        <span class="inline-block px-2.5 py-0.5 bg-amber-500 text-white font-bold text-[10px] rounded-full">注目おすすめ</span>
        <h4 class="font-bold text-stone-900 text-base leading-snug">${mainHotel.hotelName}</h4>
        <p class="text-[11px] text-stone-600">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access || ''}</p>
        <div class="flex items-center gap-3 text-xs text-stone-700 pt-1">
          ${mainHotel.reviewAverage > 0 ? `<span class="font-bold text-amber-600">⭐ ${mainHotel.reviewAverage}（${mainHotel.reviewCount}件の評価）</span>` : ''}
          ${mainHotel.hotelMinCharge > 0 ? `<span class="font-bold text-stone-900">目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>` : ''}
        </div>
      </div>
    </div>
    ${mainHotel.hotelSpecial ? `<p class="text-xs text-stone-700 bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">${mainHotel.hotelSpecial}</p>` : ''}
    <div class="text-right pt-2">
      <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs rounded-xl shadow hover:opacity-95 transition">
        楽天トラベルでプラン・空室を見る ≫
      </a>
    </div>
  </div>\n`;

      for (const h of otherHotels) {
        addedHtml += `  <div class="p-4 bg-stone-50/80 rounded-xl border border-stone-200 space-y-2.5">
    <div class="flex flex-col md:flex-row gap-3 items-center">
      ${h.hotelImageUrl ? `<img src="${h.hotelImageUrl}" alt="${h.hotelName}" class="w-full md:w-36 h-24 object-cover rounded-lg flex-shrink-0" />` : ''}
      <div class="flex-grow space-y-1">
        <h4 class="font-bold text-stone-900 text-sm">${h.hotelName}</h4>
        <p class="text-[11px] text-stone-600">${h.address1}${h.address2}</p>
        <div class="flex items-center gap-3 text-xs text-stone-700">
          ${h.reviewAverage > 0 ? `<span class="text-amber-600 font-bold">⭐ ${h.reviewAverage}</span>` : ''}
          ${h.hotelMinCharge > 0 ? `<span>参考: ¥${h.hotelMinCharge.toLocaleString()}〜</span>` : ''}
        </div>
      </div>
    </div>
    <div class="text-right pt-1">
      <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-amber-700 hover:underline">
        詳細・プランを見る ≫
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

      const newImages = hotels.map(h => h.hotelImageUrl).filter(Boolean);
      data.other_images = [...new Set([...(data.other_images || []), ...newImages])];
      if (!data.image && hotels[0].hotelImageUrl) {
        data.image = hotels[0].hotelImageUrl;
      }
      if (!data.affiliate_url && hotels[0].affiliateUrl) {
        data.affiliate_url = hotels[0].affiliateUrl;
      }

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✓ Enriched ${item.file}`);
    }
  }
}

enrichArticles().catch(console.error);
