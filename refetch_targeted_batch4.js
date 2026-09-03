const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const targetedQueries = [
  { slug: 'tokyo-niigata-bus-vs-shinkansen-guide', keyword: '新潟駅 温泉' },
  { slug: 'osaka-tokushima-naruto-bus-vs-car-guide', keyword: '鳴門 温泉 ホテル' },
  { slug: 'tokyo-shizuoka-hamamatsu-bus-vs-shinkansen-guide', keyword: '浜名湖 温泉 旅館' },
];

async function main() {
  const seasonalHotelsPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let seasonalHotels = JSON.parse(fs.readFileSync(seasonalHotelsPath, 'utf8'));

  for (const item of targetedQueries) {
    console.log(`[楽天API直接呼出] キーワード: "${item.keyword}" (${item.slug})`);
    try {
      const hotels = await searchRakutenHotels(item.keyword, 6);
      console.log(` -> 取得成功: ${hotels.length} 件`);
      seasonalHotels[item.slug] = {
        hotels: hotels
      };
    } catch (e) {
      console.error(` -> 取得エラー: ${item.slug}`, e.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  fs.writeFileSync(seasonalHotelsPath, JSON.stringify(seasonalHotels, null, 2), 'utf8');
  console.log('src/data/all_seasonal_rakuten_hotels.json を更新しました。');
}

main();
