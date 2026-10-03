const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokyo_odaiba',
    slug: 'winter-tokyo-odaiba-toyosu-senkyakubanrai-yakei-stay',
    label: '東京・お台場＆有明・豊洲（冬のお台場レインボー花火＆夜景！豊洲千客万来の江戸前海鮮と温泉ホテル）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('港区') || h.address2.includes('江東区')),
    queries: [
      'グランドニッコー東京 台場',
      'ヒルトン東京お台場',
      'ラビスタ東京ベイ',
      '東京ベイ有明ワシントンホテル',
      'ヴィラフォンテーヌ グランド 東京有明',
      '相鉄グランドフレッサ 東京ベイ有明',
      'ホテル インターコンチネンタル 東京ベイ'
    ]
  },
  {
    theme: 'osaka_castle',
    slug: 'winter-osaka-castle-nakanoshima-illumination-tenmangu-stay',
    label: '大阪・大阪城＆天満・中之島（冬の大阪城イルミナージュ＆大阪天満宮新春初詣！中之島水都夜景となにわ冬グルメ宿）',
    filter: (h) => h.address1.includes('大阪府') && (h.address2.includes('大阪市中央区') || h.address2.includes('大阪市北区') || h.address2.includes('大阪市')),
    queries: [
      'ホテルニューオータニ大阪',
      '帝国ホテル 大阪',
      'リーガロイヤルホテル 大阪',
      '三井ガーデンホテル大阪プレミア',
      'プレミアホテル-CABIN PRESIDENT-大阪',
      'ホテルモントレ ラ・スール大阪',
      'ANAクラウンプラザホテル大阪'
    ]
  },
  {
    theme: 'hyogo_kobe_port',
    slug: 'winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay',
    label: '兵庫・神戸港＆三宮・元町（生田神社新春初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛の名宿）',
    filter: (h) => h.address1.includes('兵庫県') && (h.address2.includes('神戸市中央区') || h.address2.includes('神戸市')),
    queries: [
      '神戸みなと温泉 蓮',
      'ホテルオークラ神戸',
      '神戸メリケンパークオリエンタルホテル',
      'ホテル ラ・スイート神戸ハーバーランド',
      'オリエンタルホテル',
      '神戸ポートピアホテル',
      'カンデオホテルズ神戸トアロード'
    ]
  },
  {
    theme: 'nara_park',
    slug: 'winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay',
    label: '奈良・奈良公園＆東大寺・春日大社（春日大社新春開運初詣＆東大寺冬景色！大和牛すき焼きと古都の洗練名宿）',
    filter: (h) => h.address1.includes('奈良県') && h.address2.includes('奈良市'),
    queries: [
      '奈良ホテル',
      'JWマリオット・ホテル奈良',
      '紫翠 ラグジュアリーコレクションホテル 奈良',
      'ホテル日航奈良',
      'ピアッツァホテル奈良',
      'セトレ ならまち',
      '春日ホテル'
    ]
  },
  {
    theme: 'saitama_omiya',
    slug: 'winter-saitama-omiya-hikawa-shrine-hatsumode-keyaki-stay',
    label: '埼玉・さいたま新都心＆大宮・氷川神社（武蔵一宮氷川神社新春初詣＆けやきひろばイルミネーション！武州牛と寛ぎ宿）',
    filter: (h) => h.address1.includes('埼玉県') && (h.address2.includes('さいたま市大宮区') || h.address2.includes('さいたま市中央区') || h.address2.includes('さいたま市')),
    queries: [
      'パレスホテル大宮',
      'ホテルメトロポリタンさいたま新都心',
      'カンデオホテルズ大宮',
      '天然温泉 氷川の湯 スーパーホテルPremierさいたま・大宮駅東口',
      'レフ大宮 by ベッセルホテルズ',
      'ブリランテ武蔵野',
      'ダイワロイネットホテル大宮西口'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 112 via Rakuten API');
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

  const outPath = path.join(__dirname, 'round112_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 112 hotel data to: ${outPath}`);
}

main().catch(console.error);
