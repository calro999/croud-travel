const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tochigi_nikko_toshogu',
    slug: 'winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay',
    label: '栃木・日光東照宮＆日光温泉（世界遺産日光東照宮冬初詣・杉並木雪景色＆名物「日光湯波会席」・とちぎ和牛・渓谷露天風呂名宿）',
    queries: [
      '日光千姫物語',
      '日光金谷ホテル',
      '日光 星の宿',
      '小槌の宿 鶴亀大吉',
      '日光西町倶楽部',
      '日光温泉 ホテル',
      '日光 旅館'
    ]
  },
  {
    theme: 'chiba_naritasan_sawara',
    slug: 'winter-chiba-naritasan-shinshoji-hatsumode-unagi-sawara-stay',
    label: '千葉・成田山新勝寺＆佐原小江戸（初詣全国屈指・成田山新勝寺開運祈願＆表参道老舗うなぎ・北総小江戸佐原の重伝建雪風情名宿）',
    queries: [
      '和空 成田山門前',
      '成田山門前 旅館 若松本店',
      'アートホテル成田',
      '佐原商家町ホテル ＮＩＰＰＯＮＩＡ',
      'ヒルトン成田',
      'ホテルマイステイズプレミア成田',
      '成田 温泉 ホテル'
    ]
  },
  {
    theme: 'nara_hasedera_oomiwa',
    slug: 'winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay',
    label: '奈良・長谷寺＆大神神社・橿原神宮（冬牡丹の藁囲い・大和路の静謐な祈りと日本最古神社初詣＆極上大和牛すき焼き・吉野葛名宿）',
    queries: [
      '長谷寺 井谷屋',
      'THE KASHIHARA',
      '多武峰観光ホテル',
      'カンデオホテルズ 奈良橿原',
      'ホテルニューわかむら',
      '奈良 橿原 ホテル',
      '桜井市 ホテル'
    ]
  },
  {
    theme: 'shimane_adachi_saginoyu',
    slug: 'winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay',
    label: '島根・足立美術館＆さぎの湯温泉・安来（米誌20年連続日本一の日本庭園「足立美術館」白銀の山水画雪景色＆白鷺伝説の美肌泉・しまね和牛と松葉ガニ名宿）',
    queries: [
      'さぎの湯荘',
      '安来苑',
      '竹葉 足立美術館',
      '皆生シーサイドホテル',
      'ホテルアクシス',
      '安来 ホテル',
      '松江しんじ湖温泉 ホテル'
    ]
  },
  {
    theme: 'fukuoka_dazaifu_futsukaichi',
    slug: 'winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay',
    label: '福岡・太宰府天満宮＆二日市温泉（学問の神様・合格祈願＆新春200万人初詣・名物梅ヶ枝餅＆万葉集の古湯二日市温泉・博多和牛名宿）',
    queries: [
      '大丸別荘',
      '二日市温泉 大正亭',
      '二日市温泉 清風荘',
      'ＨＯＴＥＬ ＣＵＬＴＩＡ 太宰府',
      'グランティア太宰府',
      '二日市温泉 旅館',
      '太宰府 ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 104 via Official Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Selected: [${selected.hotelNo}] ${selected.hotelName} (Rating: ${selected.reviewAverage}, MinCharge: ${selected.hotelMinCharge})`);
          } else {
            console.log(`  -> All hotels from query "${q}" were already selected.`);
          }
        } else {
          console.log(`  -> No hotels found for "${q}".`);
        }
      } catch (err) {
        console.error(`Error querying "${q}":`, err.message);
      }
    }

    // 5件に満たない場合のフォールバック
    if (themeHotels.length < 5) {
      console.log(`Need more hotels for ${t.theme} (currently ${themeHotels.length}), doing broader search...`);
      const fallbackQueries = {
        tochigi_nikko_toshogu: ['日光 ホテル', '日光 旅館', '鬼怒川温泉 ホテル', '中禅寺湖 ホテル'],
        chiba_naritasan_sawara: ['成田駅 ホテル', '成田空港 ホテル', '佐原 ホテル', '成田市 ホテル'],
        nara_hasedera_oomiwa: ['橿原神宮 ホテル', '奈良 桜井 ホテル', '大和八木 ホテル', '吉野 旅館'],
        shimane_adachi_saginoyu: ['安来 ホテル', '米子駅 ホテル', '松江 旅館', '玉造温泉 ホテル'],
        fukuoka_dazaifu_futsukaichi: ['太宰府 ホテル', '二日市 ホテル', '筑紫野 ホテル', '福岡 南区 ホテル']
      };

      const broadList = fallbackQueries[t.theme] || [];
      for (const bq of broadList) {
        if (themeHotels.length >= 5) break;
        console.log(`Broad Query: "${bq}"...`);
        try {
          const hotels = await searchRakutenHotels(bq, 5);
          await sleep(1300);
          if (hotels && hotels.length > 0) {
            for (const h of hotels) {
              if (themeHotels.length >= 5) break;
              if (!usedHotelNos.has(h.hotelNo)) {
                usedHotelNos.add(h.hotelNo);
                themeHotels.push(h);
                console.log(`  -> Added: [${h.hotelNo}] ${h.hotelName}`);
              }
            }
          }
        } catch (err) {
          console.error(`Error on broad query "${bq}":`, err.message);
        }
      }
    }

    result[t.theme] = {
      slug: t.slug,
      label: t.label,
      hotels: themeHotels
    };
    console.log(`Total hotels fetched for ${t.theme}: ${themeHotels.length}`);
  }

  const outPath = path.join(__dirname, 'round104_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to ${outPath}`);
}

main().catch((err) => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
