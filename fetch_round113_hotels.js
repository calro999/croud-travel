const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'sapporo_jozankei',
    slug: 'winter-hokkaido-sapporo-odori-illumination-jozankei-stay',
    label: '北海道・札幌＆定山渓温泉（さっぽろホワイトイルミネーション＆定山渓雪見露天！札幌味噌ラーメンと北の味覚名宿）',
    filter: (h) => h.address1.includes('北海道') && (h.address2.includes('札幌市') || h.address2.includes('中央区') || h.address2.includes('南区')),
    queries: [
      'JRタワーホテル日航札幌',
      '京王プラザホテル札幌',
      '札幌グランドホテル',
      '定山渓第一寶亭留 翠山亭',
      '章月グランドホテル',
      'クロスホテル札幌',
      '定山渓万世閣ホテルミリオーネ',
      'ホテルエミシア札幌'
    ]
  },
  {
    theme: 'yokohama_minatomirai',
    slug: 'winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay',
    label: '神奈川・横浜＆みなとみらい・中華街（赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿）',
    filter: (h) => h.address1.includes('神奈川県') && (h.address2.includes('横浜市中区') || h.address2.includes('横浜市西区') || h.address2.includes('横浜市')),
    queries: [
      '横浜ベイホテル東急',
      'ヨコハマ グランド インターコンチネンタル ホテル',
      'ウェスティンホテル横浜',
      'ホテルニューグランド',
      'ハイアット リージェンシー 横浜',
      'ローズホテル横浜',
      '三井ガーデンホテル横浜みなとみらいプレミア'
    ]
  },
  {
    theme: 'shirakawago_hidatakayama',
    slug: 'winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay',
    label: '岐阜・白川郷＆飛騨高山・奥飛騨温泉郷（世界遺産白川郷雪景色＆高山古い町並み！奥飛騨雪見露天と飛騨牛会席の名宿）',
    filter: (h) => h.address1.includes('岐阜県') && (h.address2.includes('高山市') || h.address2.includes('大野郡白川村') || h.address2.includes('飛騨市')),
    queries: [
      '本陣平野屋 花兆庵',
      '匠の宿 深山桜庵',
      'ホテルアソシア高山リゾート',
      '高山グリーンホテル',
      '飛騨亭 花扇',
      '本陣平野屋 別館',
      '白川郷の湯'
    ]
  },
  {
    theme: 'marunouchi_tokyo',
    slug: 'winter-tokyo-marunouchi-illumination-tokyo-station-hatsumode-stay',
    label: '東京・丸の内＆大手町・日本橋（丸の内イルミネーション＆東京駅丸の内駅舎夜景！皇居新春散策と江戸前極上宿）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('千代田区') || h.address2.includes('中央区')),
    queries: [
      '東京ステーションホテル',
      '丸ノ内ホテル',
      'パレスホテル東京',
      '三井ガーデンホテル大手町',
      'ホテル龍名館東京',
      'ロイヤルパークホテル',
      'マンダリン オリエンタル 東京'
    ]
  },
  {
    theme: 'kyoto_gion_higashiyama',
    slug: 'winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay',
    label: '京都・祇園＆東山・清水寺・八坂神社（八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿）',
    filter: (h) => h.address1.includes('京都府') && (h.address2.includes('京都市東山区') || h.address2.includes('京都市下京区') || h.address2.includes('京都市')),
    queries: [
      'ホテル ザ セレスティン京都祇園',
      'ウェスティン都ホテル京都',
      'ハイアット リージェンシー 京都',
      '京都グランベルホテル',
      'ノーガホテル 清水 京都',
      'ぎおん畑中',
      '長楽館'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 113 via Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(500); // polite API throttling

        for (const h of hotels) {
          if (!usedHotelNos.has(h.hotelNo)) {
            // Apply geographic address filter
            if (t.filter(h)) {
              usedHotelNos.add(h.hotelNo);
              themeHotels.push(h);
              console.log(`  [ADDED] ${h.hotelName} (${h.address1} ${h.address2}) - Rating: ${h.reviewAverage}`);
              break; // take best match from this query
            } else {
              console.log(`  [FILTERED OUT] ${h.hotelName} (${h.address1} ${h.address2})`);
            }
          }
        }
      } catch (err) {
        console.error(`  Error searching "${q}":`, err.message);
      }

      if (themeHotels.length >= 5) {
        console.log(`Reached 5 verified hotels for ${t.theme}!`);
        break;
      }
    }

    if (themeHotels.length < 5) {
      console.warn(`WARNING: Only found ${themeHotels.length} hotels for theme ${t.theme}`);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels.slice(0, 5)
    };
  }

  const outPath = path.join(__dirname, 'round113_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 113 hotel data to: ${outPath}`);
}

main().catch(console.error);
