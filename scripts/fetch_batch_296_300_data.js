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
    themeId: "winter-shizuoka-izukogen-granillumi-omuro-ito-onsen-hotels-guide",
    name: "伊豆高原グランイルミ＆伊東温泉・城ヶ崎海岸",
    hotelSearches: [
      "淘心庵 米屋",
      "ホテルアンビエント伊豆高原",
      "ホテルラヴィエ川良",
      "伊東遊季亭",
      "青山やまと"
    ],
    wikiSpots: ["伊豆シャボテン公園", "大室山 (静岡県)", "城ヶ崎海岸", "伊東温泉"]
  },
  {
    themeId: "winter-saitama-chichibu-misotsuchi-tsurara-ashigakubo-onsen-hotels-guide",
    name: "三十槌の氷柱＆あしがくぼの氷柱・秩父温泉郷",
    hotelSearches: [
      "新木鉱泉旅館",
      "ちちぶ温泉 はなのや",
      "ナチュラルファームシティ農園ホテル",
      "宮本の湯",
      "和どう"
    ],
    wikiSpots: ["三十槌の氷柱", "秩父神社", "長瀞渓谷", "三峯神社"]
  },
  {
    themeId: "winter-akita-yokote-kamakura-snow-festival-yuzawa-onsen-hotels-guide",
    name: "横手の雪まつり「かまくら」＆湯沢・秋の宮温泉郷",
    hotelSearches: [
      "秋の宮温泉郷 湯けむりの宿 稲住温泉",
      "ホテルプラザアネックス横手",
      "横手プラザホテル",
      "湯沢ロイヤルホテル",
      "泥湯温泉 奥山旅館"
    ],
    wikiSpots: ["かまくら", "横手城", "湯沢市", "秋の宮温泉郷"]
  },
  {
    themeId: "winter-shiga-nagahama-kohoku-wild-duck-nabe-taiko-onsen-hotels-guide",
    name: "長浜・湖北の雪景色と名物「天然鴨鍋」＆長浜太閤温泉",
    hotelSearches: [
      "浜湖月",
      "北ビワコホテル グラツィエ",
      "グランドメルキュール琵琶湖リゾート＆スパ",
      "須賀谷温泉",
      "紅鮎"
    ],
    wikiSpots: ["長浜城 (近江国)", "黒壁スクエア", "竹生島", "琵琶湖"]
  },
  {
    themeId: "winter-nagano-suwa-taisha-hatsumode-omiwatari-kamisuwa-onsen-hotels-guide",
    name: "諏訪大社四社めぐり新春初詣＆御神渡り祈願・上諏訪温泉",
    hotelSearches: [
      "上諏訪温泉 しんゆ",
      "上諏訪温泉 浜の湯",
      "布半",
      "ホテル紅や",
      "油屋旅館"
    ],
    wikiSpots: ["諏訪大社", "諏訪湖", "御神渡り", "片倉館"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Articles 296-300 (Rakuten API + Wikipedia API) ===');
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
        console.error(`     ✗ Wiki error for "${spot}":`, err.message);
      }
      await sleep(400);
    }
  }

  const outPath = path.join(__dirname, 'batch_296_300_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Finished fetching all data! Saved to: ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
