const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'unazuki',
    label: '富山・宇奈月温泉（黒部峡谷雪景色と富山湾寒ブリ・紅ズワイガニ・美肌名湯）',
    queries: [
      '黒部・宇奈月温泉 やまのは',
      '宇奈月温泉 延楽',
      '宇奈月温泉 延対寺荘',
      'サン柳亭',
      '宇奈月グランドホテル'
    ],
    generalQuery: '宇奈月温泉 露天風呂'
  },
  {
    theme: 'jozankei',
    label: '北海道・定山渓温泉（札幌奥座敷の雪渓谷美と名湯塩化物泉・道産和牛＆冬の三大蟹会席）',
    queries: [
      '定山渓第一寶亭留 翠山亭',
      'ぬくもりの宿 ふる川',
      '定山渓万世閣ホテルミリオーネ',
      '厨翠山',
      '定山渓ビューホテル'
    ],
    generalQuery: '定山渓温泉 露天風呂'
  },
  {
    theme: 'shirahone',
    label: '長野・白骨温泉（北アルプス雪景色の乳白色秘湯炭酸水素塩泉・信州プレミアム牛＆投汁そば）',
    queries: [
      '白骨の名湯 泡の湯',
      '白骨温泉 湯元齋藤旅館',
      '白船荘 新宅旅館',
      '白骨ゑびすや',
      'かつらの湯 丸永旅館'
    ],
    generalQuery: '白骨温泉 露天風呂'
  },
  {
    theme: 'nagato',
    label: '山口・長門湯本温泉（音信川の冬灯りと開湯600年名湯・本場下関直送本とらふぐ＆山口県産牛）',
    queries: [
      '大谷山荘',
      '別邸 音信',
      '界 長門',
      '湯本観光ホテル 西京',
      '山村別館'
    ],
    generalQuery: '長門湯本温泉 露天風呂'
  },
  {
    theme: 'nasu',
    label: '栃木・那須温泉郷（那須連山初冬パノラマと開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席）',
    queries: [
      '那須温泉 山楽',
      'ホテルエピナール那須',
      '星野リゾート リゾナーレ那須',
      '那須湯菜の宿 芽瑠鼓',
      '休暇村 那須'
    ],
    generalQuery: '那須温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 60 (5 Themes, 11-12 Month Features)');
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

  const outputPath = path.join(__dirname, 'round60_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
