const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // カルスト1: 秋吉台
  { 
    key: 'karst_akiyoshi', 
    queries: ['秋吉台 温泉', '美祢市 温泉', '秋芳館', '湯免温泉 西京'], 
    label: '山口県美祢市ふるさと納税・東洋屈指の大石灰岩台地と悠久の鍾乳洞巡り「秋吉台温泉ステイ」' 
  },
  // カルスト2: 四国カルスト
  { 
    key: 'karst_shikoku', 
    queries: ['星ふるヴィレッジTENGU', '天狗荘', '梼原 温泉', '雲の上のホテル別館 マルシェ・ユスハラ'], 
    label: '高知県梼原町ふるさと納税・標高1400m天空の絶景・四国カルストの星空リゾート「星ふるヴィレッジTENGU」' 
  }
];

async function retry() {
  const round53Path = path.join(__dirname, 'round53_hotels.json');
  const allPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

  let round53 = JSON.parse(fs.readFileSync(round53Path, 'utf-8'));
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
      round53[t.key] = itemData;
      allData[t.key] = itemData;
    } else {
      console.error(` -> COULD NOT FIND for ${t.key}`);
    }
  }

  fs.writeFileSync(round53Path, JSON.stringify(round53, null, 2), 'utf-8');
  fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf-8');
  console.log('Retry complete!');
}

retry();
