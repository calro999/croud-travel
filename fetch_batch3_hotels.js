const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 仙台・出張＆ひとり旅 牛タン・国分町＆天然温泉サウナ
  "sendai-solo-business-onsen-gourmet-stay": [
    { key: "westin_sendai", query: "ウェスティンホテル仙台" },
    { key: "dormy_sendai_ekimae", query: "天然温泉 萩の湯 ドーミーイン仙台駅前" },
    { key: "monterey_sendai", query: "ホテルモントレ仙台" }
  ],
  // 2. 広島・八丁堀＆出張・お好み焼き・スカイスパ
  "hiroshima-solo-business-skyspa-gourmet-stay": [
    { key: "sheraton_hiroshima", query: "シェラトングランドホテル広島" },
    { key: "candeo_hiroshima", query: "CANDEO HOTELS 広島八丁堀" },
    { key: "dormy_hiroshima", query: "安芸の湯 ドーミーイン広島" }
  ],
  // 3. 神戸・ハーバーランド＆三宮 ご褒美オーシャン夜景・天然温泉
  "kobe-solo-luxury-oceanview-onsen-stay": [
    { key: "kobe_minato_onsen_ren", query: "神戸みなと温泉 蓮" },
    { key: "lasuite_kobe", query: "ホテル ラ・スイート神戸ハーバーランド" },
    { key: "meriken_oriental", query: "神戸メリケンパークオリエンタルホテル" }
  ],
  // 4. 金沢・近江町＆香林坊 ひとり旅・美肌天然温泉・のどぐろ美食
  "kanazawa-solo-retreat-onsen-gourmet-stay": [
    { key: "nono_kanazawa", query: "天然温泉 加賀の宝泉 御宿 野乃金沢" },
    { key: "mitsui_kanazawa", query: "三井ガーデンホテル金沢" },
    { key: "forza_kanazawa", query: "ホテルフォルツァ金沢" }
  ],
  // 5. 那覇・国際通り＆ワーケーション オーシャンビュー・天然温泉
  "okinawa-naha-solo-workation-ocean-stay": [
    { key: "senagajima_hotel", query: "琉球温泉 瀬長島ホテル" },
    { key: "blossom_naha", query: "JR九州ホテル ブラッサム那覇" },
    { key: "anteroom_naha", query: "ホテル アンテルーム 那覇" }
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

  fs.writeFileSync('batch3_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch3_hotels.json successfully!');
}

run().catch(console.error);
