const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 新潟・万代＆古町 出張・日本酒利き酒・日本海鮮魚・天然温泉
  "niigata-solo-business-sake-seafood-stay": [
    { key: "nikko_niigata", query: "ホテル日航新潟" },
    { key: "dormy_niigata", query: "天然温泉 多宝の湯 ドーミーイン新潟" },
    { key: "art_hotel_niigata", query: "アートホテル新潟駅前" }
  ],
  // 2. 富山・新富町＆富山駅 出張・白えび・立山連峰ビュー・サウナ
  "toyama-solo-business-tateyama-sauna-stay": [
    { key: "nono_toyama", query: "天然温泉 剱の湯 御宿 野乃富山" },
    { key: "manten_toyama", query: "富山マンテンホテル" },
    { key: "gran_terrace_toyama", query: "ホテルグランテラス富山" }
  ],
  // 3. 松本・城下町＆信州 ひとり旅・美ヶ原温泉・国宝松本城・民芸
  "matsumoto-solo-retreat-mingei-onsen-stay": [
    { key: "matsumoto_hotel_kagetsu", query: "松本ホテル花月" },
    { key: "shoho_matsumoto", query: "美ヶ原温泉 ホテル翔峰" },
    { key: "dormy_matsumoto", query: "天然温泉 梓の湯 ドーミーイン松本" }
  ],
  // 4. 高松・瓦町＆サンポート 出張・讃岐うどん巡り・瀬戸内海アート・温泉
  "takamatsu-solo-business-udon-art-stay": [
    { key: "clement_takamatsu", query: "JRホテルクレメント高松" },
    { key: "royal_park_takamatsu", query: "ロイヤルパークホテル高松" },
    { key: "dormy_takamatsu", query: "さぬきの湯 ドーミーイン高松" }
  ],
  // 5. 別府・鉄輪＆別府駅 ひとり旅・地獄めぐり・源泉掛け流しおこもり
  "beppu-solo-retreat-kakenagashi-jigoku-stay": [
    { key: "suginoi_hotel", query: "別府温泉 杉乃井ホテル" },
    { key: "amane_seikai", query: "潮騒の宿 晴海" },
    { key: "hotel_shiragiku", query: "別府温泉 ホテル白菊" }
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

  fs.writeFileSync('batch5_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch5_hotels.json successfully!');
}

run().catch(console.error);
