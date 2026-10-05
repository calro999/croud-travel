const fs = require('fs');
const hotelsDb = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));
let r122 = JSON.parse(fs.readFileSync('round122_batch_data.json', 'utf8'));

// Update specific hotelNumbers to match exact fetched IDs
r122[0].hotelNumbers = [5284, 69313, 38824];
r122[1].hotelNumbers = [25128, 41797, 1206];
r122[2].hotelNumbers = [6123, 7769, 149301];
r122[3].hotelNumbers = [51733, 2910, 16522];
r122[4].hotelNumbers = [19278, 31896, 18337];

fs.writeFileSync('round122_batch_data.json', JSON.stringify(r122, null, 2), 'utf8');

r122.forEach((a, idx) => {
  console.log(`Article ${idx}: ${a.slug}`);
  a.hotelNumbers.forEach(n => {
    const h = hotelsDb[n];
    console.log(`  - [${n}] ${h ? h.hotelName : 'NOT FOUND'} (Score: ${h ? h.reviewAverage : '-'}, Charge: ${h ? h.hotelMinCharge : '-'})`);
  });
});
