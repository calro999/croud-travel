const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
  
  console.log("Fetching 作並温泉 一の坊 ...");
  const hotels = await searchRakutenHotels("仙台 作並温泉 旅館", 3);
  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-waterfall-river-gorge-healing-onsen-stay']['sakunami_gorge_onsen'] = {
      label: '宮城県仙台市ふるさと納税・広瀬川清流と滝を望む渓流露天風呂宿',
      hotels: hotels
    };
    fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
    console.log("SUCCESS! Added sakunami hotels:", hotels[0].hotelName);
  } else {
    console.log("Still not found");
  }
}
main();
