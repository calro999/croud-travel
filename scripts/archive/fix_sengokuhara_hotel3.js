const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const query = '仙石原温泉 はなの宿 追分';
  const results = await searchRakutenHotels(query, 1);
  if (results && results.length > 0) {
    const hotel = results[0];
    console.log(`Found: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.reviewAverage})`);
    allSeasonal['furusato-tax-hakone-sengokuhara-pampas-luxury-stay']['sengokuhara_kanade'] = {
      ...hotel,
      searchQuery: query,
      curatorLabel: '箱根町ふるさと納税・全五室の隠れ宿！大涌谷のにごり湯と旬の味覚を散りばめた花懐石'
    };
  } else {
    // 別の候補「箱根仙石原温泉 ホテルハーヴェスト箱根明神平」
    const query2 = 'ホテル大箱根';
    const results2 = await searchRakutenHotels(query2, 1);
    if (results2 && results2.length > 0) {
      const hotel = results2[0];
      console.log(`Found 2: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.reviewAverage})`);
      allSeasonal['furusato-tax-hakone-sengokuhara-pampas-luxury-stay']['sengokuhara_kanade'] = {
        ...hotel,
        searchQuery: query2,
        curatorLabel: '箱根町ふるさと納税・箱根外輪山を望む高原リゾート！展望大浴場と極上ディナービュッフェ'
      };
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

main().catch(console.error);
