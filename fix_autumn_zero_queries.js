const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'autumn-leaves-onsen', key: 'hakone_gora', query: '箱根 強羅 温泉 旅館 露天風呂', label: '箱根・強羅温泉（秋の箱根山絶景）' },
  { theme: 'silverweek-family-couple', key: 'karuizawa_resort', query: '軽井沢 リゾートホテル 露天風呂', label: '長野・軽井沢（秋の高原リゾート＆アウトレット）' },
  { theme: 'silverweek-family-couple', key: 'usj_autumn', query: 'ユニバーサルシティ ホテル ファミリー', label: '大阪・USJ周辺（秋のハロウィンイベント満喫）' }
];

async function main() {
  const filePath = path.join(__dirname, 'src', 'data', 'autumn_silverweek_rakuten_hotels.json');
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
