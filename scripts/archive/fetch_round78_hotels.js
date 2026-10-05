const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hokkaido_otaru_asarigawa',
    label: '北海道・小樽＆朝里川温泉（小樽ゆき物語・青の運河イルミネーションと極上小樽前浜寿司・海鮮丼＆雪見温泉）',
    queries: [
      'ホテルノイシュロス小樽',
      'おたる　宏楽園',
      '運河の宿　おたる　ふる川',
      'オーセントホテル小樽',
      '小樽朝里川温泉　ホテル武蔵亭'
    ]
  },
  {
    theme: 'nagasaki_hirado',
    label: '長崎・平戸温泉郷（初冬の幻の高級魚天然クエ鍋・寒ヒラメ姿造り・特選平戸和牛と平戸城・異国情緒温泉）',
    queries: [
      '平戸温泉　国際観光ホテル　旗松亭',
      '平戸海上ホテル',
      '平戸たびら温泉　サムソンホテル',
      'ホテル彩陽　ＷＡＫＩＧＡＷＡ',
      '大江戸温泉物語　ホテル蘭風'
    ]
  },
  {
    theme: 'fukui_wakasa_mikatagoko',
    label: '福井・若狭三方五湖＆敦賀温泉郷（若狭ふぐ・敦賀港越前蟹・名物焼き鯖＆三方五湖初冬レイクビュー美肌温泉）',
    queries: [
      '若狭みかた　きらら温泉　水月花',
      '虹岳島温泉　虹岳島荘',
      '海香の宿　波華楼',
      '若狭美浜温泉　悠久乃碧　ホテル湾彩',
      '敦賀マンテンホテル駅前'
    ]
  },
  {
    theme: 'kumamoto_hitoyoshi',
    label: '熊本・人吉温泉郷（球磨川初冬朝霧絶景と美肌名湯・名物落ち鮎塩焼き＆極上球磨黒毛和牛・球磨焼酎会席）',
    queries: [
      '人吉温泉　あゆの里',
      'ひとよし温泉　旅館　翠嵐楼',
      '国登録有形文化財の宿　人吉温泉　芳野旅館',
      '人吉温泉　鍋屋',
      'ホテルサン人吉'
    ]
  },
  {
    theme: 'shizuoka_atagawa',
    label: '静岡・熱川温泉＆東伊豆（東伊豆の湯けむりと水平線日の出露天・名物金目鯛しゃぶしゃぶ＆伊豆牛ステーキ）',
    queries: [
      '熱川温泉　熱川プリンスホテル',
      '熱川館',
      'ホテルカターラ',
      '熱川温泉　熱川ハイツ',
      '吉祥ＣＡＲＥＮ'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 78 (All 5 Themes, Exactly 5 Local Hotels Each)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Success: ${selected.hotelName} (No: ${selected.hotelNo}, Rating: ${selected.reviewAverage}, Price: ¥${selected.hotelMinCharge})`);
          } else {
            console.warn(`  -> All results duplicate for "${q}"`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    console.log(`Total hotels collected for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length < 5) {
      console.error(`ERROR: Failed to collect 5 hotels for ${t.theme}!`);
      process.exit(1);
    }
    result[t.theme] = themeHotels;
  }

  const outputPath = path.join(__dirname, 'round78_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully wrote all hotel data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round78_hotels:', err);
  process.exit(1);
});
