const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const results = await searchRakutenHotels('BLISSTIA箱根仙石原', 1);
  if (results && results.length > 0) {
    const hotel = results[0];
    console.log(`Saving: [${hotel.hotelNo}] ${hotel.hotelName}`);
    allSeasonal['furusato-tax-hakone-sengokuhara-pampas-luxury-stay']['sengokuhara_kanade'] = {
      ...hotel,
      searchQuery: 'BLISSTIA箱根仙石原',
      curatorLabel: '箱根町ふるさと納税・全室スイート仕様のプレミアムリゾート！大涌谷白濁温泉と本格フレンチ'
    };
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}
main();
