const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function refine() {
  const jsonPath = path.join(__dirname, 'round145_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // 1. 有馬温泉の補正（竹取亭円山を陶泉 御所坊または月光園に差し替え）
  console.log('Refining Arima Luxury Hotels...');
  const arimaKeep = data.hyogo_arima_onsen_luxury.hotels.filter(h => h.hotelMinCharge > 0);
  const arimaRes = await searchRakutenHotels('有馬温泉 陶泉 御所坊', 2);
  await sleep(1000);
  if (arimaRes && arimaRes.length > 0) {
    const h = arimaRes[0];
    if (h.hotelImageUrl && !arimaKeep.find(x => x.hotelNo === h.hotelNo)) {
      arimaKeep.push(h);
      console.log(`  Added Arima: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
    }
  }
  if (arimaKeep.length < 5) {
    const res2 = await searchRakutenHotels('有馬温泉 月光園 鴻朧館', 2);
    await sleep(1000);
    if (res2 && res2.length > 0) {
      arimaKeep.push(res2[0]);
      console.log(`  Added Arima: ${res2[0].hotelName}`);
    }
  }
  data.hyogo_arima_onsen_luxury.hotels = arimaKeep.slice(0, 5);

  // 2. 松本・扉温泉の補正（ビジネスホテルとMin=0を浅間温泉の名門宿に差し替え）
  console.log('Refining Matsumoto / Tobira Luxury Hotels...');
  const naganoKeep = data.nagano_tobira_onsen_myojinkan.hotels.filter(h => 
    !h.hotelName.includes('ウェルカム') && h.hotelMinCharge > 0
  );
  const naganoQueries = ['浅間温泉 菊之湯', '星野リゾート 界 松本', '浅間温泉 和泉荘'];
  for (const q of naganoQueries) {
    if (naganoKeep.length >= 5) break;
    const res = await searchRakutenHotels(q, 2);
    await sleep(1000);
    if (res && res.length > 0) {
      const h = res[0];
      if (h.hotelImageUrl && !naganoKeep.find(x => x.hotelNo === h.hotelNo)) {
        naganoKeep.push(h);
        console.log(`  Added Nagano: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
      }
    }
  }
  data.nagano_tobira_onsen_myojinkan.hotels = naganoKeep.slice(0, 5);

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('\nFinished refining round 145 luxury hotels!');
  for (const k of Object.keys(data)) {
    console.log(`\nTheme ${k}: ${data[k].hotels.length} hotels`);
    data[k].hotels.forEach((h, i) => console.log(`  [${i+1}] ${h.hotelName} (¥${h.hotelMinCharge}, ★${h.reviewAverage})`));
  }
}

refine().catch(console.error);
