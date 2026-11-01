// scripts/fetch_batch_281_285_data.js
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
    themeId: "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide",
    name: "日光東照宮秋のライトアップ＆中禅寺湖の錦秋",
    hotelSearches: [
      "日光千姫物語",
      "日光金谷ホテル",
      "日光 星の宿",
      "奥日光森のホテル",
      "鬼怒川金谷ホテル"
    ],
    wikiSpots: ["日光東照宮", "中禅寺湖", "華厳滝", "日光二荒山神社"]
  },
  {
    themeId: "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide",
    name: "秋の有田陶磁器まつり＆御船山楽園紅葉ライトアップ",
    hotelSearches: [
      "嬉野温泉 和多屋別荘",
      "武雄温泉 御船山楽園ホテル",
      "嬉野温泉 大正屋",
      "武雄温泉 春慶屋",
      "嬉野温泉 椎葉山荘"
    ],
    wikiSpots: ["御船山楽園", "有田焼", "嬉野温泉", "武雄温泉"]
  },
  {
    themeId: "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide",
    name: "修善寺もみじまつり＆竹林の小径・虹の郷ライトアップ",
    hotelSearches: [
      "宙 SORA 渡月荘金龍",
      "湯回廊 菊屋",
      "修善寺温泉 桂川",
      "新井旅館",
      "松濤館"
    ],
    wikiSpots: ["修善寺温泉", "修禅寺", "独鈷の湯", "修善寺虹の郷"]
  },
  {
    themeId: "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide",
    name: "兼六園の雪吊り＆秋の段ライトアップ・加能ガニ解禁",
    hotelSearches: [
      "辰口温泉 まつさき",
      "山中温泉 花紫",
      "山代温泉 ゆのくに天祥",
      "金沢白鳥路 ホテル山楽",
      "山中温泉 かがり吉祥亭"
    ],
    wikiSpots: ["兼六園", "金沢城", "ひがし茶屋街", "近江町市場"]
  },
  {
    themeId: "autumn-winter-karuizawa-kumobaike-illumination-resort-hotels-guide",
    name: "軽井沢雲場池紅葉＆高原教会クリスマスイルミネーション",
    hotelSearches: [
      "軽井沢マリオットホテル",
      "軽井沢プリンスホテル イースト",
      "ルグラン軽井沢ホテル＆リゾート",
      "万平ホテル",
      "ホテルインディゴ軽井沢"
    ],
    wikiSpots: ["雲場池", "白糸の滝 (長野県)", "旧三笠ホテル", "浅間山"]
  }
];

async function main() {
  console.log('=== Fetching Fresh Live Data for 5 New Killer Articles (281 - 285) ===');
  const results = {};

  for (const theme of THEMES) {
    console.log(`\nFetching for theme: ${theme.name} (${theme.themeId})`);
    results[theme.themeId] = {
      name: theme.name,
      hotels: [],
      wiki: {}
    };

    // 1. Fetch Hotels
    for (const kw of theme.hotelSearches) {
      console.log(`  -> Searching Rakuten for: "${kw}"`);
      try {
        const hotels = await searchRakutenHotels(kw, 3);
        await sleep(800); // polite rate limit
        if (hotels.length > 0) {
          const matched = hotels[0];
          console.log(`     ✅ Found: [${matched.hotelNo}] ${matched.hotelName} (Rating: ${matched.reviewAverage})`);
          results[theme.themeId].hotels.push(matched);
        } else {
          console.warn(`     ⚠️ Not found for: ${kw}`);
        }
      } catch (err) {
        console.error(`     ❌ Error fetching ${kw}:`, err.message);
      }
    }

    // 2. Fetch Wiki Spots
    for (const spot of theme.wikiSpots) {
      console.log(`  -> Fetching Wiki for: "${spot}"`);
      const wikiData = await fetchWikiData(spot);
      await sleep(300);
      console.log(`     ${wikiData.thumbnail ? '✅ Image found' : '⚠️ No image'}: ${wikiData.title} (${wikiData.extract ? wikiData.extract.length + ' chars' : 'no extract'})`);
      results[theme.themeId].wiki[spot] = wikiData;
    }
  }

  const outPath = path.join(__dirname, 'batch_281_285_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n🎉 Successfully saved all live data to: ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
