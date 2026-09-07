const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // 1. 三大渓流
  { key: 'stream_sandankyo', queries: ['三段峡 かわち', '三段峡温泉 かわち', '安芸太田町 温泉', '温井スプリングス'], label: '広島県安芸太田町ふるさと納税・国の特別名勝・三段峡の玄関口「温井温泉 温井スプリングス」' },
  { key: 'stream_mitake', queries: ['おくたま路', '青梅 温泉', 'かんぽの宿 青梅', '亀の井ホテル 青梅'], label: '東京都青梅市ふるさと納税・御岳渓谷の清流と奥多摩の山並みを望む「亀の井ホテル 青梅」' },

  // 2. 三大奇勝
  { key: 'wonder_yabakei', queries: ['耶馬渓 温泉', '耶馬溪 若山', '中津市 耶馬渓', '中津 サンライズホテル'], label: '大分県中津市ふるさと納税・日本新三景・奇岩と紅葉の渓谷美「耶馬渓」中津温泉ステイ' },
  { key: 'wonder_kankakei', queries: ['小豆島国際ホテル', '小豆島 ベイリゾート', 'リゾートホテルオリビアン小豆島'], label: '香川県土庄町ふるさと納税・日本三大渓谷美・寒霞渓とエンジェルロード「小豆島国際ホテル」' },

  // 4. 秘境百選
  { key: 'hidden_akiyamago', queries: ['秋山郷 温泉', '栄村 温泉', '苗場山麓 温泉', '津南町 温泉', 'ニュー・グリーンピア津南'], label: '長野県栄村・新潟県津南町ふるさと納税・苗場山麓の秘境と名湯「信州秋山郷・ニュー・グリーンピア津南」' }
];

async function retry() {
  const round52Path = path.join(__dirname, 'round52_hotels.json');
  const allPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

  let round52 = JSON.parse(fs.readFileSync(round52Path, 'utf-8'));
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
      round52[t.key] = itemData;
      allData[t.key] = itemData;
    } else {
      console.error(` -> COULD NOT FIND for ${t.key}`);
    }
  }

  fs.writeFileSync(round52Path, JSON.stringify(round52, null, 2), 'utf-8');
  fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf-8');
  console.log('Retry complete!');
}

retry();
