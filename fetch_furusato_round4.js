const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-winter-crab-gourmet-luxury-stay',
    queries: [
      { key: 'kinosaki_matsuba_crab', query: '城崎温泉 松葉ガニ 旅館 兵庫', label: '豊岡市ふるさと納税・本場城崎温泉のブランド松葉ガニフルコース宿' },
      { key: 'mikuni_echizen_crab', query: '三国温泉 越前ガニ 旅館 福井', label: '坂井市ふるさと納税・黄色タグ付き極上越前ガニを味わう東尋坊の湯宿' },
      { key: 'kaike_tottori_crab', query: '皆生温泉 カニ 旅館 鳥取', label: '米子市ふるさと納税・境港水揚げ活松葉ガニと白砂青松の海辺温泉旅館' }
    ]
  },
  {
    slug: 'furusato-tax-remote-island-luxury-resort-stay',
    queries: [
      { key: 'yakushima_nature_resort', query: '屋久島 リゾート ホテル 温泉 鹿児島', label: '屋久島町ふるさと納税・世界自然遺産の巨樹と美肌温泉の贅沢ロッジ' },
      { key: 'amami_luxury_villa', query: '奄美大島 ヴィラ リゾート ホテル 鹿児島', label: '奄美市・龍郷町ふるさと納税・加計呂麻を望むオーシャンフロントヴィラ' },
      { key: 'ishigaki_private_resort', query: '石垣島 リゾート ヴィラ ホテル 沖縄', label: '石垣市ふるさと納税・石垣ブルーの海と満天の星空に包まれるプールヴィラ' }
    ]
  },
  {
    slug: 'furusato-tax-winery-craft-beer-auberge-stay',
    queries: [
      { key: 'katsunuma_wine_stay', query: '勝沼 ワイン 温泉 旅館 山梨', label: '甲州市ふるさと納税・ぶどう畑を一望するワイナリーホテル＆温泉宿' },
      { key: 'furano_winery_resort', query: '富良野 ワイナリー リゾート ホテル 北海道', label: '富良野市ふるさと納税・大雪山連峰を望むファーム＆ワインリゾート' },
      { key: 'yoichi_wine_hotel', query: '余市 ワイン ホテル 北海道 宿泊', label: '余市町ふるさと納税・日本屈指の醸造用ぶどう産地で味わう美食オーベルジュ' }
    ]
  },
  {
    slug: 'furusato-tax-welcome-baby-family-kids-stay',
    queries: [
      { key: 'atami_baby_friendly', query: '熱海 赤ちゃん連れ 温泉 旅館 貸切風呂 静岡', label: '熱海市ふるさと納税・新幹線直通！離乳食＆貸切風呂完備の安心湯宿' },
      { key: 'nasu_baby_resort', query: '那須 赤ちゃん ホテル ファミリー 栃木', label: '那須町ふるさと納税・ウェルカムベビー認定ルーム＆キッズパーク付きリゾート' },
      { key: 'minamiboso_baby_inn', query: '南房総 赤ちゃん 温泉 旅館 千葉 ファミリー', label: '南房総市ふるさと納税・海辺の個室食＆ベビーバス完備の温泉旅館' }
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

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all round 4 furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
