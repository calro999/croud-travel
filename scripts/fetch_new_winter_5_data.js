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
      id: 'theme_1_nozawa',
      slug: 'nozawa-onsen-soto-yu-meguri-dosojin-matsuri-winter-guide',
      title: '野沢温泉の冬雪景色と13の外湯めぐり・道祖神祭り！麻釜の湯煙と本場野沢菜・信州牛すき焼きを愉しむ雪国名宿ガイド',
      prefecture: '長野県',
      area: '野沢温泉・飯山',
      rakutenKeyword: '野沢温泉',
      wikiSpots: ['野沢温泉', '野沢温泉村', '道祖神']
    },
    {
      id: 'theme_2_okuhida',
      slug: 'okuhida-onsen-kyo-aodaru-hyobaku-lightup-shinhotaka-winter-guide',
      title: '奥飛騨温泉郷の青だる氷瀑ライトアップと新穂高ロープウェイ冠雪美！大自然の雪見露天風呂と飛騨牛囲炉裏会席名宿ガイド',
      prefecture: '岐阜県',
      area: '奥飛騨・新穂高',
      rakutenKeyword: '奥飛騨温泉郷',
      wikiSpots: ['奥飛騨温泉郷', '新穂高ロープウェイ', '新穂高温泉']
    },
    {
      id: 'theme_3_akan',
      slug: 'akan-lake-frost-flower-ice-festival-ainu-kotan-winter-guide',
      title: '阿寒湖の奇跡フロストフラワーと氷上フェスティバル！アイヌコタン雪灯りと源泉かけ流し雪見温泉・道東美味宿ガイド',
      prefecture: '北海道',
      area: '阿寒・摩周・屈斜路',
      rakutenKeyword: '阿寒湖温泉',
      wikiSpots: ['阿寒湖', '阿寒湖温泉', 'マリモ']
    },
    {
      id: 'theme_4_shimonoseki_nagato',
      slug: 'shimonoseki-torafugu-nagato-yumoto-onsen-motonosumi-winter-guide',
      title: '下関の本場とらふぐフルコースと長門湯本温泉！元乃隅神社開運初詣と冬の日本海絶景を巡る大人の美食湯宿ガイド',
      prefecture: '山口県',
      area: '下関・長門湯本',
      rakutenKeyword: '長門湯本温泉',
      wikiSpots: ['唐戸市場', '長門湯本温泉', '元乃隅神社']
    },
    {
      id: 'theme_5_aizu_higashiyama',
      slug: 'aizu-higashiyama-onsen-ouchijuku-snow-tsurugajo-winter-guide',
      title: '大内宿の白銀茅葺き雪まつりと会津若松・東山温泉！鶴ヶ城の雪化粧と名物ねぎそば・極上会津馬刺しを味わう名宿ガイド',
      prefecture: '福島県',
      area: '会津若松・東山温泉',
      rakutenKeyword: '会津若松 東山温泉',
      wikiSpots: ['大内宿', '東山温泉', '若松城']
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

  const outPath = path.join(__dirname, '..', 'scratch', 'new_winter_5_collected_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved fresh collected data to: ${outPath}`);
}

main();
