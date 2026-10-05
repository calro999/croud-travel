const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hiroshima_saijo_takehara_sake_bikan',
    slug: 'winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay',
    label: '広島・東広島西条＆竹原（日本三大酒処「西条酒蔵通り」冬の新酒仕込みと名物「美酒鍋」！安芸の小京都「竹原」白壁町並み・忠海港＆瀬戸内美味名宿）',
    queries: ['ホテルヴァンコーネル', '東広島グリーンホテルモーリス', 'グリーンスカイホテル竹原', '西条HAKUWAホテル', 'ホテルルートイン東広島西条駅前']
  },
  {
    theme: 'saitama_hanno_naguri_moomin_bushugyu',
    slug: 'winter-saitama-hanno-naguri-onsen-moomin-illumination-bushugyu-stay',
    label: '埼玉・飯能＆名栗温泉・奥武蔵（北欧の冬「ムーミンバレーパーク」冬イルミネーションと奥武蔵の秘湯「名栗温泉」！薪火・北欧サウナと武州和牛・冬野菜名宿）',
    queries: ['名栗温泉 大松閣', '休暇村 奥武蔵', 'ホテル・ヘリテイジ飯能ｓｔａ．', 'ニューサンピア埼玉おごせ', '飯能第一ホテル']
  },
  {
    theme: 'okayama_kibiji_soja_saijo_inari_chiyagyu',
    slug: 'winter-okayama-kibiji-soja-saijo-inari-hatsumode-chiyagyu-stay',
    label: '岡山・吉備路・総社＆最上稲荷（中国地方屈指の初詣霊場「最上稲荷」新春祈祷と国宝「吉備津神社」廻廊！備中国分寺五重塔の冬情景・幻の千屋牛＆晴れの国名宿）',
    queries: ['サントピア岡山総社', 'ホテルグランヴィア岡山', 'ダイワロイネットホテル岡山駅前', '倉敷国際ホテル', 'ホテルリブマックス岡山']
  },
  {
    theme: 'ehime_ozu_uchiko_castle_uchikobuta',
    slug: 'winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay',
    label: '愛媛・大洲＆内子（伊予の小京都「大洲城」冬の木造復元天守とミシュラン名園「臥龍山荘」！白壁の町並み「内子八日市」冬散策と温かい冬のいもたき・内子豚名宿）',
    queries: ['NIPPONIA HOTEL 大洲 城下町', 'スーパーホテル愛媛・大洲インター', 'ホテルオータ', 'オーベルジュ内子', '内子の宿']
  },
  {
    theme: 'tokushima_city_oasashiko_hatsumode_awaodori_awagyu',
    slug: 'winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay',
    label: '徳島・徳島市＆阿波一の宮（阿波国一の宮「大麻比古神社」新春初詣と眉山の冬夜景！名物「阿波尾鶏」熱々水炊き鍋・冬の鳴門鯛＆極上阿波牛を味わう徳島名宿）',
    queries: ['JRホテルクレメント徳島', 'ダイワロイネットホテル徳島駅前', 'ホテルサンルート徳島', 'アオアヲ ナルト リゾート', 'スマイルホテル徳島']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 123)');
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

  const outPath = path.join(__dirname, 'round123_raw_hotels.json');
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
