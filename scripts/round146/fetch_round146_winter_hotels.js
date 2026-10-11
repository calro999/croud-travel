const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hokkaido_shikotsuko_luxury',
    slug: 'winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay',
    pref: 'hokkaido',
    prefJa: '北海道',
    prefCode: '01',
    title: '【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選',
    metaDesc: '日本屈指の透明度を誇るカルデラ湖・支笏湖。11月〜12月の初冬は観光の混雑が去り、澄み渡る「支笏湖ブルー」の静寂と冠雪した恵庭岳の雄姿が湖面に映る最も美しい季節。鶴雅グループの最高峰ブランド「しこつ湖 鶴雅別荘 碧の座」をはじめ、全室に温泉露天風呂を備えた大人のプレミアムリゾート。とろける極上白老牛や噴火湾・オホーツクの冬の味覚を堪能する大人の記念日ステイ厳選5選。',
    spotQuery: '支笏湖',
    wikiPage: '支笏湖',
    area: '支笏湖・千歳・恵庭',
    queries: [
      'しこつ湖 鶴雅別荘 碧の座',
      '支笏湖第一寶亭留 翠山亭',
      'レイクサイドヴィラ 翠明閣',
      '丸駒温泉旅館',
      '支笏湖温泉'
    ]
  },
  {
    theme: 'tochigi_nikko_chuzenji_lake_luxury',
    slug: 'winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay',
    pref: 'tochigi',
    prefJa: '栃木県',
    prefCode: '09',
    title: '【標高1200mの奥日光・中禅寺湖畔に佇む最高峰リゾート】2026-2027年11-12月初冬の栃木・日光中禅寺湖！「ザ・リッツ・カールトン日光」＆「中禅寺金谷ホテル」・男体山の初雪と日光湯元白濁硫黄泉・極上とちぎ和牛名宿5選',
    metaDesc: '標高約1200mの高地に位置し、霊峰・男体山と青く澄み渡る中禅寺湖を望む奥日光。マリオット最高峰「ザ・リッツ・カールトン日光」やクラシックホテルの名門「中禅寺金谷ホテル」など、世界基準のホスピタリティと日光湯元から引湯する乳白色の硫黄泉露天風呂。澄んだ大気のもとで味わう最高ランク「とちぎ和牛」のステーキや本格フレンチディナーを堪能する極上の贅沢リトリート厳選5選。',
    spotQuery: '中禅寺湖',
    wikiPage: '中禅寺湖',
    area: '日光・中禅寺湖・奥日光・日光湯元',
    queries: [
      'ザ・リッツ・カールトン日光',
      '中禅寺金谷ホテル',
      '奥日光ホテル四季彩',
      '日光中禅寺温泉 旅籠なごみ',
      '日光湯元温泉 奥日光森のホテル'
    ]
  },
  {
    theme: 'shizuoka_atami_izusan_luxury',
    slug: 'winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay',
    pref: 'shizuoka',
    prefJa: '静岡県',
    prefCode: '22',
    title: '【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選',
    metaDesc: '都心から新幹線でわずか45分、相模湾のコバルトブルーを一望する熱海・伊豆山。太平洋を見下ろす高台に建ち、全室に源泉掛け流し露天風呂を備えた名門「ATAMI せかいえ」や、大人の静寂を約束する迎賓館リゾート。初冬の澄んだ夜空を彩る名物「熱海海上花火大会」の特等席と、冬に甘みを増す駿河湾・相模湾の活伊勢海老、ブランド牛「静岡そだち」の鉄板焼き。海と空が溶け合う至高のラグジュアリーステイ厳選5選。',
    spotQuery: '伊豆山神社',
    wikiPage: '伊豆山神社',
    area: '熱海・伊豆山・南熱海・網代',
    queries: [
      'ATAMI せかいえ',
      '熱海倶楽部迎賓館',
      'ホテルグランバッハ熱海クレッシェンド',
      '熱海温泉 古屋旅館',
      '熱海後楽園ホテル'
    ]
  },
  {
    theme: 'kyoto_arashiyama_luxury',
    slug: 'winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay',
    pref: 'kyoto',
    prefJa: '京都府',
    prefCode: '26',
    title: '【保津川渓流沿いの歴史美と嵐山温泉露天付きプライベートスイート】2026-2027年11-12月初冬の京都・嵐山！世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」＆老舗料亭旅館・初冬の渡月橋と極上京懐石名宿5選',
    metaDesc: '紅葉の喧騒が落ち着き、凛とした初冬の静寂が包み込む京都・嵐山。保津川の清流沿いに佇む世界的ラグジュアリーホテル「翠嵐 ラグジュアリーコレクションホテル 京都」をはじめ、嵐山温泉の肌触り滑らかな湯を客室露天風呂で愉しむ最高峰の宿。渡月橋や竹林の小径の静かな朝散策と、伝統の技が光る繊細な京懐石・丹波牛会席。日本の美意識の粋を極めた大人の記念日ステイ厳選5選。',
    spotQuery: '渡月橋',
    wikiPage: '渡月橋',
    area: '京都・嵐山・嵯峨野・保津峡',
    queries: [
      '翠嵐 ラグジュアリーコレクションホテル 京都',
      '京都 嵐山温泉 花伝抄',
      '嵐山辨慶',
      '京都 嵐山温泉 渡月亭',
      '旅亭 嵐月'
    ]
  },
  {
    theme: 'ishikawa_kaga_yamashiro_luxury',
    slug: 'winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay',
    pref: 'ishikawa',
    prefJa: '石川県',
    prefCode: '17',
    title: '【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選',
    metaDesc: '開湯1300年の歴史を誇る加賀温泉郷（山代温泉・山中温泉）。美食家・北大路魯山人が逗留し美意識を磨いた名門中の名門「あらや滔々庵」や、渓谷美を望む全室露天付き「花紫」など。11月6日の冬漁解禁とともに始まる最高峰ブランド「加能ガニ（青タグ）」の焼きガニ・カニ刺し・甲羅味噌焼きと、とろける能登牛会席。加賀百万石の伝統工芸と極上の名湯が織りなす最高峰の冬旅厳選5選。',
    spotQuery: '山代温泉',
    wikiPage: '山代温泉',
    area: '加賀・山代温泉・山中温泉・片山津温泉',
    queries: [
      'あらや滔々庵',
      '山中温泉 花紫',
      '山代温泉 べにや無何有',
      '吉祥やまなか',
      'かがり吉祥亭'
    ]
  }
];

