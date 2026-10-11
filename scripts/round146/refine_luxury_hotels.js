const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function refine() {
  const jsonPath = path.join(__dirname, 'round146_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // 1. 熱海の補正（Min > 0 かつ高級宿）
  console.log('Refining Atami Luxury Hotels...');
  const atamiKeep = data.shizuoka_atami_izusan_luxury.hotels.filter(h => 
    h.hotelMinCharge > 0 && !h.hotelName.includes('貸切')
  );
  const atamiRes = await searchRakutenHotels('熱海パールスターホテル', 2);
  await sleep(1000);
  if (atamiRes && atamiRes.length > 0) {
    atamiKeep.unshift(atamiRes[0]);
    console.log(`  Added Atami: ${atamiRes[0].hotelName} (Min: ¥${atamiRes[0].hotelMinCharge})`);
  }
  data.shizuoka_atami_izusan_luxury.hotels = atamiKeep.slice(0, 5);

  // 2. 京都嵐山の補正（Min > 0 かつ嵐山温泉の宿）
  console.log('Refining Arashiyama Luxury Hotels...');
  const kyotoKeep = data.kyoto_arashiyama_luxury.hotels.filter(h => h.hotelMinCharge > 0);
  const kyotoRes = await searchRakutenHotels('嵐山温泉 花筏', 2);
  await sleep(1000);
  if (kyotoRes && kyotoRes.length > 0) {
    kyotoKeep.push(kyotoRes[0]);
    console.log(`  Added Kyoto: ${kyotoRes[0].hotelName} (Min: ¥${kyotoRes[0].hotelMinCharge})`);
  }
  data.kyoto_arashiyama_luxury.hotels = kyotoKeep.slice(0, 5);

  // 3. 加賀温泉郷の補正（金沢茶屋を山代温泉・山中温泉の高級宿に差し替え）
  console.log('Refining Kaga Luxury Hotels...');
  const kagaKeep = data.ishikawa_kaga_yamashiro_luxury.hotels.filter(h => 
    !h.hotelName.includes('金沢茶屋') && h.hotelMinCharge > 0
  );
  const kagaRes = await searchRakutenHotels('山代温泉 ゆのくに天祥', 2);
  await sleep(1000);
  if (kagaRes && kagaRes.length > 0) {
    kagaKeep.push(kagaRes[0]);
    console.log(`  Added Kaga: ${kagaRes[0].hotelName} (Min: ¥${kagaRes[0].hotelMinCharge})`);
  }
  if (kagaKeep.length < 5) {
    const kagaRes2 = await searchRakutenHotels('山中温泉 お花見久兵衛', 2);
    await sleep(1000);
    if (kagaRes2 && kagaRes2.length > 0) {
      kagaKeep.push(kagaRes2[0]);
      console.log(`  Added Kaga: ${kagaRes2[0].hotelName}`);
    }
  }
  data.ishikawa_kaga_yamashiro_luxury.hotels = kagaKeep.slice(0, 5);

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('\nFinished refining round 146 ultra-luxury hotels!');
  for (const k of Object.keys(data)) {
    console.log(`\nTheme ${k}: ${data[k].hotels.length} hotels`);
    data[k].hotels.forEach((h, i) => console.log(`  [${i+1}] ${h.hotelName} (¥${h.hotelMinCharge}, ★${h.reviewAverage})`));
  }
}

refine().catch(console.error);
