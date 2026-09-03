const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

// 早朝朝食・カフェ ＆ 深夜夜パフェ・居酒屋特化記事（全6本）
const MORNING_NIGHT_ARTICLES = [
  {
    slug: 'kanazawa-early-morning-breakfast-cafe-guide',
    keywords: ['金沢駅前 朝食 美味しい ホテル', '金沢 近江町市場 近く ホテル']
  },
  {
    slug: 'kyoto-night-bus-early-morning-onsen-breakfast-guide',
    keywords: ['京都駅前 早朝 サウナ ホテル', '京都 大浴場 朝食 ホテル']
  },
  {
    slug: 'sapporo-shime-parfait-late-night-guide',
    keywords: ['すすきの 夜パフェ 近く ホテル', '札幌 大浴場 サウナ ホテル']
  },
  {
    slug: 'tokyo-station-early-morning-breakfast-cafe-guide',
    keywords: ['東京駅 八重洲 朝食 ホテル', '日本橋 大浴場 ホテル']
  },
  {
    slug: 'osaka-namba-late-night-gourmet-izakaya-guide',
    keywords: ['なんば 道頓堀 近く ホテル', '大阪 心斎橋 大浴場 ホテル']
  },
  {
    slug: 'fukuoka-hakata-early-morning-ramen-breakfast-guide',
    keywords: ['博多駅前 朝食 ホテル', '中洲 天然温泉 ホテル']
  }
];

async function fetchMorningNightHotels() {
  let existingData = {};
  if (fs.existsSync(HOTEL_DATA_PATH)) {
    existingData = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  }

  console.log('=== 楽天APIによる「早朝朝食＆深夜夜パフェ・グルメ」ホテルデータ直接取得開始 ===');

  for (const article of MORNING_NIGHT_ARTICLES) {
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
    console.log(`  => 【確定】${article.slug}: 合計${uniqueHotels.slice(0, 6).length}件の朝食・繁華街至近ホテルデータを保存`);
  }

  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(existingData, null, 2), 'utf8');
  console.log('\n=== 全6記事の早朝＆深夜グルメ特化ホテルデータ直接取得＆JSON更新完了 ===');
}

fetchMorningNightHotels().catch(console.error);
