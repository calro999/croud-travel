const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function fix() {
  await sleep(2000);
  console.log('Searching fire_nachi with delay...');
  const res = await searchRakutenHotels('勝浦温泉 ホテル浦島 和歌山', 3);
  if (res && res.length > 0) {
    const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
    const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
    data['fire_nachi'] = {
      ...res[0],
      label: '和歌山県那智勝浦町ふるさと納税・世界遺産熊野の大松明「那智の火祭」那智の滝と勝浦マグロ名門宿ホテル浦島'
    };
    fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
    console.log('✓ Successfully set fire_nachi:', res[0].hotelName);
  } else {
    console.log('Fallback to general Katsuura onsen...');
    await sleep(2000);
    const res2 = await searchRakutenHotels('那智勝浦 ホテル', 3);
    if (res2 && res2.length > 0) {
      const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
      const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
      data['fire_nachi'] = {
        ...res2[0],
        label: '和歌山県那智勝浦町ふるさと納税・世界遺産熊野の大松明「那智の火祭」那智の滝と勝浦マグロ名門ホテル'
      };
      fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
      console.log('✓ Successfully set fire_nachi (fallback):', res2[0].hotelName);
    }
  }
}
fix();
