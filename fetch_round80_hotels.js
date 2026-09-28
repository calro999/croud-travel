const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tochigi_yunishigawa',
    label: '栃木・日光湯西川温泉（平家落人の隠れ里・初雪の渓谷美＆囲炉裏料理・平家狩場焼と雪見露天）',
    queries: [
      '湯西川温泉　本家伴久',
      '湯西川温泉　彩り湯かしき　花と華',
      '湯西川温泉　上屋敷　平の高房',
      '湯西川温泉　桓武平氏ゆかりの宿　揚羽',
      '湯西川温泉　ホテル湯西川'
    ]
  },
  {
    theme: 'aichi_gamagori',
    label: '愛知・三河湾蒲郡温泉郷（竹島一望パノラマ＆深海魚メヒカリ・幻のアカザエビ・三河牛・冬イルミ）',
    queries: [
      '蒲郡クラシックホテル',
      '三谷温泉　ホテル明山荘',
      '西浦温泉　旬景浪漫　銀波荘',
      '三谷温泉　平野屋',
      '西浦温泉　和のリゾート　はづ'
    ]
  },
  {
    theme: 'miyazaki_takachiho',
    label: '宮崎・神話の里高千穂（冬の伝統高千穂の夜神楽＆初冬の真名井の滝・極上A5高千穂牛とかっぽ鶏）',
    queries: [
      '高千穂　旅館　神仙',
      '高千穂　離れの宿　神隠れ',
      'ホテル高千穂',
      'ソレスト高千穂ホテル',
      '旅館　大和屋'
    ]
  },
  {
    theme: 'saga_karatsu',
    label: '佐賀・唐津呼子温泉（冬の玄界灘・名物呼子の透明活イカ姿造り＆最高級佐賀牛・唐津城天守絶景）',
    queries: [
      '唐津シーサイドホテル',
      '洋々閣',
      '観光ホテル　大望閣',
      '渚館きむら　唐津茶屋',
      'からつ温泉　かぐや姫の湯　旅館　綿屋'
    ]
  },
  {
    theme: 'nara_yamatoji',
    label: '奈良・大和路奈良町温泉（初冬の古都奈良・東大寺若草山雪景色＆極上大和牛すき焼き・飛鳥鍋）',
    queries: [
      '奈良ホテル',
      'ふふ　奈良',
      '古都の宿　むさし野',
      '春日ホテル　奈良',
      '飛鳥荘　奈良'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 80 (All 5 Themes, Exactly 5 Local Hotels Each)');
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
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    console.log(`Total hotels collected for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length < 5) {
      console.error(`ERROR: Failed to collect 5 hotels for ${t.theme}!`);
      process.exit(1);
    }
    result[t.theme] = themeHotels;
  }

  const outputPath = path.join(__dirname, 'round80_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully wrote all hotel data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round80_hotels:', err);
  process.exit(1);
});
