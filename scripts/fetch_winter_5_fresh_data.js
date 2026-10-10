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
            console.warn('No hotels found for keyword:', keyword);
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
  console.log('--- Collecting Fresh Live Data from Rakuten & Wikipedia APIs ---');

  const themes = [
    {
      id: 'theme_1_zao',
      slug: 'zao-onsen-snow-monster-juhyo-lightup-winter-guide',
      title: '蔵王温泉の樹氷ライトアップ・スノーモンスター体験と強酸性硫黄泉！雪見露天と山形牛会席を愉しむ冬の厳選宿ガイド',
      prefecture: '山形県',
      area: '山形・蔵王',
      rakutenKeyword: '蔵王温泉',
      wikiSpots: ['蔵王温泉', '蔵王連峰', '御釜 (蔵王連峰)']
    },
    {
      id: 'theme_2_kanazawa_kaga',
      slug: 'kenrokuen-yukitsuri-kanazawa-koubakogani-kaga-onsen-guide',
      title: '兼六園の雪吊りと旬の香箱ガニ（せいこがに）解禁！冬の金沢・加賀温泉郷で極上カニ尽くしと名湯を堪能する大人の湯宿ガイド',
      prefecture: '石川県',
      area: '金沢・加賀',
      rakutenKeyword: '加賀温泉',
      wikiSpots: ['兼六園', 'ひがし茶屋街', '山中温泉']
    },
    {
      id: 'theme_3_kusatsu',
      slug: 'kusatsu-onsen-yubatake-winter-lightup-snow-bath-guide',
      title: '草津温泉の冬の湯畑ライトアップと西の河原雪見露天風呂！氷点下に立ち上る湯けむりと上州牛会席を味わうおすすめ名宿ガイド',
      prefecture: '群馬県',
      area: '草津・白根',
      rakutenKeyword: '草津温泉',
      wikiSpots: ['草津温泉', '湯畑', '草津白根山']
    },
    {
      id: 'theme_4_kifune_kyoto',
      slug: 'kifune-shrine-snow-lightup-botannabe-kyoto-onsen-guide',
      title: '貴船神社の積雪日限定ライトアップと冬の京都奥座敷！名物ぼたん鍋と静寂の雪見温泉・大人の風情を愉しむ料理宿ガイド',
      prefecture: '京都府',
      area: '鞍馬・貴船・大原',
      rakutenKeyword: '京都 温泉 露天',
      wikiSpots: ['貴船神社', '鞍馬寺', '三千院']
    },
    {
      id: 'theme_5_nyuto_akita',
      slug: 'nyuto-onsen-kyo-snow-secret-bath-kiritanpo-akita-guide',
      title: '乳頭温泉郷の白銀秘湯めぐりと冬の囲炉裏きりたんぽ鍋！田沢湖・八幡平の豪雪露天と比内地鶏を堪能する厳選名宿ガイド',
      prefecture: '秋田県',
      area: '田沢湖・角館・乳頭温泉郷',
      rakutenKeyword: '田沢湖 温泉',
      wikiSpots: ['乳頭温泉郷', '田沢湖', '角館']
    }
  ];

  const results = {};

  for (const t of themes) {
    console.log(`\nProcessing ${t.id} (${t.prefecture}: ${t.rakutenKeyword})...`);
    console.log(`Fetching Rakuten hotels for "${t.rakutenKeyword}"...`);
    const hotels = await searchRakutenHotels(t.rakutenKeyword, 6);
    console.log(`Retrieved ${hotels.length} hotels.`);

    const wikiData = [];
    for (const spot of t.wikiSpots) {
      console.log(`Fetching Wikipedia spot "${spot}"...`);
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

  const outPath = path.join(__dirname, '..', 'scratch', 'winter_5_new_collected_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved fresh collected data to: ${outPath}`);
}

main();
