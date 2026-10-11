const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../../rakuten_api_helper.js');

async function main() {
  const filePath = path.join(__dirname, 'round146_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  console.log('=== Refining Round 146 Hotels for Accuracy ===');

  // 1. Shizuoka Amagi Yugashima Hotels
  console.log('Refining Shizuoka Amagi Yugashima hotels...');
  const yugashimaKeywords = [
    '谷川の湯 あせび野',
    '文豪 川端康成 氏 『伊豆の踊子』 執筆の宿 湯ヶ島温泉 湯本館',
    'おちあいろう',
    '天城湯ヶ島温泉 白壁',
    '天城湯ヶ島 湯宿 嵯峨沢館'
  ];
  const yugashimaHotels = [];
  for (const kw of yugashimaKeywords) {
    try {
      const res = await searchRakutenHotels(kw, 3);
      if (res && res.length > 0) {
        // 重複除外
        if (!yugashimaHotels.some(h => h.hotelNo === res[0].hotelNo)) {
          yugashimaHotels.push(res[0]);
          console.log(`  ✓ Added Yugashima: ${res[0].hotelName} (No: ${res[0].hotelNo})`);
        }
      }
    } catch (e) {
      console.error(`  Error for ${kw}:`, e.message);
    }
  }
  if (yugashimaHotels.length >= 5) {
    data['shizuoka_amagi_yugashima_onsen'].hotels = yugashimaHotels.slice(0, 5);
  }

  // 2. Fukui Echizen Ono / Katsuyama Hotels
  console.log('Refining Fukui Echizen Ono / Katsuyama hotels...');
  const fukuiKeywords = [
    '永平寺 親禅の宿 柏樹關',
    '東急リゾートホテルハーヴェストスキージャム勝山',
    '勝山ニューホテル',
    '扇屋 福井県大野市',
    'ビジネス観光ホテルやなぎ屋'
  ];
  const fukuiHotels = [];
  for (const kw of fukuiKeywords) {
    try {
      const res = await searchRakutenHotels(kw, 3);
      if (res && res.length > 0) {
        if (!fukuiHotels.some(h => h.hotelNo === res[0].hotelNo)) {
          fukuiHotels.push(res[0]);
          console.log(`  ✓ Added Fukui: ${res[0].hotelName} (No: ${res[0].hotelNo}, Addr: ${res[0].address1}${res[0].address2})`);
        }
      }
    } catch (e) {
      console.error(`  Error for ${kw}:`, e.message);
    }
  }
  if (fukuiHotels.length >= 5) {
    data['fukui_echizen_ono_castle'].hotels = fukuiHotels.slice(0, 5);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('🎉 Refined hotel data saved successfully!');
}

main().catch(console.error);
