const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

async function fixKorankei() {
  const data = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  console.log('香嵐渓・豊田・名古屋駅前のホテルを再検索中...');
  
  // 豊田市・名古屋駅前・猿投温泉で検索
  const kw1 = await searchRakutenHotels('豊田市 ホテル', 3);
  const kw2 = await searchRakutenHotels('名古屋駅前 ホテル', 3);
  
  const all = [...kw1, ...kw2];
  const seen = new Set();
  const unique = all.filter(h => {
    if (!h.hotelNo || seen.has(h.hotelNo)) return false;
    seen.add(h.hotelNo);
    return true;
  });

  data['korankei-autumn-leaves-lightup-access-guide'] = { hotels: unique.slice(0, 6) };
  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('香嵐渓向けホテルデータ保存完了:', unique.length, '件');
}

fixKorankei().catch(console.error);
