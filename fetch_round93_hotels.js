const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kurokawa-onsen-nyuto-tegata-stay',
    queries: [
      { key: 'kurokawa_yamamizuki', query: '黒川温泉 山あいの宿 山みず木', label: '南小国町ふるさと納税・渓流沿いの露天風呂「幽谷の湯」！自然と一体になる里山の名門隠れ家旅館' },
      { key: 'kurokawa_wakaba', query: '黒川温泉 旅館 わかば', label: '南小国町ふるさと納税・美肌の化粧水風呂と囲炉裏会席！女性に優しい温かなおもてなし' },
      { key: 'kurokawa_shinmeikan', query: '黒川温泉 新明館', label: '南小国町ふるさと納税・主人がノミで掘り進めた全長30mの名物「洞窟風呂」！風情ある茅葺きの佇まい' }
    ]
  },
  {
    slug: 'furusato-tax-manza-onsen-milky-sulfur-stay',
    queries: [
      { key: 'manza_prince', query: '万座プリンスホテル', label: '嬬恋村ふるさと納税・標高1800mの絶景「こまくさの湯」！満天の星空と乳白色のにごり湯パノラマ' },
      { key: 'manza_kogen', query: '万座高原ホテル', label: '嬬恋村ふるさと納税・名物「百泉の湯」！黄・緑・白と4種の自家源泉が織りなす極上露天風呂めぐり' },
      { key: 'manza_nisshinkan', query: '万座温泉 日進舘', label: '嬬恋村ふるさと納税・創業百五十余年の木造湯治宿！総檜大浴場「苦湯」と天然硫黄泉の極み' }
    ]
  },
  {
    slug: 'furusato-tax-naruko-onsen-historic-cure-stay',
    queries: [
      { key: 'naruko_yumoto', query: '鳴子温泉 湯元吉祥', label: '大崎市ふるさと納税・共立リゾートの和モダン宿！源泉掛け流しの4つの無料貸切風呂と宮城の山海会席' },
      { key: 'naruko_unagiyu', query: '鳴子温泉 琢秀', label: '大崎市ふるさと納税・トロトロの極上美肌湯「うなぎ湯」！化粧水のようなアルカリ性名湯と自然美' },
      { key: 'naruko_masuya', query: '鳴子温泉 伝統の宿 枡形屋', label: '大崎市ふるさと納税・創業江戸時代の湯守宿！自家源泉100％の展望大浴場と地元食材の本格会席' }
    ]
  },
  {
    slug: 'furusato-tax-echigo-yuzawa-onsen-snow-country-stay',
    queries: [
      { key: 'yuzawa_takahan', query: '雪国の宿 高半', label: '湯沢町ふるさと納税・川端康成「雪国」執筆の部屋が残る創業九百年！源泉100％掛け流し「卵の湯」' },
      { key: 'yuzawa_shosenkaku', query: '越後湯沢温泉 松泉閣 花月', label: '湯沢町ふるさと納税・全館畳敷きの和の温もり！四つの露天風呂と南魚沼産コシヒカリ釜炊きご飯' },
      { key: 'yuzawa_naspa', query: 'NASPAニューオータニ', label: '湯沢町ふるさと納税・ニューオータニ直営の本格温泉リゾート！250坪の大型大浴場と極上ビュッフェ' }
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
  console.log('\nSuccessfully saved Round 93 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
