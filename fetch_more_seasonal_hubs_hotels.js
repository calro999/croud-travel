const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const seasonalThemes = [
  {
    themeSlug: 'spring-cherry-blossoms',
    title: '全国の桜・お花見絶景宿特集',
    queries: [
      { key: 'kyoto_sakura', query: '京都 桜 温泉 旅館 露天風呂', label: '京都・祇園嵐山（古都の桜絶景宿）' },
      { key: 'izu_kawazu', query: '河津桜 温泉 旅館 露天風呂 伊豆', label: '静岡・伊豆河津（早咲き河津桜宿）' },
      { key: 'yoshino_sakura', query: '吉野山 桜 旅館 温泉 奈良', label: '奈良・吉野山（一目千本桜の名宿）' },
      { key: 'hirosaki_sakura', query: '弘前 桜 ホテル 青森 温泉', label: '青森・弘前公園（日本一の桜回廊宿）' }
    ]
  },
  {
    themeSlug: 'winter-crab-gourmet',
    title: '冬のカニ食べ尽くし＆雪見温泉旅館特集',
    queries: [
      { key: 'kinosaki_crab', query: '城崎温泉 カニ 旅館 露天風呂', label: '兵庫・城崎温泉（松葉ガニと外湯めぐり）' },
      { key: 'echizen_crab', query: '越前ガニ 温泉 旅館 露天風呂 福井', label: '福井・越前三国（本場越前ガニ宿）' },
      { key: 'hokuriku_crab', query: '加賀温泉 カニ 旅館 石川 露天風呂', label: '石川・加賀山中（ズワイガニ会席宿）' },
      { key: 'tottori_crab', query: '皆生温泉 カニ 旅館 鳥取 露天風呂', label: '山陰・皆生温泉（鳥取松葉ガニと美肌温泉）' }
    ]
  },
  {
    themeSlug: 'summer-infinity-pool',
    title: '夏の絶景インフィニティプール＆オーシャンビューリゾート',
    queries: [
      { key: 'okinawa_pool', query: '沖縄 恩納村 プール ホテル リゾート', label: '沖縄・恩納村（ビーチ直結＆屋外プール）' },
      { key: 'ishigaki_pool', query: '石垣島 リゾートホテル プール 温泉', label: '沖縄・石垣島宮古島（極上プライベートプール）' },
      { key: 'shirahama_pool', query: '白浜温泉 ホテル プール オーシャンビュー', label: '和歌山・白浜（白良浜一望プール宿）' },
      { key: 'shonan_chiba_pool', query: '木更津 鴨川 ホテル プール 温泉', label: '関東近郊・房総鴨川（オーシャンビュープール宿）' }
    ]
  },
  {
    themeSlug: 'winter-snow-onsen',
    title: '冬の白銀雪見露天風呂＆極上秘湯旅館',
    queries: [
      { key: 'ginzan_snow', query: '銀山温泉 旅館 露天風呂 雪見', label: '山形・銀山温泉（大正ロマンの雪景色宿）' },
      { key: 'kusatsu_snow', query: '草津温泉 旅館 露天風呂 湯畑 雪見', label: '群馬・草津温泉（湯けむり雪見名湯宿）' },
      { key: 'noboribetsu_snow', query: '登別温泉 旅館 露天風呂 北海道 雪見', label: '北海道・登別定山渓（白銀雪見大浴場）' },
      { key: 'zao_snow', query: '蔵王温泉 旅館 露天風呂 樹氷', label: '宮城山形・蔵王温泉（樹氷と強酸性美肌湯）' }
    ]
  },
  {
    themeSlug: 'anniversary-luxury-suite',
    title: '誕生日・記念日・特別な日に泊まりたい極上宿',
    queries: [
      { key: 'hakone_luxury', query: '箱根 高級 温泉旅館 露天風呂付き客室 記念日', label: '神奈川・箱根（客室露天風呂付き極上離れ）' },
      { key: 'izu_luxury', query: '伊豆 高級 旅館 露天風呂付き客室 カップル', label: '静岡・伊豆修善寺（大人の記念日隠れ家宿）' },
      { key: 'kyoto_luxury', query: '京都 高級 ホテル 旅館 記念日 朝食', label: '京都・東山祇園（極上ラグジュアリーホテル）' },
      { key: 'tokyo_luxury', query: '東京 高級 ホテル 夜景 クラブラウンジ', label: '東京・高層階クラブラウンジ付きホテル' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Seasonal Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of seasonalThemes) {
    console.log(`\n========================================`);
    console.log(`Theme: ${theme.title} (${theme.themeSlug})`);
    console.log(`========================================`);
    if (!results[theme.themeSlug]) results[theme.themeSlug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300); // Respect rate limit
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
          // fallback
          await sleep(1300);
          const fbQuery = q.query.split(' ').slice(0, 3).join(' ');
          hotels = await searchRakutenHotels(fbQuery, 4);
        }
      } catch (err) {
        console.warn(` Query failed: ${err.message}`);
      }
      console.log(` -> Retrieved ${hotels ? hotels.length : 0} hotels directly from Rakuten API.`);
      results[theme.themeSlug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all 5 seasonal themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
