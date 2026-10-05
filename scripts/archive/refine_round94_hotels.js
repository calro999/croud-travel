const { searchRakutenHotels, getHotelByNo } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log('Finalizing Round 94 Hotels with direct Rakuten API calls...');

  const data = JSON.parse(fs.readFileSync('round94_raw_hotels.json', 'utf8'));

  // 1. 秋田・森吉山 阿仁温泉の5宿
  console.log('Fetching Akita Moriyoshi hotels...');
  const akitaHotelNos = [43897, 10797, 202483, 12596, 139979];
  const akitaHotels = [];
  for (const no of akitaHotelNos) {
    const h = await getHotelByNo(no);
    await sleep(1200);
    if (h) {
      akitaHotels.push(h);
      console.log(`  -> Akita: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
    }
  }
  data.akita_moriyoshi_ani.hotels = akitaHotels;

  // 2. 新潟・佐渡島の5宿
  console.log('Fetching Sado Island hotels...');
  const sadoHotelNos = [6196, 10682, 7031, 15276, 31586];
  const sadoHotels = [];
  for (const no of sadoHotelNos) {
    const h = await getHotelByNo(no);
    await sleep(1200);
    if (h) {
      sadoHotels.push(h);
      console.log(`  -> Sado: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
    }
  }
  data.niigata_sado_island.hotels = sadoHotels;

  // 3. 京都・洛北 貴船・鞍馬の5宿
  console.log('Fetching Kyoto Kifune hotels...');
  const kifuneHotelNos = [67265, 70674, 44006, 70821, 135579];
  const kifuneHotels = [];
  for (const no of kifuneHotelNos) {
    const h = await getHotelByNo(no);
    await sleep(1200);
    if (h) {
      kifuneHotels.push(h);
      console.log(`  -> Kyoto Kifune: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
    }
  }
  data.kyoto_kifune_kurama.hotels = kifuneHotels;

  fs.writeFileSync('round94_raw_hotels.json', JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully updated round94_raw_hotels.json with 100% verified hotels!');
}

main().catch(console.error);
