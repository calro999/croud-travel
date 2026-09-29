const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'iwate_hachimantai',
    label: '岩手・八幡平温泉郷＆松川温泉（白銀の樹氷と乳白色雪見秘湯・極上前沢牛と南部鉄器すき焼きを味わう名宿）',
    queries: [
      '松川温泉　松川荘',
      '松川温泉　峡雲荘',
      '八幡平温泉郷　八幡平ハイツ',
      '八幡平ライジングサンホテル',
      '新安比温泉　静流閣'
    ]
  },
  {
    theme: 'niigata_matsunoyama',
    label: '新潟・松之山温泉（日本三大薬湯の自噴化石海水と美人林の雪景色・極上妻有ポークと魚沼コシヒカリを味わう名宿）',
    queries: [
      '松之山温泉　ひなの宿　ちとせ',
      '松之山温泉　酒の宿　玉城屋',
      '越後松之山温泉　凌雲閣',
      '松之山温泉　薬湯香ル宿　白川屋',
      '松之山温泉　醸す森'
    ]
  },
  {
    theme: 'nagano_yamada_matsukawa',
    label: '長野・信州高山村山田温泉＆松川渓谷（渓谷雪見露天風呂と信州牛・小布施栗おこわと信州高山ワインを味わう名宿）',
    queries: [
      '心を整える宿　風景館',
      '信州高山温泉郷・山田温泉　平野屋旅館',
      '信州山田温泉　山田館',
      '旅館わらび野',
      '五色温泉　五色の湯旅館'
    ]
  },
  {
    theme: 'hokkaido_kawayu_mashu',
    label: '北海道・川湯温泉＆屈斜路湖・摩周湖（pH1.7強酸性硫黄泉の雪見名湯とオオハクチョウ・冬のオホーツク毛ガニと十勝牛を味わう名宿）',
    queries: [
      'お宿欣喜湯　別邸　すいかずら',
      '川湯温泉　川湯観光ホテル',
      '屈斜路プリンスホテル',
      '川湯温泉　山水館　川湯みどりや',
      '川湯温泉　ＫＫＲかわゆ'
    ]
  },
  {
    theme: 'kagoshima_myoken',
    label: '鹿児島・霧島妙見温泉＆安良川（天降川渓流の自噴炭酸泉露天と初冬の隠れ家・極上鹿児島黒豚しゃぶしゃぶと黒毛和牛を味わう名宿）',
    queries: [
      '妙見石原荘',
      '霧島温泉郷　鳥遊ぶ森の宿　ふたり静',
      '妙見温泉　きらく温泉',
      '妙見温泉　田島本館',
      '妙見温泉　ねむ'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 85 (High Precision Search)');
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
        console.error(`  -> Error querying "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round85_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
