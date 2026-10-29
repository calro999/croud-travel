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
    themeId: "autumn-saga-balloon-karatsukunchi-hotels-guide",
    name: "佐賀バルーンフェスタ＆唐津くんち",
    hotelSearches: [
      "唐津シーサイドホテル",
      "武雄温泉 御船山楽園ホテル",
      "古湯温泉 ONCRI",
      "ホテルニューオータニ佐賀",
      "武雄温泉 京都屋"
    ],
    wikiSpots: ["佐賀インターナショナルバルーンフェスタ", "唐津くんち", "武雄温泉", "唐津城"]
  },
  {
    themeId: "autumn-winter-chichibu-yomatsuri-nagatoro-hotels-guide",
    name: "秩父夜祭＆長瀞紅葉ライトアップ",
    hotelSearches: [
      "和どう 秩父",
      "新木鉱泉旅館",
      "ナチュラルファームシティ農園ホテル",
      "長瀞温泉 花のおもてなし 長生館",
      "ホテルルートインGrand秩父"
    ],
    wikiSpots: ["秩父夜祭", "秩父神社", "長瀞渓谷", "三峯神社"]
  },
  {
    themeId: "winter-crab-season-matsuba-echizen-onsen-hotels-guide",
    name: "11月6日カニ解禁！越前がに＆松葉がに",
    hotelSearches: [
      "城崎温泉 西村屋本館",
      "あわら温泉 グランディア芳泉",
      "城崎温泉 お宿 白山",
      "あわら温泉 まつや千千",
      "三国温泉 望洋楼"
    ],
    wikiSpots: ["ズワイガニ", "城崎温泉", "あわら温泉", "東尋坊"]
  },
  {
    themeId: "autumn-kyoto-momiji-lightup-eikando-kiyomizu-hotels-guide",
    name: "京都紅葉ライトアップ＆夜間特別拝観",
    hotelSearches: [
      "ウェスティン都ホテル京都",
      "ハイアット リージェンシー 京都",
      "ホテル ザ セレスティン京都祇園",
      "京都 嵐山 温泉 花伝抄",
      "ホテルオークラ京都"
    ],
    wikiSpots: ["永観堂禅林寺", "清水寺", "東福寺", "高台寺"]
  },
  {
    themeId: "autumn-winter-shirakawago-okuhida-takayama-hotels-guide",
    name: "白川郷＆奥飛騨雪見温泉＆上高地閉山祭",
    hotelSearches: [
      "匠の宿 深山桜庵",
      "本陣平野屋 花兆庵",
      "日本の宿 ひだ高山 倭乃里",
      "御宿 結の庄",
      "穂高荘 山がこの湯"
    ],
    wikiSpots: ["白川郷", "奥飛騨温泉郷", "飛騨高山", "新穂高ロープウェイ"]
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
      await sleep(1200); // APIレートリミット対策
    }

    // 2. Wikipedia APIで観光地取得
    for (const spot of theme.wikiSpots) {
      console.log(`Fetching Wiki: ${spot}...`);
      const wikiData = await fetchWikiData(spot);
      result[theme.themeId].wiki[spot] = wikiData;
      console.log(`  -> Wiki Title: ${wikiData.title}, Img: ${wikiData.thumbnail ? 'YES' : 'NO'}`);
      await sleep(500);
    }
  }

  const outPath = path.join(__dirname, '5_killer_articles_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSaved live API data to: ${outPath}`);
}

main().catch(console.error);
