const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 雨の日の観光モデルコース＆室内おこもり特化記事（全6本）
const RAINY_ARTICLES = [
  {
    slug: 'hakone-rainy-day-indoor-model-course',
    keywords: ['箱根 室内 温泉 旅館', '強羅 にごり湯 宿']
  },
  {
    slug: 'kanazawa-rainy-day-indoor-guide',
    keywords: ['金沢 21世紀美術館 近く ホテル', '金沢 ひがし茶屋街 旅館']
  },
  {
    slug: 'kyoto-rainy-day-temple-cafe-guide',
    keywords: ['京都 室内 温泉 ホテル', '京都 嵐山 おこもり 旅館']
  },
  {
    slug: 'okinawa-rainy-day-indoor-aquarium-craft-guide',
    keywords: ['沖縄 屋内プール リゾートホテル', '那覇 国際通り 室内 ホテル']
  },
  {
    slug: 'kamakura-rainy-day-cafe-museum-guide',
    keywords: ['鎌倉 アジサイ 温泉 旅館', '江ノ島 水族館 近く ホテル']
  },
  {
    slug: 'atami-izu-rainy-day-indoor-museum-spa-guide',
    keywords: ['熱海 MOA美術館 近く 旅館', '熱海 室内 インフィニティ温泉 ホテル']
  }
];

async function fetchRainyHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「雨の日の観光＆おこもり温泉宿」データ直接取得開始 ===');

  for (const article of RAINY_ARTICLES) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の雨の日おこもり宿データを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事の雨の日特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchRainyHotels().catch(console.error);
