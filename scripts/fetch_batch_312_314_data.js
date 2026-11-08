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
    themeId: "winter-oita-beppu-christmas-fantasia-fireworks-onsen-hotels-guide",
    name: "べっぷクリスマスファンタジア＆鉄輪温泉湯けむり・別府湾冬花火と極上美食宿",
    hotelSearches: [
      "別府温泉 杉乃井ホテル",
      "潮騒の宿 晴海",
      "AMANE RESORT GAHAMA",
      "別府温泉 竹と椿のお宿 花べっぷ",
      "別府鉄輪温泉 山荘 神和苑"
    ],
    wikiSpots: ["別府温泉", "別府地獄めぐり", "鉄輪温泉", "別府タワー"]
  },
  {
    themeId: "winter-osaka-hikari-renaissance-nakanoshima-midosuji-hotels-guide",
    name: "OSAKA光のルネサンス＆御堂筋イルミネーション・中之島プロジェクションマッピング名門宿",
    hotelSearches: [
      "コンラッド大阪",
      "リーガロイヤルホテル 大阪",
      "帝国ホテル 大阪",
      "三井ガーデンホテル大阪プレミア",
      "ザ ロイヤルパークホテル アイコニック 大阪御堂筋"
    ],
    wikiSpots: ["大阪市中央公会堂", "中之島 (大阪府)", "御堂筋", "中之島公園"]
  },
  {
    themeId: "winter-kanagawa-yokohama-redbrick-christmas-market-minatomirai-hotels-guide",
    name: "クリスマスマーケット in 横浜赤レンガ倉庫＆ヨコハマミライト・みなとみらい夜景ホテル",
    hotelSearches: [
      "横浜ベイホテル東急",
      "インターコンチネンタル横浜Pier 8",
      "ヨコハマ グランド インターコンチネンタル ホテル",
      "ザ・カハラ・ホテル＆リゾート 横浜",
      "ホテルニューグランド 横浜"
    ],
    wikiSpots: ["横浜赤レンガ倉庫", "横浜みなとみらい21", "山下公園", "横浜マリンタワー"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 312-314 (Rakuten API + Wikipedia API) ===');
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
        console.error(`     ❌ Error fetching Rakuten for "${hKeyword}":`, err.message);
      }
      await sleep(500);
    }

    // 2. Fetch Wikipedia Spots
    for (const spot of theme.wikiSpots) {
      console.log(`  -> Fetching Wiki API for: "${spot}"...`);
      const wData = await fetchWikiData(spot);
      results[theme.themeId].wiki[spot] = wData;
      console.log(`     ✓ Wiki: ${wData.title} (Image: ${wData.thumbnail ? 'YES' : 'NO'}, Extract: ${wData.extract.length} chars)`);
      await sleep(300);
    }
  }

  const outPath = path.join(__dirname, 'batch_312_314_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved batch data to: ${outPath}`);
}

main().catch(console.error);
