const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'iwate_morioka',
    slug: 'winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay',
    label: '岩手・盛岡＆繋温泉・鶯宿温泉（冬の盛岡・盛岡八幡宮新春開運初詣＆岩手山白銀パノラマ！繋温泉の美肌いで湯と盛岡三大麺・雫石牛に寛ぐ名宿）',
    filter: (h) => h.address1.includes('岩手県') && (h.address2.includes('盛岡') || h.address2.includes('雫石') || h.address2.includes('岩手郡')),
    queries: [
      'ホテル紫苑 つなぎ温泉',
      '愛真館 つなぎ温泉',
      'ホテルメトロポリタン盛岡 ニューウイング',
      'ドーミーイン盛岡',
      'ダイワロイネットホテル盛岡駅前',
      'ホテル大観 繋温泉',
      '長栄館 鶯宿温泉'
    ]
  },
  {
    theme: 'shizuoka_mishima_numazu',
    slug: 'winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay',
    label: '静岡・三島＆沼津・伊豆の国（冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！駿河湾深海魚・沼津港寒魚と名湯に寛ぐ厳選宿）',
    filter: (h) => h.address1.includes('静岡県') && (h.address2.includes('三島') || h.address2.includes('沼津') || h.address2.includes('伊豆の国') || h.address2.includes('駿東郡')),
    queries: [
      '富士山三島東急ホテル',
      'ドーミーイン三島',
      '沼津リバーサイドホテル',
      'ダイワロイネットホテルぬまづ',
      'ホテル天坊 伊豆長岡',
      '伊豆長岡温泉 実栗の宿 吉春',
      'ニュー八景園 伊豆長岡'
    ]
  },
  {
    theme: 'mie_suzuka_kuwana',
    slug: 'winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay',
    label: '三重・鈴鹿＆桑名・四日市（伊勢国一の宮・椿大神社新春みちびき初詣＆なばなの里イルミネーション！桑名冬蛤鍋と名宿）',
    filter: (h) => h.address1.includes('三重県') && (h.address2.includes('桑名') || h.address2.includes('鈴鹿') || h.address2.includes('四日市') || h.address2.includes('三重郡')),
    queries: [
      'ホテル花水木 長島温泉',
      'ガーデンホテルオリーブ 長島温泉',
      'ホテルナガシマ 長島温泉',
      '都ホテル 四日市',
      'ホテルルートイン鈴鹿',
      '三交イン桑名駅前',
      'スーパーホテル鈴鹿'
    ]
  },
  {
    theme: 'wakayama_city_kada',
    slug: 'winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay',
    label: '和歌山・和歌山市＆加太温泉（冬の日前神宮新春開運初詣＆紀淡海峡夕陽絶景！加太温泉名湯と冬の天然真鯛・幻のクエに寛ぐ名宿）',
    filter: (h) => h.address1.includes('和歌山県') && h.address2.includes('和歌山'),
    queries: [
      '加太海月',
      '休暇村 紀州加太',
      'ダイワロイネットホテル和歌山',
      'ホテルグランヴィア和歌山',
      '和歌山マリーナシティホテル',
      'ドーミーインPREMIUM和歌山',
      'ホテルアバローム紀の国'
    ]
  },
  {
    theme: 'kyoto_fushimi_uji',
    slug: 'winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay',
    label: '京都・伏見＆宇治（伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿）',
    filter: (h) => h.address1.includes('京都府') && (h.address2.includes('伏見') || h.address2.includes('宇治') || h.address2.includes('南区') || h.address2.includes('下京区') || h.address2.includes('東山区')),
    queries: [
      'アーバンホテル京都 伏見',
      '花やしき浮舟園 宇治',
      '都ホテル 京都八条',
      'ホテル京阪 京都 グランデ',
      'アルモントホテル京都'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 110 via Rakuten API');
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

  const outPath = path.join(__dirname, 'round110_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 110 hotel data to: ${outPath}`);
}

main().catch(console.error);
