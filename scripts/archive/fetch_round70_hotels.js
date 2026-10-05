const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shima',
    label: '群馬・四万温泉（神秘の四万ブルー・千と千尋積善館・開湯千二百年霊泉・上州牛会席）',
    queries: [
      '四万温泉　積善館',
      '渓谷に佇む源泉湯宿　四万やまぐち館',
      '四万温泉　温泉三昧の宿　四万たむら',
      '四万温泉　柏屋旅館',
      '四万温泉　豊島屋'
    ]
  },
  {
    theme: 'yuhigaura',
    label: '京都丹後・夕日ヶ浦温泉（日本海絶景夕日・11月解禁松葉ガニ＆間人ガニ・美人の湯）',
    queries: [
      '夕日ヶ浦温泉　佳松苑',
      '夕日ヶ浦温泉　海花亭　花御前',
      '夕日ヶ浦温泉　旅亭　櫂‐ＫＡＩ‐',
      '夕日ヶ浦温泉　静花扇',
      '夕日ヶ浦温泉　海舟＜京都府＞'
    ]
  },
  {
    theme: 'hawai',
    label: '鳥取・はわい温泉＆東郷温泉（東郷湖上露天風呂・11月解禁鳥取松葉ガニ・鳥取和牛オレイン55）',
    queries: [
      'はわい温泉　望湖楼',
      '湖上に浮かぶ絶景の宿　はわい温泉　千年亭',
      '東郷温泉　国民宿舎　水明荘',
      '水景色の指定席　湖屋（ＫＯＹＡ）',
      'はわい温泉　ゆの宿　彩香'
    ]
  },
  {
    theme: 'asamushi',
    label: '青森・浅虫温泉（陸奥湾初冬パノラマ・津軽海峡冬マグロ・肉厚陸奥湾ホタテ・棟方志功ゆかりの宿）',
    queries: [
      '浅虫温泉　南部屋・海扇閣',
      '浅虫温泉　絶景の宿　浅虫さくら観光ホテル',
      '浅虫温泉　椿館',
      '浅虫温泉　割烹旅館　さつき',
      '浅虫温泉　辰巳館'
    ]
  },
  {
    theme: 'iya',
    label: '徳島・祖谷温泉＆大歩危温泉（日本三大秘境初雪渓谷・ケーブルカー谷底露天・阿波牛・祖谷そば）',
    queries: [
      '和の宿　ホテル祖谷温泉',
      '渓谷の隠れ宿　祖谷美人',
      '峡谷の湯宿　大歩危峡まんなか',
      '新祖谷温泉　ホテルかずら橋',
      '祖谷渓温泉　ホテル秘境の湯'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 70 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round70_raw_hotels.json');
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
