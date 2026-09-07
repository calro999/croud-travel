const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-soba-noodles-stay',
    queries: [
      { query: '長野 戸隠 善光寺 そば 宿 温泉', fallback: '戸隠小鳥の森', key: 'soba_togakushi', label: '長野県長野市ふるさと納税・一本棒丸延ばしとぼっち盛りの極致「戸隠そば」善光寺・戸隠宿坊温泉ステイ' },
      { query: '島根 出雲 割子そば 玉造温泉 旅館', fallback: '玉造温泉　佳翠苑　皆美', key: 'soba_izumo', label: '島根県出雲市・松江市ふるさと納税・三段の朱塗り器に香り高い玄そば「出雲割子そば」美肌の湯玉造温泉皆美' },
      { query: '岩手 盛岡 わんこそば ホテル', fallback: 'ホテルメトロポリタン盛岡', key: 'soba_wanko', label: '岩手県盛岡市ふるさと納税・おもてなしの心と小気味よい掛け声「盛岡わんこそば」盛岡の奥座敷つなぎ温泉ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-historic-canals-stay',
    queries: [
      { query: '小樽 運河 石造倉庫 ホテル', fallback: '運河の宿　おたるふる川', key: 'canal_otaru', label: '北海道小樽市ふるさと納税・ガス燈揺れる石造り倉庫群のロマン「小樽運河」運河の宿おたるふる川' },
      { query: '倉敷 美観地区 倉敷川 旅館', fallback: '倉敷アイビースクエア', key: 'canal_kurashiki', label: '岡山県倉敷市ふるさと納税・白壁の蔵屋敷と柳並木が映える舟流し「倉敷美観地区・倉敷川」名門料理旅館ステイ' },
      { query: '近江八幡 八幡堀 水郷 旅館', fallback: '休暇村　近江八幡', key: 'canal_omihachiman', label: '滋賀県近江八幡市ふるさと納税・時代劇ロケ地と近江商人の息吹残る水郷「八幡堀」近江牛と琵琶湖一望ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ramen-capitals-stay',
    queries: [
      { query: '福島 喜多方 ラーメン 温泉 会津 旅館', fallback: '会津東山温泉　向瀧', key: 'ramen_kitakata', label: '福島県喜多方市・会津若松市ふるさと納税・朝ラー文化と熟成多加水平打ち縮れ麺「喜多方ラーメン」会津東山温泉名宿' },
      { query: '札幌 すすきの 味噌ラーメン ホテル プレミアホテル', fallback: 'プレミアホテル　中島公園　札幌', key: 'ramen_sapporo', label: '北海道札幌市ふるさと納税・ラード浮かぶ濃厚スープと黄色い縮れ卵麺「札幌味噌ラーメン」すすきの至近美食ステイ' },
      { query: '福岡 博多 とんこつ ラーメン ホテル', fallback: 'グランドハイアット福岡', key: 'ramen_hakata', label: '福岡県福岡市ふるさと納税・極細ストレート麺と白濁濃厚豚骨スープ「博多ラーメン」中洲屋台街直結プレミアムステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-glass-craft-towns-stay',
    queries: [
      { query: '小樽 北一硝子 ガラス ホテル', fallback: 'オーセントホテル小樽', key: 'glass_otaru', label: '北海道小樽市ふるさと納税・石油ランプと浮き玉から発展したガラス工芸の聖地「小樽切子・北一硝子」ノスタルジック名宿' },
      { query: '浅草 江戸切子 ホテル 旅館', fallback: '浅草ビューホテル', key: 'glass_edo', label: '東京都墨田区・台東区ふるさと納税・繊細なカットが生む光の芸術「江戸切子」下町情緒と浅草ビューホテル' },
      { query: '鹿児島 薩摩切子 温泉 旅館 城山ホテル', fallback: '城山ホテル鹿児島', key: 'glass_satsuma', label: '鹿児島県鹿児島市ふるさと納税・透明ガラスに色ガラスを被せた幻のぼかし美「薩摩切子」桜島一望露天風呂城山ホテル鹿児島' }
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
      await sleep(3000);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (err) {
        console.error(`Error searching "${q.query}":`, err.message);
      }

      if (!list || list.length === 0) {
        console.log(`Falling back to: "${q.fallback}"...`);
        await sleep(3000);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (err) {
          console.error(`Fallback error:`, err.message);
        }
      }

      if (list && list.length > 0) {
        const primary = list[0];
        console.log(` -> Found: [${primary.hotelName}] Price: ¥${primary.minPrice || primary.hotelMinCharge} Rating: ${primary.reviewAverage}`);
        collected[q.key] = {
          hotelNo: primary.hotelNo,
          hotelName: primary.hotelName,
          hotelInformationUrl: primary.hotelInformationUrl,
          planListUrl: primary.planListUrl,
          dpPlanListUrl: primary.dpPlanListUrl,
          reviewUrl: primary.reviewUrl,
          hotelKanaName: primary.hotelKanaName,
          hotelSpecial: primary.hotelSpecial,
          hotelMinCharge: primary.hotelMinCharge || primary.minPrice,
          latitude: primary.latitude,
          longitude: primary.longitude,
          postalCode: primary.postalCode,
          address1: primary.address1,
          address2: primary.address2,
          telephoneNo: primary.telephoneNo,
          hotelImageUrl: primary.hotelImageUrl,
          roomImageUrl: primary.roomImageUrl,
          reviewCount: primary.reviewCount,
          reviewAverage: primary.reviewAverage,
          userReview: primary.userReview,
          affiliateUrl: primary.affiliateUrl,
          label: q.label
        };
        db[q.key] = collected[q.key];
      } else {
        console.warn(`WARNING: No hotel found for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'round47_hotels.json'), JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 47 hotels to ${dbPath} and round47_hotels.json!`);
}

main();
