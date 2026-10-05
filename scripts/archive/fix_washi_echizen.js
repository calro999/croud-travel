const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  const query = '福井 武生 ホテル クラウンヒルズ';
  console.log(`Searching for: ${query}...`);
  const list = await searchRakutenHotels(query, 3);
  if (list && list.length > 0) {
    currentData['washi_echizen'] = {
      ...list[0],
      label: '福井県越前市ふるさと納税・1500年の技・最高品質の奉書紙「越前和紙の里」紙漉き体験とホテルクラウンヒルズ武生駅前'
    };
    console.log(`✓ Fixed washi_echizen: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  } else {
    console.error('Failed to find hotel for washi_echizen');
  }
}

main();
