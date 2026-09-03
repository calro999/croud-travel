const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 2026秋 紅葉×ライトアップ×温泉特化記事（全6本）
const AUTUMN_LEAVES_ARTICLES = [
  {
    slug: 'nikko-autumn-leaves-lightup-guide',
    keywords: ['中禅寺湖 紅葉 温泉 旅館', '日光東照宮 近く ホテル']
  },
  {
    slug: 'kyoto-autumn-leaves-night-lightup-hotel-guide',
    keywords: ['京都 紅葉 ライトアップ ホテル', '京都 東山 旅館 嵐山']
  },
  {
    slug: 'hakone-autumn-leaves-lightup-hotspring-guide',
    keywords: ['箱根 紅葉 露天風呂 旅館', '強羅 紅葉 宿']
  },
  {
    slug: 'korankei-autumn-leaves-lightup-access-guide',
    keywords: ['香嵐渓 温泉 旅館', '名古屋 紅葉 バスツアー ホテル']
  },
  {
    slug: 'oirase-autumn-leaves-hotspring-guide',
    keywords: ['奥入瀬渓流 温泉 ホテル', '十和田湖 紅葉 旅館']
  },
  {
    slug: 'ikaho-autumn-leaves-kajikabashi-lightup-guide',
    keywords: ['伊香保 河鹿橋 旅館', '伊香保温泉 露天風呂 紅葉']
  }
];

async function fetchAutumnLeavesHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「2026秋 紅葉×ライトアップ×温泉」ホテルデータ直接取得開始 ===');

  for (const article of AUTUMN_LEAVES_ARTICLES) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の紅葉露天・ライトアップ至近宿データを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事の紅葉特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchAutumnLeavesHotels().catch(console.error);
