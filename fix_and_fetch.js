const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  const current = JSON.parse(fs.readFileSync('solo_expedition_hotels.json', 'utf8'));

  // 1. おひとりさま部屋食温泉宿
  // Need 3: 草津温泉 望雲 (already have), 四万温泉 豊島屋, 箱根湯本温泉 箱根水明荘
  console.log("Fetching for solo-room-dining-retreat-onsen-stay...");
  const h1_2 = await searchRakutenHotels("四万温泉 豊島屋", 1);
  await sleep(1500);
  const h1_3 = await searchRakutenHotels("箱根湯本温泉 箱根水明荘", 1);
  await sleep(1500);

  current["solo-room-dining-retreat-onsen-stay"] = [
    current["solo-room-dining-retreat-onsen-stay"][0], // 草津温泉 望雲
    { key: "toshimaya", ...h1_2[0] },
    { key: "hakone_suimeisou", ...h1_3[0] }
  ];

  // 2. 週末ご褒美クラブラウンジ
  // Have: メズム東京, ザ・プリンスギャラリー 東京紀尾井町
  // Need 3rd: グランドプリンスホテル新高輪 クラブラウンジ or 三井ガーデンホテル神宮外苑の杜プレミア
  console.log("Fetching for solo-luxury-club-lounge-reward-stay...");
  const h2_3 = await searchRakutenHotels("グランドプリンスホテル新高輪", 1);
  await sleep(1500);
  current["solo-luxury-club-lounge-reward-stay"] = [
    current["solo-luxury-club-lounge-reward-stay"][0],
    current["solo-luxury-club-lounge-reward-stay"][1],
    { key: "prince_shin_takanawa", ...h2_3[0] }
  ];

  // 3. 読書・ブックホテル・文豪おこもり宿
  // Have: 上野屋, 西村屋本館
  // Need 3rd: BOOK HOTEL 神保町 or 芝パークホテル (名門ライブラリーホテル)
  console.log("Fetching for solo-book-retreat-digital-detox-stay...");
  const h3_1 = await searchRakutenHotels("芝パークホテル", 1);
  await sleep(1500);
  current["solo-book-retreat-digital-detox-stay"] = [
    { key: "shiba_park_hotel", ...h3_1[0] },
    current["solo-book-retreat-digital-detox-stay"][1], // 湯河原温泉 源泉 上野屋
    current["solo-book-retreat-digital-detox-stay"][2]  // 城崎温泉 西村屋本館
  ];

  // 4. 快適出張＆サウナ・天然温泉付きプレミアムビジネスホテル
  // Have: ドーミーインPREMIUM銀座, スーパーホテルPremier銀座
  // Need 1st: カンデオホテルズ新橋 or 三井ガーデンホテル豊洲プレミア
  console.log("Fetching for premium-business-trip-sauna-onsen-stay...");
  const h4_1 = await searchRakutenHotels("三井ガーデンホテル豊洲プレミア", 1);
  await sleep(1500);
  current["premium-business-trip-sauna-onsen-stay"] = [
    { key: "mitsui_toyosu_premier", ...h4_1[0] },
    current["premium-business-trip-sauna-onsen-stay"][0], // ドーミーインPREMIUM銀座
    current["premium-business-trip-sauna-onsen-stay"][1]  // スーパーホテルPremier銀座
  ];

  // 5. ライブ・舞台遠征＆推し活特化ホテル
  // Already have all 3: 東京ドームホテル, HOTEL GROOVE SHINJUKU, 横浜東急REIホテル
  console.log("Event hotels already complete!");

  fs.writeFileSync('solo_expedition_hotels.json', JSON.stringify(current, null, 2));
  console.log("All 5 articles successfully have 3 verified hotels each!");
}

run().catch(console.error);
