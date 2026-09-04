const { searchRakutenHotels } = require('./rakuten_api_helper');
const fs = require('fs');
const path = require('path');

const HOTEL_DATA_PATH = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');

async function fixCarFreeGlamping() {
  const data = JSON.parse(fs.readFileSync(HOTEL_DATA_PATH, 'utf8'));
  console.log('車なし・送迎ありグランピング施設の追加検索中...');
  
  // 「グランピング 送迎」「グランピング 駅から徒歩」
  const kw1 = await searchRakutenHotels('グランピング 送迎', 3);
  const kw2 = await searchRakutenHotels('ドームテント 送迎', 3);
  
  const all = [...(data['silver-week-glamping-car-free-bus-train-guide']?.hotels || []), ...kw1, ...kw2];
  const seen = new Set();
  const unique = all.filter(h => {
    if (!h.hotelNo || seen.has(h.hotelNo)) return false;
    seen.add(h.hotelNo);
    return true;
  });

  data['silver-week-glamping-car-free-bus-train-guide'] = { hotels: unique.slice(0, 6) };
  fs.writeFileSync(HOTEL_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('車なしグランピング施設データ保存完了:', unique.length, '件');
}

fixCarFreeGlamping().catch(console.error);
