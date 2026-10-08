const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'saitama_menuma_fukaya_negi',
    slug: 'winter-saitama-kumagaya-menuma-shodenzan-fukaya-negi-bushugyu-stay',
    pref: 'saitama',
    prefJa: '埼玉県',
    prefCode: '11',
    title: '【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選',
    metaDesc: '「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。',
    spotQuery: '妻沼聖天山',
    area: '熊谷・深谷・本庄',
    queries: [
      '四季の湯温泉 ホテルヘリテイジ',
      'キングアンバサダーホテル熊谷',
      '国済寺天然温泉 ハナホテル深谷＆スパ',
      '花園天然温泉 ハナホテル 花園インター',
      '行田天然温泉 ハナホテル行田',
      'ホテルルートイン深谷駅前'
    ]
  },
  {
    theme: 'kanagawa_kawasaki_daishi_hatsumode',
    slug: 'winter-kanagawa-kawasaki-daishi-hatsumode-factory-nightview-haneda-onsen-stay',
    pref: 'kanagawa',
    prefJa: '神奈川県',
    prefCode: '14',
    title: '【初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景】2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選',
    metaDesc: '全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。',
    spotQuery: '平間寺',
    area: '川崎・羽田・京浜',
    queries: [
      'ホテルメトロポリタン川崎',
      '川崎日航ホテル',
      'ドーミーイン川崎',
      'ホテル縁道',
      '相鉄フレッサイン 川崎駅東口',
      '住友不動産ホテル ヴィラフォンテーヌプレミア羽田空港',
      '川崎ホテルパーク'
    ]
  },
  {
    theme: 'saga_yoshinogari_saga_castle',
    slug: 'winter-saga-yoshinogari-hikarinohibiki-ariake-nori-sagagyu-onsen-stay',
    pref: 'saga',
    prefJa: '佐賀県',
    prefCode: '41',
    title: '【古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔】2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選',
    metaDesc: '数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。',
    spotQuery: '吉野ヶ里遺跡',
    area: '佐賀・吉野ヶ里・古湯',
    queries: [
      'ガーデンテラス佐賀ホテル＆リゾート',
      '古湯温泉 旅館 杉乃家',
      '古湯温泉 ＯＮＣＲＩ',
      'ホテルマリターレ創世 佐賀',
      'ホテルニューオータニ佐賀',
      '佐賀シティホテル'
    ]
  },
  {
    theme: 'osaka_sumiyoshi_taisha_hatsumode',
    slug: 'winter-osaka-sumiyoshi-taisha-hatsumode-sakai-taikobashi-kawachikamo-stay',
    pref: 'osaka',
    prefJa: '大阪府',
    prefCode: '27',
    title: '【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選',
    metaDesc: '200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。',
    spotQuery: '住吉大社',
    area: '住吉・堺・天王寺',
    queries: [
      '大阪マリオット都ホテル',
      '都ホテル 天王寺',
      'ホテル・アゴーラ リージェンシー 大阪堺',
      'ダイワロイネットホテル堺東',
      'シティホテル青雲荘',
      'スイスホテル南海大阪'
    ]
  },
  {
    theme: 'mie_futamiura_meotoiwa_vison',
    slug: 'winter-mie-futamiura-meotoiwa-hatsuhinode-vison-matsusaka-stay',
    pref: 'mie',
    prefJa: '三重県',
    prefCode: '24',
    title: '【伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON】2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選',
    metaDesc: '冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。',
    spotQuery: '二見興玉神社',
    area: '二見浦・多気・伊勢',
    queries: [
      '旅荘 海の蝶',
      'ホテルヴィソン',
      '浜千代館',
      'キャッスルイン伊勢夫婦岩',
      'ホテル清海',
      '伊勢志摩の波音 海辺の宿 うえ久'
    ]
  }
];

async function main() {
  console.log('=== Round 138: Fetching Live Rakuten Hotels ===');
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
          // 都道府県・地域チェック（羽田のヴィラフォンテーヌは東京・大田区だが川崎対岸として許容、それ以外は各対象都道府県を必須）
          const addr = h.address1 || '';
          const isAllowed = addr.includes(t.prefJa) || (t.pref === 'kanagawa' && addr.includes('東京都大田区羽田空港'));

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

  const outPath = path.join(__dirname, 'round138_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully saved raw hotel data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
