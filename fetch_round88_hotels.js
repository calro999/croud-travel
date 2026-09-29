const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'nagano_togura_kamiyamada',
    label: '長野・戸倉上山田温泉（千曲川の初冬静寂と善光寺精進落としの名湯美肌硫黄泉・極上信州プレミアム牛＆サンふじリンゴ・辛味大根おしぼりうどん名宿）',
    queries: [
      '湯元　上山田ホテル',
      '戸倉上山田温泉　亀屋本店',
      '戸倉上山田温泉　荻原館',
      '笹屋ホテル',
      '戸倉上山田温泉　ホテル圓山荘',
      '戸倉上山田温泉　リバーサイド上田館'
    ]
  },
  {
    theme: 'hiroshima_tomonoura',
    label: '広島・鞆の浦温泉（瀬戸内海初冬の夕暮れと潮待ちの港情緒・名物寒真鯛の鯛めし＆地魚姿造り・幻の峠下牛と保命酒名宿）',
    queries: [
      '鞆の浦温泉　汀邸　遠音近音',
      '鞆の浦温泉　景勝館　漣亭',
      'ホテル鴎風亭',
      'ＮＩＰＰＯＮＩＡ　鞆　港町',
      '潮待ちホテル　Ｓｈｉｏｍａｃｈｉ　ＨＯＴＥＬ',
      '人生感が変わる宿　ここから'
    ]
  },
  {
    theme: 'oita_hita_amagase',
    label: '大分・日田温泉＆天瀬温泉（水郷ひたの初冬川霧と豆田町天領小江戸・玖珠川渓流露天風呂とおおいた豊後牛・初冬鮎うるか名宿）',
    queries: [
      '日田温泉　亀山亭ホテル',
      '日田温泉　小京都の湯　みくまホテル',
      '天ヶ瀬温泉　山荘　天水',
      '瀬音・湯音の宿　浮羽',
      '奥日田温泉　うめひびき',
      '旅籠かやうさぎ'
    ]
  },
  {
    theme: 'fukushima_dake',
    label: '福島・岳温泉（安達太良山初冬の雪景色と全国屈指の強酸性ミルキー自然湧出美肌湯・極上福島牛＆ブランド地鶏川俣シャモ名宿）',
    queries: [
      '岳温泉　お宿　花かんざし',
      'ながめの館　光雲閣',
      '岳温泉　陽日の郷　あづま館',
      '鏡が池　碧山亭',
      'あだたらの宿　扇や'
    ]
  },
  {
    theme: 'shizuoka_izunagaoka',
    label: '静岡・伊豆長岡温泉（富士山眺望と源氏山の初冬風情・駿河湾朝獲れ地魚舟盛り＆伊豆牛ステーキ・金目鯛姿煮名宿）',
    queries: [
      '伊豆長岡温泉　三養荘',
      'ホテルサンバレー伊豆長岡',
      '伊豆長岡温泉　ホテル天坊',
      '石のや　伊豆長岡',
      '伊豆長岡温泉　弘法の湯　本店'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 88 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round88_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
