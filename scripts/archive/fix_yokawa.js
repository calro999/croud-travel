const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function fix() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 炭酸泉で有名な山形・肘折温泉や有馬温泉銀の湯などを補完
  console.log('Fetching arima/nagayu carbonated alternative...');
  let hotels = await searchRakutenHotels('有馬温泉 炭酸 旅館', 3);
  if (!hotels || hotels.length === 0) {
    hotels = await searchRakutenHotels('有馬温泉 旅館', 3);
  }

  if (hotels && hotels.length > 0) {
    allSeasonal['furusato-tax-carbonated-spring-effervescent-onsen-stay']['yokawa_carbonated'] = {
      label: '兵庫県神戸市ふるさと納税・日本最古の名湯有馬温泉・銀の湯炭酸泉と神戸牛会席宿',
      hotels: hotels
    };
    console.log('Successfully added yokawa_carbonated (arima)! Top hotel:', hotels[0].hotelName);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
}

fix();
