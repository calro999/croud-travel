const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  let list = await searchRakutenHotels('神戸 三宮 ホテル', 3);
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('神戸ベイシェラトン', 3);
  }
  if (list && list.length > 0) {
    const hotel = list[0];
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['sake_nada'] = {
      ...hotel,
      label: '兵庫県神戸市東灘区・灘区ふるさと納税・日本一の酒どころ「灘五郷」酒蔵めぐりと神戸牛・神戸名門ホテル'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log(`✓ Fixed sake_nada: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
  }
}
fix();
