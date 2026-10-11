const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'fukushima_iizaka_onsen',
    slug: 'winter-fukushima-iizaka-onsen-sabakoyu-enban-gyoza-fukushimagyu-stay',
    pref: 'fukushima',
    prefJa: '福島県',
    prefCode: '07',
    title: '【奥州三名湯・飯坂温泉の熱湯共同浴場と名物円盤餃子】2026-2027年11-12月初冬の福島・飯坂！芭蕉ゆかりの鯖湖湯と波来湯・熱気あふれる湯めぐり、パリパリ焼き立て「名物円盤餃子」ととろける福島牛すき焼き・露天風呂名宿5選',
    metaDesc: '奥州三名湯の歴史を刻む福島の奥座敷・飯坂温泉！松尾芭蕉も浸かった日本最古級の木造共同浴場「鯖湖湯」をはじめとする熱湯共同浴場めぐりで、冬の寒気を吹き飛ばす芯からの温まり。摺上川の渓谷美を望む露天風呂と、名店が競い合う香ばしい「名物円盤餃子」、極上福島牛すき焼きを堪能する初冬の厳選名宿5選。',
    spotQuery: '飯坂温泉',
    wikiPage: '飯坂温泉',
    area: '福島・飯坂温泉・摺上川渓谷',
    queries: [
      '飯坂温泉 匠のこころ 吉川屋',
      '飯坂温泉 摺上亭大鳥',
      '飯坂温泉 ホテル聚楽',
      '飯坂温泉 青葉旅館',
      '飯坂温泉 松島屋旅館'
    ]
  },
  {
    theme: 'miyagi_zao_fox_village_kamasaki',
    slug: 'winter-miyagi-zao-fox-village-kamasaki-onsen-shiroishi-umen-sendaigyu-stay',
    pref: 'miyagi',
    prefJa: '宮城県',
    prefCode: '04',
    title: '【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選',
    metaDesc: '11月〜12月に冬毛へと生え変わり最もモフモフで愛らしい姿を見せる世界的人気スポット「宮城蔵王キツネ村」！南蔵王の麓、開湯600年の歴史を誇る「奥羽の薬湯」鎌先温泉の風情ある木造旅館群で心身を癒やす旅。油を使わず胃腸に優しい伝統名物「白石温麺（うーめん）」と、きめ細やかなサシがとろける最高峰仙台牛を味わう初冬の厳選名宿5選。',
    spotQuery: '宮城蔵王キツネ村',
    wikiPage: '宮城蔵王キツネ村',
    area: '白石・鎌先温泉・南蔵王・小原温泉',
    queries: [
      '鎌先温泉 時音の宿 湯ひら',
      '鎌先温泉 湯主一條',
      '鎌先温泉 すゞきや旅館',
      '鎌先温泉 最上屋旅館',
      'パシフィックホテル白石'
    ]
  },
  {
    theme: 'oita_hita_onsen_mamedamachi',
    slug: 'winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay',
    pref: 'oita',
    prefJa: '大分県',
    prefCode: '44',
    title: '【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選',
    metaDesc: '水郷（すいきょう）と称される大分県日田市。11月〜12月の寒暖差が生み出す三隈川の幻想的な「川霧」と、江戸幕府直轄の天領として栄えた「豆田町」の白壁土蔵が連なる歴史情緒。パリッとした麺の食感がやみつきになる元祖「日田焼きそば」や老舗酒蔵の吟醸酒、とろける豊後牛（おおいた和牛）を堪能し、三隈川を一望する源泉掛け流し美肌温泉に浸る初冬の厳選名宿5選。',
    spotQuery: '豆田町',
    wikiPage: '豆田町',
    area: '日田・日田温泉・豆田町・天瀬',
    queries: [
      '日田温泉 亀山亭ホテル',
      '日田温泉 ホテル風早',
      '奥日田温泉 うめひびき',
      '日田温泉 旅の宿 さつき',
      '日田温泉 ひなの里山陽館'
    ]
  },
  {
    theme: 'hyogo_tatsuno_murotsu_oyster',
    slug: 'winter-hyogo-tatsuno-murotsu-oyster-shinmaiko-sunset-aioi-onsen-stay',
    pref: 'hyogo',
    prefJa: '兵庫県',
    prefCode: '28',
    title: '【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選',
    metaDesc: '11月中旬に待望の漁解禁を迎える播磨灘の極上ブランド「室津牡蠣（むろつがき）」！加熱しても身が縮まず、濃厚な甘みと弾力を誇る焼き牡蠣・牡蠣鍋を本場で味わう至福の初冬旅。「播磨の小京都」龍野の風情ある武家屋敷・白壁の町並み散策と、干潟が茜色に染まる新舞子海岸のサンセット。瀬戸内海を一望するパノラマ露天風呂に癒やされる厳選名宿5選。',
    spotQuery: '龍野',
    wikiPage: '龍野',
    area: 'たつの・相生・室津・新舞子・赤穂',
    queries: [
      '新舞子ガーデンホテル',
      'ホテル万葉岬',
      '相生ステーションホテル アネックス',
      '赤穂温泉 潮彩きらら 祥吉',
      '赤穂温泉 絶景露天風呂の宿 銀波荘'
    ]
  },
  {
    theme: 'yamagata_onogawa_onsen_bihada',
    slug: 'winter-yamagata-onogawa-onsen-bihada-yonezawagyu-sukiyaki-mame-moyashi-stay',
    pref: 'yamagata',
    prefJa: '山形県',
    prefCode: '06',
    title: '【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉！名物豆もやしラーメンと甲子大黒天参拝・情緒あふれる雪見露天風呂名宿5選',
    metaDesc: '平安の美女・小野小町が病を癒やしたと伝わる開湯1200年の名湯「小野川温泉」！毎分千リットルを超える豊富な源泉はラジウムと硫黄・塩分を含み、初冬の冷えた肌をしっとり潤す極上の美肌泉。温泉熱で冬に育てる冬の風物詩「小野川豆もやし」ラーメンや、日本屈指のブランド肉「米沢牛」の芳醇なすき焼き会席。湯煙たなびく温泉街で雪見風呂を心ゆくまで満喫する厳選名宿5選。',
    spotQuery: '小野川温泉',
    wikiPage: '小野川温泉',
    area: '米沢・小野川温泉・白布温泉',
    queries: [
      '小野川温泉 名湯の宿 吾妻荘',
      '小野川温泉 亀屋万年閣',
      '小野川温泉 鈴の宿 登ぼりや',
      '小野川温泉 うめや旅館',
      '小野川温泉 やな川屋旅館'
    ]
  }
];

async function main() {
  console.log('=== Round 144: Fetching Rakuten Hotels Directly via API ===');
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
        await sleep(1200); // polite rate limit
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

    // fallback if fewer than 5 hotels found
    if (results[t.theme].hotels.length < 5) {
      console.log(`  -> Fallback broad query for ${t.area}`);
      const fallbackQuery = t.area.split('・')[0] + ' 温泉';
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

  const outPath = path.join(__dirname, 'round144_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSaved raw hotels to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
