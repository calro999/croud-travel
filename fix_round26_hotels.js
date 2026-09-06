const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. port_kobe
  await sleep(2000);
  console.log('Fetching port_kobe with "神戸 メリケンパーク ホテル"...');
  let kobeHotels = await searchRakutenHotels('神戸 メリケンパーク ホテル', 3);
  if (kobeHotels && kobeHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-ports-waterfront-luxury-stay']['port_kobe'] = {
      label: '兵庫県神戸市中央区ふるさと納税・開港150年の国際貿易港「神戸港」メリケンパークパノラマと神戸牛鉄板焼きホテル',
      hotels: kobeHotels
    };
    console.log('port_kobe updated with 3 luxury hotels!');
  }

  // 2. tea_uji
  await sleep(2000);
  console.log('Fetching tea_uji with "宇治 旅館 京都"...');
  let ujiHotels = await searchRakutenHotels('宇治 旅館 京都', 3);
  if (ujiHotels && ujiHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-green-tea-regions-healing-stay']['tea_uji'] = {
      label: '京都府宇治市ふるさと納税・千年の茶どころ「宇治茶」本場抹茶スイーツめぐりと世界遺産平等院鳳凰堂・宇治川料理旅館',
      hotels: ujiHotels
    };
    console.log('tea_uji updated!');
  }

  // 3. castle_takamatsu
  await sleep(2000);
  console.log('Fetching castle_takamatsu with "高松港 ホテル 香川"...');
  let takamatsuHotels = await searchRakutenHotels('高松港 ホテル 香川', 3);
  if (takamatsuHotels && takamatsuHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-water-castles-seaside-stay']['castle_takamatsu'] = {
      label: '香川県高松市ふるさと納税・生駒親正公築城「高松城（玉藻城）」水門越しに瀬戸内海の多島美を望むベイサイド宿',
      hotels: takamatsuHotels
    };
    console.log('castle_takamatsu updated!');
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Round 26 hotels perfected!');
}

main();
