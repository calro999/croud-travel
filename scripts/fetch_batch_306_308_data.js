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
    themeId: "winter-nagasaki-huistenbosch-christmas-illumination-hotels-guide",
    name: "ハウステンボス光の街のクリスマス＆白銀の世界・直営ホテル",
    hotelSearches: [
      "ホテルヨーロッパ",
      "ホテルアムステルダム",
      "ホテルオークラJRハウステンボス",
      "ウォーターマークホテル長崎",
      "ホテル日航ハウステンボス"
    ],
    wikiSpots: ["ハウステンボス", "佐世保市", "大村湾", "西海橋"]
  },
  {
    themeId: "winter-tochigi-ashikaga-flowerpark-illumination-sano-hotels-guide",
    name: "あしかがフラワーパーク光の花の庭＆佐野厄除け大師・佐野ラーメン",
    hotelSearches: [
      "カンデオホテルズ佐野",
      "ホテルルートイン足利駅前",
      "ホテルルートイン佐野藤岡インター",
      "ニューミヤコホテル足利",
      "チサンイン佐野藤岡インター"
    ],
    wikiSpots: ["あしかがフラワーパーク", "足利学校", "佐野厄除け大師", "佐野市"]
  },
  {
    themeId: "winter-ishikawa-kanazawa-kenrokuen-yukitsuri-kanogani-hotels-guide",
    name: "金沢兼六園雪吊りライトアップ＆加能ガニ・香箱ガニ・名門温泉宿",
    hotelSearches: [
      "金沢白鳥路 ホテル山楽",
      "御宿 野乃金沢",
      "三井ガーデンホテル金沢",
      "金沢茶屋",
      "辰口温泉 まつさき"
    ],
    wikiSpots: ["兼六園", "金沢城", "ひがし茶屋街", "近江町市場"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Articles 306-308 (Rakuten API + Wikipedia API) ===');
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
        console.error(`     ✗ Rakuten API error for "${hKeyword}":`, err.message);
      }
      await sleep(700);
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
          const simpleName = spot.replace(/（.*）/, '').replace(/「.*」/, '').replace(/\s*\(.*\)/, '');
          if (simpleName !== spot) {
            console.log(`       Retrying simple name: ${simpleName}...`);
            const retryW = await fetchWikiData(simpleName);
            results[theme.themeId].wiki[spot] = retryW;
          } else {
            results[theme.themeId].wiki[spot] = wData;
          }
        }
      } catch (err) {
        console.error(`     ✗ Wiki API error for "${spot}":`, err.message);
      }
      await sleep(400);
    }
  }

  const outPath = path.join(__dirname, 'batch_306_308_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n🎉 Successfully fetched and saved live data to ${outPath}`);
}

main().catch(console.error);
