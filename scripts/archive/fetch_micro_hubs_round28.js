const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'hokkaido-toya-noboribetsu-jigokudani-stay': {
    noboribetsu_jigokudani_stay: {
      label: '登別地獄谷・九種類の源泉デパート＆硫黄泉名門宿',
      query: '登別温泉 露天風呂 旅館 硫黄泉'
    },
    toya_lake_fireworks_stay: {
      label: '洞爺湖ロングラン花火＆有珠山昭和新山ジオパーク宿',
      query: '洞爺湖温泉 レイクビュー 露天風呂 ホテル'
    },
    shikotsu_toya_nature_stay: {
      label: '支笏洞爺国立公園・日本屈指の透明度カルデラ湖畔リゾート',
      query: '洞爺湖 ホテル 露天風呂 リゾート'
    }
  },
  'chiba-kamogawa-katsuura-boso-seafood-stay': {
    kamogawa_seaworld_stay: {
      label: '鴨川シーワールド・シャチパフォーマンス至近オーシャン宿',
      query: '鴨川 温泉 オーシャンビュー ホテル 千葉'
    },
    katsuura_morning_market_stay: {
      label: '勝浦四百年朝市・勝浦タンタンメン＆極上生カツオ宿',
      query: '勝浦 ホテル 旅館 海鮮 温泉 千葉'
    },
    boso_kinmedai_seafood_stay: {
      label: '南房総地金目鯛姿煮＆伊勢海老・アワビ贅沢海鮮会席宿',
      query: '房総 温泉 旅館 金目鯛 伊勢海老'
    }
  },
  'shizuoka-atagawa-inatori-kinmedai-hotspring-stay': {
    atagawa_hotspring_steam_stay: {
      label: '熱川温泉・湯けむり温泉櫓＆波打ち際露天風呂宿',
      query: '熱川温泉 露天風呂 海 旅館'
    },
    inatori_kinmedai_gourmet_stay: {
      label: '稲取港直送ブランド「稲取キンメ」煮付け＆雛のつるし飾り宿',
      query: '稲取温泉 金目鯛 旅館 露天風呂'
    },
    izu_banana_alligator_stay: {
      label: '熱川バナナワニ園＆相模湾伊豆大島パノラマ絶景宿',
      query: '東伊豆 温泉 ホテル 露天風呂 絶景'
    }
  },
  'kagoshima-sakurajima-kinko-bay-kurobuta-stay': {
    sakurajima_volcano_view_stay: {
      label: '桜島活火山一望パノラマ＆錦江湾オーシャンビュー宿',
      query: '鹿児島 桜島 展望 温泉 ホテル'
    },
    kurobuta_shabu_gourmet_stay: {
      label: '鹿児島特産かごしま黒豚しゃぶしゃぶ＆黒毛和牛郷土会席宿',
      query: '鹿児島市 ホテル 温泉 黒豚 郷土料理'
    },
    shiroyama_observatory_stay: {
      label: '城山展望台・西郷隆盛洞窟＆地下天然温泉極上ホテル',
      query: '城山ホテル 鹿児島 温泉 露天風呂'
    }
  },
  'miyazaki-takachiho-gorge-myth-power-stay': {
    takachiho_gorge_boat_stay: {
      label: '神話の里・高千穂峡真名井の滝ボート＆柱状節理峡谷宿',
      query: '高千穂 旅館 温泉 宮崎'
    },
    amanoyasu_kawara_myth_stay: {
      label: '天岩戸神社・天安河原八百万の神＆高千穂神楽体験宿',
      query: '高千穂 ホテル 旅館 神話'
    },
    takachiho_beef_gourmet_stay: {
      label: '内閣総理大臣賞・最高峰高千穂牛ステーキ＆神話会席宿',
      query: '高千穂 宿 高千穂牛 宮崎'
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
  console.log('\nAll 5 round 28 micro hubs Rakuten hotel data saved successfully!');
}

main();
