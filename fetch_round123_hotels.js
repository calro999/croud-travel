const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');

async function fetchHotelsForRound123() {
  const hotelsDb = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));
  const queries = [
    '武雄温泉',
    '嬉野温泉',
    '花巻温泉',
    '上諏訪温泉',
    '倉敷 ホテル',
    '霧島温泉'
  ];

  for (const q of queries) {
    console.log('Searching Rakuten API for:', q);
    const results = await searchRakutenHotels(q, 8);
    results.forEach(h => {
      hotelsDb[h.hotelNo] = h;
      console.log(`  Saved: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, MinCharge: ${h.hotelMinCharge})`);
    });
    await new Promise(r => setTimeout(r, 1200));
  }

  fs.writeFileSync('src/data/all_seasonal_rakuten_hotels.json', JSON.stringify(hotelsDb, null, 2), 'utf8');
  console.log('Successfully updated hotels DB! Total hotels:', Object.keys(hotelsDb).length);
}

fetchHotelsForRound123();
