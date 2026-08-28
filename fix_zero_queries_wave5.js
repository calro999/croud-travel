const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'autumn-winter-train-scenery-station', key: 'tsugaru_stove_train', query: '弘前 温泉 ホテル 旅館', label: '青森・津軽鉄道（冬の風物詩・ダルマストーブ列車）' },
  { theme: 'autumn-winter-fireplace-cafe-resort', key: 'karuizawa_fireplace', query: '軽井沢 ホテル 暖炉', label: '長野・中軽井沢（歴史ある暖炉ラウンジ＆高原ステイ）' },
  { theme: 'winter-snow-festival-illumination', key: 'yunishigawa_kamakura', query: '湯西川温泉 旅館 露天風呂', label: '栃木・奥日光湯西川温泉（平家落人の里・かまくら祭）' },
  { theme: 'autumn-winter-scenic-drive-pass', key: 'bandai_azuma_drive', query: '裏磐梯 温泉 ホテル 露天風呂', label: '福島・磐梯吾妻スカイライン（日本のグランドキャニオン紅葉）' }
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
