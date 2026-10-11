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
  console.log('=== Collecting Live Data for 5 Winter Destinations (Round 143) ===');

  const themes = [
    {
      id: 'theme_1_himi',
      slug: 'himi-onsen-kanburi-amaharashi-tateyama-winter-guide',
      title: '氷見温泉郷の冬の王者「ひみ寒ぶり」と雨晴海岸の気嵐絶景！海越しに望む白銀立山連峰パノラマ・源泉かけ流し名宿ガイド',
      prefecture: '富山県',
      area: '氷見・高岡',
      rakutenKeyword: '氷見温泉',
      wikiSpots: ['氷見温泉郷', '雨晴海岸', '立山連峰']
    },
    {
      id: 'theme_2_tango',
      slug: 'tango-taiza-crab-ine-funaya-amanohashidate-winter-guide',
      title: '丹後・間人温泉の幻の「間人ガニ」と雪化粧の伊根の舟屋！日本三景・雪の天橋立飛龍観と極上寒ブリしゃぶしゃぶ名宿ガイド',
      prefecture: '京都府',
      area: '丹後・天橋立',
      rakutenKeyword: '間人温泉',
      wikiSpots: ['丹後半島', '伊根の舟屋', '天橋立']
    },
    {
      id: 'theme_3_awajishima',
      slug: 'awajishima-3year-torafugu-suisenkyo-uzushio-winter-guide',
      title: '淡路島温泉の冬の極上味覚「淡路島3年とらふぐ」と灘黒岩水仙郷！鳴門海峡の冬渦潮とうずしお温泉美肌の湯・絶景名宿ガイド',
      prefecture: '兵庫県',
      area: '淡路島・南あわじ',
      rakutenKeyword: '南淡路 温泉',
      wikiSpots: ['淡路島', '鳴門海峡', '灘黒岩水仙郷']
    },
    {
      id: 'theme_4_huistenbosch',
      slug: 'huistenbosch-winter-illumination-unzen-onsen-nagasaki-guide',
      title: 'ハウステンボス「白銀の世界・光の街のクリスマス」と雲仙温泉！1300万球冬イルミネーションと湯煙地獄・霧氷名宿ガイド',
      prefecture: '長崎県',
      area: '佐世保・雲仙',
      rakutenKeyword: 'ハウステンボス',
      wikiSpots: ['ハウステンボス', '雲仙温泉', '雲仙岳']
    },
    {
      id: 'theme_5_manza',
      slug: 'manza-onsen-milky-sulfur-snow-roten-winter-guide',
      title: '万座温泉の標高1800m白銀乳白色秘湯と日本一の濃厚硫黄泉！満天の冬星空・パウダースノー雪見大露天風呂名宿ガイド',
      prefecture: '群馬県',
      area: '万座・嬬恋',
      rakutenKeyword: '万座温泉',
      wikiSpots: ['万座温泉', '上信越高原国立公園', '浅間山']
    }
  ];

  const results = {};

  for (const t of themes) {
    console.log(`\nFetching Rakuten for: ${t.title}`);
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

  const outPath = path.join(__dirname, '..', 'scratch', 'fresh_winter_round143_collected_data.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved fresh collected data to: ${outPath}`);
}

main().catch(console.error);
