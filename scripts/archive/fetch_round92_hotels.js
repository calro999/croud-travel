const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'aichi_irago_onsen',
    label: '愛知・渥美半島 伊良湖温泉＆伊良湖岬（遠州灘・三河湾の「伊良湖天然とらふぐ」・新源泉「伊良湖温泉」美肌の湯・霜降り渥美牛・冬の太平洋絶景）',
    queries: [
      '伊良湖オーシャンリゾート',
      '和味の宿　角上楼',
      '休暇村　伊良湖',
      '浪漫の宿　井筒楼',
      'おやど螢'
    ]
  },
  {
    theme: 'tochigi_nasu_itamuro',
    label: '栃木・那須塩原 板室温泉＆那須高原（那須十一湯「下野の薬湯」・綱の湯ぬる湯治・極上那須黒毛和牛・初雪の那須連山・静寂の隠れ宿）',
    queries: [
      '板室温泉大黒屋　保養とアートの宿',
      '那須板室温泉　ＯＮＳＥＮ　ＲＹＯＫＡＮ　山喜',
      '板室温泉　湯宿きくや',
      '板室温泉　奥那須・大正村　幸乃湯温泉',
      '板室別邸リトリート'
    ]
  },
  {
    theme: 'shimane_tsuwano_onsen',
    label: '島根・津和野 津和野温泉＆益田・石見（山陰の小京都・白壁土塀と堀割の錦鯉・津和野城跡の朝霧雲海・冬の新酒蔵開き・極上石見牛・荒磯温泉）',
    queries: [
      '津和野温泉　ゆとりろ津和野',
      '若槻　津和野',
      'コンドミニアム　津和野荘',
      'ＭＡＳＣＯＳ　ＨＯＴＥＬ',
      '荒磯温泉　荒磯館'
    ]
  },
  {
    theme: 'aomori_ajigasawa_fukaura',
    label: '青森・津軽西海岸 鰺ヶ沢温泉＆深浦（日本海の冬味覚「鰺ヶ沢ヒラメ」＆深浦マグロ・太古の化石海水温まり湯・黄金崎不老ふ死温泉・白神山地の初雪）',
    queries: [
      '鯵ヶ沢温泉　ホテルグランメール　山海荘',
      '黄金崎不老ふ死温泉',
      '鯵ヶ沢温泉　水軍の宿',
      'ロックウッド・ホテル＆スパ',
      '鍋石温泉　深浦観光ホテル'
    ]
  },
  {
    theme: 'nagano_obuse_shibu',
    label: '長野・小布施＆北信州 湯田中・渋温泉郷（初冬の小布施栗おこわ・蜜入りサンふじ・石畳の渋温泉「九湯めぐり」・信州牛すき焼き・地獄谷初雪）',
    queries: [
      '渋温泉　歴史の宿　金具屋',
      '渋温泉　春蘭の宿　さかえや',
      '湯田中温泉　よろづや',
      '小布施温泉あけびの湯',
      '信州　渋温泉　古久屋'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 92 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round92_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
