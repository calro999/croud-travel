const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tdr_halloween',
    slug: 'autumn-tokyo-disney-resort-halloween-maihama-hotels-stay',
    label: '東京ディズニーリゾート・ハロウィーン（ディズニー・ハロウィーン＆ヴィランズ・ナイト！舞浜オフィシャル＆パートナー厳選ホテル5選）',
    queries: [
      'グランドニッコー東京ベイ 舞浜',
      '東京ベイ舞浜ホテル ファーストリゾート',
      'ホテルエミオン東京ベイ',
      'オリエンタルホテル東京ベイ',
      '浦安ブライトンホテル東京ベイ'
    ]
  },
  {
    theme: 'usj_halloween',
    slug: 'autumn-usj-halloween-horror-nights-osaka-bay-hotels-stay',
    label: 'ユニバーサル・スタジオ・ジャパン・ハロウィーン（USJハロウィーン・ホラー・ナイト＆ストリート・ゾンビ！絶叫と大熱狂・オフィシャル厳選ホテル5選）',
    queries: [
      'ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン',
      'ホテル 近鉄 ユニバーサル・シティ',
      'ホテル京阪 ユニバーサル・タワー',
      'ホテル ユニバーサル ポート',
      'リーベルホテル 大阪'
    ]
  },
  {
    theme: 'huistenbosch_halloween',
    slug: 'autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay',
    label: '長崎ハウステンボス・ハロウィーン（ヨーロッパの街並みが包まれるハロウィーンフェスティバル＆ナイトイルミネーション！直営＆オフィシャル厳選名宿5選）',
    queries: [
      'ホテルオークラＪＲハウステンボス',
      'ホテルヨーロッパ ハウステンボス',
      'ホテルアムステルダム ハウステンボス',
      'ホテルデンハーグ ハウステンボス',
      'ホテル日航ハウステンボス'
    ]
  },
  {
    theme: 'yokohama_halloween',
    slug: 'autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay',
    label: '横浜山手西洋館ハロウィーンウォーク＆みなとみらい（洋館7館の本格装飾・ハロウィーンアフタヌーンティー＆夜景ベイエリア厳選名宿5選）',
    queries: [
      '横浜ベイホテル東急',
      'ホテル ニューグランド 神奈川',
      'ヨコハマ グランド インターコンチネンタル ホテル',
      'ローズホテル横浜',
      '三井ガーデンホテル横浜みなとみらいプレミア'
    ]
  },
  {
    theme: 'shimaspanish_halloween',
    slug: 'autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay',
    label: '志摩スペイン村・ハロウィーンフィエスタ（情熱のスペイン風ハロウィーン装飾＆フォトジェニックパレード！伊勢志摩温泉リゾート厳選名宿5選）',
    queries: [
      'ホテル志摩スペイン村',
      '都リゾート 奥志摩 アクアフォレスト',
      'グランドメルキュール伊勢志摩リゾート＆スパ',
      '汀渚 ばさら邸',
      '都リゾート 志摩 ベイサイドテラス'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Halloween Hotels via Live Rakuten API (Round 130)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(650);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes.find(h => !usedHotelNos.has(h.hotelNo)) || searchRes[0];
          if (!usedHotelNos.has(hotel.hotelNo)) {
            usedHotelNos.add(hotel.hotelNo);
            console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage} - Price: ¥${hotel.hotelMinCharge}`);
            themeHotels.push(hotel);
          } else {
            console.log(`  ! Already added hotel: ${hotel.hotelName}`);
          }
        } else {
          console.error(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round130_raw_hotels.json');
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
  console.log('\n🎉 All 5 Halloween themes successfully fetched 5 verified hotels (Total: 25) via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
