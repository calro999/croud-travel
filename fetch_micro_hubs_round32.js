const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'tochigi-nasu-shiobara-itamuro-kuroiso-stay': {
    nasu_highland_ropeway_stay: {
      label: '那須連山茶臼岳ロープウェイ・殺生石＆高原リゾート温泉宿',
      query: '那須温泉 旅館 露天風呂 リゾート'
    },
    itamuro_onsen_standing_bath_stay: {
      label: '下野の薬湯・板室温泉「杖いらずの立ち湯」＆静寂の渓流湯治宿',
      query: '板室温泉 旅館'
    },
    kuroiso_cafe_nasu_wagyu_stay: {
      label: '黒磯駅前レトロカフェ通り＆那須黒毛和牛ステーキ・隠れ家宿',
      query: '那須塩原 ホテル 那須牛'
    }
  },
  'nagano-azumino-wasabi-hotaka-art-stay': {
    daio_wasabi_farm_watermill_stay: {
      label: '大王わさび農場・蓼川水車小屋＆湧水クリアカヤック体験宿',
      query: '安曇野 ホテル 温泉 リゾート'
    },
    hotaka_onsen_japan_alps_stay: {
      label: '穂高温泉郷・北アルプス常念岳ビュー露天風呂＆信州サーモン宿',
      query: '穂高温泉郷 旅館 露天風呂'
    },
    azumino_art_line_museum_stay: {
      label: '安曇野アートライン美術館めぐり・禄山美術館＆クラフト工房宿',
      query: '安曇野 旅館 温泉 そば'
    }
  },
  'hyogo-ako-hinase-oyster-castle-stay': {
    ako_castle_samurai_heritage_stay: {
      label: '忠臣蔵の聖地・国史跡赤穂城跡＆大石神社・播州赤穂歴史宿',
      query: '赤穂温泉 旅館 露天風呂'
    },
    harima_sea_sunset_onsen_stay: {
      label: '赤穂御崎・播磨灘パノラマ夕日露天風呂＆絶景インフィニティ温泉宿',
      query: '赤穂 ホテル 温泉 夕日'
    },
    sakoshi_oyster_hinase_gourmet_stay: {
      label: '冬の味覚・名物坂越かき会席＆日生カキオコ・瀬戸内海鮮宿',
      query: '赤穂 旅館 牡蠣 料理'
    }
  },
  'kagawa-marugame-sakaide-seto-bridge-stay': {
    marugame_castle_stone_wall_stay: {
      label: '石垣の名城・現存天守丸亀城＆丸亀うちわ体験城下町宿',
      query: '丸亀 ホテル'
    },
    honetsukidori_sanuki_udon_stay: {
      label: '元祖「骨付鳥」スパイシー肉汁＆讃岐うどん名店めぐり宿',
      query: '丸亀 坂出 ホテル 讃岐うどん'
    },
    seto_oohashi_bridge_sunset_stay: {
      label: '瀬戸大橋パノラマ夜景・東山魁夷せとうち美術館＆オーシャンビュー宿',
      query: '坂出 ホテル 瀬戸大橋'
    }
  },
  'kagoshima-ibusuki-sand-bath-kaimondake-stay': {
    ibusuki_natural_sand_bath_stay: {
      label: '世界唯一・天然砂むし温泉「砂楽」＆錦江湾オーシャンビュー名湯宿',
      query: '指宿温泉 旅館 砂むし 露天風呂'
    },
    kaimondake_satsuma_fuji_stay: {
      label: '薩摩富士「開聞岳」パノラマ・JR最南端西大山駅＆池田湖イッシー宿',
      query: '指宿 ホテル 開聞岳'
    },
    chiran_samurai_residence_stay: {
      label: '薩摩の小京都「知覧武家屋敷庭園」＆特攻平和会館・かごしま黒豚宿',
      query: '指宿 鹿児島 ホテル 黒豚 温泉'
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
  console.log('\nAll 5 round 32 micro hubs Rakuten hotel data saved successfully!');
}

main();
