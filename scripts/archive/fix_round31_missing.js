const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  // 1. forest_hiba (むつ市・青森ヒバ)
  console.log('Searching forest_hiba...');
  let res = await searchRakutenHotels('むつグランドホテル', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('青森 むつ ホテル', 3);
  if (res && res.length > 0) {
    data['forest_hiba'] = {
      ...res[0],
      label: '青森県むつ市・下北半島ふるさと納税・日本三大美林「青森ヒバ」天然アロマヒバ風呂と名門むつグランドホテル'
    };
    console.log('✓ Fixed forest_hiba:', res[0].hotelName);
  }

  // 2. bridge_saruhashi (大月・猿橋・石和・甲府)
  console.log('Searching bridge_saruhashi...');
  res = await searchRakutenHotels('石和温泉 ホテル 山梨', 3);
  if (res && res.length > 0) {
    data['bridge_saruhashi'] = {
      ...res[0],
      label: '山梨県大月市・笛吹市ふるさと納税・奇跡の刎橋構造日本三奇橋「甲斐の猿橋」と石和温泉名門宿'
    };
    console.log('✓ Fixed bridge_saruhashi:', res[0].hotelName);
  }

  // 3. fire_nachi (那智勝浦・熊野)
  console.log('Searching fire_nachi...');
  res = await searchRakutenHotels('勝浦温泉 和歌山 旅館', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('ホテル浦島', 3);
  if (res && res.length > 0) {
    data['fire_nachi'] = {
      ...res[0],
      label: '和歌山県那智勝浦町ふるさと納税・世界遺産熊野の大松明「那智の火祭」那智の滝と勝浦マグロ名門宿'
    };
    console.log('✓ Fixed fire_nachi:', res[0].hotelName);
  }

  // 4. fire_kurama (京都・鞍馬・貴船・大原)
  console.log('Searching fire_kurama...');
  res = await searchRakutenHotels('京都 大原 温泉 旅館', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('京都 鞍馬 貴船 旅館', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('京都 旅館 天然温泉', 3);
  if (res && res.length > 0) {
    data['fire_kurama'] = {
      ...res[0],
      label: '京都府京都市左京区ふるさと納税・夜空を焦がす大松明の奇祭「鞍馬の火祭」由岐神社と洛北の奥座敷隠れ家温泉旅館'
    };
    console.log('✓ Fixed fire_kurama:', res[0].hotelName);
  }

  // 5. bridge_kintaikyo (岩国錦帯橋至近へ高精度化)
  console.log('Searching bridge_kintaikyo...');
  res = await searchRakutenHotels('岩国国際観光ホテル', 3);
  if (!res || res.length === 0) res = await searchRakutenHotels('岩国 ホテル 山口', 3);
  if (res && res.length > 0) {
    data['bridge_kintaikyo'] = {
      ...res[0],
      label: '山口県岩国市ふるさと納税・錦川に架かる五連木造アーチ日本三大奇橋「錦帯橋」岩国城を望む名門ホテル'
    };
    console.log('✓ Refined bridge_kintaikyo:', res[0].hotelName);
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(data, null, 2));
  console.log('Round 31 hotels completely fixed and saved.');
}

fix();
