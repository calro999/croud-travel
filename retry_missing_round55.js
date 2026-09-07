const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // ドライブ2: 志賀草津高原ルート
  { 
    key: 'drive_shiga', 
    queries: ['草津温泉 ホテル櫻井', '草津温泉 奈良屋', '万座プリンスホテル', '草津温泉 喜びの宿 高松'], 
    label: '群馬県草津町ふるさと納税・標高2172m日本国道最高地点・志賀草津高原ルート「草津温泉 ホテル櫻井」' 
  },
  // 熊野古道2: 那智勝浦
  { 
    key: 'kumano_katsuura', 
    queries: ['ホテル浦島', '熊野別邸 中の島', '那智勝浦 温泉 越之湯'], 
    label: '和歌山県那智勝浦町ふるさと納税・大門坂と那智の滝・絶景洞窟露天風呂「南紀勝浦温泉 ホテル浦島」' 
  },
  // ドライブ1: ビーナスライン（白樺リゾート池の平ホテルを直接再取得）
  {
    key: 'drive_venus',
    queries: ['白樺リゾート 池の平ホテル', '池の平ホテル', '白樺湖 池の平ホテル'],
    label: '長野県立科町・茅野市ふるさと納税・ビーナスラインの拠点・白樺湖畔の高原スパリゾート「白樺リゾート 池の平ホテル」'
  }
];

async function retry() {
  const round55Path = path.join(__dirname, 'round55_hotels.json');
  const allPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

  let round55 = JSON.parse(fs.readFileSync(round55Path, 'utf-8'));
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
      round55[t.key] = itemData;
      allData[t.key] = itemData;
    } else {
      console.error(` -> COULD NOT FIND for ${t.key}`);
    }
  }

  fs.writeFileSync(round55Path, JSON.stringify(round55, null, 2), 'utf-8');
  fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf-8');
  console.log('Retry complete!');
}

retry();
