const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kagawa_kotohira_konpira_zentsuji',
    slug: 'winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay',
    label: '香川・琴平＆善通寺・丸亀（四国随一の初詣「金刀比羅宮」785段石段と弘法大師生誕地「総本山善通寺」新春祈願！「こんぴら温泉郷」名湯露天＆讃岐オリーブ牛・冬の讃岐うどん名宿）',
    queries: ['湯元こんぴら温泉華の湯 紅梅亭', 'ことひら温泉 琴参閣', '御宿 敷島館', 'こんぴら温泉 琴平グランドホテル 桜の抄', 'こんぴら温泉 琴平花壇']
  },
  {
    theme: 'wakayama_kushimoto_shionomisaki_hashiguiiwa',
    slug: 'winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay',
    label: '和歌山・串本＆本州最南端・潮岬（本州最南端「潮岬」冬の太平洋初日の出と奇岩「橋杭岩」朝焼け絶景！「近大マグロ」発祥の地・極上クロマグロ会席＆串本温泉リゾート名宿）',
    queries: ['メルキュール和歌山串本リゾート＆スパ', '大江戸温泉物語 南紀串本', 'フェアフィールド・バイ・マリオット・和歌山串本', '本州最南端 暮らすように泊まる古民家 ＮＯＩＥ', '洋風民宿ベイサイドイン串本館']
  },
  {
    theme: 'tokyo_okutama_mitake_hikawa',
    slug: 'winter-tokyo-okutama-mitake-shrine-hatsumode-hikawa-gorge-akikawagyu-stay',
    label: '東京・奥多摩＆青梅・御岳山（「武蔵御嶽神社」天空の新春初詣と氷川渓谷の冬静寂！奥多摩わさび・銘柄黒毛和牛「秋川牛」会席＆多摩川清流温泉名宿）',
    queries: ['奥多摩の風 はとのす荘', '奥多摩 清流リゾート 亀の井ホテル 青梅', '東京 奥多摩温泉 おくたま路', '秋川渓谷 瀬音の湯', '松乃温泉 水香園']
  },
  {
    theme: 'tottori_sakyu_hakuto_matsubagani',
    slug: 'winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay',
    label: '鳥取・鳥取砂丘＆鳥取市・白兎海岸（白銀に染まる「鳥取砂丘」雪景色と神話の杜「白兎神社」新春縁結び初詣！冬旬「鳥取松葉がに」・幻のモサエビ＆鳥取温泉名宿）',
    queries: ['鳥取温泉 観水庭こぜにや', '鳥取温泉 ホテルモナーク鳥取', '鳥取温泉 白兎会館', 'ホテルニューオータニ鳥取', 'グリーンリッチホテル鳥取駅前 人工温泉・二股湯の華']
  },
  {
    theme: 'hokkaido_kushiro_tancho_nusamaibashi',
    slug: 'winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay',
    label: '北海道・釧路＆鶴居・釧路湿原（冬の湿原に舞う特別天然記念物「丹頂鶴」雪景色と幣舞橋の世界三大夕日！炭火炉端焼き・冬の真だち＆釧路天然温泉名宿）',
    queries: ['天然温泉 幣舞の湯 ドーミーインＰＲＥＭＩＵＭ釧路', '天然温泉 白鳥の湯 スーパーホテル釧路駅前', 'ＡＮＡクラウンプラザホテル釧路', 'ホテルグローバルビュー釧路 天然温泉 天空の湯', 'コンフォートホテル釧路']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 126)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

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

  const outPath = path.join(__dirname, 'round126_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
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
  console.log('All 5 themes successfully fetched 5 verified hotels via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
