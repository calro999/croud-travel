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
  console.log('--- Collecting Live Data for 5 Winter Destinations (Round 142) ---');

  const themes = [
    {
      id: 'theme_1_sounkyo',
      slug: 'sounkyo-onsen-hyobaku-festival-daisetsuzan-winter-guide',
      title: '層雲峡温泉の氷瀑まつりと大雪山白銀大渓谷！七色ライトアップ氷の宮殿と旭山動物園雪景色・源泉かけ流し名宿ガイド',
      prefecture: '北海道',
      area: '層雲峡・大雪山',
      rakutenKeyword: '層雲峡温泉',
      wikiSpots: ['層雲峡', '大雪山', '旭川市旭山動物園']
    },
    {
      id: 'theme_2_shirahone',
      slug: 'shirahone-onsen-milky-snow-roten-norikura-winter-guide',
      title: '白骨温泉の白銀乳白色秘湯と名物野天風呂！「三日入れば三年風邪をひかぬ」名湯と乗鞍高原氷瀑・信州投じ蕎麦名宿ガイド',
      prefecture: '長野県',
      area: '白骨・乗鞍',
      rakutenKeyword: '白骨温泉',
      wikiSpots: ['白骨温泉', '乗鞍高原', '乗鞍岳']
    },
    {
      id: 'theme_3_shuzenji',
      slug: 'shuzenji-onsen-bamboo-forest-snow-winter-plum-izu-guide',
      title: '修善寺温泉の冬の小京都・竹林の小径と早咲き修善寺梅林！弘法大師ゆかりの独鈷の湯とズガニうどん・伊豆牛会席名宿ガイド',
      prefecture: '静岡県',
      area: '中伊豆・修善寺',
      rakutenKeyword: '修善寺温泉',
      wikiSpots: ['修善寺温泉', '修禅寺', '竹林の小径']
    },
    {
      id: 'theme_4_misasa',
      slug: 'misasa-onsen-radium-hotspring-matsuba-crab-winter-guide',
      title: '三朝温泉の世界屈指高濃度ラドン泉と活松葉ガニフルコース！三朝橋河原風呂と国宝三徳山三佛寺・冬の鳥取名宿ガイド',
      prefecture: '鳥取県',
      area: '三朝・倉吉',
      rakutenKeyword: '三朝温泉',
      wikiSpots: ['三朝温泉', '三徳山', '鳥取砂丘']
    },
    {
      id: 'theme_5_tendo',
      slug: 'tendo-onsen-snow-yamadera-risshakuji-yamagata-beef-guide',
      title: '天童温泉の雪の山寺（立石寺）水墨画絶景と将棋駒の街！弱アルカリ美肌の湯と極上山形牛すき焼き・寒中さくらんぼ名宿ガイド',
      prefecture: '山形県',
      area: '天童・山形',
      rakutenKeyword: '天童温泉',
      wikiSpots: ['天童温泉', '立石寺', '舞鶴山']
    }
  ];

  const results = {};

  for (const t of themes) {
    console.log(`\nFetching for: ${t.title}`);
    console.log(`Keyword: ${t.rakutenKeyword}`);
    const hotels = await searchRakutenHotels(t.rakutenKeyword, 6);
    console.log(`Found ${hotels.length} hotels on Rakuten`);

    const wikiSpotsData = [];
    for (const ws of t.wikiSpots) {
      console.log(`Fetching Wiki for spot: ${ws}`);
      const wd = await fetchWikiSafe(ws);
      wikiSpotsData.push(wd);
      console.log(`  Wiki res: ${wd.spotName} (image: ${wd.image ? 'YES' : 'NO'}, extract: ${wd.extract ? wd.extract.slice(0, 30) + '...' : 'EMPTY'})`);
    }

    results[t.id] = {
      ...t,
      hotels,
      wikiSpotsData
    };
  }

  const outPath = path.join(__dirname, '..', 'scratch', 'fresh_winter_round142_collected_data.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved fresh collected data to: ${outPath}`);
}

main().catch(console.error);
