const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-rapids-river-activity-stay',
    queries: [
      { query: '最上川 温泉 旅館 山形', key: 'rapid_mogami', label: '山形県戸沢村・大蔵村ふるさと納税・日本三大急流最上川舟下りと芭蕉ゆかりの峡谷温泉宿' },
      { query: '下部温泉 富士川 旅館 山梨 身延', key: 'rapid_fuji', label: '山梨県身延町・富士川町ふるさと納税・日本三大急流富士川ラフティングと名湯下部温泉' },
      { query: '人吉温泉 球磨川 旅館 熊本', key: 'rapid_kuma', label: '熊本県人吉市ふるさと納税・日本三大急流球磨川下りと美肌の湯・球磨焼酎を味わう老舗温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-festivals-heritage-stay',
    queries: [
      { query: '飛騨高山 温泉 旅館 岐阜', key: 'festival_takayama', label: '岐阜県高山市ふるさと納税・日本三大美祭高山祭屋台の伝統美と飛騨牛・町家情緒の名宿' },
      { query: '秩父 温泉 旅館 埼玉', key: 'festival_chichibu', label: '埼玉県秩父市ふるさと納税・日本三大美祭秩父夜祭の勇壮な笠鉾と奥秩父の清流隠れ家温泉' },
      { query: '京都 祇園 旅館 四条', key: 'festival_kyoto', label: '京都府京都市東山区ふるさと納税・日本三大美祭京都祇園祭の伝統と石畳の路地に佇む京町家旅館' }
    ]
  },
  {
    slug: 'furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay',
    queries: [
      { query: '雫石温泉 短角牛 岩手', key: 'beef_tankaku', label: '岩手県久慈市・岩手町ふるさと納税・希少な「いわて短角牛」の濃厚赤身肉ステーキと奥羽の秘湯' },
      { query: '阿蘇 内牧温泉 あか牛 熊本', key: 'beef_akagyu_aso', label: '熊本県阿蘇市・南阿蘇村ふるさと納税・大自然の恵み「くまもとあか牛」の炭火焼きと大観峰の絶景温泉' },
      { query: '高知 温泉 あかうし 旅館', key: 'beef_tosa_aka', label: '高知県土佐町・大豊町ふるさと納税・年間数百頭しか出荷されない幻の和牛「土佐あかうし」と四国山地の隠れ宿' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-open-air-bath-observatory-stay',
    queries: [
      { query: '昼神温泉 星空 阿智村 長野', key: 'star_achi', label: '長野県阿智村ふるさと納税・環境省認定「日本一の星空」ナイトツアーと美肌の昼神温泉露天風呂宿' },
      { query: '美星町 星空 岡山 矢掛 温泉', key: 'star_bisei', label: '岡山県井原市美星町ふるさと納税・光害防止条例が守る満天の星と美星天文台・矢掛宿場町の名宿' },
      { query: '石垣島 リゾート 星空 沖縄 ホテル', key: 'star_ishigaki', label: '沖縄県石垣市ふるさと納税・国内初国際ダークスカイ認定「星空保護区」八重山諸島のラグジュアリーリゾート' }
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
        let hotels = await searchRakutenHotels(q.query, 3);
        if (!hotels || hotels.length === 0) {
          const simplified = q.query.split(' ').slice(0, 2).join(' ');
          console.log(`Retrying simplified query: "${simplified}" ...`);
          hotels = await searchRakutenHotels(simplified, 3);
        }

        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = {
            label: q.label,
            hotels: hotels
          };
          console.log(`-> SUCCESS: Found ${hotels.length} hotels for ${q.key}. Top hotel: ${hotels[0].hotelName}`);
        } else {
          console.warn(`-> WARNING: No hotels found for ${q.key}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching for ${q.key}:`, err.message);
      }
      await sleep(1500); // 楽天APIレート制限対策
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log(`\nAll Round 21 hotels successfully stored into ${allSeasonalPath}`);
}

main();
