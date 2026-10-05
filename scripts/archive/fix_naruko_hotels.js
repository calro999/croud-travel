const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const narukoQueries = [
    { key: 'naruko_masuya', query: '鳴子温泉 鳴子観光ホテル', label: '大崎市ふるさと納税・創業四百年！美肌の乳白色硫黄泉「源蔵の湯」と地元宮城の山海味覚会席' },
    { key: 'naruko_unagiyu', query: '鳴子風雅', label: '大崎市ふるさと納税・大人の隠れ家和モダン温泉旅館！名湯鳴子の湯とみやぎ美澄豚のグリル会席' }
  ];

  const pageSlug = 'furusato-tax-naruko-onsen-historic-cure-stay';
  if (!allSeasonal[pageSlug]) allSeasonal[pageSlug] = {};

  for (const q of narukoQueries) {
    console.log(`Searching: ${q.query}...`);
    const results = await searchRakutenHotels(q.query, 1);
    if (results && results.length > 0) {
      const hotel = results[0];
      console.log(` -> Found: [${hotel.hotelNo}] ${hotel.hotelName} (Rating: ${hotel.reviewAverage}, Reviews: ${hotel.reviewCount})`);
      allSeasonal[pageSlug][q.key] = {
        ...hotel,
        searchQuery: q.query,
        curatorLabel: q.label
      };
    }
    await sleep(2200);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log("Updated Naruko hotels successfully!");
}

main().catch(console.error);
