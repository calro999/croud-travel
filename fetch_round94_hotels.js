const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-hakone-gora-onsen-art-luxury-stay',
    queries: [
      { key: 'gora_byakudan', query: '強羅 白檀', label: '箱根町ふるさと納税・白檀の芳香薫る大人のラグジュアリー隠れ家！全室自家源泉掛け流し露天風呂と本格懐石' },
      { key: 'gora_yutorelo', query: 'ゆとりろ庵', label: '箱根町ふるさと納税・四季の彩り豊かな日本庭園と展望露天風呂！貸切露天風呂と創作和食会席' },
      { key: 'gora_tensui', query: '箱根藍樹', label: '箱根町ふるさと納税・早雲山の絶景を望む極上の和モダン空間！源泉掛け流し美肌温泉と極上会席' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
    queries: [
      { key: 'kannawa_oniyama', query: '別府鉄輪温泉 おにやまホテル', label: '別府市ふるさと納税・南畑湧出の豊富な名湯！鬼山地獄を望む西日本屈指の大露天風呂「鬼面の湯」' },
      { key: 'kannawa_sanso', query: '別府鉄輪温泉 山荘 神和苑', label: '別府市ふるさと納税・敷地内に二つの自家源泉と能舞台・庭園を擁する最高級宿！鉄輪の湯けむりと極上懐石' },
      { key: 'kannawa_kuroda', query: '別府鉄輪温泉 ホテル山水館', label: '別府市ふるさと納税・鉄輪温泉の中心に佇む展望大浴場と名物地獄蒸し料理！豊後牛と関アジ美食' }
    ]
  },
  {
    slug: 'furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
    queries: [
      { key: 'arima_koyokaku', query: '有馬温泉 兵衛向陽閣', label: '神戸市ふるさと納税・創業七百年の伝統を誇る名門！三つの大浴場でめぐる金湯と神戸牛会席' },
      { key: 'arima_gekkoen', query: '有馬温泉 月光園 鴻朧館', label: '神戸市ふるさと納税・落葉山の絶景を望む渓流沿いの優雅宿！自家源泉の赤湯（金泉）と本格京風懐石' },
      { key: 'arima_goshoboh', query: '陶泉 御所坊', label: '神戸市ふるさと納税・創業八百年・谷崎潤一郎ゆかりの最古の湯宿！半混浴の金泉露天風呂と山家会席' }
    ]
  },
  {
    slug: 'furusato-tax-noboribetsu-onsen-jigokudani-resort-stay',
    queries: [
      { key: 'noboribetsu_takimotokan', query: '登別温泉 第一滝本館', label: '登別市ふるさと納税・創業百六十余年！千五百坪の大浴場に五つの異なる泉質が注ぐ温泉天国' },
      { key: 'noboribetsu_grand', query: '登別グランドホテル', label: '登別市ふるさと納税・「登別の迎賓館」と称されるドーム型ローマ風呂と鬼サウナ！贅沢ビュッフェ' },
      { key: 'noboribetsu_mahoroba', query: '登別温泉 ホテルまほろば', label: '登別市ふるさと納税・日本最大級の露天風呂と四つの泉質！三大蟹食べ放題ディナーバイキング' }
    ]
  }
];

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
    } catch (e) {
      console.error('Failed to parse all_seasonal_rakuten_hotels.json', e);
    }
  }

  for (const page of furusatoConfigs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const results = await searchRakutenHotels(q.query, 1);
        if (results && results.length > 0) {
          const hotel = results[0];
          console.log(` -> Found: [${hotel.hotelNo}] ${hotel.hotelName} (Rating: ${hotel.reviewAverage}, Reviews: ${hotel.reviewCount})`);
          allSeasonal[page.slug][q.key] = {
            ...hotel,
            searchQuery: q.query,
            curatorLabel: q.label
          };
        } else {
          console.warn(` -> No hotels found for query: "${q.query}"`);
        }
      } catch (err) {
        console.error(` -> Error searching for "${q.query}":`, err.message);
      }
      await sleep(2200);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 94 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
