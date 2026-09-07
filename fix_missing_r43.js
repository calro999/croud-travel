const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    key: 'bridge_saruhashi',
    query: '山梨 大月 ホテル 東横イン',
    fallback: '山梨県 大月市 ホテル',
    label: '山梨県大月市ふるさと納税・桂川の深い渓谷に橋脚を使わず架かる刎橋構造「甲斐の猿橋」渓谷の自然と富士山ステイ'
  },
  {
    key: 'sakura_hirosaki',
    query: '弘前市 ホテル アートホテル弘前シティ',
    fallback: 'ドーミーイン弘前',
    label: '青森県弘前市ふるさと納税・2600本の桜と濠を埋め尽くす花筏のライトアップ「弘前公園夜桜」弘前ステイ'
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  for (const t of targets) {
    console.log(`Searching for: ${t.query} (${t.key})...`);
    await sleep(3000);
    let list = [];
    try {
      list = await searchRakutenHotels(t.query, 3);
    } catch (e) {
      console.warn('Error:', e.message);
    }
    await sleep(3000);

    if (!list || list.length === 0) {
      console.log(`Trying fallback: ${t.fallback}...`);
      try {
        list = await searchRakutenHotels(t.fallback, 3);
      } catch (e) {
        console.warn('Error fallback:', e.message);
      }
      await sleep(3000);
    }

    if (list && list.length > 0) {
      const h = list[0];
      console.log(`✓ Fixed ${t.key}: ${h.hotelName} (No: ${h.hotelNo})`);
      db[t.key] = {
        ...h,
        featureKey: t.key,
        featureLabel: t.label
      };
      db[h.hotelNo] = db[t.key];
    } else {
      console.error(`X Failed for ${t.key}`);
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log('Finished fixing missing targets for Round 43!');
}

main();
