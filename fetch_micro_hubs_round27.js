const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'hokkaido-hakodate-motomachi-goryokaku-nightview-stay': {
    hakodate_nightview_motomachi_stay: {
      label: '函館山世界三大夜景・元町異人館教会群＆ベイエリア赤レンガ宿',
      query: '函館 元町 赤レンガ ホテル 温泉'
    },
    goryokaku_star_fortress_stay: {
      label: '五稜郭タワー・星形城郭桜＆函館塩ラーメン湯の川温泉宿',
      query: '函館 湯の川温泉 露天風呂 旅館'
    },
    hakodate_morning_market_squid_stay: {
      label: '函館朝市・活イカ釣りと極上海鮮丼＆函館朝食バイキングホテル',
      query: '函館 朝食 朝市 海鮮 ホテル'
    }
  },
  'saitama-chichibu-nagatoro-line-kudari-stay': {
    nagatoro_line_rocky_pavement_stay: {
      label: '長瀞ライン下り・天然記念物岩畳＆宝登山ロープウェイ宿',
      query: '長瀞 温泉 旅館 露天風呂'
    },
    chichibu_shrine_shibazakura_stay: {
      label: '秩父神社・羊山公園芝桜の丘＆夜祭歴史風情宿',
      query: '秩父 旅館 温泉 露天風呂'
    },
    mitsumine_shrine_cloud_sea_stay: {
      label: '三峯神社・関東屈指の天空パワースポット＆雲海秘境宿',
      query: '秩父 三峯 ホテル 温泉'
    }
  },
  'shiga-biwako-hikone-castle-nagahama-kurokabe-stay': {
    hikone_national_treasure_castle_stay: {
      label: '国宝彦根城・玄宮園借景＆近江牛極上懐石宿',
      query: '彦根 ホテル 琵琶湖 近江牛'
    },
    nagahama_kurokabe_square_stay: {
      label: '長浜黒壁スクエア・秀吉長浜城＆琵琶湖畔夕陽リゾート宿',
      query: '長浜 琵琶湖 露天風呂 ホテル'
    },
    biwako_lake_view_hotspring_stay: {
      label: 'びわ湖一望パノラマ温泉＆雄琴温泉レイクビューリゾート',
      query: 'おごと温泉 露天風呂 琵琶湖 旅館'
    }
  },
  'kagawa-kotohira-konpira-shrine-sanuki-udon-stay': {
    konpira_thousand_stairs_stay: {
      label: 'こんぴらさん・金刀比羅宮785段本宮参拝＆門前町レトロ温泉宿',
      query: '琴平 温泉 旅館 金刀比羅宮'
    },
    sanuki_udon_craft_gourmet_stay: {
      label: '本場讃岐うどん名店巡り＆手打ち体験・香川骨付鳥グルメ宿',
      query: '琴平 讃岐うどん ホテル 温泉'
    },
    kotohira_kabuki_theatre_stay: {
      label: '日本最古の芝居小屋「旧金毘羅大芝居（金丸座）」＆庭園露天宿',
      query: '琴平温泉 露天風呂 懐石 旅館'
    }
  },
  'okinawa-ishigaki-yaeyama-kabira-bay-stay': {
    kabira_bay_manta_coral_stay: {
      label: 'ミシュラン三ツ星・川平湾エメラルドグラスボート＆ビーチリゾート',
      query: '石垣島 川平湾 リゾート ホテル'
    },
    yaeyama_island_hopping_stay: {
      label: '八重山諸島アイランドホッピング拠点（竹富島・西表島）＆離島ターミナル宿',
      query: '石垣島 離島ターミナル ホテル プール'
    },
    ishigaki_beef_starry_sky_stay: {
      label: '石垣牛A5炭火焼肉＆日本初の国際星空保護区パノラマヴィラ',
      query: '石垣島 リゾート ヴィラ プライベートプール'
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
  console.log('\nAll 5 round 27 micro hubs Rakuten hotel data saved successfully!');
}

main();
