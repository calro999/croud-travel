// scripts/fetch_batch_291_295_data.js
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
    themeId: "winter-kanagawa-enoshima-shonan-jewel-illumination-kamakura-hotels-guide",
    name: "江の島「湘南の宝石」イルミネーション＆鎌倉冬旅",
    hotelSearches: [
      "岩本楼",
      "鎌倉プリンスホテル",
      "BREATH HOTEL",
      "ホテルメトロポリタン 鎌倉",
      "江の島アイランドスパ"
    ],
    wikiSpots: ["湘南の宝石", "江の島", "江の島シーキャンドル", "鎌倉大仏"]
  },
  {
    themeId: "winter-hyogo-kobe-luminarie-arima-onsen-kinsen-hotels-guide",
    name: "神戸ルミナリエ＆有馬温泉 金泉・銀泉",
    hotelSearches: [
      "兵衛向陽閣",
      "有馬温泉 欽山",
      "有馬グランドホテル",
      "有馬温泉 兆楽",
      "神戸メリケンパークオリエンタルホテル"
    ],
    wikiSpots: ["神戸ルミナリエ", "有馬温泉", "神戸港", "六甲山"]
  },
  {
    themeId: "winter-kumamoto-kurokawa-onsen-yuakari-bamboo-lantern-hotels-guide",
    name: "黒川温泉「湯あかり」竹灯籠＆阿蘇冬絶景",
    hotelSearches: [
      "歴史の宿 御客屋",
      "山あいの宿 山みず木",
      "黒川荘",
      "湯峡の響き 優彩",
      "ふもと旅館"
    ],
    wikiSpots: ["黒川温泉", "阿蘇山", "田の原川", "白川水源"]
  },
  {
    themeId: "winter-iwate-koiwai-farm-milky-way-illumination-oujuku-shizukuishi-hotels-guide",
    name: "小岩井農場「銀河農場の夜」＆雫石・鶯宿温泉",
    hotelSearches: [
      "雫石プリンスホテル",
      "ホテル森の風 鶯宿",
      "長栄館",
      "盛岡つなぎ温泉 四季亭",
      "ホテル紫苑"
    ],
    wikiSpots: ["小岩井農場", "鶯宿温泉", "岩手山", "繋温泉"]
  },
  {
    themeId: "winter-hokkaido-shikaribetsuko-kotan-ice-bath-tokachigawa-moor-hotels-guide",
    name: "然別湖コタン「幻の氷上露天風呂」＆十勝川モール温泉",
    hotelSearches: [
      "然別湖畔温泉ホテル風水",
      "十勝川温泉 第一ホテル",
      "十勝川温泉 観月苑",
      "森のスパリゾート 北海道ホテル",
      "十勝川温泉 ホテル大平原"
    ],
    wikiSpots: ["然別湖", "然別湖コタン", "十勝川温泉", "帯広市"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Articles 291-295 (Rakuten API + Wikipedia API) ===');
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
          // 最もマッチする宿（評価が高いかキーワードを正確に含むもの）
          const best = list[0];
          results[theme.themeId].hotels.push(best);
          console.log(`     ✓ Found: [${best.hotelNo}] ${best.hotelName} (Rating: ${best.reviewAverage}, Charge: ¥${best.hotelMinCharge})`);
        } else {
          console.warn(`     ✗ No Rakuten result for: "${hKeyword}"`);
        }
      } catch (err) {
        console.error(`     ✗ Rakuten API error for "${hKeyword}":`, err.message);
      }
      await sleep(700); // API Rate-limit配慮
    }

    // 2. Fetch Wikipedia Spots
    for (const spot of theme.wikiSpots) {
      console.log(`  -> Fetching Wikipedia API for: "${spot}"...`);
      try {
        const wData = await fetchWikiData(spot);
        if (wData.extract) {
          results[theme.themeId].wiki[spot] = wData;
          console.log(`     ✓ Wiki found: ${wData.title} (Extract length: ${wData.extract.length}, Thumb: ${!!wData.thumbnail})`);
        } else {
          console.log(`     - Wiki empty extract for: ${spot}`);
          // 簡易名称でフォールバック
          const simpleName = spot.replace(/（.*）/, '').replace(/「.*」/, '');
          if (simpleName !== spot) {
            console.log(`       Retrying simple name: ${simpleName}...`);
            const retryW = await fetchWikiData(simpleName);
            results[theme.themeId].wiki[spot] = retryW;
          } else {
            results[theme.themeId].wiki[spot] = wData;
          }
        }
      } catch (err) {
        console.error(`     ✗ Wiki error for "${spot}":`, err.message);
      }
      await sleep(400);
    }
  }

  const outPath = path.join(__dirname, 'batch_291_295_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Finished fetching all data! Saved to: ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
