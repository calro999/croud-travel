const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-hakone-sengokuhara-pampas-luxury-stay',
    queries: [
      { key: 'sengokuhara_kitanokaze', query: 'きたの風茶寮', label: '箱根町ふるさと納税・全室露天風呂付きの高級オーベルジュ！北海道と箱根の美食懐石' },
      { key: 'sengokuhara_senkyoro', query: '仙郷楼', label: '箱根町ふるさと納税・創業明治三年の老舗旅館！大涌谷源泉100％白濁のにごり湯と広大な日本庭園' },
      { key: 'sengokuhara_kanade', query: '箱根仙石原温泉 森のあかり', label: '箱根町ふるさと納税・静寂の森に佇む全室半露天風呂付き隠れ宿！創作和食会席とプライベート湯浴み' }
    ]
  },
  {
    slug: 'furusato-tax-ikaho-stone-steps-retro-luxury-stay',
    queries: [
      { key: 'ikaho_fukuichi', query: '伊香保温泉 福一', label: '渋川市ふるさと納税・創業四百四十余年の老舗名門！黄金の湯と白銀の湯の二大名湯を愉しむ石段街最上段の宿' },
      { key: 'ikaho_kogure', query: '伊香保温泉 ホテル木暮', label: '渋川市ふるさと納税・毎分1000リットル以上を誇る北関東最大級の湯処「子の湯千両」！黄金の湯の極み' },
      { key: 'ikaho_kishigon', query: '伊香保温泉 岸権旅館', label: '渋川市ふるさと納税・天正四年創業の石段街沿いの名門！創業以来引き継ぐ掛け流しの名湯黄金の湯' }
    ]
  },
  {
    slug: 'furusato-tax-yufuin-kinrinko-luxury-villa-stay',
    queries: [
      { key: 'yufuin_sanso_murata', query: '由布院 旅亭 田乃倉', label: '由布市ふるさと納税・金鱗湖まで徒歩1分の純和風旅館！全室源泉掛け流し風呂と四季の本格懐石' },
      { key: 'yufuin_kamenoi', query: '由布院 亀の井別荘', label: '由布市ふるさと納税・大正十年創業・一万坪の敷地に点在する離れ宿！由布院三名宿の極上ステイ' },
      { key: 'yufuin_yufusan', query: 'ゆふいん月燈庵', label: '由布市ふるさと納税・由布岳を望む雑木林に佇む全室離れ客室露天風呂付き！築三百年古民家の隠れ家' }
    ]
  },
  {
    slug: 'furusato-tax-akiu-onsen-sendai-retreat-stay',
    queries: [
      { key: 'akiu_sakan', query: '伝承千年の宿 佐勘', label: '仙台市ふるさと納税・伊達政宗公の湯守を務めた創業千年！名取川を望む名物露天風呂と仙台牛会席' },
      { key: 'akiu_rantei', query: '秋保温泉 篝火の湯 緑水亭', label: '仙台市ふるさと納税・広大な日本庭園と夜を彩る篝火露天風呂！宮城の山海の味覚と絶景ステイ' },
      { key: 'akiu_hotel_new_mitoya', query: '秋保温泉 ホテルニュー水戸屋', label: '仙台市ふるさと納税・十六種類もの多彩なお風呂を湯巡り！名取川渓谷沿いの大型温泉リゾート' }
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
  console.log('\nSuccessfully saved Round 95 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
