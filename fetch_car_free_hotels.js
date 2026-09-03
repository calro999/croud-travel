const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 車なし・電車とバスだけで回れる観光モデルコース特化記事（全6本）
const CAR_FREE_ARTICLES = [
  {
    slug: 'izu-shimoda-car-free-travel-guide',
    keywords: ['下田駅 温泉 ホテル', '伊豆急下田 オーシャンビュー 旅館']
  },
  {
    slug: 'fuji-five-lakes-car-free-bus-guide',
    keywords: ['河口湖駅 徒歩 ホテル 温泉', '富士山駅 展望 ホテル']
  },
  {
    slug: 'aso-kumamoto-car-free-trip-guide',
    keywords: ['阿蘇駅 温泉 旅館', '熊本駅 直結 ホテル']
  },
  {
    slug: 'awaji-island-car-free-bus-trip-guide',
    keywords: ['淡路島 高速バス 温泉 ホテル', '洲本温泉 海沿い 旅館']
  },
  {
    slug: 'nikko-chuzenji-car-free-travel-guide',
    keywords: ['東武日光駅 ホテル', '中禅寺湖 温泉 旅館']
  },
  {
    slug: 'kamikochi-matsumoto-car-free-guide',
    keywords: ['松本駅前 大浴場 ホテル', '上高地 帝国ホテル 温泉']
  }
];

async function fetchCarFreeHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「車なし・電車＆バス旅」用ホテルデータ直接取得開始 ===');

  for (const article of CAR_FREE_ARTICLES) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の駅チカ・バス停前ホテルデータを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事の車なし特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchCarFreeHotels().catch(console.error);
