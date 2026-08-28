const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const themes = [
  {
    themeSlug: 'winter-hot-pot-gourmet',
    title: '全国のご当地あったか鍋料理＆温泉旅館特集',
    queries: [
      { key: 'akita_kiritanpo', query: '秋田 きりたんぽ 温泉 旅館 比内地鶏', label: '秋田・大館乳頭（本場比内地鶏きりたんぽ鍋）' },
      { key: 'fukuoka_mizutaki', query: '博多 水炊き もつ鍋 ホテル 温泉', label: '福岡・博多（濃厚鶏白湯水炊き＆牛もつ鍋）' },
      { key: 'ibaraki_anko', query: '大洗 温泉 旅館 あんこう鍋 露天風呂', label: '茨城・大洗大津港（冬の絶品どぶ汁あんこう鍋）' },
      { key: 'yamaguchi_fugu', query: '下関 ふぐ 温泉 旅館 露天風呂', label: '山口・下関長門（本場とらふぐフルコース＆名湯）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-sea-of-clouds',
    title: '天空の絶景・雲海テラス＆展望露天風呂の宿特集',
    queries: [
      { key: 'takeda_castle', query: '竹田城 雲海 温泉 旅館 兵庫', label: '兵庫・竹田城跡（天空の城を望む雲海宿）' },
      { key: 'chichibu_clouds', query: '秩父 雲海 温泉 旅館 露天風呂', label: '埼玉・秩父三峯（首都圏から近い絶景雲海）' },
      { key: 'shigakogen_clouds', query: '志賀高原 渋温泉 露天風呂 雲海', label: '長野・SORA terrace竜王（雲海テラス＆湯田中渋）' },
      { key: 'aso_clouds', query: '阿蘇 雲海 ホテル 露天風呂 温泉', label: '熊本・阿蘇外輪山（カルデラを覆う大雲海）' }
    ]
  },
  {
    themeSlug: 'winter-onsen-town-yukata-walk',
    title: '情緒あふれる冬の温泉街・湯巡り＆街歩き宿特集',
    queries: [
      { key: 'shibu_onsen', query: '渋温泉 旅館 九湯めぐり 露天風呂', label: '長野・渋温泉（石畳と木造建築・九湯めぐり）' },
      { key: 'dogo_walk', query: '道後温泉 本館 旅館 露天風呂 温泉街', label: '愛媛・道後温泉（日本最古の名湯とレトロ街歩き）' },
      { key: 'ikaho_steps', query: '伊香保温泉 石段街 旅館 露天風呂 黄金の湯', label: '群馬・伊香保温泉（365段の石段街と黄金の湯）' },
      { key: 'kurokawa_walk', query: '黒川温泉 旅館 露天風呂 湯めぐり', label: '熊本・黒川温泉（川端通りの行燈と湯めぐり手形）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-solo-travel-retreat',
    title: 'おひとり様歓迎！秋・冬の気ままな一人旅温泉宿特集',
    queries: [
      { key: 'hakone_solo', query: '箱根 一人旅 温泉 ホテル 露天風呂', label: '神奈川・箱根湯本強羅（気ままなおひとり様ステイ）' },
      { key: 'atami_solo', query: '熱海 一人旅 温泉 ホテル オーシャンビュー', label: '静岡・熱海温泉（海を望むシングル・ひとり旅）' },
      { key: 'kusatsu_solo', query: '草津温泉 一人旅 旅館 露天風呂', label: '群馬・草津温泉（湯畑散策＆名湯おひとり様プラン）' },
      { key: 'kyoto_solo', query: '京都 一人旅 ホテル 温泉 朝食 大浴場', label: '京都・烏丸四条（古都の静かな一人旅ホテル）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-sauna-retreat',
    title: 'ととのう極上体験！絶景サウナ＆天然水風呂の温泉宿特集',
    queries: [
      { key: 'lake_sauna', query: '野尻湖 サウナ ホテル 長野 温泉', label: '長野・野尻湖信濃町（本場フィンランド式サウナ）' },
      { key: 'fuji_sauna', query: '富士山 サウナ ホテル 山梨 露天風呂', label: '山梨・富士吉田河口湖（富士山ビュー絶景サウナ）' },
      { key: 'shizuoka_sauna', query: '静岡 サウナ ホテル 温泉 天然水', label: '静岡・大井川用宗（富士山伏流水の天然水風呂）' },
      { key: 'hokkaido_sauna', query: '北海道 サウナ ホテル 温泉 露天風呂', label: '北海道・十勝洞爺湖（アヴァント外気浴サウナ）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Autumn/Winter Wave 2 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of themes) {
    console.log(`\n========================================`);
    console.log(`Theme: ${theme.title} (${theme.themeSlug})`);
    console.log(`========================================`);
    if (!results[theme.themeSlug]) results[theme.themeSlug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
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
  console.log(`\nSuccessfully saved all Wave 2 Autumn/Winter themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
