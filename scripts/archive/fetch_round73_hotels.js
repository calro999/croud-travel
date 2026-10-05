const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'miyagi_matsushima',
    label: '宮城・松島温泉（初冬の松島湾絶景と解禁・極上松島牡蠣・日本三景日の出パノラマ展望露天＆仙台牛会席）',
    queries: [
      '松島一の坊',
      'ホテル松島大観荘',
      '松島温泉　小松館　好風亭',
      '松島センチュリーホテル',
      'ホテル絶景の館'
    ]
  },
  {
    theme: 'ibaraki_kitaibaraki',
    label: '茨城・北茨城温泉郷（11月解禁・元祖あんこう鍋濃厚どぶ汁と太平洋絶景・温まり美肌塩化物泉＆常陸牛）',
    queries: [
      'まるみつ旅館',
      'としまや月浜の湯',
      '五浦観光ホテル　別館大観荘',
      '二ツ島観光ホテル',
      '磯原シーサイドホテル'
    ]
  },
  {
    theme: 'yamaguchi_shimonoseki',
    label: '山口・下関と川棚温泉（11・12月本場とらふぐ解禁美食と元祖瓦そば・関門海峡響灘夕景＆開湯800年ラジウム美肌泉）',
    queries: [
      '川棚グランドホテル',
      '下関温泉　風の海',
      '割烹旅館　寿美礼',
      '源平荘',
      'ホテル西長門リゾート'
    ]
  },
  {
    theme: 'hokkaido_toyako',
    label: '北海道・洞爺湖温泉（初冬のイルミネーションと冠雪羊蹄山絶景・全室レイクビュー展望露天＆白老牛・噴火湾冬ホタテ）',
    queries: [
      'ザ・レイクスイート湖の栖',
      'ザ　レイクビュー　ＴＯＹＡ　乃の風リゾート',
      '洞爺湖万世閣　ホテルレイクサイドテラス',
      '洞爺サンパレス　リゾート＆スパ',
      '洞爺観光ホテル'
    ]
  },
  {
    theme: 'okayama_yubara',
    label: '岡山・湯原温泉（初冬旭川渓谷美と美作三湯・名物天然砂湯・pH9.3アルカリ美肌天然自噴泉＆蒜山ジャージー牛・冬ジビエ会席）',
    queries: [
      '八景',
      '湯原温泉　我無らん',
      '湯原温泉　ゆばらの宿　米屋',
      '湯原温泉　湯原国際観光ホテル　菊之湯',
      '湯原温泉　輝乃湯'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 73 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round73_raw_hotels.json');
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
