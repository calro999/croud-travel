const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-ishigakijima-resort-villa-luxury-stay',
    queries: [
      { key: 'ishigaki_fusaki', query: 'フサキビーチリゾート ホテル＆ヴィラズ', label: '石垣市ふるさと納税・天然ビーチ直結＆県内最大級ウォータースライダー！赤瓦ヴィラと石垣牛BBQ' },
      { key: 'ishigaki_intercon', query: 'ANAインターコンチネンタル石垣リゾート', label: '石垣市ふるさと納税・マエサトビーチを望む最高峰リゾート！クラブインターコンチネンタルと極上スパ' },
      { key: 'ishigaki_granvrio', query: 'グランヴィリオリゾート石垣島', label: '石垣市ふるさと納税・八重山諸島を一望するオーシャンビュー！露天風呂付き客室と星空ツアー' }
    ]
  },
  {
    slug: 'furusato-tax-miyakojima-allamanda-resort-stay',
    queries: [
      { key: 'miyako_allamanda', query: 'シギラベイサイドスイート アラマンダ', label: '宮古島市ふるさと納税・全室スイート＆ウミガメが泳ぐラグーン！プライベートプール付きヴィラ' },
      { key: 'miyako_hilton', query: 'ヒルトン沖縄宮古島リゾート', label: '宮古島市ふるさと納税・みやこサンセットビーチ至近！伊良部大橋を望む絶景ルーフトップバー' },
      { key: 'miyako_mirag', query: 'ホテル シギラミラージュ', label: '宮古島市ふるさと納税・シギラリゾート最高峰ラグジュアリー！オーシャンビューテラスジャグジー' }
    ]
  },
  {
    slug: 'furusato-tax-kamikochi-japan-alps-resort-stay',
    queries: [
      { key: 'kamikochi_imperial', query: '上高地帝国ホテル', label: '松本市ふるさと納税・神降ちる山岳リゾートの最高峰！名門帝国ホテルの伝統フレンチとマントルピース' },
      { key: 'kamikochi_gosenjaku', query: '五千尺ホテル上高地', label: '松本市ふるさと納税・河童橋を真正面に望む特等席！創業百年の歴史と極上フレンチ' },
      { key: 'kamikochi_onsen', query: '上高地温泉ホテル', label: '松本市ふるさと納税・上高地で唯一の自家源泉かけ流し温泉！梓川のせせらぎと山岳温泉会席' }
    ]
  },
  {
    slug: 'furusato-tax-furano-biei-lavender-nature-stay',
    queries: [
      { key: 'furano_prince', query: '新富良野プリンスホテル', label: '富良野市ふるさと納税・富良野温泉「紫彩の湯」＆ニングルテラス！雄大な十勝岳連峰一望リゾート' },
      { key: 'furano_orika', query: '富良野リゾートオリカ', label: '中富良野町ふるさと納税・ラベンダー畑と大雪山連峰の絶景パノラマ！全室展望風呂付き極上ホテル' },
      { key: 'biei_shirogane_park', query: '湯元白金温泉ホテル', label: '美瑛町ふるさと納税・青い池至近！白ひげの滝を望む源泉100％かけ流し名湯と北海道味覚会席' }
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
  console.log('\nSuccessfully saved Round 87 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
