const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'barrel-sauna-wood-stove-nature-totonoi-resort-stay': {
    barrel_sauna_forest_stay: {
      label: '本格バレルサウナ＆薪ストーブ・森林外気浴リゾート',
      query: 'バレルサウナ 薪ストーブ 温泉 ホテル'
    },
    lakeside_sauna_tent_stay: {
      label: '湖畔ダイブ＆清流クールダウン・大自然ととのい宿',
      query: 'サウナ 湖 貸切 露天風呂 リゾート'
    },
    hokkaido_forest_sauna_stay: {
      label: '白樺ヴィヒタ＆フィンランド式ロウリュ・北国サウナ宿',
      query: 'フィンランド サウナ ロウリュ 温泉 北海道'
    }
  },
  'panoramic-view-sauna-fuji-ocean-lake-resort-stay': {
    fuji_view_infinity_sauna_stay: {
      label: '富士山一望パノラマサウナ＆展望ととのいテラス宿',
      query: '富士山 サウナ 露天風呂 ホテル'
    },
    ocean_sunset_sauna_stay: {
      label: '大海原・夕陽インフィニティサウナ＆潮風外気浴宿',
      query: 'サウナ 海 絶景 露天風呂 リゾート'
    },
    skyscrapers_nightview_sauna_stay: {
      label: '摩天楼パノラマ夜景サウナ＆都市型ラグジュアリースパ',
      query: 'サウナ 夜景 スパ ホテル'
    }
  },
  'pure-natural-spring-water-bath-totonoi-onsen-stay': {
    shizuoka_shikiji_style_spring_stay: {
      label: '富士の雪解け天然水・飲める名水掛け流し水風呂宿',
      query: '天然水 水風呂 サウナ 温泉 静岡'
    },
    kurokawa_aso_pure_water_stay: {
      label: '阿蘇・九州名水百選・伏流水シングル水風呂と秘湯宿',
      query: 'サウナ 水風呂 源泉 熊本 旅館'
    },
    nagano_alps_pure_spring_stay: {
      label: '北アルプス山麓湧水＆清流掛け流し・森林ととのい宿',
      query: 'サウナ 天然水 水風呂 長野 温泉'
    }
  },
  'herbal-steam-ayurveda-detox-wellness-stay': {
    japanese_herb_mist_sauna_stay: {
      label: '和草ハーブ蒸し・よもぎスチーム＆漢方薬湯デトックス宿',
      query: 'ハーブサウナ 薬湯 温泉 旅館'
    },
    ayurveda_oil_spa_retreat_stay: {
      label: '本格アーユルヴェーダ・シロダーラ＆極上トリートメント宿',
      query: 'アーユルヴェーダ エステ スパ リゾート'
    },
    enzyme_fermentation_bath_stay: {
      label: '米ぬか酵素風呂＆発酵薬膳・体内浄化ファスティング宿',
      query: '酵素風呂 発酵 温泉 リフレッシュ'
    }
  },
  'private-room-sauna-luxury-villa-retreat-stay': {
    room_barrel_sauna_villa_stay: {
      label: '客室専用バレルサウナ＆プライベート水風呂付き極上ヴィラ',
      query: '客室サウナ 専用サウナ ヴィラ 温泉'
    },
    private_spa_suite_stay: {
      label: 'スイートルーム完備・完全プライベートサウナ＆客室露天風呂',
      query: 'サウナ付客室 スイート 露天風呂 旅館'
    },
    charter_cottage_sauna_bbq_stay: {
      label: '一棟貸切サウナ別荘・屋外ジャグジー＆BBQリゾート',
      query: 'サウナ 一棟貸し コテージ 温泉'
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
  console.log('\nAll 5 sauna & wellness hubs Rakuten hotel data saved successfully!');
}

main();
