// scripts/fetch_batch_286_290_data.js
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
    themeId: "autumn-winter-sapporo-white-illumination-odori-park-hotels-guide",
    name: "さっぽろホワイトイルミネーション＆ミュンヘン・クリスマス市",
    hotelSearches: [
      "定山渓第一寶亭留 翠山亭",
      "ぬくもりの宿 ふる川",
      "札幌グランドホテル",
      "京王プラザホテル札幌",
      "JRタワーホテル日航札幌"
    ],
    wikiSpots: ["さっぽろホワイトイルミネーション", "大通公園", "定山渓温泉", "札幌市時計台"]
  },
  {
    themeId: "winter-okuhida-shin-hotaka-ropeway-snow-onsen-hotels-guide",
    name: "新穂高ロープウェイ白銀パノラマ＆奥飛騨温泉郷雪見露天風呂",
    hotelSearches: [
      "匠の宿 深山桜庵",
      "ホテル穂高",
      "隠庵 ひだ路",
      "元湯 孫九郎",
      "湯元館 奥飛騨"
    ],
    wikiSpots: ["新穂高ロープウェイ", "奥飛騨温泉郷", "平湯温泉", "槍ヶ岳"]
  },
  {
    themeId: "winter-nagano-shibu-onsen-jigokudani-snow-monkey-hotels-guide",
    name: "地獄谷野猿公苑スノーモンキー＆渋温泉厄除九湯めぐり",
    hotelSearches: [
      "歴史の宿 金具屋",
      "渋ホテル",
      "よろづや 湯田中",
      "さかえや 渋温泉",
      "地獄谷温泉 後楽館"
    ],
    wikiSpots: ["地獄谷野猿公苑", "渋温泉", "湯田中温泉", "志賀高原"]
  },
  {
    themeId: "winter-tottori-sand-dunes-illusion-matsubagani-misasa-kaike-guide",
    name: "鳥取砂丘光の祭典＆11月解禁幻のとっとり松葉がに",
    hotelSearches: [
      "皆生つるや",
      "皆生温泉 華水亭",
      "依山楼 岩崎",
      "三朝温泉 万翆楼",
      "湯喜望 白扇"
    ],
    wikiSpots: ["鳥取砂丘", "皆生温泉", "三朝温泉", "ズワイガニ"]
  },
  {
    themeId: "winter-shizuoka-atami-winter-fireworks-baien-momiji-ume-hotels-guide",
    name: "熱海海上花火大会（冬）＆熱海梅園紅葉と早咲き梅",
    hotelSearches: [
      "ホテルニューアカオ",
      "熱海後楽園ホテル",
      "熱海温泉 古屋旅館",
      "秀花園 湯の花膳",
      "熱海 金城館"
    ],
    wikiSpots: ["熱海温泉", "熱海梅園", "熱海海上花火大会", "お宮の松"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Batch 286-290 (Rakuten & Wiki) ===');
  const results = {};

  for (const theme of THEMES) {
    console.log(`\nFetching data for theme: ${theme.name} (${theme.themeId})...`);
    results[theme.themeId] = {
      themeId: theme.themeId,
      name: theme.name,
      hotels: [],
      wiki: {}
    };

    // 1. Fetch Rakuten Hotels
    for (const kw of theme.hotelSearches) {
      console.log(`  -> Rakuten hotel search: "${kw}"`);
      try {
        const hotels = await searchRakutenHotels(kw, 1);
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          console.log(`     Found: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, MinCharge: ${h.hotelMinCharge})`);
          results[theme.themeId].hotels.push(h);
        } else {
          console.warn(`     Not found for "${kw}"`);
        }
      } catch (err) {
        console.error(`     Error searching "${kw}":`, err.message);
      }
      await sleep(1200); // Rate limit protection
    }

    // 2. Fetch Wikipedia Spots
    for (const spot of theme.wikiSpots) {
      console.log(`  -> Wiki spot search: "${spot}"`);
      const wikiData = await fetchWikiData(spot);
      console.log(`     Wiki summary: ${wikiData.title} (Image: ${wikiData.thumbnail ? 'YES' : 'NO'}, Extract: ${wikiData.extract ? wikiData.extract.length + ' chars' : 'NO'})`);
      results[theme.themeId].wiki[spot] = wikiData;
      await sleep(400);
    }
  }

  const outputPath = path.join(__dirname, 'batch_286_290_live_data.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✅ Successfully saved live data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_batch_286_290_data:', err);
  process.exit(1);
});
