const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  console.log('Fixing query for autumn-winter-sea-of-clouds.aso_clouds: "阿蘇 温泉 ホテル 露天風呂"...');
  const res = await searchRakutenHotels('阿蘇 温泉 ホテル 露天風呂', 4);
  console.log(` -> Found ${res.length} hotels.`);
  if (res.length > 0) {
    data['autumn-winter-sea-of-clouds']['aso_clouds'] = {
      label: '熊本・阿蘇外輪山（カルデラを覆う大雲海）',
      query: '阿蘇 温泉 ホテル 露天風呂',
      hotels: res
    };
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully fixed Aso clouds query with direct Rakuten API data!');
}

main().catch(console.error);
