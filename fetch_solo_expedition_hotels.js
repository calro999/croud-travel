const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const articleHotelQueries = {
  // 1. おひとりさま部屋食・おこもり温泉宿
  "solo-room-dining-retreat-onsen-stay": [
    { key: "bouun", query: "草津温泉 望雲" },
    { key: "toshimaya", query: "四万温泉 時わすれ 開花亭" },
    { key: "hakone_suimeisou", query: "箱根水明荘" }
  ],
  // 2. 週末ご褒美クラブラウンジ＆高層ホテルステイ
  "solo-luxury-club-lounge-reward-stay": [
    { key: "mesm_tokyo", query: "メズム東京" },
    { key: "the_prince_gallery", query: "ザ・プリンスギャラリー 東京紀尾井町" },
    { key: "yokohama_intercontinental_pier8", query: "InterContinental Yokohama Pier 8" }
  ],
  // 3. 大人の読書・デジタルデトックス・文豪おこもり宿
  "solo-book-retreat-digital-detox-stay": [
    { key: "hakone_honbako", query: "箱根本箱" },
    { key: "uenoya", query: "湯河原温泉 源泉上野屋" },
    { key: "kinosaki_nishimuraya", query: "城崎温泉 西村屋本館" }
  ],
  // 4. 快適出張＆サウナ・天然温泉付きプレミアムビジネスホテル
  "premium-business-trip-sauna-onsen-stay": [
    { key: "candeo_roppongi", query: "カンデオホテルズ東京六本木" },
    { key: "dormy_inn_premium_ginza", query: "ドーミーインPREMIUM銀座" },
    { key: "super_hotel_premier_ginza", query: "スーパーホテルPremier銀座" }
  ],
  // 5. ライブ・舞台遠征＆推し活特化ホテル
  "event-expedition-oshi-live-comfort-stay": [
    { key: "tokyo_dome_hotel", query: "東京ドームホテル" },
    { key: "hotel_groove_shinjuku", query: "HOTEL GROOVE SHINJUKU" },
    { key: "yokohama_tokyu_rei", query: "横浜東急REIホテル" }
  ]
};

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchAll() {
  const results = {};
  for (const [slug, list] of Object.entries(articleHotelQueries)) {
    results[slug] = [];
    console.log(`\nFetching for slug: ${slug}`);
    for (const item of list) {
      console.log(`  Searching: ${item.query}...`);
      let hotels = await searchRakutenHotels(item.query, 1);
      if (!hotels || hotels.length === 0) {
        console.warn(`  Warning: Not found for ${item.query}`);
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
      await sleep(1000);
    }
  }

  fs.writeFileSync('solo_expedition_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSuccessfully saved to solo_expedition_hotels.json!');
}

fetchAll().catch(console.error);
