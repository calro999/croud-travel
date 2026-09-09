const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-art-museum-architecture-luxury-hotel-stay',
    queries: [
      { key: 'naoshima_art', query: 'ベネッセハウス', label: '直島町ふるさと納税・安藤忠雄建築と現代アートが一体化する美術館ホテル' },
      { key: 'hakone_art', query: '箱根・強羅 佳ら久', label: '箱根町ふるさと納税・彫刻の森やポーラ美術館至近！全室温泉露天風呂付きモダンアート空間' },
      { key: 'towada_art', query: '星野リゾート 青森屋', label: '三沢市ふるさと納税・十和田市現代美術館拠点！岡本太郎作品と青森ねぶた文化体感宿' }
    ]
  },
  {
    slug: 'furusato-tax-book-library-hotel-retreat-stay',
    queries: [
      { key: 'hakone_book', query: '箱根本箱', label: '箱根町ふるさと納税・本に囲まれて暮らすように泊まる！全室露天風呂付きブックホテル' },
      { key: 'echigo_book', query: '里山十帖', label: '南魚沼市ふるさと納税・千冊の本と絶景露天風呂！築百五十年の古民家デザインリトリート' },
      { key: 'shibu_book', query: '松本本箱', label: '松本市ふるさと納税・浅間温泉の老舗旅館が再生した巨大書架と本に沈む温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-spill-over-kaisendon-seafood-bowl-stay',
    queries: [
      { key: 'hakodate_kaisendon', query: 'ラビスタ函館ベイ', label: '函館市ふるさと納税・朝食いくら盛り放題の聖地！金森赤レンガ倉庫前の名門ホテル' },
      { key: 'kanazawa_kaisendon', query: '金沢 白鳥路 ホテル山楽', label: '金沢市ふるさと納税・近江町市場海鮮丼巡り拠点！大正ロマンの天然温泉と加賀朝食' },
      { key: 'izu_kaisendon', query: '伊東温泉 ホテルサンハトヤ', label: '伊東市ふるさと納税・海底温泉魚風呂と金目鯛・海鮮盛りバイキングリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-natural-mud-bath-mineral-detox-onsen-stay',
    queries: [
      { key: 'beppu_mud', query: '別府温泉 豊山荘', label: '別府市ふるさと納税・鉄輪温泉名物天然泥湯・美肌クレイ温泉と地獄蒸し料理' },
      { key: 'kirishima_mud', query: '霧島温泉 さくらさくら温泉', label: '霧島市ふるさと納税・天然泥パック温泉の元祖！美肌の泥を全身に塗る名湯リゾート' },
      { key: 'hachimantai_mud', query: '後生掛温泉', label: '八幡平市ふるさと納税・十和田八幡平国立公園名物泥風呂（火山泥湿湯）と名湯湯治宿' }
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
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 76 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
