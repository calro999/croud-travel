const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    hubSlug: 'okinawa',
    name: '沖縄',
    queries: [
      { key: 'naha_hotel', query: '那覇 国際通り ホテル', label: '那覇・国際通り周辺ホテル' },
      { key: 'resort_hotel', query: '沖縄 リゾートホテル ビーチ', label: '恩納村・北部 絶景ビーチリゾート' },
      { key: 'couple_hotel', query: '沖縄 オーシャンビュー 高級ホテル', label: 'カップル向けオーシャンビューホテル' },
      { key: 'family_hotel', query: '沖縄 子連れ プール ホテル', label: '子連れ・ファミリー向けプール付きホテル' },
      { key: 'breakfast_hotel', query: '沖縄 朝食 美味しい ホテル', label: '朝食バイキングが人気のホテル' }
    ]
  },
  {
    hubSlug: 'hokkaido',
    name: '北海道',
    queries: [
      { key: 'sapporo_hotel', query: '札幌駅 ホテル おすすめ', label: '札幌駅・大通周辺ホテル' },
      { key: 'onsen_hotel', query: '登別温泉 旅館 露天風呂', label: '登別・定山渓・洞爺湖 温泉旅館' },
      { key: 'hakodate_hotel', query: '函館 朝食 美味しい ホテル', label: '函館・小樽 海鮮＆朝食が美味しいホテル' },
      { key: 'couple_hotel', query: '北海道 高級 温泉旅館 カップル', label: 'カップル・記念日向け温泉宿' },
      { key: 'family_hotel', query: '北海道 子連れ ファミリー ホテル', label: '子連れ・ファミリゾートホテル' }
    ]
  },
  {
    hubSlug: 'tokyo',
    name: '東京',
    queries: [
      { key: 'station_hotel', query: '東京駅 ホテル おすすめ', label: '東京駅・銀座 周辺ホテル' },
      { key: 'shinjuku_shibuya', query: '新宿 渋谷 ホテル', label: '新宿・渋谷・観光拠点ホテル' },
      { key: 'night_view', query: '東京 夜景 高級ホテル カップル', label: 'カップル向け高層階夜景ホテル' },
      { key: 'breakfast_hotel', query: '東京 ホテル 朝食 ビュッフェ', label: '朝食ビュッフェが絶品のホテル' },
      { key: 'family_hotel', query: '東京 ディズニー パートナーホテル 子連れ', label: '子連れ・ファミリー向けホテル' }
    ]
  },
  {
    hubSlug: 'osaka',
    name: '大阪',
    queries: [
      { key: 'station_hotel', query: '大阪駅 梅田 ホテル', label: '大阪・梅田駅周辺ホテル' },
      { key: 'namba_hotel', query: 'なんば 心斎橋 ホテル', label: '難波・道頓堀 観光拠点ホテル' },
      { key: 'usj_hotel', query: 'USJ オフィシャルホテル 子連れ', label: 'USJ・ベイエリア周辺ホテル' },
      { key: 'couple_hotel', query: '大阪 夜景 ホテル カップル', label: 'カップル向け夜景＆おしゃれホテル' },
      { key: 'breakfast_hotel', query: '大阪 朝食 美味しい ホテル', label: '朝食が美味しいおすすめホテル' }
    ]
  },
  {
    hubSlug: 'fukuoka',
    name: '福岡',
    queries: [
      { key: 'hakata_hotel', query: '博多駅 ホテル おすすめ', label: '博多駅直結・徒歩圏内ホテル' },
      { key: 'tenjin_hotel', query: '天神 中洲 屋台 ホテル', label: '天神・中洲 グルメ観光拠点ホテル' },
      { key: 'onsen_hotel', query: '福岡 温泉旅館 露天風呂', label: '原鶴温泉・二日市温泉・名湯宿' },
      { key: 'couple_hotel', query: '福岡 ホテル おしゃれ カップル', label: 'カップル向けデザイナーズホテル' },
      { key: 'breakfast_hotel', query: '博多 朝食 明太子 ホテル', label: '明太子・博多名物が並ぶ朝食付きホテル' }
    ]
  },
  {
    hubSlug: 'hakone',
    name: '箱根',
    queries: [
      { key: 'yumoto_ryokan', query: '箱根湯本 温泉 旅館', label: '箱根湯本・駅チカ温泉旅館' },
      { key: 'gora_ryokan', query: '箱根 強羅 露天風呂付き客室', label: '強羅・仙石原 露天風呂付き客室' },
      { key: 'couple_ryokan', query: '箱根 温泉 カップル 記念日', label: 'カップル・記念日向け高級温泉宿' },
      { key: 'family_ryokan', query: '箱根 子連れ 部屋食 温泉', label: '子連れ・部屋食対応ファミリー温泉旅館' },
      { key: 'ashi_hotel', query: '芦ノ湖 富士山 絶景 ホテル', label: '芦ノ湖・富士山絶景リゾートホテル' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for all major hubs ===');
  const allResults = {};

  for (const target of targets) {
    console.log(`\n--- Fetching Target Hub: ${target.name} (${target.hubSlug}) ---`);
    allResults[target.hubSlug] = {};

    for (const q of target.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      let hotels = [];
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await sleep(1300); // 1.3s interval to strictly follow 1 req/sec rate limit
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

  const outPath = path.join(__dirname, 'src', 'data', 'all_hubs_rakuten_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(allResults, null, 2), 'utf8');
  console.log(`\n Successfully saved all direct Rakuten API data to: ${outPath}`);
}

main().catch(console.error);
