const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// シルバーウィーク×グランピング特化記事（全6本）
const SW_GLAMPING_ARTICLES = [
  {
    slug: 'silver-week-glamping-kanto-fuji-guide',
    keywords: ['富士山 グランピング 温泉', '河口湖 ドームテント グランピング']
  },
  {
    slug: 'silver-week-glamping-kansai-biwako-awaji-guide',
    keywords: ['琵琶湖 グランピング', '淡路島 グランピング オーシャンビュー']
  },
  {
    slug: 'silver-week-glamping-with-dogs-pets-guide',
    keywords: ['グランピング ペット ドッグラン', '犬と泊まれる グランピング']
  },
  {
    slug: 'silver-week-glamping-private-sauna-guide',
    keywords: ['グランピング サウナ 貸切', 'バレルサウナ グランピング 水風呂']
  },
  {
    slug: 'silver-week-glamping-bbq-empty-handed-guide',
    keywords: ['グランピング 手ぶら BBQ 温泉', 'グランピング 黒毛和牛 ディナー']
  },
  {
    slug: 'silver-week-glamping-car-free-bus-train-guide',
    keywords: ['グランピング 送迎あり 駅近', '電車で行ける グランピング']
  }
];

async function fetchSWGlampingHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「シルバーウィーク×グランピング」ホテルデータ直接取得開始 ===');

  for (const article of SW_GLAMPING_ARTICLES) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件のグランピング施設データを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事のシルバーウィーク・グランピング特化データ直接取得＆JSON更新完了 ===');
}

fetchSWGlampingHotels().catch(console.error);
