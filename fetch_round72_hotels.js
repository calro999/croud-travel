const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'chiba_minamiboso',
    label: '千葉・南房総温泉郷（冬の温暖避寒リゾート・11・12月伊勢海老＆地魚姿造り・太平洋パノラマ露天風呂）',
    queries: [
      '鴨川館',
      '満ちてくる心の宿　吉夢',
      '網元の宿　ろくや',
      '館山温泉　休暇村　館山',
      '南房総白浜温泉　白浜オーシャンリゾート'
    ]
  },
  {
    theme: 'shiga_ogoto',
    label: '滋賀・おごと温泉（初冬の琵琶湖・比叡山初雪・開湯1200年美肌霊泉・特選近江牛＆冬限定真鴨鍋会席）',
    queries: [
      'おごと温泉　びわこ緑水亭',
      'おごと温泉　びわ湖花街道',
      'おごと温泉　暖灯館　きくのや',
      '里湯昔話　雄山荘',
      'おごと温泉　湯の宿木もれび'
    ]
  },
  {
    theme: 'shizuoka_yaizu',
    label: '静岡・焼津温泉（初冬の澄み渡る駿河湾越し富士山絶景・焼津港直送極上天然南マグロ＆深層水高張性美肌泉）',
    queries: [
      '焼津温泉　焼津グランドホテル',
      '焼津温泉　ホテルアンビア松風閣',
      '月と鮪　石上',
      '亀の井ホテル　焼津',
      '焼津温泉やいづマリンパレス'
    ]
  },
  {
    theme: 'shimane_izumo',
    label: '島根・出雲大社周辺温泉（11月神在月・神在祭の開運参拝・出雲そば・日本海冬カニ＆しまね和牛会席）',
    queries: [
      'いにしえの宿　佳雲',
      'お宿　月夜のうさぎ',
      '竹野屋旅館',
      'はたご小田温泉',
      'マリンタラソ出雲'
    ]
  },
  {
    theme: 'tokushima_naruto',
    label: '徳島・鳴門温泉（冬の激流が育む絶品鳴門鯛＆鳴門わかめ・阿波牛会席・鳴門海峡の冬渦潮と大塚国際美術館アート鑑賞）',
    queries: [
      'アオアヲナルトリゾート',
      'リゾートホテル　モアナコースト',
      '鳴門グランドホテル海月',
      'ベイリゾートホテル　鳴門海月',
      '鳴門海月別亭　シーサイドホテル鯛丸海月'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 72 (5 Themes, 5 Hotels Each)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1500); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Success: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
          } else {
            console.warn(`  -> Duplicate hotelNo: ${h.hotelNo}, skipping`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`=> Collected ${result[t.theme].length} hotels for ${t.theme}`);
  }

  const outputPath = path.join(__dirname, 'round72_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log('Hotel counts per theme:');
  for (const k of Object.keys(result)) {
    console.log(`  ${k}: ${result[k].length} hotels`);
  }
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
