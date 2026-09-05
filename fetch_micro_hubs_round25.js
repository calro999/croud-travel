const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'hokkaido-otaru-yoichi-canal-distillery-stay': {
    otaru_canal_retro_stay: {
      label: '小樽運河・石造り倉庫街＆北一硝子レトロ宿',
      query: '小樽 運河 ホテル 温泉'
    },
    yoichi_nikka_whisky_stay: {
      label: '余市ニッカウヰスキー蒸溜所＆日本海オーシャンリゾート',
      query: '余市 ホテル ワイン リゾート'
    },
    otaru_sankaku_market_sushi_stay: {
      label: '小樽三角市場・海鮮丼＆極上寿司グルメ宿',
      query: '小樽 ホテル 海鮮 朝食 寿司'
    }
  },
  'miyagi-matsushima-shiogama-bay-seafood-stay': {
    matsushima_bay_view_stay: {
      label: '日本三景松島・五大堂＆松島湾一望パノラマ絶景宿',
      query: '松島 温泉 宿 絶景'
    },
    shiogama_seafood_sushi_stay: {
      label: '塩竈港仲卸市場・極上生マグロ＆地酒酒蔵宿',
      query: '塩竈 松島 ホテル 寿司 海鮮'
    },
    matsushima_oyster_hotspring_stay: {
      label: '松島焼き牡蠣食べ放題＆美肌の湯松島温泉宿',
      query: '松島温泉 牡蠣 露天風呂 旅館'
    }
  },
  'tochigi-shiobara-eleven-hotsprings-valley-stay': {
    shiobara_valley_bridge_stay: {
      label: '塩原渓谷・もみじ谷大吊橋＆箒川渓流露天風呂宿',
      query: '塩原温泉 渓流 露天風呂 旅館'
    },
    shiobara_eleven_springs_stay: {
      label: '塩原十一湯・七色の天然温泉＆名湯湯巡り宿',
      query: '塩原温泉 貸切風呂 源泉かけ流し'
    },
    shiobara_yuta_soup_yakisoba_stay: {
      label: '塩原名物スープ入り焼きそば＆高原大根グルメ宿',
      query: '塩原温泉 ホテル グルメ 和牛'
    }
  },
  'shizuoka-izu-kogen-jogasaki-coast-villa-stay': {
    jogasaki_suspension_bridge_stay: {
      label: '城ヶ崎海岸・門脇吊橋＆溶岩絶壁オーシャンビュー宿',
      query: '伊豆高原 城ヶ崎海岸 露天風呂 宿'
    },
    omuro_mountain_cherry_stay: {
      label: '大室山リフト・さくらの里＆伊豆シャボテンヴィラ宿',
      query: '伊豆高原 リゾート ヴィラ 客室露天風呂'
    },
    izu_kogen_private_cottage_stay: {
      label: '伊豆高原隠れ家貸切別荘＆地金目鯛会席オーベルジュ',
      query: '伊豆高原 オーベルジュ 金目鯛 露天風呂'
    }
  },
  'hyogo-kinosaki-onsen-seven-baths-crab-stay': {
    kinosaki_seven_bath_pass_stay: {
      label: '城崎温泉・七つの外湯めぐり＆柳並木浴衣散策宿',
      query: '城崎温泉 外湯めぐり 旅館 浴衣'
    },
    kinosaki_matsuba_crab_feast_stay: {
      label: '津居山港・柴山港直送本松葉ガニ食べ尽くし極上宿',
      query: '城崎温泉 松葉ガニ 蟹 懐石 旅館'
    },
    maruyama_river_stork_stay: {
      label: '円山川湿地・コウノトリの郷＆玄武洞パノラマ宿',
      query: '城崎温泉 露天風呂 円山川 リゾート'
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
      await sleep(1500); // レートリミット回避
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(allData, null, 2), 'utf8');
  console.log('\nAll 5 micro hubs Rakuten hotel data saved successfully!');
}

main();
