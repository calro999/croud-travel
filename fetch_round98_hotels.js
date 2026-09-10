const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
    queries: [
      { key: 'kusatsu_boun', query: '草津温泉 望雲', label: '草津町ふるさと納税・創業慶長四年・十返舎一九ゆかりの老舗！二つの源泉と六つの湯船' },
      { key: 'kusatsu_ichii', query: '草津温泉 ホテル一井', label: '草津町ふるさと納税・湯畑の目の前！一番街に佇む創業三百余年のシンボル宿と白濁の湯' },
      { key: 'kusatsu_naraya', query: '草津温泉 奈良屋', label: '草津町ふるさと納税・明治十年創業・湯守が管理する最高峰の白旗源泉！純和風の格式と会席' }
    ]
  },
  {
    slug: 'furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
    queries: [
      { key: 'arima_hyoe', query: '有馬温泉 兵衛向陽閣', label: '神戸市ふるさと納税・創業七百年・太閤秀吉ゆかりの名門旅館！三つの大浴場で愉しむ金泉' },
      { key: 'arima_kinzan', query: '有馬温泉 欽山', label: '神戸市ふるさと納税・ミシュラン掲載の格式・静寂を守る大人の料亭旅館！極上の金泉と神戸牛' },
      { key: 'arima_nakanobo', query: '有馬温泉 中の坊 瑞苑', label: '神戸市ふるさと納税・十三歳未満お断りの極上おこもり宿！金泉・銀泉のダブル名湯と美食' }
    ]
  },
  {
    slug: 'furusato-tax-yufuin-onsen-hanare-private-stay',
    queries: [
      { key: 'yufuin_baian', query: '由布院温泉 名苑と名水の宿 梅園', label: '由布市ふるさと納税・一万坪の広大な敷地に咲く四季の花々！由布岳を望む大露天風呂' },
      { key: 'yufuin_sanso', query: '由布院温泉 由布院 寛ぎの宿 なな川', label: '由布市ふるさと納税・金鱗湖まで徒歩1分の好立地！全室に温泉内湯と露天風呂を備えた離れ宿' },
      { key: 'yufuin_kaze', query: '由布院 別邸 樹', label: '由布市ふるさと納税・全室離れ・専用風呂付きの隠れ宿！和モダンなデザイン空間と豊後牛' }
    ]
  },
  {
    slug: 'furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
    queries: [
      { key: 'ikaho_fukuichi', query: '伊香保温泉 福一', label: '渋川市ふるさと納税・創業四百四十年・石段街最上段の老舗！黄金の湯と白銀の湯の二大名湯' },
      { key: 'ikaho_moriaki', query: '伊香保温泉 森秋旅館', label: '渋川市ふるさと納税・創業明治元年・石段街徒歩1分！茶褐色の黄金の湯掛け流しと上州牛会席' },
      { key: 'ikaho_chigira', query: '伊香保温泉 千明仁泉亭', label: '渋川市ふるさと納税・文豪徳富蘆花ゆかりの宿！黄金の湯を贅沢に100％源泉掛け流しの湯滝' }
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

  const results = {};

  for (const config of furusatoConfigs) {
    console.log(`\n=== Processing ${config.slug} ===`);
    results[config.slug] = [];

    for (const q of config.queries) {
      console.log(`Searching for: ${q.query}...`);
      const hotels = await searchRakutenHotels(q.query, 1);
      await sleep(1500);

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`✓ Found: ${hotel.hotelName} (ID: ${hotel.hotelNo})`);
        results[config.slug].push({
          ...q,
          hotel
        });
        allSeasonal[hotel.hotelNo] = hotel;
      } else {
        console.log(`✗ Not found: ${q.query}`);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2));
  fs.writeFileSync('round98_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 98.');
}

main();
