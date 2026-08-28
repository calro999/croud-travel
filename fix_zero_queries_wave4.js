const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'winter-snow-drift-ice-cruise', key: 'abashiri_drift_ice', query: '網走 ホテル 温泉 流氷', label: '北海道・網走（流氷砕氷船おーろら号＆オホーツク海鮮）' },
  { theme: 'winter-warm-island-escape', key: 'yaeyama_warm', query: '石垣島 リゾートホテル 温泉', label: '沖縄・八重山諸島（冬の南国静寂リゾートステイ）' },
  { theme: 'winter-warm-island-escape', key: 'miyako_warm', query: '宮古島 リゾートホテル プール', label: '沖縄・宮古島（冬の宮古ブルー＆贅沢リゾート）' },
  { theme: 'autumn-temple-garden-lightup', key: 'matsushima_lightup', query: '松島 温泉 ホテル 旅館', label: '宮城・松島円通院（紅葉ライトアップ＆松島湾温泉）' }
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
