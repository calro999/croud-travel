const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

const COMPARISON_ARTICLES = [
  { slug: 'kusatsu-vs-ikaho-onsen-comparison', keywords: ['草津温泉 旅館', '伊香保温泉 旅館'] },
  { slug: 'hakone-vs-atami-which-better', keywords: ['箱根 露天風呂 旅館', '熱海 温泉 ホテル'] },
  { slug: 'kanazawa-vs-kyoto-comparison', keywords: ['金沢 温泉 ホテル', '京都 町家 旅館'] },
  { slug: 'yufuin-vs-beppu-which-stay', keywords: ['由布院 温泉旅館', '別府 温泉 ホテル'] },
  { slug: 'kamakura-vs-enoshima-day-trip', keywords: ['鎌倉 ホテル', '江ノ島 ホテル 湘南'] },
];

async function fetchAll() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  for (const article of COMPARISON_ARTICLES) {
    console.log(`[${article.slug}] 楽天API 検索中...`);
    let allHotels = [];

    for (const kw of article.keywords) {
      try {
        const hotels = await searchRakutenHotels(kw, 3);
        allHotels.push(...hotels);
        console.log(`  "${kw}" → ${hotels.length}件取得`);
      } catch (e) {
        console.error(`  "${kw}" エラー:`, e.message);
      }
      await new Promise(r => setTimeout(r, 1200));
    }

    const seen = new Set();
    const uniqueHotels = allHotels.filter(h => {
      if (seen.has(h.hotelNo)) return false;
      seen.add(h.hotelNo);
      return true;
    });

    existingData[article.slug] = { hotels: uniqueHotels.slice(0, 6) };
    console.log(`  → ${article.slug}: ${uniqueHotels.length}件（上限6件保存）\n`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('全旅行先比較記事の楽天ホテルデータ取得完了！');
}

fetchAll().catch(console.error);
