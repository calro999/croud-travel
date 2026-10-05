const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kusatsu',
    label: '群馬・草津温泉（湯畑冬幻想イルミ・湯けむり露天と極上上州牛すき焼き・群馬地酒会席）',
    queries: [
      '草津温泉 ホテル櫻井',
      '草津温泉 奈良屋',
      '草津温泉 望雲',
      '草津温泉 湯宿 季の庭',
      '草津温泉 大阪屋'
    ]
  },
  {
    theme: 'beppu',
    label: '大分・別府温泉＆鉄輪温泉（初冬別府湾朝焼け露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席）',
    queries: [
      '別府温泉 杉乃井ホテル',
      '別府温泉 潮騒の宿 晴海',
      '別府鉄輪温泉 山荘 神和苑',
      '別府温泉 ホテル白菊',
      '別府温泉 竹と椿のお宿 花べっぷ'
    ]
  },
  {
    theme: 'zao',
    label: '山形・蔵王温泉（初雪の強酸性硫黄泉露天と蔵王ロープウェイ・極上山形牛すき焼き＆郷土芋煮会席）',
    queries: [
      '蔵王温泉 深山荘 高見屋',
      '蔵王温泉 蔵王国際ホテル',
      '蔵王温泉 蔵王四季のホテル',
      '蔵王温泉 名湯リゾート ルーセントタカミヤ',
      '蔵王温泉 おおみや旅館'
    ]
  },
  {
    theme: 'atami',
    label: '静岡・熱海温泉（澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席）',
    queries: [
      '熱海後楽園ホテル',
      '熱海温泉 古屋旅館',
      'ホテルニューアカオ',
      '熱海パールスターホテル',
      '熱海温泉 秀花園 湯の花膳'
    ]
  },
  {
    theme: 'naruko',
    label: '宮城・鳴子温泉郷（多彩な源泉めぐりと初冬の鳴子峡雪景色・極上仙台牛すき焼き＆奥羽郷土会席）',
    queries: [
      '鳴子温泉 湯元 鳴子ホテル',
      '鳴子温泉 風雅',
      '鳴子温泉 湯元 吉祥',
      '鳴子温泉 旅館すがわら',
      '鳴子温泉郷 極上の貸切露天風呂 旅館大沼'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 64 (5 Themes, 11-12 Month Features)');
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
        await sleep(1500); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Found: ${h.hotelName} (${h.address1} ${h.address2}, No: ${h.hotelNo}, Rating: ${h.reviewAverage})`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Total hotels collected for ${t.theme}: ${result[t.theme].length}`);
  }

  const outputPath = path.join(__dirname, 'round64_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
