const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const query = '強羅温泉 雪月花';
  const results = await searchRakutenHotels(query, 1);
  if (results && results.length > 0) {
    const hotel = results[0];
    console.log(`Found: [${hotel.hotelNo}] ${hotel.hotelName}`);
    allSeasonal['furusato-tax-hakone-gora-onsen-art-luxury-stay']['gora_yutorelo'] = {
      ...hotel,
      searchQuery: query,
      curatorLabel: '箱根町ふるさと納税・強羅駅徒歩1分！全室客室檜露天風呂付き＆二つの自家源泉と選べる会席料理'
    };
  } else {
    // 別の定番名宿「箱根強羅温泉 ホテルマヨール」または「天翠茶寮」
    const query2 = '天翠茶寮';
    const results2 = await searchRakutenHotels(query2, 1);
    if (results2 && results2.length > 0) {
      const hotel = results2[0];
      console.log(`Found 2: [${hotel.hotelNo}] ${hotel.hotelName}`);
      allSeasonal['furusato-tax-hakone-gora-onsen-art-luxury-stay']['gora_yutorelo'] = {
        ...hotel,
        searchQuery: query2,
        curatorLabel: '箱根町ふるさと納税・日本の美と遊ぶ湯宿！全室温泉露天風呂付き客室と足湯カフェ＆懐石'
      };
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

main().catch(console.error);
