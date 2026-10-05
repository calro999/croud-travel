const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-themepark-aquarium-family-hotel-stay',
    queries: [
      { key: 'kamogawa_seaworld', query: '鴨川シーワールド 千葉 ホテル', label: '千葉県鴨川市ふるさと納税・鴨川シーワールド直結＆パスポート付き宿' },
      { query: '白浜 アドベンチャーワールド 和歌山 ホテル', key: 'shirahama_adventure', label: '和歌山県白浜町ふるさと納税・アドベンチャーワールド公認リゾート' },
      { query: 'ハイランドリゾート 富士吉田 ホテル', key: 'fujikyu_highland', label: '山梨県富士吉田市ふるさと納税・富士急ハイランド優先入園＆富士山ビュー' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-astronomy-retreat-stay',
    queries: [
      { query: '阿智村 昼神温泉 星空 長野 旅館', key: 'achi_starry_sky', label: '長野県阿智村ふるさと納税・日本一の星空ナイトツアーと昼神美肌湯' },
      { query: '清里高原 星空 ホテル 山梨 八ヶ岳', key: 'kiyosato_starry_sky', label: '山梨県北杜市ふるさと納税・八ヶ岳南麓の星空観測テラス＆天体望遠鏡リゾート' },
      { query: '大山 星空 リゾート 鳥取 伯耆町 ホテル', key: 'daisen_starry_sky', label: '鳥取県伯耆町ふるさと納税・星取県大山山麓の満天星空＆天然温泉リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay',
    queries: [
      { query: 'ラビスタ函館ベイ 北海道 函館 ホテル', key: 'hakodate_breakfast', label: '北海道函館市ふるさと納税・朝食日本一いくら盛り放題＆赤レンガ倉庫' },
      { query: '神戸ベイシェラトン 兵庫 神戸 ホテル', key: 'kobe_breakfast', label: '兵庫県神戸市ふるさと納税・地産地消ホテルビュッフェ＆自家源泉天然温泉' },
      { query: '金沢 白鳥路 ホテル 山楽 石川', key: 'kanazawa_breakfast', label: '石川県金沢市ふるさと納税・金沢じわもん朝食会席＆兼六園至近クラシックホテル' }
    ]
  },
  {
    slug: 'furusato-tax-waterfall-river-gorge-healing-onsen-stay',
    queries: [
      { query: '奥入瀬渓流 ホテル 青森 温泉', key: 'oirase_gorge_onsen', label: '青森県十和田市ふるさと納税・奥入瀬渓流沿いの露天風呂＆大自然ヒーリング' },
      { query: '天城 湯ヶ島 温泉 旅館 静岡', key: 'amagiyugashima_gorge_onsen', label: '静岡県伊豆市ふるさと納税・狩野川渓流と滝を望む文豪ゆかりの名湯' },
      { query: '作並温泉 一の坊 宮城 旅館', key: 'sakunami_gorge_onsen', label: '宮城県仙台市ふるさと納税・広瀬川渓流沿いの広大露天風呂＆オールインクルーシブ' }
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
  console.log(`\nAll Round 7 hotels successfully stored into ${allSeasonalPath}`);
}

main();
