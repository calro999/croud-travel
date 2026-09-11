const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tests = [
  // 1. 新潟・万代＆古町 出張・日本酒利き酒・日本海鮮魚・天然温泉
  "天然温泉 多宝の湯 ドーミーイン新潟",
  "ホテル日航新潟",
  "アートホテル新潟駅前",

  // 2. 富山・新富町＆富山駅 出張・白えび・立山連峰ビュー・サウナ
  "富山マンテンホテル",
  "天然温泉 剱の湯 御宿 野乃富山",
  "ホテルグランテラス富山",

  // 3. 松本・城下町＆信州 ひとり旅・美ヶ原温泉・国宝松本城・民芸
  "松本ホテル花月",
  "星野リゾート 界 松本",
  "天然温泉 梓の湯 ドーミーイン松本",

  // 4. 高松・瓦町＆サンポート 出張・讃岐うどん巡り・瀬戸内海アート・温泉
  "JRホテルクレメント高松",
  "天然温泉 さぬきの湯 ドーミーイン高松",
  "ロイヤルパークホテル高松",

  // 5. 別府・鉄輪＆別府駅 ひとり旅・地獄めぐり・源泉掛け流しおこもり
  "別府温泉 杉乃井ホテル",
  "潮騒の宿 晴海",
  "別府温泉 ホテル白菊"
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
