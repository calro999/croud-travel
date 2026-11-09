const fs = require('fs');
const path = require('path');
const https = require('https');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWikiData(title) {
  return new Promise((resolve) => {
    const url = `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const req = https.get(url, { headers: { 'User-Agent': 'TravelGuideApp/1.0 (contact@croud.jp)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            title: json.title || title,
            extract: json.extract || '',
            thumbnail: json.thumbnail ? json.thumbnail.source : null,
            originalimage: json.originalimage ? json.originalimage.source : null
          });
        } catch (e) {
          console.warn('Wiki parse error for', title, e.message);
          resolve({ title, extract: '', thumbnail: null, originalimage: null });
        }
      });
    });
    req.on('error', (e) => {
      console.warn('Wiki network error for', title, e.message);
      resolve({ title, extract: '', thumbnail: null, originalimage: null });
    });
    req.setTimeout(6000, () => {
      req.abort();
      resolve({ title, extract: '', thumbnail: null, originalimage: null });
    });
  });
}

const THEMES = [
  {
    themeId: "winter-fukuoka-hakata-christmas-advent-illumination-hotels-guide",
    name: "光の街・博多＆福岡クリスマスアドベント・中洲天神イルミネーション名門宿",
    hotelSearches: [
      "都ホテル 博多",
      "ホテル日航福岡",
      "グランド ハイアット 福岡",
      "THE BASICS FUKUOKA",
      "ソラリア西鉄ホテル福岡"
    ],
    wikiSpots: ["博多駅", "キャナルシティ博多", "櫛田神社 (福岡市)", "中洲"]
  },
  {
    themeId: "winter-tokyo-marunouchi-illumination-tokyo-station-luxury-hotels-guide",
    name: "丸の内イルミネーション＆東京駅丸の内駅舎ライトアップ・皇居前最高峰ホテル",
    hotelSearches: [
      "東京ステーションホテル",
      "パレスホテル東京",
      "ザ・ペニンシュラ東京",
      "丸ノ内ホテル 東京",
      "帝国ホテル 東京"
    ],
    wikiSpots: ["東京駅", "丸の内", "皇居外苑", "日比谷公園"]
  },
  {
    themeId: "winter-aichi-nagoya-noritake-christmas-meieki-sakae-hotels-guide",
    name: "ノリタケの森クリスマスガーデン＆名駅・栄イルミネーション・MIRAI TOWER極上宿",
    hotelSearches: [
      "名古屋マリオットアソシアホテル",
      "名古屋JRゲートタワーホテル",
      "ヒルトン名古屋",
      "名古屋観光ホテル",
      "TIAD AUTOGRAPH COLLECTION"
    ],
    wikiSpots: ["ノリタケの森", "名古屋駅", "中部電力 MIRAI TOWER", "熱田神宮"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 315-317 (Rakuten API + Wikipedia API) ===');
  const results = {};

  for (const theme of THEMES) {
    console.log(`\nProcessing Theme: ${theme.name} (${theme.themeId})`);
    results[theme.themeId] = {
      name: theme.name,
      hotels: [],
      wiki: {}
    };

    // 1. Fetch Rakuten Hotels
    for (const hKeyword of theme.hotelSearches) {
      console.log(`  -> Fetching Rakuten API for: "${hKeyword}"...`);
      try {
        const list = await searchRakutenHotels(hKeyword, 1);
        if (list && list.length > 0) {
          const best = list[0];
          results[theme.themeId].hotels.push(best);
          console.log(`     ✓ Found: [${best.hotelNo}] ${best.hotelName} (Rating: ${best.reviewAverage}, Charge: ¥${best.hotelMinCharge})`);
        } else {
          console.warn(`     ✗ No Rakuten result for: "${hKeyword}"`);
        }
      } catch (err) {
        console.error(`     ✗ Error fetching "${hKeyword}":`, err.message);
      }
      await sleep(1000); // API Rate Limit Care
    }

    // 2. Fetch Wikipedia Spots
    for (const wSpot of theme.wikiSpots) {
      console.log(`  -> Fetching Wikipedia API for: "${wSpot}"...`);
      const wikiData = await fetchWikiData(wSpot);
      results[theme.themeId].wiki[wSpot] = wikiData;
      console.log(`     ✓ Wiki: ${wikiData.title} (Has Thumb: ${!!wikiData.thumbnail})`);
      await sleep(300);
    }
  }

  const outputPath = path.join(__dirname, 'batch_315_317_live_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n=== Successfully saved live data to: ${outputPath} ===`);
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
