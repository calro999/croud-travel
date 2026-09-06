const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  await sleep(2000);
  console.log('Fetching bisei with "美星 岡山"...');
  let hotels = await searchRakutenHotels('美星 岡山', 3);
  if (!hotels || hotels.length === 0) {
    await sleep(2000);
    console.log('Fetching bisei with "湯原温泉 岡山"...');
    hotels = await searchRakutenHotels('湯原温泉 岡山', 3);
  }

  console.log('Hotels found:', hotels ? hotels.length : 0);
  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-starry-sky-open-air-bath-observatory-stay']['star_bisei'] = {
      label: '岡山県井原市美星町ふるさと納税・光害防止条例が守る満天の星と美星天文台・奥湯の郷名宿',
      hotels: hotels
    };
    fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
    console.log('star_bisei saved successfully!');
  }
}

main();
