const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
    queries: [
      { key: 'kinosaki_nishimuraya', query: '西村屋本館', label: '豊岡市ふるさと納税・創業百六十年の歴史を誇る山陰屈指の純日本旅館！平田雅哉棟梁設計の数寄屋建築と松葉ガニ会席' },
      { key: 'kinosaki_mikiya', query: '城崎温泉 三木屋', label: '豊岡市ふるさと納税・志賀直哉「城の崎にて」ゆかりの登録有形文化財宿！三百坪の日本庭園と城崎名物外湯めぐり' },
      { key: 'kinosaki_kawaguchiya', query: '川口屋城崎リバーサイドホテル', label: '豊岡市ふるさと納税・大谿川沿いに佇む眺望自慢の名旅館！貸切露天風呂と但馬牛＆季節の旬味' }
    ]
  },
  {
    slug: 'furusato-tax-dogo-onsen-historic-bath-stay',
    queries: [
      { key: 'dogo_funaya', query: '道後温泉 ふなや', label: '松山市ふるさと納税・創業三百九十余年の老舗旅館！夏目漱石や皇室も逗留した日本庭園「詠風庭」と名湯道後の湯' },
      { key: 'dogo_yamatoya', query: '道後温泉 大和屋本店', label: '松山市ふるさと納税・数寄屋造りの純和風旅館！能舞台を擁する格調高い湯宿で愉しむ伊予牛と瀬戸内旬魚会席' },
      { key: 'dogo_chaharu', query: '道後温泉 茶玻瑠', label: '松山市ふるさと納税・道後温泉本館すぐ！屋上露天風呂から松山市街を一望できるモダン和洋リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-unzen-onsen-jigoku-sulfur-stay',
    queries: [
      { key: 'unzen_miyazaki', query: '雲仙宮崎旅館', label: '雲仙市ふるさと納税・雲仙地獄谷を一望する名門温泉旅館！白濁の濃厚硫黄泉と長崎の山海の恵みを味わう美食ステイ' },
      { key: 'unzen_kanko', query: '雲仙観光ホテル', label: '雲仙市ふるさと納税・昭和十年創業のクラシックリゾートホテル！国登録有形文化財のスイス風山岳建築と伝統フレンチ' },
      { key: 'unzen_fukudaya', query: '雲仙温泉 民芸モダンの宿 雲仙福田屋', label: '雲仙市ふるさと納税・民芸の温もりに包まれる人気湯宿！源泉掛け流しの多彩な露天風呂と島原郷土料理' }
    ]
  },
  {
    slug: 'furusato-tax-ito-onsen-seafood-historic-stay',
    queries: [
      { key: 'ito_aoyama_yamato', query: '伊東温泉 青山やまと', label: '伊東市ふるさと納税・丘の上に佇む和の趣あふれる名旅館！相模湾を一望する絶景露天風呂と極上金目鯛会席' },
      { key: 'ito_ravie_kawayoshi', query: 'ホテルラヴィエ川良', label: '伊東市ふるさと納税・毎分660リットル誇る8本の自家源泉！豪華海鮮バイキングと湯量豊富な名湯満喫' },
      { key: 'ito_komeya', query: '淘心庵 米屋', label: '伊東市ふるさと納税・竹林に佇む数寄屋造りの料亭旅館！全室源泉かけ流し風呂付きの贅沢な大人の隠れ家' }
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
  console.log('\nSuccessfully saved Round 91 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
