const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'winter-ski-snowboard-resort', key: 'niseko_ski', query: 'ニセコ ホテル 温泉', label: '北海道・ニセコ（世界最高峰のパウダースノー）' },
  { theme: 'winter-illumination-hotels', key: 'huistenbosch_winter', query: 'ハウステンボス ホテル', label: '長崎・ハウステンボス（世界最大級1300万球）' }
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
