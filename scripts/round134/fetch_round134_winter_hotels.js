const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yakushima_winter_trekking_onsen',
    slug: 'winter-kagoshima-yakushima-shiratani-jomon-onsen-kubiore-saba-stay',
    pref: 'kagoshima',
    prefJa: '鹿児島県',
    title: '【静寂の原生林と白谷雲水峡・極上温泉】2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選',
    metaDesc: '冬だけの静寂に包まれる世界自然遺産・屋久島！朝露に光る白谷雲水峡の苔むす森トレッキング、旬を迎える極上の首折れサバ・屋久鹿料理と絶景オーシャンビュー温泉を堪能する大人の冬旅名宿5選。',
    spotQuery: '白谷雲水峡',
    area: '屋久島・宮之浦・安房',
    queries: [
      'THE HOTEL YAKUSHIMA OCEAN & FOREST',
      'JRホテル屋久島',
      '屋久島いわさきホテル',
      '田代別館 屋久島',
      '屋久島 民宿 海のオフィス',
      'ホテル 屋久島山荘',
      '屋久島 グリーンホテル'
    ]
  },
  {
    theme: 'gokayama_snow_gassho_lightup',
    slug: 'winter-toyama-gokayama-gassho-snow-lightup-ainokura-suganuma-stay',
    pref: 'toyama',
    prefJa: '富山県',
    title: '【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選',
    metaDesc: '白銀の山里に佇む世界遺産・五箇山合掌造り集落（相倉・菅沼）の冬景色と幻想的な雪あかり！名物・五箇山堅豆腐や岩魚塩焼き、庄川峡の雪見露天風呂と富山湾の旬味覚を堪能する極上隠れ宿5選。',
    spotQuery: '五箇山',
    area: '五箇山・庄川温泉郷・南砺',
    queries: [
      '五箇山温泉 赤尾館',
      '鳥越の宿 喜久水',
      '人肌の宿 川金',
      '庄川温泉風流唯庵',
      '庄川清流温泉 みやじま',
      '五箇山温泉',
      '庄川温泉'
    ]
  },
  {
    theme: 'yoshinoyama_snow_temple_kinpusenji',
    slug: 'winter-nara-yoshinoyama-kinpusenji-snow-temple-onsen-yamatotori-stay',
    pref: 'nara',
    prefJa: '奈良県',
    title: '【世界遺産金峯山寺蔵王堂の新春初詣と雪の吉野山】2026-2027年冬の吉野温泉！大和肉鶏と本葛鍋名宿5選',
    metaDesc: '雪化粧に染まる修験道の聖地・世界遺産「吉野山」と金峯山寺蔵王堂の新春初詣！歴史薫る吉野温泉のぬくもり、滋味あふれる大和肉鶏の水炊きや吉野本葛料理、大和牛を味わう静寂の冬名旅館5選。',
    spotQuery: '金峯山寺',
    area: '吉野山・金峯山寺・吉野温泉',
    queries: [
      '吉野山 景勝の宿 芳雲館',
      '竹林院群芳園',
      '湯元 宝の家',
      '吉野温泉元湯',
      '坂本屋 吉野山',
      '花だより 吉野山'
    ]
  },
  {
    theme: 'usuki_sekibutsu_torafugu_kaiseki',
    slug: 'winter-oita-usuki-sekibutsu-hatsumode-torafugu-kaiseki-stay',
    pref: 'oita',
    prefJa: '大分県',
    title: '【国宝臼杵石仏の新春初詣と本場臼杵ふぐ】2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選',
    metaDesc: '平安・鎌倉の祈りが息づく国宝「臼杵磨崖仏（臼杵石仏）」での新春初詣と、全国の食通が絶賛する豊後水道の最高峰「臼杵とらふぐ」！本場ならではの厚切りてっさ、白子焼き、ひれ酒と名湯を味わう冬旅厳選5宿。',
    spotQuery: '臼杵磨崖仏',
    area: '臼杵・豊後水道・津久見',
    queries: [
      '料亭旅館 春光園',
      'クレドホテル臼杵',
      'ホテルニューうすき',
      '六ヶ迫温泉 望月旅館',
      'ホテルルートイン佐伯駅前',
      'ホテル金水苑',
      '臼杵'
    ]
  },
  {
    theme: 'kumejima_hatenohama_kurumaebi_resort',
    slug: 'winter-okinawa-kumejima-hatenohama-kurumaebi-ocean-resort-stay',
    pref: 'okinawa',
    prefJa: '沖縄県',
    title: '【冬の静寂はての浜と日本一の車海老三昧】2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選',
    metaDesc: 'エメラルドグリーンの大海原に浮かぶ白砂の天国「はての浜」の冬クルーズ！冬に旬の最盛期を迎える「久米島産極上活車海老」の踊り食いや塩焼き、海洋深層水温浴スパで心身を解きほぐす至高の南国冬リゾート5選。',
    spotQuery: 'はての浜',
    area: '久米島・はての浜',
    queries: [
      'サイプレスリゾート久米島',
      'リゾートホテル久米アイランド',
      '久米島イーフビーチホテル',
      'ホテルガーデンヒルズ 久米島',
      'リゾートハウス 村本',
      '久米島'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 134 - Winter)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.title} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Searching Rakuten API for: "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(650);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes.find(h => !usedHotelNos.has(h.hotelNo)) || searchRes[0];
          if (!usedHotelNos.has(hotel.hotelNo)) {
            usedHotelNos.add(hotel.hotelNo);
            console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (Rating: ${hotel.reviewAverage}, Price: ¥${hotel.hotelMinCharge.toLocaleString()})`);
            themeHotels.push(hotel);
          } else {
            console.log(`  ! Already added hotel: ${hotel.hotelName}`);
          }
        } else {
          console.warn(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      theme: t.theme,
      slug: t.slug,
      pref: t.pref,
      prefJa: t.prefJa,
      title: t.title,
      metaDesc: t.metaDesc,
      spotQuery: t.spotQuery,
      area: t.area,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round134_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n🎉 Saved raw live hotels data to ${outPath}`);
}

main().catch(console.error);
