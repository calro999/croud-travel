const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-spring-waters-stay',
    queries: [
      { query: '黒部 湧水 ホテル 宇奈月温泉', fallback: '宇奈月グランドホテル', key: 'water_kurobe', label: '富山県黒部市ふるさと納税・北アルプスの雪解け水が湧き出る名水の里「黒部川扇状地湧水群」宇奈月温泉ステイ' },
      { query: '白州 名水 リゾート ホテル 北杜市', fallback: 'グランドメルキュール八ヶ岳リゾート＆スパ', key: 'water_hakushu', label: '山梨県北杜市ふるさと納税・南アルプスの天然水とウイスキーの故郷「白州尾白川名水」八ヶ岳高原リゾートステイ' },
      { query: '南阿蘇 白川水源 温泉 旅館', fallback: '南阿蘇ルナ天文台　オーベルジュ「森のアトリエ」', key: 'water_shirakawa', label: '熊本県南阿蘇村ふるさと納税・毎分60トンの名水が滾々と湧き出る阿蘇の恵み「白川水源」阿蘇温泉郷ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-buddhas-heritage-stay',
    queries: [
      { query: '奈良 東大寺 ホテル ホテルニューわかさ', fallback: 'ホテルニューわかさ', key: 'buddha:nara', label: '奈良県奈良市ふるさと納税・世界最大級の木造建築と鎮護国家の象徴「東大寺盧舎那仏（奈良の大仏）」若草山麓ホテルニューわかさ' },
      { query: '鎌倉 長谷 大仏 旅館 ホテル', fallback: '鎌倉パークホテル', key: 'buddha_kamakura', label: '神奈川県鎌倉市ふるさと納税・国宝にして青空の下に佇む美しき尊顔「鎌倉大仏（高徳院）」湘南オーシャンビュー鎌倉パークホテル' },
      { query: '高岡 高岡大仏 ホテル', fallback: '高岡マンテンホテル駅前', key: 'buddha_takaoka', label: '富山県高岡市ふるさと納税・銅器の町が誇る日本一の美男大仏「高岡大仏」鋳物文化と高岡マンテンホテル駅前' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-stay',
    queries: [
      { query: '静岡 三保松原 ホテル 天女の館', fallback: '三保シーサイドホテル　福田屋', key: 'pine_miho', label: '静岡県静岡市清水区ふるさと納税・羽衣伝説と世界遺産富士山を望む白砂青松「三保松原」三保シーサイドステイ' },
      { query: '唐津 虹の松原 ホテル 唐津シーサイドホテル', fallback: '唐津シーサイドホテル', key: 'pine_nijinomatsubara', label: '佐賀県唐津市ふるさと納税・鏡山から見下ろす4.5km100万本の黒松林「虹の松原」絶景オーシャンビュー唐津シーサイドホテル' },
      { query: '敦賀 気比松原 ホテル', fallback: '北陸新幹線敦賀駅前 天然温泉　ホテルルートイン敦賀駅前', key: 'pine_kehi', label: '福井県敦賀市ふるさと納税・若狭湾の白砂と赤松青松が織りなす名勝「気比の松原」越前若狭の海の幸ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-clear-stream-valleys-stay',
    queries: [
      { query: '奥入瀬渓流 温泉 旅館 星野リゾート', fallback: '星野リゾート　奥入瀬渓流ホテル', key: 'valley_oirase', label: '青森県十和田市ふるさと納税・苔むす岩と千変万化の渓流美「奥入瀬渓流」唯一の渓流沿いリゾート星野リゾート奥入瀬渓流ホテル' },
      { query: '角館 田沢湖 抱返り渓谷 温泉', fallback: '角館温泉 花葉館', key: 'valley_dakigaeri', label: '秋田県仙北市ふるさと納税・東北の耶馬渓と称されるエメラルドグリーンの激流「抱返り渓谷」みちのく小京都角館ステイ' },
      { query: '阿寺渓谷 木曽 温泉 旅館', fallback: '木曽路 温泉 ホテル', key: 'valley_adera', label: '長野県大桑村・木曽町ふるさと納税・エメラルドグリーンの阿寺ブルーと柿其渓谷「木曽谷美林渓谷」天然温泉ステイ' }
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
  fs.writeFileSync('round45_hotels.json', JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\n=== Done! Saved ${Object.keys(collected).length} hotels to all_seasonal_rakuten_hotels.json and round45_hotels.json ===`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
