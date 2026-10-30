// scripts/fetch_new_5_articles_data.js
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

const NEW_THEMES = [
  {
    themeId: "winter-mie-nabana-no-sato-illumination-nagashima-hotels-guide",
    name: "なばなの里イルミネーション＆伊勢湾味覚",
    hotelSearches: [
      "ホテル花水木",
      "ガーデンホテルオリーブ",
      "ホテルナガシマ",
      "素粋居",
      "ホテルルートイン桑名"
    ],
    wikiSpots: ["なばなの里", "ナガシマスパーランド", "伊勢神宮", "六華苑"]
  },
  {
    themeId: "autumn-winter-atami-kaijo-hanabi-momiji-onsen-hotels-guide",
    name: "熱海海上花火大会＆熱海梅園もみじまつり",
    hotelSearches: [
      "熱海後楽園ホテル",
      "熱海パールスターホテル",
      "ホテルニューアカオ",
      "熱海温泉 古屋旅館",
      "秀花園 湯の花膳"
    ],
    wikiSpots: ["熱海海上花火大会", "熱海温泉", "熱海梅園", "来宮神社"]
  },
  {
    themeId: "autumn-winter-ashikaga-flower-park-illumination-hotels-guide",
    name: "あしかがフラワーパーク光の花の庭＆足利学校",
    hotelSearches: [
      "ホテルルートイン足利駅前",
      "ニューミヤコホテル足利本館",
      "ホテルサンルート佐野",
      "仙水閣 佐野",
      "東横イン 栃木足利駅北口"
    ],
    wikiSpots: ["あしかがフラワーパーク", "足利学校", "鑁阿寺", "惣宗寺"]
  },
  {
    themeId: "autumn-winter-matsumoto-castle-night-illumination-onsen-hotels-guide",
    name: "国宝松本城ナイトイルミネーション＆浅間温泉",
    hotelSearches: [
      "浅間温泉 ホテル玉之湯",
      "浅間温泉 梅の湯",
      "松本ホテル花月",
      "美ヶ原温泉 追分屋旅館",
      "リッチモンドホテル松本"
    ],
    wikiSpots: ["松本城", "浅間温泉", "美ヶ原温泉", "旧開智学校"]
  },
  {
    themeId: "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide",
    name: "湖東三山＆永源寺錦秋紅葉とおごと温泉",
    hotelSearches: [
      "びわこ緑水亭",
      "おごと温泉 暖灯館 きくのや",
      "彦根キャッスル リゾート＆スパ",
      "休暇村 近江八幡",
      "八日市ロイヤルホテル"
    ],
    wikiSpots: ["金剛輪寺", "永源寺", "彦根城", "雄琴温泉"]
  }
];

async function main() {
  const result = {};

  for (const theme of NEW_THEMES) {
    console.log(`\n=== Processing theme: ${theme.name} (${theme.themeId}) ===`);
    result[theme.themeId] = {
      name: theme.name,
      hotels: [],
      wiki: {}
    };

    // 1. 楽天APIでホテル取得
    for (const kw of theme.hotelSearches) {
      console.log(`Searching Rakuten: ${kw}...`);
      try {
        const hotels = await searchRakutenHotels(kw, 1);
        if (hotels && hotels.length > 0) {
          result[theme.themeId].hotels.push(hotels[0]);
          console.log(`  -> Found: ${hotels[0].hotelName} (No: ${hotels[0].hotelNo})`);
        } else {
          console.warn(`  -> Not found for: ${kw}`);
        }
      } catch (err) {
        console.error(`  -> Rakuten error for ${kw}:`, err.message);
      }
      await sleep(1100);
    }

    // 2. Wikipedia APIで観光地取得
    for (const spot of theme.wikiSpots) {
      console.log(`Fetching Wiki: ${spot}...`);
      const wikiData = await fetchWikiData(spot);
      result[theme.themeId].wiki[spot] = wikiData;
      console.log(`  -> Wiki Title: ${wikiData.title}, Img: ${wikiData.thumbnail ? 'YES' : 'NO'}`);
      await sleep(400);
    }
  }

  const outPath = path.join(__dirname, 'new_5_killer_articles_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSaved live API data to: ${outPath}`);
}

main().catch(console.error);
