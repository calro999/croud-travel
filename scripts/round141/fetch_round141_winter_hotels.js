const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'okinawa_nanjo_sefa_utaki',
    slug: 'winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay',
    pref: 'okinawa',
    prefJa: '沖縄県',
    prefCode: '47',
    title: '【琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出】2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選',
    metaDesc: '琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。',
    spotQuery: '斎場御嶽',
    area: '南城・知念岬・南部海岸',
    queries: [
      '百名伽藍',
      'ユインチホテル南城',
      '琉球温泉 瀬長島ホテル',
      'サザンビーチホテル＆リゾート沖縄',
      'ホテルグランビューガーデン沖縄',
      'ホテルパームロイヤルＮＡＨＡ'
    ]
  },
  {
    theme: 'miyazaki_nichinan_obi_castle',
    slug: 'winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay',
    pref: 'miyazaki',
    prefJa: '宮崎県',
    prefCode: '45',
    title: '【日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣】2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選',
    metaDesc: '飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。',
    spotQuery: '飫肥',
    area: '日南・飫肥・鵜戸海岸',
    queries: [
      '天然温泉 ひなたの宿 日南宮崎',
      '日南海岸 南郷プリンスホテル',
      'ホテル 青島サンクマール',
      'ANA ホリデイ・イン リゾート 宮崎',
      'ホテルシーズン日南'
    ]
  },
  {
    theme: 'kochi_aki_noradokei_muroto',
    slug: 'winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay',
    pref: 'kochi',
    prefJa: '高知県',
    prefCode: '39',
    title: '【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選',
    metaDesc: '歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。',
    spotQuery: '野良時計',
    area: '安芸・室戸・東高知',
    queries: [
      'ホテル ＴＡＭＡＩ',
      'ホテルなはり',
      'リゾートホテル海辺の果樹園',
      '高知黒潮ホテル',
      'サザンシティホテル'
    ]
  },
  {
    theme: 'ehime_niihama_besshi_ishizuchi',
    slug: 'winter-ehime-niihama-besshi-copper-mine-ishizuchi-shrine-hatsumode-iyogyu-stay',
    pref: 'ehime',
    prefJa: '愛媛県',
    prefCode: '38',
    title: '【東洋のマチュピチュ・別子銅山の冬霧氷と石鎚神社新春初詣】2026-2027年冬の愛媛・新居浜＆西条！名水うちぬきの里と伊予牛会席名宿5選',
    metaDesc: '標高750mに聳える産業遺産・別子銅山「東平」の雪化粧と、霊峰石鎚山を仰ぐ石鎚神社新春開運初詣！日本名水百選・西条「うちぬき」が育む地酒と瀬戸内海の旬魚介、極上の霜降り伊予牛に舌鼓。道後温泉に次ぐ名湯・本谷温泉や快適ホテルで寛ぐ冬の東予・新居浜＆西条厳選名宿5選。',
    spotQuery: '別子銅山',
    area: '新居浜・西条・石鎚山麓',
    queries: [
      'リーガロイヤルホテル新居浜',
      'ホテルルートイン新居浜',
      '休暇村 瀬戸内東予',
      '湯之谷温泉',
      'スーパーホテル新居浜'
    ]
  },
  {
    theme: 'nara_sakurai_oomiwa_shrine',
    slug: 'winter-nara-sakurai-oomiwa-shrine-hatsumode-miwa-somen-yamatogyu-stay',
    pref: 'nara',
    prefJa: '奈良県',
    prefCode: '29',
    title: '【日本最古の神域・三輪明神大神神社新春初詣と山の辺の道】2026-2027年冬の奈良・桜井！本場三輪にゅうめんと大和牛すき焼き名宿5選',
    metaDesc: '日本最古の神社と称される大和国一之宮「大神神社（三輪明神）」新春開運初詣！三輪山をご神体とする神秘の森と冬の静けさに包まれる日本最古の道「山の辺の道」。伝統の手延べ「三輪にゅうめん」と極上霜降り大和牛に心温まる、古代史のロマンあふれる冬の奈良・桜井厳選名宿5選。',
    spotQuery: '大神神社',
    area: '桜井・三輪・山の辺の道',
    queries: [
      '多武峰観光ホテル',
      'カンデオホテルズ 奈良橿原',
      'グランドメルキュール奈良橿原',
      'ホテルルートイン桜井駅前',
      '門前おかげ楼'
    ]
  }
];

async function main() {
  console.log('=== Fetching Live Rakuten Hotels for Round 141 ===\n');
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

  const outPath = path.join(__dirname, 'round141_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`✓ Saved round141_raw_hotels.json to ${outPath}`);
}

main().catch(console.error);
