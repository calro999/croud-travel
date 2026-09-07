const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-valleys-riverside-stay',
    queries: [
      { query: '青森 十和田 奥入瀬渓流 星野リゾート', fallback: '星野リゾート　奥入瀬渓流ホテル', key: 'stream_oirase', label: '青森県十和田市ふるさと納税・原生林と無数の滝が織りなす清冽な渓流美「奥入瀬渓流」星野リゾート奥入瀬渓流ホテル' },
      { query: '広島 安芸太田 三段峡 かわち', fallback: '三段峡温泉　本館　かわち', key: 'stream_sandankyo', label: '広島県安芸太田町ふるさと納税・国の特別名勝・断崖と清流のコントラスト「西中国山地・三段峡」三段峡温泉本館かわち' },
      { query: '東京 青梅 御岳渓谷 おくたま路', fallback: '東京・青梅　おくたま路', key: 'stream_mitake', label: '東京都青梅市ふるさと納税・多摩川の清流と巨岩が織りなす名勝「御岳渓谷」清流の宿おくたま路' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-scenic-wonders-stay',
    queries: [
      { query: '群馬 富岡 妙義山 温泉 妙義グリーンホテル', fallback: '妙義グリーンホテル＆テラス', key: 'wonder_myogi', label: '群馬県富岡市ふるさと納税・天を衝く奇岩怪石のパノラマと自家源泉「上毛三山・妙義山」妙義グリーンホテル＆テラス' },
      { query: '大分 中津 耶馬渓 温泉 若山', fallback: '耶馬渓温泉　割烹旅館　若山', key: 'wonder_yabakei', label: '大分県中津市ふるさと納税・日本新三景・奇岩と紅葉の渓谷美「耶馬渓」割烹旅館若山' },
      { query: '香川 小豆島 寒霞渓 小豆島国際ホテル', fallback: '小豆島温泉　瀬戸の微風　ホテル海風長浜', key: 'wonder_kankakei', label: '香川県土庄町ふるさと納税・日本三大渓谷美・寒霞渓とエンジェルロード「小豆島」小豆島国際ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-mountains-stay',
    queries: [
      { query: '山梨 富士河口湖 富士山 眺望 秀峰閣 湖月', fallback: '富士河口湖温泉　秀峰閣　湖月', key: 'mountain_fuji', label: '山梨県富士河口湖町ふるさと納税・日本第一の霊峰を湖越しに望む全室富士ビュー「富士山」秀峰閣湖月' },
      { query: '富山 立山 弥陀ヶ原 ホテル', fallback: '立山高原ホテル', key: 'mountain_tateyama', label: '富山県立山町ふるさと納税・神々が宿る北アルプスの大自然と雲海「立山連峰」立山高原ホテル' },
      { query: '石川 白山 一里野高原ホテル ろあん', fallback: '一里野高原ホテル　ろあん', key: 'mountain_hakusan', label: '石川県白山市ふるさと納税・白山信仰の聖地と囲炉裏炭火会席・源泉かけ流し「霊峰白山」一里野高原ホテルろあん' }
    ]
  },
  {
    slug: 'furusato-tax-top100-hidden-paradise-stay',
    queries: [
      { query: '徳島 三好 祖谷温泉 露天風呂 ホテル祖谷温泉', fallback: '和の宿　ホテル祖谷温泉', key: 'hidden_iya', label: '徳島県三好市ふるさと納税・日本三大秘境・ケーブルカーで下る源泉かけ流し谷底露天「祖谷渓谷」和の宿ホテル祖谷温泉' },
      { query: '宮崎 高千穂 旅館 神仙', fallback: '旅館　神仙', key: 'hidden_takachiho', label: '宮崎県高千穂町ふるさと納税・神話が息づく天孫降臨の秘境・数寄屋造りの極上宿「高千穂峡」旅館神仙' },
      { query: '長野 栄村 秋山郷 温泉 川津屋', fallback: '苗場山麓　逆巻温泉　川津屋', key: 'hidden_akiyamago', label: '長野県栄村ふるさと納税・越後妻有の最奥・平家落人伝説が眠る天空の秘境温泉「信州秋山郷」逆巻温泉川津屋' }
    ]
  }
];

async function run() {
  const allSeasonalPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let allSeasonalHotels = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonalHotels = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf-8'));
    } catch (e) {
      console.error('Error reading all_seasonal_rakuten_hotels.json:', e);
    }
  }

  const round52Hotels = {};

  for (const cfg of configs) {
    console.log(`\n=== Fetching for category: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching Rakuten API: "${q.query}" (fallback: "${q.fallback}")...`);
      let hotels = await searchRakutenHotels(q.query, 1);
      await sleep(3500); // 厳守: 楽天APIレート制限対策

      if (!hotels || hotels.length === 0) {
        console.log(`No results for "${q.query}". Trying fallback: "${q.fallback}"...`);
        hotels = await searchRakutenHotels(q.fallback, 1);
        await sleep(3500);
      }

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`  -> SUCCESS: Found "${hotel.hotelName}" (${hotel.hotelNo})`);
        const itemData = {
          hotelNo: hotel.hotelNo,
          hotelName: hotel.hotelName,
          hotelKanaName: hotel.hotelKanaName || '',
          hotelInformationUrl: hotel.hotelInformationUrl,
          planListUrl: hotel.planListUrl,
          dpPlanListUrl: hotel.dpPlanListUrl,
          reviewUrl: hotel.reviewUrl,
          hotelImageUrl: hotel.hotelImageUrl || '',
          hotelThumbnailUrl: hotel.hotelThumbnailUrl || '',
          roomImageUrl: hotel.roomImageUrl || '',
          hotelMinCharge: hotel.hotelMinCharge || 0,
          latitude: hotel.latitude,
          longitude: hotel.longitude,
          postalCode: hotel.postalCode,
          address1: hotel.address1,
          address2: hotel.address2,
          telephoneNo: hotel.telephoneNo,
          access: hotel.access,
          parkingInformation: hotel.parkingInformation,
          nearestStation: hotel.nearestStation,
          hotelHeaderImageUrl: hotel.hotelHeaderImageUrl || '',
          userReview: hotel.userReview || '',
          reviewCount: hotel.reviewCount || 0,
          reviewAverage: hotel.reviewAverage || 0,
          label: q.label,
          query: q.query
        };

        round52Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round52_hotels.json'), JSON.stringify(round52Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 52 hotels to round52_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
