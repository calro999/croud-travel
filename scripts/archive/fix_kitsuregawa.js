const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  console.log("Fetching 栃木 喜連川温泉 ホテル...");
  const hotels = await searchRakutenHotels("栃木 喜連川温泉 ホテル", 3);
  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-three-major-bihada-hotspring-stay']['kitsuregawa_bihada'] = {
      label: '栃木県さくら市ふるさと納税・日本三大美肌の湯・喜連川温泉の極上癒やし宿',
      hotels: hotels
    };
    console.log("SUCCESS kitsuregawa_bihada:", hotels[0].hotelName);
  } else {
    console.log("Fallback to 栃木 さくら市 温泉...");
    const fallback = await searchRakutenHotels("さくら市 温泉 栃木", 3);
    if (fallback && fallback.length > 0) {
      allSeasonal['furusato-tax-three-major-bihada-hotspring-stay']['kitsuregawa_bihada'] = {
        label: '栃木県さくら市ふるさと納税・日本三大美肌の湯・喜連川温泉の極上癒やし宿',
        hotels: fallback
      };
      console.log("SUCCESS fallback:", fallback[0].hotelName);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

main();
