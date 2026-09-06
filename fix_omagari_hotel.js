const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  console.log('Searching for exact Omagari hotel...');
  let res = await searchRakutenHotels('大曲 ホテル 秋田 駅前', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('大曲 ホテル ルートイン', 3);
  if (res && res.length > 0) {
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['fireworks_omagari'] = {
      ...res[0],
      label: '秋田県大仙市ふるさと納税・全国花火師の魂の競演日本三大花火「大曲の花火」秋田錦牛と大曲駅前名門ホテル'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log('✓ Successfully refined fireworks_omagari:', res[0].hotelName);
  }
}
fix();
