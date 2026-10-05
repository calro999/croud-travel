const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-bridges-history-stay',
    queries: [
      { query: '岩国 錦帯橋 温泉 旅館', fallback: '錦帯橋温泉　岩国国際観光ホテル', key: 'bridge_kintaikyo', label: '山口県岩国市ふるさと納税・五連の優美な木造アーチ名橋「錦帯橋」岩国城を望む清流美と錦帯橋温泉岩国国際観光ホテル' },
      { query: '長崎 眼鏡橋 ホテル ホテルモントレ 長崎', fallback: 'ホテルモントレ長崎', key: 'bridge_meganebashi', label: '長崎県長崎市ふるさと納税・日本最古の国重要文化財アーチ石橋「眼鏡橋」中島川の石畳散策と異国情緒漂うホテルモントレ長崎' },
      { query: '東京 日本橋 マンダリン 三井ガーデンホテル 日本橋', fallback: '三井ガーデンホテル日本橋プレミア', key: 'bridge_nihonbashi', label: '東京都中央区ふるさと納税・五街道の起点となる日本国道路元標の石造二連アーチ「日本橋」老舗百貨店と三井ガーデンホテル日本橋プレミア' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-confections-historic-town-stay',
    queries: [
      { query: '金沢 兼六園 旅館 和菓子 加賀', fallback: '金沢白鳥路　ホテル山楽', key: 'sweets_kanazawa', label: '石川県金沢市ふるさと納税・加賀百万石の茶の湯文化が育んだ日本三大銘菓「長生殿（落雁）」金沢城下町の伝統美と金沢白鳥路ホテル山楽' },
      { query: '長岡 蓬平温泉 新潟 旅館 和菓子', fallback: '蓬平温泉　和泉屋', key: 'sweets_nagaoka', label: '新潟県長岡市ふるさと納税・越後銘菓の頂点に君臨する口どけの至宝「越乃雪」錦鯉発祥の地・山懐の隠れ湯蓬平温泉和泉屋' },
      { query: '京都 祇園 旅館 和菓子 伝統', fallback: '京都祇園入り船', key: 'sweets_kyoto', label: '京都府京都市東山区・中京区ふるさと納税・幽玄なる御所御用達の有平糖やきぬた「京銘菓文化」鴨川の風情と数寄屋造りの祇園名門宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-limestone-caves-stay',
    queries: [
      { query: '岩泉 龍泉洞 龍泉洞温泉 旅館', fallback: 'ホテル龍泉洞愛真館', key: 'cave_ryusendo', label: '岩手県岩泉町ふるさと納税・ドラゴンブルーに輝く奇跡の地底湖「龍泉洞」天然記念物の神秘と三陸の恵み・龍泉洞温泉ホテル' },
      { query: '山口 長門湯本温泉 秋芳洞 旅館 大谷山荘', fallback: '大谷山荘', key: 'cave_akiyoshido', label: '山口県美祢市・長門市ふるさと納税・日本屈指の大カルスト台地に広がる東洋一の巨大鍾乳洞「秋芳洞」百枚皿と名湯長門湯本温泉大谷山荘' },
      { query: '高知 ホテル 三翠園 龍河洞 温泉', fallback: '城西館', key: 'cave_ryugado', label: '高知県香美市・高知市ふるさと納税・一億年の時が刻んだ弥生人の神壺遺構「龍河洞」土佐の皿鉢料理と名門旅館城西館' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-beautiful-forests-stay',
    queries: [
      { query: '青森 下北 薬研温泉 ヒバ 温泉', fallback: '薬研温泉　ホテルニュー薬研', key: 'forest_aomori_hiba', label: '青森県むつ市・佐井村ふるさと納税・清冽な芳香と耐朽性を誇る銘木「青森ヒバ美林」奥薬研の渓流露天風呂と森林浴の宿' },
      { query: '秋田 大館 天然温泉 スギ 大館ぽかぽか温泉ホテル', fallback: '大館ぽかぽか温泉ホテル', key: 'forest_akita_sugi', label: '秋田県能代市・大館市ふるさと納税・曲げわっぱを生んだ天を衝く美の巨木「秋田スギ美林」きりたんぽ鍋と大館ぽかぽか温泉ホテル' },
      { query: '長野 木曽 妻籠宿 奈良井宿 旅館 ヒノキ', fallback: '木曽路の宿　いわや', key: 'forest_kiso_hinoki', label: '長野県上松町・木曽町ふるさと納税・伊勢神宮式年遷宮の御神木を育む樹齢数百年の「木曽ヒノキ美林」中山道の宿場町と木曽路の宿いわや' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 35 hotels using rakuten_api_helper.js...');
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
      await sleep(2200);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2200);
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
  console.log('Round 35 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
