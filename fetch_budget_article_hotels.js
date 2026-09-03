const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 各旅行費用記事のslugとホテル検索キーワード
const BUDGET_ARTICLES = [
  { slug: 'kanazawa-travel-budget-guide', keywords: ['金沢 温泉 ホテル', '金沢駅前 ビジネスホテル'] },
  { slug: 'kyoto-travel-budget-how-many-nights', keywords: ['京都 町家 旅館', '京都駅前 大浴場 ホテル'] },
  { slug: 'hokkaido-travel-budget-plan', keywords: ['札幌 大浴場 ホテル', '函館 温泉 ホテル', '小樽 ホテル'] },
  { slug: 'osaka-travel-budget-guide', keywords: ['大阪 道頓堀 ホテル', '大阪 USJ ホテル'] },
  { slug: 'kyushu-travel-budget-how-many-nights', keywords: ['博多 天然温泉 ホテル', '由布院 温泉旅館', '鹿児島 天文館 ホテル'] },
  { slug: 'okinawa-travel-budget-plan', keywords: ['沖縄 恩納村 リゾート', '那覇 国際通り ホテル'] },
  { slug: 'tohoku-travel-budget-guide', keywords: ['仙台 牛たん ホテル', '銀山温泉 旅館', '青森 ホテル'] },
  { slug: 'hakone-travel-budget-guide', keywords: ['箱根 露天風呂 旅館', '箱根湯本 ホテル'] },
  { slug: 'kusatsu-onsen-travel-budget-guide', keywords: ['草津温泉 源泉かけ流し 旅館', '草津温泉 湯畑 ホテル'] },
  { slug: 'atami-izu-travel-budget-guide', keywords: ['熱海 オーシャンビュー 温泉', '伊豆 高原 旅館'] }
];

async function fetchAll() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  for (const article of BUDGET_ARTICLES) {
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
      // レートリミット回避
      await new Promise(r => setTimeout(r, 1200));
    }

    // 重複排除
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
  console.log('全旅行費用記事の楽天ホテルデータ取得完了！');
}

fetchAll().catch(console.error);
