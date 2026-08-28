const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const wave3Themes = [
  {
    themeSlug: 'winter-starry-sky-astrophotography',
    title: '満天の星空＆天の川！冬の星空観賞リゾートホテル特集',
    queries: [
      { key: 'achi_stars', query: '昼神温泉 星空 ホテル 旅館 長野 阿智村', label: '長野・阿智村（日本一の星空ナイトツアー）' },
      { key: 'nobeyama_stars', query: '野辺山 八ヶ岳 星空 ホテル リゾート', label: '山梨長野・八ヶ岳野辺山（標高1300mの星空テラス）' },
      { key: 'ishigaki_stars', query: '石垣島 西表島 星空 ホテル リゾート', label: '沖縄・石垣島西表島（日本初の星空保護区）' },
      { key: 'kushimoto_stars', query: '南紀白浜 串本 星空 ホテル 温泉', label: '和歌山・串本潮岬（本州最南端の水平線星空）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-glamping-tent',
    title: '秋・冬グランピング！薪ストーブ＆焚き火・天然温泉リゾート特集',
    queries: [
      { key: 'fuji_glamping', query: '富士山 グランピング ドームテント 温泉', label: '山梨・富士五湖（富士山ビュー＆薪ストーブドーム）' },
      { key: 'chiba_glamping', query: '千葉 木更津 グランピング 温泉 焚き火', label: '千葉・木更津いすみ（都心近郊・焚き火サウナグランピング）' },
      { key: 'nasu_glamping', query: '那須 グランピング 温泉 リゾート テント', label: '栃木・那須高原（北欧風ラグジュアリーグランピング）' },
      { key: 'mie_glamping', query: '伊勢志摩 グランピング 温泉 海 ドーム', label: '三重・伊勢志摩（英虞湾シーサイドグランピング）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-hot-spring-cure',
    title: '名湯治場めぐり！秋・冬の本格源泉かけ流し秘湯宿特集',
    queries: [
      { key: 'tamagawa_onsen', query: '玉川温泉 旅館 湯治 秋田 岩盤浴', label: '秋田・玉川温泉（塩酸主成分pH1.2の奇跡の湯治場）' },
      { key: 'sukayu_onsen', query: '酸ヶ湯温泉 旅館 青森 千人風呂', label: '青森・酸ヶ湯温泉（八甲田山麓の総ヒバ千人風呂）' },
      { key: 'nasu_shikano_onsen', query: '那須 鹿の湯 温泉 旅館 立ち寄り', label: '栃木・那須湯本（開湯1300年の硫黄泉・鹿の湯）' },
      { key: 'nagano_nozawa_onsen', query: '野沢温泉 旅館 外湯めぐり 源泉かけ流し', label: '長野・野沢温泉（13の外湯と情緒ある温泉街）' }
    ]
  },
  {
    themeSlug: 'autumn-art-museum-retreat',
    title: '芸術の秋！名作アート鑑賞＆美術館リゾートホテル特集',
    queries: [
      { key: 'naoshima_art', query: '直島 ホテル ベネッセ アート 瀬戸内', label: '香川・直島（美術館に泊まる現代アートの聖地）' },
      { key: 'hakone_art', query: '箱根 ホテル 美術館 ポーラ 彫刻の森', label: '神奈川・箱根（ポーラ美術館＆ガラスの森リゾート）' },
      { key: 'otsuka_art', query: '鳴門 大塚国際美術館 ホテル リゾート 徳島', label: '徳島・鳴門（世界の名画と大塚国際美術館リゾート）' },
      { key: 'kanazawa_art', query: '金沢 21世紀美術館 ホテル おすすめ', label: '石川・金沢（21世紀美術館＆兼六園アートステイ）' }
    ]
  },
  {
    themeSlug: 'winter-bayside-factory-nightview',
    title: '幻想の工場夜景クルーズ＆ベイサイドホテル特集',
    queries: [
      { key: 'kawasaki_nightview', query: '川崎 工場夜景 ホテル 東京湾', label: '神奈川・川崎臨海部（SFのような巨大プラント夜景）' },
      { key: 'yokkaichi_nightview', query: '四日市 工場夜景 ホテル 三重', label: '三重・四日市コンビナート（大迫力パノラマ工場夜景）' },
      { key: 'yokohama_minatomirai', query: '横浜 みなとみらい ホテル 夜景', label: '神奈川・横浜みなとみらい（大観覧車＆ベイブリッジ夜景）' },
      { key: 'kobe_bayside', query: '神戸 ハーバーランド ホテル 夜景', label: '兵庫・神戸ベイエリア（1000万ドルの夜景リゾート）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Seasonal Wave 3 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of wave3Themes) {
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
  console.log(`\nSuccessfully saved all Wave 3 Seasonal themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
