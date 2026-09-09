const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-dog-friendly-luxury-onsen-stay',
    queries: [
      { key: 'izu_dog_resort', query: 'ペットと泊まれる 伊豆高原 温泉 露天風呂', label: '伊東市ふるさと納税・愛犬専用客室露天とドッグラン完備の極上リゾート' },
      { key: 'nasu_dog_resort', query: '那須温泉 愛犬と泊まれる ホテル 栃木', label: '那須町ふるさと納税・高原の自然とプライベートドッグラン付き名宿' },
      { key: 'biwako_dog_resort', query: '愛犬 ペット 琵琶湖 ホテル 滋賀', label: '滋賀県ふるさと納税・琵琶湖畔を愛犬とお散歩＆極上ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-fujisan-view-luxury-open-air-bath-stay',
    queries: [
      { key: 'kawaguchiko_fuji_view', query: '河口湖 富士山 露天風呂 旅館 秀峰閣', label: '富士河口湖町ふるさと納税・正面に富士を望む絶景露天風呂旅館' },
      { key: 'yamanakako_fuji_view', query: '山中湖 富士山 温泉 ホテル 鐘山苑', label: '富士吉田市ふるさと納税・富士山を一望する天空露天風呂と名庭園' },
      { key: 'izu_fuji_view', query: '西伊豆 土肥温泉 富士山 旅館', label: '伊豆市ふるさと納税・駿河湾越しに夕陽と富士山を望む絶景海辺宿' }
    ]
  },
  {
    slug: 'furusato-tax-onsen-steam-natural-hotspring-healing-stay',
    queries: [
      { key: 'beppu_kannawa_steam', query: '別府 鉄輪温泉 旅館 大分', label: '別府市ふるさと納税・立ち上る湯煙と名物地獄蒸しを堪能する湯治宿' },
      { key: 'ibusuki_sand_bath', query: '鹿児島 砂むし温泉 指宿白水館', label: '指宿市ふるさと納税・波打ち際の天然砂むし温泉と元禄風呂の名門宿' },
      { key: 'unzen_jigoku_steam', query: '雲仙温泉 旅館 長崎 九州', label: '雲仙市ふるさと納税・雲仙地獄の地熱と乳白色の名湯に癒やされる山峡宿' }
    ]
  },
  {
    slug: 'furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay',
    queries: [
      { key: 'fuefuki_fruit_wine', query: '石和温泉 フルーツ王国 山梨 旅館', label: '笛吹市ふるさと納税・桃や葡萄畑に囲まれたワイナリーと美肌温泉' },
      { key: 'izu_strawberry_onsen', query: '伊豆長岡温泉 旅館 静岡 いちご', label: '伊豆の国市ふるさと納税・完熟いちご狩りと歴史ある古奈の名湯' },
      { key: 'shinshu_apple_orchard', query: '飯坂温泉 果樹園 福島 旅館', label: '福島市ふるさと納税・フルーツラインの旬果実と摺上川の渓流名湯' }
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
        const hotels = await searchRakutenHotels(q.query, 4);
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
  console.log('\nSuccessfully saved Round 67 hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
