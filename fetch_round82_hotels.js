const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'akita_nyuto',
    label: '秋田・乳頭温泉郷（初冬雪見秘湯・乳白色の濁り湯＆名物きりたんぽ鍋・比内地鶏・ブナ原生林の静寂）',
    queries: [
      '乳頭温泉郷　妙乃湯',
      '休暇村　乳頭温泉郷',
      '乳頭温泉郷　蟹場温泉',
      '田沢湖高原温泉　プラザホテル山麓荘',
      '天然温泉　田沢湖レイクリゾート'
    ]
  },
  {
    theme: 'gifu_gero',
    label: '岐阜・下呂温泉（日本三名泉のつるすべ美肌湯＆冬花火物語・極上飛騨牛すき焼き・朴葉味噌）',
    queries: [
      '下呂温泉　水明館',
      '下呂温泉　湯之島館',
      '下呂温泉　小川屋',
      '下呂温泉　紗々羅',
      '下呂温泉　こころをなでる静寂　みやこ'
    ]
  },
  {
    theme: 'gunma_kusatsu',
    label: '群馬・草津温泉（湯畑雪景色＆自然湧出量日本一の名湯・上州牛すき焼き・伝統の湯もみ体験）',
    queries: [
      '草津温泉　ホテル櫻井',
      '草津温泉　望雲',
      '草津温泉　奈良屋',
      '草津温泉　ホテル一井',
      '草津温泉　草津ホテル'
    ]
  },
  {
    theme: 'ehime_dogo',
    label: '愛媛・道後温泉（日本三古湯・本館保存修理完了の輝き＆冬の宇和島鯛めし・伊予牛・城下町散策）',
    queries: [
      '道後温泉　茶玻瑠',
      '道後温泉　道後舘',
      '道後温泉　ふなや',
      '道後温泉　大和屋本店',
      '道後温泉　ホテル古湧園　遥'
    ]
  },
  {
    theme: 'fukushima_aizu',
    label: '福島・会津東山温泉＆芦ノ牧温泉（初冬の渓谷雪景色・城下町情緒＆名物会津牛・極上馬刺し・郷土こづゆ）',
    queries: [
      '会津東山温泉　御宿　東鳳',
      '会津芦ノ牧温泉　大川荘',
      '会津東山温泉　原瀧',
      '会津東山温泉　今昔亭',
      '会津芦ノ牧温泉　丸峰'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 82 (All 5 Themes, 5 Authentic Local Hotels Each)');
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
    }

    // 5軒に満たない場合のフォールバック検索
    if (themeHotels.length < 5) {
      console.warn(`\n[Theme ${t.theme}] Found only ${themeHotels.length} hotels. Running broader search...`);
      const fallbackQuery = t.theme === 'akita_nyuto' ? '乳頭温泉郷' :
                           t.theme === 'gifu_gero' ? '下呂温泉' :
                           t.theme === 'gunma_kusatsu' ? '草津温泉' :
                           t.theme === 'ehime_dogo' ? '道後温泉' : '会津東山温泉';
      try {
        const moreHotels = await searchRakutenHotels(fallbackQuery, 10);
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

  const outputPath = path.join(__dirname, 'round82_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved all hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
