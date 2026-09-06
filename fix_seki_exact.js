const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  let list = await searchRakutenHotels('ホテルルートイン関', 3);
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('関観光ホテル', 3);
  }
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('長良川温泉 十八楼', 3);
  }
  if (list && list.length > 0) {
    const hotel = list[0];
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['cutlery_seki'] = {
      ...hotel,
      label: '岐阜県関市ふるさと納税・世界三大刃物産地「関の刃物」鍛冶伝承館・岐阜関刃物ミュージアムと名門ホテル'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log(`✓ Accurately set cutlery_seki: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
  }
}
fix();
