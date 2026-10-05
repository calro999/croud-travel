const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  const dataPath = path.join(__dirname, 'round99_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // 1. Tochigi: ホテルセレクトイン佐野駅前
  if (data.tochigi_ashikaga_flowerpark.hotels.length < 5) {
    const res = await searchRakutenHotels('ホテルセレクトイン佐野駅前', 1);
    if (res && res[0]) {
      data.tochigi_ashikaga_flowerpark.hotels.push(res[0]);
      console.log('Added Tochigi:', res[0].hotelName);
    }
  }

  // 2. Shizuoka: 川根温泉ふれあいコテージ
  if (data.shizuoka_sumatakyo_onsen.hotels.length < 5) {
    const res = await searchRakutenHotels('川根温泉ふれあいコテージ', 1);
    if (res && res[0]) {
      data.shizuoka_sumatakyo_onsen.hotels.push(res[0]);
      console.log('Added Shizuoka:', res[0].hotelName);
    }
  }

  // 3. Kochi: ホテルＴＡＭＡＩ
  if (data.kochi_muroto_daruma.hotels.length < 5) {
    const res = await searchRakutenHotels('ホテルＴＡＭＡＩ', 1);
    if (res && res[0]) {
      data.kochi_muroto_daruma.hotels.push(res[0]);
      console.log('Added Kochi:', res[0].hotelName);
    }
  }

  // 4. Yamanashi: １０００Ｍのおもてなし　八ヶ岳　ホテル風か
  if (data.yamanashi_kiyosato_yatsugatake.hotels.length < 5) {
    const res = await searchRakutenHotels('八ヶ岳 ホテル風か', 1);
    if (res && res[0]) {
      data.yamanashi_kiyosato_yatsugatake.hotels.push(res[0]);
      console.log('Added Yamanashi:', res[0].hotelName);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Updated round99_raw_hotels.json successfully!');
  for (const k of Object.keys(data)) {
    console.log(`${k}: ${data[k].hotels.length} hotels`);
  }
}

fix().catch(console.error);
