const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shizuoka_shimoda',
    label: '静岡・下田・南伊豆温泉郷（初冬の絶景オーシャンビュー露天と極上地金目鯛姿煮・金目鯛しゃぶしゃぶ＆伊勢海老会席）',
    queries: [
      '下田東急ホテル',
      '下田大和館',
      '黒船ホテル',
      'ホテル山田屋',
      '観音温泉'
    ]
  },
  {
    theme: 'kochi_ashizuri',
    label: '高知・足摺温泉郷（四国最南端の黒潮絶景露天と初冬満天星空・名物戻り鰹藁焼きタタキ＆幻の土佐あかうし会席）',
    queries: [
      '足摺国際ホテル',
      'TheMana Village',
      'アシズリテルメ',
      '足摺サニーサイドホテル',
      '味彩の宿　南国'
    ]
  },
  {
    theme: 'nagano_tateshina',
    label: '長野・蓼科温泉郷（初冬八ヶ岳雪景色と信玄の隠し湯美肌露天・極上信州蓼科牛ステーキ＆信州サーモン会席）',
    queries: [
      '蓼科　親湯温泉',
      '蓼科グランドホテル滝の湯',
      '蓼科東急ホテル',
      'リゾートホテル蓼科',
      '蓼科パークホテル'
    ]
  },
  {
    theme: 'miyagi_sakunami',
    label: '宮城・作並温泉＆仙台奥座敷（広瀬川渓谷初冬雪見岩風呂と美肌名湯・極上A5仙台牛ステーキ＆名物仙台せり鍋会席）',
    queries: [
      'ゆづくしSalon一の坊',
      '仙台作並',
      'グリーングリーン',
      '湯の原ホテル',
      '篝火の湯　緑水亭'
    ]
  },
  {
    theme: 'hokkaido_akanko',
    label: '北海道・阿寒湖温泉（初冬の阿寒湖フロストフラワー絶景とアイヌコタン・道東極上海鮮蟹＆北海道黒毛和牛会席）',
    queries: [
      'あかん遊久の里鶴雅',
      'あかん鶴雅別荘鄙の座',
      'ニュー阿寒ホテル',
      '花ゆう香',
      'ホテル　御前水'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 77 (All 5 Themes, Exactly 5 Local Hotels Each)');
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
        await sleep(1200); // 楽天APIレートリミット対策
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
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    console.log(`Total hotels collected for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length < 5) {
      console.error(`ERROR: Failed to collect 5 hotels for ${t.theme}!`);
      process.exit(1);
    }
    result[t.theme] = themeHotels;
  }

  const outputPath = path.join(__dirname, 'round77_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully wrote all hotel data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round77_hotels:', err);
  process.exit(1);
});
