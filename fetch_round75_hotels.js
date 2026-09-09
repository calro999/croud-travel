const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-sotoyu-meguri-historic-onsen-town-stay',
    queries: [
      { key: 'kinosaki_sotoyu', query: '城崎温泉 登録有形文化財の宿 三木屋', label: '豊岡市ふるさと納税・七田外湯めぐりと志賀直哉ゆかりの国登録有形文化財老舗宿' },
      { key: 'nozawa_sotoyu', query: '野沢温泉 村のホテル 住吉屋', label: '野沢温泉村ふるさと納税・十三箇所の外湯めぐりと麻釜熱湯自家源泉の老舗名宿' },
      { key: 'shibu_sotoyu', query: '渋温泉 歴史の宿 金具体', label: '山ノ内町ふるさと納税・九湯めぐりの結願と千と千尋の神隠しを彷彿とさせる文化財宿' }
    ]
  },
  {
    slug: 'furusato-tax-aquarium-family-ocean-resort-stay',
    queries: [
      { key: 'kamogawa_aquarium', query: '鴨川シーワールドホテル', label: '鴨川市ふるさと納税・シャチパフォーマンス直結！全室オーシャンビュー公式ホテル' },
      { key: 'toba_aquarium', query: '鳥羽国際ホテル 潮路亭', label: '鳥羽市ふるさと納税・鳥羽水族館至近！ミキモト真珠風呂と伊勢志摩の美食リゾート' },
      { key: 'okinawa_aquarium', query: 'ホテル オリオン モトブ リゾート＆スパ', label: '本部町ふるさと納税・美ら海水族館へ徒歩すぐ！エメラルドビーチ前の最高峰リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-resort-infinity-pool-luxury-hotel-stay',
    queries: [
      { key: 'atami_pool', query: '熱海 後楽園ホテル', label: '熱海市ふるさと納税・相模灘を一望するインフィニティ温泉プール「オーシャンスパ Fuua」' },
      { key: 'okinawa_pool', query: 'ハレクラニ沖縄', label: '恩納村ふるさと納税・天国の名を持つハレクラニ！象徴的なオーキッドプールと極上ステイ' },
      { key: 'beppu_pool', query: '杉乃井ホテル', label: '別府市ふるさと納税・大展望露天風呂「棚湯」＆水着で楽しむ温泉プール「アクアガーデン」' }
    ]
  },
  {
    slug: 'furusato-tax-shinshu-soba-kaiseki-luxury-ryokan-stay',
    queries: [
      { key: 'togakushi_soba', query: '戸隠神社 宿坊 極意', label: '長野市ふるさと納税・日本三大蕎麦・戸隠そば発祥の地で手打ち十割蕎麦と宿坊の歴史' },
      { key: 'azumino_soba', query: '安曇野 穂高温泉郷 にし屋別荘', label: '安曇野市ふるさと納税・名水百選わさび田と安曇野手打ち蕎麦会席・源泉掛け流し離れ宿' },
      { key: 'shibu_soba', query: '松本 浅間温泉 別亭 一花', label: '松本市ふるさと納税・国宝松本城と信州石臼挽き手打ち蕎麦会席・全室畳敷き名宿' }
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
  console.log('\nSuccessfully saved Round 75 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
