const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay',
    queries: [
      { key: 'arima_hyoe', query: '有馬温泉 兵衛向陽閣', label: '神戸市ふるさと納税・創業七百年！三つの大浴場で金泉を満喫＆老舗の伝統会席とバイキング' },
      { key: 'arima_gosho', query: '有馬温泉 陶泉 御所坊', label: '神戸市ふるさと納税・創業八百年・谷崎潤一郎ら文豪ゆかり！金泉掛け流し半混浴と神戸牛料理' },
      { key: 'arima_gekkoen', query: '有馬温泉 月光園 鴻朧館', label: '神戸市ふるさと納税・落葉山と滝川を望む絶景！金泉露天風呂と最高級神戸牛会席' }
    ]
  },
  {
    slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay',
    queries: [
      { key: 'karuizawa_marriott', query: '軽井沢マリオットホテル', label: '軽井沢町ふるさと納税・静寂の森に佇む世界的ラグジュアリー！温泉露天風呂付き客室と信州グリル' },
      { key: 'karuizawa_prince', query: '軽井沢プリンスホテル イースト', label: '軽井沢町ふるさと納税・アウトレット＆スキー場直結！天然温泉スパと信州牛ディナー' },
      { key: 'karuizawa_kyukaruizawa_hotel', query: '旧軽井沢 ホテル音羽ノ森', label: '軽井沢町ふるさと納税・旧軽井沢銀座へ徒歩圏！大人のクラシックリゾートと本格フレンチ' }
    ]
  },
  {
    slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay',
    queries: [
      { key: 'kinugawa_asaya', query: '日光きぬ川スパホテル三日月', label: '日光市ふるさと納税・鬼怒川渓谷を見下ろす空中湯園！多彩な温泉プールと豪華バイキング' },
      { key: 'kinugawa_asaya_honten', query: '鬼怒川温泉 あさや', label: '日光市ふるさと納税・創業百三十年の象徴！吹き抜けロビー＆絶景空中庭園露天風呂と100種バイキング' },
      { key: 'kinugawa_kanaya', query: '鬼怒川金谷ホテル', label: '日光市ふるさと納税・鬼怒川渓谷の最高峰リゾート！ジョン金谷の美学息づくおもてなしとショコラ' }
    ]
  },
  {
    slug: 'furusato-tax-shirahama-onsen-ocean-view-luxury-stay',
    queries: [
      { key: 'shirahama_musashi', query: '白浜温泉 紀州・白浜温泉 むさし', label: '白浜町ふるさと納税・白良浜徒歩1分！二つの異なる源泉と本格和食会席・バイキング' },
      { key: 'shirahama_seamore', query: 'SHIRAHAMA KEY TERRACE HOTEL SEAMORE', label: '白浜町ふるさと納税・海に溶け込むインフィニティ足湯！太平洋一望の絶景テラスと温泉サウナ' },
      { key: 'shirahama_hamachidorinoyu', query: '白浜温泉 浜千鳥の湯 海舟', label: '白浜町ふるさと納税・岬の突端に佇む共立リゾート！海混浴露天風呂とクエ・熊野牛会席' }
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
  console.log('\nSuccessfully saved Round 86 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
