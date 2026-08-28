const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const autumnThemes = [
  {
    categorySlug: 'autumn-leaves-onsen',
    title: '全国の紅葉露天風呂・絶景雪見温泉旅館',
    queries: [
      { key: 'nikko_kinugawa', query: '日光 鬼怒川温泉 紅葉 露天風呂 旅館', label: '日光・鬼怒川温泉（関東屈指の渓谷美）' },
      { key: 'hakone_gora', query: '箱根 強羅温泉 紅葉 露天風呂 旅館', label: '箱根・強羅温泉（秋の箱根山絶景）' },
      { key: 'kyoto_arashiyama', query: '京都 嵐山 温泉 旅館 紅葉', label: '京都・嵐山温泉（渡月橋・竹林の紅葉）' },
      { key: 'kurokawa_onsen', query: '黒川温泉 旅館 露天風呂 紅葉', label: '熊本・黒川温泉（渓流沿いの風情ある紅葉）' },
      { key: 'nyuto_onsen', query: '秋田 乳頭温泉 旅館 露天風呂', label: '東北・乳頭温泉郷（秘湯のブナ原生林紅葉）' }
    ]
  },
  {
    categorySlug: 'silverweek-family-couple',
    title: 'シルバーウィーク・秋の連休おすすめホテル＆リゾート',
    queries: [
      { key: 'karuizawa_resort', query: '軽井沢 リゾートホテル 紅葉 温泉', label: '長野・軽井沢（秋の高原リゾート＆アウトレット）' },
      { key: 'fujigoko_lakeview', query: '河口湖 富士山 ホテル 露天風呂 紅葉', label: '山梨・河口湖（富士山と紅葉のコラボ絶景）' },
      { key: 'atami_izu', query: '熱海 伊豆 温泉 ホテル オーシャンビュー', label: '静岡・熱海伊豆（秋の温泉街＆海鮮美食）' },
      { key: 'okinawa_autumn', query: '沖縄 リゾートホテル 恩納村 プール', label: '沖縄・恩納村（秋の混雑回避リゾート）' },
      { key: 'usj_autumn', query: 'ユニバーサルシティ ホテル ハロウィン', label: '大阪・USJ周辺（秋のハロウィンイベント満喫）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for Autumn / Silver Week Feature Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'autumn_silverweek_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of autumnThemes) {
    console.log(`\n--- Theme: ${theme.title} (${theme.categorySlug}) ---`);
    if (!results[theme.categorySlug]) results[theme.categorySlug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(` -> Retrieved ${hotels.length} hotels directly from Rakuten API.`);
        results[theme.categorySlug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.warn(` Failed query "${q.query}": ${err.message}`);
      }
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved direct Rakuten API data to: ${cachePath}`);
}

main().catch(console.error);
