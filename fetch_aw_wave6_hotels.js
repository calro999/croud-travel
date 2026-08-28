const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const wave6Themes = [
  {
    themeSlug: 'autumn-winter-private-bath-ryokan',
    title: '誰にも邪魔されない至福の湯浴み！貸切露天風呂・部屋食の隠れ宿特集',
    queries: [
      { key: 'hakone_private_bath', query: '箱根 貸切露天風呂 部屋食 温泉 旅館', label: '神奈川・箱根強羅（美肌の貸切露天風呂＆贅沢部屋食会席）' },
      { key: 'izu_private_bath', query: '伊豆 修善寺 貸切露天風呂 部屋食 温泉 旅館', label: '静岡・伊豆修善寺（竹林の隠れ宿＆カップル夫婦向け貸切湯）' },
      { key: 'kurokawa_private_bath', query: '黒川温泉 貸切露天風呂 部屋食 旅館', label: '熊本・黒川温泉（渓流沿いの貸切野天風呂とおこもりステイ）' },
      { key: 'arashiyama_private_bath', query: '京都 嵐山 温泉 貸切露天風呂 旅館', label: '京都・嵯峨嵐山（嵐山温泉の貸切風呂＆風情ある京会席）' }
    ]
  },
  {
    themeSlug: 'winter-clear-air-fuji-view-hotels',
    title: '白銀の冠雪富士山！冬の富士ビュー絶景ホテル＆温泉旅館特集',
    queries: [
      { key: 'kawaguchiko_fuji_view', query: '河口湖 富士山 温泉 旅館 露天風呂 眺望', label: '山梨・河口湖畔（逆さ富士を望む展望露天風呂）' },
      { key: 'hakone_fuji_view', query: '箱根 富士山 露天風呂 ホテル 旅館 仙石原', label: '神奈川・箱根仙石原芦ノ湖（富士山と芦ノ湖パノラマビュー）' },
      { key: 'nihondaira_fuji_view', query: '日本平 静岡 ホテル 富士山 夜景 露天風呂', label: '静岡・日本平三保松原（駿河湾越しに仰ぐ霊峰富士）' },
      { key: 'yamanakako_fuji_view', query: '山中湖 富士山 ホテル 温泉 紅富士', label: '山梨・山中湖畔（朝日に染まる紅富士＆富士山温泉）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-traditional-ryokan-retro',
    title: '大正ロマンと木造建築美！国の登録有形文化財・老舗旅館特集',
    queries: [
      { key: 'ginzan_cultural_ryokan', query: '銀山温泉 能登屋旅館 木造 温泉 旅館', label: '山画・銀山温泉（大正ロマン薫る木造多層建築街）' },
      { key: 'shibu_kanaguya_ryokan', query: '渋温泉 金具屋 旅館 温泉 有形文化財', label: '長野・渋温泉金具屋（昭和初期の宮大工の粋が宿る文化財建築）' },
      { key: 'ito_tokai_ryokan', query: '伊東温泉 木造 登録有形文化財 旅館 温泉', label: '静岡・伊東温泉（東海館の意匠を受け継ぐ老舗名門宿）' },
      { key: 'kinosaki_classic_ryokan', query: '城崎温泉 老舗 旅館 木造 志賀直哉', label: '兵庫・城崎温泉（文豪志賀直哉ゆかりの木造老舗宿）' }
    ]
  },
  {
    themeSlug: 'winter-snow-fireworks-festivals',
    title: '夜空を彩る白銀の華！冬の雪上花火大会＆湖畔温泉宿特集',
    queries: [
      { key: 'lake_kawaguchi_winter_fireworks', query: '河口湖 冬花火 ホテル 温泉 露天風呂', label: '山梨・河口湖冬花火（澄んだ冬空に打ち上がる大輪の華）' },
      { key: 'atami_winter_fireworks', query: '熱海 海上花火大会 冬 ホテル 温泉', label: '静岡・熱海海上花火大会（大迫力のスタジアム音響花火）' },
      { key: 'gero_winter_fireworks', query: '下呂温泉 冬 花火 旅館 露天風呂', label: '岐阜・下呂温泉花火ミュージカル（音楽と光の冬の饗宴）' },
      { key: 'lake_chuzenji_winter_fireworks', query: '中禅寺湖 日光 冬 ホテル 温泉 露天風呂', label: '栃木・奥日光中禅寺湖（冬の静寂と湖畔の雪景色花火）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-workation-hot-spring',
    title: '高速Wi-Fi＆天然温泉！秋・冬の大人の温泉ワーケーションホテル特集',
    queries: [
      { key: 'karuizawa_workation', query: '軽井沢 ワーケーション ホテル 温泉 コワーキング', label: '長野・軽井沢（森のコワーキングスペース＆高原リゾート）' },
      { key: 'atami_workation', query: '熱海 ワーケーション ホテル 温泉 オーシャンビュー', label: '静岡・熱海温泉（都心45分・海が見える温泉ワーケーション）' },
      { key: 'hakone_workation', query: '箱根 ワーケーション 温泉 ホテル ライブラリー', label: '神奈川・箱根湯本（ブックカフェラウンジ＆露天風呂）' },
      { key: 'kyoto_workation', query: '京都 ワーケーション ホテル 大浴場 朝食', label: '京都・烏丸御池（静かな町家カフェと大浴場付きデザイン宿）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Seasonal Wave 6 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of wave6Themes) {
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
  console.log(`\nSuccessfully saved all Wave 6 Seasonal themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
