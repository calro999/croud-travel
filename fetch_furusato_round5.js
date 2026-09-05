const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-secret-hotspring-lamp-retreat-stay',
    queries: [
      { key: 'houshi_secret_onsen', query: '法師温泉 旅館 群馬 秘湯', label: 'みなかみ町ふるさと納税・国登録有形文化財と総ヒバ造り法師乃湯' },
      { key: 'iya_secret_onsen', query: '祖谷温泉 旅館 徳島 秘湯 露天風呂', label: '三好市ふるさと納税・ケーブルカーで下る秘境祖谷渓の源泉かけ流し野天風呂' },
      { key: 'sukayu_secret_onsen', query: '酸ヶ湯 温泉 旅館 青森 八甲田', label: '青森市ふるさと納税・八甲田連峰の豪雪に抱かれるヒバ千人風呂' }
    ]
  },
  {
    slug: 'furusato-tax-luxury-glamping-bbq-dome-stay',
    queries: [
      { key: 'kawaguchiko_glamping', query: '富士河口湖 グランピング BBQ ドーム 山梨', label: '富士河口湖町ふるさと納税・富士山麓の星空ドームテント＆甲州牛BBQ' },
      { key: 'biwako_glamping', query: '琵琶湖 グランピング ドーム BBQ 滋賀', label: '高島市・近江八幡市ふるさと納税・レイクビューの大型ドーム＆近江牛アウトドア' },
      { key: 'awaji_glamping', query: '淡路島 グランピング ドームテント BBQ 兵庫', label: '淡路市ふるさと納税・海風薫るパノラマドーム＆淡路牛・玉ねぎBBQ' }
    ]
  },
  {
    slug: 'furusato-tax-scenic-train-trolley-onsen-stay',
    queries: [
      { key: 'unazuki_trolley_onsen', query: '宇奈月温泉 黒部 トロッコ 旅館 富山', label: '黒部市ふるさと納税・黒部峡谷トロッコ電車と日本屈指の透明度誇る名湯宿' },
      { key: 'watarase_valley_onsen', query: '水沼温泉 旅館 わたらせ 群馬', label: 'みどり市・日光市ふるさと納税・わたらせ渓谷鐵道の車窓美と渓谷沿いの湯宿' },
      { key: 'tadami_aizu_onsen', query: '会津柳津 温泉 旅館 福島 只見線', label: '柳津町・三島町ふるさと納税・只見線絶景橋梁と奥会津の名湯治宿' }
    ]
  },
  {
    slug: 'furusato-tax-ise-kumano-sacred-power-spot-stay',
    queries: [
      { key: 'ise_shrine_stay', query: '伊勢神宮 内宮 旅館 ホテル 三重 温泉', label: '伊勢市ふるさと納税・お伊勢参り早朝参拝に最適な内宮・おかげ横丁周辺の名宿' },
      { key: 'kumano_kodo_stay', query: '熊野古道 那智勝浦 温泉 旅館 和歌山', label: '那智勝浦町ふるさと納税・世界遺産熊野古道と洞窟露天風呂の勝浦温泉宿' },
      { key: 'izumo_taisha_stay', query: '出雲大社 温泉 旅館 島根', label: '出雲市ふるさと納税・神話の国・出雲大社参拝と美肌の神の湯・玉造温泉' }
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

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all round 5 furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
