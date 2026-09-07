const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  console.log('Searching for pine_kehi: 敦賀 ホテル ルートイン...');
  let list = await searchRakutenHotels('敦賀 ホテル ルートイン', 3);
  if (!list || list.length === 0) {
    list = await searchRakutenHotels('敦賀 マンテンホテル', 3);
  }

  if (list && list.length > 0) {
    const h = list[0];
    console.log(`✓ Fixed pine_kehi: ${h.hotelName} (No: ${h.hotelNo})`);
    db['pine_kehi'] = {
      ...h,
      featureKey: 'pine_kehi',
      featureLabel: '福井県敦賀市ふるさと納税・若狭湾の白砂と赤松青松が織りなす名勝「気比の松原」越前若狭の海の幸ステイ'
    };
    db[h.hotelNo] = db['pine_kehi'];
  }

  // Also fix key 'buddha:nara' to 'buddha_nara' for consistency
  if (db['buddha:nara']) {
    db['buddha_nara'] = db['buddha:nara'];
    db['buddha_nara'].featureKey = 'buddha_nara';
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Finished fixing missing targets for Round 45!');
}

main();
