const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. wagashi_kanazawa
  await sleep(2000);
  console.log('Fetching wagashi_kanazawa with "金沢 茶屋街 旅館"...');
  let hotels = await searchRakutenHotels('金沢 茶屋街 旅館', 3);
  if (!hotels || hotels.length === 0) {
    await sleep(2000);
    hotels = await searchRakutenHotels('金沢 浅野川 宿', 3);
  }
  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-three-great-wagashi-tea-culture-stay']['wagashi_kanazawa'] = {
      label: '石川県金沢市ふるさと納税・加賀藩前田家伝来日本三大銘菓「長生殿」と茶の湯文化・ひがし茶屋街名宿',
      hotels: hotels
    };
    console.log('wagashi_kanazawa saved!');
  }

  // 2. bell_kanzeon (太宰府・二日市温泉の宿をさらに追加)
  await sleep(2000);
  console.log('Fetching bell_kanzeon with "二日市温泉 福岡"...');
  let kanzeonHotels = await searchRakutenHotels('二日市温泉 福岡', 3);
  if (kanzeonHotels && kanzeonHotels.length > 0) {
    allSeasonal['furusato-tax-three-sacred-temple-bells-retreat-stay']['bell_kanzeon'] = {
      label: '福岡県太宰府市・筑紫野市ふるさと納税・日本最古の国宝梵鐘観世音寺と万葉集ゆかりの二日市温泉',
      hotels: kanzeonHotels
    };
    console.log('bell_kanzeon updated with onsen hotels!');
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Round 22 data fixed successfully!');
}

main();
