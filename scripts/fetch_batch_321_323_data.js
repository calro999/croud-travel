// scripts/fetch_batch_321_323_data.js
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
    themeId: "winter-tokyo-omotesando-illumination-jingu-christmas-luxury-hotels-guide",
    name: "表参道フェンディイルミネーション＆明治神宮外苑クリスマスマーケット・青山渋谷ラグジュアリーホテル",
    hotelSearches: [
      "神宮外苑の杜プレミア",
      "セルリアンタワー東急ホテル",
      "東急ステイ青山プレミア",
      "渋谷エクセルホテル東急",
      "sequence MIYASHITA PARK"
    ],
    wikiSpots: ["表参道 (原宿)", "明治神宮外苑", "国立代々木競技場", "忠犬ハチ公"]
  },
  {
    themeId: "winter-kanagawa-sagamiko-illumillion-kanto-three-great-lightup-hotels-guide",
    name: "さがみ湖イルミリオン＆相模湖・高尾山・八王子 絶景露天温泉＆高原リゾートホテル",
    hotelSearches: [
      "PICAさがみ湖",
      "タカオネ",
      "京王プラザホテル八王子",
      "ホテルエミシア東京立川",
      "レンブラントホテル厚木"
    ],
    wikiSpots: ["さがみ湖リゾート プレジャーフォレスト", "相模湖", "高尾山", "高尾山薬王院"]
  },
  {
    themeId: "winter-tokyo-dome-city-illumination-spa-laqua-hotels-guide",
    name: "東京ドームシティ ウィンターイルミネーション＆文京水道橋 スパ ラクーア天然温泉＆絶景ホテル",
    hotelSearches: [
      "東京ドームホテル",
      "庭のホテル 東京",
      "ホテルメトロポリタン エドモント",
      "ホテル椿山荘東京",
      "三井ガーデンホテル大手町"
    ],
    wikiSpots: ["東京ドームシティ", "ラクーア", "小石川後楽園", "文京シビックセンター"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 321-323 (Rakuten API + Wikipedia API) ===');
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
        const list = await searchRakutenHotels(hKeyword, 3);
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
      await sleep(1000); // Rate limit protection
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

  const outputPath = path.join(__dirname, 'batch_321_323_live_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n=== Successfully saved live data to: ${outputPath} ===`);
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
