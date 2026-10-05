const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-beautiful-ports-stay',
    queries: [
      { query: '静岡 清水港 富士山 ホテル 日本平ホテル', fallback: '日本平ホテル', key: 'port_shimizu', label: '静岡県静岡市清水区ふるさと納税・富士山を望む日本屈指の美港「清水港」駿河湾マグロと風景美術館日本平ホテル' },
      { query: '長崎 長崎港 ホテル 夜景 ホテルニュー長崎', fallback: 'ホテルニュー長崎', key: 'port_nagasaki', label: '長崎県長崎市ふるさと納税・すり鉢状の地形が描く世界新三大夜景の天然美港「長崎港」出島とホテルニュー長崎' },
      { query: '神戸 神戸港 メリケンパーク ホテル', fallback: '神戸メリケンパークオリエンタルホテル', key: 'port_kobe', label: '兵庫県神戸市中央区ふるさと納税・開港150年のハイカラ文化薫る国際港「神戸港」汽笛と神戸メリケンパークオリエンタルホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-mountain-castles-stay',
    queries: [
      { query: '奈良 高取 高取城 橿原 ホテル', fallback: 'カンデオホテルズ奈良橿原', key: 'castle_takatori', label: '奈良県高取町・橿原市ふるさと納税・日本一の比高390mを誇る難攻不落の山城「大和高取城」スカイスパとカンデオホテルズ奈良橿原' },
      { query: '岐阜 恵那 岩村城 恵那峡 温泉 旅館', fallback: '恵那峡温泉　ホテル花更紗', key: 'castle_iwamura', label: '岐阜県恵那市ふるさと納税・標高717mの日本一高い山城・女城主の悲話「美濃岩村城」美肌温泉と恵那峡温泉ホテル花更紗' },
      { query: '岡山 高梁 備中松山城 ホテル', fallback: '備中高梁駅前観光ホテル', key: 'castle_bitchumatsuyama', label: '岡山県高梁市ふるさと納税・現存12天守で唯一の山城・天空の山城「備中松山城」雲海パノラマと備中高梁ホテルステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-somen-noodles-stay',
    queries: [
      { query: '奈良 桜井 三輪そうめん 旅館 ホテル', fallback: '大和橿原シティホテル', key: 'somen_miwa', label: '奈良県桜井市ふるさと納税・手延べそうめん発祥の地・極細のコシ「三輪そうめん」大神神社参拝と大和の古都ステイ' },
      { query: '兵庫 たつの 揖保乃糸 龍野 旅館 ホテル', fallback: 'ホテルシーショアリゾート', key: 'somen_ibonoito', label: '兵庫県たつの市ふるさと納税・清流揖保川が育んだ日本を代表する最高峰「播州手延そうめん揖保乃糸」播磨灘リゾートステイ' },
      { query: '香川 小豆島 そうめん リゾート ホテル', fallback: 'リゾートホテルオリビアン小豆島', key: 'somen_shodoshima', label: '香川県小豆島町・土庄町ふるさと納税・ごま油が香る400年の手延べ伝統「小豆島そうめん」瀬戸内海の夕日とオリビアン小豆島' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-stalactite-caves-stay',
    queries: [
      { query: '福島 あぶくま洞 郡山 磐梯熱海 温泉 旅館', fallback: '磐梯熱海温泉　ホテル華の湯', key: 'cave_abukuma', label: '福島県田村市ふるさと納税・東洋一の鍾乳石の種類を誇る地底宮殿「あぶくま洞」三十種類の湯巡り磐梯熱海温泉ホテル華の湯' },
      { query: '沖縄 南城 玉泉洞 リゾート ホテル 温泉', fallback: 'ユインチホテル南城', key: 'cave_gyokusendo', label: '沖縄県南城市ふるさと納税・東洋で最も美しい鍾乳洞・30万年の時が創った100万本「玉泉洞」天然温泉ユインチホテル南城' },
      { query: '岡山 新見 井倉洞 温泉 旅館 ホテル', fallback: '新見グランドホテル', key: 'cave_ikurado', label: '岡山県新見市ふるさと納税・高さ240mの石灰岩断崖と地底滝の巨大洞窟「井倉洞」千屋牛と新見グランドホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 41 hotels using rakuten_api_helper.js...');
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
  console.log('Round 41 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
