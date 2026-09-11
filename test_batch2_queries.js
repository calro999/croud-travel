const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const tests = [
  // 1. 京都・女性ひとり旅・寺院おこもり
  "京都 四条 京の宿 柊家",
  "京都 俵屋旅館",
  "京都 ホテル ザ セレスティン京都祇園",
  "三井ガーデンホテル京都河原町浄教寺",
  "ホテルインターゲート京都 四条新町",

  // 2. 大阪・梅田・難波 出張サウナ＆ラウンジ
  "カンデオホテルズ大阪ザ・タワー",
  "ドーミーインPREMIUMなんば",
  "ホテル阪急インターナショナル",
  "レム新大阪",

  // 3. 名古屋・バンテリンドーム・Zepp遠征
  "名古屋プリンスホテル スカイタワー",
  "名鉄グランドホテル",
  "名古屋観光ホテル",

  // 4. 福岡・博多・天神 出張・グルメ＆サウナ
  "都ホテル 博多",
  "カンデオホテルズ福岡天神",
  "天然温泉 八百治博多ホテル",
  "ドーミーインPREMIUM博多・キャナルシティ前",

  // 5. 札幌・すすきの ご褒美サウナ＆シメパフェ・ひとり旅
  "ONSEN RYOKAN 由縁 札幌",
  "ソラリア西鉄ホテル札幌",
  "プレミアホテル-CABIN-札幌"
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
