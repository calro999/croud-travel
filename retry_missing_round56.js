const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // 重伝建3: 今井町（奈良・橿原）
  { 
    key: 'heritage_imai', 
    queries: ['橿原 ホテル', 'THE KASHIHARA', 'カンデオホテルズ奈良橿原', '橿原 温泉'], 
    label: '奈良県橿原市ふるさと納税・五百棟の伝統町家が残る大和の自治都市「重要伝統的建造物群保存地区・今井町」カンデオホテルズ奈良橿原' 
  },
  // 名水1: 白川水源（南阿蘇）
  { 
    key: 'spring_shirakawa', 
    queries: ['南阿蘇 温泉', '阿蘇ホテル', '南阿蘇 Luna Observatory', 'ホテル夢しずく'], 
    label: '熊本県南阿蘇村ふるさと納税・毎分60トンの名水を誇る白川水源と阿蘇五岳を望む美肌温泉「南阿蘇温泉ホテル夢しずく」' 
  },
  // 名水2: 安曇野わさび田湧水
  { 
    key: 'spring_azumino', 
    queries: ['穂高温泉郷 ホテル', '安曇野 穂高ビューホテル', '休暇村 安曇野', 'アンビエント安曇野'], 
    label: '長野県安曇野市ふるさと納税・北アルプスの清冽な雪解け水湧くわさび田と山麓の名湯「穂高温泉郷 穂高ビューホテル」' 
  },
  // 六古窯1: 備前焼
  { 
    key: 'kiln_bizen', 
    queries: ['備前市 ホテル', '牛窓 温泉', 'ホテルリマーニ', '日生 ホテル'], 
    label: '岡山県備前市・瀬戸内市ふるさと納税・千年の土と炎の芸術「日本六古窯・備前焼」の里と瀬戸内オーシャンビュー「ホテルリマーニ」' 
  },
  // 美林1: 青森ヒバ
  { 
    key: 'forest_hiba', 
    queries: ['界 津軽', '大鰐温泉 不二やホテル', '南部屋・海扇閣', '青森 青森ヒバ 温泉'], 
    label: '青森県大鰐町ふるさと納税・日本三大美林「青森ヒバ」の香りと大湯船・津軽三味線ライブ「大鰐温泉 不二やホテル」' 
  }
];

async function retry() {
  const round56Path = path.join(__dirname, 'round56_hotels.json');
  const allPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

  let round56 = JSON.parse(fs.readFileSync(round56Path, 'utf-8'));
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
      round56[t.key] = itemData;
      allData[t.key] = itemData;
    } else {
      console.error(` -> COULD NOT FIND for ${t.key}`);
    }
  }

  fs.writeFileSync(round56Path, JSON.stringify(round56, null, 2), 'utf-8');
  fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf-8');
  console.log('Retry complete!');
}

retry();
