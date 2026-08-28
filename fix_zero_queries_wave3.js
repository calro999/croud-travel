const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'winter-starry-sky-astrophotography', key: 'kushimoto_stars', query: '串本 ホテル 温泉 リゾート', label: '和歌山・串本潮岬（本州最南端の水平線星空）' },
  { theme: 'autumn-art-museum-retreat', key: 'naoshima_art', query: '直島 旅館 ホテル', label: '香川・直島（美術館に泊まる現代アートの聖地）' },
  { theme: 'winter-bayside-factory-nightview', key: 'yokkaichi_nightview', query: '四日市駅 ホテル おすすめ', label: '三重・四日市コンビナート（大迫力パノラマ工場夜景）' }
];

async function main() {
  const filePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const f of fixes) {
    console.log(`Fixing query for ${f.theme}.${f.key}: "${f.query}"...`);
    await sleep(1300);
    const res = await searchRakutenHotels(f.query, 4);
    console.log(` -> Found ${res.length} hotels.`);
    if (res.length > 0) {
      data[f.theme][f.key] = {
        label: f.label,
        query: f.query,
        hotels: res
      };
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully updated zero-hit categories with fresh direct Rakuten API data!');
}

main().catch(console.error);
