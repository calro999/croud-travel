const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function refine() {
  const jsonPath = path.join(__dirname, 'round144_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // 1. 飯坂温泉の補正
  console.log('Refining Fukushima Iizaka...');
  const iizakaQueries = ['ホテル聚楽 飯坂', '飯坂温泉 喜久屋', '飯坂温泉 ほりえや旅館', '飯坂温泉 栄楽', '飯坂温泉 伊勢屋'];
  const iizakaKeep = data.fukushima_iizaka_onsen.hotels.filter(h => 
    h.hotelName.includes('吉川屋') || h.hotelName.includes('大鳥') || h.hotelName.includes('青葉旅館')
  );
  for (const q of iizakaQueries) {
    if (iizakaKeep.length >= 5) break;
    const res = await searchRakutenHotels(q, 2);
    await sleep(1000);
    if (res && res.length > 0) {
      for (const h of res) {
        if (!iizakaKeep.find(x => x.hotelNo === h.hotelNo) && h.hotelImageUrl && (h.address2.includes('飯坂') || h.hotelName.includes('飯坂') || h.hotelName.includes('聚楽'))) {
          iizakaKeep.push(h);
          console.log(`  Added Iizaka: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
          if (iizakaKeep.length >= 5) break;
        }
      }
    }
  }
  data.fukushima_iizaka_onsen.hotels = iizakaKeep;

  // 2. 宮城白石・キツネ村・鎌先温泉の補正
  console.log('Refining Miyagi Shiroishi / Kamasaki / Fox Village...');
  const zaoQueries = ['ベネシアンホテル白石蔵王', '白石温泉 薬師の湯', '湯主一條', '鎌先温泉 すゞきや', '白石蔵王駅 ホテル'];
  const zaoKeep = data.miyagi_zao_fox_village_kamasaki.hotels.filter(h => 
    h.hotelName.includes('最上屋') || h.hotelName.includes('パシフィックホテル白石')
  );
  for (const q of zaoQueries) {
    if (zaoKeep.length >= 5) break;
    const res = await searchRakutenHotels(q, 3);
    await sleep(1000);
    if (res && res.length > 0) {
      for (const h of res) {
        if (!zaoKeep.find(x => x.hotelNo === h.hotelNo) && h.hotelImageUrl && (h.address1.includes('宮城') || h.address2.includes('白石') || h.hotelName.includes('白石') || h.hotelName.includes('一條') || h.hotelName.includes('薬師'))) {
          zaoKeep.push(h);
          console.log(`  Added Shiroishi/Zao: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
          if (zaoKeep.length >= 5) break;
        }
      }
    }
  }
  data.miyagi_zao_fox_village_kamasaki.hotels = zaoKeep;

  // 3. 山形小野川温泉の補正
  console.log('Refining Yamagata Onogawa...');
  const onogawaKeep = data.yamagata_onogawa_onsen_bihada.hotels.filter(h => 
    h.hotelName.includes('吾妻荘') || h.hotelName.includes('亀屋万年閣') || h.hotelName.includes('うめや旅館') || h.hotelName.includes('やな川屋')
  );
  const onogawaQueries = ['小野川温泉 河鹿荘', '小野川温泉 高砂屋', '米沢市 小野川温泉', '白布温泉 東屋'];
  for (const q of onogawaQueries) {
    if (onogawaKeep.length >= 5) break;
    const res = await searchRakutenHotels(q, 2);
    await sleep(1000);
    if (res && res.length > 0) {
      for (const h of res) {
        if (!onogawaKeep.find(x => x.hotelNo === h.hotelNo) && h.hotelImageUrl && (h.hotelName.includes('小野川') || h.hotelName.includes('河鹿荘') || h.hotelName.includes('白布') || h.address2.includes('米沢'))) {
          onogawaKeep.push(h);
          console.log(`  Added Onogawa: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
          if (onogawaKeep.length >= 5) break;
        }
      }
    }
  }
  data.yamagata_onogawa_onsen_bihada.hotels = onogawaKeep;

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('\nFinished refining round 144 hotels!');
  for (const k of Object.keys(data)) {
    console.log(`Theme ${k}: ${data[k].hotels.length} hotels`);
    data[k].hotels.forEach((h, i) => console.log(`  [${i+1}] ${h.hotelName} (¥${h.hotelMinCharge})`));
  }
}

refine().catch(console.error);
