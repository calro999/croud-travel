const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'chiba_katori_sawara_inubosaki',
    slug: 'winter-chiba-katori-shrine-hatsumode-sawara-inubosaki-kinmedai-stay',
    pref: 'chiba',
    prefJa: '千葉県',
    prefCode: '12',
    title: '【下総国一宮・香取神宮新春初詣と小江戸佐原の雪情話】2026-2027年冬の千葉・香取＆犬吠埼！本州最速初日の出と極上寒金目鯛名宿5選',
    metaDesc: '全国約400社ある香取神社の総本社・下総国一之宮「香取神宮」新春初詣！江戸情緒残る水郷・佐原の重伝建の町並みと本州で最も早い初日の出を望む犬吠埼温泉。冬に脂が乗る銚子の至宝「寒つり金目鯛」や極上和牛に心奪われる北総・東総の厳選名宿5選。',
    spotQuery: '香取神宮',
    area: '香取・佐原・銚子',
    queries: [
      '佐原商家町ホテル ＮＩＰＰＯＮＩＡ',
      'ホテルルートイン香取佐原駅前',
      '別邸 海と森',
      '絶景の宿 犬吠埼ホテル',
      '犬吠埼観光ホテル',
      'ぎょうけい館'
    ]
  },
  {
    theme: 'okayama_tsuyama_mimasaka_santo',
    slug: 'winter-okayama-tsuyama-castle-mimasaka-santo-onsen-sozurinabe-chiyagyu-stay',
    pref: 'okayama',
    prefJa: '岡山県',
    prefCode: '33',
    title: '【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選',
    metaDesc: '西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。',
    spotQuery: '津山城',
    area: '津山・美作・湯原',
    queries: [
      'ザ・シロヤマテラス津山別邸',
      '湯原温泉 八景',
      '名泉鍵湯 奥津荘',
      '湯郷温泉 ポピースプリングス リゾート＆スパ',
      'ゆのごう美春閣',
      '湯原温泉 油屋'
    ]
  },
  {
    theme: 'shiga_taga_taisha_koto_omigyu',
    slug: 'winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay',
    pref: 'shiga',
    prefJa: '滋賀県',
    prefCode: '25',
    title: '【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選',
    metaDesc: '「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。',
    spotQuery: '多賀大社',
    area: '多賀・彦根・八日市',
    queries: [
      '彦根キャッスル リゾート＆スパ',
      '料亭旅館 やす井',
      '永源寺温泉八風の湯 宿「八風別館」',
      'クレフィール湖東',
      'ホテルビワドッグ',
      'コンフォートホテル彦根'
    ]
  },
  {
    theme: 'tokushima_mima_udatsu_kirihataji',
    slug: 'winter-tokushima-mima-udatsu-kirihataji-hatsumode-awaodori-onsen-stay',
    pref: 'tokushima',
    prefJa: '徳島県',
    prefCode: '36',
    title: '【藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣】2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選',
    metaDesc: '江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。',
    spotQuery: '脇町南町',
    area: '美馬・吉野川・阿波',
    queries: [
      'ＰＡＹＳＡＧＥ　ＭＯＲＩＧＵＣＨＩ',
      '癒しの宿 土柱ランド新温泉',
      'ビジネスホテルマツカ',
      'セントラルホテル鴨島',
      'ビジネスホテルアクセス阿波',
      'ふいご温泉'
    ]
  },
  {
    theme: 'toyama_amaharashi_tateyama_kanburi',
    slug: 'winter-toyama-amaharashi-tateyama-snow-zuiryuji-hatsumode-kanburi-stay',
    pref: 'toyama',
    prefJa: '富山県',
    prefCode: '16',
    title: '【富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣】2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選',
    metaDesc: '冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。',
    spotQuery: '雨晴海岸',
    area: '雨晴・高岡・氷見',
    queries: [
      '雨晴温泉 磯はなび',
      '移り住みたくなる宿 イミグレ',
      '氷見温泉郷 くつろぎの宿 うみあかり',
      '魚巡りの宿 永芳閣',
      'ホテルルートイン高岡駅前',
      'ブリと氷見牛の宿 ひみ栄和温泉元湯 民宿 叶'
    ]
  }
];

async function main() {
  console.log('=== Round 139: Fetching Live Rakuten Hotels ===');
  const results = {};

  for (const t of targets) {
    console.log(`\nProcessing theme: ${t.theme} (${t.area})...`);
    const hotelMap = new Map();

    for (const q of t.queries) {
      console.log(`  Searching Rakuten for: "${q}"...`);
      try {
        const list = await searchRakutenHotels(q, 5);
        console.log(`    Found ${list.length} hotels.`);
        for (const h of list) {
          const addr = (h.address1 || '') + (h.address2 || '');
          let isAllowed = addr.includes(t.prefJa);

          // 富山の場合は高岡市・氷見市に限定（富山市中心街を除外）
          if (t.theme === 'toyama_amaharashi_tateyama_kanburi') {
            isAllowed = isAllowed && (addr.includes('高岡市') || addr.includes('氷見市') || addr.includes('射水市'));
          }

          if (isAllowed && !hotelMap.has(h.hotelNo)) {
            if (h.hotelImageUrl && h.hotelName) {
              hotelMap.set(h.hotelNo, h);
            }
          }
        }
      } catch (err) {
        console.error(`    Error querying "${q}":`, err.message);
      }
      await sleep(1200); // 楽天APIレート制限配慮
    }

    const uniqueHotels = Array.from(hotelMap.values());
    console.log(`  Total matched local hotels for ${t.theme}: ${uniqueHotels.length}`);

    // 上位5宿を選定（レビュー評価順）
    const sorted = uniqueHotels.sort((a, b) => {
      const scoreA = (a.reviewAverage || 0) * 10 + (a.reviewCount > 0 ? 5 : 0);
      const scoreB = (b.reviewAverage || 0) * 10 + (b.reviewCount > 0 ? 5 : 0);
      return scoreB - scoreA;
    });

    const selected5 = sorted.slice(0, 5);
    console.log(`  Selected top 5 hotels:`);
    selected5.forEach((h, idx) => {
      console.log(`    ${idx + 1}. [No.${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, Location: ${h.address1} ${h.address2})`);
    });

    results[t.theme] = {
      meta: t,
      hotels: selected5
    };
  }

  const outPath = path.join(__dirname, 'round139_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully saved raw hotel data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
