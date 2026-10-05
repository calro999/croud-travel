const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'mie_toba_osaatsu',
    label: '三重・鳥羽相差温泉＆答志島（現役海女の里相差の初冬大漁舟盛り＆答志島トロさわら・活伊勢海老・的矢牡蠣と極上松阪牛名宿）',
    queries: [
      '味の宿　みち潮',
      'リゾートヒルズ豊浜　蒼空の風',
      '浜の雅亭　一井',
      '花の小宿　重兵衛',
      '南鳥羽相差　海幸の宿　なかよし',
      '南鳥羽・相差　食彩の湯宿　冨久家'
    ]
  },
  {
    theme: 'nagasaki_obama',
    label: '長崎・雲仙小浜温泉（橘湾初冬の落日パノラマと源泉温度105度・橘湾冬ワタリガニ＆名物小浜ちゃんぽん・極上雲仙あかね牛名宿）',
    queries: [
      '小浜温泉　海を見渡す個室露天の宿　伊勢屋',
      '小浜温泉　旅館　富士屋',
      '小浜温泉　プライベート・スパ・ホテル≪オレンジ・ベイ≫',
      '小浜温泉　湯宿　蒸気家',
      '小浜温泉　福徳屋旅館'
    ]
  },
  {
    theme: 'gifu_nagaragawa',
    label: '岐阜・長良川温泉（金華山と岐阜城初冬雪景色＆長良川の静寂・名物A5飛騨牛すき焼き＆冬の子持ち鮎甘露煮・黄金の濁り湯美肌赤湯名宿）',
    queries: [
      '長良川温泉　十八楼',
      '長良川温泉　ホテルパーク',
      '都ホテル　岐阜長良川',
      '長良川温泉　岐阜グランドホテル',
      '鵜匠の家　すぎ山'
    ]
  },
  {
    theme: 'chiba_minamiboso_tateyama',
    label: '千葉・南房総館山温泉＆千倉温泉（冬の南房総ぽかぽか避寒と富士山夕景露天・11月解禁房州伊勢海老＆地魚姿造り・極上かずさ和牛名宿）',
    queries: [
      'たてやま温泉　千里の風',
      '鏡ヶ浦温泉　ｒｏｋｕｚａ',
      '千倉温泉　千倉館',
      '館山リゾートホテル',
      '南房総白浜温泉　白浜オーシャンリゾート'
    ]
  },
  {
    theme: 'shimane_yunotsu',
    label: '島根・温泉津温泉＆有福温泉（世界遺産石見銀山と木造湯治街・開湯1300年薬師湯超濃厚掛け流し赤湯と日本海初冬のどぐろ・しまね和牛名宿）',
    queries: [
      '寛ぎの宿　輝雲荘',
      '温泉津温泉　のがわや旅館',
      '温泉津温泉　旅館　ますや',
      '有福温泉　自家源泉の宿・よしだや',
      'Ｓｈｏｗｃａｓｅ　Ｈｏｔｅｌ　ＫＡＳＡＮＥ　有福温泉'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 87 (Refined Exact Queries)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
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

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round87_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
