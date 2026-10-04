const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokyo_shibuya_omotesando',
    slug: 'winter-tokyo-shibuya-omotesando-meijijingu-hatsumode-illumination-stay',
    label: '東京・渋谷＆表参道・原宿（明治神宮初詣＆青の洞窟・表参道ケヤキ並木イルミネーション！SHIBUYA SKY展望夜景と洗練のブティック・ラグジュアリーホテル名宿）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('渋谷区') || h.address2.includes('港区')),
    queries: [
      'セルリアンタワー東急ホテル',
      'SHIBUYA STREAM HOTEL',
      'sequence MIYASHITA PARK',
      '渋谷エクセルホテル東急',
      '東急ステイ渋谷新南口'
    ]
  },
  {
    theme: 'tokyo_ginza_hibiya',
    slug: 'winter-tokyo-ginza-hibiya-illumination-christmas-market-luxury-stay',
    label: '東京・銀座＆日比谷・有楽町（HIBIYA Magic Time Illumination＆東京クリスマスマーケット！銀座中央通り冬夜景と名店美食・世界最高峰ラグジュアリーホテル名宿）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('中央区') || h.address2.includes('千代田区')),
    queries: [
      '帝国ホテル 東京',
      'ザ・ペニンシュラ東京',
      'ミレニアム 三井ガーデンホテル 東京',
      '三井ガーデンホテル銀座プレミア',
      'ホテル ザ セレスティン銀座'
    ]
  },
  {
    theme: 'hokkaido_biei_furano',
    slug: 'winter-hokkaido-biei-furano-bluepond-lightup-tokachidake-onsen-stay',
    label: '北海道・美瑛＆富良野（白金青い池・白ひげの滝ライトアップ＆大雪山十勝岳白銀パノラマ！十勝岳温泉の絶景雪見にごり湯と富良野美瑛の美食リゾート名宿）',
    filter: (h) => h.address1.includes('北海道') && (h.address2.includes('美瑛町') || h.address2.includes('富良野') || h.address2.includes('上川郡') || h.address2.includes('空知郡')),
    queries: [
      '十勝岳温泉 カミホロ荘',
      '湯元白金温泉ホテル',
      'ホテル パークヒルズ',
      'ラビスタ富良野ヒルズ',
      '新富良野プリンスホテル'
    ]
  },
  {
    theme: 'shizuoka_gotemba_tokinosumika',
    slug: 'winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay',
    label: '静岡・御殿場＆裾野（御殿場高原 時之栖イルミネーション＆御殿場プレミアム・アウトレット！冬の富士山絶景展望露天風呂と駿河湾海の幸・静岡和牛名宿）',
    filter: (h) => h.address1.includes('静岡県') && (h.address2.includes('御殿場市') || h.address2.includes('裾野市')),
    queries: [
      'HOTEL CLAD',
      'レンブラントプレミアム 富士御殿場',
      '御殿場高原 時之栖',
      'マースガーデンウッド御殿場',
      'ドーミーインEXPRESS富士山御殿場'
    ]
  },
  {
    theme: 'kyoto_heian_jingu_okazaki',
    slug: 'winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay',
    label: '京都・平安神宮＆南禅寺・岡崎（平安神宮初詣＆名勝神苑雪景色・南禅寺水路閣の冬情趣！名物熱々湯豆腐と老舗京懐石・東山奥座敷の数寄屋造り＆ラグジュアリー名宿）',
    filter: (h) => h.address1.includes('京都府') && (h.address2.includes('左京区') || h.address2.includes('東山区') || h.address2.includes('京都市')),
    queries: [
      'ウェスティン都ホテル京都',
      'ふふ 京都',
      '京都トラベラーズイン',
      '南禅寺参道 菊水',
      'ホテルオークラ京都 岡崎別邸'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 115)');
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
        await sleep(350); // respect rate limit

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

  const outPath = path.join(__dirname, 'round115_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all 25 raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
