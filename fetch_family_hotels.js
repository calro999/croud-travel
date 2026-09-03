const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 子連れ・赤ちゃん連れファミリー特化記事（全6本）
const FAMILY_ARTICLES = [
  {
    slug: 'family-kanazawa-1night2days-model-course',
    keywords: ['金沢 ファミリー ホテル', '金沢駅前 和室 ホテル']
  },
  {
    slug: 'kanto-baby-friendly-onsen-ryokan-guide',
    keywords: ['箱根 赤ちゃん 歓迎 温泉', '伊香保 部屋食 貸切風呂 旅館']
  },
  {
    slug: 'okinawa-family-trip-how-many-nights-budget',
    keywords: ['沖縄 子連れ リゾートホテル プール', '恩納村 ファミリー ホテル']
  },
  {
    slug: 'tokyo-disney-resort-family-hotel-comparison',
    keywords: ['舞浜 ファミリー ホテル', '新浦安 子連れ ホテル 2段ベッド']
  },
  {
    slug: 'hokkaido-family-trip-zoo-nature-guide',
    keywords: ['旭川 旭山動物園 ファミリー ホテル', '札幌 子連れ ウェルカムベビー ホテル']
  },
  {
    slug: 'usj-family-hotel-near-osaka-guide',
    keywords: ['USJ オフィシャルホテル 子連れ', '大阪 ユニバ ファミリー 部屋']
  }
];

async function fetchFamilyHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる子連れ・赤ちゃん連れファミリー用ホテルデータ直接取得開始 ===');

  for (const article of FAMILY_ARTICLES) {
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
  console.log('\n=== 全6記事のファミリー特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchFamilyHotels().catch(console.error);
