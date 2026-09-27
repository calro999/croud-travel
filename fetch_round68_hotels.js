const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shogawa',
    label: '富山・庄川温泉郷（雪見庄川峡遊覧船・富山湾紅ズワイガニ・寒ブリ・白えび・富山牛）',
    queries: [
      '人肌の宿　川金',
      '富山 庄川 三楽園',
      '富山 鮎や', // 庄川温泉風流味道座敷 ゆめつづり
      '庄川 鮎', // 庄川温泉郷 となみ野庄川荘一萬亭
      '五箇山温泉　赤尾館'
    ]
  },
  {
    theme: 'akakura',
    label: '新潟・妙高赤倉温泉（妙高山初雪絶景・開湯200年ダブル美肌湯・冬のどぐろ・にいがた和牛）',
    queries: [
      '赤倉観光ホテル',
      '赤倉温泉　ホテル太閤',
      '赤倉温泉　赤倉ホテル',
      '赤倉温泉 お宿 ふるや',
      '赤倉温泉　香風館'
    ]
  },
  {
    theme: 'asama',
    label: '長野・松本浅間温泉（国宝松本城初雪・開湯1300年名湯・新そば・信州プレミアム牛すき焼き）',
    queries: [
      '浅間温泉　菊之湯',
      '信州・松本　浅間温泉　ホテル玉之湯',
      '浅間温泉　別亭一花',
      '浅間温泉 梅の湯',
      '浅間温泉　帰郷亭ゆもとや'
    ]
  },
  {
    theme: 'shodoshima',
    label: '香川・小豆島温泉（初冬寒霞渓奇岩絶景・オリーブ収穫・エンジェルロード夕日・小豆島オリーブ牛・讃岐でんぶく）',
    queries: [
      '小豆島国際ホテル',
      'ベイリゾートホテル小豆島',
      '島宿真里',
      '海音真里',
      '小豆島 国民宿舎'
    ]
  },
  {
    theme: 'minamichita',
    label: '愛知・南知多温泉郷（伊勢湾パノラマ夕日露天・本場南知多とらふぐフルコース・知多牛・日間賀島たこ）',
    queries: [
      '源氏香',
      '南知多温泉郷　水軍伝説の風薫る宿　花乃丸',
      '南知多山海温泉　粛　海風',
      '南知多 魚友', // THE BEACH KUROTAKE（旧魚友）
      '南知多 山海館' // 潮騒の湯宿 山海館
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 68 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round68_raw_hotels.json');
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
