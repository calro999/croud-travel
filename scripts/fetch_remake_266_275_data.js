// scripts/fetch_remake_266_275_data.js
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getHotelByNoFull(hotelNo, retry = 0) {
  return new Promise((resolve) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20260731?format=json&hotelNo=${hotelNo}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const json = JSON.parse(data);
          if (json.statusCode === 429 && retry < 3) {
            await sleep(1500);
            return resolve(await getHotelByNoFull(hotelNo, retry + 1));
          }
          if (json.hotels && json.hotels.length > 0) {
            const hArr = json.hotels[0].hotel;
            const b = hArr[0].hotelBasicInfo;
            const r = hArr.find(x => x.hotelRatingInfo)?.hotelRatingInfo || {};
            resolve({
              hotelNo: b.hotelNo,
              hotelName: b.hotelName,
              hotelKanaName: b.hotelKanaName || '',
              hotelImageUrl: b.hotelImageUrl || '',
              roomImageUrl: b.roomImageUrl || b.hotelImageUrl || '',
              reviewCount: b.reviewCount || 0,
              reviewAverage: b.reviewAverage || 0,
              hotelMinCharge: b.hotelMinCharge || 0,
              address1: b.address1 || '',
              address2: b.address2 || '',
              access: b.access || '',
              parkingInformation: b.parkingInformation || '',
              hotelSpecial: b.hotelSpecial || '',
              ratings: r,
              affiliateUrl: `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/HOTEL/${b.hotelNo}/${b.hotelNo}.html`)}`
            });
          } else {
            console.warn('Hotel not found:', hotelNo, json);
            resolve(null);
          }
        } catch (e) {
          console.error('Error parsing hotel', hotelNo, e.message);
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

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
          resolve({ title, extract: '', thumbnail: null, originalimage: null });
        }
      });
    });
    req.on('error', () => resolve({ title, extract: '', thumbnail: null, originalimage: null }));
    req.setTimeout(6000, () => { req.abort(); resolve({ title, extract: '', thumbnail: null, originalimage: null }); });
  });
}

const ARTICLES = [
  {
    noteNum: 266,
    slug: "autumn-november-izumo-kamiarisai-togakushi-soba-arashiyama-onsen-guide",
    hotelNos: [7798, 19338, 52848, 158466],
    wikiSpots: ["出雲大社", "玉造温泉", "戸隠神社", "嵐山"]
  },
  {
    noteNum: 267,
    slug: "autumn-november-akizuki-castle-tsukioka-kaminoyama-yufuin-onsen-guide",
    hotelNos: [67445, 32388, 27923, 139452],
    wikiSpots: ["秋月城", "月岡温泉", "上山温泉", "金鱗湖"]
  },
  {
    noteNum: 268,
    slug: "autumn-november-nagatoro-shuzenji-kasumi-crab-miyajima-onsen-guide",
    hotelNos: [9485, 27983, 5269, 11125],
    wikiSpots: ["長瀞渓谷", "修善寺温泉", "香住温泉", "厳島神社"]
  },
  {
    noteNum: 269,
    slug: "autumn-november-kawaguchiko-momiji-nikko-arashiyama-takachiho-kagura-guide",
    hotelNos: [43939, 41382, 130702, 146124],
    wikiSpots: ["河口湖", "日光東照宮", "渡月橋", "高千穂夜神楽"]
  },
  {
    noteNum: 270,
    slug: "autumn-november-karatsu-kunchi-kenrokuen-shodoshima-kankakei-shimabara-guide",
    hotelNos: [54215, 153452, 17990, 878],
    wikiSpots: ["唐津くんち", "兼六園", "寒霞渓", "島原温泉"]
  },
  {
    noteNum: 271,
    slug: "autumn-november-izumo-tamatsukuri-iya-kazurabashi-ohara-sanzenin-chichibu-guide",
    hotelNos: [78179, 20228, 71953, 9706],
    wikiSpots: ["稲佐の浜", "祖谷のかずら橋", "三千院", "秩父夜祭"]
  },
  {
    noteNum: 272,
    slug: "autumn-november-jingu-gaien-icho-yorokeikoku-yabakei-unzen-onsen-guide",
    hotelNos: [173094, 164579, 80668, 28126],
    wikiSpots: ["明治神宮外苑", "養老渓谷", "耶馬渓", "雲仙温泉"]
  },
  {
    noteNum: 273,
    slug: "autumn-november-kinosaki-awara-crab-yamanakako-kyoto-higashiyama-onsen-guide",
    hotelNos: [14007, 16207, 75376, 17903],
    wikiSpots: ["城崎温泉", "芦原温泉", "山中湖", "永観堂禅林寺"]
  },
  {
    noteNum: 274,
    slug: "autumn-november-nagano-ebisukou-fireworks-ikaho-kajikabashi-misasa-crab-guide",
    hotelNos: [806, 28606, 5840, 40046],
    wikiSpots: ["長野えびす講煙火大会", "善光寺", "伊香保温泉", "三朝温泉"]
  },
  {
    noteNum: 275,
    slug: "autumn-november-nabananosato-huistenbosch-hakodate-ashikaga-illumination-guide",
    hotelNos: [106022, 9159, 184396, 71927],
    wikiSpots: ["なばなの里", "ハウステンボス", "金森赤レンガ倉庫", "あしかがフラワーパーク"]
  }
];

async function main() {
  console.log('=== Fetching Live Data for Remake of 266-275 ===');
  const allData = {};
  for (const item of ARTICLES) {
    console.log(`\nProcessing note-${item.noteNum} (${item.slug})...`);
    const hotels = [];
    for (const hNo of item.hotelNos) {
      const h = await getHotelByNoFull(hNo);
      await sleep(1100);
      if (h) {
        console.log(`  ✅ Hotel [${h.hotelNo}] ${h.hotelName} (★${h.reviewAverage})`);
        hotels.push(h);
      }
    }
    const wiki = {};
    for (const spot of item.wikiSpots) {
      const w = await fetchWikiData(spot);
      await sleep(250);
      console.log(`  📸 Wiki [${spot}]: ${w.thumbnail ? 'Has Image' : 'No Image'} (${w.extract.length} chars)`);
      wiki[spot] = w;
    }
    allData[item.noteNum] = {
      noteNum: item.noteNum,
      slug: item.slug,
      hotels,
      wiki
    };
  }
  const outPath = path.join(__dirname, 'remake_266_275_live_data.json');
  fs.writeFileSync(outPath, JSON.stringify(allData, null, 2), 'utf8');
  console.log(`\n🎉 Saved all remake live data to ${outPath}`);
}

main();
