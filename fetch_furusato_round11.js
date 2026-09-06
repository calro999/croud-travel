const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-secluded-canyon-isolated-onsen-stay',
    queries: [
      { query: '黒部峡谷 温泉 旅館 富山 宇奈月', key: 'kurobe_canyon', label: '富山県黒部市ふるさと納税・黒部峡谷鉄道と大自然の秘境峡谷一軒宿' },
      { query: '祖谷 温泉 旅館 徳島 秘境 かずら橋', key: 'iya_canyon', label: '徳島県三好市ふるさと納税・日本三大秘境祖谷渓谷の絶景ケーブルカー露天風呂' },
      { query: '夏油温泉 旅館 岩手 秘湯', key: 'geto_canyon', label: '岩手県北上市ふるさと納税・ブナ原生林に抱かれる栗駒国定公園・名湯夏油温泉' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay',
    queries: [
      { query: '長崎 稲佐山 夜景 ホテル 長崎県', key: 'nagasaki_nightview', label: '長崎県長崎市ふるさと納税・世界新三大夜景稲佐山から見下ろす1000万ドルのパノラマ' },
      { query: '神戸 六甲山 夜景 ホテル 兵庫', key: 'kobe_nightview', label: '兵庫県神戸市ふるさと納税・日本三大夜景六甲山テラス＆百万ドルの夜景リゾート' },
      { query: '函館山 夜景 ホテル 北海道 函館', key: 'hakodate_nightview', label: '北海道函館市ふるさと納税・函館山ロープウェイ至近＆きらめく津軽海峡夜景ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-riverside-kawadoko-cooling-inn-stay',
    queries: [
      { query: '京都 貴船 川床 料理 旅館', key: 'kibune_kawadoko', label: '京都府京都市ふるさと納税・貴船神社門前・清流のせせらぎに浮かぶ川床会席宿' },
      { query: '四万十川 川沿い ホテル 高知 温泉', key: 'shimanto_kawadoko', label: '高知県四万十市ふるさと納税・日本最後の清流四万十川の天然鮎とカヌーリゾート' },
      { query: '新潟 岩室温泉 旅館 新潟市', key: 'iwamuro_kawadoko', label: '新潟県新潟市ふるさと納税・越後平野の奥座敷・清流と庭園が織りなす開湯300年の老舗宿' }
    ]
  },
  {
    slug: 'furusato-tax-kura-sauna-private-villa-charter-stay',
    queries: [
      { query: '長野 信濃町 サウナ 貸切 コテージ', key: 'shinano_sauna_villa', label: '長野県信濃町ふるさと納税・野尻湖畔の森に佇むフィンランドサウナ付き一棟貸しヴィラ' },
      { query: '山梨 サウナ 一棟貸し ヴィラ 八ヶ岳', key: 'yatsugatake_sauna_villa', label: '山梨県北杜市ふるさと納税・八ヶ岳南麓のプライベート薪ストーブサウナ＆天然水風呂' },
      { query: '丹波篠山 古民家 一棟貸し 兵庫 宿泊', key: 'sasayama_sauna_villa', label: '兵庫県丹波篠山市ふるさと納税・築百年の土蔵再生一棟貸し＆完全プライベートリトリート' }
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
  console.log(`\nAll Round 11 hotels successfully stored into ${allSeasonalPath}`);
}

main();
