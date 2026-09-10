const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const fixes = [
    // 仙石原ホテル3件目を「仙石原 はなの宿 追分」または「箱根リトリート」などの超人気宿に
    {
      page: 'furusato-tax-hakone-sengokuhara-pampas-luxury-stay',
      key: 'sengokuhara_kanade',
      query: '箱根リトリート',
      label: '箱根町ふるさと納税・北欧リゾートの優雅さと大自然の森！温泉と本格ウッドバーニング薪火料理'
    },
    // 由布院の2件目を「由布院温泉 湯布院山灯館」または「ゆふいん花由」などの絶景宿に
    {
      page: 'furusato-tax-yufuin-kinrinko-luxury-villa-stay',
      key: 'yufuin_kamenoi',
      query: 'ゆふいん花由',
      label: '由布市ふるさと納税・由布岳の絶景を望む高台の離れ宿！全室温泉露天風呂付き客室と朝霧パノラマ'
    }
  ];

  for (const f of fixes) {
    console.log(`Searching: ${f.query}...`);
    try {
      const results = await searchRakutenHotels(f.query, 1);
      if (results && results.length > 0) {
        const hotel = results[0];
        console.log(` -> Found: [${hotel.hotelNo}] ${hotel.hotelName} (Rating: ${hotel.reviewAverage})`);
        if (!allSeasonal[f.page]) allSeasonal[f.page] = {};
        allSeasonal[f.page][f.key] = {
          ...hotel,
          searchQuery: f.query,
          curatorLabel: f.label
        };
      }
    } catch (e) {
      console.error(`Error for ${f.query}:`, e);
    }
    await sleep(2200);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log("Fixed Round 95 hotels successfully!");
}

main().catch(console.error);
