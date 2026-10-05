const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ibaraki_mito_kasama',
    slug: 'winter-ibaraki-mito-kasama-inari-hatsumode-ankou-hitachigyu-stay',
    label: '茨城・水戸＆笠間（日本三大稲荷・笠間稲荷神社新春初詣＆水戸偕楽園冬梅・本場濃厚あんこう鍋と極上常陸牛名宿）',
    filter: (h) => h.address1.includes('茨城県') && (h.address2.includes('水戸') || h.address2.includes('笠間') || h.address2.includes('東茨城')),
    queries: [
      '水戸プラザホテル',
      'ホテル・ザ・ウエストヒルズ・水戸',
      'ダイワロイネットホテル水戸',
      'ＪＲ東日本ホテルメッツ水戸',
      'プレジデントホテル水戸',
      'ホテルルートイン水戸県庁前',
      'コートホテル水戸'
    ]
  },
  {
    theme: 'hiroshima_onomichi_senkoji',
    slug: 'winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay',
    label: '広島・尾道＆しまなみ海道（冬の尾道水道夕景＆千光寺新春開運初詣・瀬戸内の旬魚オコゼ・穴子と名物尾道ラーメン名宿）',
    filter: (h) => h.address1.includes('広島県') && (h.address2.includes('尾道') || h.address2.includes('福山')),
    queries: [
      'グリーンヒルホテル尾道',
      '尾道国際ホテル',
      'ＨＯＴＥＬ　ＣＹＣＬＥ',
      '天然温泉　尾道みなと館',
      '尾道ロイヤルホテル',
      'Urashima INN -GANGI-',
      'おのみち河野屋',
      'ベッセルホテル福山'
    ]
  },
  {
    theme: 'oita_usa_kunisaki',
    slug: 'winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay',
    label: '大分・宇佐＆国東半島（全国八幡宮総本宮・宇佐神宮新春開運初詣＆国東六郷満山・豊前海天然車海老と極上豊後牛名宿）',
    filter: (h) => h.address1.includes('大分県') && (h.address2.includes('宇佐') || h.address2.includes('国東') || h.address2.includes('豊後高田') || h.address2.includes('中津') || h.address2.includes('杵築')),
    queries: [
      '富貴寺温泉　旅庵　蕗薹',
      'ホテルベイグランド国東',
      '梅園の里',
      'ホテルルートイン中津駅前',
      'スーパーホテル中津駅前',
      '東横ＩＮＮ中津駅前',
      'HOTEL AZ 大分安心院',
      'スパ＆リゾート ホテルソラージュ 日出'
    ]
  },
  {
    theme: 'okayama_takahashi_unkai',
    slug: 'winter-okayama-takahashi-bitchu-matsuyama-castle-unkai-chiyagyu-stay',
    label: '岡山・高梁＆備中松山城・美星町（冬の雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空・幻の千屋牛すき焼き名宿）',
    filter: (h) => h.address1.includes('岡山県') && (h.address2.includes('高梁') || h.address2.includes('新見') || h.address2.includes('井原') || h.address2.includes('総社') || h.address2.includes('加賀郡') || h.address2.includes('小田郡')),
    queries: [
      '高梁国際ホテル',
      '新見　グランドホテルみよしや',
      '高梁ファイブシーズホテル',
      'サントピア岡山総社',
      '矢掛屋',
      '吉備高原リゾートホテル',
      '千屋温泉',
      '新見 ホテル'
    ]
  },
  {
    theme: 'gifu_gujo_hachiman',
    slug: 'winter-gifu-gujo-hachiman-snow-castle-hidagyu-keichan-stay',
    label: '岐阜・郡上八幡＆美濃（冬の奥美濃小京都雪景色・宗祇水＆郡上八幡城・冬の地酒と極上飛騨牛すき焼き名宿）',
    filter: (h) => h.address1.includes('岐阜県') && (h.address2.includes('郡上') || h.address2.includes('美濃')),
    queries: [
      '郡上八幡　ホテル積翠園',
      'フェアフィールド・バイ・マリオット・岐阜郡上',
      'フェアフィールド・バイ・マリオット・岐阜美濃',
      '鷲ヶ岳高原ホテル・レインボー',
      '郡上八幡ホテル',
      'ホテル郡上八幡',
      '郡上八幡 旅館',
      '美濃 ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 107 via Rakuten API');
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
        const hotels = await searchRakutenHotels(q, 5);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          for (const h of hotels) {
            if (themeHotels.length >= 5) break;
            if (!usedHotelNos.has(h.hotelNo)) {
              // 住所フィルターチェック
              if (t.filter(h)) {
                usedHotelNos.add(h.hotelNo);
                themeHotels.push(h);
                console.log(`  + [Matched] [${h.hotelNo}] ${h.hotelName} | ${h.address1} ${h.address2} (Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
              } else {
                console.log(`  - [Filtered Out: wrong location] ${h.hotelName} | ${h.address1} ${h.address2}`);
              }
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

  const outPath = path.join(__dirname, 'round107_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved strictly filtered Rakuten API hotels to ${outPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
