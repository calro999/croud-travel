const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  console.log("Fetching 静岡 伊豆 修善寺 温泉...");
  const shuzenjiHotels = await searchRakutenHotels("伊豆 修善寺 温泉 旅館", 3);
  if (shuzenjiHotels && shuzenjiHotels.length > 0) {
    allSeasonal['furusato-tax-craft-beer-brewery-hotel-stay']['shuzenji_beer'] = {
      label: '静岡県伊豆市ふるさと納税・クラフトビールタップルーム＆狩野川沿いの名湯',
      hotels: shuzenjiHotels
    };
    console.log("SUCCESS shuzenji_beer:", shuzenjiHotels[0].hotelName);
  }

  await sleep(1500);

  console.log("Fetching 静岡 沼津 港 ホテル...");
  const numazuHotels = await searchRakutenHotels("静岡 沼津 港 ホテル", 3);
  if (numazuHotels && numazuHotels.length > 0) {
    allSeasonal['furusato-tax-morning-market-hamayaki-seafood-inn-stay']['numazu_market'] = {
      label: '静岡県沼津市ふるさと納税・沼津港市場直結の深海魚・アジ干物・海鮮浜焼きステイ',
      hotels: numazuHotels
    };
    console.log("SUCCESS numazu_market:", numazuHotels[0].hotelName);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

main();
