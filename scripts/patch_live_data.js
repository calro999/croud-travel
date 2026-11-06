const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

async function main() {
  const dataPath = path.join(__dirname, 'batch_306_308_live_data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // 1. ハウステンボスにフォレストヴィラを追加
  console.log('Fetching フォレストヴィラ...');
  const hForest = await searchRakutenHotels('フォレストヴィラ ハウステンボス', 1);
  if (hForest && hForest.length > 0) {
    data['winter-nagasaki-huistenbosch-christmas-illumination-hotels-guide'].hotels.push(hForest[0]);
    console.log('Added:', hForest[0].hotelName);
  }

  // 2. あしかが・佐野にカンデオホテルズ佐野とHOTEL R9佐野天神を追加
  console.log('Fetching カンデオホテルズ佐野 & HOTEL R9 佐野天神...');
  const hCandeo = await searchRakutenHotels('CANDEO HOTELS 佐野', 1);
  if (hCandeo && hCandeo.length > 0) {
    data['winter-tochigi-ashikaga-flowerpark-illumination-sano-hotels-guide'].hotels.push(hCandeo[0]);
    console.log('Added:', hCandeo[0].hotelName);
  }
  const hR9 = await searchRakutenHotels('HOTEL R9 The Yard 佐野天神', 1);
  if (hR9 && hR9.length > 0) {
    data['winter-tochigi-ashikaga-flowerpark-illumination-sano-hotels-guide'].hotels.push(hR9[0]);
    console.log('Added:', hR9[0].hotelName);
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Updated batch_306_308_live_data.json successfully!');
}

main().catch(console.error);
