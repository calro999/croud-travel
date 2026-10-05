const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  const fixes = [
    // 箱根強羅
    {
      page: 'furusato-tax-hakone-gora-onsen-art-luxury-stay',
      key: 'gora_yutorelo',
      query: '箱根強羅温泉 季の湯 雪月花',
      label: '箱根町ふるさと納税・強羅駅徒歩1分！全室客室檜露天風呂付き＆二つの自家源泉と選べる会席料理'
    },
    {
      page: 'furusato-tax-hakone-gora-onsen-art-luxury-stay',
      key: 'gora_tensui',
      query: '箱根強羅温泉 桐谷 箱根荘',
      label: '箱根町ふるさと納税・源泉掛け流しのにごり湯美肌温泉！早雲山の自然に包まれる純和風温泉旅館'
    },
    // 別府鉄輪
    {
      page: 'furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
      key: 'kannawa_oniyama',
      query: 'おにやまホテル',
      label: '別府市ふるさと納税・南畑湧出の豊富な名湯！鬼山地獄を望む西日本屈指の大露天風呂「鬼面の湯」'
    },
    // 有馬温泉
    {
      page: 'furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
      key: 'arima_goshoboh',
      query: '有馬温泉 御所坊',
      label: '神戸市ふるさと納税・創業八百年・谷崎潤一郎ゆかりの最古の湯宿！半混浴の金泉露天風呂と山家会席'
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
    await sleep(2500);
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log("Fixed Round 94 hotels successfully!");
}

main().catch(console.error);
