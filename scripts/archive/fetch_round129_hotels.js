const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'minobusan_kuonji_shimobe',
    slug: 'winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay',
    label: '山梨・身延山久遠寺＆下部温泉（日蓮宗総本山「身延山久遠寺」白銀の奥之院思親閣新春初詣と千本杉・三門！富士川冬景色・名物身延湯葉会席＆信玄の隠し湯「下部温泉」ぬる湯治名宿）',
    queries: ['下部ホテル', '身延山三門前　旅館田中屋', '下部温泉　元湯　橋本屋', '下部温泉　ホテル守田', '下部温泉　湯元ホテル']
  },
  {
    theme: 'iga_ueno_akame',
    slug: 'winter-mie-iga-ueno-castle-akame-48waterfalls-hyobaku-igagyu-stay',
    label: '三重・伊賀上野＆名張・赤目四十八滝（忍者の里「伊賀上野城」白銀の高石垣と芭蕉翁生家・菅原道真公祀る「上野天神宮」新春初詣！冬限定「赤目四十八滝」氷瀑トレッキング・幻の最高峰「伊賀牛すき焼き」＆赤目温泉名宿）',
    queries: ['赤目温泉 隠れの湯 対泉閣', '赤目温泉 山水園', 'ホテルルートイン伊賀上野', '伊賀上野シティホテル', 'ホテルルートイン名張']
  },
  {
    theme: 'akashi_uonotana',
    slug: 'winter-hyogo-akashi-uonotana-kakimoto-shrine-hatsumode-akashiyaki-stay',
    label: '兵庫・明石＆加古川・播磨灘（明石海峡大橋を望む人麿山「柿本神社」新春初詣と歳末・新春で活気溢れる「魚の棚商店街」！冬の激流が育む「明石だこ・明石鯛」本場明石焼き＆加古川かつめし・播州牛名宿）',
    queries: ['ホテルキャッスルプラザ 明石', 'グリーンヒルホテル明石', '加古川プラザホテル', 'シーサイドホテル舞子ビラ神戸', '明石ルミナスホテル']
  },
  {
    theme: 'chiba_minamiboso_kyonan',
    slug: 'winter-chiba-minamiboso-kyonan-suisen-road-awa-shrine-hatsumode-iseebi-stay',
    label: '千葉・南房総＆鋸南・江月水仙ロード・館山（常春の南房総「江月水仙ロード」1000万本の水仙の香りと房総フラワーライン！日本三大金運神社「安房神社」新春初詣・野島埼灯台の初日の出＆房総伊勢海老・金目鯛名宿）',
    queries: ['休暇村 館山', 'グランドメルキュール南房総リゾート＆スパ', '白浜オーシャンリゾート', 'ホテル南海荘', '館山シーサイドホテル']
  },
  {
    theme: 'shimane_tsuwano',
    slug: 'winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay',
    label: '島根・津和野＆太皷谷稲成神社・吉賀（山陰の小京都「津和野」雪化粧の殿町通りとなまこ壁・朱塗りの千本鳥居「太皷谷稲成神社」新春初詣！日本五大稲荷・冬の伝統熱々郷土料理「うずめ飯」＆幻の石見和牛名宿）',
    queries: ['ゆとりろ津和野', '若槻　津和野', '益田グリーンホテルモーリス', 'ホテルルートイン益田', '瑞穂イン石見益田']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 129)');
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
        await sleep(600);

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

  const outPath = path.join(__dirname, 'round129_raw_hotels.json');
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
  console.log('\n🎉 All 5 themes successfully fetched 5 verified hotels (Total: 25) via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
