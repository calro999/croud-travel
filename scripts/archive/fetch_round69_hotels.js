const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kasumi',
    label: '兵庫・香住温泉＆柴山温泉（11月解禁最高峰柴山ガニ・香住松葉ガニ・但馬牛・山陰海岸絶景）',
    queries: [
      'なごみの香風の宿　さだ助',
      '香住温泉　旅籠　さどや',
      '網元かにの宿　やまや',
      '柴山温泉　癒しの宿こえもん',
      '柴山温泉　ホテル翠湖'
    ]
  },
  {
    theme: 'akayu',
    label: '山形・赤湯温泉（置賜盆地幻想雲海・開湯920年名湯・米沢牛すき焼き・老舗赤湯ワイン）',
    queries: [
      '赤湯温泉　上杉の御湯　御殿守',
      '山形座　瀧波',
      '赤湯温泉　森の湯',
      '赤湯温泉　丹泉ホテル',
      '赤湯温泉　大文字屋'
    ]
  },
  {
    theme: 'yunoyama',
    label: '三重・湯の山温泉（御在所岳初雪樹氷・開湯1300年鹿の湯・名物僧兵鍋・菰野豚・伊勢湾展望）',
    queries: [
      '湯の山温泉　旅館寿亭',
      '湯の山温泉　ホテル湯の本',
      '湯の山温泉　鹿の湯ホテル',
      '湯の山温泉　三峯園',
      '湯の山温泉　彩向陽'
    ]
  },
  {
    theme: 'katayamazu',
    label: '石川・加賀片山津温泉（柴山潟と霊峰白山初冠雪・11月解禁加能ガニ香箱ガニ・塩化物強塩泉）',
    queries: [
      '片山津温泉　佳水郷',
      '片山津温泉　季がさね',
      '片山津温泉　かのや光楽苑',
      '片山津温泉　矢田屋松濤園',
      '片山津温泉　森本'
    ]
  },
  {
    theme: 'ashinomaki',
    label: '福島・会津芦ノ牧温泉（大川渓谷初雪絶景・渓流棚田風露天風呂・会津馬刺し・会津牛）',
    queries: [
      '芦ノ牧温泉　大川荘',
      '芦ノ牧温泉　丸峰',
      '仙峡閣',
      '会津芦ノ牧温泉　芦ノ牧グランドホテル',
      '会津芦ノ牧温泉　芦ノ牧プリンスホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 69 (5 Themes, 5 Hotels Each)');
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

  const outputPath = path.join(__dirname, 'round69_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log('Hotel counts per theme:');
  for (const k of Object.keys(result)) {
    console.log(`  ${k}: ${result[k].length} hotels`);
  }
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
