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
    themeId: "winter-yamagata-zao-snow-monster-ropeway-onsen-hotels-guide",
    name: "蔵王樹氷（スノーモンスター）＆蔵王温泉・蔵王ロープウェイ",
    hotelSearches: [
      "蔵王国際ホテル",
      "深山荘 高見屋",
      "おおみや旅館",
      "名湯舎 創",
      "わかまつや"
    ],
    wikiSpots: ["蔵王温泉", "蔵王連峰", "山形市", "山形県"]
  },
  {
    themeId: "autumn-winter-aichi-korankei-momiji-lightup-asuke-sanage-onsen-hotels-guide",
    name: "香嵐渓もみじまつり＆足助の古い町並み・猿投温泉",
    hotelSearches: [
      "猿投温泉",
      "ホテルトヨタキャッスル",
      "名鉄トヨタホテル",
      "豊田プレステージホテル",
      "ホテルルートイン豊田陣中"
    ],
    wikiSpots: ["香嵐渓", "足助町", "猿投山", "豊田市"]
  },
  {
    themeId: "winter-gifu-shinhotaka-ropeway-snow-alps-okuhida-onsen-hotels-guide",
    name: "新穂高ロープウェイ白銀北アルプス＆奥飛騨温泉郷雪見露天",
    hotelSearches: [
      "隠庵 ひだ路",
      "匠の宿 深山桜庵",
      "平湯館",
      "平湯温泉 岡田旅館",
      "槍見舘"
    ],
    wikiSpots: ["奥飛騨温泉郷", "新穂高ロープウェイ", "平湯温泉", "北アルプス"]
  },
  {
    themeId: "winter-hokkaido-akan-mashu-frost-flower-ice-lake-onsen-hotels-guide",
    name: "阿寒湖フロストフラワー＆摩周湖霧氷・アイヌコタン阿寒湖温泉",
    hotelSearches: [
      "あかん遊久の里 鶴雅",
      "ニュー阿寒ホテル",
      "阿寒の森 鶴雅リゾート 花ゆう香",
      "屈斜路プリンスホテル",
      "お宿 欣喜湯"
    ],
    wikiSpots: ["阿寒湖", "摩周湖", "阿寒湖温泉", "弟子屈町"]
  },
  {
    themeId: "winter-shizuoka-hamanako-kanzanji-illumination-oyster-unagi-hotels-guide",
    name: "はままつフラワーパークイルミ＆浜名湖どうまん蟹・牡蠣カバ丼・舘山寺温泉",
    hotelSearches: [
      "山水館欣龍",
      "ホテルウェルシーズン浜名湖",
      "グランドメルキュール浜名湖",
      "時わすれ 開華亭",
      "浜名湖レークサイドプラザ"
    ],
    wikiSpots: ["浜名湖", "舘山寺温泉", "はままつフラワーパーク", "弁天島 (浜松市)"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Articles 301-305 (Rakuten API + Wikipedia API) ===');
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

  const outPath = path.join(__dirname, 'batch_301_305_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n🎉 Successfully fetched and saved live data to ${outPath}`);
}

main().catch(console.error);
