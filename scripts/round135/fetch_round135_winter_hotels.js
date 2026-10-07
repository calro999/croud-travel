const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'osaka_inunakiyama_onsen_kongosan',
    slug: 'winter-osaka-inunakiyama-onsen-kongosan-juhyo-inunakipork-stay',
    pref: 'osaka',
    prefJa: '大阪府',
    title: '【静寂の渓谷露天と金剛山樹氷】2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選',
    metaDesc: '都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。',
    spotQuery: '犬鳴山 (大阪府)',
    area: '犬鳴山温泉・泉佐野・南河内',
    queries: [
      '犬鳴山温泉 不動口館',
      '犬鳴山温泉 み奈美亭',
      '関空温泉ホテルガーデンパレス',
      'ホテルニューユタカ 泉佐野',
      'スターゲイトホテル関西エアポート',
      '犬鳴山温泉'
    ]
  },
  {
    theme: 'saga_imari_arita_ookawachiyama',
    slug: 'winter-saga-imari-arita-ookawachiyama-imarigyu-pottery-stay',
    pref: 'saga',
    prefJa: '佐賀県',
    title: '【秘窯の里大川内山と最高峰伊万里牛】2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選',
    metaDesc: '静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。',
    spotQuery: '大川内山',
    area: '伊万里・有田・西松浦',
    queries: [
      'セントラルホテル伊万里',
      '伊万里グランドホテル',
      'ＨＯＴＥＬ ＡＺ 長崎波佐見店',
      'ホテルステイ伊万里',
      'Rakuten STAY HOUSE x WILL STYLE 佐賀伊万里',
      '伊万里'
    ]
  },
  {
    theme: 'tokushima_mima_udatsu_historic',
    slug: 'winter-tokushima-mima-udatsu-historic-awao-dori-onsen-stay',
    pref: 'tokushima',
    prefJa: '徳島県',
    title: '【藍商のうだつの町並みと阿波尾鶏鍋】2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選',
    metaDesc: '重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。',
    spotQuery: '脇町南町',
    area: '美馬・脇町・吉野川',
    queries: [
      'ビジネスホテルマツカ',
      '峡谷の湯宿 大歩危峡まんなか',
      '大歩危温泉 サンリバー大歩危',
      '民宿 うり坊',
      'ホテル サンシャイン徳島',
      '脇町'
    ]
  },
  {
    theme: 'ehime_kumakogen_shikoku_karst',
    slug: 'winter-ehime-kumakogen-shikoku-karst-snow-starry-hoshifuru-stay',
    pref: 'ehime',
    prefJa: '愛媛県',
    title: '【標高1400mの白銀カルストと満天の星空】2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選',
    metaDesc: '四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。',
    spotQuery: '四国カルスト',
    area: '久万高原・四国カルスト・面河渓',
    queries: [
      '星ふるヴィレッジTENGU',
      '国民宿舎 古岩屋荘',
      'ふるさと旅行村',
      'ホテルモナコ 久万高原',
      '道後温泉 椿館',
      '久万高原'
    ]
  },
  {
    theme: 'kochi_niyodogawa_niyodoblue_nakatsu',
    slug: 'winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay',
    pref: 'kochi',
    prefJa: '高知県',
    title: '【冬に透明度極まる仁淀ブルーと中津渓谷】2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選',
    metaDesc: '年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。',
    spotQuery: '仁淀川',
    area: '仁淀川・いの町・中津渓谷',
    queries: [
      '中津渓谷 ゆの森',
      '亀の井ホテル 高知',
      '土佐和紙工芸村',
      'ホテルSP-HARUNO',
      'サザンシティホテル',
      '高知市'
    ]
  }
];

async function main() {
  console.log('=== Round 135: Fetching Live Rakuten Hotels for 5 Winter Features ===');
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
            console.log(`    ✓ Found: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage || 'N/A'})`);
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

  const outPath = path.join(__dirname, 'round135_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSaved raw hotels to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
