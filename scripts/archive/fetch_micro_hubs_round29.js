const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'nagano-suwa-lake-onbashira-shrine-stay': {
    suwa_taisha_four_shrines_stay: {
      label: '信濃国一之宮・諏訪大社四社まいり＆御柱祭ゆかりの名門宿',
      query: '上諏訪温泉 旅館 諏訪大社'
    },
    suwa_lake_fireworks_geyser_stay: {
      label: '諏訪湖一望レイクビュー露天風呂＆間欠泉センター・片倉館宿',
      query: '上諏訪温泉 露天風呂 諏訪湖 ホテル'
    },
    suwa_five_sake_breweries_stay: {
      label: '諏訪五蔵酒蔵めぐり（真澄・横笛）＆信州サーモン・わかさぎ宿',
      query: '上諏訪 ホテル 温泉 地酒'
    }
  },
  'kochi-katsurahama-castle-hirome-market-stay': {
    katsurahama_ryoma_pacific_stay: {
      label: '桂浜・坂本龍馬銅像＆太平洋怒涛パノラマ・竜王岬絶景宿',
      query: '高知 桂浜 ホテル 旅館 太平洋'
    },
    kochi_castle_sunday_market_stay: {
      label: '日本唯一本丸御殿現存「高知城」＆三百年続く土佐日曜市宿',
      query: '高知市 ホテル 温泉 高知城'
    },
    hirome_market_katsuo_warayaki_stay: {
      label: 'ひろめ市場・名物カツオ藁焼き塩たたき＆土佐地酒屋台宿',
      query: '高知 ホテル ひろめ市場 カツオ'
    }
  },
  'gunma-minakami-tanigawadake-onsen-stay': {
    tanigawadake_ropeway_ichinokura_stay: {
      label: '谷川岳ロープウェイ・一ノ倉沢大岩壁＆絶景マウンテンテラス宿',
      query: '水上温泉 谷川岳 旅館 露天風呂'
    },
    minakami_eighteen_hotsprings_stay: {
      label: 'みなかみ十八湯・利根川渓流露天風呂＆宝川温泉巨石大露天宿',
      query: 'みなかみ温泉 露天風呂 源泉かけ流し 旅館'
    },
    tone_river_rafting_canyon_stay: {
      label: '利根川源流ラフティング・キャニオニング＆上州牛ステーキ宿',
      query: '水上 ホテル 温泉 上州牛'
    }
  },
  'aomori-hirosaki-castle-cherry-apple-stay': {
    hirosaki_castle_cherry_moat_stay: {
      label: '弘前城天守・日本一の桜花筏（花筏）＆桜のトンネル名勝宿',
      query: '弘前 ホテル 温泉 弘前城'
    },
    tsugaru_apple_french_cider_stay: {
      label: '津軽りんごの郷・アップルパイ巡り＆シードル工房美食宿',
      query: '弘前 ホテル 朝食 りんご'
    },
    hirosaki_western_architecture_stay: {
      label: '洋館とねぷたの街・旧弘前市立図書館＆津軽三味線ライブ宿',
      query: '弘前 旅館 温泉 津軽三味線'
    }
  },
  'nara-yoshino-cherry-mountain-temple-stay': {
    yoshino_thousand_cherries_stay: {
      label: '一目千本桜・吉野山（下千本・中千本・上千本・奥千本）名勝宿',
      query: '吉野山 旅館 桜 温泉 奈良'
    },
    kinpusenji_zao_gongen_stay: {
      label: '世界遺産・金峯山寺蔵王堂青神仏＆修験道霊場吉水神社宿',
      query: '吉野 宿坊 旅館 奈良 金峯山寺'
    },
    yoshino_kuzu_kaki_leaf_sushi_stay: {
      label: '吉野本葛きり・吉野葛鍋＆伝統柿の葉寿司郷土グルメ宿',
      query: '吉野 旅館 柿の葉寿司 温泉'
    }
  }
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const jsonPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  for (const [slug, sections] of Object.entries(targets)) {
    console.log(`\n=== Processing: ${slug} ===`);
    if (!allData[slug]) {
      allData[slug] = {};
    }

    for (const [secKey, config] of Object.entries(sections)) {
      console.log(`Fetching [${secKey}] query: "${config.query}"...`);
      try {
        const hotels = await searchRakutenHotels(config.query, 4);
        console.log(` -> Found ${hotels.length} hotels`);
        allData[slug][secKey] = {
          label: config.label,
          query: config.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`Error fetching ${secKey}:`, err.message);
        allData[slug][secKey] = {
          label: config.label,
          query: config.query,
          hotels: []
        };
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(allData, null, 2), 'utf8');
  console.log('\nAll 5 round 29 micro hubs Rakuten hotel data saved successfully!');
}

main();
