const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 失敗・後悔の完全回避ワースト5＆必須持ち物特化記事（第2弾・全6本）
const REGRET_ARTICLES = [
  {
    slug: 'disney-trip-packing-regrets-worst5-guide',
    keywords: ['舞浜駅 近く ホテル', 'ディズニー パートナーホテル 温泉']
  },
  {
    slug: 'usj-trip-packing-regrets-worst5-guide',
    keywords: ['USJ 近く オフィシャルホテル', 'ユニバーサルシティ駅 ホテル']
  },
  {
    slug: 'kanazawa-trip-packing-regrets-worst5-guide',
    keywords: ['金沢駅前 温泉 ホテル', '金沢 近江町市場 近く 宿']
  },
  {
    slug: 'fuji-climbing-packing-regrets-worst5-guide',
    keywords: ['富士山駅 ホテル 温泉', '富士吉田 登山 宿']
  },
  {
    slug: 'hakone-trip-packing-regrets-worst5-guide',
    keywords: ['箱根湯本 温泉 旅館', '強羅 露天風呂 宿']
  },
  {
    slug: 'glamping-first-time-regrets-packing-guide',
    keywords: ['グランピング 焚き火 温泉', '富士山 グランピング ヴィラ']
  }
];

async function fetchRegretHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「後悔ワースト5＆持ち物リスト」ホテルデータ直接取得開始 ===');

  for (const article of REGRET_ARTICLES) {
    console.log(`\n[${article.slug}] 楽天API 直接検索中...`);
    let allHotels = [];

    for (const kw of article.keywords) {
      try {
        const hotels = await searchRakutenHotels(kw, 3);
        allHotels.push(...hotels);
        console.log(`  - キーワード「${kw}」: ${hotels.length}件取得`);
      } catch (e) {
        console.error(`  - キーワード「${kw}」エラー:`, e.message);
      }
      await new Promise(r => setTimeout(r, 1200));
    }

    const seen = new Set();
    const uniqueHotels = allHotels.filter(h => {
      if (!h.hotelNo || seen.has(h.hotelNo)) return false;
      seen.add(h.hotelNo);
      return true;
    });

    existingData[article.slug] = { hotels: uniqueHotels.slice(0, 6) };
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件のホテルデータを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事の後悔回避特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchRegretHotels().catch(console.error);
