const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'yamagata-sakata-haguro-dewasanzan-stay': {
    sakata_sankyo_warehouse_stay: {
      label: '山居倉庫ケヤキ並木・本間家旧本邸＆北前船交易史跡宿',
      query: '酒田 ホテル 旅館'
    },
    hagurosan_five_storied_pagoda_stay: {
      label: '出羽三山羽黒山・国宝五重塔＆二千四百四十六段石段杉並木宿坊',
      query: '羽黒山 宿坊 鶴岡 旅館'
    },
    shonai_sushi_sangenton_stay: {
      label: '庄内浜天然魚介握り寿司＆平田牧場金華豚・三元豚美食宿',
      query: '酒田 鶴岡 ホテル 庄内 温泉'
    }
  },
  'toyama-takaoka-himi-amaharashi-stay': {
    takaoka_zuiryuji_kanayamachi_stay: {
      label: '加賀前田家菩提寺・国宝瑞龍寺＆高岡銅器金屋町千本格子宿',
      query: '高岡 ホテル 富山'
    },
    amaharashi_coast_tateyama_view_stay: {
      label: '義経伝説雨晴海岸・富山湾越し立山連峰パノラマ宿',
      query: '雨晴 氷見 温泉 旅館'
    },
    himi_buri_seafood_onsen_stay: {
      label: '冬の王様・氷見寒ブリづくし会席＆天然氷見温泉郷海沿い宿',
      query: '氷見温泉 旅館 寒ブリ'
    }
  },
  'shiga-nagahama-omihachiman-chikubushima-stay': {
    nagahama_kurokabe_square_stay: {
      label: '長浜黒壁スクエアガラス館＆秀吉の出世城長浜城下町宿',
      query: '長浜 ホテル 滋賀 琵琶湖'
    },
    chikubushima_sacred_island_stay: {
      label: '神が棲む島・琵琶湖竹生島宝厳寺クルーズ＆湖畔リゾート宿',
      query: '長浜 旅館 温泉 琵琶湖'
    },
    omihachiman_suigo_beef_stay: {
      label: '近江八幡水郷めぐり・八幡堀白壁土蔵＆日本三大和牛近江牛宿',
      query: '近江八幡 ホテル 旅館 近江牛'
    }
  },
  'tokushima-naruto-iya-oboke-gorge-stay': {
    naruto_whirlpools_otsuka_museum_stay: {
      label: '世界最大級鳴門の渦潮・渦の道＆大塚国際美術館リゾート宿',
      query: '鳴門 ホテル 温泉 リゾート'
    },
    iya_kazurabashi_secret_valley_stay: {
      label: '日本三大秘境・祖谷のかずら橋＆小便小僧断崖ビュー温泉宿',
      query: '祖谷温泉 旅館 かずら橋'
    },
    oboke_koboke_boat_gorge_stay: {
      label: '大歩危峡遊覧船・吉野川激流ラフティング＆祖谷そば郷土宿',
      query: '大歩危 祖谷 ホテル 温泉'
    }
  },
  'saga-karatsu-yobuko-genkai-squid-stay': {
    karatsu_castle_matsubara_stay: {
      label: '唐津城舞鶴公園・日本三大松原「虹の松原」＆唐津焼工房宿',
      query: '唐津 ホテル 旅館 温泉'
    },
    yobuko_morning_market_squid_stay: {
      label: '呼子朝市そぞろ歩き＆名物「イカの活き造り・いかしゅうまい」宿',
      query: '呼子 旅館 イカ'
    },
    genkai_sea_sunset_resort_stay: {
      label: '玄界灘リアス式海岸・波戸岬ハート岬＆パノラマ夕日露天宿',
      query: '唐津 呼子 ホテル 露天風呂'
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
  console.log('\nAll 5 round 33 micro hubs Rakuten hotel data saved successfully!');
}

main();
