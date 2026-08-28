const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nextHubs = [
  {
    hubSlug: 'shizuoka',
    name: '静岡・伊豆熱海',
    queries: [
      { key: 'atami_ryokan', query: '熱海 温泉 旅館 露天風呂', label: '熱海温泉・オーシャンビュー温泉旅館' },
      { key: 'izu_ryokan', query: '伊豆 露天風呂付き客室 旅館', label: '伊豆・客室露天風呂付き極上宿' },
      { key: 'shizuoka_hotel', query: '静岡駅 ホテル おすすめ', label: '静岡駅周辺・ビジネス観光ホテル' },
      { key: 'fuji_view', query: '富士山 見える ホテル 静岡', label: '富士山絶景ホテル・リゾート' }
    ]
  },
  {
    hubSlug: 'gunma',
    name: '群馬・草津伊香保',
    queries: [
      { key: 'kusatsu_ryokan', query: '草津温泉 旅館 湯畑', label: '草津温泉・湯畑周辺名湯旅館' },
      { key: 'ikaho_ryokan', query: '伊香保温泉 旅館 石段街', label: '伊香保温泉・石段街の風情ある宿' },
      { key: 'manza_minakami', query: 'みなかみ 温泉 旅館 露天風呂', label: '水上・万座温泉・絶景露天風呂宿' },
      { key: 'couple_ryokan', query: '群馬 温泉 露天風呂付き客室 カップル', label: 'カップル向け露天風呂付き客室' }
    ]
  },
  {
    hubSlug: 'nagano',
    name: '長野・軽井沢白馬',
    queries: [
      { key: 'karuizawa_hotel', query: '軽井沢 リゾートホテル おすすめ', label: '軽井沢・高原リゾートホテル' },
      { key: 'nagano_station', query: '長野駅 ホテル 善光寺', label: '長野駅・善光寺周辺ホテル' },
      { key: 'onsen_ryokan', query: '長野 温泉 旅館 露天風呂', label: '白骨・野沢・渋温泉 名湯旅館' },
      { key: 'hakuba_hotel', query: '白馬 リゾートホテル 絶景', label: '白馬・北アルプス絶景ホテル' }
    ]
  },
  {
    hubSlug: 'yamanashi',
    name: '山梨・富士五湖河口湖',
    queries: [
      { key: 'kawaguchiko_hotel', query: '河口湖 富士山 見える ホテル', label: '河口湖・富士山絶景ホテル' },
      { key: 'yamanakako_hotel', query: '山中湖 リゾートホテル 温泉', label: '山中湖・富士五湖リゾート宿' },
      { key: 'isawa_ryokan', query: '石和温泉 旅館 露天風呂', label: '石和温泉・名湯温泉旅館' },
      { key: 'couple_hotel', query: '山梨 露天風呂付き客室 カップル', label: 'カップル向け富士山展望客室宿' }
    ]
  },
  {
    hubSlug: 'hyogo',
    name: '兵庫・神戸有馬城崎',
    queries: [
      { key: 'kobe_hotel', query: '神戸 三宮 ホテル 夜景', label: '神戸・三宮・ベイエリア夜景ホテル' },
      { key: 'arima_ryokan', query: '有馬温泉 旅館 金湯 銀湯', label: '有馬温泉・金湯銀湯の老舗名湯宿' },
      { key: 'kinosaki_ryokan', query: '城崎温泉 旅館 外湯めぐり', label: '城崎温泉・外湯めぐり温泉旅館' },
      { key: 'awaji_resort', query: '淡路島 リゾートホテル オーシャンビュー', label: '淡路島・絶景リゾートホテル' }
    ]
  },
  {
    hubSlug: 'mie',
    name: '三重・伊勢志摩鳥羽',
    queries: [
      { key: 'ise_ryokan', query: '伊勢神宮 参拝 ホテル 旅館', label: '伊勢神宮参拝・おはらい町周辺宿' },
      { key: 'toba_ryokan', query: '鳥羽 温泉 旅館 海鮮 伊勢海老', label: '鳥羽温泉・伊勢海老海鮮自慢旅館' },
      { key: 'shima_resort', query: '志摩 リゾートホテル 英虞湾', label: '志摩・英虞湾絶景リゾートホテル' },
      { key: 'couple_hotel', query: '伊勢志摩 高級 露天風呂付き客室', label: 'カップル向け伊勢志摩高級客室宿' }
    ]
  },
  {
    hubSlug: 'kumamoto',
    name: '熊本・阿蘇黒川温泉',
    queries: [
      { key: 'kurokawa_ryokan', query: '黒川温泉 旅館 露天風呂 湯めぐり', label: '黒川温泉・入湯手形湯めぐり名宿' },
      { key: 'aso_hotel', query: '阿蘇 リゾートホテル 温泉 絶景', label: '阿蘇・カルデラ大自然リゾート宿' },
      { key: 'kumamoto_station', query: '熊本駅 ホテル 熊本城', label: '熊本駅・熊本城周辺ホテル' },
      { key: 'couple_ryokan', query: '黒川温泉 露天風呂付き客室 離れ', label: '黒川温泉・隠れ家離れ露天風呂宿' }
    ]
  },
  {
    hubSlug: 'aichi',
    name: '愛知・名古屋',
    queries: [
      { key: 'nagoya_station', query: '名古屋駅 ホテル おすすめ', label: '名古屋駅直結・徒歩圏内ホテル' },
      { key: 'sakae_hotel', query: '栄 ホテル 名古屋 グルメ', label: '栄・繁華街グルメ観光拠点ホテル' },
      { key: 'breakfast_hotel', query: '名古屋 朝食 名古屋めし ホテル', label: '名古屋めし朝食バイキングが絶品の宿' },
      { key: 'chita_ryokan', query: '知多半島 南知多 温泉 旅館 海鮮', label: '知多半島・海鮮＆絶景温泉旅館' }
    ]
  },
  {
    hubSlug: 'hiroshima',
    name: '広島・宮島尾道',
    queries: [
      { key: 'miyajima_ryokan', query: '宮島 旅館 厳島神社 温泉', label: '宮島・厳島神社周辺の老舗温泉宿' },
      { key: 'hiroshima_station', query: '広島駅 ホテル おすすめ', label: '広島駅周辺・アクセス抜群ホテル' },
      { key: 'onomichi_hotel', query: '尾道 ホテル しまなみ海道', label: '尾道・しまなみ海道絶景ホテル' },
      { key: 'couple_ryokan', query: '宮島 露天風呂付き客室 海 見える', label: '宮島・瀬戸内海一望の極上客室宿' }
    ]
  },
  {
    hubSlug: 'nara',
    name: '奈良',
    queries: [
      { key: 'nara_station', query: '奈良駅 ホテル 奈良公園', label: '奈良駅・奈良公園周辺ホテル' },
      { key: 'nara_ryokan', query: '奈良 旅館 和風 庭園', label: '古都奈良の風情ある老舗旅館' },
      { key: 'asuka_hotel', query: '橿原 飛鳥 ホテル 温泉', label: '飛鳥・吉野・橿原の温泉ホテル' },
      { key: 'couple_hotel', query: '奈良 ホテル おしゃれ カップル', label: 'カップル向け古都デザイナーズ宿' }
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

  for (const target of nextHubs) {
    console.log(`\n--- Fetching Target Hub: ${target.name} (${target.hubSlug}) ---`);
    allResults[target.hubSlug] = {};

    for (const q of target.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      let hotels = [];
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await sleep(1300); // 1.3s interval strictly adhering to 1 req/sec limit
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
  console.log(`\n Successfully updated all 10 new hubs in: ${filePath}`);
}

main().catch(console.error);
