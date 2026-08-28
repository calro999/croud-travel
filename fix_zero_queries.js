const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { hub: 'okinawa', key: 'couple_hotel', query: '沖縄 オーシャンビュー ホテル' },
  { hub: 'tokyo', key: 'night_view', query: '東京 夜景 ホテル' },
  { hub: 'tokyo', key: 'family_hotel', query: '東京 ファミリー ホテル' },
  { hub: 'osaka', key: 'usj_hotel', query: 'ユニバーサルシティ ホテル' },
  { hub: 'hakone', key: 'family_ryokan', query: '箱根 温泉 旅館 ファミリー' }
];

async function main() {
  const filePath = path.join(__dirname, 'src', 'data', 'all_hubs_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const f of fixes) {
    console.log(`Fixing query for ${f.hub}.${f.key}: "${f.query}"...`);
    await sleep(1300);
    const res = await searchRakutenHotels(f.query, 6);
    console.log(` -> Found ${res.length} hotels.`);
    if (res.length > 0) {
      data[f.hub][f.key].query = f.query;
      data[f.hub][f.key].hotels = res;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully updated all zero-hit categories with fresh direct Rakuten API data!');
}

main().catch(console.error);
