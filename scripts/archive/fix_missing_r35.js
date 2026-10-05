const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  // 錦帯橋も直近の「岩国国際観光ホテル」を取り直す
  {
    key: 'bridge_kintaikyo',
    query: '岩国国際観光ホテル',
    label: '山口県岩国市ふるさと納税・五連の優美な木造アーチ名橋「錦帯橋」岩国城を望む清流美と錦帯橋温泉岩国国際観光ホテル'
  },
  // sweets_kyoto: 京都 祇園 旅館
  {
    key: 'sweets_kyoto',
    query: '祇園 吉田山荘 京都 旅館',
    fallback: '京都 旅館 祇園',
    label: '京都府京都市東山区・中京区ふるさと納税・幽玄なる御所御用達の有平糖やきぬた「京銘菓文化」鴨川の風情と数寄屋造りの祇園名門宿'
  },
  // cave_ryusendo: 岩手 龍泉洞 周辺 浄土ヶ浜旅館
  {
    key: 'cave_ryusendo',
    query: '浄土ヶ浜パークホテル',
    label: '岩手県岩泉町・宮古市ふるさと納税・ドラゴンブルーに輝く奇跡の地底湖「龍泉洞」天然記念物の神秘と三陸の恵み・浄土ヶ浜パークホテル'
  },
  // forest_aomori_hiba: 青森ヒバ むつ市 下北
  {
    key: 'forest_aomori_hiba',
    query: 'むつグランドホテル',
    label: '青森県むつ市・下北半島ふるさと納税・清冽な芳香と耐朽性を誇る銘木「青森ヒバ美林」下北の恵みと天然温泉むつグランドホテル'
  }
];

async function main() {
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));

  for (const t of targets) {
    console.log(`Searching for ${t.query} (${t.key})...`);
    let list = await searchRakutenHotels(t.query, 3);
    await sleep(2200);
    if (!list || list.length === 0) {
      if (t.fallback) {
        console.log(`Trying fallback: ${t.fallback}...`);
        list = await searchRakutenHotels(t.fallback, 3);
        await sleep(2200);
      }
    }
    if (list && list.length > 0) {
      currentData[t.key] = {
        ...list[0],
        label: t.label
      };
      console.log(`✓ Fixed ${t.key}: ${list[0].hotelName}`);
    } else {
      console.error(`X Failed for ${t.key}`);
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Finished updating missing targets!');
}

main();
