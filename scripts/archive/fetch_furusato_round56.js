const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-preservation-districts-heritage-stay',
    queries: [
      { query: '岡山 倉敷 美観地区 料理旅館 鶴形', fallback: '料理旅館　鶴形', key: 'heritage_kurashiki', label: '岡山県倉敷市ふるさと納税・白壁土蔵と柳並木・江戸中期の町家を改装した老舗「倉敷美観地区 料理旅館鶴形」' },
      { query: '山口 萩 城下町 北門屋敷', fallback: '萩城三の丸　北門屋敷', key: 'heritage_hagi', label: '山口県萩市ふるさと納税・白壁となまこ壁が連なる維新胎動の城下町・武家屋敷街「萩城三の丸 北門屋敷」' },
      { query: '奈良 橿原 今井町 うのすけ', fallback: '橿原観光ホテル', key: 'heritage_imai', label: '奈良県橿原市ふるさと納税・五百棟の伝統町家が残る大和の自治都市「重要伝統的建造物群保存地区・今井町」橿原ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-famous-spring-waters-healing-stay',
    queries: [
      { query: '熊本 南阿蘇 白川水源 温泉 竹楽亭', fallback: '南阿蘇温泉　竹楽亭', key: 'spring_shirakawa', label: '熊本県南阿蘇村ふるさと納税・毎分60トンの清冽な湧水を誇る日本名水百選「白川水源」南阿蘇温泉竹楽亭' },
      { query: '長野 安曇野 わさび田 にし屋別荘', fallback: '安曇野温泉　割烹旅館　にし屋別荘', key: 'spring_azumino', label: '長野県安曇野市ふるさと納税・北アルプスの雪解け水が育む大王わさび田と清流「安曇野温泉 割烹旅館にし屋別荘」' },
      { query: '静岡 三島 柿田川湧水 みしまプラザホテル', fallback: '富士山三島東急ホテル', key: 'spring_kakitagawa', label: '静岡県三島市・清水町ふるさと納税・富士山の伏流水が湧き出る東洋一の湧水群「柿田川湧水」富士山三島東急ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-six-ancient-kilns-pottery-stay',
    queries: [
      { query: '岡山 備前焼 温泉 備前観光ホテル', fallback: '備前観光ホテル', key: 'kiln_bizen', label: '岡山県備前市ふるさと納税・千年の土と炎の芸術・日本六古窯「備前焼」の里と瀬戸内海の旬魚「備前観光ホテル」' },
      { query: '滋賀 信楽 陶芸 信楽温泉 ホテルレイクヴィラ', fallback: '信楽温泉　ホテルレイクヴィラ', key: 'kiln_shigaraki', label: '滋賀県甲賀市ふるさと納税・登り窯のぬくもりとタヌキのふるさと「信楽焼」信楽温泉ホテルレイクヴィラ' },
      { query: '兵庫 丹波篠山 丹波立杭焼 料理旅館 近又', fallback: '丹波篠山　料理旅館　近又', key: 'kiln_tanba', label: '兵庫県丹波篠山市ふるさと納税・平安末期から続く丹波焼（立杭焼）の里と丹波篠山ぼたん鍋「料理旅館 近又」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-forests-wood-villa-stay',
    queries: [
      { query: '青森 大鰐温泉 青森ヒバ 星野リゾート 界 津軽', fallback: '星野リゾート　界　津軽', key: 'forest_hiba', label: '青森県大鰐町ふるさと納税・日本三大美林「青森ヒバ」の香りと大湯船・津軽三味線の生演奏「星野リゾート 界 津軽」' },
      { query: '秋田 男鹿 秋田スギ 男鹿温泉 結いの宿 別邸 つばき', fallback: '男鹿温泉　結いの宿　別邸　つばき', key: 'forest_sugi', label: '秋田県男鹿市ふるさと納税・日本三大美林「秋田杉」の美と日本海の旬魚石焼料理「男鹿温泉 結いの宿 別邸つばき」' },
      { query: '長野 木曽 木曽ヒノキ 温泉 棧温泉旅館', fallback: '木曽路の宿　いわや', key: 'forest_hinoki', label: '長野県木曽町ふるさと納税・伊勢神宮の式年遷宮を支える日本三大美林「木曽檜」と中山道歴史宿「木曽路の宿 いわや」' }
    ]
  }
];

async function run() {
  const allSeasonalPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let allSeasonalHotels = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonalHotels = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf-8'));
    } catch (e) {
      console.error('Error reading all_seasonal_rakuten_hotels.json:', e);
    }
  }

  const round56Hotels = {};

  for (const cfg of configs) {
    console.log(`\n=== Fetching for category: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching Rakuten API: "${q.query}" (fallback: "${q.fallback}")...`);
      let hotels = await searchRakutenHotels(q.query, 1);
      await sleep(3500); // 厳守: 楽天APIレート制限対策

      if (!hotels || hotels.length === 0) {
        console.log(`No results for "${q.query}". Trying fallback: "${q.fallback}"...`);
        hotels = await searchRakutenHotels(q.fallback, 1);
        await sleep(3500);
      }

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`  -> SUCCESS: Found "${hotel.hotelName}" (${hotel.hotelNo})`);
        const itemData = {
          hotelNo: hotel.hotelNo,
          hotelName: hotel.hotelName,
          hotelKanaName: hotel.hotelKanaName || '',
          hotelInformationUrl: hotel.hotelInformationUrl,
          planListUrl: hotel.planListUrl,
          dpPlanListUrl: hotel.dpPlanListUrl,
          reviewUrl: hotel.reviewUrl,
          hotelImageUrl: hotel.hotelImageUrl || '',
          hotelThumbnailUrl: hotel.hotelThumbnailUrl || '',
          roomImageUrl: hotel.roomImageUrl || '',
          hotelMinCharge: hotel.hotelMinCharge || 0,
          latitude: hotel.latitude,
          longitude: hotel.longitude,
          postalCode: hotel.postalCode,
          address1: hotel.address1,
          address2: hotel.address2,
          telephoneNo: hotel.telephoneNo,
          access: hotel.access,
          parkingInformation: hotel.parkingInformation,
          nearestStation: hotel.nearestStation,
          hotelHeaderImageUrl: hotel.hotelHeaderImageUrl || '',
          userReview: hotel.userReview || '',
          reviewCount: hotel.reviewCount || 0,
          reviewAverage: hotel.reviewAverage || 0,
          label: q.label,
          query: q.query
        };

        round56Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round56_hotels.json'), JSON.stringify(round56Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 56 hotels to round56_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
