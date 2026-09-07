const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // 松原1: 三保の松原
  { 
    key: 'pine_miho', 
    queries: ['三保園ホテル', '三保松原', '清水港 ホテル クエスト清水', 'ホテルクエスト清水'], 
    label: '静岡県静岡市ふるさと納税・世界文化遺産・富士山と三保の松原の絶景「ホテルクエスト清水」' 
  },
  // 松原3: 気比の松原（敦賀）
  { 
    key: 'pine_kehi', 
    queries: ['敦賀 マンテンホテル', '敦賀 温泉', 'ホテルルートイン敦賀駅前', '東横ＩＮＮ敦賀駅前'], 
    label: '福井県敦賀市ふるさと納税・万葉の白砂青松・気比の松原と越前若狭の海の幸「北陸福井・敦賀マンテンホテル駅前」' 
  },
  // 山城2: 備中松山城（岡山・高梁）※先ほど上諏訪温泉がヒットしたため岡山県内・倉敷/高梁で厳密に再取得
  {
    key: 'castle_bitchu',
    queries: ['高梁市 宿泊', '吉備路 温泉', '国民宿舎 サンロード吉備路', '倉敷美観地区 旅館'],
    label: '岡山県総社市・高梁市ふるさと納税・現存天守の天空山城・備中松山城の雲海と天然温泉「国民宿舎 サンロード吉備路」'
  }
];

async function retry() {
  const round54Path = path.join(__dirname, 'round54_hotels.json');
  const allPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

  let round54 = JSON.parse(fs.readFileSync(round54Path, 'utf-8'));
  let allData = JSON.parse(fs.readFileSync(allPath, 'utf-8'));

  for (const t of targets) {
    console.log(`\n--- Retrying ${t.key} ---`);
    let found = null;
    for (const q of t.queries) {
      console.log(`Trying query: "${q}"...`);
      try {
        const res = await searchRakutenHotels(q, 1);
        await sleep(3500);
        if (res && res.length > 0) {
          found = res[0];
          console.log(` -> FOUND: ${found.hotelName} (${found.hotelNo})`);
          break;
        }
      } catch (e) {
        console.error('Error:', e.message);
        await sleep(3500);
      }
    }

    if (found) {
      const itemData = {
        hotelNo: found.hotelNo,
        hotelName: found.hotelName,
        hotelKanaName: found.hotelKanaName || '',
        hotelInformationUrl: found.hotelInformationUrl,
        planListUrl: found.planListUrl,
        dpPlanListUrl: found.dpPlanListUrl,
        reviewUrl: found.reviewUrl,
        hotelImageUrl: found.hotelImageUrl || '',
        hotelThumbnailUrl: found.hotelThumbnailUrl || '',
        roomImageUrl: found.roomImageUrl || '',
        hotelMinCharge: found.hotelMinCharge || 0,
        latitude: found.latitude,
        longitude: found.longitude,
        postalCode: found.postalCode,
        address1: found.address1,
        address2: found.address2,
        telephoneNo: found.telephoneNo,
        access: found.access,
        parkingInformation: found.parkingInformation,
        nearestStation: found.nearestStation,
        hotelHeaderImageUrl: found.hotelHeaderImageUrl || '',
        userReview: found.userReview || '',
        reviewCount: found.reviewCount || 0,
        reviewAverage: found.reviewAverage || 0,
        label: t.label,
        query: found.hotelName
      };
      round54[t.key] = itemData;
      allData[t.key] = itemData;
    } else {
      console.error(` -> COULD NOT FIND for ${t.key}`);
    }
  }

  fs.writeFileSync(round54Path, JSON.stringify(round54, null, 2), 'utf-8');
  fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf-8');
  console.log('Retry complete!');
}

retry();
