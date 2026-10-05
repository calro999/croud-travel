const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokyo_shinjuku_nishishinjuku',
    slug: 'winter-tokyo-shinjuku-nishishinjuku-illumination-hatsumode-luxury-stay',
    label: '東京・新宿＆西新宿・新宿御苑（新宿ミナミルミ＆サザンテラス冬イルミネーション・都庁展望室360度パノラマ冬夜景＆花園神社初詣！老舗すき焼き・江戸前鮨・鉄板焼き美食と西新宿高層階ラグジュアリーホテル名宿）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('新宿区') || h.address2.includes('渋谷区')),
    queries: [
      'キンプトン新宿東京',
      '京王プラザホテル',
      'ハイアット リージェンシー 東京',
      'ホテルグレイスリー新宿',
      '新宿プリンスホテル'
    ]
  },
  {
    theme: 'gunma_manza_onsen_tsumagoi',
    slug: 'winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay',
    label: '群馬・万座温泉＆嬬恋（標高1,800m！日本一の濃厚硫黄泉・白濁にごり湯と白銀パウダースノー！満天の星空雪見露天風呂と上州牛すき焼き・嬬恋高原キャベツ名宿）',
    filter: (h) => h.address1.includes('群馬県') && (h.address2.includes('吾妻郡') || h.address2.includes('嬬恋')),
    queries: [
      '万座プリンスホテル',
      '万座高原ホテル',
      '万座ホテルジュラク',
      '日進館',
      '万座亭'
    ]
  },
  {
    theme: 'yamaguchi_nagato_tsunoshima_motonosumi',
    slug: 'winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay',
    label: '山口・長門＆角島・元乃隅神社（日本海のコバルトブルーに架かる角島大橋冬景色＆元乃隅神社123基の赤鳥居初詣！長門湯本温泉の恩湯・川床散策と仙崎イカ・長州黒かしわ・とらふぐ名宿）',
    filter: (h) => h.address1.includes('山口県') && (h.address2.includes('長門市') || h.address2.includes('下関市') || h.address2.includes('萩市')),
    queries: [
      '大谷山荘',
      '西長門リゾート',
      '湯本観光ホテル 西京',
      '山村別館',
      '楊貴館'
    ]
  },
  {
    theme: 'nagasaki_city_lantern_inasayama',
    slug: 'winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay',
    label: '長崎・長崎市＆稲佐山・南山手（長崎ランタンフェスティバル1万5千個の灯り＆稲佐山世界新三大夜景！冬のグラバー園ライトアップと名物長崎ちゃんぽん・卓袱料理・長崎和牛、長崎港一望ホテル名宿）',
    filter: (h) => h.address1.includes('長崎県') && h.address2.includes('長崎市'),
    queries: [
      'ガーデンテラス長崎',
      'ルークプラザホテル',
      'ホテルニュー長崎',
      '長崎グラバーヒル',
      '紅葉亭'
    ]
  },
  {
    theme: 'okinawa_motobu_nakijin_yaedake',
    slug: 'winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay',
    label: '沖縄・本部＆今帰仁・名護（日本一早い春！もとぶ八重岳桜まつり＆今帰仁城跡桜まつり、美ら海水族館と冬の沖縄リゾート・やんばる島豚アグー・本部牛名宿）',
    filter: (h) => h.address1.includes('沖縄県') && (h.address2.includes('国頭郡') || h.address2.includes('名護市') || h.address2.includes('本部町') || h.address2.includes('今帰仁村')),
    queries: [
      'ホテル オリオン モトブ',
      'アラマハイナ',
      'ロイヤルビューホテル美ら海',
      'ホテルマハイナ',
      'ヒルトン沖縄瀬底リゾート'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 116)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 5);
        await sleep(400); // respect rate limit

        let matched = false;
        for (const h of hotels) {
          if (usedHotelNos.has(h.hotelNo)) continue;
          if (t.filter(h)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Matched: [${h.hotelNo}] ${h.hotelName} (${h.address1} ${h.address2}) - Score: ${h.reviewAverage}`);
            matched = true;
            break;
          } else {
            console.log(`  x Filtered out: [${h.hotelNo}] ${h.hotelName} (${h.address1} ${h.address2})`);
          }
        }
        if (!matched) {
          console.warn(`  ! No match passed filter for query: "${q}"`);
        }
      } catch (e) {
        console.error(`  Error searching "${q}":`, e.message);
      }
    }

    console.log(`Total selected hotels for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length !== 5) {
      console.error(`ERROR: ${t.theme} has ${themeHotels.length} hotels instead of 5!`);
      process.exit(1);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round116_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all 25 raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
