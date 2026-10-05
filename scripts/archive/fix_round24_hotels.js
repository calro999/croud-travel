const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 仁淀川の宿を取得
  await sleep(2000);
  console.log('Fetching adventure_niyodogawa with "仁淀川 旅館 高知"...');
  let niyodoHotels = await searchRakutenHotels('仁淀川 旅館 高知', 3);
  if (!niyodoHotels || niyodoHotels.length === 0) {
    await sleep(2000);
    niyodoHotels = await searchRakutenHotels('いの町 ホテル 高知', 3);
  }
  if (!niyodoHotels || niyodoHotels.length === 0) {
    await sleep(2000);
    niyodoHotels = await searchRakutenHotels('高知 温泉 仁淀川', 3);
  }

  if (niyodoHotels && niyodoHotels.length > 0) {
    allSeasonal['furusato-tax-whitewater-rafting-canyoning-adventure-stay']['adventure_niyodogawa'] = {
      label: '高知県いの町・仁淀川町ふるさと納税・奇跡の青「仁淀ブルー」SUP・カヤック体験と土佐あかうし会席宿',
      hotels: niyodoHotels
    };
    console.log('adventure_niyodogawa saved successfully!');
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Round 24 hotels complete!');
}

main();
