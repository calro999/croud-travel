const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// カップル旅行・記念日・誕生日サプライズ特化記事（全6本）
const COUPLE_ARTICLES = [
  {
    slug: 'hakone-couple-1night2days-anniversary-guide',
    keywords: ['箱根 記念日 客室露天風呂 旅館', '箱根 強羅 サプライズ ホテル']
  },
  {
    slug: 'tokyo-birthday-surprise-luxury-hotel-guide',
    keywords: ['東京 記念日 ホテル ケーキ', '東京 夜景 サプライズ ホテル']
  },
  {
    slug: 'kyoto-couple-luxury-ryokan-guide',
    keywords: ['京都 記念日 露天風呂 旅館', '京都 嵐山 町家 カップル ホテル']
  },
  {
    slug: 'izu-ocean-view-couple-anniversary-guide',
    keywords: ['熱海 伊豆 露天風呂 客室 カップル', '伊豆高原 記念日 隠れ家 旅館']
  },
  {
    slug: 'christmas-date-onsen-dinner-trip-guide',
    keywords: ['軽井沢 クリスマス ディナー ホテル', 'みなとみらい 夜景 記念日 ホテル']
  },
  {
    slug: 'okinawa-luxury-anniversary-resort-guide',
    keywords: ['沖縄 恩納村 高級リゾート 記念日', '宮古島 プライベートプール ヴィラ']
  }
];

async function fetchCoupleHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによるカップル・記念日サプライズ用ホテルデータ直接取得開始 ===');

  for (const article of COUPLE_ARTICLES) {
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
  console.log('\n=== 全6記事のカップル・記念日特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchCoupleHotels().catch(console.error);
