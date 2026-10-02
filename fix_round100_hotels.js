const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const jsonPath = path.join(__dirname, 'round100_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // 1. 伊勢神宮の5軒目
  console.log('Fetching 5th hotel for Ise...');
  const iseQueries = ['ホテルルートイン伊勢', '伊勢シティホテル', '和亭 朝日館', '千年のしじま 月夜見の座'];
  for (const q of iseQueries) {
    if (data.mie_ise_jingu_hatsumode.hotels.length >= 5) break;
    const res = await searchRakutenHotels(q, 3);
    await sleep(1300);
    if (res && res.length > 0) {
      const h = res[0];
      const exists = data.mie_ise_jingu_hatsumode.hotels.some(x => x.hotelNo === h.hotelNo);
      if (!exists) {
        data.mie_ise_jingu_hatsumode.hotels.push(h);
        console.log(`Added to Ise: ${h.hotelName} (No: ${h.hotelNo})`);
      }
    }
  }

  // 2. 軽井沢の5軒目
  console.log('Fetching 5th hotel for Karuizawa...');
  const karuizawaQueries = ['旧軽井沢ホテル音羽ノ森', 'チサンイン軽井沢', 'ホテル軽井沢1130', '軽井沢ホテル ロンギングハウス'];
  for (const q of karuizawaQueries) {
    if (data.nagano_karuizawa_hoshino.hotels.length >= 5) break;
    const res = await searchRakutenHotels(q, 3);
    await sleep(1300);
    if (res && res.length > 0) {
      const h = res[0];
      const exists = data.nagano_karuizawa_hoshino.hotels.some(x => x.hotelNo === h.hotelNo);
      if (!exists) {
        data.nagano_karuizawa_hoshino.hotels.push(h);
        console.log(`Added to Karuizawa: ${h.hotelName} (No: ${h.hotelNo})`);
      }
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Finished updating round100_raw_hotels.json!');
  for (const k of Object.keys(data)) {
    console.log(`Theme ${k}: ${data[k].hotels.length} hotels`);
  }
}

main().catch(console.error);
