const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-steam-locomotive-sl-train-view-stay',
    queries: [
      { key: 'oigawa_sl', query: '川根温泉ホテル', label: '島田市ふるさと納税・大井川鐵道SLが目の前を通過！全室リバービュー天然温泉リゾート' },
      { key: 'chichibu_sl', query: '梁山泊', label: '小鹿野町ふるさと納税・SLパレオエクスプレスが走る秩父路！名物竹酒と美肌温泉旅館' },
      { key: 'aizu_sl', query: '向瀧', label: '会津若松市ふるさと納税・SLばんえつ物語の玄関口！登録有形文化財第1号の名建築名湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-cave-bath-natural-grotto-onsen-stay',
    queries: [
      { key: 'katsuura_cave', query: 'ホテル浦島', label: '那智勝浦町ふるさと納税・太平洋の怒濤が押し寄せる巨大天然洞窟温泉「忘帰洞」と玄武洞' },
      { key: 'yunomine_cave', query: 'あづまや', label: '田辺市ふるさと納税・世界遺産の壺湯に隣接！槇風呂と硫黄薫る天然蒸し風呂・洞窟湯の風情' },
      { key: 'kamisuwa_cave', query: '神秘なる諏訪湖に心癒される宿 新湯', label: '諏訪市ふるさと納税・諏訪湖を一望！癒しの畳風呂と神秘的な自家源泉美肌の湯' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-hearth-irori-charcoal-stay',
    queries: [
      { key: 'shirakawago_irori', query: '結の庄', label: '白川村ふるさと納税・世界遺産の合掌造りの趣！囲炉裏ラウンジと飛騨牛炭火焼き会席' },
      { key: 'minakami_irori', query: '長寿館', label: 'みなかみ町ふるさと納税・国登録有形文化財！囲炉裏のある本館と足元湧出の奇跡の湯' },
      { key: 'iya_irori', query: '祖谷温泉', label: '三好市ふるさと納税・日本三大秘境！囲炉裏で焼く鮎と祖谷蕎麦＆谷底露天風呂' }
    ]
  },
  {
    slug: 'furusato-tax-waterfall-view-sound-stream-onsen-stay',
    queries: [
      { key: 'amagi_waterfall', query: '湯ヶ島温泉 白壁', label: '伊豆市ふるさと納税・伊豆天城の清流と巨石露天風呂！わさび鍋と滝のせせらぎに癒される宿' },
      { key: 'nasu_waterfall', query: '板室温泉 大黒屋', label: '那須塩原市ふるさと納税・那珂川の清流と滝の響き！アートと保養の温泉旅館' },
      { key: 'kurokawa_waterfall', query: '山あかり', label: '南小国町ふるさと納税・田の原川のせせらぎと満天の星！滝を望む極上の静寂宿' }
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
      await sleep(2000);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 79 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
