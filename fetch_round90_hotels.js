const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-gero-onsen-bihada-luxury-stay',
    queries: [
      { key: 'gero_suimeikan', query: '下呂温泉 水明館', label: '下呂市ふるさと納税・創業九十余年！野天風呂・展望大浴場・檜風呂の三大大浴場と飛騨牛懐石' },
      { key: 'gero_bosenkan', query: '下呂温泉 望川館', label: '下呂市ふるさと納税・飛騨川を望む一千 وم坪の日本庭園＆大露天風呂！美肌の湯と飛騨牛味覚' },
      { key: 'gero_yunoshimakan', query: '下呂温泉 湯之島館', label: '下呂市ふるさと納税・国登録有形文化財！昭和六年の木造建築美と五万坪の森林に佇む秘湯名門' }
    ]
  },
  {
    slug: 'furusato-tax-kinugawa-nikko-world-heritage-stay',
    queries: [
      { key: 'nikko_senhime', query: '日光温泉 日光千姫物語', label: '日光市ふるさと納税・日光東照宮徒歩10分！女性に優しい美肌温泉と懐石料理' },
      { key: 'nikko_kanaya', query: '日光金谷ホテル', label: '日光市ふるさと納税・日本最古のリゾートホテル！アインシュタイン逗留のクラシック洋館と伝統フレンチ' },
      { key: 'nikko_honbou', query: '奥日光ホテル四季彩', label: '日光市ふるさと納税・中禅寺湖畔の乳白色硫黄泉！奥日光の豊かな原生林を望む絶景露天風呂' }
    ]
  },
  {
    slug: 'furusato-tax-yamagata-zao-onsen-okama-stay',
    queries: [
      { key: 'zao_kokusai', query: '蔵王温泉 蔵王国際ホテル', label: '山形市ふるさと納税・丸太造りの源泉100％かけ流し「八右衛門の湯」！乳白色の強酸性硫黄泉と山形牛' },
      { key: 'zao_shiki', query: '蔵王温泉 蔵王四季のホテル', label: '山形市ふるさと納税・百松河原に佇む離れ湯「白金の湯」！乳白色のにごり湯露天風呂と郷土会席' },
      { key: 'zao_takamiya', query: '深山荘 高見屋', label: '山形市ふるさと納税・創業三百年！蔵王随一の歴史を誇る純和風木造数寄屋造りと自家源泉かけ流し' }
    ]
  },
  {
    slug: 'furusato-tax-nasu-highland-onsen-resort-stay',
    queries: [
      { key: 'nasu_epicurean', query: 'ホテルエピナール那須', label: '那須町ふるさと納税・那須高原最大級リゾート！大型温泉大浴場露天風呂と豪華バイキング' },
      { key: 'nasu_sansui', query: '那須温泉 山楽', label: '那須町ふるさと納税・大正十二年創業・昭和天皇ゆかりの格式！自家源泉大露天風呂ととちぎ和牛会席' },
      { key: 'nasu_garden', query: 'ロイヤルホテル 那須', label: '那須町ふるさと納税・那須高原の雄大な自然を一望！露天風呂とファミリー満足度No.1ビュッフェ' }
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
  console.log('\nSuccessfully saved Round 90 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
