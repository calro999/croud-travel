// scripts/fetch_batch_318_320_data.js
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
    themeId: "winter-tokyo-roppongi-hills-keyakizaka-illumination-luxury-hotels-guide",
    name: "六本木ヒルズけやき坂イルミネーション＆東京ミッドタウン・東京タワー冬夜景ラグジュアリーホテル",
    hotelSearches: [
      "グランド ハイアット 東京",
      "ザ リッツ カールトン 東京",
      "オークラ東京",
      "三井ガーデンホテル六本木プレミア",
      "アンダーズ 東京"
    ],
    wikiSpots: ["六本木ヒルズ", "東京タワー", "東京ミッドタウン", "赤坂サカス"]
  },
  {
    themeId: "winter-tokyo-odaiba-rainbow-fireworks-bayview-hotels-guide",
    name: "お台場レインボー花火＆レインボーブリッジスペシャルライトアップ・ベイビュー特等席ホテル",
    hotelSearches: [
      "ヒルトン東京お台場",
      "グランドニッコー東京 台場",
      "ラビスタ東京ベイ",
      "東京ベイ潮見プリンスホテル",
      "ホテル ヴィラフォンテーヌ グランド 東京有明"
    ],
    wikiSpots: ["お台場海浜公園", "レインボーブリッジ", "台場公園", "フジテレビジョン"]
  },
  {
    themeId: "winter-hyogo-kobe-herb-gardens-christmas-waterfront-hotels-guide",
    name: "神戸布引ハーブ園 古城のクリスマス＆神戸ウォーターフロント冬夜景・神戸牛＆絶景名門ホテル",
    hotelSearches: [
      "ホテル ラ・スイート神戸ハーバーランド",
      "神戸メリケンパークオリエンタルホテル",
      "神戸みなと温泉 蓮",
      "ホテルオークラ神戸",
      "ANAクラウンプラザホテル神戸"
    ],
    wikiSpots: ["神戸布引ロープウェイ", "神戸ポートタワー", "メリケンパーク", "生田神社"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 318-320 (Rakuten API + Wikipedia API) ===');
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
          // キーワードに一番合致するホテルを選択
          let best = list[0];
          if (hKeyword === "オークラ東京") {
            const found = list.find(h => h.hotelName === "オークラ東京" || h.hotelNo === 184582);
            if (found) best = found;
          }
          results[theme.themeId].hotels.push(best);
          console.log(`     ✓ Found: [${best.hotelNo}] ${best.hotelName} (Rating: ${best.reviewAverage}, Charge: ¥${best.hotelMinCharge})`);
        } else {
          console.warn(`     ✗ No Rakuten result for: "${hKeyword}"`);
        }
      } catch (err) {
        console.error(`     ✗ Error fetching "${hKeyword}":`, err.message);
      }
      await sleep(1000); // Rate Limit Protection
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

  const outputPath = path.join(__dirname, 'batch_318_320_live_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n=== Successfully saved live data to: ${outputPath} ===`);
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
