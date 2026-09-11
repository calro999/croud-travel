const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tests = [
  // 1. 静岡・静岡駅＆駿府 出張・清水港まぐろ・静岡茶・富士山ビュー
  "ホテルアソシア静岡",
  "ホテルグランヒルズ静岡",
  "中島屋グランドホテル",

  // 2. 栃木・宇都宮 出張・餃子食べ歩き・大谷石・天然温泉
  "天然温泉  voter 宇都宮", // test
  "カンデオホテルズ宇都宮",
  "ホテルマイステイズ宇都宮",
  "宇都宮東武ホテルグランデ",

  // 3. 愛媛・松山＆道後温泉 ひとり旅・日本最古の名湯・坊っちゃん・鯛めし
  "道後温泉 ふなや",
  "道後プリンスホテル",
  "天然温泉 錦鯱の湯 ドーミーイン松山",
  "大和屋本店",

  // 4. 青森・八戸＆本八戸 出張・八食センター・みろく横丁・サウナ
  "ダイワロイネットホテル八戸",
  "八戸グランドホテル",
  "天然温泉 蕪島の湯 ドーミーイン本八戸",

  // 5. 宮崎・橘通り＆宮崎駅 出張・チキン南蛮・地鶏炭火焼・青島温泉
  "シェラトン・グランデ・オーシャンリゾート",
  "天然温泉 日向の湯 ドーミーイン宮崎",
  "ホテルスカイタワー宮崎駅前"
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
