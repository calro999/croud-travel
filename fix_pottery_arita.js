const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  const query = '佐賀 武雄温泉 旅館 京都屋 有田';
  console.log(`Searching for: ${query}...`);
  let list = await searchRakutenHotels(query, 3);
  if (!list || list.length === 0) {
    console.log('Trying fallback: 武雄温泉　大正屋...');
    list = await searchRakutenHotels('武雄温泉　大正屋', 3);
  }
  if (list && list.length > 0) {
    currentData['pottery_arita'] = {
      ...list[0],
      label: '佐賀県有田町・武雄市ふるさと納税・400年の磁器文化と120万人集う日本最大級「有田陶器市」美肌名湯と有田焼の器会席'
    };
    console.log(`✓ Fixed pottery_arita: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  } else {
    console.error('Failed to find hotel for pottery_arita');
  }
}

main();
