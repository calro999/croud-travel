const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  console.log("Fetching 岩手 温泉 秘湯 北上 夏油温泉...");
  let hotels = await searchRakutenHotels("岩手 秘湯 温泉 旅館", 3);
  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-secluded-canyon-isolated-onsen-stay']['geto_canyon'] = {
      label: '岩手県北上市・花巻市ふるさと納税・みちのく深山のブナ原生林に抱かれる秘湯宿',
      hotels: hotels
    };
    console.log("SUCCESS geto_canyon:", hotels[0].hotelName);
    fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  }
}

main();
