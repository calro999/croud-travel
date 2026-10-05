const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  console.log('Fetching tono/iwate beer & hop alternative...');
  let hotels = await searchRakutenHotels('遠野 旅館 岩手 ホテル', 3);
  if (!hotels || hotels.length === 0) {
    hotels = await searchRakutenHotels('遠野 岩手 ホテル', 3);
  }

  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-craft-cider-hop-brewery-stay']['tono_hop'] = {
      label: '岩手県遠野市ふるさと納税・日本一のホップの里遠野クラフトビール＆民話の里ステイ',
      hotels: hotels
    };
    console.log('Successfully added tono_hop! Top hotel:', hotels[0].hotelName);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

fix();
