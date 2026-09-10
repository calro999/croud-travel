const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
    queries: [
      { key: 'ibusuki_hakusuikan', query: '指宿白水館', label: '指宿市ふるさと納税・元禄風呂と名物砂むし温泉！錦江湾の絶景と鹿児島黒豚・黒毛和牛会席' },
      { key: 'ibusuki_royal', query: '指宿ロイヤルホテル', label: '指宿市ふるさと納税・錦江湾と開聞岳を望む絶景高台ホテル！タラソテラピーとオーシャンビュー露天' },
      { key: 'ibusuki_seaside', query: '指宿シーサイドホテル', label: '指宿市ふるさと納税・波打ち際の砂むし温泉を館内で体験！海を眺めながらの錦江湾パノラマステイ' }
    ]
  },
  {
    slug: 'furusato-tax-nyuto-onsen-secret-milky-stay',
    queries: [
      { key: 'nyuto_taenoyu', query: '乳頭温泉郷 妙乃湯', label: '仙北市ふるさと納税・金の湯と銀の湯の二大名湯！先達川の渓流を望む滝見露天風呂と秋田郷土料理' },
      { key: 'nyuto_plazatadawako', query: '天然温泉 田沢湖レイクリゾート', label: '仙北市ふるさと納税・田沢湖畔に佇む高原リゾート！肌触り滑らかな天然温泉と秋田郷土ビュッフェ' },
      { key: 'nyuto_komagatake', query: '駒ヶ岳温泉', label: '仙北市ふるさと納税・渓流沿いの貸切野天風呂と手打ち十割そば！乳頭温泉鶴の湯への無料送迎も人気' }
    ]
  },
  {
    slug: 'furusato-tax-nasu-onsen-shikanoyu-resort-stay',
    queries: [
      { key: 'nasu_sanraku', query: '那須温泉 山楽', label: '那須町ふるさと納税・創業大正十二年の名門老舗！大自然に囲まれた三十畳の大露天風呂と極上とちぎ和牛' },
      { key: 'nasu_epinard', query: 'ホテルエピナール那須', label: '那須町ふるさと納税・那須高原の森にそびえる総合リゾート！大型露天風呂とフレンチ＆ビュッフェ' },
      { key: 'nasu_sunvalley', query: 'ホテルサンバレー那須', label: '那須町ふるさと納税・三種の異なる泉質を湯巡り！敷地内に温泉ゾーン広がる一大エンタメホテル' }
    ]
  },
  {
    slug: 'furusato-tax-chuzenji-onsen-lake-kanaya-stay',
    queries: [
      { key: 'chuzenji_kanaya', query: '日光中禅寺温泉 中禅寺金谷ホテル', label: '日光市ふるさと納税・森と湖に抱かれるクラシックリゾート！奥日光湯元の濃厚な白濁硫黄露天風呂' },
      { key: 'chuzenji_hananoki', query: '日光中禅寺湖温泉 ホテル花庵', label: '日光市ふるさと納税・全客室から中禅寺湖を一望！にごり湯とアルカリ単純泉の二つの温泉を堪能' },
      { key: 'chuzenji_hatago', query: '旅籠なごみ', label: '日光市ふるさと納税・中禅寺湖畔に佇む全室レイクビュー宿！源泉掛け流しの硫黄泉と日光地酒' }
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
  fs.writeFileSync('round102_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 102.');
}

main();
