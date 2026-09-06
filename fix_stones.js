const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function fix() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  // 1. stone_sado (佐渡赤玉石)
  await sleep(1500);
  console.log('Searching for Sado hotel...');
  let res = await searchRakutenHotels('佐渡 温泉 旅館', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('佐渡 ホテル', 3);
  if (res && res.length > 0) {
    data['stone_sado'] = {
      ...res[0],
      label: '新潟県佐渡市ふるさと納税・日本三大銘石として庭園を彩る朱紅の美石「佐渡赤玉石」佐渡金山世界遺産と日本海鮮・佐渡名門ホテル'
    };
    console.log('✓ Fixed stone_sado:', res[0].hotelName);
  }

  // 2. stone_ibi (揖斐川石・岐阜)
  await sleep(2000);
  console.log('Searching for Ibi/Gifu hotel...');
  let res2 = await searchRakutenHotels('養老温泉 ホテル 岐阜', 3);
  if (!res2 || res2.length === 0) res2 = await searchRakutenHotels('大垣 ホテル 岐阜 駅前', 3);
  if (res2 && res2.length > 0) {
    data['stone_ibi'] = {
      ...res2[0],
      label: '岐阜県揖斐川町・大垣市ふるさと納税・菊花石や水石の最高峰「揖斐川石」西国三十三所満願谷汲山華厳寺と濃尾平野名門ホテル'
    };
    console.log('✓ Fixed stone_ibi:', res2[0].hotelName);
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
  console.log('Round 34 missing hotels completely fixed.');
}
fix();
