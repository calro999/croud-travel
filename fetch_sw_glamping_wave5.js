const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// シルバーウィーク×グランピング第5弾特化記事（全6本）
const SW_GLAMPING_WAVE5 = [
  {
    slug: 'silver-week-glamping-last-minute-empty-rooms-guide',
    keywords: ['グランピング 穴場 直前予約', 'グランピング 当日 直前 空室']
  },
  {
    slug: 'silver-week-glamping-hokkaido-sapporo-furano-guide',
    keywords: ['北海道 グランピング 札幌', '富良野 トマム グランピング']
  },
  {
    slug: 'silver-week-glamping-chugoku-shikoku-setouchi-guide',
    keywords: ['瀬戸内 グランピング しまなみ', '四国 グランピング オーシャンビュー']
  },
  {
    slug: 'silver-week-glamping-three-generation-family-guide',
    keywords: ['グランピング 3世代 バリアフリー', 'グランピング 和洋室 家族旅行']
  },
  {
    slug: 'silver-week-glamping-morning-yoga-mindfulness-guide',
    keywords: ['グランピング ヨガ 朝食', 'グランピング 森林浴 リトリート']
  },
  {
    slug: 'silver-week-glamping-kitchen-cooking-local-food-guide',
    keywords: ['グランピング キッチン付き 自炊', 'コテージ グランピング 食材持ち込み 道の駅']
  }
];

async function fetchSWGlampingWave5() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「シルバーウィーク×グランピング第5弾」ホテルデータ直接取得開始 ===');

  for (const article of SW_GLAMPING_WAVE5) {
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
  console.log('\n=== 全6記事のグランピング第5弾データ直接取得＆JSON更新完了 ===');
}

fetchSWGlampingWave5().catch(console.error);
