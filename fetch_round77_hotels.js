const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-japanese-garden-view-luxury-ryokan-stay',
    queries: [
      { key: 'shimane_garden', query: '安来 佳翠苑 皆美', label: '松江市ふるさと納税・足立美術館至近！名園と伝統数寄屋建築を誇る名門温泉旅館' },
      { key: 'saga_garden', query: '嬉野温泉 御船山楽園ホテル', label: '武雄市ふるさと納税・国登録記念物・御船山楽園五十万平米の庭園とチームラボ常設展示' },
      { key: 'ishikawa_garden', query: '山代温泉 ゆのくに天祥', label: '加賀市ふるさと納税・美しい日本庭園と三つの大浴場十八湯めぐりの名門温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-night-sky-cocktail-bar-lounge-hotel-stay',
    queries: [
      { key: 'yokohama_sky_bar', query: '横浜ロイヤルパークホテル', label: '横浜市ふるさと納税・地上70階スカイラウンジシリウスと横浜みなとみらい夜景ステイ' },
      { key: 'nagasaki_sky_bar', query: 'ガーデンテラス長崎ホテル＆リゾート', label: '長崎市ふるさと納税・世界新三大夜景を一望するクラブラウンジ＆天空バーリゾート' },
      { key: 'osaka_sky_bar', query: 'コンラッド大阪', label: '大阪市ふるさと納税・地上200m中之島の夜景パノラマとモダン天空ラウンジバー' }
    ]
  },
  {
    slug: 'furusato-tax-hanabi-fireworks-view-room-hotel-stay',
    queries: [
      { key: 'atami_hanabi_room', query: '熱海温泉 熱海後楽園ホテル', label: '熱海市ふるさと納税・熱海海上花火大会が目の前！全室オーシャンフロントの特等席' },
      { key: 'toya_hanabi_room', query: '洞爺サンパレス リゾート＆スパ', label: '有珠郡壮瞥町ふるさと納税・洞爺湖ロングラン花火を全室レイクビュー客室から鑑賞' },
      { key: 'suwa_hanabi_room', query: '上諏訪温泉 双泉の宿 朱白', label: '諏訪市ふるさと納税・諏訪湖祭湖上花火大会を望む湖畔の特等席と二つの源泉' }
    ]
  },
  {
    slug: 'furusato-tax-footbath-cafe-ashiyu-terrace-onsen-stay',
    queries: [
      { key: 'izu_ashiyu', query: '東府や Resort＆Spa-Izu', label: '伊豆市ふるさと納税・吉奈温泉の清流沿い「足湯カフェ」とベーカリーテラスの大人のリゾート' },
      { key: 'kurokawa_ashiyu', query: '黒川温泉 やまびこ旅館', label: '南小国町ふるさと納税・田の原川沿いの名物仙人風呂と足湯テラスで楽しむ温泉散策' },
      { key: 'nagano_ashiyu', query: '上高地温泉ホテル', label: '松本市ふるさと納税・北アルプス梓川の絶景を望む樽風呂足湯と自家源泉かけ流し' }
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
  console.log('\nSuccessfully saved Round 77 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
