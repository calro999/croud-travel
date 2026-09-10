const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay',
    queries: [
      { key: 'yamashiro_yunokuni', query: '山代温泉 ゆのくに天祥', label: '加賀市ふるさと納税・自家源泉一〇〇％の一薬三湯！十八趣の湯巡りと名物加賀カニ・のどぐろ会席' },
      { key: 'yamashiro_takarazuka', query: '山代温泉 葉渡莉', label: '加賀市ふるさと納税・人と自然に優しい木のぬくもり宿！総檜大浴場と加賀野菜＆地酒' },
      { key: 'yamashiro_tachibana', query: 'たちばな四季亭', label: '加賀市ふるさと納税・明治元年創業・桐工芸と加賀友禅の美学！全館生花が彩る大人の隠れ家料亭旅館' }
    ]
  },
  {
    slug: 'furusato-tax-misasa-onsen-radon-immunity-stay',
    queries: [
      { key: 'misasa_izanro', query: '三朝温泉 依山楼 岩崎', label: '三朝町ふるさと納税・創業大正九年・文豪が愛した老舗！十二の湯船が並ぶ回遊式大庭園風呂「山の湯」' },
      { key: 'misasa_misasakan', query: '三朝温泉 三朝館', label: '三朝町ふるさと納税・自家源泉から湧く千坪の日本庭園風呂！女性に大人気のバラ風呂と鳥取和牛会席' },
      { key: 'misasa_saika', query: '三朝薬師の湯 万翆楼', label: '三朝町ふるさと納税・自家源泉掛け流しの贅沢な湯宿！三徳川のせせらぎと鳥取の山海の幸会席' }
    ]
  },
  {
    slug: 'furusato-tax-ureshino-onsen-bihada-tofu-stay',
    queries: [
      { key: 'ureshino_wataya', query: '嬉野温泉 和多屋別荘', label: '嬉野市ふるさと納税・嬉野川沿い二万坪の広大な敷地！黒川紀章設計のタワー棟と三光の湯' },
      { key: 'ureshino_taishoya', query: '嬉野温泉 大正屋', label: '嬉野市ふるさと納税・大正十四年創業・吉村順三設計の美学！四季の庭園と滝の湯・とろける温泉湯豆腐' },
      { key: 'ureshino_chagokoro', query: '嬉野温泉 茶心の宿 和楽園', label: '嬉野市ふるさと納税・日本初のお茶風呂「緑茶風呂」！特産うれしの茶の香りと美肌温泉の極み' }
    ]
  },
  {
    slug: 'furusato-tax-atami-onsen-fireworks-ocean-stay',
    queries: [
      { key: 'atami_korakuen', query: '熱海後楽園ホテル', label: '熱海市ふるさと納税・全室オーシャンビュー＆熱海海上花火大会の特等席！巨大日帰り温泉Fuua併設' },
      { key: 'atami_furuya', query: '熱海温泉 古屋旅館', label: '熱海市ふるさと納税・創業百八十余年・熱海最古の名湯「清左衛門の湯」！全室部屋食と金目鯛会席' },
      { key: 'atami_mikaduki', query: '熱海温泉 秀花園 湯の花膳', label: '熱海市ふるさと納税・熱海港と夜景・花火を一望する屋上展望露天風呂「月下美人」！料理自慢の名宿' }
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
  console.log('\nSuccessfully saved Round 96 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
