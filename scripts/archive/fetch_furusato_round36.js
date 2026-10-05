const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-strange-sceneries-geopark-stay',
    queries: [
      { query: '妙義山 温泉 旅館 妙義グリーンホテル', fallback: '妙義グリーンホテル＆テラス', key: 'scenery_myogi', label: '群馬県富岡市・安中市ふるさと納税・日本三大奇景の荒々しい岩峰群「妙義山」妙義山を望む絶景温泉妙義グリーンホテル＆テラス' },
      { query: '小豆島 寒霞渓 ホテル リゾート', fallback: '小豆島国際ホテル', key: 'scenery_kankakei', label: '香川県小豆島町・土庄町ふるさと納税・表十二景裏八景が織りなす大渓谷美「寒霞渓」瀬戸内海の夕日とエンジェルロード小豆島国際ホテル' },
      { query: '大分 耶馬渓 温泉 旅館', fallback: '耶馬渓温泉　若山温泉', key: 'scenery_yabakei', label: '大分県中津市ふるさと納税・頼山陽が絶賛した奇岩絶壁の天下無双景「耶馬渓」青の洞門と天然温泉・中津名物からあげ宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-illuminations-stay',
    queries: [
      { query: '足利 あしかがフラワーパーク ホテル', fallback: 'ニューミヤコホテル足利本館', key: 'illumi_ashikaga', label: '栃木県足利市ふるさと納税・500万球の光の藤と花の芸術「あしかがフラワーパーク」歴史ある足利学校とニューミヤコホテル足利本館' },
      { query: 'ハウステンボス 直営ホテル 長崎', fallback: 'ホテルアムステルダム', key: 'illumi_huistenbosch', label: '長崎県佐世保市ふるさと納税・1,300万球が輝く世界最大の光の王国「ハウステンボス」場内直営クラシックホテルアムステルダム' },
      { query: '札幌 大通公園 ホテル イルミネーション', fallback: '札幌グランドホテル', key: 'illumi_sapporo', label: '北海道札幌市ふるさと納税・冬の銀世界を彩る元祖イルミネーション「さっぽろホワイトイルミネーション」大通公園沿い札幌グランドホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-train-window-views-stay',
    queries: [
      { query: '長野 千曲 戸倉上山田温泉 姨捨', fallback: '戸倉上山田温泉　ホテル亀屋本店', key: 'train_obasute', label: '長野県千曲市ふるさと納税・日本三大車窓と棚田の月見名所「篠ノ井線姨捨駅・善光寺平パノラマ」美肌の湯・戸倉上山田温泉ホテル亀屋本店' },
      { query: '熊本 人吉 温泉 旅館', fallback: '人吉温泉　清流山水花　あゆの里', key: 'train_yatake', label: '熊本県人吉市ふるさと納税・矢岳越えの霧島連山ループ線絶景「肥薩線鉄道浪漫」球磨川の清流と人吉温泉清流山水花あゆの里' },
      { query: '北海道 富良野 新得 狩勝峠 トマム ホテル', fallback: '星野リゾート　トマム　ザ・タワー', key: 'train_karikachi', label: '北海道新得町・占冠村ふるさと納税・十勝平野を一望する雄大なる旧狩勝峠「根室本線大パノラマ」大自然リゾート星野リゾートトマムザ・タワー' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-castles-stay',
    queries: [
      { query: '高松 高松城 ホテル クレメント', fallback: 'ＪＲホテルクレメント高松', key: 'water_takamatsu', label: '香川県高松市ふるさと納税・瀬戸内海の海水を引き込んだ水城「高松城（玉藻公園）」玉藻港を望むJRホテルクレメント高松' },
      { query: '愛媛 今治 今治城 ホテル 今治国際ホテル', fallback: '今治国際ホテル', key: 'water_imabari', label: '愛媛県今治市ふるさと納税・藤堂高虎公が築いた海城・広大な海水堀「今治城」しまなみ海道の玄関口・今治国際ホテル' },
      { query: '大分 中津 中津城 ホテル グランプラザ中津ホテル', fallback: 'グランプラザ中津ホテル', key: 'water_nakatsu', label: '大分県中津市ふるさと納税・周防灘の河口に築かれた黒田官兵衛ゆかりの水城「中津城」福沢諭吉旧居とグランプラザ中津ホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 36 hotels using rakuten_api_helper.js...');
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
  console.log('Round 36 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
