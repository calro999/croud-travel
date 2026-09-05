const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'nagano-kamikochi-norikura-alps-stay': {
    kamikochi_kappabashi_stay: {
      label: '上高地・河童橋・大正池＆穂高連峰山岳リゾート宿',
      query: '上高地 ホテル 穂高連峰'
    },
    norikura_milky_onsen_stay: {
      label: '乗鞍高原・白濁硫黄泉＆乗鞍岳ご来光秘湯宿',
      query: '乗鞍高原 温泉 白濁 旅館'
    },
    shirahone_onsen_hotspring_stay: {
      label: '白骨温泉・三日入れば三年風邪を引かぬ名湯宿',
      query: '白骨温泉 旅館 露天風呂'
    }
  },
  'gifu-gero-onsen-hida-river-stay': {
    gero_three_famous_spring_stay: {
      label: '日本三名泉下呂温泉・飛騨川沿い美肌の湯宿',
      query: '下呂温泉 露天風呂 旅館 美肌'
    },
    gero_hida_beef_gourmet_stay: {
      label: '飛騨牛A5等級ステーキ＆朴葉味噌飛騨美食宿',
      query: '下呂温泉 飛騨牛 懐石 旅館'
    },
    maze_river_clear_stream_stay: {
      label: '馬瀬川の清流・天然鮎＆下呂合掌の里風情宿',
      query: '下呂 ホテル 飛騨 温泉'
    }
  },
  'fukui-tojinbo-awara-onsen-crab-stay': {
    tojinbo_cliff_sunset_stay: {
      label: '東尋坊・柱状節理断崖絶壁＆日本海夕陽パノラマ宿',
      query: '三国温泉 東尋坊 旅館 露天風呂'
    },
    awara_onsen_footbath_stay: {
      label: 'あわら温泉・関西の奥座敷＆湯巡り足湯横丁宿',
      query: 'あわら温泉 旅館 露天風呂 源泉'
    },
    echizen_crab_seafood_stay: {
      label: '越前ガニ黄色タグ付き極上フルコース＆甘エビ宿',
      query: '越前ガニ 温泉 旅館 福井'
    }
  },
  'hiroshima-miyajima-itsukushima-shrine-stay': {
    itsukushima_floating_torii_stay: {
      label: '世界遺産宮島・嚴島神社海上大鳥居ライトアップ宿',
      query: '宮島 嚴島神社 旅館 温泉'
    },
    misen_ropeway_panorama_stay: {
      label: '弥山原始林・宮島ロープウエー＆瀬戸内海パノラマ宿',
      query: '宮島 ホテル 絶景 瀬戸内海'
    },
    miyajima_oyster_anago_stay: {
      label: '宮島名物あなごめし＆焼きたて大粒広島牡蠣グルメ宿',
      query: '宮島 牡蠣 穴子 旅館'
    }
  },
  'oita-yufuin-kinrin-lake-retreat-stay': {
    kinrin_lake_morning_mist_stay: {
      label: '金鱗湖の幻想的な朝霧＆由布岳パノラマ温泉宿',
      query: '由布院 金鱗湖 温泉 旅館'
    },
    yunotsubo_street_retreat_stay: {
      label: '湯の坪街道そぞろ歩き＆お洒落カフェ・クラフト宿',
      query: '由布院 露天風呂 離れ 宿'
    },
    yufuin_exclusive_villa_stay: {
      label: '全室離れ・客室露天風呂付き隠れ家極上リゾート',
      query: '湯布院 隠れ家 露天風呂付客室 旅館'
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
  console.log('\nAll 5 round 26 micro hubs Rakuten hotel data saved successfully!');
}

main();
