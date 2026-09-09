const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-torafugu-kaiseki-luxury-gourmet-stay',
    queries: [
      { key: 'shimonoseki_fugu', query: '下関グランドホテル', label: '下関市ふるさと納税・関門海峡の絶景と本場下関の天然とらふぐフルコース' },
      { key: 'himakajima_fugu', query: '日間賀島 漁師民宿やまに 愛知', label: '南知多町ふるさと納税・多幸と福の島で味わう絶品日間賀島とらふぐ料理' },
      { key: 'wakasa_fugu', query: '若狭小川 潮路の宿 とね旅館 福井', label: '小浜市ふるさと納税・若狭湾の寒風が育む極上若狭ふぐと海辺の温もり温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-unagi-eel-gourmet-stay',
    queries: [
      { key: 'hamanako_unagi', query: 'ホテル鞠水亭 浜名湖 舘山寺温泉', label: '浜松市ふるさと納税・浜名湖畔に佇み名物うなぎ会席と展望露天風呂を誇る名宿' },
      { key: 'mishima_unagi', query: '天然温泉 富嶽の湯 ドーミーイン三島', label: '三島市ふるさと納税・富士山の雪解け水が育む三島うなぎの名店巡りと最上階天然温泉' },
      { key: 'yanagawa_unagi', query: '柳川温泉ホテル 輝泉荘 福岡', label: '柳川市ふるさと納税・水郷柳川の川下りと名物うなぎのせいろ蒸しを味わう名湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-snow-view-open-air-bath-winter-stay',
    queries: [
      { key: 'manza_snow_onsen', query: '万座温泉 万座プリンスホテル', label: '嬬恋村ふるさと納税・標高1800mの白銀世界と乳白色の絶景雪見露天風呂' },
      { key: 'yuzawa_snow_onsen', query: '越後湯沢温泉 湯沢グランドホテル', label: '湯沢町ふるさと納税・川端康成「雪国」の舞台で幻想的な雪景色と庭園露天風呂' },
      { key: 'jozankei_snow_onsen', query: '定山渓温泉 章月グランドホテル', label: '札幌市ふるさと納税・定山渓渓谷の銀世界と豊平川のせせらぎに癒やされる雪見宿' }
    ]
  },
  {
    slug: 'furusato-tax-station-walk-car-free-onsen-stay',
    queries: [
      { key: 'atami_station_walk', query: '熱海温泉 旅館 立花 静岡', label: '熱海市ふるさと納税・新幹線熱海駅から徒歩圏内・海と街並みを望む老舗名湯宿' },
      { key: 'yuzawa_station_walk', query: '越後湯沢温泉 音羽屋旅館 新潟', label: '湯沢町ふるさと納税・越後湯沢駅徒歩数分！新幹線直結で車いらずの純和風温泉旅館' },
      { key: 'ureshino_bus_walk', query: '嬉野温泉 割烹旅館 鯉登苑 佐賀', label: '嬉野市ふるさと納税・嬉野温泉バスセンター至近！日本三大美肌の湯と名物温泉湯どうふ' }
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
        await sleep(1500);
        const hotels = await searchRakutenHotels(q.query, 3);
        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = hotels[0];
          console.log(`  -> Selected: ${hotels[0].hotelName} (${hotels[0].hotelNo})`);
        } else {
          console.warn(`  -> No hotel found for query: ${q.query}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query "${q.query}":`, err.message);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 70 hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
