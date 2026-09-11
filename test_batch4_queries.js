const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tests = [
  // 1. 横浜・みなとみらい＆出張・夜景ご褒美・Kアリーナ
  "横浜ベイホテル東急",
  "ウェスティンホテル横浜",
  "三井ガーデンホテル横浜みなとみらいプレミア",

  // 2. 静岡・浜松 出張＆うなぎ・サウナ・浜名湖
  "オークラアクトシティホテル浜松",
  "ホテルコンコルド浜松",
  "ホテルクラウンパレス浜松",

  // 3. 岡山・倉敷 出張＆美観地区・ひとり旅・後楽園
  "ホテルグランヴィア岡山",
  "三井ガーデンホテル岡山",
  "倉敷国際ホテル",

  // 4. 熊本・辛島町＆熊本城 出張・馬刺し・天然温泉サウナ
  "天然温泉 六花の湯 ドーミーイン熊本",
  "カンデオホテルズ熊本新市街",
  "熊本ホテルキャッスル",

  // 5. 鹿児島・天文館＆中央駅 出張・黒豚・桜島ビュー温泉
  "SHIROYAMA HOTEL kagoshima",
  "ソラリア西鉄ホテル鹿児島",
  "天然温泉 霧桜の湯 ドーミーイン鹿児島"
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
