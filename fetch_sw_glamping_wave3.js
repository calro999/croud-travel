const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// シルバーウィーク×グランピング第3弾特化記事（全6本）
const SW_GLAMPING_WAVE3 = [
  {
    slug: 'silver-week-glamping-tokai-shizuoka-aichi-guide',
    keywords: ['静岡 グランピング 海鮮', '伊豆 ドームテント 温泉 グランピング']
  },
  {
    slug: 'silver-week-glamping-kyushu-fukuoka-kumamoto-guide',
    keywords: ['九州 グランピング 温泉', '阿蘇 グランピング 糸島']
  },
  {
    slug: 'silver-week-glamping-large-group-charter-guide',
    keywords: ['グランピング 大人数 貸切', 'コテージ 貸切 10人 グランピング']
  },
  {
    slug: 'silver-week-glamping-rainy-weather-indoor-guide',
    keywords: ['グランピング 屋根付き 雨 BBQ', '全天候型 グランピング 温泉']
  },
  {
    slug: 'silver-week-glamping-hotspring-onsen-spa-guide',
    keywords: ['源泉かけ流し 温泉 グランピング', 'グランピング 本格温泉 露天風呂']
  },
  {
    slug: 'silver-week-glamping-bonfire-marshmallow-bar-guide',
    keywords: ['グランピング 焚き火 BAR', 'グランピング スモア 焚火カフェ']
  }
];

async function fetchSWGlampingWave3() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「シルバーウィーク×グランピング第3弾」ホテルデータ直接取得開始 ===');

  for (const article of SW_GLAMPING_WAVE3) {
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
  console.log('\n=== 全6記事のグランピング第3弾データ直接取得＆JSON更新完了 ===');
}

fetchSWGlampingWave3().catch(console.error);
