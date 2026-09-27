const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'okuhida',
    label: '岐阜・奥飛騨温泉郷（雪見露天と北アルプス絶景・飛騨牛朴葉味噌焼き会席）',
    queries: [
      '匠の宿 深山桜庵',
      '穂高荘 山のホテル',
      '元湯 孫九郎',
      '新穂高温泉 槍見舘',
      '平湯温泉 岡田旅館'
    ],
    generalQuery: '奥飛騨温泉郷 露天風呂'
  },
  {
    theme: 'shibu',
    label: '長野・信州渋温泉（厄除巡浴九湯めぐりと石畳情緒・信州牛と地酒の宿）',
    queries: [
      '渋温泉 歴史の宿 金具屋',
      '渋温泉 春蘭の宿 さかえや',
      '渋温泉 渋ホテル',
      '渋温泉 古久屋',
      '渋温泉 御宿 炭乃湯'
    ],
    generalQuery: '渋温泉 露天風呂'
  },
  {
    theme: 'yugawara',
    label: '神奈川・湯河原温泉（文豪が愛した万葉の隠れ家と奥湯河原紅葉・相模湾海の幸会席）',
    queries: [
      '湯河原温泉 源泉上野屋',
      '山翠楼 SANSUIROU',
      '湯河原温泉 若竹の庄',
      '湯河原温泉 おんやど恵',
      '湯河原温泉 青巒荘'
    ],
    generalQuery: '湯河原温泉 露天風呂'
  },
  {
    theme: 'hanamaki',
    label: '岩手・花巻温泉郷（白銀雪見露天と宮沢賢治イーハトーブ・極上前沢牛＆白金豚の宿）',
    queries: [
      '花巻温泉 佳松園',
      '花巻温泉 ホテル紅葉館',
      '鉛温泉 藤三旅館',
      '花巻温泉 游泉 志だて',
      '台温泉 やまゆりの宿'
    ],
    generalQuery: '花巻温泉 露天風呂'
  },
  {
    theme: 'amanohashidate',
    label: '京都・天橋立温泉（日本三景白砂青松雪景色と11月カニ解禁・丹後松葉ガニ＆寒ブリの宿）',
    queries: [
      '天橋立温泉 文珠荘',
      '天橋立温泉 ホテル北野屋',
      '天橋立 対橋楼',
      '天橋立温泉 玄妙庵',
      '天橋立ホテル'
    ],
    generalQuery: '天橋立 カニ 温泉'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 58 (5 Themes, 11-12 Month Features)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\nFetching for theme: ${t.label} (${t.theme})`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`- Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1500); // 厳守: 楽天APIレート制限対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Found: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage})`);
          }
        } else {
          console.warn(`  -> No exact match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    // 5件に満たない場合はgeneralQueryから補完
    if (themeHotels.length < 5) {
      console.log(`Only ${themeHotels.length} hotels found for ${t.theme}. Fetching additional from "${t.generalQuery}"...`);
      try {
        const additional = await searchRakutenHotels(t.generalQuery, 10);
        await sleep(1500);
        for (const h of additional) {
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Added supplemental: ${h.hotelName} (No: ${h.hotelNo})`);
            if (themeHotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`  -> Error supplemental fetching:`, err.message);
      }
    }

    result[t.theme] = themeHotels.slice(0, 5);
    console.log(`Total hotels collected for ${t.theme}: ${result[t.theme].length}`);
  }

  const outputPath = path.join(__dirname, 'round58_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
