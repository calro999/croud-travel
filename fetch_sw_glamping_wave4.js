const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// シルバーウィーク×グランピング第4弾特化記事（全6本）
const SW_GLAMPING_WAVE4 = [
  {
    slug: 'silver-week-glamping-private-pool-jacuzzi-guide',
    keywords: ['グランピング プライベートプール', 'グランピング ジャグジー ヴィラ']
  },
  {
    slug: 'silver-week-glamping-air-conditioning-luxury-bed-guide',
    keywords: ['グランピング 個別トイレ バス', 'グランピング 高級ベッド シモンズ']
  },
  {
    slug: 'silver-week-glamping-tohoku-sendai-fukushima-guide',
    keywords: ['東北 グランピング', '宮城 福島 グランピング 温泉']
  },
  {
    slug: 'silver-week-glamping-wine-brewery-craftbeer-guide',
    keywords: ['グランピング ワイン ビール', 'グランピング 飲み放題 山梨 長野']
  },
  {
    slug: 'silver-week-glamping-riverside-valley-fishing-guide',
    keywords: ['川 グランピング 釣り', '清流 グランピング 渓谷']
  },
  {
    slug: 'silver-week-glamping-cinema-theater-projector-guide',
    keywords: ['グランピング プロジェクター シアター', 'グランピング 映画鑑賞 ドーム']
  }
];

async function fetchSWGlampingWave4() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「シルバーウィーク×グランピング第4弾」ホテルデータ直接取得開始 ===');

  for (const article of SW_GLAMPING_WAVE4) {
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
  console.log('\n=== 全6記事のグランピング第4弾データ直接取得＆JSON更新完了 ===');
}

fetchSWGlampingWave4().catch(console.error);
