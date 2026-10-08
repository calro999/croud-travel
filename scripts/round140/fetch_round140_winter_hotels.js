const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kagawa_higashikagawa_hiketa',
    slug: 'winter-kagawa-higashikagawa-hiketa-shirotori-shrine-hamachi-stay',
    pref: 'kagawa',
    prefJa: '香川県',
    prefCode: '37',
    title: '【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選',
    metaDesc: '日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。',
    spotQuery: '白鳥神社 (東かがわ市)',
    area: '東かがわ・さぬき・高松東部',
    queries: [
      'じゃこ丸パーク津田',
      'あじ温泉 庵治観光ホテル',
      'クラフトホテル瀬戸内',
      '夕凪の湯 HOTEL 花樹海',
      '高松国際ホテル'
    ]
  },
  {
    theme: 'fukui_obama_myotsuji',
    slug: 'winter-fukui-obama-myotsuji-temple-snow-wakasa-fugu-mackerel-stay',
    pref: 'fukui',
    prefJa: '福井県',
    prefCode: '18',
    title: '【御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ】2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選',
    metaDesc: '国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。',
    spotQuery: '明通寺',
    area: '小浜・若狭・三方五湖',
    queries: [
      'せくみ屋',
      '若狭みかた きらら温泉 水月花',
      '海香の宿 波華楼',
      '四季彩の宿 花椿',
      'ホテルアーバンポート'
    ]
  },
  {
    theme: 'aichi_okazaki_castle_iga',
    slug: 'winter-aichi-okazaki-castle-iga-hachimangu-hatsumode-hatcho-miso-mikawagyu-stay',
    pref: 'aichi',
    prefJa: '愛知県',
    prefCode: '23',
    title: '【徳川家康生誕の城下町・岡崎城雪景色と伊賀八幡宮新春初詣】2026-2027年冬の愛知・岡崎！本場八丁味噌鍋と三河牛会席名宿5選',
    metaDesc: '徳川家康公生誕の地・岡崎城と徳川将軍家祈願所「伊賀八幡宮」新春開運初詣！二社のみが守る伝統の八丁味噌蔵巡りと、冬に温まる濃厚八丁味噌鍋や三河牛すき焼き。三河の奥座敷や快適シティで過ごす冬の厳選名宿5選。',
    spotQuery: '伊賀八幡宮',
    area: '岡崎・西三河・蒲郡近郊',
    queries: [
      '岡崎ニューグランドホテル',
      'ＡＢホテル岡崎',
      'ホテルリブマックス岡崎',
      '天の丸',
      'ＡＢホテル三河安城'
    ]
  },
  {
    theme: 'gifu_ena_iwamura_castle',
    slug: 'winter-gifu-ena-iwamura-castle-snow-enakyo-onsen-goheimochi-hidagyu-stay',
    pref: 'gifu',
    prefJa: '岐阜県',
    prefCode: '21',
    title: '【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選',
    metaDesc: '霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。',
    spotQuery: '岩村城',
    area: '恵那・岩村・中津川',
    queries: [
      '岩村山荘',
      '恵那峡温泉ホテル ゆずり葉',
      'ホテル花更紗',
      'お宿Ｏｎｎ 中津川',
      'ほしとせせらぎのぐらんぴんぐ'
    ]
  },
  {
    theme: 'shimane_hamada_tatamigaura_asahi',
    slug: 'winter-shimane-hamada-tatamigaura-asahi-onsen-donchitchi-nodoguro-stay',
    pref: 'shimane',
    prefJa: '島根県',
    prefCode: '32',
    title: '【冬の日本海白波奇勝・石見畳ヶ浦と幻のどんちっちノドグロ】2026-2027年冬の島根・浜田！美肌名湯旭温泉と石見神楽冬情話名宿5選',
    metaDesc: '天然記念物「石見畳ヶ浦」の豪快な日本海白波と冬の奇岩絶景！脂の乗り日本一と称される浜田港特選「どんちっちノドグロ」の姿焼き・小鍋と石見神楽の夜。PH高き美肌のぬる湯・旭温泉や有福温泉で温まる冬の石見厳選名宿5選。',
    spotQuery: '石見畳ヶ浦',
    area: '浜田・江津・旭温泉',
    queries: [
      '島根浜田ワシントンホテルプラザ',
      'グリーンリッチホテル浜田駅前',
      '旭温泉 隠家ゆかり',
      '美又温泉 かめや旅館',
      '有福温泉 三階旅館'
    ]
  }
];

async function main() {
  console.log('=== Fetching Live Rakuten Hotels for Round 140 ===\n');
  const results = {};

  for (const t of targets) {
    console.log(`[Target: ${t.prefJa} - ${t.area}] queries count: ${t.queries.length}`);
    const matchedHotels = [];
    const seenHotelNos = new Set();

    for (const q of t.queries) {
      if (matchedHotels.length >= 5) break;
      console.log(`  Searching Rakuten for: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1200);
        for (const h of hotels) {
          if (!seenHotelNos.has(h.hotelNo) && matchedHotels.length < 5) {
            seenHotelNos.add(h.hotelNo);
            matchedHotels.push(h);
            console.log(`    -> Hit: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
          }
        }
      } catch (err) {
        console.error(`    Error searching "${q}":`, err.message);
      }
    }

    results[t.theme] = {
      meta: t,
      hotels: matchedHotels
    };
    console.log(`  Total hotels collected for ${t.theme}: ${matchedHotels.length}\n`);
  }

  const outPath = path.join(__dirname, 'round140_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`✓ Saved round140_raw_hotels.json to ${outPath}`);
}

main().catch(console.error);
