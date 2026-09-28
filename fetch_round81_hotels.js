const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yamagata_atsumi',
    label: '山形・庄内あつみ温泉（開湯1200年の名湯・冬の日本海寒鱈汁＆紅ズワイガニ・極上庄内牛・温海川雪景色）',
    queries: [
      'あつみ温泉　萬国屋',
      'あつみ温泉　たちばなや',
      'あつみ温泉　高見屋別邸　久遠',
      '温海温泉　東屋旅館',
      'あつみ温泉　かしわや旅館'
    ]
  },
  {
    theme: 'saitama_chichibu',
    label: '埼玉・秩父温泉郷（初冬の秩父夜祭＆長瀞こたつ舟・名物武州和牛すき焼き・みそ豚・創業文政の老舗鉱泉）',
    queries: [
      '和銅鉱泉　ゆの宿　和どう',
      '秩父西谷津の湯　宮本の湯',
      'ちちぶ温泉　はなのや',
      '湯宿　羊山邸',
      '秩父　ホテル美やま'
    ]
  },
  {
    theme: 'ishikawa_wakura',
    label: '石川・能登和倉温泉（七尾湾冬のオーシャンビュー＆極上能登寒ぶり・加能ガニ・能登牛・開湯1200年海のいで湯）',
    queries: [
      '和倉温泉　日本の宿　のと楽',
      '和倉温泉　ゆけむりの宿　美湾荘',
      '和倉温泉　ホテル海望',
      '和倉温泉　味な宿　宝仙閣',
      '和倉温泉　宿守屋寿苑'
    ]
  },
  {
    theme: 'yamaguchi_yuda',
    label: '山口・湯田温泉（白狐伝説の天然温泉＆本場下関直送とらふぐ刺し・皇牛ステーキ・国宝瑠璃光寺の初冬散策）',
    queries: [
      'やまぐち・湯田温泉　古稀庵',
      '湯田温泉　松田屋ホテル',
      '湯田温泉　西の雅　常盤',
      '湯田温泉　ユウベルホテル松政',
      '湯田温泉　防長苑'
    ]
  },
  {
    theme: 'mie_kashikojima',
    label: '三重・志摩賢島温泉（英虞湾リアス海岸の真珠筏夕日＆冬の伊勢海老・幻のあのりふぐ・的矢かき・極上松阪牛）',
    queries: [
      '志摩観光ホテル　ザ　クラシック',
      '賢島宝生苑',
      '汀渚　ばさら邸',
      '都リゾート　志摩　ベイサイドテラス',
      '志摩観光ホテル　ザ　ベイスイート'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 81 (All 5 Themes, 5 Authentic Local Hotels Each)');
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
    result[t.theme] = themeHotels.slice(0, 5);
  }

  const outputPath = path.join(__dirname, 'round81_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully wrote all hotel data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round81_hotels:', err);
  process.exit(1);
});
