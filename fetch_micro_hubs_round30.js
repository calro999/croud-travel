const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'yamanashi-koshu-katsunuma-wine-isawa-stay': {
    katsunuma_winery_terroir_stay: {
      label: '勝沼ワイナリー巡り・甲州ワインペアリング＆ぶどう畑テラス宿',
      query: '勝沼 笛吹 旅館 ワイン ホテル'
    },
    isawa_onsen_bihada_openair_stay: {
      label: '石和温泉郷・名湯美肌露天風呂＆甲州会席・信玄ゆかりの老舗宿',
      query: '石和温泉 旅館 高級 露天風呂'
    },
    fuefuki_peach_grape_orchard_stay: {
      label: '日本一の桃源郷・フルーツ王国笛吹果樹園＆甲州富士山ビュー宿',
      query: '石和 笛吹 ホテル 温泉 展望露天風呂'
    }
  },
  'iwate-hiraizumi-ichinoseki-geibikei-stay': {
    hiraizumi_konjikido_chusonji_stay: {
      label: '世界遺産・中尊寺金色堂＆毛越寺浄土庭園・奥州藤原文化ヘリテージ宿',
      query: '平泉 中尊寺 旅館 温泉'
    },
    geibikei_genbikei_boat_valley_stay: {
      label: '猊鼻渓舟下り・名勝厳美渓郭公だんご＆巨岩渓谷ビュー名湯宿',
      query: '一関 厳美渓 旅館 温泉 ホテル'
    },
    maesawa_beef_wanko_soba_stay: {
      label: '前沢牛極上ステーキ・一関もち食文化＆名物わんこそば美食宿',
      query: '一関 平泉 ホテル 前沢牛'
    }
  },
  'nagano-togakushi-zenkoji-monzen-obuse-stay': {
    togakushi_shrine_cedar_avenue_stay: {
      label: '戸隠神社五社めぐり・樹齢四百年杉並木＆伝統宿坊・戸隠そば宿',
      query: '戸隠 宿坊 旅館 そば 長野'
    },
    zenkoji_asagoto_monzen_stay: {
      label: '善光寺お朝事まいり・本堂床下お戒壇巡り＆門前町歴史宿',
      query: '長野 善光寺 ホテル 旅館 温泉'
    },
    obuse_kuri_hokusai_teramachi_stay: {
      label: '栗と北斎の街・小布施栗鹿の子スイーツ＆枡一市村酒造・蔵元宿',
      query: '小布施 長野 ホテル 旅館 温泉'
    }
  },
  'ehime-uwajima-uchiko-ozu-castle-stay': {
    uwajima_castle_taimeshi_pearl_stay: {
      label: '現存天守宇和島城・本場宇和島鯛めし＆真珠の海リアス式海岸宿',
      query: '宇和島 ホテル 旅館 鯛めし'
    },
    uchiko_yokaichi_white_wall_stay: {
      label: '内子八日市護国・白壁木蝋の重要伝統的建造物群＆古民家宿',
      query: '内子 大洲 ホテル 旅館'
    },
    ozu_castle_stay_hijikawa_cormorant_stay: {
      label: '伊予の小京都大洲・木造復元大洲城＆肱川鵜飼い・臥龍山荘名勝宿',
      query: '大洲 宇和島 ホテル 温泉'
    }
  },
  'yamaguchi-akiyoshidai-karst-cave-stay': {
    akiyoshidai_karst_plateau_cave_stay: {
      label: '特別天然記念物秋芳洞・東洋屈指カルスト台地＆地底探検ロッジ宿',
      query: '秋吉台 美祢 ホテル 旅館'
    },
    nagato_yumoto_otofugawa_onsen_stay: {
      label: '長門湯本温泉・音信川川床足湯＆瓦そば・恩湯ゆかりの温泉街宿',
      query: '長門湯本温泉 旅館 露天風呂 高級'
    },
    benten_blue_pond_hagi_heritage_stay: {
      label: '別府弁天池エメラルド湧水＆長門センザキッチン・萩城下町宿',
      query: '長門 萩 ホテル 温泉 旅館'
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
  console.log('\nAll 5 round 30 micro hubs Rakuten hotel data saved successfully!');
}

main();
