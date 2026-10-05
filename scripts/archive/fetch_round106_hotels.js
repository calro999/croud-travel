const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shizuoka_fujinomiya',
    slug: 'winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay',
    label: '静岡・富士宮＆朝霧高原（冬の澄み渡る白雪富士山＆富士山本宮浅間大社新春初詣・田貫湖逆さ富士と特選静岡そだち牛すき焼き名宿）',
    queries: [
      '休暇村 富士',
      '富士宮富士急ホテル',
      'くれたけインプレミアム富士宮駅前',
      'ホテルクラウンヒルズ富士宮',
      '割烹旅館 富士見荘',
      '富士宮 ホテル',
      '朝霧高原 ホテル'
    ]
  },
  {
    theme: 'fukuoka_mojiko_kokura',
    slug: 'winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay',
    label: '福岡・門司港レトロ＆小倉（冬の門司港浪漫灯彩イルミネーション＆関門海峡・旬の豊前海一粒牡蠣・元祖焼きカレーと幻の小倉牛名宿）',
    queries: [
      'プレミアホテル門司港',
      'リーガロイヤルホテル小倉',
      'JR九州ステーションホテル小倉',
      'ダイワロイネットホテル小倉駅前',
      'ホテルルートイン門司港',
      '門司港 ホテル',
      '小倉 ホテル'
    ]
  },
  {
    theme: 'yamanashi_kofu_yumura',
    slug: 'winter-yamanashi-kofu-takeda-shrine-yumura-onsen-koshugyu-stay',
    label: '山梨・甲府＆湯村温泉（武田神社新春初詣＆富士山・南アルプス雪景色・開湯1200年信玄の隠し湯と熱々名物ほうとう・極上甲州牛名宿）',
    queries: [
      '常磐ホテル',
      '湯村温泉 柳屋',
      '古名屋ホテル',
      '城のホテル 甲府',
      '湯村温泉 ホテル吉野',
      '甲府 湯村温泉',
      '甲府 ホテル'
    ]
  },
  {
    theme: 'yamaguchi_iwakuni_suooshima',
    slug: 'winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay',
    label: '山口・岩国＆周防大島（日本三名橋錦帯橋の静謐な冬景色＆白蛇神社新春初詣・冬の風物詩周防大島みかん鍋と幻の高森牛・銘酒獺祭名宿）',
    queries: [
      '岩国国際観光ホテル',
      'ホテルサンルート岩国',
      'グリーンリッチホテル岩国駅前',
      'サンシャインサザンセト',
      'シティホテルみかわ',
      '岩国 ホテル',
      '周防大島 ホテル'
    ]
  },
  {
    theme: 'kagawa_takamatsu_yashima',
    slug: 'winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay',
    label: '香川・高松＆屋島・庵治温泉（特別名勝栗林公園の冬景色＆屋島寺新春初詣・冬限定の奇跡の極上魚オリーブハマチと讃岐うどん・オリーブ牛名宿）',
    queries: [
      '喜代美山荘 花樹海',
      'JRホテルクレメント高松',
      'ロイヤルパークホテル高松',
      '高松国際ホテル',
      '庵治観光ホテル',
      '高松 ホテル',
      '屋島 ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 106 via Official Rakuten API');
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
          for (const h of hotels) {
            if (themeHotels.length >= 5) break;
            if (!usedHotelNos.has(h.hotelNo)) {
              usedHotelNos.add(h.hotelNo);
              themeHotels.push(h);
              console.log(`  + [Found] [${h.hotelNo}] ${h.hotelName} (Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
            }
          }
        } else {
          console.log(`  - No results for query: "${q}"`);
        }
      } catch (err) {
        console.error(`  ! Error searching "${q}":`, err.message);
        await sleep(2000);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
    console.log(`Finished ${t.theme}: Total ${themeHotels.length} hotels collected.`);
  }

  const outPath = path.join(__dirname, 'round106_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved Rakuten API fetched hotels to ${outPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
