const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 横浜・みなとみらい＆出張・Kアリーナ遠征・夜景バルコニー
  "yokohama-minatomirai-solo-nightview-luxury-stay": [
    { key: "yokohama_bay_tokyu", query: "横浜ベイホテル東急" },
    { key: "westin_yokohama", query: "ウェスティンホテル横浜" },
    { key: "mitsui_yokohama_premier", query: "三井ガーデンホテル横浜みなとみらいプレミア" }
  ],
  // 2. 静岡・浜松 出張＆うなぎ・サウナ・アクトシティ
  "hamamatsu-solo-business-actcity-unagi-stay": [
    { key: "okura_hamamatsu", query: "オークラアクトシティホテル浜松" },
    { key: "ana_crowne_hamamatsu", query: "ホテルクラウンパレス浜松" },
    { key: "concorde_hamamatsu", query: "ホテルコンコルド浜松" }
  ],
  // 3. 岡山・倉敷 出張＆美観地区・後楽園・ひとり旅
  "okayama-kurashiki-solo-retreat-culture-stay": [
    { key: "granvia_okayama", query: "ホテルグランヴィア岡山" },
    { key: "kurashiki_kokusai", query: "倉敷国際ホテル" },
    { key: "mitsui_okayama", query: "三井ガーデンホテル岡山" }
  ],
  // 4. 熊本・辛島町＆熊本城 出張・スカイスパ・馬刺しグルメ
  "kumamoto-solo-business-skyspa-gourmet-stay": [
    { key: "candeo_kumamoto", query: "CANDEO HOTELS 熊本新市街" },
    { key: "dormy_kumamoto", query: "天然温泉 六花の湯 ドーミーイン熊本" },
    { key: "kumamoto_castle_hotel", query: "熊本ホテルキャッスル" }
  ],
  // 5. 鹿児島・天文館＆中央駅 出張・桜島展望温泉・黒豚美食
  "kagoshima-solo-retreat-sakurajima-onsen-stay": [
    { key: "shiroyama_hotel", query: "SHIROYAMA HOTEL kagoshima" },
    { key: "solaria_kagoshima", query: "ソラリア西鉄ホテル鹿児島" },
    { key: "dormy_kagoshima", query: "天然温泉 霧桜の湯 ドーミーイン鹿児島" }
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

  fs.writeFileSync('batch4_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch4_hotels.json successfully!');
}

run().catch(console.error);
