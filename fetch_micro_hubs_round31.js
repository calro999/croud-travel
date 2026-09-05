const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'shizuoka-mishima-shuzenji-numazu-port-stay': {
    mishima_skywalk_shrine_stay: {
      label: '富士山絶景三島スカイウォーク＆伊豆国一之宮三嶋大社宿',
      query: '三島 ホテル 富士山'
    },
    shuzenji_bamboo_onsen_heritage_stay: {
      label: '伊豆最古の名湯修善寺温泉・竹林の小径＆老舗木造旅館',
      query: '修善寺温泉 旅館 露天風呂 高級'
    },
    numazu_port_deepsea_seafood_stay: {
      label: '沼津港深海水族館・朝獲れ海鮮浜焼き＆駿河湾パノラマ宿',
      query: '沼津 ホテル 海鮮 港'
    }
  },
  'nagasaki-unzen-shimabara-castle-volcano-stay': {
    unzen_jigoku_sulfur_onsen_stay: {
      label: '雲仙地獄の湯けむり・白濁硫黄泉＆日本最古パブリックリゾート宿',
      query: '雲仙温泉 旅館 白濁 露天風呂'
    },
    shimabara_castle_samurai_spring_stay: {
      label: '島原城天守・名水湧水武家屋敷＆島原名物「具雑煮」郷土宿',
      query: '島原 ホテル 旅館 温泉'
    },
    ariake_sea_sunset_champon_stay: {
      label: '有明海夕日オーシャンビュー・小浜温泉日本一の足湯＆温泉卵宿',
      query: '小浜温泉 旅館 夕日 露天風呂'
    }
  },
  'fukushima-urabandai-goshikinuma-lake-stay': {
    goshikinuma_mystic_ponds_stay: {
      label: '神秘のエメラルド沼群・五色沼自然探勝路＆磐梯高原リゾート宿',
      query: '裏磐梯 ホテル 温泉 リゾート'
    },
    hibara_lake_canoe_bandaisan_stay: {
      label: '桧原湖カヌー・磐梯山噴火記念館＆雄大マウンテンビュー宿',
      query: '裏磐梯 旅館 露天風呂'
    },
    aizu_yamano_sachi_french_stay: {
      label: '会津高原の旬菜フレンチ・星空観察＆源泉かけ流し温泉宿',
      query: '磐梯高原 ホテル 温泉 星空'
    }
  },
  'mie-toba-shima-kashikojima-pearl-stay': {
    ago_bay_kashikojima_sunset_stay: {
      label: '英虞湾リアス式パノラマ・賢島エスパーニャクルーズ＆絶景リゾート宿',
      query: '志摩 賢島 ホテル リゾート 露天風呂'
    },
    toba_aquarium_pearl_island_stay: {
      label: '日本一の飼育種類鳥羽水族館＆ミキモト真珠島・海女の実演宿',
      query: '鳥羽温泉 旅館 露天風呂 海鮮'
    },
    ise_ebi_abalone_ama_hut_stay: {
      label: '本場伊勢海老・あわび炭火焼き＆現役海女小屋体験美食宿',
      query: '鳥羽 志摩 ホテル 伊勢海老 あわび'
    }
  },
  'kumamoto-amakusa-sakitsu-dolphin-islands-stay': {
    sakitsu_church_world_heritage_stay: {
      label: '世界遺産・天草の崎津集落（海の天主堂）＆キリシタン史跡宿',
      query: '天草 旅館 温泉 下島'
    },
    amakusa_five_bridges_drive_stay: {
      label: '天草五橋パールライン・シーサイドドライブ＆海鮮パノラマ宿',
      query: '天草 ホテル リゾート 露天風呂'
    },
    wild_dolphin_cruising_prawn_stay: {
      label: '野生イルカウォッチング遭遇率98％＆名物天草車海老会席宿',
      query: '天草 ホテル 海鮮 車海老 イルカ'
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
  console.log('\nAll 5 round 31 micro hubs Rakuten hotel data saved successfully!');
}

main();
