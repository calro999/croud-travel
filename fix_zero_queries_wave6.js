const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'autumn-winter-private-bath-ryokan', key: 'kurokawa_private_bath', query: '黒川温泉 旅館 露天風呂 部屋食', label: '熊本・黒川温泉（渓流沿いの貸切野天風呂とおこもりステイ）' },
  { theme: 'autumn-winter-traditional-ryokan-retro', key: 'ito_tokai_ryokan', query: '伊東温泉 老舗 旅館 露天風呂', label: '静岡・伊東温泉（東海館の意匠を受け継ぐ老舗名門宿）' }
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
