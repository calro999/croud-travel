const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yamagata_hijiori_onsen',
    label: '山形・肘折温泉（日本屈指の豪雪湯治場・開湯1200年の黄金源泉・名物納豆汁＆山形牛・肘折幻想雪回廊）',
    queries: [
      '肘折温泉　優心の宿　観月荘',
      '肘折温泉　丸屋旅館',
      '肘折温泉　湯宿　元河原湯',
      '肘折温泉　大友屋旅館',
      '肘折温泉　ほていや'
    ]
  },
  {
    theme: 'nagano_hirugami_onsen',
    label: '長野・阿智村 昼神温泉（日本一の星空ナイトツアー・pH9.7強アルカリ美肌の湯・極上南信州牛＆信州サーモン）',
    queries: [
      '昼神温泉　日長庵　桂月',
      '昼神温泉　石苔亭いしだ',
      '昼神温泉　湯多利の里　伊那華',
      '昼神温泉　おとぎ亭　光風',
      '昼神の棲　玄竹'
    ]
  },
  {
    theme: 'tochigi_yunishigawa_onsen',
    label: '栃木・日光 湯西川温泉（平家落人の隠れ里・初雪の渓谷美・名物平家囲炉裏会席＆かまくら祭）',
    queries: [
      '湯西川温泉　本家伴久　平家伝承かずら橋の宿',
      '湯西川温泉　彩り湯かしき　花と華',
      '湯西川温泉　上屋敷　平の高房',
      '湯西川温泉　桓武平氏ゆかりの宿　揚羽',
      '湯西川白雲の宿　山城屋'
    ]
  },
  {
    theme: 'shizuoka_nishiizu_toi_onsen',
    label: '静岡・西伊豆 土肥温泉（駿河湾越しの夕日富士・極上寒金目鯛＆伊勢海老・日本一早咲きの土肥桜）',
    queries: [
      '西伊豆土肥温泉　牧水荘土肥館',
      '土肥温泉　たたみの宿　湯の花亭',
      '伊豆・土肥温泉　茜さす刻　オーシャンビューの宿　玉樟園新井',
      '世界遺産　富士山を望む宿　富岳群青',
      '粋松亭'
    ]
  },
  {
    theme: 'nagasaki_unzen_onsen',
    label: '長崎・島原半島 雲仙温泉（もうもうと立ち上る雲仙地獄の白煙・冬の霧氷「花ぼうろ」・極上雲仙牛＆島原具雑煮）',
    queries: [
      '雲仙温泉　雲仙宮崎旅館',
      '雲仙温泉　民芸モダンの宿　雲仙福田屋',
      '雲仙温泉　ゆやど　雲仙新湯',
      '雲仙観光ホテル',
      '雲仙温泉　東園'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 93 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round93_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
