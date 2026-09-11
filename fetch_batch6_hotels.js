const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 静岡・静岡駅＆駿府 出張・清水港まぐろ・静岡茶・富士山ビュー
  "shizuoka-solo-business-maguro-fujiview-stay": [
    { key: "associa_shizuoka", query: "ホテルアソシア静岡" },
    { key: "granhills_shizuoka", query: "ホテルグランヒルズ静岡" },
    { key: "nakajimaya_shizuoka", query: "中島屋グランドホテル" }
  ],
  // 2. 栃木・宇都宮 出張・餃子食べ歩き・スカイスパ・大谷石
  "utsunomiya-solo-business-gyoza-skyspa-stay": [
    { key: "candeo_utsunomiya", query: "CANDEO HOTELS 宇都宮" },
    { key: "mets_utsunomiya", query: "ＪＲ東日本ホテルメッツ 宇都宮" },
    { key: "mystays_utsunomiya", query: "ホテルマイステイズ宇都宮" }
  ],
  // 3. 愛媛・松山＆道後温泉 ひとり旅・日本最古の名湯・坊っちゃん・鯛めし
  "matsuyama-dogo-solo-retreat-onsen-taimeshi-stay": [
    { key: "dogo_funaya", query: "道後温泉 ふなや" },
    { key: "dogo_yamatoya", query: "大和屋本店" },
    { key: "candeo_matsuyama", query: "カンデオホテルズ松山大街道" }
  ],
  // 4. 青森・八戸＆本八戸 出張・八食センター・みろく横丁・イカ海鮮
  "hachinohe-solo-business-miroku-seafood-stay": [
    { key: "daiwa_hachinohe", query: "ダイワロイネットホテル八戸" },
    { key: "comfort_hachinohe", query: "コンフォートホテル八戸" },
    { key: "hachinohe_grand_hotel", query: "八戸グランドホテル" }
  ],
  // 5. 宮崎・橘通り＆宮崎駅 出張・チキン南蛮・地鶏炭火焼・天然温泉
  "miyazaki-solo-business-jidori-onsen-stay": [
    { key: "dormy_miyazaki", query: "天然温泉 日向の湯 ドーミーイン宮崎" },
    { key: "miyazaki_kanko_hotel", query: "天然温泉”たまゆらの湯” 宮崎観光ホテル" },
    { key: "art_hotel_miyazaki", query: "アートホテル宮崎 スカイタワー" }
  ]
};

async function run() {
  const results = {};
  for (const [slug, list] of Object.entries(queries)) {
    results[slug] = [];
    console.log(`\nFetching for slug: ${slug}`);
    for (const item of list) {
      console.log(`  Searching: ${item.query}...`);
      const hotels = await searchRakutenHotels(item.query, 1);
      if (!hotels || hotels.length === 0) {
        console.error(`  ERROR: Not found for ${item.query}`);
      } else {
        const h = hotels[0];
        console.log(`  -> Found: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage})`);
        results[slug].push({
          key: item.key,
          searchQuery: item.query,
          hotelNo: h.hotelNo,
          hotelName: h.hotelName,
          hotelKanaName: h.hotelKanaName,
          hotelImageUrl: h.hotelImageUrl,
          roomImageUrl: h.roomImageUrl || h.hotelImageUrl,
          reviewAverage: h.reviewAverage,
          reviewCount: h.reviewCount,
          hotelMinCharge: h.hotelMinCharge,
          address1: h.address1,
          address2: h.address2,
          access: h.access,
          nearestStation: h.nearestStation,
          hotelSpecial: h.hotelSpecial,
          affiliateUrl: h.affiliateUrl
        });
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync('batch6_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch6_hotels.json successfully!');
}

run().catch(console.error);
