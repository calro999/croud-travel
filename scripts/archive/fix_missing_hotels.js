const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. beef_tankaku: 岩手 短角牛
  console.log('Fetching beef_tankaku with "短角牛 岩手 温泉"...');
  await sleep(1500);
  let tankakuHotels = await searchRakutenHotels('短角牛 岩手 温泉', 3);
  if (!tankakuHotels || tankakuHotels.length === 0) {
    tankakuHotels = await searchRakutenHotels('盛岡 短角牛 温泉', 3);
  }
  if (!tankakuHotels || tankakuHotels.length === 0) {
    tankakuHotels = await searchRakutenHotels('岩手 温泉 旅館', 3);
  }
  console.log('Tankaku hotels found:', tankakuHotels ? tankakuHotels.length : 0);
  if (tankakuHotels && tankakuHotels.length > 0) {
    allSeasonal['furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay']['beef_tankaku'] = {
      label: '岩手県久慈市・岩手町ふるさと納税・希少な「いわて短角牛」の濃厚赤身肉ステーキと奥羽の秘湯',
      hotels: tankakuHotels
    };
  }

  // 2. star_bisei: 美星町・矢掛・岡山
  console.log('Fetching star_bisei with "矢掛 温泉 岡山"...');
  await sleep(2000);
  let biseiHotels = await searchRakutenHotels('矢掛 旅館 岡山', 3);
  if (!biseiHotels || biseiHotels.length === 0) {
    biseiHotels = await searchRakutenHotels('岡山 倉敷 旅館', 3);
  }
  console.log('Bisei hotels found:', biseiHotels ? biseiHotels.length : 0);
  if (biseiHotels && biseiHotels.length > 0) {
    allSeasonal['furusato-tax-starry-sky-open-air-bath-observatory-stay']['star_bisei'] = {
      label: '岡山県井原市美星町ふるさと納税・光害防止条例が守る満天の星と美星天文台・矢掛宿場町の名宿',
      hotels: biseiHotels
    };
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Updated all_seasonal_rakuten_hotels.json successfully!');
}

main();
