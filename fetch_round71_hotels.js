const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kaminoyama',
    label: '山形・かみのやま温泉（初冬の蔵王連峰・軒先の紅柿つるし柿暖簾・開湯560年美肌霊泉・特選山形牛会席）',
    queries: [
      'かみのやま温泉　名月荘',
      'かみのやま温泉　日本の宿　古窯',
      'かみのやま温泉　葉山舘',
      'かみのやま温泉　仙渓園　月岡ホテル',
      'かみのやま温泉　花明りの宿　月の池'
    ]
  },
  {
    theme: 'ako',
    label: '兵庫・播州赤穂温泉（11月下旬解禁坂越牡蠣・赤穂義士祭歴史情緒・播磨灘夕景インフィニティ露天風呂）',
    queries: [
      '赤穂温泉　絶景露天風呂の宿　銀波荘',
      '赤穂温泉　潮彩きらら　祥吉',
      '赤穂温泉　料理旅館　呑海楼',
      '赤穂温泉　赤穂パークホテル',
      '赤穂温泉　割烹旅館　鹿久居荘　赤穂店'
    ]
  },
  {
    theme: 'hirayama',
    label: '熊本・平山温泉（加藤清正ゆかり極上トロトロ硫黄泉・初冬竹林の隠れ湯・肥後あか牛と馬刺し会席）',
    queries: [
      '平山温泉　ほたるの長屋',
      '平山温泉　山懐の宿　一木一草',
      '平山温泉　旅館　善屋',
      '平山温泉　奥山鹿温泉旅館',
      '平山温泉　上田屋'
    ]
  },
  {
    theme: 'hagi',
    label: '山口・萩温泉郷（維新城下町初冬旅・11月旬入り本場天然とらふぐ＆萩甘鯛・長州黒毛和牛・日本海展望露天）',
    queries: [
      '萩温泉郷　萩城三の丸　北門屋敷',
      '萩温泉郷　宵待ちの宿　萩一輪',
      '萩温泉郷　夕景の宿　海のゆりかご　萩小町',
      '萩温泉郷　萩の宿・常茂恵',
      '萩温泉郷　源泉の宿　萩本陣'
    ]
  },
  {
    theme: 'oga',
    label: '秋田・男鹿温泉郷（11・12月初冬名物ハタハタ＆豪快石焼き鍋・なまはげ伝統・日本海荒波雪見露天）',
    queries: [
      '男鹿温泉　結いの宿　別邸　つばき',
      '男鹿温泉郷　元湯雄山閣',
      '男鹿温泉　湯けむりリゾート　セイコーグランドホテル',
      '男鹿温泉　湯けむりリゾート　男鹿観光ホテル',
      '男鹿温泉　湯けむりリゾート　男鹿ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 71 (5 Themes, 5 Hotels Each)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1500); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Success: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
          } else {
            console.warn(`  -> Duplicate hotelNo: ${h.hotelNo}, skipping`);
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

  const outputPath = path.join(__dirname, 'round71_raw_hotels.json');
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
