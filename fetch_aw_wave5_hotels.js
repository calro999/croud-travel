const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const wave5Themes = [
  {
    themeSlug: 'winter-oyster-seafood-gourmet',
    title: '冬の味覚の王様！極上牡蠣＆冬海鮮づくし温泉旅館特集',
    queries: [
      { key: 'hiroshima_oyster', query: '宮島 広島 牡蠣 温泉 旅館 ホテル', label: '広島・宮島厳島（焼き牡蠣・牡蠣土手鍋＆厳島神社）' },
      { key: 'matsushima_oyster', query: '松島 牡蠣 食べ放題 温泉 旅館 ホテル', label: '宮城・松島（松島湾のぷりぷり焼き牡蠣＆絶景温泉）' },
      { key: 'mie_matoya_oyster', query: '鳥羽 的矢かき 温泉 旅館 ホテル 三重', label: '三重・鳥羽的矢湾（清浄生牡蠣「的矢かき」フルコース）' },
      { key: 'hyogo_aioi_oyster', query: '赤穂 牡蠣 温泉 旅館 露天風呂 兵庫', label: '兵庫・播磨赤穂（播磨灘の濃厚坂越牡蠣＆絶景露天）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-train-scenery-station',
    title: '車窓に広がる紅葉＆雪景色！絶景観光列車＆駅直結温泉宿特集',
    queries: [
      { key: 'sagano_train', query: '京都 嵐山 嵯峨野 トロッコ ホテル 旅館 温泉', label: '京都・嵯峨野嵐山（嵯峨野トロッコ列車＆保津川峡谷）' },
      { key: 'tadami_train', query: '会津若松 会津柳津 只見線 温泉 旅館', label: '福島・奥会津只見線（世界が称賛する雪景色の鉄道橋）' },
      { key: 'kurobe_gorge_train', query: '宇奈月温泉 黒部峡谷 トロッコ 旅館 露天風呂', label: '富山・黒黒部峡谷宇奈月温泉（秋の紅葉トロッコ列車）' },
      { key: 'tsugaru_stove_train', query: '津軽 弘前 ストーブ列車 温泉 旅館 青森', label: '青森・津軽鉄道（冬の風物詩・ダルマストーブ列車）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-fireplace-cafe-resort',
    title: 'パチパチ燃える暖炉と読書！大人の隠れ家クラシックホテル特集',
    queries: [
      { key: 'karuizawa_fireplace', query: '軽井沢 クラシックホテル 暖炉 温泉 洋館', label: '長野・中軽井沢（歴史ある暖炉ラウンジ＆高原ステイ）' },
      { key: 'nikko_classic', query: '日光 クラシックホテル 金谷ホテル 温泉', label: '栃木・日光中禅寺湖（日本最古のリゾート金谷ホテル）' },
      { key: 'hakone_fujiya', query: '箱根 宮ノ下 富士屋ホテル 温泉 クラシック', label: '神奈川・箱根宮ノ下（登録有形文化財・名門クラシックホテル）' },
      { key: 'kamikochi_imperial', query: '松本 浅間温泉 暖炉 ホテル 旅館 信州', label: '長野・松本浅間温泉（信州の薪ストーブと名湯・民芸ホテル）' }
    ]
  },
  {
    themeSlug: 'winter-snow-festival-illumination',
    title: '幻想の白銀世界！冬の雪まつり＆巨大かまくら温泉宿特集',
    queries: [
      { key: 'sapporo_snow_fest', query: '札幌 大通公園 雪まつり ホテル 温泉 朝食', label: '北海道・札幌（さっぽろ雪まつり大雪像＆すすきの夜景）' },
      { key: 'yokote_kamakura', query: '横手 かまくら 秋田 温泉 ホテル 旅館', label: '秋田・横手（450年の伝統！ミニかまくらの灯りと雪景色）' },
      { key: 'yunishigawa_kamakura', query: '湯西川温泉 かまくら祭 旅館 露天風呂 栃木', label: '栃木・奥日光湯西川温泉（平家落人の里・かまくら祭）' },
      { key: 'towada_winter_fest', query: '十和田湖 温泉 ホテル 冬物語 青森 露天風呂', label: '青森・十和田湖（十和田湖冬物語＆雪上花火・奥入瀬氷瀑）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-scenic-drive-pass',
    title: '紅葉・白銀のパノラマ絶景！ドライブウェイ＆峠の展望温泉宿特集',
    queries: [
      { key: 'izu_skyline_drive', query: '伊豆スカイライン 伊豆高原 ホテル 温泉 露天風呂 富士山', label: '静岡・伊豆スカイライン（相模湾＆富士山パノラマビュー）' },
      { key: 'bandai_azuma_drive', query: '裏磐梯 高湯温泉 磐梯吾妻スカイライン 旅館', label: '福島・磐梯吾妻スカイライン（日本のグランドキャニオン紅葉）' },
      { key: 'venus_line_drive', query: '白樺湖 霧ヶ峰 ビーナスライン ホテル 温泉 露天風呂', label: '長野・霧ヶ峰ビーナスライン（標高1700mの雲上天空ドライブ）' },
      { key: 'shimanami_drive', query: '尾道 しまなみ海道 ホテル 瀬戸内 温泉', label: '広島・しまなみ海道（瀬戸内海の島々を結ぶ絶景橋梁ドライブ）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Seasonal Wave 5 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of wave5Themes) {
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
  console.log(`\nSuccessfully saved all Wave 5 Seasonal themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
