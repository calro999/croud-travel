const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ehime_uwajima_yawatahama_taimeshi_kanburi',
    slug: 'winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay',
    label: '愛媛・宇和島＆八幡浜・南予（現存天守「宇和島城」冬情趣と伊達十万石の城下町！本場「宇和島鯛めし」・宇和海寒ブリ・だてまぐろ＆八幡浜ちゃんぽん・南予名宿）',
    queries: ['JRホテルクレメント宇和島', '宇和島オリエンタルホテル', 'スーパーホテル宇和島駅前', '八幡浜センチュリーホテルイトー', '宇和島第一ホテル']
  },
  {
    theme: 'gunma_takasaki_haruna_isobe_onsen',
    slug: 'winter-gunma-takasaki-haruna-shrine-hatsumode-isobe-onsen-joshugyu-stay',
    label: '群馬・高崎＆榛名・安中・磯部温泉（奇岩の霊場「榛名神社」新春初詣＆少林山達磨寺！温泉記号発祥の地「磯部温泉」美肌の湯と下仁田ネギ・上州牛すき焼き名宿）',
    queries: ['ホテル磯部ガーデン', 'ホテルメトロポリタン高崎', 'ホテルココ・グラン高崎', 'ホテルルートイン安中', '磯部館']
  },
  {
    theme: 'kumamoto_minamiaso_takamori_akagyu_dengaku',
    slug: 'winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay',
    label: '熊本・南阿蘇＆高森（白銀の阿蘇五岳パノラマ絶景と冬の伝統「高森田楽」囲炉裏炭火！美肌の南阿蘇温泉郷源泉露天と極上あか牛ステーキ＆星空絶景名宿）',
    queries: ['森のアトリエ 南阿蘇', '竹楽亭 南阿蘇', '休暇村 南阿蘇', '亀の井ホテル 阿蘇', '阿蘇ホテル 一番館']
  },
  {
    theme: 'toyama_takaoka_imizu_shinminato_crab',
    slug: 'winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay',
    label: '富山・高岡＆射水・新湊・雨晴（国宝「高岡瑞龍寺」新春初詣＆雨晴海岸の気嵐絶景！新湊昼セリ直送「極上紅ズワイガニ・富山湾寒ブリ」と高岡クラフト・名湯名宿）',
    queries: ['磯はなび', '高岡マンテンホテル駅前', 'ホテルニューオータニ高岡', '第一イン新湊', 'ホテルルートイン高岡駅前']
  },
  {
    theme: 'kagoshima_kirishima_jingu_maruo_onsen',
    slug: 'winter-kagoshima-kirishima-jingu-hatsumode-onsen-kurobuta-stay',
    label: '鹿児島・霧島温泉郷＆霧島神宮（国宝「霧島神宮」新春初詣と湯けむり立ち上る丸尾・硫黄谷温泉！源泉掛け流し雪見露天風呂と本場鹿児島黒豚しゃぶしゃぶ名宿）',
    queries: ['霧島国際ホテル', '霧島ホテル', 'ラビスタ霧島ヒルズ', '霧島観光ホテル', 'ホテル霧島キャッスル']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 122)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(500);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes[0];
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage}`);
          themeHotels.push(hotel);
        } else {
          console.error(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round122_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  // Verify all 5 themes have exactly 5 hotels
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count < 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes have less than 5 hotels!');
    process.exit(1);
  }
  console.log('All 5 themes successfully fetched 5 verified hotels!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
