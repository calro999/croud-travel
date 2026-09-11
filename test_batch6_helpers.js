const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  // Matsuyama 3rd
  const m = await searchRakutenHotels('松山天然温泉 石手の湯 ドーミーイン松山', 1);
  console.log('Dormy Matsuyama:', m[0]?.hotelName, m[0]?.hotelNo);
  await sleep(1500);

  // Hachinohe 3rd
  const h = await searchRakutenHotels('天然温泉 蕪島の湯 ドーミーイン本八戸', 1);
  console.log('Dormy Hachinohe:', h[0]?.hotelName, h[0]?.hotelNo);
  await sleep(1500);

  const h2 = await searchRakutenHotels('八戸 プラザホテル', 1);
  console.log('Hachinohe Plaza:', h2[0]?.hotelName, h2[0]?.hotelNo);
  await sleep(1500);

  // Miyazaki
  const my1 = await searchRakutenHotels('フェニックス・シーガイア・リゾート', 1);
  console.log('Seagaia:', my1[0]?.hotelName, my1[0]?.hotelNo);
  await sleep(1500);

  const my2 = await searchRakutenHotels('宮崎観光ホテル', 1);
  console.log('Miyazaki Kanko:', my2[0]?.hotelName, my2[0]?.hotelNo);
  await sleep(1500);

  const my3 = await searchRakutenHotels('アートホテル宮崎 スカイタワー', 1);
  console.log('Art Hotel Miyazaki:', my3[0]?.hotelName, my3[0]?.hotelNo);
}

run();
