const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// リアル体験・失敗回避・持ち物リスト特化記事（全6本）
const PACKING_MISTAKES_ARTICLES = [
  {
    slug: 'kusatsu-onsen-packing-mistakes-silver-guide',
    keywords: ['草津温泉 湯畑 旅館', '草津温泉 源泉かけ流し ホテル']
  },
  {
    slug: 'kamikochi-hiking-shoes-packing-checklist',
    keywords: ['上高地 ホテル 温泉', '松本駅前 ホテル 大浴場']
  },
  {
    slug: 'hokkaido-winter-shoes-clothing-mistakes-guide',
    keywords: ['札幌駅 直結 ホテル 温泉', 'すすきの ホテル 大浴場']
  },
  {
    slug: 'night-highway-bus-packing-comfort-sleep-guide',
    keywords: ['東京駅 八重洲 ホテル 大浴場', '大阪駅前 ホテル サウナ']
  },
  {
    slug: 'okinawa-packing-mistakes-sunburn-rentalcar-guide',
    keywords: ['那覇 空港近く ホテル', '恩納村 リゾートホテル ビーチ']
  },
  {
    slug: 'kyoto-temple-walking-shoes-outfit-mistakes-guide',
    keywords: ['京都駅前 ホテル 温泉', '四条烏丸 ホテル 大浴場']
  }
];

async function fetchPackingHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「失敗回避・持ち物リスト」用ホテルデータ直接取得開始 ===');

  for (const article of PACKING_MISTAKES_ARTICLES) {
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
  console.log('\n=== 全6記事の失敗回避特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchPackingHotels().catch(console.error);
