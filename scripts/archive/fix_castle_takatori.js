const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  const query = '奈良 橿原 ホテル';
  console.log(`Searching for: ${query}...`);
  const list = await searchRakutenHotels(query, 3);
  if (list && list.length > 0) {
    currentData['castle_takatori'] = {
      ...list[0],
      label: '奈良県高取町・橿原市ふるさと納税・日本一の比高390mを誇る難攻不落の山城「大和高取城」大和三山と橿原ホテルステイ'
    };
    console.log(`✓ Fixed castle_takatori: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  } else {
    console.error('Failed for castle_takatori');
  }
}

main();
