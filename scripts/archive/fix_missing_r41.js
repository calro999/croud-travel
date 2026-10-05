const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // 1. castle_takatori: 橿原・大和八木
  {
    key: 'castle_takatori',
    query: '橿原神宮前 ホテル 橿原',
    fallback: 'THE KASHIHARA',
    label: '奈良県高取町・橿原市ふるさと納税・日本一の比高390mを誇る難攻不落の山城「大和高取城」大和三山とTHE KASHIHARA'
  },
  // 2. somen_ibonoito: 兵庫県たつの市・姫路
  {
    key: 'somen_ibonoito',
    query: '兵庫 たつの ホテル 龍野',
    fallback: 'ホテルリブマックス姫路市役所前',
    label: '兵庫県たつの市・姫路市ふるさと納税・清流揖保川が育んだ日本最高峰「播州手延そうめん揖保乃糸」播磨の城下町ステイ'
  },
  // 3. cave_gyokusendo: 沖縄 南城市
  {
    key: 'cave_gyokusendo',
    query: '天然温泉　さしきの猿人の湯　ユインチホテル南城',
    fallback: '沖縄 南城 リゾート ホテル',
    label: '沖縄県南城市ふるさと納税・東洋で最も美しい鍾乳洞・30万年の時が創った100万本「玉泉洞」天然温泉ユインチホテル南城'
  }
];

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  for (const t of targets) {
    console.log(`Searching for: ${t.query} (${t.key})...`);
    let list = await searchRakutenHotels(t.query, 3);
    await sleep(2500);
    if (!list || list.length === 0) {
      console.log(`Trying fallback: ${t.fallback}...`);
      list = await searchRakutenHotels(t.fallback, 3);
      await sleep(2500);
    }
    if (list && list.length > 0) {
      currentData[t.key] = {
        ...list[0],
        label: t.label
      };
      console.log(`✓ Fixed ${t.key}: ${list[0].hotelName} (No: ${list[0].hotelNo})`);
    } else {
      console.error(`X Failed for ${t.key}`);
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Finished fixing missing targets for Round 41!');
}

main();
