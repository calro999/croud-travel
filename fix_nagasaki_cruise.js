const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  console.log('Searching for luxury cruise hotel in Nagasaki...');
  let res = await searchRakutenHotels('ホテルモントレ長崎', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('長崎 ベイスイート ホテル', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('長崎港 ホテル 夜景', 3);
  if (res && res.length > 0) {
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['cruise_nagasaki'] = {
      ...res[0],
      label: '長崎県長崎市ふるさと納税・軍艦島上陸クルーズと長崎港トワイライト夜景・長崎名門ホテル'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log('✓ Successfully refined cruise_nagasaki:', res[0].hotelName);
  }
}
fix();
