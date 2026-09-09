const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-tokyo-disney-resort-official-hotel-stay',
    queries: [
      { key: 'sheraton_disney', query: 'シェラトン グランデ トーキョーベイ', label: '浦安市ふるさと納税・東京ディズニーリゾートオフィシャルホテル！パーク直通モノレール駅前＆豪華ビュッフェ' },
      { key: 'hilton_disney', query: 'ヒルトン東京ベイ', label: '浦安市ふるさと納税・舞浜ベイサイド！魔法の森のファミリールーム＆オーシャンビュー極上リゾート' },
      { key: 'nikko_disney', query: 'グランドニッコー東京ベイ 舞浜', label: '浦安市ふるさと納税・日本最大級の南欧風アトリウムロビー！ディズニーパークビューと贅沢朝食' }
    ]
  },
  {
    slug: 'furusato-tax-usj-osaka-official-partner-hotel-stay',
    queries: [
      { key: 'kintetsu_usj', query: 'ホテル近鉄ユニバーサル・シティ', label: '大阪市ふるさと納税・ユニバーサル・スタジオ・ジャパン徒歩1分！セサミストリートコンセプトフロア完備' },
      { key: 'keihan_usj', query: 'ホテル京阪 ユニバーサル タワー', label: '大阪市ふるさと納税・USJオフィシャル最高層タワー！地上110mの絶景展望天然温泉と夜景スカイレストラン' },
      { key: 'liber_usj', query: 'リーベルホテル大阪', label: '大阪市ふるさと納税・USJ至近の巨大スパリゾート！地下約1000m天然温泉大浴場と広大リバーサイドテラス' }
    ]
  },
  {
    slug: 'furusato-tax-all-inclusive-free-drinks-alcohol-stay',
    queries: [
      { key: 'sakunami_ichinobo', query: 'ゆづくしSalon一の坊', label: '仙台市ふるさと納税・理想の日常を過すオールインクルーシブ！生ビール・地酒・サロン喫茶も全て無料の渓流名宿' },
      { key: 'matsushima_ichinobo', query: '松島温泉 松島一の坊', label: '松島町ふるさと納税・日本三景松島を一望！生演奏ラウンジや地酒ワイン・出来立て料理食べ飲み放題リゾート' },
      { key: 'mercure_allinc', query: 'グランドメルキュール伊勢志摩リゾート＆スパ', label: '志摩市ふるさと納税・話題のオールインクルーシブホテル！クラブラウンジでアルコール・おつまみ・温泉無料' }
    ]
  },
  {
    slug: 'furusato-tax-indoor-pool-kids-family-resort-stay',
    queries: [
      { key: 'epinard_nasu', query: 'ホテルエピナール那須', label: '那須町ふるさと納税・一年中泳げる室内温水プール＆託児所！バイキング満足度No.1ファミリーリゾート' },
      { key: 'kusatsu_village', query: '草津温泉 ホテルヴィレッジ', label: '草津町ふるさと納税・草津の名湯と全天候型プール・ボウリング！大自然の遊び満載アクティビティリゾート' },
      { key: 'beppu_suginoi', query: '別府温泉 杉乃井ホテル', label: '別府市ふるさと納税・屋内波の出るプール「アクアビート」と大展望露天風呂「棚湯」！九州屈指のエンタメ巨大宿' }
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
      await sleep(1800);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 80 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
