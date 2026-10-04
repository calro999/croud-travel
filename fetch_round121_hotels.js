const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'aichi_toyokawa_yuya_onsen',
    slug: 'winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay',
    label: '愛知・豊川＆新城・奥三河（日本三大稲荷「豊川稲荷」初詣＆霊狐塚！宇連川渓谷を望む名湯「湯谷温泉」源泉掛け流し雪見露天・三河牛・鳳来牛会席＆豊川いなり寿司名宿）',
    queries: ['湯の風 HAZU', 'はづ別館', 'ホテルクラウンヒルズ豊川', 'コンフォートホテル豊川', 'ホテルルートイン新城']
  },
  {
    theme: 'iwate_sanriku_miyako_jodogahama',
    slug: 'winter-iwate-sanriku-miyako-jodogahama-kegani-stay',
    label: '岩手・三陸宮古＆久慈・浄土ヶ浜（冬の白銀と群青の海「浄土ヶ浜」絶景！冬が旬の「三陸毛ガニ・寒アワビ・宮古名物瓶ドン」海鮮三昧＆三陸復興国立公園・太平洋展望名宿）',
    queries: ['浄土ヶ浜パークホテル', '休暇村 陸中宮古', 'ホテルルートイン宮古', '久慈グランドホテル', 'グリーンピア三陸みやこ']
  },
  {
    theme: 'kochi_sukumo_daruma_sunset_shimanto',
    slug: 'winter-kochi-sukumo-daruma-sunset-shimanto-stay',
    label: '高知・宿毛＆四万十（冬の奇跡の絶景「宿毛湾のだるま夕日」＆四万十川の冬情趣！冬が旬の「宿毛寒ブリ・本マグロ・四万十牛」すき焼き＆太平洋展望リゾート温泉名宿）',
    queries: ['宿毛リゾート 椰子の湯', 'ホテルアバン宿毛', '新ロイヤルホテル四万十', 'ホテルサンリバー四万十', '四万十の宿']
  },
  {
    theme: 'yamaguchi_hofu_tenmangu_shunan_fugu',
    slug: 'winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay',
    label: '山口・防府＆周南・下松（日本最初の天神さま「防府天満宮」新春初詣！延縄漁発祥の地・周南徳山の「冬のとらふぐ・笠戸ひらめ・高森牛」と瀬戸内オーシャンビュー名宿）',
    queries: ['ホテルサン防府', 'スーパーホテル防府駅前', 'ホテルルートイン徳山駅前', '東横ＩＮＮ徳山駅新幹線口', '国民宿舎 大城']
  },
  {
    theme: 'wakayama_arida_yuasa_mikan_tachiuo',
    slug: 'winter-wakayama-arida-yuasa-mikan-tachiuo-stay',
    label: '和歌山・有田＆湯浅・広川（冬の有田みかん狩り＆重伝建「湯浅の醤油蔵通り」冬情趣！水揚げ日本一・箕島漁港「冬の紀州太刀魚（一本釣り）・本クエ鍋・熊野牛」と栖原海岸絶景名宿）',
    queries: ['湯浅城', '有田川温泉ホテルサンシャイン', '橘家 有田', '和歌山マリーナシティホテル', 'ホテルルートイン紀の川']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 121)');
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

  const outPath = path.join(__dirname, 'round121_raw_hotels.json');
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
