const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-fresh-oyster-feast-luxury-gourmet-stay',
    queries: [
      { key: 'miyajima_oyster', query: '宮島グランドホテル 有もと', label: '廿日市市ふるさと納税・宮島厳島神社至近！名物広島牡蠣と老舗の数寄屋風情' },
      { key: 'toba_oyster', query: 'サン浦島 悠季の里 鳥羽', label: '鳥羽市ふるさと納税・伊勢志摩本浦牡蠣・的矢牡蠣と自家源泉の美肌温泉宿' },
      { key: 'kesennuma_oyster', query: '旅館 椿荘花月 気仙沼', label: '気仙沼市ふるさと納税・三陸リアス海岸の濃厚な大粒牡蠣と獲れたて海の幸尽くし' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-astronomy-night-view-stay',
    queries: [
      { key: 'achi_starry_sky', query: '昼神温泉 癒楽の宿 清風苑', label: '阿智村ふるさと納税・日本一の星空ナイトツアー拠点と美肌の昼神温泉名宿' },
      { key: 'nobeyama_starry_sky', query: '八ヶ岳グレイスホテル', label: '南牧村ふるさと納税・日本三選星名所の野辺山高原！全室南向き八ヶ岳ビューと天体望遠鏡観測' },
      { key: 'ishigaki_starry_sky', query: '石垣島ビーチホテルサンシャイン', label: '石垣市ふるさと納税・星空保護区に輝く南十字星と東シナ海を望むインフィニティプール' }
    ]
  },
  {
    slug: 'furusato-tax-mountain-stream-open-air-bath-healing-stay',
    queries: [
      { key: 'oirase_keiryu', query: '奥入瀬渓流ホテル 星野リゾート', label: '十和田市ふるさと納税・奥入瀬渓流沿いに唯一佇むネイチャーリゾートと渓流露天風呂' },
      { key: 'kurokawa_keiryu', query: '黒川温泉 旅館 奥の湯', label: '南小国町ふるさと納税・田の原川の清流を望む多彩な混浴露天・女性専用露天と手湯' },
      { key: 'shiobara_keiryu', query: '塩原温泉 湯守田中屋', label: '那須塩原市ふるさと納税・箒川の渓谷美と野趣あふれる約300段の石段を下る名物露天風呂' }
    ]
  },
  {
    slug: 'furusato-tax-autumn-foliage-open-air-bath-stay',
    queries: [
      { key: 'chuzenji_momiji', query: '中禅寺金谷ホテル 日光', label: '日光市ふるさと納税・中禅寺湖畔の紅葉グラデーションと乳白色硫黄泉露天風呂' },
      { key: 'arashiyama_momiji', query: '京都 嵐山温泉 渡月亭', label: '京都市ふるさと納税・嵐山渡月橋たもとで愛でる錦秋の紅葉絵巻と伝統京懐石' },
      { key: 'hakone_momiji', query: '箱根小涌園 美山楓林', label: '箱根町ふるさと納税・紅葉の小涌谷の森に包まれる露天風呂と掛け流しの名湯' }
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
        await sleep(1500);
        const hotels = await searchRakutenHotels(q.query, 3);
        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = hotels[0];
          console.log(`  -> Selected: ${hotels[0].hotelName} (${hotels[0].hotelNo})`);
        } else {
          console.warn(`  -> No hotel found for query: ${q.query}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query "${q.query}":`, err.message);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 71 hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