async function main() {
  console.log('=== Round 146: Fetching Ultra-Luxury Hotels via Rakuten API ===');
  const results = {};

  for (const t of targets) {
    console.log(`\nFetching for theme: ${t.theme} (${t.prefJa})`);
    results[t.theme] = {
      meta: t,
      hotels: []
    };

    const seenNos = new Set();

    for (const q of t.queries) {
      console.log(`  -> Query: ${q}`);
      try {
        const res = await searchRakutenHotels(q, 3);
        await sleep(1200);
        if (res && res.length > 0) {
          for (const h of res) {
            if (!seenNos.has(h.hotelNo) && h.hotelImageUrl) {
              seenNos.add(h.hotelNo);
              results[t.theme].hotels.push(h);
              console.log(`     ✓ Found: ${h.hotelName} (Rating: ${h.reviewAverage}, Min: ¥${h.hotelMinCharge})`);
              if (results[t.theme].hotels.length >= 5) break;
            }
          }
        }
      } catch (err) {
        console.error(`     ✗ Error fetching query ${q}:`, err.message);
      }
      if (results[t.theme].hotels.length >= 5) break;
    }

    if (results[t.theme].hotels.length < 5) {
      console.log(`  -> Fallback broad query for ${t.area}`);
      const fallbackQuery = t.area.split('・')[0] + ' 高級 旅館';
      try {
        const res = await searchRakutenHotels(fallbackQuery, 10);
        await sleep(1200);
        if (res && res.length > 0) {
          for (const h of res) {
            if (!seenNos.has(h.hotelNo) && h.hotelImageUrl) {
              seenNos.add(h.hotelNo);
              results[t.theme].hotels.push(h);
              console.log(`     ✓ Fallback Found: ${h.hotelName}`);
              if (results[t.theme].hotels.length >= 5) break;
            }
          }
        }
      } catch (err) {
        console.error(`     ✗ Error fallback:`, err.message);
      }
    }

    console.log(`  ==> Total hotels gathered for ${t.theme}: ${results[t.theme].hotels.length}`);
  }

  const outPath = path.join(__dirname, 'round146_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSaved raw ultra-luxury hotels to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
