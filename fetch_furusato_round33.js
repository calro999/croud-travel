const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-thatched-roof-villages-heritage-stay',
    queries: [
      { query: '南丹 美山 旅館 京都 かやぶき', fallback: '料理旅館　きぐすりや', key: 'village_miyama', label: '京都府南丹市美山町ふるさと納税・日本の原風景が残るかやぶきの里「美山北集落」清流美山川と鮎料理・料理旅館きぐすりや' },
      { query: '下郷 大内宿 会津 温泉 旅館 福島', fallback: '会津芦ノ牧温泉　大川荘', key: 'village_ouchijuku', label: '福島県下郷町・会津若松市ふるさと納税・江戸時代の宿場町と名物ねぎそば「大内宿」渓谷美を望む絶景露天風呂・会津芦ノ牧温泉大川荘' },
      { query: '白川郷 飛騨高山 ホテル 旅館 温泉 岐阜', fallback: '白川郷の湯', key: 'village_shirakawago', label: '岐阜県白川村・高山市ふるさと納税・世界遺産豪雪地帯の知恵と祈り「白川郷合掌造り集落」飛騨牛ステーキと白川郷唯一の天然温泉白川郷の湯' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-subterranean-waterfalls-caves-stay',
    queries: [
      { query: '新見 井倉洞 温泉 旅館 岡山', fallback: '新見グランドホテルみよしや', key: 'cave_ikurado', label: '岡山県新見市ふるさと納税・高梁川の絶壁に聳える地底大滝「井倉洞」石灰岩のカーテンと千屋牛ステーキ・新見グランドホテルみよしや' },
      { query: '田村市 あぶくま洞 郡山 磐梯熱海 温泉 福島', fallback: '磐梯熱海温泉　ホテル華の湯', key: 'cave_abukumado', label: '福島県田村市・郡山市ふるさと納税・三千万年の歳月が創り出した東洋屈指の鍾乳石パノラマ「あぶくま洞」三十種類の湯舎・磐梯熱海温泉ホテル華の湯' },
      { query: '日原鍾乳洞 奥多摩 温泉 旅館 東京', fallback: '奥多摩の風　はとのす荘', key: 'cave_nippara', label: '東京都奥多摩町ふるさと納税・関東随一の規模を誇る神秘の巨巌ライトアップ「日原鍾乳洞」多摩川清流と自家源泉温泉・奥多摩の風はとのす荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-harbor-cruises-luxury-stay',
    queries: [
      { query: '神戸港 クルーズ ホテル ハーバーランド 兵庫', fallback: 'ホテル　ラ・スウィート神戸ハーバーランド', key: 'cruise_kobe', label: '兵庫県神戸市中央区ふるさと納税・ロマンチックなトワイライト＆ディナークルーズ「神戸港クルーズ」全室ジャグジー付ホテルラ・スウィート神戸ハーバーランド' },
      { query: '横浜港 クルーズ ホテル みなとみらい 神奈川', fallback: '横浜ベイホテル東急', key: 'cruise_yokohama', label: '神奈川県横浜市西区ふるさと納税・マリーンルージュで巡る横浜ベイブリッジと大さん橋「横浜港クルーズ」大観覧車パノラマ・横浜ベイホテル東急' },
      { query: '長崎港 軍艦島 クルーズ ホテル 長崎', fallback: 'ホテルモントレ長崎', key: 'cruise_nagasaki', label: '長崎県長崎市ふるさと納税・世界文化遺産への船出軍艦島上陸クルーズと稲佐山夜景「長崎港クルーズ」ポルトガル情緒漂うホテルモントレ長崎' }
    ]
  },
  {
    slug: 'furusato-tax-three-coastal-pine-glamping-resort-stay',
    queries: [
      { query: '唐津 虹の松原 グランピング ホテル リゾート 佐賀', fallback: '唐津シーサイドホテル', key: 'glamp_matsubara_karatsu', label: '佐賀県唐津市ふるさと納税・日本三大松原・玄界灘の潮騒に包まれる「虹の松原グランピング＆リゾート」唐津焼と佐賀牛BBQ・唐津シーサイドホテル' },
      { query: '敦賀 気比の松原 海 ホテル グランピング 福井', fallback: 'ホテルルートイン敦賀駅前', key: 'glamp_matsubara_tsuruga', label: '福井県敦賀市ふるさと納税・白砂青松の海岸美と夕日パノラマ「気比の松原コースタルステイ」越前海の幸とホテルルートイン敦賀駅前' },
      { query: '静岡 三保松原 グランピング ホテル 富士山', fallback: '日本平ホテル', key: 'glamp_matsubara_shimizu', label: '静岡県静岡市清水区ふるさと納税・羽衣伝説の松林と雄大な富士山を仰ぐ「三保松原ラグジュアリーステイ」駿河湾海鮮と日本平ホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 33 hotels using openapi helper...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(2000);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2000);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 33 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
