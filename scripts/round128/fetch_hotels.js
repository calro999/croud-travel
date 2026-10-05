const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'osaka_minoh_katsuoji_waterfall',
    slug: 'winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay',
    label: '大阪・箕面＆勝尾寺（勝ち運の寺「勝尾寺」新春初詣と勝ちダルマ祈願！白銀の「箕面大滝」氷紋と名物もみじの天ぷら・箕面温泉＆北摂名宿）',
    queries: ['箕面観光ホテル', '不死王閣', '南千里クリスタルホテル', 'グリーンリッチホテル大阪空港前', 'アスティルホテル新大阪']
  },
  {
    theme: 'kochi_katsurahama_ryoma_chikurinji',
    slug: 'winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay',
    label: '高知・桂浜＆五台山竹林寺（太平洋望む名勝「桂浜」初日の出と坂本龍馬像！知恵の文殊「五台山 竹林寺」新春初詣・極上戻り鰹藁焼き塩タタキ＆土佐あかうし名宿）',
    queries: ['城西館', '三翠園 高知', 'ドーミーイン高知', 'アパホテル 高知', 'ホテル 港屋 高知']
  },
  {
    theme: 'ehime_imabari_shimanami_oyamazumi',
    slug: 'winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay',
    label: '愛媛・今治＆しまなみ海道（日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！冬晴れしまなみ海道パノラマ・甘み極まる瀬戸内真鯛今治鯛めし＆鈍川温泉名宿）',
    queries: ['今治国際ホテル', 'ホテルクラウンヒルズ今治駅前', 'ＪＲクレメントイン今治', 'しまなみプライムホテル今治', '今治アーバンホテル']
  },
  {
    theme: 'shiga_omihachiman_suigo_himure',
    slug: 'winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay',
    label: '滋賀・近江八幡＆日牟禮八幡宮（重要伝統的建造物群「近江八幡水郷めぐり」冬のこたつ舟！千年の古社「日牟禮八幡宮」新春初詣・極上近江牛すき焼き＆長命寺温泉名宿）',
    queries: ['休暇村 近江八幡', 'ホテルニューオウミ', 'ＡＢホテル近江八幡', 'コンフォートイン近江八幡', 'アズイン東近江能登川駅前']
  },
  {
    theme: 'okayama_kurashiki_bikan_achi',
    slug: 'winter-okayama-kurashiki-bikan-achi-shrine-hatsumode-chiyagyu-stay',
    label: '岡山・倉敷美観地区＆阿智神社（白壁となまこ壁が雪景色に映える「倉敷美観地区」冬情景！倉敷総鎮守「阿智神社」新春初詣・名物下津井タコ料理＆幻の千屋牛ステーキ名宿）',
    queries: ['倉敷アイビースクエア', 'ロイヤルパークホテル 倉敷', 'ドーミーイン倉敷', 'センチュリオンホテル＆スパ倉敷', '倉敷ステーションホテル']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 128)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes.find(h => !usedHotelNos.has(h.hotelNo)) || searchRes[0];
          if (!usedHotelNos.has(hotel.hotelNo)) {
            usedHotelNos.add(hotel.hotelNo);
            console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage} - Price: ¥${hotel.hotelMinCharge}`);
            themeHotels.push(hotel);
          } else {
            console.log(`  ! Already added hotel: ${hotel.hotelName}`);
          }
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

  const outPath = path.join(__dirname, 'round128_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count !== 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes do not have exactly 5 hotels!');
    process.exit(1);
  }
  console.log('\n🎉 All 5 themes successfully fetched 5 verified hotels (Total: 25) via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
