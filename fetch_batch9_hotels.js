const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 滋賀・大津＆おごと温泉 ひとり旅・琵琶湖パノラマ・近江牛・天然温泉
  "shiga-biwako-solo-retreat-lakeview-onsen-stay": [
    { key: "biwako_hotel", query: "琵琶湖ホテル" },
    { key: "biwako_otsu_prince", query: "びわ湖大津プリンスホテル" },
    { key: "ogoto_ryokusuitei", query: "おごと温泉 びわこ緑水亭" }
  ],
  // 2. 福井・福井駅＆片町 出張・北陸新幹線延伸・越前ガニ・越前おろしそば
  "fukui-solo-business-echizen-soba-stay": [
    { key: "courtyard_fukui", query: "コートヤード・バイ・マリオット福井" },
    { key: "manten_fukui", query: "福井マンテンホテル駅前" },
    { key: "route_inn_fukui", query: "ホテルルートイン福井駅前" }
  ],
  // 3. 山形・山形駅＆七日町 出張・山形牛・米沢牛・山形ラーメン・天然温泉
  "yamagata-solo-business-yamagatagyu-ramen-stay": [
    { key: "metropolitan_yamagata", query: "ホテルメトロポリタン山形" },
    { key: "richmond_yamagata", query: "リッチモンドホテル山形駅前" },
    { key: "yamagata_grand_hotel", query: "山形グランドホテル" }
  ],
  // 4. 福島・郡山駅＆中通り 出張・東北の十字路・大浴場・郡山ブラック
  "koriyama-solo-business-crossroad-gourmet-stay": [
    { key: "daiwa_koriyama", query: "ダイワロイネットホテル郡山駅前" },
    { key: "global_view_koriyama", query: "ホテルグローバルビュー郡山" },
    { key: "koriyama_view_annex", query: "郡山ビューホテルアネックス" }
  ],
  // 5. 鹿児島・霧島温泉郷 ひとり旅・坂本龍馬新婚旅行・源泉泥湯・湯治リトリート
  "kirishima-solo-retreat-doroyu-onsen-stay": [
    { key: "kirishima_hotel", query: "霧島ホテル" },
    { key: "lavista_kirishima", query: "ラビスタ霧島ヒルズ" },
    { key: "ryokojin_sanso", query: "旅行人山荘" }
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

  fs.writeFileSync('batch9_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch9_hotels.json successfully!');
}

run().catch(console.error);
