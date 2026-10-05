const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'aichi_atsumi_irako',
    slug: 'winter-aichi-atsumi-irako-nanohana-torafugu-asari-stay',
    label: '愛知・渥美半島＆伊良湖岬（1月満開の菜の花まつり＆伊良湖岬初日の出！冬が旬の天然とらふぐ・焼き大アサリ・みかわ牛・いちご狩りと伊良湖温泉名宿）',
    filter: (h) => h.address1.includes('愛知県') && (h.address2.includes('田原') || h.address2.includes('渥美') || h.address2.includes('豊橋')),
    queries: [
      '伊良湖オーシャンリゾート',
      '角上楼',
      '休暇村 伊良湖',
      '伊良湖ホテル＆リゾート',
      '井筒楼'
    ]
  },
  {
    theme: 'hiroshima_kure_edajima',
    slug: 'winter-hiroshima-kure-edajima-oyster-yamato-port-stay',
    label: '広島・呉＆江田島・音戸（11〜1月最旬の広島かき小屋グルメ＆大和ミュージアム・海上自衛隊艦船ライトアップ冬イルミ！音戸の瀬戸と海軍カレー・広島牛・瀬戸内海一望名宿）',
    filter: (h) => h.address1.includes('広島県') && (h.address2.includes('呉市') || h.address2.includes('江田島市') || h.address2.includes('広島市')),
    queries: [
      '呉阪急ホテル',
      'クレイトンベイホテル',
      '江田島荘',
      'コンフォートホテル呉',
      '呉ステーションホテル'
    ]
  },
  {
    theme: 'fukushima_inawashiro_bandai',
    slug: 'winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay',
    label: '福島・猪苗代湖＆磐梯熱海温泉（厳冬期の奇跡「しぶき氷」氷結アート＆白鳥浜の白鳥たち！白銀の秀峰磐梯山と磐梯熱海温泉の美肌雪見露天風呂・会津地鶏・福島牛名宿）',
    filter: (h) => h.address1.includes('福島県') && (h.address2.includes('耶麻郡') || h.address2.includes('猪苗代') || h.address2.includes('郡山') || h.address2.includes('会津若松')),
    queries: [
      'ホテルリステル猪苗代',
      'ホテル華の湯 磐梯熱海',
      '四季彩一力',
      '守田屋 磐梯熱海',
      'レイクサイドホテルみなとや'
    ]
  },
  {
    theme: 'shiga_takashima_makino',
    slug: 'winter-shiga-takashima-makino-metasequoia-snow-shirahige-stay',
    label: '滋賀・高島＆マキノ・白鬚神社（冬の白銀絶景！マキノ高原メタセコイア並木雪景色＆近江の厳島・白鬚神社湖中大鳥居初詣！天然鴨鍋・近江牛すき焼きと温泉名宿）',
    filter: (h) => h.address1.includes('滋賀県') && (h.address2.includes('高島市') || h.address2.includes('大津市') || h.address2.includes('長浜市')),
    queries: [
      '奥琵琶湖マキノグランドパークホテル',
      '今津サンブリッジホテル',
      '宝船温泉',
      'びわこ緑水亭',
      '暖灯館 きくのや'
    ]
  },
  {
    theme: 'aomori_towada_oirase',
    slug: 'winter-aomori-towada-lake-oirase-hyobaku-snow-onsen-stay',
    label: '青森・十和田湖＆奥入瀬渓流（白銀の渓流にそびえる巨大氷瀑・氷柱ネイチャーツアー＆十和田湖冬物語！十和田神社初詣と奥入瀬渓流温泉雪見露天・十和田バラ焼き・倉石牛名宿）',
    filter: (h) => h.address1.includes('青森県') && (h.address2.includes('十和田') || h.address2.includes('上北郡') || h.address2.includes('八戸')),
    queries: [
      '星野リゾート 奥入瀬渓流ホテル',
      '十和田ホテル',
      'とわだこ賑山亭',
      '奥入瀬 森のホテル',
      '十和田プリンスホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 117)');
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
      // We will handle query adjustment if any theme fails
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round117_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
