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
  console.log('--- Collecting Fresh Live Data for 5 Winter Destinations (Nov-Jan) ---');

  const themes = [
    {
      id: 'theme_1_tokachigawa',
      slug: 'tokachigawa-onsen-moor-hotspring-jewelry-ice-winter-guide',
      title: '十勝川温泉の奇跡のモール温泉と豊頃町ジュエリーアイス！白銀の十勝平野絶景と十勝牛・ラクレットチーズ美食宿ガイド',
      prefecture: '北海道',
      area: '十勝・帯広',
      rakutenKeyword: '十勝川温泉',
      wikiSpots: ['十勝川温泉', 'モール温泉', '豊頃町']
    },
    {
      id: 'theme_2_toyako',
      slug: 'toyako-onsen-winter-illumination-lake-view-yotei-guide',
      title: '洞爺湖温泉の冬イルミネーションと雪の羊蹄山パノラマ！不凍湖の絶景レイクビュー雪見露天と噴火湾ホタテ名宿ガイド',
      prefecture: '北海道',
      area: '洞爺・登別',
      rakutenKeyword: '洞爺湖温泉',
      wikiSpots: ['洞爺湖', '洞爺湖温泉', '昭和新山']
    },
    {
      id: 'theme_3_minakami',
      slug: 'minakami-onsen-tanigawadake-snow-river-roten-guide',
      title: '水上温泉郷の谷川岳冠雪パノラマと利根川渓谷雪見露天風呂！首都圏から新幹線で行く白銀秘湯と上州牛会席名宿ガイド',
      prefecture: '群馬県',
      area: '水上・谷川・猿ヶ京',
      rakutenKeyword: '水上温泉',
      wikiSpots: ['水上温泉', '谷川岳', '利根川']
    },
    {
      id: 'theme_4_katsuura',
      slug: 'nanki-katsuura-onsen-tuna-bokido-kumano-nachi-winter-guide',
      title: '南紀勝浦温泉の冬本番生マグロ会席と洞窟露天風呂・忘帰洞！世界遺産熊野那智大社新春開運初詣を巡る名宿ガイド',
      prefecture: '和歌山県',
      area: '勝浦・串本・すさみ',
      rakutenKeyword: '南紀勝浦温泉',
      wikiSpots: ['南紀勝浦温泉', '熊野那智大社', '那智の滝']
    },
    {
      id: 'theme_5_nagayu',
      slug: 'nagayu-onsen-natural-carbonated-spring-kuju-winter-guide',
      title: '長湯温泉の奇跡の天然炭酸泉とラムネ温泉館！久住連山雪景色と芹川沿い雪見湯・極上豊後牛＆スッポン鍋名宿ガイド',
      prefecture: '大分県',
      area: '竹田・久住・長湯',
      rakutenKeyword: '長湯温泉',
      wikiSpots: ['長湯温泉', 'ラムネ温泉館', '九重連山']
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

  const outPath = path.join(__dirname, '..', 'scratch', 'fresh_winter_5_collected_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved collected data to: ${outPath}`);
}

main();
