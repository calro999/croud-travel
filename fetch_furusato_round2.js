const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-generation-family-luxury-stay',
    queries: [
      { key: 'atami_family_luxury', query: '熱海 離れ 露天風呂 客室 静岡 温泉', label: '熱海市ふるさと納税・3世代で寛ぐ客室露天風呂＆離れ宿' },
      { key: 'shirahama_family_resort', query: '白浜 温泉 リゾート 家族 和歌山 露天風呂', label: '白浜町ふるさと納税・アドベンチャーワールド周辺の絶景温泉リゾート' },
      { key: 'nasu_family_connect', query: '那須高原 温泉 家族 栃木 ホテル リゾート', label: '那須町ふるさと納税・那須連山を望む広々ファミリールーム宿' }
    ]
  },
  {
    slug: 'furusato-tax-ski-snowboard-slope-resort-stay',
    queries: [
      { key: 'niseko_ski_resort', query: 'ニセコ スキー 温泉 リゾート ホテル 北海道', label: '倶知安町・ニセコ町ふるさと納税・世界最高峰パウダースノー直結リゾート' },
      { key: 'hakuba_slope_hotel', query: '白馬 スキー場 直結 ホテル 温泉 長野', label: '白馬村ふるさと納税・白馬八方尾根ゲレンデサイド温泉ホテル' },
      { key: 'echigoyuzawa_ski_hotel', query: '越後湯沢 スキー 温泉 ホテル 新潟 ゲレンデ', label: '湯沢町ふるさと納税・新幹線直結＆ファミリーゲレンデ温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
    queries: [
      { key: 'hakone_anniversary_luxury', query: '箱根 高級 露天風呂 スイート 記念日 神奈川 旅館', label: '箱根町ふるさと納税・一生の思い出を刻む強羅・仙石原の高級スイート' },
      { key: 'kyoto_anniversary_villa', query: '京都 高級 旅館 嵐山 記念日 スイート', label: '京都市ふるさと納税・古都の風情に包まれる嵐山・東山のラグジュアリー宿' },
      { key: 'okinawa_pool_villa', query: '恩納村 プライベートプール ヴィラ 高級 リゾート 沖縄', label: '恩納村ふるさと納税・青い海とプライベートプール付き絶景ヴィラ' }
    ]
  },
  {
    slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
    queries: [
      { key: 'yuzawa_walk_onsen', query: '越後湯沢駅 徒歩 温泉 旅館 新潟', label: '湯沢町ふるさと納税・新幹線改札から徒歩すぐの源泉かけ流し名宿' },
      { key: 'atami_walk_onsen', query: '熱海駅 徒歩 温泉 旅館 静岡', label: '熱海市ふるさと納税・東京から45分！熱海駅徒歩圏内の海望む湯宿' },
      { key: 'kaga_shinkansen_onsen', query: '加賀温泉 送迎 温泉 旅館 山代 山中 石川', label: '加賀市ふるさと納税・北陸新幹線加賀温泉駅から直行の名湯旅館' }
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
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all round 2 furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
