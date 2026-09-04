const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// シルバーウィーク×グランピング第2弾特化記事（全6本）
const SW_GLAMPING_WAVE2 = [
  {
    slug: 'silver-week-glamping-cheap-student-budget-guide',
    keywords: ['グランピング 格安 コスパ', 'コテージ グランピング 学生']
  },
  {
    slug: 'silver-week-glamping-kids-play-activity-guide',
    keywords: ['グランピング 子連れ アスレチック', 'グランピング 体験 動物 ファミリー']
  },
  {
    slug: 'silver-week-glamping-luxury-suite-villa-guide',
    keywords: ['高級 グランピング 一棟貸し', 'グランピング プライベートヴィラ 露天風呂']
  },
  {
    slug: 'silver-week-glamping-stargazing-astronomy-guide',
    keywords: ['グランピング 星空 天体観測', '長野 グランピング 星空 阿智村']
  },
  {
    slug: 'silver-week-glamping-sea-kayak-marine-guide',
    keywords: ['海 グランピング SUP', 'ビーチ グランピング カヤック 釣り']
  },
  {
    slug: 'silver-week-glamping-solo-stay-retreat-guide',
    keywords: ['ソロ グランピング 1人', 'グランピング 1人泊 温泉']
  }
];

async function fetchSWGlampingWave2() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「シルバーウィーク×グランピング第2弾」ホテルデータ直接取得開始 ===');

  for (const article of SW_GLAMPING_WAVE2) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の施設データを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事のグランピング第2弾データ直接取得＆JSON更新完了 ===');
}

fetchSWGlampingWave2().catch(console.error);
