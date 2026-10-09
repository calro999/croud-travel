const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kagoshima_chiran_makurazaki',
    slug: 'winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay',
    pref: 'kagoshima',
    prefJa: '鹿児島県',
    prefCode: '46',
    title: '【薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景】2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選',
    metaDesc: '薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。',
    spotQuery: '知覧武家屋敷通り',
    area: '南薩摩・知覧・枕崎・開聞岳',
    queries: [
      '枕崎観光ホテル 岩戸',
      '指宿白水館',
      '夫婦露天風呂の宿 吟松',
      '休暇村 指宿',
      '吹上砂丘荘'
    ]
  },
  {
    theme: 'saitama_gyoda_oshi_castle',
    slug: 'winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay',
    pref: 'saitama',
    prefJa: '埼玉県',
    prefCode: '11',
    title: '【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選',
    metaDesc: '映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。',
    spotQuery: '忍城',
    area: '行田・熊谷・加須・羽生',
    queries: [
      '羽生', // 羽生天然温泉ルートイングランティア羽生ＳＰＡ　ＲＥＳＯＲＴ
      'キングアンバサダーホテル熊谷',
      'ホテルルートイン熊谷',
      'ホテルグランワイズ熊谷駅前',
      'スマイルホテル熊谷'
    ]
  },
  {
    theme: 'ibaraki_sakuragawa_makabe',
    slug: 'winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay',
    pref: 'ibaraki',
    prefJa: '茨城県',
    prefCode: '08',
    title: '【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選',
    metaDesc: '国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。',
    spotQuery: '真壁の町並み',
    area: '桜川・真壁・筑波山北麓・つくば',
    queries: [
      '筑波山 江戸屋',
      '筑波山京成ホテル',
      'ホテル ベストランド',
      'ダイワロイネットホテルつくば',
      'ホテル日航つくば'
    ]
  },
  {
    theme: 'yamanashi_otsuki_saruhashi',
    slug: 'winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay',
    pref: 'yamanashi',
    prefJa: '山梨県',
    prefCode: '19',
    title: '【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選',
    metaDesc: '歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。',
    spotQuery: '猿橋',
    area: '大月・都留・富士東部・上野原',
    queries: [
      '大月駅', // 東横ＩＮＮ富士山大月駅
      'より道の湯', // 山梨泊まれる温泉　より道の湯
      'ホテル鐘山苑', // 庭園と感動の宿　富士山温泉　ホテル鐘山苑
      'ホテルマイステイズ富士山 展望温泉',
      'ハイランドリゾート ホテル＆スパ'
    ]
  },
  {
    theme: 'saga_kashima_hizenhamashuku',
    slug: 'winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay',
    pref: 'saga',
    prefJa: '佐賀県',
    prefCode: '41',
    title: '【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選',
    metaDesc: '国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。',
    spotQuery: '肥前浜宿',
    area: '鹿島・肥前浜宿・祐徳門前・嬉野',
    queries: [
      '竹崎カニ', // 竹崎かにと日本酒の宿　鶴荘
      '嬉野温泉 和多屋別荘',
      '嬉野温泉 大正屋',
      '嬉野温泉 茶心の宿 和楽園',
      '武雄温泉 御船山楽園ホテル'
    ]
  }
];

async function main() {
  console.log('=== Fetching Live Rakuten Hotels for Round 142 ===\n');
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

  const outPath = path.join(__dirname, 'round142_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`✓ Saved round142_raw_hotels.json to ${outPath}`);
}

main().catch(console.error);
