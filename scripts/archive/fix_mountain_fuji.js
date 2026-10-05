const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  const query = '河口湖 富士山 温泉 旅館';
  console.log(`Searching for: ${query}...`);
  const list = await searchRakutenHotels(query, 3);
  if (list && list.length > 0) {
    currentData['mountain_fuji'] = {
      ...list[0],
      label: '山梨県富士河口湖町・富士吉田市ふるさと納税・日本一の霊峰と湖畔パノラマ「富士山」逆さ富士を望む名湯富士レイクホテル'
    };
    console.log(`✓ Fixed mountain_fuji: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  } else {
    console.error('Failed to find hotel for mountain_fuji');
  }
}

main();
