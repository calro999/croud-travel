const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'niseko',
    label: '北海道・ニセコ温泉郷（初雪パウダースノー・羊蹄山蝦夷富士絶景・白銀露天風呂・道産黒毛和牛＆北海海鮮ディナー）',
    queries: [
      'ニセコ昆布温泉 鶴雅別荘 杢の抄',
      '木ニセコ',
      'パークハイアット ニセコ',
      'ヒルトンニセコビレッジ',
      'ニセコノーザンリゾート・アンヌプリ'
    ]
  },
  {
    theme: 'oirase',
    label: '青森・奥入瀬渓流温泉＆八甲田（初冬の氷瀑・八甲田山樹氷・白濁秘湯露天・青森倉石牛＆陸奥湾ホタテ会席）',
    queries: [
      '星野リゾート 奥入瀬渓流ホテル',
      '八甲田ホテル',
      '酸ヶ湯温泉旅館',
      '蔦温泉旅館',
      'ホテル城ヶ倉'
    ]
  },
  {
    theme: 'toba',
    label: '三重・鳥羽温泉郷（初冬解禁の伊勢海老と的矢牡蠣・鳥羽湾パノラマ絶景露天・極上松阪牛＆答志島トロさわら会席）',
    queries: [
      '鳥羽国際ホテル 潮路亭',
      '戸田家',
      '鳥羽シーサイドホテル',
      '季さら',
      'ホテルアルティア鳥羽'
    ]
  },
  {
    theme: 'yunohana',
    label: '京都・亀岡 湯の花温泉（初冬の亀岡霧雲海・京奥座敷の薬湯露天・名物本場丹波ぼたん鍋＆最高級丹波牛会席）',
    queries: [
      'すみや亀峰菴',
      '京都 烟河',
      '松園荘 保津川亭',
      '翠泉',
      '渓山閣'
    ]
  },
  {
    theme: 'kotohira',
    label: '香川・琴平 ことひら温泉郷（初冬のこんぴら参りと讃岐富士絶景・門前町名湯・讃岐オリーブ牛＆手打ち讃岐うどん会席）',
    queries: [
      '湯元こんぴら温泉華の湯 紅梅亭',
      '琴平グランドホテル 桜の抄',
      '敷島館',
      '湯元八千代',
      'ことひら温泉 琴参閣'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 66 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round66_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
