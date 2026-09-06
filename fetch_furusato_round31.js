const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-beautiful-forests-wood-stay',
    queries: [
      { query: '下北 青森 ヒバ 温泉 旅館', fallback: 'ホテルニューグリーン下北', key: 'forest_hiba', label: '青森県むつ市・風間浦村ふるさと納税・日本屈指の耐朽性と清々しい芳香「青森ヒバの美林」ヒバ造り温泉風呂と下北名物下風呂温泉ステイ' },
      { query: '大館 温泉 秋田 スギ 旅館', fallback: '大館ぽかぽか温泉ホテル', key: 'forest_sugi', label: '秋田県大館市・能代市ふるさと納税・樹齢二百年の巨木が聳える「秋田スギの美林」伝統工芸大館曲げわっぱと大館名湯温泉ホテル' },
      { query: '木曽 旅館 長野 ヒノキ 妻籠宿', fallback: '木曽路の宿　いわや', key: 'forest_hinoki', label: '長野県木曽町・南木曽町ふるさと納税・伊勢神宮の御神木を育む「木曽ヒノキの美林」中山道木曽路妻籠宿と総ヒノキ造りの名旅館いわや' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-curious-bridges-canyon-stay',
    queries: [
      { query: '岩国 錦帯橋 ホテル 山口 旅館', fallback: '岩国国際観光ホテル', key: 'bridge_kintaikyo', label: '山口県岩国市ふるさと納税・清流錦川に架かる五連の木造アーチ名橋「錦帯橋」岩国城パノラマと岩国寿司・岩国国際観光ホテル' },
      { query: '大月 猿橋 ホテル 山梨 桂川', fallback: '大月ホテル', key: 'bridge_saruhashi', label: '山梨県大月市ふるさと納税・橋脚を使わない奇跡の刎橋構造「甲斐の猿橋」桂川渓谷美と富士山麓の美味名門ステイ' },
      { query: '祖谷 かずら橋 ホテル 徳島 温泉', fallback: '和の宿　ホテル祖谷温泉', key: 'bridge_kazurabashi', label: '徳島県三好市祖谷渓ふるさと納税・足元がすくむスリル満点の吊り橋「祖谷のかずら橋」ケーブルカーで行く谷底露天風呂・和の宿ホテル祖谷温泉' }
    ]
  },
  {
    slug: 'furusato-tax-new-three-major-night-views-sky-stay',
    queries: [
      { query: '北九州 皿倉山 ホテル 夜景 小倉', fallback: 'プレミアホテル門司港', key: 'night_sarakurayama', label: '福岡県北九州市八幡東区ふるさと納税・視野180度の大パノラマ新日本三大夜景「皿倉山（100億ドルの夜景）」と関門海峡プレミアホテル門司港' },
      { query: '山梨 フルーツ公園 ホテル 甲府 夜景', fallback: 'フルーツパーク富士屋ホテル', key: 'night_fruitspark', label: '山梨県山梨市ふるさと納税・甲府盆地を埋め尽くす星屑の輝き新日本三大夜景「笛吹川フルーツ公園」丘の上のフルーツパーク富士屋ホテル' },
      { query: '奈良 若草山 ホテル 旅館 夜景', fallback: '奈良　万葉若草の宿　三笠', key: 'night_wakakusayama', label: '奈良県奈良市ふるさと納税・古都の歴史を照らす幻想的な灯火新日本三大夜景「若草山山頂」大和盆地パノラマと万葉若草の宿三笠' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fire-festivals-passion-stay',
    queries: [
      { query: '那智勝浦 熊野 ホテル 那智の火祭 温泉', fallback: '勝浦温泉　ホテル中の島', key: 'fire_nachi', label: '和歌山県那智勝浦町ふるさと納税・世界遺産熊野那智大社の大松明「那智の火祭（扇祭り）」那智の滝と紀州勝浦マグロ・ホテル中の島' },
      { query: '野沢温泉 旅館 長野 火祭り', fallback: '野沢温泉　河一屋旅館', key: 'fire_nozawa', label: '長野県野沢温泉村ふるさと納税・火の粉舞い散る天下の奇祭国指定重要無形民俗文化財「野沢温泉の道祖神祭り（火祭り）」外湯めぐりと名門河一屋旅館' },
      { query: '鞍馬 貴船 旅館 京都 火祭', fallback: '貴船温泉　貴船ふじや', key: 'fire_kurama', label: '京都府京都市左京区ふるさと納税・燃え盛る大松明が街道を埋め尽くす奇祭「鞍馬の火祭」由岐神社と貴船川床・貴船ふじや' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 31 hotels using openapi helper...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(1500);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(1500);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 31 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
