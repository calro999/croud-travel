const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-rapid-tidal-currents-stay',
    queries: [
      { query: '鳴門 アオアヲ ナルト リゾート', fallback: 'アオアヲナルトリゾート', key: 'current_naruto', label: '徳島県鳴門市ふるさと納税・最大時速20km世界屈指の大渦「鳴門海峡」アオアヲナルトリゾート' },
      { query: '今治 来島海峡 展望 ホテル', fallback: '今治国際ホテル', key: 'current_kurushima', label: '愛媛県今治市ふるさと納税・しまなみ海道と激流うず潮「来島海峡」今治国際ホテル' },
      { query: '下関 関門海峡 下関グランドホテル', fallback: '下関グランドホテル', key: 'current_kanmon', label: '山口県下関市ふるさと納税・本州と九州を分かつ急潮「関門海峡」下関グランドホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-train-window-views-stay',
    queries: [
      { query: '千曲 戸倉上山田温泉 姨捨', fallback: '戸倉上山田温泉', key: 'train_obasute', label: '長野県千曲市ふるさと納税・善光寺平を一望するスイッチバックの名駅「姨捨の車窓」美肌の名湯戸倉上山田温泉' },
      { query: 'えびの高原 霧島 温泉 ホテル', fallback: '霧島温泉 霧島観光ホテル', key: 'train_yatake', label: '宮崎県えびの市・鹿児島県霧島市ふるさと納税・霧島連峰と桜島を望む矢岳越えパノラマ「肥薩線の車窓」霧島温泉ステイ' },
      { query: '十勝 サホロリゾート ホテル 新得', fallback: 'サホロリゾートホテル', key: 'train_karikachi', label: '北海道新得町ふるさと納税・広大な十勝平野と大雪山系を見晴らす旧狩勝峠「日本三大車窓」十勝サホロリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-inari-shrines-stay',
    queries: [
      { query: '京都 伏見稲荷 ホテル アーバンホテル京都', fallback: 'アーバンホテル京都', key: 'inari_fushimi', label: '京都府京都市伏見区ふるさと納税・千本鳥居が連なる全国稲荷神社の総本宮「伏見稲荷大社」伏見の銘酒とアーバンホテル京都' },
      { query: '豊川 豊川稲荷 ホテル 豊川グランドホテル', fallback: 'ホテルルートイン豊川南', key: 'inari_toyokawa', label: '愛知県豊川市ふるさと納税・商売繁盛と霊狐塚の千体狐「豊川稲荷」門前町名物いなり寿司と快適ホテルステイ' },
      { query: '佐賀 鹿島 祐徳温泉 祐徳稲荷', fallback: '嬉野温泉 和多屋別荘', key: 'inari_yutoku', label: '佐賀県鹿島市ふるさと納税・朱塗りの本殿が山腹にそびえる鎮西日光「祐徳稲荷神社」有明海鮮と祐徳温泉ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-beautiful-forests-stay',
    queries: [
      { query: '下北半島 青森ヒバ 薬研温泉 旅館', fallback: '下北半島 むつ市 ホテル', key: 'forest_hiba', label: '青森県むつ市・風間浦村ふるさと納税・天然ヒバの清々しいアロマと渓流露天「青森ヒバ美林」下北半島名湯ステイ' },
      { query: '秋田 能代 天然秋田杉 ホテル', fallback: '能代タウンホテル', key: 'forest_sugi', label: '秋田県能代市・北秋田市ふるさと納税・樹齢200年超の美しき巨木林「天然秋田杉」きりたんぽと能代ステイ' },
      { query: '木曽 木曽路 ヒノキ 温泉 旅館', fallback: '木曽福島温泉', key: 'forest_hinoki', label: '長野県木曽町・南木曽町ふるさと納税・伊勢神宮のご神木を育む伊勢神宮御杣山「木曽ヒノキ美林」木曽路温泉郷ステイ' }
    ]
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = {};
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  const collected = {};

  for (const group of configs) {
    console.log(`\n========================================`);
    console.log(`Processing Group: ${group.slug}`);
    console.log(`========================================`);

    for (const q of group.queries) {
      console.log(`Searching for: "${q.query}" (key: ${q.key})...`);
      await sleep(3000);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (e) {
        console.warn('Query error:', e.message);
      }
      await sleep(3000);

      if (!list || list.length === 0) {
        console.log(`  -> Trying fallback: "${q.fallback}"...`);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (e) {
          console.warn('Fallback error:', e.message);
        }
        await sleep(3000);
      }

      if (list && list.length > 0) {
        const hotel = list[0];
        console.log(`  -> FOUND: ${hotel.hotelName} (No: ${hotel.hotelNo}) | MinPrice: ¥${hotel.hotelMinCharge} | Review: ${hotel.reviewAverage}`);
        collected[q.key] = {
          ...hotel,
          featureKey: q.key,
          featureLabel: q.label
        };
        db[q.key] = collected[q.key];
        db[hotel.hotelNo] = collected[q.key];
      } else {
        console.warn(`  -> FAILED to find hotel for key: ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync('round44_hotels.json', JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\n=== Done! Saved ${Object.keys(collected).length} hotels to all_seasonal_rakuten_hotels.json and round44_hotels.json ===`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
