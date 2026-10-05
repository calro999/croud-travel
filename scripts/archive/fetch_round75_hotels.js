const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shizuoka_kanzanji',
    label: '静岡・浜名湖 舘山寺温泉（初冬の浜名湖レイクビューと遠州灘天然とらふぐ・冬うなぎ＆舘山寺名湯露天風呂）',
    queries: [
      'ホテル　ウェルシーズン浜名湖',
      '浜名湖かんざんじ温泉　山水館欣龍',
      '浜名湖かんざんじ温泉　ホテル鞠水亭',
      '浜名湖かんざんじ温泉　時わすれ　開華亭',
      'グランドメルキュール浜名湖リゾート＆スパ'
    ]
  },
  {
    theme: 'niigata_iwamuro_yahiko',
    label: '新潟・弥彦＆岩室温泉（彌彦神社初冬参詣と開湯300年名物黒湯・日本海寒ブリ＆のどぐろ会席）',
    queries: [
      '越後平野と弥彦連山一望の宿　穂々',
      '岩室温泉　ゆもとや',
      '弥彦温泉　四季の宿　みのや',
      '新潟　岩室温泉　自家源泉の宿　富士屋',
      '弥彦温泉　割烹の宿　櫻家'
    ]
  },
  {
    theme: 'wakayama_ryujin',
    label: '和歌山・紀州 龍神温泉（日本三美人の湯と日高川初冬渓谷美・名物紀州天然ぼたん鍋＆熊野牛会席）',
    queries: [
      '龍神温泉　季楽里　龍神',
      '龍神温泉　下御殿',
      '龍神温泉　上御殿',
      '龍神小又川温泉　美人亭',
      '龍神温泉　民宿旅館　ささゆり'
    ]
  },
  {
    theme: 'hiroshima_miyajima',
    label: '広島・宮島温泉（世界遺産厳島神社初冬絶景と旬解禁広島カキづくし・安芸牛＆瀬戸内海展望露天）',
    queries: [
      '宮島グランドホテル　有もと',
      'ホテル宮島別荘',
      '宮島潮湯温泉　錦水館',
      'みやじまの宿　岩惣',
      '安芸グランドホテル'
    ]
  },
  {
    theme: 'nagano_bessho',
    label: '長野・信州 別所温泉（信州最古の古湯と北向観音初冬参拝・極上信州プレミアム牛＆名湯硫黄泉）',
    queries: [
      '別所温泉　七草の湯',
      '別所温泉　観音様となりの宿　かしわや本店',
      '信州別所温泉　旅宿　上松や',
      '信州別所温泉　玉屋旅館',
      '別所温泉　旅館　中松屋'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 75 (All 5 Themes, Exactly 5 Local Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round75_raw_hotels.json');
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
