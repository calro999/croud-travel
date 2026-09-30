const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'aomori_owani_hirosaki',
    label: '青森・津軽 大鰐温泉＆弘前（開湯800年津軽の奥座敷・冬限定「大鰐温泉もやし」・津軽あっぷる牛・弘前城冬のさくらライトアップ）',
    queries: [
      '大鰐温泉　不二やホテル',
      '大鰐温泉郷　青森ワイナリーホテル',
      '大鰐温泉　登録有形文化財の宿　ヤマニ仙遊館',
      '大鰐温泉　料理旅館　福士館',
      '大鰐温泉　昇泉閣　紅葉館'
    ]
  },
  {
    theme: 'mie_sakakibara_akame',
    label: '三重・津 榊原温泉＆赤目四十八滝・伊賀（清少納言が称えた日本三名泉「七栗の湯」・pH9.4超とろとろ美肌ぬる湯・極上伊賀牛すき焼き）',
    queries: [
      '榊原温泉　まろき湯の宿　湯元　榊原舘',
      '榊原温泉　旅館　清少納言',
      '榊原温泉　湯の瀬',
      '赤目温泉　隠れの湯　対泉閣',
      '赤目温泉　山水園'
    ]
  },
  {
    theme: 'tottori_iwai_uradome',
    label: '鳥取・岩美 岩井温泉＆浦富海岸（開湯1300年山陰最古の名湯・11月解禁本場鳥取松葉ガニ・鳥取和牛オレイン55・世界ジオパーク浦富海岸）',
    queries: [
      '岩井温泉　岩井屋',
      '岩井温泉　浪漫伝承の宿　明石家',
      'かまや旅館',
      'シーサイドうらどめ',
      '鳥取温泉　観水庭こぜにや'
    ]
  },
  {
    theme: 'oita_yunohira_yufu',
    label: '大分・由布 湯平温泉（由布院の奥座敷・初冬の石畳赤提灯・豊後牛すき焼き＆冬の滋味合鴨鍋・開湯鎌倉時代の情緒名宿）',
    queries: [
      '湯平温泉　旅館　山城屋',
      'ゆふいん　湯平温泉　山荘松屋',
      '湯平温泉　右丸旅館',
      '湯平温泉　ゆけむりの宿　花木綿',
      '湯平温泉　癒しの宿　鷹勝'
    ]
  },
  {
    theme: 'kumamoto_kikuchi_valley',
    label: '熊本・菊池 菊池温泉＆菊池渓谷（名湯百選「化粧の湯」・初冬の清流渓谷美・極上熊本あか牛ステーキ＆菊池名水ポーク）',
    queries: [
      '菊池温泉　　菊池　笹乃家',
      '菊池温泉　木立ちの中の宿　清流荘',
      '菊池温泉　望月旅館',
      '菊池温泉　菊池グランドホテル',
      '菊池温泉　城乃井旅館'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 91 via Official Rakuten API');
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
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round91_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
