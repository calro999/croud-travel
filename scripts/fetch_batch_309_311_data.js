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
    themeId: "winter-hokkaido-hakodate-christmas-fantasy-goryokaku-hotels-guide",
    name: "はこだてクリスマスファンタジー＆五稜星の夢・湯の川温泉と函館冬グルメ",
    hotelSearches: [
      "センチュリーマリーナ函館",
      "ラビスタ函館ベイ",
      "望楼NOGUCHI函館",
      "割烹旅館 若松",
      "平成館 しおさい亭"
    ],
    wikiSpots: ["金森赤レンガ倉庫", "五稜郭", "函館山", "湯の川温泉 (北海道)"]
  },
  {
    themeId: "winter-nagano-karuizawa-plateau-church-christmas-candle-hotels-guide",
    name: "軽井沢高原教会 星降る森のクリスマス＆星野温泉クラシックリゾート",
    hotelSearches: [
      "万平ホテル",
      "旧軽井沢KIKYO",
      "ルグラン軽井沢ホテル＆リゾート",
      "ホテルインディゴ軽井沢",
      "軽井沢プリンスホテル イースト"
    ],
    wikiSpots: ["軽井沢高原教会", "星野温泉", "白糸の滝 (長野県)", "旧軽井沢"]
  },
  {
    themeId: "winter-yamanashi-kawaguchiko-winter-fireworks-fuji-view-hotels-guide",
    name: "河口湖 冬花火＆冬の富士山絶景・河口湖温泉客室露天風呂と甲州美食",
    hotelSearches: [
      "湖南荘",
      "秀峰閣 湖月",
      "KUKUNA",
      "湖楽おんやど 富士吟景",
      "ラビスタ富士河口湖"
    ],
    wikiSpots: ["河口湖", "富士山", "富士五湖", "河口浅間神社"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 309-311 (Rakuten API + Wikipedia API) ===');
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
          console.warn(`     ⚠ No Rakuten result for "${hKeyword}"`);
        }
      } catch (err) {
        console.error(`     ✗ Rakuten API error for "${hKeyword}":`, err.message);
      }
      await sleep(400); // polite rate limit
    }

    // 2. Fetch Wikipedia Data
    for (const spot of theme.wikiSpots) {
      console.log(`  -> Fetching Wikipedia API for: "${spot}"...`);
      try {
        const wikiData = await fetchWikiData(spot);
        results[theme.themeId].wiki[spot] = wikiData;
        console.log(`     ✓ Found Wiki: "${wikiData.title}" (Thumb: ${wikiData.thumbnail ? 'YES' : 'NO'}, Extract: ${wikiData.extract.length} chars)`);
      } catch (err) {
        console.error(`     ✗ Wiki API error for "${spot}":`, err.message);
      }
      await sleep(300);
    }
  }

  const outPath = path.join(__dirname, 'batch_309_311_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Finished fetching all live data! Saved to: ${outPath}`);
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
