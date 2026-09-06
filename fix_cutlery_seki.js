const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  console.log('Searching for cutlery_seki hotel...');
  let list = await searchRakutenHotels('関市 岐阜 ホテル', 3);
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('岐阜 関 ホテルルートイン', 3);
  }
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('都ホテル 岐阜長良川', 3);
  }
  if (list && list.length > 0) {
    const hotel = list[0];
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['cutlery_seki'] = {
      ...hotel,
      label: '岐阜県関市・岐阜市ふるさと納税・世界三大刃物産地「関の刃物」岐阜関刃物ミュージアムと都ホテル岐阜長良川'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log(`✓ Fixed cutlery_seki: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
  } else {
    console.error('Failed to find hotel for cutlery_seki');
  }
}
fix();
