const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'gunma_houshi_sarugakyo',
    label: '群馬・法師温泉＆猿ヶ京温泉（三国峠の秘湯雪景色・国登録有形文化財「法師乃湯」足元湧出泉と赤谷湖・上州牛すき焼き＆上州麦豚を味わう名宿）',
    queries: [
      '法師温泉　長寿館',
      '猿ヶ京温泉　ル・ヴァンベール　湖郷',
      '猿ヶ京温泉　猿ヶ京ホテル',
      'ｓｈｉｎ　猿ヶ京',
      '猿ヶ京温泉　仁田屋旅館'
    ]
  },
  {
    theme: 'iwate_hanamaki_minami',
    label: '岩手・花巻南温泉郷 鉛温泉＆大沢温泉（宮沢賢治ゆかりの木造湯治宿・日本一深い自噴「白猿の湯」と極上前沢牛＆花巻白金豚を味わう名宿）',
    queries: [
      '岩手　花巻温泉郷　鉛温泉　藤三旅館',
      '大沢温泉　山水閣',
      '花巻温泉郷　新鉛温泉　結びの宿　愛隣館',
      '志戸平温泉　湯の杜　ホテル志戸平',
      '花巻温泉郷　山の神温泉　優香苑'
    ]
  },
  {
    theme: 'yamagata_shirabu_yonezawa',
    label: '山形・白布温泉＆新高湯温泉（西吾妻山初冬雪景色と開湯700年名湯・名物打たせ湯と最高峰A5米沢牛すき焼きを味わう名宿）',
    queries: [
      '白布温泉　東屋',
      '白布温泉　中屋別館　不動閣',
      '白布温泉　湯滝の宿　西屋',
      '新高湯温泉　五つの絶景露天風呂　吾妻屋旅館',
      '小野川温泉　名湯の宿　吾妻荘'
    ]
  },
  {
    theme: 'oita_sujiyu_kuju',
    label: '大分・筋湯温泉＆九重連山（標高1000mくじゅう連山初冬の霧氷雪景色と打たせ湯日本一・極上おおいた豊後牛＆九重夢ポークを味わう秘湯名宿）',
    queries: [
      '筋湯温泉　旅館白滝',
      '筋湯温泉　宿房　花しのぶ',
      '筋湯温泉　九重　悠々亭',
      '筋湯温泉　たからや旅館',
      '宝泉寺温泉　季の郷　山の湯'
    ]
  },
  {
    theme: 'kumamoto_tsuetate_waita',
    label: '熊本・阿蘇小国 杖立温泉＆わいた温泉郷（初冬に立ち上る湯けむりと元祖むし湯・名物地獄蒸しと極上肥後あか牛を味わう名宿）',
    queries: [
      'つえたて温泉ひぜんや',
      '杖立温泉　純和風旅館　泉屋',
      '杖立温泉　葉隠館',
      '杖立温泉　旅館よろづや',
      '絶景露天風呂と７つの貸切風呂の大人宿　旅館　山翠'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 86 (High Precision Search)');
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
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round86_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
