const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'awara',
    label: '福井・あわら温泉（冬の庭園名湯と11月解禁越前がに＆福井若狭牛会席）',
    queries: [
      'あわら温泉 まつや千千',
      'あわら温泉 グランディア芳泉',
      'あわら温泉 つるや',
      '清風荘 あわら',
      '北陸あわら温泉 美松'
    ],
    generalQuery: 'あわら温泉 露天風呂'
  },
  {
    theme: 'tamatsukuri',
    label: '島根・玉造温泉（出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉がに＆しまね和牛）',
    queries: [
      '玉造温泉 佳翠苑 皆美',
      '玉造温泉 白石家',
      '玉造温泉 湯之助の宿 長楽園',
      '玉造温泉 ホテル玉泉',
      '玉造国際ホテル'
    ],
    generalQuery: '玉造温泉 露天風呂'
  },
  {
    theme: 'tsukioka',
    label: '新潟・月岡温泉（国内屈指のエメラルド美肌硫黄泉と初冬雪景色・村上牛＆新潟地酒）',
    queries: [
      '白玉の湯 華鳳',
      '白玉の湯 泉慶',
      '月岡温泉 摩周',
      '月岡温泉 ホテル清風苑',
      '月岡温泉 風鈴屋'
    ],
    generalQuery: '月岡温泉 露天風呂'
  },
  {
    theme: 'awajishima',
    label: '兵庫・淡路島洲本温泉（紀淡海峡冬景色と名物淡路島3年とらふぐ＆淡路牛会席）',
    queries: [
      'ホテルニューアワジ',
      '淡路夢泉景',
      '夢海游 淡路島',
      '淡路島観光ホテル',
      '海月館 洲本'
    ],
    generalQuery: '洲本温泉 露天風呂'
  },
  {
    theme: 'kirishima',
    label: '鹿児島・霧島温泉郷（湯煙立ち上る霧島連山と龍馬新婚旅行の名湯・鹿児島黒豚しゃぶしゃぶ＆黒毛和牛）',
    queries: [
      '霧島温泉 霧島ホテル',
      '霧島国際ホテル',
      '旅行人山荘',
      'さくらさくら温泉 霧島',
      'ラビスタ霧島ヒルズ'
    ],
    generalQuery: '霧島温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 61 (5 Themes, 11-12 Month Features)');
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
        await sleep(1500); // 楽天APIレート制限対策
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

  const outputPath = path.join(__dirname, 'round61_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
