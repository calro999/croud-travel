const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-bihada-onsen-stay',
    queries: [
      { query: '嬉野温泉 和多屋別荘', fallback: '嬉野温泉 大正屋', key: 'bihada_ureshino', label: '佐賀県嬉野市ふるさと納税・日本三大美肌の湯の筆頭「嬉野温泉」重曹泉のぬめりと和多屋別荘' },
      { query: '奥出雲 斐乃上温泉', fallback: '出雲 湯の川温泉', key: 'bihada_hinokami', label: '島根県奥出雲町ふるさと納税・船通山麓の秘境に湧くpH9.9のアルカリ単純温泉「斐乃上温泉」奥出雲の山里ステイ' },
      { query: '喜連川温泉 ホテル', fallback: 'さくら市 喜連川 温泉', key: 'bihada_kitsuregawa', label: '栃木県さくら市ふるさと納税・硫黄・塩分・重曹が織りなす良質な泉質「喜連川温泉」美肌の湯と水車の里ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-secret-hotsprings-stay',
    queries: [
      { query: '八甲田 谷地温泉', fallback: '八甲田温泉 ぬくだまりの里', key: 'secret_yachi', label: '青森県十和田市ふるさと納税・八甲田の原生林に佇む開湯400年の霊泉自噴「谷地温泉」秘湯の一軒宿ステイ' },
      { query: '祖谷温泉 秘境 旅館', fallback: '峡谷の湯宿 大歩危峡まんなか', key: 'secret_iya', label: '徳島県三好市ふるさと納税・日本三大秘境の断崖絶壁に湧くケーブルカーで行く露天風呂「祖谷温泉」かずら橋ステイ' },
      { query: '乳頭温泉 妙乃湯', fallback: '田沢湖高原温泉', key: 'secret_nyuto', label: '秋田県仙北市ふるさと納税・白濁した秘湯とブナ原生林に抱かれた日本の原風景「乳頭温泉郷」湯めぐりステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gorges-scenery-stay',
    queries: [
      { query: '清津峡 越後湯沢 温泉', fallback: '越後湯沢温泉 湯沢グランドホテル', key: 'gorge_kiyotsu', label: '新潟県十日町市・湯沢町ふるさと納税・巨大な柱状節理とアートが融合する峡谷トンネル「清津峡」越後湯沢温泉ステイ' },
      { query: '宇奈月温泉 延対寺荘', fallback: '黒部 宇奈月温泉 ホテル', key: 'gorge_kurobe', label: '富山県黒部市ふるさと納税・V字峡谷をトロッコ電車が走る大自然の絶景「黒部峡谷」黒部川一望の宇奈月温泉延対寺荘' },
      { query: '奥香肌峡温泉 ホテルスメール', fallback: '松阪 シティホテル', key: 'gorge_osugidani', label: '三重県大台町・松阪市ふるさと納税・近畿の秘境にして手つかずの原生渓谷美「大杉谷」宮川の清流と松阪牛ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-waterfalls-resort-stay',
    queries: [
      { query: '日光 中禅寺金谷ホテル', fallback: '中禅寺温泉 日光', key: 'waterfall_kegon', label: '栃木県日光市ふるさと納税・落差97mの爆音と水煙が轟く日光の名瀑「華厳の滝」中禅寺湖畔と中禅寺金谷ホテル' },
      { query: '那智勝浦 ホテル浦島', fallback: '南紀勝浦温泉 ホテル中の島', key: 'waterfall_nachi', label: '和歌山県那智勝浦町ふるさと納税・落差133m日本一の直瀑にして熊野信仰の御神体「那智の滝」大洞窟風呂ホテル浦島' },
      { query: '袋田温泉 思い出浪漫館', fallback: '袋田の滝 温泉 旅館', key: 'waterfall_fukuroda', label: '茨城県大子町ふるさと納税・四段の岩肌を白糸のように流れる四度の滝「袋田の滝」奥久慈渓流と袋田温泉思い出浪漫館' }
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
  fs.writeFileSync('round42_hotels.json', JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\n=== Done! Saved ${Object.keys(collected).length} hotels to all_seasonal_rakuten_hotels.json and round42_hotels.json ===`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
