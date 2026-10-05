const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. gorge_bath_shiriyaki: 草津・六合・花敷温泉・中之条の宿
  await sleep(2000);
  console.log('Fetching gorge_bath_shiriyaki with "花敷温泉 旅館 群馬"...');
  let shiriyakiHotels = await searchRakutenHotels('花敷温泉 旅館 群馬', 3);
  if (!shiriyakiHotels || shiriyakiHotels.length === 0) {
    await sleep(2000);
    shiriyakiHotels = await searchRakutenHotels('四万温泉 旅館 群馬', 3);
  }
  if (shiriyakiHotels && shiriyakiHotels.length > 0) {
    allSeasonal['furusato-tax-three-gorge-open-air-baths-retreat-stay']['gorge_bath_shiriyaki'] = {
      label: '群馬県中之条町ふるさと納税・川底から温泉が自噴する天然の川風呂「尻焼温泉・花敷温泉」と奥草津・四万の清流秘湯宿',
      hotels: shiriyakiHotels
    };
    console.log('gorge_bath_shiriyaki saved successfully!');
  }

  // 2. gorge_bath_akinomiya: 湯沢・泥湯・秋の宮温泉の宿
  await sleep(2000);
  console.log('Fetching gorge_bath_akinomiya with "秋の宮温泉 旅館 秋田"...');
  let akinomiyaHotels = await searchRakutenHotels('秋の宮温泉 旅館 秋田', 3);
  if (!akinomiyaHotels || akinomiyaHotels.length === 0) {
    await sleep(2000);
    akinomiyaHotels = await searchRakutenHotels('泥湯温泉 旅館 秋田', 3);
  }
  if (!akinomiyaHotels || akinomiyaHotels.length === 0) {
    await sleep(2000);
    akinomiyaHotels = await searchRakutenHotels('湯沢 温泉 旅館 秋田', 3);
  }
  if (akinomiyaHotels && akinomiyaHotels.length > 0) {
    allSeasonal['furusato-tax-three-gorge-open-air-baths-retreat-stay']['gorge_bath_akinomiya'] = {
      label: '秋田県湯沢市ふるさと納税・役内川の渓流露天風呂「秋の宮温泉郷・泥湯温泉」と稲庭うどん名宿',
      hotels: akinomiyaHotels
    };
    console.log('gorge_bath_akinomiya saved successfully!');
  }

  // 3. gorge_bath_amagi: 伊豆長岡ではなく「天城湯ヶ島」の温泉宿に修正
  await sleep(2000);
  console.log('Fetching gorge_bath_amagi with "湯ヶ島温泉 旅館 静岡"...');
  let amagiHotels = await searchRakutenHotels('湯ヶ島温泉 旅館 静岡', 3);
  if (amagiHotels && amagiHotels.length > 0) {
    allSeasonal['furusato-tax-three-gorge-open-air-baths-retreat-stay']['gorge_bath_amagi'] = {
      label: '静岡県伊豆市ふるさと納税・川端康成ゆかりの狩野川渓谷清流露天風呂「湯ヶ島温泉」と天城本わさび・猪鍋会席宿',
      hotels: amagiHotels
    };
    console.log('gorge_bath_amagi updated with authentic Yugashima onsen hotels!');
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Round 25 hotels data completely fixed!');
}

main();
