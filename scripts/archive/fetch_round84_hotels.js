const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yamanashi_shimobe',
    label: '山梨・下部温泉＆身延（武田信玄公の隠し湯と富士山初冬雪景色・名物ぬる湯治と極上甲州牛＆ほうとう鍋の名宿）',
    queries: [
      '下部温泉　下部ホテル',
      '下部温泉　元湯　裕貴屋',
      '下部温泉　黄金の湯　下部館',
      '下部温泉　元湯甲陽館',
      '下部温泉　ホテル守田',
      '身延山　宿坊'
    ],
    fallback: '下部温泉'
  },
  {
    theme: 'ishikawa_awazu',
    label: '石川・粟津温泉＆加賀温泉郷（開湯1300年の霊峰白山古湯・名物加能ガニ＆香箱ガニ解禁と能登牛を堪能する名宿）',
    queries: [
      '粟津温泉　法師',
      '粟津温泉　のとや',
      '粟津温泉　辻のや',
      '粟津温泉　喜多八',
      '粟津温泉　かづら',
      '加賀温泉郷　粟津'
    ],
    fallback: '粟津温泉'
  },
  {
    theme: 'akita_yuze',
    label: '秋田・十和田八幡平・湯瀬温泉＆鹿角（日本三大美人の湯と米代川雪渓谷・名物本場きりたんぽ鍋と比内地鶏を味わう名宿）',
    queries: [
      '湯瀬温泉　湯瀬ホテル',
      '湯瀬温泉　和心の宿　姫の湯',
      'ホテル鹿角',
      '大湯温泉　龍門亭　千代の湯',
      '大湯温泉　ホテル風雅',
      '十和田八幡平　鹿角'
    ],
    fallback: '湯瀬温泉'
  },
  {
    theme: 'fukushima_bandaiatami',
    label: '福島・磐梯熱海温泉（郡山の奥座敷・萩姫伝説の美肌ぬる湯と猪苗代湖の白鳥・極上福島牛と地酒を味わう名宿）',
    queries: [
      '磐梯熱海温泉　ホテル華の湯',
      '磐梯熱海温泉　四季彩　一力',
      '磐梯熱海温泉　守田屋',
      '磐梯熱海温泉　よもぎ埜',
      '磐梯熱海温泉　栄楽館',
      '磐梯熱海温泉　紅藤'
    ],
    fallback: '磐梯熱海温泉'
  },
  {
    theme: 'nagano_kakeyu',
    label: '長野・鹿教湯温泉＆信州上田（文殊菩薩の霊泉と渓流雪見露天・名物信州投じ蕎麦と極上信州牛を味わう名宿）',
    queries: [
      '鹿教湯温泉　斎藤ホテル',
      '鹿教湯温泉　かつらや旅館',
      '鹿教湯温泉　三水館',
      '鹿教湯温泉　鹿乃屋旅館',
      '鹿教湯温泉　河鹿荘',
      '鹿教湯温泉　大岩館'
    ],
    fallback: '鹿教湯温泉'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 84 (5 Brand New Nov-Dec Winter Themes)');
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
        console.error(`  -> Error querying "${q}":`, err.message);
      }
      if (themeHotels.length >= 5) break;
    }

    // 5軒に満たない場合のフォールバック検索
    if (themeHotels.length < 5) {
      console.warn(`\n[Theme ${t.theme}] Found only ${themeHotels.length} hotels. Running broader search "${t.fallback}"...`);
      try {
        const moreHotels = await searchRakutenHotels(t.fallback, 15);
        await sleep(1300);
        for (const h of moreHotels) {
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Fallback Success: ${h.hotelName} (No: ${h.hotelNo})`);
            if (themeHotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`  -> Fallback search error:`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round84_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved all hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
