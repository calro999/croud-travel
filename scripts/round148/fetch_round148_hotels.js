const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shizuoka_izu_shuzenji_luxury',
    slug: 'winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay',
    pref: 'shizuoka',
    prefJa: '静岡県',
    prefCode: '22',
    title: '【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選',
    metaDesc: '弘法大師開湯の歴史を紡ぐ伊豆最古の温泉地・修善寺。晩秋の紅葉から初冬・厳冬の澄み渡る竹林の小径、桂川のせせらぎに包まれる静寂のひととき。竹林に佇む本格料亭旅館「柳生の庄」や、広大な日本庭園と展望露天風呂を誇る「宙 SORA 渡月荘金龍」など名宿が集結。滋味あふれる天城軍鶏や極上の伊豆伊勢海老、駿河湾の金目鯛を味わう大人の贅沢ステイ厳選5選。',
    spotQuery: '修善寺温泉',
    wikiPage: '修善寺温泉',
    area: '中伊豆・修善寺・天城湯ヶ島',
    queries: [
      '柳生の庄',
      '宙 SORA 渡月荘金龍',
      '湯回廊 菊屋',
      '淘心庵 米屋',
      'ねの湯 対山荘'
    ]
  },
  {
    theme: 'hokkaido_niseko_luxury_resort',
    slug: 'winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay',
    pref: 'hokkaido',
    prefJa: '北海道',
    prefCode: '01',
    title: '【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選',
    metaDesc: '世界中のスキーヤーや富裕層が絶賛する「奇跡の粉雪（JAPOW）」が降り積もる冬の北海道ニセコ。雪化粧の蝦夷富士・羊蹄山を真正面に望む「雪ニセコ（Setsu Niseko）」や、世界的ラグジュアリーホテル「パーク ハイアット ニセコ HANAZONO」、源泉掛け流し客室温泉を備えたモダンリゾート。北海道産黒毛和牛や蝦夷鹿、噴火湾のタラバガニ・雲丹に舌鼓を打つ最高峰ウィンターステイ厳選5選。',
    spotQuery: '羊蹄山',
    wikiPage: '羊蹄山',
    area: 'ニセコ・倶知安・羊蹄山',
    queries: [
      '雪ニセコ',
      'パーク ハイアット ニセコ',
      '木ニセコ',
      '綾ニセコ',
      'ワン ニセコ リゾート タワーズ'
    ]
  },
  {
    theme: 'hyogo_kinosaki_luxury_tsuiyama',
    slug: 'winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay',
    pref: 'hyogo',
    prefJa: '兵庫県',
    prefCode: '28',
    title: '【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選',
    metaDesc: '11月上旬に待望の松葉ガニ漁が解禁！城崎の目と鼻の先にある津居山港で日帰り水揚げされる最高級ブランド「青タグ津居山ガニ」の聖地・城崎温泉。創業160年の歴史と格調高い純日本建築を誇る名門「西村屋本館」や、文豪・志賀直哉ゆかりの国登録有形文化財「三木屋」、広大な森林庭園の「招月庭」。雪舞う柳並木と情緒あふれる外湯めぐり、極上の活蟹刺しや甲羅焼きを堪能する冬の決定版5選。',
    spotQuery: '城崎温泉',
    wikiPage: '城崎温泉',
    area: '城崎・津居山・円山川',
    queries: [
      '西村屋本館',
      '西村屋ホテル招月庭',
      '三木屋 城崎',
      '城崎温泉 ときわ別館',
      '城崎温泉 泉翠'
    ]
  },
  {
    theme: 'tottori_misasa_kaike_luxury',
    slug: 'winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay',
    pref: 'tottori',
    prefJa: '鳥取県',
    prefCode: '31',
    title: '【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選',
    metaDesc: '世界屈指の高濃度ラドン含有量を誇る「三朝温泉」と、白砂青松の弓ヶ浜に面した海の温泉「皆生温泉」。三朝川の河床から自噴する巌窟の湯と国登録有形文化財の数寄屋建築を誇る「旅館 大橋」、全室オーシャンビュー露天風呂付きの最新リゾート「皆生 游月」。冬に水揚げされる最高級ブランド「鳥取松葉ガニ（五輝星）」やオレイン55鳥取和牛を堪能する、癒やしと美食の冬旅厳選5選。',
    spotQuery: '三朝温泉',
    wikiPage: '三朝温泉',
    area: '三朝温泉・倉吉・皆生温泉・米子',
    queries: [
      '旅館大橋 三朝',
      '依山楼 岩崎',
      '皆生游月',
      '華水亭 皆生',
      '三朝館'
    ]
  },
  {
    theme: 'fukushima_aizu_ashinomaki_higashiyama',
    slug: 'winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay',
    pref: 'fukushima',
    prefJa: '福島県',
    prefCode: '07',
    title: '【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選',
    metaDesc: '一面の銀世界に包まれる奥会津の冬。大川渓谷の断崖に立ち、吹き抜けのロビーに浮かぶ三味線の浮き舞台や段々の絶景露天風呂が名高い「会津芦ノ牧温泉 大川荘」。国の登録有形文化財第1号に指定され、冬の中庭に無数の竹筒ろうそくが灯る「会津東山温泉 向瀧」。湯川のせせらぎと深々と降る雪を眺める雪見風呂、極上の会津馬刺しや福島牛、厳冬の仕込み地酒に酔いしれる会津の名宿厳選5選。',
    spotQuery: '東山温泉',
    wikiPage: '東山温泉',
    area: '会津若松・東山温泉・芦ノ牧温泉',
    queries: [
      '会津芦ノ牧温泉 大川荘',
      '会津東山温泉 向瀧',
      '御宿 東鳳',
      '庄助の宿 瀧の湯',
      '芦ノ牧温泉 丸峰'
    ]
  }
];

