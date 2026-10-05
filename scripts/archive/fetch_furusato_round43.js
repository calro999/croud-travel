const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-sand-dunes-stay',
    queries: [
      { query: '鳥取砂丘 ホテル 砂丘センター', fallback: '鳥取温泉 観水庭こぜにや', key: 'dune_tottori', label: '鳥取県鳥取市ふるさと納税・風と光が織りなす風紋と日本海の夕日「鳥取砂丘」源泉かけ流し鳥取温泉観水庭こぜにや' },
      { query: '浜松 中田島砂丘 ホテル', fallback: 'オークラアクトシティホテル浜松', key: 'dune_nakatajima', label: '静岡県浜松市ふるさと納税・遠州灘の強い海風が描く風紋美「中田島砂丘」地上45階オークラアクトシティホテル浜松' },
      { query: '南さつま 吹上浜 温泉 ホテル', fallback: '指宿温泉 白水館', key: 'dune_fukiagehama', label: '鹿児島県南さつま市・日置市ふるさと納税・白砂青松が47km続く日本最長の砂丘「吹上浜」薩摩半島の湯と美食ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-unusual-bridges-stay',
    queries: [
      { query: '岩国 錦帯橋 ホテル 旅館', fallback: '岩国国際観光ホテル', key: 'bridge_kintaikyo', label: '山口県岩国市ふるさと納税・五連のアーチが清流錦川に架かる木造美「錦帯橋」橋を一望する岩国国際観光ホテル' },
      { query: '大月 猿橋 旅館 ホテル', fallback: '大月 シティホテル', key: 'bridge_saruhashi', label: '山梨県大月市ふるさと納税・桂川の深い渓谷に橋脚を使わず架かる刎橋構造「甲斐の猿橋」渓谷の自然と富士山ステイ' },
      { query: '日光 神橋 ホテル 日光金谷ホテル', fallback: '日光金谷ホテル', key: 'bridge_shinkyo', label: '栃木県日光市ふるさと納税・世界遺産二社一寺の玄関口を飾る朱塗りの名橋「日光神橋」伝統薫る日光金谷ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapid-rivers-stay',
    queries: [
      { query: '最上川 舟下り 草薙温泉', fallback: '草薙温泉', key: 'river_mogami', label: '山形県戸沢村・新庄市ふるさと納税・松尾芭蕉も句を詠んだ五月雨を集める大河「最上川舟下り」草薙温泉渓流ステイ' },
      { query: '富士川 静岡 富士 ホテル', fallback: 'ホテルグランド富士', key: 'river_fujikawa', label: '静岡県富士市・富士宮市ふるさと納税・富士山麓を駆け抜け駿河湾へ注ぐ日本屈指の急流「富士川」ホテルグランド富士' },
      { query: '人吉 温泉 球磨川 旅館', fallback: '人吉温泉 あゆの里', key: 'river_kumagawa', label: '熊本県人吉市ふるさと納税・球磨川下りと天然アユの宝庫「球磨川」名湯人吉温泉清流山水花あゆの里' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    queries: [
      { query: '弘前 弘前公園 さくら ホテル', fallback: '弘前パークホテル', key: 'sakura_hirosaki', label: '青森県弘前市ふるさと納税・2600本の桜と濠を埋め尽くす花筏のライトアップ「弘前公園夜桜」弘前パークホテル' },
      { query: '上越 高田城址公園 ホテル', fallback: 'アートホテル上越', key: 'sakura_takada', label: '新潟県上越市ふるさと納税・四千本の桜と三重櫓が水面に映る東洋一の夜桜「高田城址公園夜桜」アートホテル上越' },
      { query: '上野恩賜公園 上野 ホテル', fallback: '三井ガーデンホテル上野', key: 'sakura_ueno', label: '東京都台東区ふるさと納税・江戸時代からの桜の名所・ボンボリが灯る下町の華やぎ「上野恩賜公園夜桜」三井ガーデンホテル上野' }
    ]
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = {};
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  const collected = {};

  for (const group of configs) {
    console.log(`\n========================================`);
    console.log(`Processing Group: ${group.slug}`);
    console.log(`========================================`);

    for (const q of group.queries) {
      console.log(`Searching for: "${q.query}" (key: ${q.key})...`);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (e) {
        console.warn('Query error:', e.message);
      }
      await sleep(2500);

      if (!list || list.length === 0) {
        console.log(`  -> Trying fallback: "${q.fallback}"...`);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (e) {
          console.warn('Fallback error:', e.message);
        }
        await sleep(2500);
      }

      if (list && list.length > 0) {
        const hotel = list[0];
        console.log(`  -> FOUND: ${hotel.hotelName} (No: ${hotel.hotelNo}) | MinPrice: ¥${hotel.hotelMinCharge} | Review: ${hotel.reviewAverage}`);
        collected[q.key] = {
          ...hotel,
          featureKey: q.key,
          featureLabel: q.label
        };
        db[q.key] = collected[q.key];
        db[hotel.hotelNo] = collected[q.key];
      } else {
        console.warn(`  -> FAILED to find hotel for key: ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync('round43_hotels.json', JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\n=== Done! Saved ${Object.keys(collected).length} hotels to all_seasonal_rakuten_hotels.json and round43_hotels.json ===`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
