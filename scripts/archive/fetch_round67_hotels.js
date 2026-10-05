const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'sengokuhara',
    label: '神奈川・箱根仙石原温泉（初冬ススキ絶景・白濁にごり湯・富士見露天・足柄牛ステーキ＆美術館巡り）',
    queries: [
      'ホテルグリーンプラザ箱根',
      'きたの風茶寮',
      '箱根仙石原プリンスホテル',
      'リ・カーヴ箱根',
      '箱根リトリート　ｖｉｌｌａ　１／ｆ'
    ]
  },
  {
    theme: 'chuzenji',
    label: '栃木・奥日光中禅寺温泉（男体山初雪・中禅寺湖畔・乳白色硫黄泉露天・とちぎ和牛＆日光湯波会席）',
    queries: [
      '中禅寺金谷ホテル',
      'ザ・リッツ・カールトン日光',
      '日光中禅寺湖温泉　ホテル花庵',
      '奥日光ホテル四季彩',
      '日光山水'
    ]
  },
  {
    theme: 'mikuni',
    label: '福井・越前三国温泉＆東尋坊（解禁越前がに・日本海パノラマ露天・東尋坊冬絶景・若狭牛会席）',
    queries: [
      '三国温泉 料理民宿 いそや',
      '三国観光ホテル',
      '休暇村 越前三国',
      'オーベルジュほまち　三國湊',
      '三国温泉　漁師の宿　民宿なかじま'
    ]
  },
  {
    theme: 'katsuura',
    label: '和歌山・南紀勝浦温泉（太平洋大洞窟露天・那智の滝熊野古道・勝浦港直送生マグロ＆極上熊野牛会席）',
    queries: [
      'ホテル浦島',
      '碧き島の宿 熊野別邸 中の島',
      'ホテルなぎさや',
      '休暇村 南紀勝浦',
      '万清楼'
    ]
  },
  {
    theme: 'yudanaka',
    label: '長野・信州湯田中渋温泉郷（地獄谷スノーモンキー・開湯1350年登録有形文化財風呂・信州牛＆雪見酒）',
    queries: [
      '湯田中温泉 よろづや',
      'あぶらや燈千',
      '湯田中温泉 清風荘',
      '湯田中温泉 島屋',
      '春蘭の宿 さかえや'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 67 (5 Themes, 5 Hotels Each)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1500); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Success: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage}, Price: ¥${h.hotelMinCharge})`);
          } else {
            console.warn(`  -> Duplicate hotelNo: ${h.hotelNo}, skipping`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`=> Collected ${result[t.theme].length} hotels for ${t.theme}`);
  }

  const outputPath = path.join(__dirname, 'round67_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotels data to ${outputPath}`);
  console.log('Hotel counts per theme:');
  for (const k of Object.keys(result)) {
    console.log(`  ${k}: ${result[k].length} hotels`);
  }
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
