const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ishikawa_hakusan_shirayamahime_tatsunokuchi',
    slug: 'winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay',
    label: '石川・白山＆加賀・辰口温泉（加賀一ノ宮「白山比咩神社」新春初詣と手取川雪景色！開湯1400年「辰口温泉」美肌名湯＆加賀丸いも・加能ガニ名宿）',
    queries: ['辰口温泉 まつさき', '辰口温泉 たがわ龍泉閣', 'グランドホテル白山', 'ホテルルートイン美川インター', 'ゆのくに天祥']
  },
  {
    theme: 'nara_kashihara_jingu_asuka_asukunabe',
    slug: 'winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay',
    label: '奈良・橿原＆明日香・飛鳥（日本建国の聖地「橿原神宮」新春初詣と畝傍山の冬朝霧！飛鳥路の静寂と名物「飛鳥鍋」・大和牛名宿）',
    queries: ['グランドメルキュール奈良橿原', 'カンデオホテルズ 奈良', '橿原オークホテル', '大和橿原シティホテル', 'ブランシエラ　ヴィラ　明日香']
  },
  {
    theme: 'shizuoka_kakegawa_fukuroi_hattasan',
    slug: 'winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay',
    label: '静岡・掛川＆袋井・遠州三山（厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守！「可睡齋」日本最大級ひなまつり＆遠州夢咲牛名宿）',
    queries: ['ドーミーインEXPRESS掛川', '掛川グランドホテル', 'パレスホテル掛川', 'くれたけインプレミアム袋井駅前', 'ホテル玄 掛川']
  },
  {
    theme: 'kagawa_takamatsu_tamura_shionoe',
    slug: 'winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay',
    label: '香川・高松＆屋島・塩江温泉（讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り！奥座敷「塩江温泉郷」＆熱々しっぽくうどん・オリーブ牛名宿）',
    queries: ['JRホテルクレメント高松', 'ロイヤルパークホテル高松', 'ダイワロイネットホテル高松', 'ハイパーリゾート ヴィラ塩江', '塩江温泉　新樺川観光ホテル']
  },
  {
    theme: 'gunma_kiryu_houtokuji_himokawa',
    slug: 'winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay',
    label: '群馬・桐生＆みどり・わたらせ（織物の都・桐生新町と床もみじの名刹「宝徳寺」新春初詣！冬の熱々「幅広ひもかわうどん」＆上州牛・両毛名宿）',
    queries: ['パークイン桐生', 'パールホテル 桐生', '桐生グランドホテル', '梨木館', '東横INN桐生駅南口']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 124)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes[0];
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage}`);
          themeHotels.push(hotel);
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

  const outPath = path.join(__dirname, 'round124_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count < 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes have less than 5 hotels!');
    process.exit(1);
  }
  console.log('All 5 themes successfully fetched 5 verified hotels via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
