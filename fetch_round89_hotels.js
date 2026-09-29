const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'miyagi_togatta',
    label: '宮城・遠刈田温泉＆蔵王山麓（初冠雪の蔵王連峰と開湯400年の名湯・仙台牛ステーキ＆蔵王鴨せり鍋・遠刈田こけし名宿）',
    queries: [
      '遠刈田温泉　旬菜湯宿　旅舘大忠',
      '遠刈田温泉　かっぱの宿　旅館三治郎',
      '温泉屋敷　バーデン家　壮鳳',
      '遠刈田温泉　たまや旅館',
      '遠刈田温泉　旅館　源兵衛'
    ]
  },
  {
    theme: 'fukushima_iwaki_yumoto',
    label: '福島・いわき湯本温泉（常磐ものの初冬寒アンコウどぶ汁鍋＆目光唐揚げ・日本三古湯の美肌硫黄泉・極上福島牛名宿）',
    queries: [
      'いわき湯本温泉　雨情の宿　新つた',
      'いわき湯本温泉　吹の湯旅館',
      'いわき湯本温泉　松柏館',
      'いわき湯本温泉　心やわらぐ宿　岩惣',
      'いわき湯本温泉　ときわの宿　浜とく'
    ]
  },
  {
    theme: 'chiba_yoro_keikoku',
    label: '千葉・養老渓谷温泉郷（本州一遅い初冬の紅葉ライトアップと美肌黒湯天然温泉・房総かずさ和牛＆天然猪ジビエ鍋名宿）',
    queries: [
      '養老温泉　秘湯の宿　滝見苑',
      '養老渓谷温泉郷　旅館　喜代元',
      '渓谷別庭　もちの木',
      '養老渓谷温泉郷　小さな旅の宿　天龍荘',
      '養老渓谷温泉郷　鶴乃家'
    ]
  },
  {
    theme: 'shizuoka_minamiizu_shimogamo',
    label: '静岡・南伊豆＆下賀茂温泉（温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老＆地金目鯛姿煮・水仙まつり名宿）',
    queries: [
      '南伊豆弓ヶ浜温泉　季一遊',
      '源泉一途　南伊豆（旧　下賀茂温泉　花のおもてなし南楽）',
      '壺中の天　宿○文',
      'ホテル河内屋　伊豆下賀茂温泉　１００％源泉かけ流しの湯',
      '休暇村南伊豆'
    ]
  },
  {
    theme: 'kumamoto_yamaga_hirayama',
    label: '熊本・山鹿温泉＆平山温泉（八千代座の小江戸情緒と極上とろとろ美肌ぬる湯・熊本あか牛＆極上霜降り馬刺し名宿）',
    queries: [
      '山鹿温泉　清流荘',
      '山鹿温泉　眺山庭',
      '山鹿温泉　熊本旬彩の宿ゆとりろ山鹿',
      '平山温泉　旅館　善屋',
      '山鹿温泉　富士ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 89 via Official Rakuten API');
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
        console.error(`  -> Error querying "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round89_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
