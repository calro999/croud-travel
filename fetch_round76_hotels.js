const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hokkaido_tokachigawa',
    label: '北海道・十勝川温泉（初冬の白鳥飛来と北海道遺産モール温泉・十勝牛＆十勝チーズ会席）',
    queries: [
      '十勝川温泉　第一ホテル',
      '十勝川温泉　観月苑',
      '十勝川温泉　三余庵',
      '十勝川温泉　ホテル大平原',
      '十勝川温泉　笹井ホテル'
    ]
  },
  {
    theme: 'tochigi_shiobara',
    label: '栃木・塩原温泉（箒川渓谷初冬雪見露天と名湯十一湯・とちぎ和牛＆塩原大根会席）',
    queries: [
      '塩原温泉　湯守田中屋',
      '塩原温泉　割烹旅館　湯の花荘',
      '塩原温泉　明賀屋本館',
      '塩原温泉　四季味亭ふじや',
      '塩原温泉　光雲荘'
    ]
  },
  {
    theme: 'niigata_senami',
    label: '新潟・瀬波温泉（初冬日本海夕日絶景露天と越後村上鮭三昧・塩引鮭はらこ飯＆村上牛会席）',
    queries: [
      '瀬波温泉　夕映えの宿　汐美荘',
      '瀬波温泉　大観荘　せなみの湯',
      '瀬波温泉　ゆ処そば処　磐舟',
      '瀬波温泉　くつろぎの宿　静雲荘',
      '瀬波グランドホテル　はぎのや'
    ]
  },
  {
    theme: 'shiga_nagahama',
    label: '滋賀・長浜太閤温泉（初冬琵琶湖夕景と11月解禁名物天然鴨鍋・秀吉ゆかりの含鉄泉＆近江牛会席）',
    queries: [
      '浜湖月',
      '北ビワコホテル　グラツィエ',
      '旅館　紅鮎',
      'レジーナリゾートびわ湖長浜',
      'グランドメルキュール琵琶湖リゾート＆スパ'
    ]
  },
  {
    theme: 'kumamoto_aso_uchinomaki',
    label: '熊本・阿蘇内牧温泉（初冬阿蘇五岳草千里絶景と名湯掛け流し・名物あか牛溶岩焼き＆馬刺し会席）',
    queries: [
      '阿蘇内牧温泉　蘇山郷',
      '阿蘇プラザホテル',
      '内牧温泉　湯巡追荘',
      '阿蘇 ホテル 角萬',
      '阿蘇内牧温泉　親和苑'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 76 (All 5 Themes, Exactly 5 Local Hotels Each)');
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
        await sleep(1200); // 楽天APIレートリミット対策
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
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`=> Collected ${result[t.theme].length} hotels for ${t.theme}`);
  }

  const outputPath = path.join(__dirname, 'round76_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log('Hotel counts per theme:');
  for (const k of Object.keys(result)) {
    console.log(`  ${k}: ${result[k].length} hotels`);
  }
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
