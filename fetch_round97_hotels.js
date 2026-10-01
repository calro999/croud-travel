const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'okayama_hinase_ushimado',
    slug: 'winter-okayama-hinase-ushimado-oyster-kakioko-stay',
    label: '岡山・日生＆牛窓（冬の味覚「日生牡蠣」カキオコ・殻付き焼き牡蠣・牛窓オリーブ園夕陽・瀬戸内海温泉リゾート）',
    queries: [
      'ホテルリマーニ',
      '料理旅館　備前屋',
      'ダイヤモンド瀬戸内マリンホテル',
      '牛窓',
      '倉敷アイビースクエア',
      'ホテルグランヴィア岡山'
    ]
  },
  {
    theme: 'kochi_city_tosa_kue',
    slug: 'winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay',
    label: '高知・高知市＆南国（冬の味覚「天然クエ鍋」戻りガツオ藁焼き・土佐あかうし・高知城冬ライトアップ・天然温泉三翠園）',
    queries: [
      '城西館',
      '高知城下の天然温泉　三翠園',
      '土佐御苑',
      '天然温泉　紺碧の湯　ドーミーイン高知',
      'リゾートホテル海辺の果樹園',
      'ザ　クラウンパレス新阪急高知'
    ]
  },
  {
    theme: 'okinawa_onna_motobu',
    slug: 'winter-okinawa-onna-motobu-whalewatching-agu-resort-stay',
    label: '沖縄・恩納村＆本部（冬の避寒リゾート・ホエールウォッチング・美ら海水族館・アグー豚しゃぶしゃぶ＆もとぶ牛・恩納村スパ）',
    queries: [
      'ハレクラニ沖縄',
      'ハイアットリージェンシー瀬良垣アイランド沖縄',
      'ルネッサンスリゾートオキナワ',
      'ホテルモントレ沖縄　スパ＆リゾート',
      'オリエンタルホテル　沖縄リゾート＆スパ',
      'カフー　リゾート　フチャク　コンド・ホテル'
    ]
  },
  {
    theme: 'chiba_choshi_inubosaki',
    slug: 'winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay',
    label: '千葉・銚子＆犬吠埼（本州一早い初日の出「犬吠埼」冬の極上「銚子つりきんめ」九十九里焼きはまぐり・犬吠埼温泉）',
    queries: [
      '絶景の宿　犬吠埼ホテル',
      '犬吠埼潮の湯温泉　犬吠埼観光ホテル',
      '別邸　海と森',
      '銚子プラザホテル',
      'ホテルサンシャイン銚子',
      '亀の井ホテル　九十九里'
    ]
  },
  {
    theme: 'shiga_omihachiman_hikone',
    slug: 'winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay',
    label: '滋賀・近江八幡＆彦根（近江八幡水郷雪景色・国宝彦根城雪化粧・近江牛すき焼き・冬の琵琶湖フロント名宿）',
    queries: [
      '彦根キャッスル　リゾート＆スパ',
      '休暇村　近江八幡',
      '料亭旅館やす井',
      'ホテルニューオウミ',
      '蒼の湖邸　ＢＩＷＡＦＲＯＮＴ　ＨＩＫＯＮＥ'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 97 via Official Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Success: ${selected.hotelName} (No: ${selected.hotelNo}, Rating: ${selected.reviewAverage}, Price: ¥${selected.hotelMinCharge})`);
          } else {
            console.warn(`  -> Duplicate or not selected for query: ${q}`);
          }
        } else {
          console.warn(`  -> No results for query: ${q}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query: ${q}`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outputPath = path.join(__dirname, 'round97_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll done! Saved ${Object.keys(result).length} themes to ${outputPath}`);
}

main().catch(console.error);
