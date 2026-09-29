const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'fukushima_takayu',
    label: '福島・高湯温泉＆土湯温泉（吾妻連峰の雪見露天と白濁薬湯・名物福島牛と地酒を味わう名宿）',
    queries: [
      '高湯温泉　花月ハイランドホテル',
      '高湯温泉　旅館　玉子湯',
      '高湯温泉　安達屋',
      '土湯温泉　山水荘',
      '土湯別邸　里の湯',
      '土湯温泉　向瀧'
    ]
  },
  {
    theme: 'yamagata_hijiori',
    label: '山形・肘折温泉（開湯1200年の豪雪秘湯・霊泉と朝市情緒・極上山形牛＆名物芋煮鍋に心温まる名宿）',
    queries: [
      '肘折温泉　湯宿　元河原湯',
      '肘折温泉　丸屋',
      '肘折温泉　優心の宿　観月',
      '肘折温泉　三春屋',
      '肘折温泉　亀屋旅館',
      '肘折温泉　大友屋旅館'
    ]
  },
  {
    theme: 'aomori_shimofuro',
    label: '青森・下北半島下風呂温泉（津軽海峡冬景色と名物風間浦あんこう・極重大間マグロと白濁硫黄泉を巡る名宿）',
    queries: [
      'ホテルニュー下風呂',
      '下風呂観光ホテル　三浦屋',
      '下風呂温泉　まるほん旅館',
      '薬研温泉　薬研荘',
      'むつグランドホテル'
    ]
  },
  {
    theme: 'iwate_oshuku',
    label: '岩手・鶯宿温泉＆雫石（開湯450年の名湯と小岩井農場雪景色・極上雫石牛＆盛岡三大麺を味わう名宿）',
    queries: [
      '鶯宿温泉　ホテル森の風　鶯宿',
      '鶯宿温泉　長栄館',
      '雫石プリンスホテル',
      '鶯宿温泉　川長',
      '鶯宿温泉　偕楽苑',
      '鶯宿温泉　ホテル加賀助'
    ]
  },
  {
    theme: 'okayama_mimasaka',
    label: '岡山・美作三湯奥津＆湯郷温泉（清流奥津渓の初冬雪景色と美肌ぬる湯・極上作州牛＆津山そずり鍋を堪能する名宿）',
    queries: [
      '奥津温泉　名泉鍵湯　奥津荘',
      '湯郷温泉　ポピースプリングス',
      '湯郷温泉　ゆのごう美春閣',
      '湯郷温泉　季譜の里',
      '湯郷温泉　ゆのごう館',
      '奥津温泉　米屋倶楽部　奥津'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 83 (5 Completely New Nov-Dec Winter Themes)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
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
            console.log(`  -> Success: ${selected.hotelName} (No: ${selected.hotelNo}, Rating: ${selected.reviewAverage}, Price: ¥${selected.hotelMinCharge})`);
          } else {
            console.warn(`  -> All results duplicate for "${q}"`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error querying "${q}":`, err.message);
      }
      if (themeHotels.length >= 5) break;
    }

    // 5軒に満たない場合のフォールバック検索
    if (themeHotels.length < 5) {
      console.warn(`\n[Theme ${t.theme}] Found only ${themeHotels.length} hotels. Running broader search...`);
      const fallbackQuery = t.theme === 'fukushima_takayu' ? '高湯温泉' :
                           t.theme === 'yamagata_hijiori' ? '肘折温泉' :
                           t.theme === 'aomori_shimofuro' ? '下風呂温泉' :
                           t.theme === 'iwate_oshuku' ? '鶯宿温泉' : '奥津温泉';
      try {
        const moreHotels = await searchRakutenHotels(fallbackQuery, 10);
        await sleep(1300);
        for (const h of moreHotels) {
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Fallback Success: ${h.hotelName} (No: ${h.hotelNo})`);
            if (themeHotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`  -> Fallback search error:`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round83_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved all hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
