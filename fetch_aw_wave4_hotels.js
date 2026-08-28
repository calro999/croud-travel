const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const wave4Themes = [
  {
    themeSlug: 'winter-snow-drift-ice-cruise',
    title: '冬のオホーツク流氷クルーズ＆知床世界遺産ホテル特集',
    queries: [
      { key: 'abashiri_drift_ice', query: '網走 オーロラ号 流氷 ホテル 温泉', label: '北海道・網走（流氷砕氷船おーろら号＆オホーツク海鮮）' },
      { key: 'shiretoko_winter', query: '知床 ウトロ 温泉 ホテル 流氷', label: '北海道・知床ウトロ（流氷ウォーク＆大自然知床温泉）' },
      { key: 'monbetsu_drift_ice', query: '紋別 ガリンコ号 ホテル カニ 温泉', label: '北海道・紋別（ガリンコ号＆本場オホーツク海鮮）' },
      { key: 'kushiro_cranes', query: '釧路 丹頂鶴 温泉 ホテル 炉端焼き', label: '北海道・釧路阿寒（雪原のタンチョウ鶴＆阿寒湖温泉）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-brewery-sake-tour',
    title: '新酒の季節！日本酒酒蔵めぐり＆地酒飲み比べ温泉宿特集',
    queries: [
      { key: 'niigata_sake', query: '新潟 越後湯沢 ぽんしゅ館 地酒 温泉 旅館', label: '新潟・越後湯沢（米どころ越後の銘酒＆雪見風呂）' },
      { key: 'aizu_sake', query: '会津若松 会津 東山温泉 地酒 旅館', label: '福島・会津東山温泉（全国金賞最多受賞の銘酒郷）' },
      { key: 'fushimi_sake', query: '京都 伏見 酒蔵 ホテル 温泉', label: '京都・伏見酒蔵の町（伏水仕込みの銘酒と町家ステイ）' },
      { key: 'saijo_sake', query: '広島 西条 酒蔵通り ホテル 温泉', label: '広島・西条酒蔵通り（吟醸酒発祥の赤瓦煙突の街）' }
    ]
  },
  {
    themeSlug: 'winter-warm-island-escape',
    title: '本州の寒さを脱出！冬の沖縄・奄美ぽかぽか避寒リゾート特集',
    queries: [
      { key: 'naha_warm_stay', query: '那覇 国際通り ホテル 朝食 温泉', label: '沖縄・那覇（冬の街歩き＆琉球グルメ・天然温泉）' },
      { key: 'amami_resort', query: '奄美大島 リゾートホテル 海 温泉', label: '鹿児島・奄美大島（冬でも温暖な原生林＆マングローブ）' },
      { key: 'yaeyama_warm', query: '小浜島 竹富島 リゾートホテル 星野', label: '沖縄・八重山諸島（冬の南国静寂リゾートステイ）' },
      { key: 'miyako_warm', query: '宮古島 オールインクルーシブ ホテル', label: '沖縄・宮古島（冬の宮古ブルー＆贅沢オールインクルーシブ）' }
    ]
  },
  {
    themeSlug: 'autumn-temple-garden-lightup',
    title: '息をのむ美しさ！秋の夜間特別拝観＆庭園ライトアップ宿特集',
    queries: [
      { key: 'kyoto_temple_lightup', query: '京都 東山 ライトアップ 旅館 高台寺 清水寺', label: '京都・東山（高台寺・清水寺の幻想的プロジェクション）' },
      { key: 'rikugien_tokyo', query: '東京 文京区 ホテル 庭園 椿山荘 六義園', label: '東京・目白文京（ホテル椿山荘東京＆六義園紅葉雲海）' },
      { key: 'kenrokuen_lightup', query: '金沢 兼六園 ライトアップ ホテル 旅館', label: '石川・金沢（兼六園・金沢城四季物語ライトアップ）' },
      { key: 'matsushima_lightup', query: '松島 円通院 ライトアップ 温泉 ホテル', label: '宮城・松山円通院（紅葉ライトアップ＆松島湾温泉）' }
    ]
  },
  {
    themeSlug: 'autumn-winter-onsen-with-pet',
    title: '愛犬と一緒に泊まる！秋・冬のドッグラン＆温泉リゾート特集',
    queries: [
      { key: 'izu_pet_hotel', query: '伊豆 ペットと泊まれる 温泉 旅館 露天風呂 犬', label: '静岡・伊豆高原（愛犬同伴専用温泉＆専用ドッグラン）' },
      { key: 'nasu_pet_resort', query: '那須 ペット 犬 温泉 リゾート ホテル', label: '栃木・那須高原（広大なドッグパーク＆愛犬同室フレンチ）' },
      { key: 'karuizawa_pet_hotel', query: '軽井沢 ペット 犬 リゾートホテル コテージ', label: '長野・軽井沢（紅葉・白銀のドッグフレンドリーヴィラ）' },
      { key: 'biwako_pet_resort', query: '滋賀 琵琶湖 ペット 犬 温泉 グランピング', label: '滋賀・琵琶湖畔（愛犬と過ごすレイクサイド温泉リゾート）' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 New Autumn/Winter Wave 4 Hubs ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of wave4Themes) {
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
  console.log(`\nSuccessfully saved all Wave 4 Autumn/Winter themes hotel data to: ${cachePath}`);
}

main().catch(console.error);
