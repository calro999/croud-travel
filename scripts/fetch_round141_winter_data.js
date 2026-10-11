const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWikiSafe(title) {
  await sleep(1100);
  return new Promise((resolve) => {
    const url = 'https://ja.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title);
    const options = {
      headers: {
        'User-Agent': 'TravelGuideBot/1.0 (https://croud-travel.pages.dev; dev@croud-travel.com)'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          resolve({
            spotName: title,
            wikiTitle: j.title || title,
            extract: j.extract || '',
            image: j.originalimage ? j.originalimage.source : (j.thumbnail ? j.thumbnail.source : null)
          });
        } catch (e) {
          console.error(`Wiki parse error for ${title}:`, e.message);
          resolve({ spotName: title, wikiTitle: title, extract: '', image: null });
        }
      });
    }).on('error', (err) => {
      console.error(`Wiki net error for ${title}:`, err.message);
      resolve({ spotName: title, wikiTitle: title, extract: '', image: null });
    });
  });
}

async function searchRakutenHotels(keyword, hits = 6, retryCount = 0) {
  await sleep(1000);
  return new Promise((resolve) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=${hits}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const json = JSON.parse(data);
          if (json.error === 'rate_limit_exceeded' || json.statusCode === 429) {
            if (retryCount < 3) {
              console.log(`Rate limited on Rakuten keyword ${keyword}, sleeping 2s...`);
              await sleep(2000);
              return resolve(await searchRakutenHotels(keyword, hits, retryCount + 1));
            }
          }
          if (json.hotels) {
            const list = json.hotels.map(h => {
              const b = h.hotel[0].hotelBasicInfo;
              return {
                hotelNo: b.hotelNo,
                hotelName: b.hotelName,
                hotelKanaName: b.hotelKanaName || '',
                hotelImageUrl: b.hotelImageUrl || '',
                roomImageUrl: b.roomImageUrl || '',
                reviewCount: b.reviewCount || 0,
                reviewAverage: b.reviewAverage || 0,
                hotelMinCharge: b.hotelMinCharge || 0,
                address1: b.address1 || '',
                address2: b.address2 || '',
                access: b.access || '',
                hotelSpecial: b.hotelSpecial || '',
                affiliateUrl: `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/HOTEL/${b.hotelNo}/${b.hotelNo}.html`)}`
              };
            });
            resolve(list);
          } else {
            console.warn('No hotels found for keyword:', keyword, json);
            resolve([]);
          }
        } catch (e) {
          console.error(`Rakuten parse error for ${keyword}:`, e.message);
          resolve([]);
        }
      });
    }).on('error', (err) => {
      console.error(`Rakuten net error for ${keyword}:`, err.message);
      resolve([]);
    });
  });
}

async function main() {
  console.log('--- Collecting Live Data for 5 Winter Destinations (Round 141) ---');

  const themes = [
    {
      id: 'theme_1_kinosaki',
      slug: 'kinosaki-onsen-matsuba-crab-snow-sotoyu-meguri-guide',
      title: '城崎温泉の冬本番・活松葉ガニ会席と雪の柳並木外湯めぐり！七田の外湯巡り手形と玄武洞・出石皿そば名宿ガイド',
      prefecture: '兵庫県',
      area: '城崎温泉・豊岡',
      rakutenKeyword: '城崎温泉',
      wikiSpots: ['城崎温泉', '玄武洞', '出石']
    },
    {
      id: 'theme_2_hanamaki',
      slug: 'hanamaki-onsen-kyo-tachiyu-snow-roten-ihatov-guide',
      title: '花巻温泉郷の白銀秘湯・名物立湯雪見風呂と前沢牛すき焼き！宮沢賢治イーハトーブ雪景色と賢治記念館を巡る名宿ガイド',
      prefecture: '岩手県',
      area: '花巻・北上',
      rakutenKeyword: '花巻温泉',
      wikiSpots: ['花巻温泉郷', '鉛温泉', '宮沢賢治記念館']
    },
    {
      id: 'theme_3_kurokawa',
      slug: 'kurokawa-onsen-yuakari-snow-noten-aso-guide',
      title: '黒川温泉の冬の幻想「湯あかり」竹灯籠雪景色と入湯手形野天風呂！阿蘇カルデラ絶景と肥後あか牛・馬刺し名宿ガイド',
      prefecture: '熊本県',
      area: '黒川・杖立・わいた',
      rakutenKeyword: '黒川温泉',
      wikiSpots: ['黒川温泉', '阿蘇山', '草千里ヶ浜']
    },
    {
      id: 'theme_4_unazuki',
      slug: 'unazuki-onsen-kurobe-gorge-snow-kanburi-crab-guide',
      title: '宇奈月温泉の黒部峡谷雪景色と弱アルカリ性美肌の湯！冬の王者「氷見寒ブリ」「紅ズワイガニ」と冬花火を愉しむ名宿ガイド',
      prefecture: '富山県',
      area: '宇奈月・黒部',
      rakutenKeyword: '宇奈月温泉',
      wikiSpots: ['宇奈月温泉', '黒部峡谷', '氷見漁港']
    },
    {
      id: 'theme_5_atami',
      slug: 'atami-onsen-winter-fireworks-early-plum-kinmedai-guide',
      title: '熱海温泉の冬海上花火大会と熱海梅園の日本一早咲きの梅！オーシャンビュー波音露天風呂と金目鯛煮付け・伊勢海老名宿ガイド',
      prefecture: '静岡県',
      area: '熱海',
      rakutenKeyword: '熱海温泉',
      wikiSpots: ['熱海温泉', '熱海梅園', '來宮神社']
    }
  ];

  const results = {};

  for (const t of themes) {
    console.log(`\n[Theme] ${t.id} (${t.prefecture}: ${t.rakutenKeyword})...`);
    console.log(`Fetching Rakuten hotels for keyword: "${t.rakutenKeyword}"...`);
    const hotels = await searchRakutenHotels(t.rakutenKeyword, 6);
    console.log(`Retrieved ${hotels.length} hotels.`);

    const wikiData = [];
    for (const spot of t.wikiSpots) {
      console.log(`Fetching Wikipedia spot: "${spot}"...`);
      const w = await fetchWikiSafe(spot);
      wikiData.push(w);
      console.log(`  -> ${w.wikiTitle}: hasImage=${!!w.image}, extractLen=${w.extract.length}`);
    }

    results[t.id] = {
      ...t,
      hotels,
      wikiSpotsData: wikiData
    };
  }

  const scratchDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
  const outPath = path.join(scratchDir, 'fresh_winter_round141_collected_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved collected data to: ${outPath}`);
}

main();
