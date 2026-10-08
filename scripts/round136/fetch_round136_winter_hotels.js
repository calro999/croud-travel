const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'mie_kumano_owase_kodo',
    slug: 'winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay',
    pref: 'mie',
    prefJa: '三重県',
    prefCode: '24',
    title: '【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選',
    metaDesc: '冬こそ歩き頃を迎える世界遺産「熊野古道伊勢路」と奇岩怪石の景勝「鬼ヶ城」！冬に旬を迎える極上「尾鷲真鯛」や幻の銘柄和牛「熊野牛」、名湯・湯ノ口温泉に寛ぎ心洗われる新春の紀伊半島おすすめ名宿5選。',
    spotQuery: '鬼ヶ城',
    area: '熊野・尾鷲・熊野古道',
    queries: [
      '世界遺産リゾート 熊野倶楽部',
      '里創人 熊野倶楽部',
      '入鹿温泉 ホテル瀞流荘',
      '湯ノ口温泉 瀞流荘',
      'ホテルなみ 熊野',
      '尾鷲シーサイドビュー',
      '熊野市 ホテル',
      '尾鷲 ホテル'
    ]
  },
  {
    theme: 'saitama_chichibu_hyochu_ogano',
    slug: 'winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay',
    pref: 'saitama',
    prefJa: '埼玉県',
    prefCode: '11',
    title: '【尾ノ内百景氷柱と薬師の湯】2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選',
    metaDesc: '冬の秩父路を幻想的に彩る尾ノ内百景氷柱・三十槌の氷柱と秩父三社新春初詣！名峰両神山麓に湧く美肌の「小鹿野温泉薬師の湯」、滋味豊かな秩父ジビエ猪鹿ぼたん鍋と極上武州和牛を堪能する大人の隠れ家名宿5選。',
    spotQuery: '三十槌の氷柱',
    area: '秩父・小鹿野・両神',
    queries: [
      '小鹿野温泉 須崎旅館',
      '越後屋旅館 秩父',
      '国民宿舎 両神荘',
      '秩父温泉 梁山泊',
      '宮本家 秩父',
      '新木鉱泉旅館',
      '小鹿野温泉',
      '秩父 旅館'
    ]
  },
  {
    theme: 'shiga_yogo_lake_wakasagi',
    slug: 'winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay',
    pref: 'shiga',
    prefJa: '滋賀県',
    prefCode: '25',
    title: '【神秘の余呉湖ワカサギと本場天然真鴨鍋】2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選',
    metaDesc: '白銀の賤ヶ岳を映す羽衣伝説の余呉湖で冬のワカサギ釣りと雪景色散策！湖北の冬の至宝「天然真鴨鍋」の芳醇な旨味と最高峰「近江牛」すき焼き、信長・浅井三姉妹ゆかりの名湯・須賀谷温泉に温まる贅沢な冬名宿5選。',
    spotQuery: '余呉湖',
    area: '余呉湖・長浜湖北・賤ヶ岳',
    queries: [
      '須賀谷温泉',
      '己高庵',
      '想古亭 源内',
      '北近江リゾート',
      'ホテル＆リゾーツ 長浜',
      'レジーナリゾートびわ湖長浜',
      '浜湖月',
      '長浜 温泉 旅館'
    ]
  },
  {
    theme: 'fukushima_tadami_yanaizu',
    slug: 'winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay',
    pref: 'fukushima',
    prefJa: '福島県',
    prefCode: '07',
    title: '【白銀のJR只見線と赤べこ発祥圓蔵寺】2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選',
    metaDesc: '世界を魅了する第一只見川橋梁の雪景色と赤べこ発祥の霊場「圓蔵寺」新春初詣！只見川の清流を望む柳津温泉・早戸温泉の雪見露天風呂、旨味凝縮の「会津地鶏鍋」と極上馬刺しに舌鼓を打つ奥会津の冬籠もり名宿5選。',
    spotQuery: '圓蔵寺 (福島県会津柳津町)',
    area: '奥会津・只見・会津柳津',
    queries: [
      '瀞流の宿 かわち',
      'つきみが丘町民センター',
      '早戸温泉 つるの湯',
      '宮下温泉 ふるさと荘',
      '柳津温泉 内田屋',
      '奥会津 旅館',
      '会津坂下 ホテル',
      '会津柳津'
    ]
  },
  {
    theme: 'miyazaki_ebino_plateau_shiratori',
    slug: 'winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay',
    pref: 'miyazaki',
    prefJa: '宮崎県',
    prefCode: '45',
    title: '【霧島連山樹氷と西郷隆盛癒やしの白鳥温泉】2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選',
    metaDesc: '標高1,200mの白銀世界が広がるえびの高原の樹氷と白鳥神社新春初詣！西郷どんが愛した名湯「白鳥温泉」の展望露天と天然蒸し風呂、日本一の栄冠に輝く最高峰「宮崎牛」極上すき焼きに心満たされる南国宮崎の冬名宿5選。',
    spotQuery: 'えびの高原',
    area: 'えびの高原・生駒高原・小林',
    queries: [
      '京町温泉 十兵衛の宿',
      '京町温泉 玉泉館',
      '京町温泉 あけぼの荘',
      '極楽温泉 匠の宿',
      '湯之元温泉 宮崎県'
    ]
  }
];

async function main() {
  console.log('=== Round 136: Fetching Live Rakuten Hotels for 5 Winter Features ===');
  const results = {};

  for (const t of targets) {
    console.log(`\nFetching hotels for: ${t.title} (${t.theme})`);
    const collectedHotels = [];
    const seenHotelNos = new Set();

    for (const q of t.queries) {
      if (collectedHotels.length >= 5) break;
      console.log(`  Querying Rakuten API: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 5);
        await sleep(400); // 礼儀正しいAPIウェイト
        for (const h of hotels) {
          if (!seenHotelNos.has(h.hotelNo)) {
            seenHotelNos.add(h.hotelNo);
            collectedHotels.push(h);
            console.log(`    ✓ Found: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage || 'N/A'}, Price: ${h.hotelMinCharge || 'N/A'})`);
            if (collectedHotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`    Error fetching for query "${q}":`, err.message);
      }
    }

    if (collectedHotels.length < 5) {
      console.warn(`  ⚠️ Only found ${collectedHotels.length} hotels for ${t.theme}! Need 5.`);
    }

    results[t.theme] = {
      target: t,
      hotels: collectedHotels.slice(0, 5)
    };
  }

  const outPath = path.join(__dirname, 'round136_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSaved raw hotels to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
