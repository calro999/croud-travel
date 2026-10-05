const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-infinity-onsen-sky-ocean-view-stay',
    queries: [
      { key: 'inatori_infinity_onsen', query: '稲取 温泉 露天風呂 静岡 海', label: '東伊豆町ふるさと納税・相模灘と湯面が一体化するインフィニティ露天風呂宿' },
      { key: 'toya_infinity_onsen', query: '洞爺湖 温泉 露天風呂 北海道', label: '洞爺湖町ふるさと納税・静穏な湖面と羊蹄山に溶け込む天空インフィニティ温泉' },
      { key: 'onna_infinity_pool', query: '恩納村 インフィニティプール ホテル 沖縄', label: '恩納村ふるさと納税・東シナ海を見下ろす天空インフィニティプール＆リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-private-villa-hanare-hideaway-stay',
    queries: [
      { key: 'yufuin_hanare_onsen', query: '由布院 離れ 露天風呂 旅館 大分', label: '由布市ふるさと納税・由布岳の麓に佇む全室離れ・源泉かけ流しおこもり宿' },
      { key: 'shuzenji_hanare_onsen', query: '修善寺 離れ 温泉 旅館 静岡', label: '伊豆市ふるさと納税・竹林の小径近くに隠れる純和風数寄屋離れ宿' },
      { key: 'yugawara_hanare_onsen', query: '湯河原 離れ 温泉 旅館 神奈川', label: '湯河原町ふるさと納税・千歳川の渓流沿いに佇む大人のおこもり料亭離れ' }
    ]
  },
  {
    slug: 'furusato-tax-cherry-blossom-spring-hanami-onsen-stay',
    queries: [
      { key: 'kawazu_sakura_onsen', query: '河津 桜 温泉 旅館 静岡', label: '河津町ふるさと納税・早咲き河津桜並木を望むお花見露天風呂の宿' },
      { key: 'yoshino_sakura_onsen', query: '吉野山 桜 旅館 奈良 温泉', label: '吉野町ふるさと納税・下千本から奥千本まで一目千本桜を愛でる山岳名宿' },
      { key: 'hirosaki_sakura_onsen', query: '弘前 温泉 旅館 青森 ホテル', label: '弘前市ふるさと納税・弘前公園の桜の絨毯と名湯津軽の春ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-kominka-heritage-townhouse-auberge-stay',
    queries: [
      { key: 'sasayama_kominka_stay', query: '篠山 古民家 宿泊 兵庫', label: '丹波篠山市ふるさと納税・城下町の重伝建地区に泊まる分散型古民家ホテル' },
      { key: 'narai_kominka_stay', query: '奈良井宿 宿 旅館 木曽 長野', label: '塩尻市ふるさと納税・中山道木曽路の宿場町に佇む築200年の町家ステイ' },
      { key: 'takayama_kominka_stay', query: '飛騨高山 古民家 旅館 岐阜', label: '高山市・白川村ふるさと納税・飛騨匠の技が息づく古民家オーベルジュ' }
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

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all round 6 furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
