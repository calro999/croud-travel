const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  let list = await searchRakutenHotels('鳥取市 ホテル 温泉 鳥取砂丘', 3);
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('鳥取シティホテル', 3);
  }
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('ホテルモナーク鳥取', 3);
  }
  if (list && list.length > 0) {
    const hotel = list[0];
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['dune_tottori'] = {
      ...hotel,
      label: '鳥取県鳥取市ふるさと納税・日本最大級の起伏美「鳥取砂丘」ラクダ遊歩と松葉ガニ・鳥取名門温泉ホテル'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log(`✓ Fixed dune_tottori: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
  }
}
fix();
