const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tests = [
  // 1. 仙台・国分町＆出張・牛タン・温泉
  "ウェスティンホテル仙台",
  "天然温泉 萩の湯 ドーミーイン仙台駅前",
  "ホテルモントレ仙台",

  // 2. 広島・八丁堀＆出張・瀬戸内海鮮・サウナ
  "シェラトングランドホテル広島",
  "カンデオホテルズ広島八丁堀",
  "安芸の湯 ドーミーイン広島",

  // 3. 神戸・三宮＆元町 ご褒美港夜景・温泉
  "神戸みなと温泉 蓮",
  "ホテル ラ・スイート神戸ハーバーランド",
  "神戸メリケンパークオリエンタルホテル",

  // 4. 金沢・出張＆ひとり旅 近江町・のどぐろ・美肌湯
  "三井ガーデンホテル金沢",
  "天然温泉 加賀の宝泉 御宿 野乃金沢",
  "ホテルフォルツァ金沢",

  // 5. 那覇・国際通り＆出張・ソロワーケーション・プール温泉
  "JR九州ホテル ブラッサム那覇",
  "琉球温泉 瀬長島ホテル",
  "ホテル アンテルーム 那覇"
];

async function run() {
  for (const q of tests) {
    try {
      const res = await searchRakutenHotels(q, 1);
      if (res && res.length > 0) {
        console.log(`[OK] "${q}" -> ${res[0].hotelName} (No: ${res[0].hotelNo}, Rate: ${res[0].reviewAverage})`);
      } else {
        console.log(`[NG] "${q}" -> Not found`);
      }
    } catch (e) {
      console.log(`[ERR] "${q}" -> ${e.message}`);
    }
    await sleep(1500);
  }
}

run();
