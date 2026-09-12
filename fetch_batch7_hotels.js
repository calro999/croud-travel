const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 函館・函館駅＆ベイエリア 朝食バイキング・赤レンガ・展望温泉
  "hakodate-solo-retreat-breakfast-onsen-stay": [
    { key: "century_marina_hakodate", query: "センチュリーマリーナ函館" },
    { key: "lavista_hakodate_annex", query: "ラビスタ函館ベイ" },
    { key: "hakodate_umi_no_kaze", query: "HAKODATE 海峡の風" }
  ],
  // 2. 盛岡・開運橋＆出張 三大麺（冷麺・わんこそば・じゃじゃ麺）・天然温泉
  "morioka-solo-business-noodles-onsen-stay": [
    { key: "daiwa_morioka", query: "ダイワロイネットホテル盛岡駅前" },
    { key: "dormy_morioka", query: "天然温泉 さんさの湯 ドーミーイン盛岡" },
    { key: "metropolitan_morioka", query: "ホテルメトロポリタン盛岡 本館" }
  ],
  // 3. 高山・飛騨高山＆古い町並み ひとり旅・飛騨牛会席・美肌温泉・小京都おこもり
  "takayama-solo-retreat-hidagyu-onsen-stay": [
    { key: "honjin_hiranoya", query: "本陣平野屋 花兆庵" },
    { key: "hidanotei_hanaougi", query: "飛騨亭 花扇" },
    { key: "alpina_takayama", query: "スパホテルアルピナ飛騨高山" }
  ],
  // 4. 姫路・白鷺城＆播磨 出張・姫路城ビュー・穴子めし・天然温泉
  "himeji-solo-business-castle-onsen-stay": [
    { key: "monterey_himeji", query: "ホテルモントレ姫路" },
    { key: "dormy_himeji", query: "天然温泉 白鷺の湯 ドーミーイン姫路" },
    { key: "nikko_himeji", query: "ホテル日航姫路" }
  ],
  // 5. 徳島・眉山＆阿波おどり 出張・阿波尾鶏・鳴門海鮮・リバーサイド天然温泉
  "tokushima-solo-business-awataisen-onsen-stay": [
    { key: "clement_tokushima", query: "JRホテルクレメント徳島" },
    { key: "granvrio_tokushima", query: "徳島グランヴィリオホテル" },
    { key: "daiwa_tokushima", query: "ダイワロイネットホテル徳島駅前" }
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

  fs.writeFileSync('batch7_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch7_hotels.json successfully!');
}

run().catch(console.error);
