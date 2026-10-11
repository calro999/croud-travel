const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kanagawa_hakone_sengokuhara_luxury',
    slug: 'winter-kanagawa-hakone-sengokuhara-luxury-hanare-roten-suite-stay',
    pref: 'kanagawa',
    prefJa: '神奈川県',
    prefCode: '14',
    title: '【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選',
    metaDesc: '初冬の静寂に包まれる箱根・仙石原！黄金色に輝くすすき草原のフィナーレと、大涌谷から引湯する濃厚な乳白色の硫黄泉。全室に専用露天風呂を備えた大人の極上離れやスイートルームで、人目を気にせず名湯を独り占め。きめ細やかなサシの相州牛や駿河湾・相模湾の冬の味覚を散りばめた本格懐石料理に舌鼓を打つ、憧れの記念日ラグジュアリーステイ厳選5選。',
    spotQuery: '仙石原',
    wikiPage: '仙石原',
    area: '箱根・仙石原・姥子・大涌谷',
    queries: [
      '金乃竹 仙石原',
      'きたの風茶寮',
      '箱根・翠松園',
      '料亭旅館 いちい亭',
      '箱根 仙石原 露天風呂'
    ]
  },
  {
    theme: 'shizuoka_izukogen_luxury_hanare',
    slug: 'winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay',
    pref: 'shizuoka',
    prefJa: '静岡県',
    prefCode: '22',
    title: '【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選',
    metaDesc: '都心から特急でわずか2時間、相模湾と伊豆大島を望む静岡屈指のリゾート地・伊豆高原。初冬の澄んだ大気のもと、全室に趣の異なる源泉掛け流し専用露天風呂を備えた極上の離れ宿で過ごす至福の時間。世界基準のおもてなしを誇る名門宿から、海を見晴らす高台のプライベートスイートまで。冬に脂が乗る極上地金目鯛の煮付けや活伊勢海老、しずおか和牛を堪能する大人の記念日名宿5選。',
    spotQuery: '城ヶ崎海岸',
    wikiPage: '城ヶ崎海岸',
    area: '伊豆高原・城ヶ崎・赤沢・浮山温泉郷',
    queries: [
      'ABBA RESORTS IZU 坐漁荘',
      'お宿 うち山',
      '伊豆高原 離れ宿 善積',
      '伊豆高原 コルテラルゴ',
      '伊豆高原 記念日 露天風呂'
    ]
  },
  {
    theme: 'hyogo_arima_onsen_luxury',
    slug: 'winter-hyogo-arima-onsen-luxury-kinzan-gold-silver-kobe-beef-stay',
    pref: 'hyogo',
    prefJa: '兵庫県',
    prefCode: '28',
    title: '【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選',
    metaDesc: '日本三古湯・三名泉の筆頭に君臨する兵庫県・有馬温泉。鉄分と塩分を豊富に含み赤褐色に輝く「金泉」と、炭酸とラドンを含む無色透明の「銀泉」というふたつの奇跡の湯を擁する聖地。ミシュランガイドに掲載され、一流の料亭旅館として名高い「欽山」や、大人の静寂を約束する「中の坊 瑞苑」など、全室スイートや専用露天風呂付き客室で過ごす最高峰の滞在。世界最高峰ブランド「神戸牛」の炭火焼きステーキや伝統会席を堪能する極上名宿5選。',
    spotQuery: '有馬温泉',
    wikiPage: '有馬温泉',
    area: '神戸・有馬温泉・六甲山',
    queries: [
      '有馬温泉 欽山',
      '有馬温泉 中の坊 瑞苑',
      '有馬温泉 竹取亭 円山',
      '有馬温泉 有馬グランドホテル',
      '有馬温泉 兵衛向陽閣'
    ]
  },
  {
    theme: 'nagano_tobira_onsen_myojinkan',
    slug: 'winter-nagano-tobira-onsen-myojinkan-relais-chateaux-shinshu-french-stay',
    pref: 'nagano',
    prefJa: '長野県',
    prefCode: '20',
    title: '【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷！渓流立ち湯雪見露天風呂と信州オーガニックフレンチ・自然に抱かれる最高峰ウェルネスリトリート名宿5選',
    metaDesc: '国定公園の豊かな山峡、薄川の清流沿いに佇む長野・松本の奥座敷「扉温泉」。世界の一流ホテル・レストランのみが加盟を許される「ルレ・エ・シャトー」に名を連ねる名門「明神館」をはじめ、初冬の静寂と自然の調和を五感で味わう最高峰リゾート。渓流と一体化する名物「雪見立ち湯露天風呂」や、無農薬自家農園野菜と信州プレミアム牛を用いたモダンフレンチ・創作和食懐石。日常の喧騒から完全に解き放たれる極上リトリート名宿5選。',
    spotQuery: '美ヶ原',
    wikiPage: '美ヶ原',
    area: '松本・扉温泉・浅間温泉・美ヶ原温泉',
    queries: [
      '扉温泉 明神館',
      '浅間温泉 別邸一箔',
      '美ヶ原温泉 金宇館',
      '浅間温泉 追分屋旅館',
      '松本ホテル花月'
    ]
  },
  {
    theme: 'kumamoto_kurokawa_shirakawa_luxury',
    slug: 'winter-kumamoto-kurokawa-shirakawa-luxury-takefue-gekkouju-akagyu-stay',
    pref: 'kumamoto',
    prefJa: '熊本県',
    prefCode: '43',
    title: '【竹林の秘境・日本最高峰ラグジュアリー離れ「竹ふえ」と「月洸樹」】2026-2027年11-12月初冬の熊本・黒川温泉郷奥座敷！広大な客室専用露天風呂と幻のあか牛フィレ炭火焼き・大人の一生に一度は泊まりたい憧れ名宿5選',
    metaDesc: '阿蘇外輪山の奥深く、鬱蒼とした竹林と清らかな小川に包まれた南小国・黒川温泉郷の奥座敷。全国の温泉ファンが「一生に一度は泊まりたい」と憧れる日本最高峰のプライベート離れ「竹ふえ」や「月洸樹 黒川」。数百平米もの広さを誇る客室専用露天風呂や内湯に自家源泉が並々と掛け流され、冬の冷たい大気の中で竹林のライトアップを眺める至高の湯浴み。熊本が誇る幻の和牛「あか牛」の極上フィレ肉炭火焼きと季節の創作会席を味わう、究極の贅沢名宿5選。',
    spotQuery: '黒川温泉',
    wikiPage: '黒川温泉 (熊本県)',
    area: '南小国・黒川温泉・白川温泉・小田温泉',
    queries: [
      '黒川温泉 旅館 山河',
      '黒川温泉 深山山荘',
      'お宿 花風月',
      '黒川温泉 ふもと旅館',
      '黒川温泉 湯本荘'
    ]
  }
];

async function main() {
  console.log('=== Round 145: Fetching Luxury High-CPA Hotels via Rakuten API ===');
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
      const fallbackQuery = t.area.split('・')[0] + ' 高級 温泉';
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

    console.log(`  ==> Total luxury hotels gathered for ${t.theme}: ${results[t.theme].hotels.length}`);
  }

  const outPath = path.join(__dirname, 'round145_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSaved raw luxury hotels to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
