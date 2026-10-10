const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'akita_oga_namahage',
    slug: 'winter-akita-oga-namahage-onsen-mayama-shrine-hatsumode-shottsuru-stay',
    pref: 'akita',
    prefJa: '秋田県',
    prefCode: '05',
    title: '【なまはげの里・真山神社新春初詣と男鹿温泉郷】2026-2027年冬の秋田・男鹿半島！名物ハタハタしょっつる鍋と石焼料理・にごり湯名宿5選',
    metaDesc: '冬の日本海に突き出す男鹿半島・国の重要無形民俗文化財「男鹿のナマハゲ」と荘厳なる「真山神社」新春開運初詣！冬の荒波が育む旬の雷魚・ハタハタの極上しょっつる鍋や、真っ赤に熱した溶岩石を桶に放り込む男鹿伝統名物「石焼料理」。保温効果抜群のにごり湯・男鹿温泉郷に癒やされる厳選名宿5選。',
    spotQuery: '真山神社',
    area: '男鹿・男鹿温泉・入道崎・真山',
    queries: [
      '男鹿温泉 結いの宿 別邸 つばき',
      '男鹿温泉 湯けむりリゾート 男鹿ホテル',
      '男鹿温泉 湯けむりリゾート 男鹿観光ホテル',
      '男鹿温泉郷 元湯雄山閣',
      '男鹿温泉 湯けむりリゾート セイコーグランドホテル'
    ]
  },
  {
    theme: 'iwate_hanamaki_kenji',
    slug: 'winter-iwate-hanamaki-onsen-kenji-ihatov-yukimi-roten-platinum-pork-stay',
    pref: 'iwate',
    prefJa: '岩手県',
    prefCode: '03',
    title: '【宮沢賢治イーハトーブの冬星空と花巻温泉郷雪見名湯】2026-2027年冬の岩手・花巻！名物白金豚しゃぶしゃぶと前沢牛・秘湯雪見露天名宿5選',
    metaDesc: '宮沢賢治が愛した銀河鉄道の夜の星空広がるイーハトーブ・冬の花巻！白銀に包まれる宮沢賢治童話村と、台川・豊沢川渓谷沿いに点在する開湯数百年の花巻十二湯。冬の身体を芯から温める名物「白金豚（プラチナポーク）」しゃぶしゃぶやすき焼き、とろける前沢牛会席。雪景色を望む極上の雪見露天風呂に浸る厳選名宿5選。',
    spotQuery: '宮沢賢治童話村',
    area: '花巻・花巻温泉郷・台温泉・大沢温泉・鉛温泉',
    queries: [
      '花巻温泉 佳松園',
      '花巻温泉 ホテル紅葉館',
      '大沢温泉 山水閣',
      '鉛温泉 藤三旅館',
      '游泉 志だて'
    ]
  },
  {
    theme: 'tochigi_shiobara_onsen',
    slug: 'winter-tochigi-shiobara-onsen-yukimi-waterfall-shrine-hatsumode-tochigigyu-stay',
    pref: 'tochigi',
    prefJa: '栃木県',
    prefCode: '09',
    title: '【開湯1200年・塩原温泉郷雪見露天風呂と塩原八幡宮新春初詣】2026-2027年冬の栃木・那須塩原！極上とちぎ和牛と名物とて焼き・乳白色にごり湯名宿5選',
    metaDesc: '開湯1200年の歴史を誇る塩原十一湯！箒川の雪化粧した渓谷美と、名瀑・竜化の滝の冬氷瀑、樹齢千年の逆杉がそびえる「塩原八幡宮」新春初詣。きめ細やかなサシがとろける最高峰「とちぎ和牛」のすき焼き・せいろ蒸しや、食べ歩きが楽しい名物「とて焼き」。多彩な泉質と雪見露天風呂に癒やされる冬の那須塩原厳選名宿5選。',
    spotQuery: '塩原温泉郷',
    area: '那須塩原・塩原温泉郷・奥塩原・新湯',
    queries: [
      '湯守田中屋',
      '割烹旅館 湯の花荘',
      '奥塩原高原ホテル',
      '四季味亭ふじや',
      '秘湯の宿 元泉館'
    ]
  },
  {
    theme: 'shizuoka_izu_shuzenji',
    slug: 'winter-shizuoka-izu-shuzenji-bamboo-path-temple-hatsumode-kinmedai-stay',
    pref: 'shizuoka',
    prefJa: '静岡県',
    prefCode: '22',
    title: '【伊豆の小京都・修善寺温泉竹林の小径と修禅寺新春開運初詣】2026-2027年冬の静岡・中伊豆！極上駿河湾金目鯛姿煮と伊豆牛会席・名湯雪見露天名宿5選',
    metaDesc: '弘法大師開基の古刹「修禅寺」での新春開運初詣と、静寂に包まれる冬の「竹林の小径」散策！伊豆最古の湯・独鈷の湯が流れる桂川沿いの風情豊かな温泉街。駿河湾・下田港から届く脂の乗った「極上金目鯛の姿煮」や天城の生わさび、風味豊かな伊豆牛サーロイン会席。文人墨客が愛した歴史名旅館で寛ぐ冬の中伊豆厳選名宿5選。',
    spotQuery: '修善寺温泉',
    area: '伊豆・修善寺・桂川・天城湯ヶ島',
    queries: [
      '修善寺温泉 湯回廊 菊屋',
      '宙 SORA 渡月荘金龍',
      '国の登録文化財の宿 新井旅館',
      '湯めぐりの宿 修善寺温泉 桂川',
      'ブリーズベイ修善寺ホテル'
    ]
  },
  {
    theme: 'wakayama_nanki_katsuura',
    slug: 'winter-wakayama-nanki-katsuura-nachi-falls-kumano-hatsumode-maguro-stay',
    pref: 'wakayama',
    prefJa: '和歌山県',
    prefCode: '30',
    title: '【世界遺産・那智の滝と熊野那智大社新春初詣】2026-2027年冬の和歌山・南紀勝浦！勝浦港水揚げ生まぐろづくしと海中洞窟温泉・紀州本クエ名宿5選',
    metaDesc: '世界遺産・熊野古道の聖地「那智の滝」の神聖な冬水しぶきと、「熊野那智大社」「那智山青岸渡寺」新春開運初詣！日本一の水揚げを誇る勝浦漁港の新鮮な「生マグロづくし」や冬の幻の高級魚「紀州天然本クエ鍋」。太平洋の荒波が間近に迫る名物海中洞窟風呂「忘帰洞」など、海と温泉の絶景に包まれる冬の南紀厳選名宿5選。',
    spotQuery: '那智滝',
    area: '南紀勝浦・那智勝浦・那智山・太地',
    queries: [
      '南紀勝浦温泉 ホテル浦島',
      '碧き島の宿 熊野別邸 中の島',
      '南紀勝浦温泉 料理旅館 万清楼',
      '勝浦温泉 休暇村 南紀勝浦',
      '太地温泉 花いろどりの宿 花游'
    ]
  }
];

async function main() {
  console.log('=== Fetching Live Rakuten Hotels for Round 143 ===\n');
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

  const outPath = path.join(__dirname, 'round143_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`✓ Saved round143_raw_hotels.json to ${outPath}`);
}

main().catch(console.error);
