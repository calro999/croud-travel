const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kanazawa_city',
    slug: 'winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay',
    label: '石川・金沢市中心部（冬の兼六園雪吊り＆尾山神社新春開運初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿）',
    filter: (h) => h.address1.includes('石川県') && h.address2.includes('金沢市'),
    queries: [
      'ホテル日航金沢',
      'ハイアット セントリック 金沢',
      '三井ガーデンホテル金沢',
      '天然温泉加賀の宝泉 御宿野乃金沢',
      'THE SQUARE HOTEL KANAZAWA',
      '金沢白鳥路 ホテル山楽',
      'ダイワロイネットホテル金沢駅西口'
    ]
  },
  {
    theme: 'tokyo_asakusa',
    slug: 'winter-tokyo-asakusa-sensoji-hatsumode-skytree-edomae-stay',
    label: '東京・浅草＆上野・押上（浅草寺新春初詣＆東京スカイツリー冬夜景！老舗すき焼き・江戸前天ぷら・下町天然温泉宿）',
    filter: (h) => h.address1.includes('東京都') && (h.address2.includes('台東区') || h.address2.includes('墨田区')),
    queries: [
      '浅草ビューホテル',
      '天然温泉凌雲の湯 御宿野乃浅草',
      'ザ・ゲートホテル雷門 by HULIC',
      'リッチモンドホテルプレミア浅草',
      '天然温泉 浅草寺の湯 ドーミーインEXPRESS浅草',
      '浅草東武ホテル',
      'ONE@Tokyo'
    ]
  },
  {
    theme: 'shizuoka_city',
    slug: 'winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay',
    label: '静岡・静岡市＆日本平・清水港（冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えびと名宿）',
    filter: (h) => h.address1.includes('静岡県') && (h.address2.includes('静岡市') || h.address2.includes('清水区') || h.address2.includes('葵区') || h.address2.includes('駿河区')),
    queries: [
      '日本平ホテル',
      'ホテルアソシア静岡',
      'ホテルクエスト清水',
      'ホテルオーレ',
      '静鉄ホテルプレジオ 静岡駅北',
      '中島屋グランドホテル',
      'ホテルマイステイズ清水'
    ]
  },
  {
    theme: 'miyazaki_nichinan',
    slug: 'winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay',
    label: '宮崎・日南＆日南海岸・飫肥（冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿）',
    filter: (h) => h.address1.includes('宮崎県') && (h.address2.includes('日南市') || h.address2.includes('串間市') || h.address2.includes('宮崎市')),
    queries: [
      '日南海岸 南郷プリンスホテル',
      '天然温泉 ひなたの宿 日南宮崎',
      '北郷 音色香の季 合歓のはな',
      'ホテルシーズン日南',
      '青島グランドホテル',
      'ANAホリデイ・イン リゾート 宮崎',
      'シェラトン・グランデ・オーシャンリゾート'
    ]
  },
  {
    theme: 'okinawa_naha',
    slug: 'winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay',
    label: '沖縄・那覇＆南部（新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル）',
    filter: (h) => h.address1.includes('沖縄県') && (h.address2.includes('那覇市') || h.address2.includes('豊見城市') || h.address2.includes('糸満市')),
    queries: [
      '琉球温泉 瀬長島ホテル',
      'ロワジールホテル 那覇',
      'ハイアット リージェンシー 那覇 沖縄',
      'ホテル コレクティブ',
      'サウスウエストグランドホテル',
      'ノボテル沖縄那覇',
      'ホテル アンテルーム 那覇'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 111 via Rakuten API');
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

  const outPath = path.join(__dirname, 'round111_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 111 hotel data to: ${outPath}`);
}

main().catch(console.error);
