const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fillHotels() {
  const currentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'round93_raw_hotels.json'), 'utf8'));

  // 1. 肘折温泉 (あと2件)
  console.log('Searching more for 肘折温泉...');
  const hijioriExtra = await searchRakutenHotels('肘折温泉', 10);
  await sleep(1300);
  const hijioriUsed = new Set(currentData.yamagata_hijiori_onsen.map(h => h.hotelNo));
  for (const h of hijioriExtra) {
    if (currentData.yamagata_hijiori_onsen.length >= 5) break;
    if (!hijioriUsed.has(h.hotelNo)) {
      hijioriUsed.add(h.hotelNo);
      currentData.yamagata_hijiori_onsen.push(h);
      console.log(`  Added to 肘折: ${h.hotelName} (${h.hotelNo})`);
    }
  }

  // 2. 湯西川温泉 (あと1件)
  console.log('Searching more for 湯西川温泉...');
  const yunishigawaExtra = await searchRakutenHotels('湯西川温泉', 10);
  await sleep(1300);
  const yuniUsed = new Set(currentData.tochigi_yunishigawa_onsen.map(h => h.hotelNo));
  for (const h of yunishigawaExtra) {
    if (currentData.tochigi_yunishigawa_onsen.length >= 5) break;
    if (!yuniUsed.has(h.hotelNo)) {
      yuniUsed.add(h.hotelNo);
      currentData.tochigi_yunishigawa_onsen.push(h);
      console.log(`  Added to 湯西川: ${h.hotelName} (${h.hotelNo})`);
    }
  }

  // 3. 土肥温泉 (あと2件)
  console.log('Searching more for 土肥温泉...');
  const toiExtra = await searchRakutenHotels('土肥温泉', 10);
  await sleep(1300);
  const toiUsed = new Set(currentData.shizuoka_nishiizu_toi_onsen.map(h => h.hotelNo));
  for (const h of toiExtra) {
    if (currentData.shizuoka_nishiizu_toi_onsen.length >= 5) break;
    if (!toiUsed.has(h.hotelNo)) {
      toiUsed.add(h.hotelNo);
      currentData.shizuoka_nishiizu_toi_onsen.push(h);
      console.log(`  Added to 土肥: ${h.hotelName} (${h.hotelNo})`);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round93_raw_hotels.json'), JSON.stringify(currentData, null, 2), 'utf8');

  console.log('\n--- Final Check ---');
  for (const k of Object.keys(currentData)) {
    console.log(`${k}: ${currentData[k].length} hotels`);
  }
}

fillHotels().catch(console.error);
