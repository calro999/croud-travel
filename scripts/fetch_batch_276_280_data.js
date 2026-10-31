// scripts/fetch_batch_276_280_data.js
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
    themeId: "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide",
    name: "富士河口湖紅葉まつり＆もみじ回廊ライトアップ",
    hotelSearches: [
      "秀峰閣 湖月",
      "富士レイクホテル",
      "湖南荘",
      "うぶや 河口湖",
      "風のテラス KUKUNA"
    ],
    wikiSpots: ["河口湖", "富士山", "忍野八海", "新倉山浅間公園"]
  },
  {
    themeId: "winter-sendai-hikari-no-pageant-akiu-onsen-hotels-guide",
    name: "SENDAI光のページェント＆秋保・作並温泉",
    hotelSearches: [
      "伝承千年の宿 佐勘",
      "秋保温泉 ホテル瑞鳳",
      "秋保温泉 茶寮宗園",
      "作並温泉 鷹泉閣 岩松旅館",
      "ウェスティンホテル仙台"
    ],
    wikiSpots: ["定禅寺通", "秋保温泉", "瑞鳳殿", "仙台城"]
  },
  {
    themeId: "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide",
    name: "奥入瀬渓流 氷瀑ライトアップ＆八甲田・酸ヶ湯温泉",
    hotelSearches: [
      "星野リゾート 奥入瀬渓流ホテル",
      "十和田ホテル",
      "酸ヶ湯温泉旅館",
      "蔦温泉旅館",
      "八戸グランドホテル"
    ],
    wikiSpots: ["奥入瀬渓流", "十和田湖", "八甲田山", "酸ヶ湯"]
  },
  {
    themeId: "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide",
    name: "宮島嚴島神社＆紅葉谷公園もみじ狩り・宮浜温泉",
    hotelSearches: [
      "蔵宿 旅荘 錦水館",
      "宮島グランドホテル 有もと",
      "みやじまの宿 岩惣",
      "安芸グランドホテル",
      "庭園の宿 石亭"
    ],
    wikiSpots: ["厳島神社", "紅葉谷公園 (廿日市市)", "弥山 (広島県)", "宮島水族館"]
  },
  {
    themeId: "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide",
    name: "栗林公園秋の紅葉ライトアップ＆金刀比羅宮もみじ祭",
    hotelSearches: [
      "ことひら温泉 琴参閣",
      "湯元こんぴら温泉華の湯 紅梅亭",
      "琴平グランドホテル 桜の抄",
      "JRホテルクレメント高松",
      "湯山荘 阿讃琴南"
    ],
    wikiSpots: ["栗林公園", "金刀比羅宮", "屋島", "丸亀城"]
  }
];

async function main() {
  const result = {};

  for (const theme of THEMES) {
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
      await sleep(1200);
    }

    // 2. Wikipedia APIで観光地取得
    for (const spot of theme.wikiSpots) {
      console.log(`Fetching Wiki: ${spot}...`);
      let wikiData = await fetchWikiData(spot);
      if (!wikiData.extract && spot.includes('(')) {
        const simpleName = spot.replace(/\s*\(.*?\)/, '');
        console.log(`  -> Retrying Wiki with simplified name: ${simpleName}...`);
        wikiData = await fetchWikiData(simpleName);
      }
      result[theme.themeId].wiki[spot] = wikiData;
      console.log(`  -> Wiki Title: ${wikiData.title}, Img: ${wikiData.thumbnail ? 'YES' : 'NO'}`);
      await sleep(400);
    }
  }

  const outPath = path.join(__dirname, 'batch_276_280_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSaved live API data to: ${outPath}`);
}

main().catch(console.error);
