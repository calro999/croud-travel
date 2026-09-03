const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 日帰り温泉ランチ付き ＆ 日帰りバスツアー特化記事一覧（全8本）
const DAYTRIP_ARTICLES = [
  {
    slug: 'tokyo-departure-daytrip-bus-tour-guide',
    keywords: ['新宿 日帰り 温泉 ホテル', '山梨 フルーツ狩り 温泉']
  },
  {
    slug: 'osaka-departure-daytrip-bus-tour-guide',
    keywords: ['城崎温泉 カニ 旅館', '有馬温泉 日帰り ランチ 旅館']
  },
  {
    slug: 'nagoya-departure-daytrip-bus-tour-guide',
    keywords: ['下呂温泉 日帰り 旅館', '伊勢志摩 ランチ 温泉']
  },
  {
    slug: 'fukuoka-departure-daytrip-bus-tour-guide',
    keywords: ['由布院 日帰り 温泉', '唐津 呼子 イカ 旅館']
  },
  {
    slug: 'hakone-daytrip-hotspring-lunch-guide',
    keywords: ['箱根湯本 日帰り温泉 ランチ', '強羅 温泉 旅館']
  },
  {
    slug: 'kusatsu-daytrip-hotspring-lunch-guide',
    keywords: ['草津温泉 日帰り 湯畑 旅館', '草津温泉 ランチ 温泉']
  },
  {
    slug: 'atami-daytrip-hotspring-lunch-guide',
    keywords: ['熱海 日帰り温泉 海鮮ランチ', '熱海 オーシャンビュー 旅館']
  },
  {
    slug: 'yamanashi-grape-bus-tour-daytrip-guide',
    keywords: ['石和温泉 日帰り ランチ', '河口湖 富士山 温泉 ホテル']
  }
];

async function fetchDaytripHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる日帰り温泉ランチ＆バスツアー用ホテルデータ直接取得開始 ===');

  for (const article of DAYTRIP_ARTICLES) {
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
      // レートリミット回避インターバル
      await new Promise(r => setTimeout(r, 1200));
    }

    // 重複除外
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
  console.log('\n=== 全8記事の楽天API直接取得＆JSON更新が正常に完了しました ===');
}

fetchDaytripHotels().catch(console.error);
