const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 長崎・長崎駅＆思案橋 出張・西九州新幹線・ちゃんぽん・天然温泉
  "nagasaki-solo-business-chanpon-nightview-stay": [
    { key: "hilton_nagasaki", query: "ヒルトン長崎" },
    { key: "dormy_nagasaki", query: "天然温泉 鶴港の湯 ドーミーインPREMIUM長崎駅前" },
    { key: "hotel_new_nagasaki", query: "ホテルニュー長崎" }
  ],
  // 2. 秋田・中通＆川反 出張・きりたんぽ・比内地鶏・天然温泉サウナ
  "akita-solo-business-kiritanpo-onsen-stay": [
    { key: "metropolitan_akita", query: "ホテルメトロポリタン秋田" },
    { key: "dormy_akita", query: "ドーミーイン秋田" },
    { key: "akita_castle_hotel", query: "秋田キャッスルホテル" }
  ],
  // 3. 高知・帯屋町＆はりまや橋 出張・ひろめ市場・カツオ塩たたき・天然温泉
  "kochi-solo-business-hirome-katsuo-stay": [
    { key: "dormy_kochi", query: "天然温泉 紺碧の湯 ドーミーイン高知" },
    { key: "jyoseikan_kochi", query: "城西館" },
    { key: "clement_inn_kochi", query: "JRクレメントイン高知" }
  ],
  // 4. 青森・新町＆アスパム 出張・のっけ丼・十三湖しじみ・陸奥湾海鮮
  "aomori-solo-business-nokkedon-seafood-stay": [
    { key: "daiwa_aomori", query: "ダイワロイネットホテル青森" },
    { key: "richmond_aomori", query: "リッチモンドホテル青森" },
    { key: "jal_city_aomori", query: "ホテルJALシティ青森" }
  ],
  // 5. 大分・府内町＆大分駅 出張・屋上天然温泉・関アジ関サバ・とり天
  "oita-solo-business-rooftop-onsen-gourmet-stay": [
    { key: "blossom_oita", query: "JR九州ホテル ブラッサム大分" },
    { key: "nikko_oita", query: "ホテル日航大分 オアシスタワー" },
    { key: "daiwa_oita", query: "ダイワロイネットホテル大分" }
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

  fs.writeFileSync('batch8_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch8_hotels.json successfully!');
}

run().catch(console.error);