async function main() {
  console.log('Fetching live Rakuten Travel data for Round 148...');
  const results = {};

  for (const t of targets) {
    console.log(`\n=== Theme: ${t.theme} (${t.area}) ===`);
    results[t.theme] = {
      meta: t,
      hotels: []
    };

    const seenHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching Rakuten API for: "${q}"...`);
      try {
        const hits = await searchRakutenHotels(q, 3);
        await sleep(500); // polite rate limit
        if (hits && hits.length > 0) {
          for (const h of hits) {
            if (!seenHotelNos.has(h.hotelNo)) {
              seenHotelNos.add(h.hotelNo);
              results[t.theme].hotels.push(h);
              console.log(`  ✓ Found: [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
              break; // take best match for this specific query
            }
          }
        } else {
          console.warn(`  ! No hits for query: "${q}"`);
        }
      } catch (err) {
        console.error(`  Error searching "${q}":`, err.message);
      }
    }

    // もし5件に満たない場合、エリアや温泉地名でフォールバック検索
    if (results[t.theme].hotels.length < 5) {
      console.log(`Theme ${t.theme} has ${results[t.theme].hotels.length} hotels. Running fallback search for "${t.spotQuery} 高級"...`);
      try {
        const fallbackHits = await searchRakutenHotels(`${t.spotQuery} 温泉`, 10);
        await sleep(500);
        for (const h of fallbackHits) {
          if (!seenHotelNos.has(h.hotelNo)) {
            seenHotelNos.add(h.hotelNo);
            results[t.theme].hotels.push(h);
            console.log(`  ✓ Fallback added: [${h.hotelNo}] ${h.hotelName}`);
            if (results[t.theme].hotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`  Fallback error for ${t.spotQuery}:`, err.message);
      }
    }

    console.log(`Total hotels fetched for ${t.theme}: ${results[t.theme].hotels.length}`);
  }

  const outPath = path.join(__dirname, 'round148_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round148_hotels.js:', err);
  process.exit(1);
});
