const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fix() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  console.log('Fetching tono_kamado (Iwate Tono/Hanamaki)...');
  await sleep(1500);
  let hotels = await searchRakutenHotels('遠野 民話 旅館 岩手', 3);
  if (!hotels || hotels.length === 0) {
    hotels = await searchRakutenHotels('花巻温泉 郷土料理 旅館 岩手', 3);
  }

  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-traditional-kamado-rice-irori-stay']['tono_kamado'] = {
      label: '岩手県遠野市・花巻ふるさと納税・南部曲り家とかまど炊き郷土料理・民話の里のんびりステイ',
      hotels: hotels
    };
    console.log('-> SUCCESS tono_kamado:', hotels[0].hotelName);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

fix();
