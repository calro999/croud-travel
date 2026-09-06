const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-japan-three-great-hot-springs-heritage-stay',
    queries: [
      { query: '有馬温泉 金の湯 旅館 兵庫 神戸', key: 'three_onsen_arima', label: '兵庫県神戸市北区ふるさと納税・日本三古湯三名泉筆頭「有馬温泉」赤褐色の金泉と神戸牛会席老舗旅館' },
      { query: '草津温泉 湯畑 旅館 群馬 露天風呂', key: 'three_onsen_kusatsu', label: '群馬県草津町ふるさと納税・日本屈指の酸性美肌泉「草津温泉」湯畑ライティングと伝統の湯もみ宿' },
      { query: '下呂温泉 飛騨川 旅館 岐阜 美肌の湯', key: 'three_onsen_gero', label: '岐阜県下呂市ふるさと納税・日本三名泉「下呂温泉」絹のように滑らかな美肌湯と飛騨牛朴葉味噌焼き名宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ancient-trails-historic-stay',
    queries: [
      { query: '熊野古道 中辺路 旅館 和歌山 田辺', key: 'ancient_trail_kumano', label: '和歌山県田辺市ふるさと納税・世界遺産「熊野古道」杉木立の巡礼路散策と川湯・湯の峰温泉老舗旅館' },
      { query: '中山道 木曽路 妻籠宿 馬籠宿 旅館 長野 岐阜', key: 'ancient_trail_kisoji', label: '長野県南木曽町・岐阜県中津川市ふるさと納税・木曽十一宿「妻籠宿・馬籠宿」格子戸の街並みと木曽ヒノキ風呂名宿' },
      { query: '若狭 小浜 鯖街道 旅館 福井 温泉', key: 'ancient_trail_sabakaido', label: '福井県小浜市・若狭町ふるさと納税・御食国と京を結ぶ「鯖街道」の宿場町熊川宿と若狭湾の極上焼き鯖・若狭フグ会席宿' }
    ]
  },
  {
    slug: 'furusato-tax-whitewater-rafting-canyoning-adventure-stay',
    queries: [
      { query: 'みなかみ ラフティング 温泉 旅館 群馬 利根川', key: 'adventure_minakami', label: '群馬県みなかみ町ふるさと納税・関東屈指の激流利根川ラフティング・キャニオニングと水上温泉郷渓流露天風呂' },
      { query: '吉野川 ラフティング 大歩危 徳島 ホテル 温泉', key: 'adventure_yoshinogawa', label: '徳島県三好市ふるさと納税・世界選手権開催地吉野川小歩危キャニオニングと祖谷渓秘境温泉リゾート' },
      { query: '仁淀川 パックラフト 高知 旅館 温泉', key: 'adventure_niyodogawa', label: '高知県いの町・仁淀川町ふるさと納税・奇跡の青「仁淀ブルー」SUP・カヤック体験と土佐あかうし会席宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-ocean-stay',
    queries: [
      { query: '三保松原 富士山 ホテル 静岡 温泉', key: 'pine_miho', label: '静岡県静岡市清水区ふるさと納税・世界文化遺産「三保松原」羽衣の松越しの富士山展望と駿河湾海の幸ホテル' },
      { query: '唐津 虹の松原 旅館 ホテル 佐賀 唐津湾', key: 'pine_karatsu', label: '佐賀県唐津市ふるさと納税・白砂青松100万本のクロマツ林「虹の松原」と呼子イカ・唐津城下町名旅館' },
      { query: '気比の松原 敦賀 旅館 福井 越前', key: 'pine_kehi', label: '福井県敦賀市ふるさと納税・日本三大松原「気比の松原」敦賀湾の茜色夕景と敦賀真鯛・越前若狭カニ宿' }
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
        let hotels = await searchRakutenHotels(q.query, 3);
        if (!hotels || hotels.length === 0) {
          const simplified = q.query.split(' ').slice(0, 2).join(' ');
          console.log(`Retrying simplified query: "${simplified}" ...`);
          await sleep(1500);
          hotels = await searchRakutenHotels(simplified, 3);
        }

        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = {
            label: q.label,
            hotels: hotels
          };
          console.log(`-> SUCCESS: Found ${hotels.length} hotels for ${q.key}. Top hotel: ${hotels[0].hotelName}`);
        } else {
          console.warn(`-> WARNING: No hotels found for ${q.key}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching for ${q.key}:`, err.message);
      }
      await sleep(1500); // 楽天APIレート制限対策
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log(`\nAll Round 24 hotels successfully stored into ${allSeasonalPath}`);
}

main();
