const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hokkaido_sounkyo',
    label: '北海道・層雲峡温泉（初冬の峡谷雪景色と大雪山雪見露天・単純硫黄泉＆上川十勝牛・オホーツク冬海鮮）',
    queries: [
      'ホテル大雪　ＯＮＳＥＮ＆ＣＡＮＹＯＮ　ＲＥＳＯＲＴ',
      '層雲峡 朝陽亭',
      '層雲閣',
      '層雲峡温泉　朝陽リゾートホテル',
      '層雲峡マウントビューホテル'
    ]
  },
  {
    theme: 'shizuoka_inatori',
    label: '静岡・伊豆稲取温泉（11・12月本場地金目鯛の姿煮と相模灘絶景・太平洋展望露天＆伊豆温暖避寒）',
    queries: [
      '稲取銀水荘',
      '食べるお宿　浜の湯',
      '稲取東海ホテル湯苑',
      'いなとり荘',
      '石花海'
    ]
  },
  {
    theme: 'hyogo_yumura',
    label: '兵庫・但馬 湯村温泉（開湯1200年荒湯源泉情緒と11月解禁松葉ガニ・最高峰但馬牛＆美肌高温泉）',
    queries: [
      '佳泉郷　井づつや',
      '朝野家',
      '湯村温泉　とみや',
      'ゆあむ',
      '湯村温泉　三好屋'
    ]
  },
  {
    theme: 'miyazaki_aoshima',
    label: '宮崎・青島温泉（初冬の南国温暖避寒と名勝鬼の洗濯板絶景・最高峰宮崎牛＆日向灘伊勢海老・美肌炭酸泉）',
    queries: [
      'ＡＮＡホリデイ・インリゾート宮崎',
      '青島サンクマール',
      '青島天然温泉ルートイングランティアあおしま太陽閣',
      '青島・地蔵庵',
      '青島フィッシャーマンズ'
    ]
  },
  {
    theme: 'fukuoka_harazuru',
    label: '福岡・原鶴温泉（筑後川冬情緒と奇跡のW美肌の湯・博多和牛会席＆名湯掛け流し展望露天）',
    queries: [
      '原鶴温泉　泰泉閣',
      '原鶴温泉　延命館',
      'ホテルパーレンス小野屋',
      '原鶴グランドスカイホテル',
      '六峰舘'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 74 (All 5 Themes, Exactly 5 Local Hotels Each)');
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
        await sleep(1200); // 楽天APIレートリミット対策
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

  const outputPath = path.join(__dirname, 'round74_raw_hotels.json');
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
