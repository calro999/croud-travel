const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokachi_jewelry_ice_mall_sauna',
    slug: 'winter-hokkaido-tokachi-jewelry-ice-mall-onsen-sauna-stay',
    pref: 'hokkaido',
    prefJa: '北海道',
    title: '【極寒の奇跡ジュエリーアイスとモール温泉】2026-2027年冬の十勝川温泉＆極上サウナ宿5選',
    metaDesc: '太平洋の大津海岸に打ち上げられる透明な氷の結晶「ジュエリーアイス」！世界でも希少な琥珀色の美肌湯「十勝川モール温泉」と本格フィンランド式サウナ、十勝牛やラクレットチーズを堪能する極上冬宿5選。',
    spotQuery: 'ジュエリーアイス',
    area: '十勝・十勝川温泉・帯広',
    queries: [
      '十勝川温泉 第一ホテル',
      '十勝川温泉 観月苑',
      '十勝川温泉 ホテル大平原',
      '森のスパリゾート 北海道ホテル',
      '十勝川温泉 笹井ホテル'
    ]
  },
  {
    theme: 'atami_plum_garden_fireworks',
    slug: 'winter-shizuoka-atami-plum-garden-winter-fireworks-kinmedai-stay',
    pref: 'shizuoka',
    prefJa: '静岡県',
    title: '【日本一早咲きの熱海梅園と冬海上花火】2026-2027年冬の熱海温泉！絶景オーシャンビュー露天＆金目鯛名宿5選',
    metaDesc: '日本一早咲きを誇る熱海梅園の梅まつりと冬の澄んだ夜空を彩る熱海海上花火大会！波打ち際の絶景露天風呂と脂が乗った冬の金目鯛煮付け会席を味わう熱海温泉の人気名旅館5選。',
    spotQuery: '熱海梅園',
    area: '熱海・伊豆',
    queries: [
      '熱海温泉 古屋旅館',
      'ホテルグランバッハ熱海クレッシェンド',
      '熱海温泉 ホテルニューアカオ',
      'HOTEL NEW ACAO',
      'ニューアカオ',
      '熱海後楽園ホテル',
      '熱海温泉 熱海館',
      '熱海温泉 あたみ石亭',
      '熱海温泉 湯宿 みかんの木'
    ]
  },
  {
    theme: 'miyajima_winter_oyster_hatsumode',
    slug: 'winter-hiroshima-miyajima-winter-oyster-itsukushima-hatsumode-stay',
    pref: 'hiroshima',
    prefJa: '広島県',
    title: '【冬の宮島牡蠣三昧と厳島神社新春初詣】2026-2027年冬の宮島・宮浜温泉！世界遺産と絶景潮湯名宿5選',
    metaDesc: '冬に実入りがピークを迎える濃厚クリーミーな宮島牡蠣と世界遺産・厳島神社の新春初詣！海上に浮かぶ大鳥居の荘厳な眺望、宮島潮湯温泉や対岸宮浜温泉の絶景露天風呂を愉しむ厳選5宿。',
    spotQuery: '厳島神社',
    area: '宮島・廿日市・宮浜温泉',
    queries: [
      '宮島潮湯温泉 錦水館',
      'ホテル宮島別荘',
      '宮島 神撰の宿 ホテルみや離宮',
      '安芸グランドホテル',
      '宮島グランドホテル 有もと',
      '宮浜温泉 庭園の宿 石亭',
      '宮島シーサイドホテル'
    ]
  },
  {
    theme: 'hakuba_valley_powder_snow_happo',
    slug: 'winter-nagano-hakuba-valley-powder-snow-happo-onsen-stay',
    pref: 'nagano',
    prefJa: '長野県',
    title: '【HAKUBA VALLEY極上パウダースノーと白馬八方温泉】2026-2027年冬の白馬山麓！高アルカリ美肌湯と信州牛名宿5選',
    metaDesc: '世界水準の極上ドライパウダースノーHAKUBA VALLEYと日本屈指の強アルカリ美肌の湯「白馬八方温泉」！白馬三山の白銀絶景パノラマ、信州プレミアム牛や信州サーモンを堪能するリゾートホテル＆名旅館5選。',
    spotQuery: '白馬八方尾根スキー場',
    area: '白馬・八方尾根・栂池高原',
    queries: [
      '白馬東急ホテル',
      'ホテルシェラリゾート白馬',
      '白馬八方温泉 まるいし',
      'コートヤード・バイ・マリオット 白馬',
      '白馬ハイランドホテル',
      '白馬栂池高原 栂池観光ホテル'
    ]
  },
  {
    theme: 'okunikko_kegon_falls_ice_yumoto_snow',
    slug: 'winter-tochigi-okunikko-kegon-falls-ice-yumoto-snow-onsen-stay',
    pref: 'tochigi',
    prefJa: '栃木県',
    title: '【奥日光華厳の滝ブルーアイス氷瀑と乳白色硫黄泉】2026-2027年冬の日光湯元温泉！雪見露天ととちぎ和牛名宿5選',
    metaDesc: '落差97mの日本三名瀑が青く凍りつく「華厳の滝ブルーアイス」と中禅寺湖の雪景色！国民保養温泉地第1号の奥日光湯元温泉（濃厚乳白色硫黄泉）の雪見露天、とちぎ和牛と日光湯波会席を味わう至高の5宿。',
    spotQuery: '華厳滝',
    area: '奥日光・日光湯元温泉・中禅寺湖',
    queries: [
      '奥日光 森のホテル',
      '日光グランドホテル ほのかな宿樹林',
      '奥日光湯元温泉 スパビレッジ カマヤ',
      '中禅寺金谷ホテル',
      '奥日光高原ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 133 - Winter)');
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

  const outPath = path.join(__dirname, 'round133_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);

  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count !== 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes do not have exactly 5 hotels!');
    process.exit(1);
  }
  console.log('\n🎉 All 5 winter themes successfully fetched 5 verified hotels (Total: 25) via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
