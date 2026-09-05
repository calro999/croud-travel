const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'miyagi-matsushima-shiogama-shrine-stay': {
    matsushima_bay_cruise_zuiganji_stay: {
      label: '日本三景・松島湾クルーズ（仁王島・千軒島）＆国宝瑞厳寺・五大堂宿',
      query: '松島温泉 旅館 露天風呂 松島湾'
    },
    shiogama_shrine_salt_tuna_stay: {
      label: '陸奥国一之宮・塩竈神社二十二社＆塩竈港三陸生マグロ寿司宿',
      query: '塩竈 ホテル 仙台 寿司'
    },
    matsushima_oyster_beef_tongue_stay: {
      label: '冬の名物松島焼き牡蠣食べ放題＆仙台名物牛タン・三陸海鮮宿',
      query: '松島 旅館 海鮮 牡蠣'
    }
  },
  'nagano-hakuba-happo-tsugaike-alps-stay': {
    hakuba_happo_pond_alps_stay: {
      label: '白馬八方尾根・標高二千六十メートル八方池鏡面絶景＆雲上マウンテンテラス宿',
      query: '白馬 リゾート ホテル 温泉'
    },
    tsugaike_nature_park_wetland_stay: {
      label: '栂池自然園・白馬大雪渓湿原木道トレッキング＆栂池高原ゴンドラ宿',
      query: '白馬 栂池 ホテル 温泉'
    },
    hakuba_mountain_sauna_chalet_stay: {
      label: '北アルプス山岳サウナ・薪サウナ水風呂＆信州プレミアム牛シャレー宿',
      query: '白馬 シャレー ホテル サウナ'
    }
  },
  'gifu-gujo-hachiman-mino-udatsu-stay': {
    gujo_hachiman_water_castle_stay: {
      label: '郡上八幡城・名水百選宗祇水せせらぎ水路＆日本一長い盆踊り郡上おどり宿',
      query: '郡上八幡 旅館 温泉'
    },
    mino_udatsu_washi_heritage_stay: {
      label: '美濃うだつの上がる町並み・重要伝統的建造物群＆美濃手漉き和紙工房宿',
      query: '岐阜 美濃 ホテル 旅館'
    },
    nagara_river_sweetfish_gourmet_stay: {
      label: '清流長良川の天然郡上鮎塩焼き会席＆飛騨牛すき焼き古民家宿',
      query: '郡上 ホテル 鮎 飛騨牛'
    }
  },
  'kyoto-amanohashidate-ine-funaya-stay': {
    amanohashidate_matanozoki_stay: {
      label: '日本三景・天橋立「股のぞき」飛龍観・傘松公園＆天橋立温泉美肌宿',
      query: '天橋立 旅館 露天風呂 温泉'
    },
    ine_funaya_sea_cruising_stay: {
      label: '重要伝統的建造物群・伊根の舟屋群湾内クルーズ＆舟屋の宿・地魚会席',
      query: '伊根 舟屋 旅館'
    },
    tango_taiza_crab_seafood_stay: {
      label: '幻の丹後間人ガニ・冬のズワイガニ尽くし＆丹後半島シーサイド露天宿',
      query: '丹後 旅館 カニ 温泉'
    }
  },
  'miyazaki-nichinan-obi-castle-aoshima-stay': {
    aoshima_shrine_devils_washboard_stay: {
      label: '青島神社「鬼の洗濯板」奇岩パノラマ＆青島ビーチリゾートサーフ宿',
      query: '青島 温泉 ホテル リゾート'
    },
    nichinan_moai_sunmesse_stay: {
      label: 'サンメッセ日南七体の完全復刻モアイ像＆鵜戸神宮断崖の運玉投げ宿',
      query: '日南 ホテル 温泉 リゾート'
    },
    obi_castle_samurai_town_stay: {
      label: '飫肥城下町飫肥杉武家屋敷＆名物飫肥天・宮崎地頭鶏・伊勢海老宿',
      query: '日南 飫肥 旅館 ホテル'
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
  console.log('\nAll 5 round 34 micro hubs Rakuten hotel data saved successfully!');
}

main();
