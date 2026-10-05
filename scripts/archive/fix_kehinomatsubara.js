const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  const query = '敦賀 ホテル ルートイン';
  console.log(`Searching for: ${query}...`);
  const list = await searchRakutenHotels(query, 3);
  if (list && list.length > 0) {
    currentData['coast_kehinomatsubara'] = {
      ...list[0],
      label: '福井県敦賀市ふるさと納税・白砂青松の景勝地「気比の松原」越前ガニ・若狭ふぐとホテルルートイン敦賀駅前'
    };
    console.log(`✓ Fixed coast_kehinomatsubara: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  } else {
    console.error('Failed to find hotel for coast_kehinomatsubara');
  }
}

main();
