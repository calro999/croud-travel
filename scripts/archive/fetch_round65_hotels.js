const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yufuin',
    label: '大分・由布院温泉（初冬の金鱗湖幻想朝霧・由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席）',
    queries: [
      'ゆふいん花由',
      'ゆふいん月燈庵',
      'ゆふいん山水館',
      '由布院 旅亭 田乃倉',
      '由布院 ほたるの宿 仙洞'
    ]
  },
  {
    theme: 'himi',
    label: '富山・氷見温泉郷（初冬のひみ寒ぶり宣言・海越しの白銀立山連峰露天・極上氷見牛＆寒ブリ会席）',
    queries: [
      '氷見温泉郷 くつろぎの宿 うみあかり',
      '氷見温泉郷 魚巡りの宿 永芳閣',
      '雨晴温泉 磯はなび',
      'イミグレ',
      'ひみ栄和温泉元湯'
    ]
  },
  {
    theme: 'kawaguchiko',
    label: '山梨・富士河口湖温泉郷（澄み渡る初冬の雪化粧富士山・逆さ富士展望露天と極上甲州牛＆熱々ほうとう会席）',
    queries: [
      '富士河口湖温泉 秀峰閣 湖月',
      'ラビスタ富士河口湖',
      '湖南荘',
      '富士ビューホテル',
      '若草の宿 丸栄'
    ]
  },
  {
    theme: 'ibusuki',
    label: '鹿児島・指宿温泉（冬でも暖かい南国薩摩・錦江湾望む天然砂むし露天・極上黒豚しゃぶしゃぶ＆薩摩美味会席）',
    queries: [
      '指宿白水館',
      '指宿温泉 いぶすき秀水園',
      '指宿シーサイドホテル',
      '指宿温泉 夫婦露天風呂の宿 吟松',
      '指宿ロイヤルホテル'
    ]
  },
  {
    theme: 'hakuba',
    label: '長野・白馬山麓温泉（初雪パウダースノーと北アルプス絶景・pH11高アルカリ美肌露天・信州牛＆信州サーモン会席）',
    queries: [
      '白馬東急ホテル',
      '白馬ハイランドホテル',
      'コートヤード・バイ・マリオット 白馬',
      '白馬 樅の木ホテル',
      'シェラリゾート白馬'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 65 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round65_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
