const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const microWave24Configs = [
  {
    slug: 'yamagata-sakata-sankyo-warehouse-shonai-stay',
    badge: 'SAKATA & SANKYO GUIDE',
    title: '【山形・酒田＆山居倉庫・庄内砂丘】北前船豪商の港町・酒田ラーメン＆日本海夕陽宿 完全ガイド',
    metaDesc: '北前船航路の繁栄とケヤキ並木の美！山形酒田エリア完全特化！国指定史跡「山居倉庫（ケヤキ並木・米穀倉庫）」、日本一の大地主「本間家旧本邸」、日和山公園、名物「酒田ラーメン・庄内浜海鮮宿」を徹底解説。',
    heroDesc: '「西の堺、東の酒田」と謳われた北前船交易の港町「酒田」。明治26年築、ケヤキ並木の木陰に佇む黒板塀の「山居倉庫」。日本一の大地主・本間家の栄華を伝える武家屋敷と庭園。飛魚（アゴ）出汁が澄み渡る「酒田のラーメン」と庄内浜の海の幸を味わう旅。',
    queries: [
      { key: 'sakata_sankyo_warehouse_hotel_stay', query: '酒田 ホテル 旅館 宿泊 山居倉庫 山形 温泉', label: '山居倉庫＆酒田駅至近・北前船歴史散策クラシックホテル' },
      { key: 'sakata_ramen_seafood_inn_stay', query: '酒田 旅館 海鮮 料理 宿泊 山形 庄内浜 露天風呂', label: '酒田港直送・庄内浜の地魚会席＆名物酒田ラーメン美食宿' },
      { key: 'shonai_yunohama_sunset_stay', query: '湯野浜温泉 旅館 ホテル 宿泊 山形 日本海 夕陽 露天風呂', label: '湯野浜温泉郷・日本海に沈む夕陽パノラマ絶景宿' }
    ]
  },
  {
    slug: 'gunma-shima-onsen-okushima-lake-stay',
    badge: 'SHIMA ONSEN & BLUE LAKE GUIDE',
    title: '【群馬・四万温泉＆奥四万湖】奇跡の四万ブルー・千と千尋レトロ木造湯宿 完全ガイド',
    metaDesc: '四万の病を癒やす霊泉と息を呑むコバルトブルー・群馬四万温泉エリア完全特化！奇跡の水鏡「奥四万湖（四万ブルー・カヌー）」、現存日本最古の木造湯宿建築「積善館」、日向見薬師堂、飲泉・胃腸の名湯と上州牛宿を徹底解説。',
    heroDesc: 'コバルトブルーの水面が神秘の光を放つ「奥四万湖」と「四万川」。アニメ映画のモデルとも伝わる元禄四年創業の日本最古の木造湯宿「積善館 本館（赤い慶雲橋）」。四万（よんまん）の病を治すと伝わる名湯。レトロな落合通りで焼きまんじゅうを頬張り、湯治の風情に浸る旅。',
    queries: [
      { key: 'sekizenkan_heritage_inn_stay', query: '四万温泉 積善館 旅館 宿泊 群馬 レトロ 木造 温泉', label: '日本最古の木造湯宿・積善館＆元禄レトロ建築名湯宿' },
      { key: 'okushima_lake_blue_nature_stay', query: '四万温泉 旅館 ホテル 奥四万湖 宿泊 群馬 露天風呂 カヌー', label: '奥四万湖四万ブルーカヌー拠点＆渓流沿い露天風呂宿' },
      { key: 'shima_gastro_joshu_beef_stay', query: '四万温泉 旅館 上州牛 料理 宿泊 群馬 露天風呂 飲泉', label: '四万名物「飲泉」＆極上上州牛ステーキ・山菜料理宿' }
    ]
  },
  {
    slug: 'nagano-bessho-onsen-ueda-castle-stay',
    badge: 'BESSHO ONSEN & UEDA GUIDE',
    title: '【長野・別所温泉＆上田城】信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 完全ガイド',
    metaDesc: '信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。',
    heroDesc: '枕草子にも記された信州最古の温泉地「別所温泉（信州の鎌倉）」。日本で唯一現存する木造八角塔「国宝 安楽寺八角三重塔」。善光寺と向かい合う厄除けの霊場「北向観音」。徳川軍を二度撃退した真田幸村公ゆかりの「上田城」。ほのかな硫黄香る美肌湯と名物美味だれ焼き鳥の旅。',
    queries: [
      { key: 'bessho_onsen_heritage_inn_stay', query: '別所温泉 旅館 ホテル 宿泊 長野 露天風呂 外湯 北向観音', label: '別所温泉街中心部・北向観音至近＆源泉かけ流し老舗旅館' },
      { key: 'ueda_castle_sanada_hotel_stay', query: '上田市 ホテル 旅館 宿泊 上田城 真田 長野 温泉', label: '上田城跡公園＆城下町散策・信州真田ゆかりの拠点ホテル' },
      { key: 'shinshu_bessho_soba_ayu_stay', query: '別所温泉 旅館 信州牛 信州そば 料理 宿泊 長野 露天風呂', label: '信州プレミアム牛＆手打ち信州そば・松茸会席名宿' }
    ]
  },
  {
    slug: 'shizuoka-sumatakyo-okuoi-lake-bridge-stay',
    badge: 'SUMATAKYO & OKUOI GUIDE',
    title: '【静岡・寸又峡＆奥大井湖上駅】死ぬまでに渡りたい夢の吊橋・アプト式鉄道宿 完全ガイド',
    metaDesc: 'エメラルドグリーンの湖上絶景と美女づくりの湯・静岡寸又峡＆川根本町エリア完全特化！死ぬまでに一度は渡りたい「夢の吊橋」、湖に浮かぶ秘境駅「奥大井湖上駅（レインボーブリッジ）」、南アルプスあぷとライン、寸又峡温泉宿を徹底解説。',
    heroDesc: 'チンダル現象が生み出す息を呑むエメラルドグリーンの水面「寸又峡・夢の吊橋」。揺れる橋の中央で祈ると恋が叶うという伝説。大井川のダム湖にぽっかりと浮かぶ神秘の秘境駅「奥大井湖上駅」。日本唯一のアプト式山岳鉄道。トロリとした「美女づくりの湯」で癒やされる秘境旅へ。',
    queries: [
      { key: 'sumatakyo_dream_bridge_inn_stay', query: '寸又峡温泉 旅館 ホテル 宿泊 夢の吊橋 静岡 美女づくりの湯', label: '夢の吊橋トレッキング出発点・寸又峡温泉美女づくりの名宿' },
      { key: 'okuoi_lake_station_nature_stay', query: '川根本町 旅館 ホテル 宿泊 大井川鐵道 奥大井 静岡 温泉', label: '奥大井湖上駅＆アプト式列車乗車拠点・南アルプス秘境宿' },
      { key: 'kawane_green_tea_wild_game_stay', query: '川根温泉 旅館 ジビエ 川根茶 料理 宿泊 静岡 露天風呂', label: '名産「川根茶」＆川魚・鹿肉ジビエ料理を味わう温泉旅館' }
    ]
  },
  {
    slug: 'yamaguchi-nagato-yumoto-motonosumi-shrine-stay',
    badge: 'NAGATO YUMOTO & MOTONOSUMI GUIDE',
    title: '【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド',
    metaDesc: 'CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。',
    heroDesc: '青い日本海と断崖絶壁に向かって123基の朱色鳥居がトンネルのように連なる奇跡の絶景「元乃隅（もとのすみ）神社」。「長門富士」の麓、音信川（おとづれがわ）沿いに竹林や飛び石、川床カフェが美しくリノベーションされた「長門湯本温泉」。名湯「恩湯」と日本海の旬魚を味わう旅。',
    queries: [
      { key: 'nagato_yumoto_onsen_river_stay', query: '長門湯本温泉 旅館 ホテル 宿泊 山口 露天風呂 恩湯 川床', label: '長門湯本温泉街・音信川沿い川床テラス＆美肌名湯宿' },
      { key: 'motonosumi_shrine_cape_stay', query: '長門市 ホテル 旅館 宿泊 元乃隅神社 山口 日本海 温泉', label: '元乃隅神社＆千畳敷・青海島パノラマ絶景観光拠点宿' },
      { key: 'nagato_gastro_kawara_soba_stay', query: '長門 旅館 瓦そば 長門やきとり 料理 宿泊 山口 海鮮', label: '山口名物「瓦そば」＆長門やきとり・仙崎イカ活造り宿' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 Micro Hubs (Wave 24) ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of microWave24Configs) {
    console.log(`\n========================================`);
    console.log(`Micro Hub (Wave 24): ${theme.title} (${theme.slug})`);
    console.log(`========================================`);
    if (!results[theme.slug]) results[theme.slug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
          await sleep(1300);
          const fbQuery = q.query.split(' ').slice(0, 3).join(' ');
          hotels = await searchRakutenHotels(fbQuery, 4);
        }
      } catch (err) {
        console.warn(` Query failed: ${err.message}`);
      }
      console.log(` -> Retrieved ${hotels ? hotels.length : 0} hotels directly from Rakuten API.`);
      results[theme.slug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all Micro Tourist Hubs Wave 24 hotel data to: ${cachePath}`);
}

main().catch(console.error);
