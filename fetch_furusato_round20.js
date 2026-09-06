const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-illuminations-resort-stay',
    queries: [
      { query: 'あしかがフラワーパーク ホテル 栃木 足利', key: 'ashikaga_illumi', label: '栃木県足利市ふるさと納税・日本三大イルミネーションあしかがフラワーパーク光の花の庭ホテル' },
      { query: 'ハウステンボス ホテル 長崎 佐世保 温泉', key: 'huistenbosch_illumi', label: '長崎県佐世保市ふるさと納税・日本三大イルミネーション世界最大1300万球ハウステンボス直営宿' },
      { query: 'さっぽろ イルミネーション ホテル 札幌 北海道', key: 'sapporo_illumi', label: '北海道札幌市ふるさと納税・日本三大イルミネーションさっぽろホワイトイルミネーション展望宿' }
    ]
  },
  {
    slug: 'furusato-tax-kue-gourmet-luxury-fish-stay',
    queries: [
      { query: '南紀白浜 天然クエ 温泉 旅館 和歌山', key: 'shirahama_kue', label: '和歌山県白浜町ふるさと納税・幻の高級魚「天然クエ鍋」と白浜温泉オーシャン露天宿' },
      { query: '五島列島 クエ 旅館 長崎 ホテル', key: 'goto_kue', label: '長崎県五島市ふるさと納税・東シナ海が育む極上本クエ会席と五島列島リゾートステイ' },
      { query: '室戸 クエ 旅館 高知 温泉', key: 'muroto_kue', label: '高知県室戸市ふるさと納税・黒潮の荒波で育った天然クエ薄造りと海洋深層水スパ宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-bridges-heritage-stay',
    queries: [
      { query: '錦帯橋 温泉 旅館 山口 岩国', key: 'kintaikyo_bridge', label: '山口県岩国市ふるさと納税・日本三名橋錦帯橋の五連アーチを望む錦川清流温泉名宿' },
      { query: '長崎 眼鏡橋 ホテル 長崎市 観光', key: 'meganebashi_bridge', label: '長崎県長崎市ふるさと納税・日本三名橋長崎眼鏡橋と中島川散策・南蛮情緒クラシックホテル' },
      { query: '日本橋 東京 ホテル ラグジュアリー', key: 'nihonbashi_bridge', label: '東京都中央区ふるさと納税・五街道の起点・国指定重要文化財日本橋と江戸情緒ラグジュアリー' }
    ]
  },
  {
    slug: 'furusato-tax-open-air-bath-with-majestic-fuji-view-stay',
    queries: [
      { query: '河口湖 富士山 露天風呂 旅館 山梨', key: 'kawaguchiko_fuji', label: '山梨県富士河口湖町ふるさと納税・逆さ富士を一望する客室露天風呂と甲州ワイン牛会席宿' },
      { query: '日本平 富士山 ホテル 静岡 展望', key: 'nihondaira_fuji', label: '静岡県静岡市ふるさと納税・日本平山頂から富士山と駿河湾を望むパノラマリゾート' },
      { query: '箱根 芦ノ湖 富士山 温泉 旅館 神奈川', key: 'hakone_fuji', label: '神奈川県箱根町ふるさと納税・芦ノ湖越しに望む富士山パノラマ展望温泉宿' }
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
  console.log(`\nAll Round 20 hotels successfully stored into ${allSeasonalPath}`);
}

main();
