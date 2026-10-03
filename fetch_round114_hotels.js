const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'osaka_usj_bayarea',
    slug: 'winter-osaka-usj-bayarea-christmas-countdown-official-stay',
    label: '大阪・USJ＆大阪ベイエリア（NO LIMIT! クリスマス＆カウントダウン！天然温泉展望スパと絶景オフィシャルホテル名宿）',
    filter: (h) => h.address1.includes('大阪府') && (h.address2.includes('此花区') || h.address2.includes('港区') || h.address2.includes('大阪市')),
    queries: [
      'ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン',
      'ホテル ユニバーサル ポート',
      'ホテル ユニバーサル ポート ヴィータ',
      'ホテル近鉄 ユニバーサル・シティ',
      'リーベルホテル 大阪'
    ]
  },
  {
    theme: 'tokyo_roppongi_azabudai',
    slug: 'winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay',
    label: '東京・六本木＆麻布台ヒルズ・東京タワー（けやき坂イルミネーション＆都心夜景！東京タワー冬夜景とラグジュアリーホテル名宿）',
    filter: (h) => h.address1.includes('東京都') && h.address2.includes('港区'),
    queries: [
      'グランド ハイアット 東京',
      'ザ・リッツ・カールトン東京',
      'アンダーズ 東京',
      'ザ・プリンス パークタワー東京',
      '三井ガーデンホテル六本木プレミア'
    ]
  },
  {
    theme: 'chiba_maihama_disney',
    slug: 'winter-chiba-tokyo-disney-resort-maihama-christmas-hotel-stay',
    label: '千葉・舞浜＆東京ディズニーリゾート（ディズニークリスマス＆年末年始！直営・オフィシャルホテルで叶える夢の冬旅名宿）',
    filter: (h) => h.address1.includes('千葉県') && h.address2.includes('浦安市'),
    queries: [
      'シェラトン・グランデ・トーキョーベイ・ホテル',
      'ヒルトン東京ベイ',
      'グランドニッコー東京ベイ 舞浜',
      'ホテルオークラ東京ベイ',
      '東京ベイ舞浜ホテル ファーストリゾート'
    ]
  },
  {
    theme: 'kyoto_kibune_kurama',
    slug: 'winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay',
    label: '京都・貴船＆鞍馬・大原（雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！名物ぼたん鍋と名湯京懐石の隠れ家名宿）',
    filter: (h) => h.address1.includes('京都府') && (h.address2.includes('左京区') || h.address2.includes('北区') || h.address2.includes('京都市')),
    queries: [
      '大原温泉湯元 旬味草菜 お宿 芹生',
      '京都 貴船ふじや',
      '料理旅館 右源太',
      '京・貴船 ひろや',
      '大原温泉 大原の里'
    ]
  },
  {
    theme: 'okinawa_miyakojima',
    slug: 'winter-okinawa-miyakojima-shigira-resort-sunrisepoint-miyakogyu-stay',
    label: '沖縄・宮古島（冬の避寒リゾート＆宮古ブルー！シギラリゾートの南国極上ステイと宮古牛・東平安名崎初日の出名宿）',
    filter: (h) => h.address1.includes('沖縄県') && (h.address2.includes('宮古島市') || h.address2.includes('宮古郡')),
    queries: [
      'シギラベイサイドスイート アラマンダ',
      'ホテル シギラミラージュ',
      'ホテルブリーズベイマリーナ',
      'キャノピーｂｙヒルトン沖縄宮古島リゾート',
      '宮古島東急ホテル＆リゾーツ'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 114 via Rakuten API');
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

        for (const h of hotels) {
          if (usedHotelNos.has(h.hotelNo)) continue;
          if (t.filter(h)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Matched: [${h.hotelNo}] ${h.hotelName} (${h.address1} ${h.address2}) - Score: ${h.reviewAverage}`);
            break; // take best match for this query
          } else {
            console.log(`  x Filtered out: [${h.hotelNo}] ${h.hotelName} (${h.address1} ${h.address2})`);
          }
        }
      } catch (e) {
        console.error(`  Error searching "${q}":`, e.message);
      }
    }

    console.log(`Total selected hotels for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length !== 5) {
      console.warn(`WARNING: ${t.theme} has ${themeHotels.length} hotels (expected 5)!`);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels.slice(0, 5)
    };
  }

  const outPath = path.join(__dirname, 'round114_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
