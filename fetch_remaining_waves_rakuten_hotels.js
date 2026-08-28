const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nextWaveHubs = [
  {
    hubSlug: 'nagasaki',
    name: '長崎',
    queries: [
      { key: 'nagasaki_station', query: '長崎駅 ホテル 夜景', label: '長崎駅・稲佐山夜景ホテル' },
      { key: 'huistenbosch', query: 'ハウステンボス オフィシャルホテル', label: 'ハウステンボス周辺ホテル' },
      { key: 'unzen_ryokan', query: '雲仙温泉 旅館 露天風呂', label: '雲仙・小浜温泉 名湯旅館' },
      { key: 'breakfast_hotel', query: '長崎 ホテル 朝食 皿うどん', label: '長崎名物朝食バイキング宿' }
    ]
  },
  {
    hubSlug: 'kagoshima',
    name: '鹿児島',
    queries: [
      { key: 'kagoshima_station', query: '鹿児島中央駅 ホテル 桜島', label: '鹿児島中央駅・桜島ビューホテル' },
      { key: 'ibusuki_ryokan', query: '指宿温泉 砂むし温泉 旅館', label: '指宿温泉・砂むし名湯宿' },
      { key: 'kirishima_ryokan', query: '霧島温泉 旅館 露天風呂', label: '霧島温泉・絶景露天風呂旅館' },
      { key: 'yakushima_hotel', query: '屋久島 リゾートホテル 温泉', label: '屋久島・大自然リゾート宿' }
    ]
  },
  {
    hubSlug: 'oita',
    name: '大分・別府由布院',
    queries: [
      { key: 'beppu_ryokan', query: '別府温泉 旅館 露天風呂 地獄めぐり', label: '別府温泉・地獄めぐり名湯宿' },
      { key: 'yufuin_ryokan', query: '由布院 温泉 旅館 露天風呂付き客室', label: '由布院・金鱗湖露天風呂付き客室' },
      { key: 'oita_station', query: '大分駅 ホテル 温泉', label: '大分駅直結・天然温泉付きホテル' },
      { key: 'couple_ryokan', query: '由布院 高級 温泉旅館 カップル', label: 'カップル向け由布院離れ温泉宿' }
    ]
  },
  {
    hubSlug: 'miyagi',
    name: '宮城・仙台松島',
    queries: [
      { key: 'sendai_station', query: '仙台駅 ホテル おすすめ', label: '仙台駅直結・牛たんグルメ拠点宿' },
      { key: 'matsushima_hotel', query: '松島 温泉 ホテル オーシャンビュー', label: '日本三景松島・絶景温泉ホテル' },
      { key: 'akiu_ryokan', query: '秋保温泉 旅館 露天風呂', label: '仙台奥座敷・秋保温泉名湯旅館' },
      { key: 'breakfast_hotel', query: '仙台 ホテル 朝食 牛たん', label: '牛たん・笹かま朝食ビュッフェ宿' }
    ]
  },
  {
    hubSlug: 'tochigi',
    name: '栃木・日光那須',
    queries: [
      { key: 'nikko_hotel', query: '日光東照宮 ホテル 温泉 旅館', label: '世界遺産日光東照宮・鬼怒川温泉宿' },
      { key: 'nasu_resort', query: '那須 高原 リゾートホテル 温泉', label: '那須高原・ファミリー＆カップルリゾート' },
      { key: 'kinugawa_ryokan', query: '鬼怒川温泉 旅館 露天風呂 渓谷', label: '鬼怒川温泉・絶景渓谷露天風呂宿' },
      { key: 'couple_ryokan', query: '那須 露天風呂付き客室 旅館 カップル', label: '那須・客室露天風呂付き極上隠れ宿' }
    ]
  },
  {
    hubSlug: 'niigata',
    name: '新潟・越後湯沢佐渡',
    queries: [
      { key: 'niigata_station', query: '新潟駅 ホテル おすすめ 海鮮', label: '新潟駅周辺・地酒海鮮グルメ宿' },
      { key: 'yuzawa_ryokan', query: '越後湯沢 温泉 旅館 露天風呂', label: '越後湯沢・名湯温泉旅館' },
      { key: 'tsukioka_ryokan', query: '月岡温泉 旅館 露天風呂 美肌', label: '月岡温泉・エメラルドグリーン美肌の湯' },
      { key: 'sado_hotel', query: '佐渡島 ホテル 温泉 絶景', label: '佐渡島・日本海夕日絶景宿' }
    ]
  },
  {
    hubSlug: 'ishikawa',
    name: '石川・金沢能登加賀',
    queries: [
      { key: 'kanazawa_station', query: '金沢駅 ホテル おすすめ', label: '金沢駅周辺・アクセス抜群ホテル' },
      { key: 'wakura_ryokan', query: '和倉温泉 旅館 露天風呂', label: '能登・和倉温泉オーシャンビュー宿' },
      { key: 'kaga_ryokan', query: '加賀温泉 旅館 山代 山中 粟津', label: '加賀温泉郷・名湯老舗旅館' },
      { key: 'breakfast_hotel', query: '金沢 ホテル 朝食 のどぐろ 海鮮', label: '海鮮・のどぐろ朝食バイキング宿' }
    ]
  },
  {
    hubSlug: 'kagawa',
    name: '香川・高松小豆島',
    queries: [
      { key: 'takamatsu_station', query: '高松駅 ホテル うどん', label: '高松駅・讃岐うどん巡り拠点宿' },
      { key: 'shodoshima_resort', query: '小豆島 リゾートホテル 温泉 オーシャンビュー', label: '小豆島・瀬戸内海オーシャンビュー宿' },
      { key: 'kotohira_ryokan', query: 'こんぴら 温泉 旅館 金刀比羅宮', label: 'ことひら温泉・金刀比羅宮参道宿' },
      { key: 'couple_hotel', query: '香川 露天風呂付き客室 カップル', label: 'カップル向け瀬戸内海絶景客室宿' }
    ]
  },
  {
    hubSlug: 'ehime',
    name: '愛媛・松山道後温泉',
    queries: [
      { key: 'dogo_ryokan', query: '道後温泉 旅館 露天風呂 本館', label: '日本最古の名湯・道後温泉旅館' },
      { key: 'matsuyama_station', query: '松山市駅 ホテル おすすめ', label: '松山市街・松山城周辺ホテル' },
      { key: 'shimanami_hotel', query: '今治 しまなみ海道 ホテル 絶景', label: 'しまなみ海道・来島海峡大橋展望宿' },
      { key: 'couple_ryokan', query: '道後温泉 露天風呂付き客室 旅館', label: '道後温泉・極上露天風呂付き客室宿' }
    ]
  },
  {
    hubSlug: 'wakayama',
    name: '和歌山・白浜那智勝浦',
    queries: [
      { key: 'shirahama_hotel', query: '白浜温泉 ホテル オーシャンビュー 白良浜', label: '白浜温泉・白良浜ビーチリゾート' },
      { key: 'katsuura_ryokan', query: '勝浦温泉 旅館 洞窟風呂 露天風呂', label: '那智勝浦・天然洞窟温泉旅館' },
      { key: 'koyasan_shukubo', query: '高野山 宿坊 温泉 精進料理', label: '世界遺産高野山・伝統宿坊体験' },
      { key: 'couple_hotel', query: '白浜 露天風呂付き客室 オーシャンビュー', label: '白浜・太平洋一望の客室露天風呂宿' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for next 10 major hubs ===');
  const filePath = path.join(__dirname, 'src', 'data', 'all_hubs_rakuten_hotels.json');
  let allResults = {};
  if (fs.existsSync(filePath)) {
    allResults = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  for (const target of nextWaveHubs) {
    console.log(`\n--- Fetching Target Hub: ${target.name} (${target.hubSlug}) ---`);
    allResults[target.hubSlug] = {};

    for (const q of target.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      let hotels = [];
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await sleep(1300); // 1.3s interval strictly adhering to rate limit
          const res = await searchRakutenHotels(q.query, 6);
          if (res && res.length > 0) {
            hotels = res;
            break;
          }
        } catch (err) {
          console.warn(` Attempt ${attempt + 1} failed: ${err.message}`);
          await sleep(1500);
        }
      }
      console.log(` -> Retrieved ${hotels.length} hotels.`);
      allResults[target.hubSlug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels
      };
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(allResults, null, 2), 'utf8');
  console.log(`\n Successfully updated all next-wave hubs in: ${filePath}`);
}

main().catch(console.error);
