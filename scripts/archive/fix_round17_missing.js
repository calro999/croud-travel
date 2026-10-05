const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fix() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. 庄内 金華豚・あつみ温泉
  console.log('Fetching kinka_pork (Tsuruoka/Atsumi onsen)...');
  await sleep(1500);
  let kinka = await searchRakutenHotels('あつみ温泉 旅館 山形 鶴岡', 3);
  if (!kinka || kinka.length === 0) {
    kinka = await searchRakutenHotels('鶴岡 温泉 旅館 山形', 3);
  }
  if (kinka && kinka.length > 0) {
    allSeasonal['furusato-tax-brand-pork-shabu-gourmet-stay']['kinka_pork'] = {
      label: '山形県鶴岡市ふるさと納税・幻の平田牧場金華豚とあつみ温泉・庄内旬鮮会席宿',
      hotels: kinka
    };
    console.log('-> SUCCESS kinka_pork:', kinka[0].hotelName);
  }

  // 2. 屋久島 リゾート
  console.log('Fetching yakushima_forest...');
  await sleep(1500);
  let yaku = await searchRakutenHotels('屋久島 ホテル 鹿児島', 3);
  if (yaku && yaku.length > 0) {
    allSeasonal['furusato-tax-three-major-forest-therapy-retreat-stay']['yakushima_forest'] = {
      label: '鹿児島県屋久島町ふるさと納税・世界自然遺産屋久杉の原生林と太平洋一望オーシャンリゾート',
      hotels: yaku
    };
    console.log('-> SUCCESS yakushima_forest:', yaku[0].hotelName);
  }

  // 3. 余市 ニッカ・小樽
  console.log('Fetching yoichi_whisky...');
  await sleep(1500);
  let yoichi = await searchRakutenHotels('小樽 余市 ホテル 北海道', 3);
  if (yoichi && yoichi.length > 0) {
    allSeasonal['furusato-tax-distillery-whisky-pairing-stay']['yoichi_whisky'] = {
      label: '北海道余市町ふるさと納税・日本のスコットランド余市蒸溜所と小樽運河のクラシック宿',
      hotels: yoichi
    };
    console.log('-> SUCCESS yoichi_whisky:', yoichi[0].hotelName);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Finished updating missing hotels for Round 17');
}

fix();
