const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tottori_daisen_kaike',
    slug: 'winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay',
    label: '鳥取・伯耆大山＆皆生温泉（秀峰・大山の白銀パウダースノー＆大神山神社奥宮初詣！日本海から湧く皆生温泉の塩湯露天・冬旬の松葉ガニ・鳥取和牛オレイン55・大山どり名宿）',
    filter: (h) => h.address1.includes('鳥取県') && (h.address2.includes('米子') || h.address2.includes('西伯郡') || h.address2.includes('境港')),
    queries: [
      '皆生 游月',
      '皆生つるや',
      '華水亭',
      '湯喜望 白扇',
      '皆生グランドホテル天水'
    ]
  },
  {
    theme: 'hokkaido_shikaribetsu_nukabira',
    slug: 'winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay',
    label: '北海道・然別湖＆ぬかびら源泉郷（氷結した湖上の幻の村「しかりべつ湖コタン」氷上露天風呂＆アイスバー！タウシュベツ川橋梁冬景色・源泉掛け流しぬかびら温泉・十勝ハーブ牛名宿）',
    filter: (h) => h.address1.includes('北海道') && (h.address2.includes('河東郡') || h.address2.includes('鹿追') || h.address2.includes('上士幌') || h.address2.includes('上川郡') || h.address2.includes('十勝') || h.address2.includes('新得') || h.address2.includes('音更')),
    queries: [
      '然別湖畔温泉ホテル 風水',
      '糠平温泉ホテル',
      'くったり温泉 レイク・イン',
      'サホロリゾートホテル',
      '十勝川温泉 観月苑'
    ]
  },
  {
    theme: 'nagasaki_shimabara_ariake',
    slug: 'winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay',
    label: '長崎・島原温泉＆雲仙・有明海（島原城の雪景色＆初詣・名物「具雑煮」と有明海冬牡蠣！湧水巡りと島原温泉の美肌源泉掛け流し・長崎和牛名宿）',
    filter: (h) => h.address1.includes('長崎県') && (h.address2.includes('島原') || h.address2.includes('南島原') || h.address2.includes('雲仙')),
    queries: [
      'ホテル南風楼',
      'ホテルシーサイド島原',
      '原城温泉 真砂',
      '島原温泉 旅館海望荘',
      '雲仙みかどホテル'
    ]
  },
  {
    theme: 'kyoto_miyama_tanba',
    slug: 'winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay',
    label: '京都・美山かやぶきの里＆丹波（日本の原風景・茅葺き集落の雪景色＆雪灯廊イルミネーション！冬の最高峰「丹波篠山天然ぼたん鍋」・丹波牛と里山雪見名宿）',
    filter: (h) => (h.address1.includes('京都府') && (h.address2.includes('南丹') || h.address2.includes('亀岡') || h.address2.includes('船井郡') || h.address2.includes('京都市右京区京北'))) || (h.address1.includes('兵庫県') && h.address2.includes('丹波篠山')),
    queries: [
      '美山町自然文化村 河鹿荘',
      '渓山閣',
      'すみや亀峰菴',
      '京都・烟河',
      '翠泉 亀岡'
    ]
  },
  {
    theme: 'akita_yokote_oyasukyo',
    slug: 'winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay',
    label: '秋田・横手＆湯沢・小安峡（約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」！稲庭うどん・横手やきそば・皆瀬牛と白銀雪見露天名宿）',
    filter: (h) => h.address1.includes('秋田県') && (h.address2.includes('横手') || h.address2.includes('湯沢') || h.address2.includes('雄勝')),
    queries: [
      'ホテルプラザアネックス横手',
      '横手セントラルホテル',
      '旅館 多郎兵衛',
      '元湯 くらぶ',
      '湯けむりの宿 稲住温泉'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 118)');
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
        await sleep(500); // respect rate limit

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
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round118_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
