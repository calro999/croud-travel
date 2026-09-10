const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-tsukioka-onsen-emerald-bihada-stay',
    queries: [
      { key: 'tsukioka_shiradama', query: '月岡温泉 白玉の湯 華鳳', label: '新発田市ふるさと納税・エメラルドグリーンの含硫黄泉！六千坪の大庭園露天風呂と越後会席' },
      { key: 'tsukioka_senkei', query: '月岡温泉 白玉の湯 泉慶', label: '新発田市ふるさと納税・自家源泉白玉の湯を引く名門！開放感あふれる岩露天風呂とのどぐろ料理' },
      { key: 'tsukioka_seifuen', query: '月岡温泉 風鈴屋', label: '新発田市ふるさと納税・庭園露天風呂と硫黄香る美肌湯！越後の美酒と旬菜バイキング' }
    ]
  },
  {
    slug: 'furusato-tax-shima-onsen-retro-sekizenkan-stay',
    queries: [
      { key: 'shima_sekizenkan', query: '四万温泉 積善館', label: '中之条町ふるさと納税・日本最古の木造湯治宿！国の登録有形文化財「元禄の湯」と歴史散歩' },
      { key: 'shima_kashiwaya', query: '四万温泉 四万やまぐち館', label: '中之条町ふるさと納税・四万川の渓流沿いに佇む名宿！三十帖の巨大露天風呂「お題目大露天風呂」' },
      { key: 'shima_tamura', query: '四万たむら', label: '中之条町ふるさと納税・創業五百年・七つの源泉を持つ老舗！森に囲まれた野天風呂「森のこだま」' }
    ]
  },
  {
    slug: 'furusato-tax-kaike-onsen-ocean-crab-stay',
    queries: [
      { key: 'kaike_toukouen', query: '皆生温泉 皆生つるや', label: '米子市ふるさと納税・数寄屋造りの名門老舗！日本海を望む塩化物泉と境港直送の松葉ガニ会席' },
      { key: 'kaike_kasuitei', query: '皆生温泉 華水亭', label: '米子市ふるさと納税・全室オーシャンビュー！日本海と弓ヶ浜を一望する展望露天風呂と鳥取和牛' },
      { key: 'kaike_shikian', query: '皆生温泉 湯喜望 白扇', label: '米子市ふるさと納税・全室展望ジャグジー・露天風呂付き！白砂青松の海岸線を望む贅沢ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-takeo-onsen-romon-pottery-stay',
    queries: [
      { key: 'takeo_kyotoya', query: '武雄温泉 京都屋', label: '武雄市ふるさと納税・創業百十余年・大正ロマンのアンティーク宿！自家源泉美肌の湯とクラシックカー' },
      { key: 'takeo_shunkei', query: '武雄温泉 春慶屋', label: '武雄市ふるさと納税・展望露天風呂から武雄の山並みを一望！名物佐賀牛ステーキと温泉湯豆腐' },
      { key: 'takeo_onkyuan', query: '武雄温泉 竹林亭', label: '武雄市ふるさと納税・御船山楽園の敷地内に佇む最高峰離れ宿！四季の借景庭園と至極の懐石' }
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
  fs.writeFileSync('round99_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 99.');
}

main();
