const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ibaraki_fukuroda_ice',
    slug: 'winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay',
    label: '茨城・袋田の滝氷瀑＆奥久慈温泉郷（袋田の滝完全凍結・奥久慈軍鶏鍋と常陸牛・美肌名湯宿）',
    queries: [
      '袋田温泉 思い出浪漫館',
      '滝味の宿 豊年万作',
      '悠久の宿 滝美館',
      '大子温泉 やみぞ',
      '袋田温泉'
    ]
  },
  {
    theme: 'kanagawa_miura_misaki',
    slug: 'winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay',
    label: '神奈川・三浦半島＆城ヶ島（城ヶ島水仙まつり・富士山夕景・三崎まぐろ尽くし＆三浦地魚名宿）',
    queries: [
      'マホロバ・マインズ三浦',
      'ホテル京急油壺観潮荘',
      '三浦うらり ホテル',
      '城ヶ島 ホテル',
      '三浦半島 温泉 ホテル',
      '観音崎京急ホテル'
    ]
  },
  {
    theme: 'chiba_kamogawa_kominato',
    slug: 'winter-chiba-kamogawa-seaworld-kominato-kinmedai-stay',
    label: '千葉・鴨川＆小湊（鴨川シーワールド・小湊鯛の浦温泉・外房寒金目鯛＆房総伊勢海老名宿）',
    queries: [
      '鴨川館',
      '満ちてくる心の宿 吉夢',
      '鴨川シーワールドホテル',
      '宿 中屋',
      '魚彩和歩 よしよし'
    ]
  },
  {
    theme: 'hokkaido_shikotsuko_hyoto',
    slug: 'winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay',
    label: '北海道・支笏湖＆支笏湖温泉（支笏湖ブルー・氷濤まつり・ヒメマスチップ料理＆白老牛美肌名宿）',
    queries: [
      'しこつ湖鶴雅リゾートスパ 水の謌',
      '丸駒温泉旅館',
      '支笏湖第一寶亭留 翠山亭',
      'レイクサイドヴィラ 翠明閣',
      '休暇村 支笏湖'
    ]
  },
  {
    theme: 'okinawa_ishigaki_kabilabay',
    slug: 'winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay',
    label: '沖縄・石垣島＆川平湾（冬の南十字星・川平湾エメラルドブルー・石垣牛炭火焼肉＆冬アーサ名宿）',
    queries: [
      'ANAインターコンチネンタル石垣リゾート',
      'フサキビーチリゾート ホテル＆ヴィラズ',
      'グランヴィリオリゾート石垣島',
      'アートホテル石垣島',
      '石垣シーサイドホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 101 via Official Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Selected: [${selected.hotelNo}] ${selected.hotelName} (Rating: ${selected.reviewAverage}, MinCharge: ${selected.hotelMinCharge})`);
          } else {
            console.log(`  -> All hotels from query "${q}" were already selected.`);
          }
        } else {
          console.log(`  -> No hotels found for "${q}".`);
        }
      } catch (err) {
        console.error(`Error querying "${q}":`, err.message);
      }
    }

    // 5件に満たない場合の広域フォールバック
    if (themeHotels.length < 5) {
      console.log(`Need more hotels for ${t.theme} (currently ${themeHotels.length}), doing broader search...`);
      const fallbackQueries = {
        ibaraki_fukuroda_ice: ['奥久慈温泉', '常陸大宮 温泉 ホテル', '茨城 県北 温泉'],
        kanagawa_miura_misaki: ['三浦海岸 ホテル', '三浦 ホテル 温泉', '横須賀 温泉 ホテル'],
        chiba_kamogawa_kominato: ['鴨川 温泉', '勝浦 温泉 ホテル', '南房総 温泉 ホテル'],
        hokkaido_shikotsuko_hyoto: ['支笏湖 ホテル', '千歳 温泉 ホテル', '苫小牧 温泉 ホテル'],
        okinawa_ishigaki_kabilabay: ['石垣島 リゾート ホテル', '石垣島 ホテル', '石垣市 ホテル']
      };

      const broadList = fallbackQueries[t.theme] || [];
      for (const bq of broadList) {
        if (themeHotels.length >= 5) break;
        console.log(`Broad Query: "${bq}"...`);
        try {
          const hotels = await searchRakutenHotels(bq, 5);
          await sleep(1300);
          if (hotels && hotels.length > 0) {
            for (const h of hotels) {
              if (themeHotels.length >= 5) break;
              if (!usedHotelNos.has(h.hotelNo)) {
                usedHotelNos.add(h.hotelNo);
                themeHotels.push(h);
                console.log(`  -> Added: [${h.hotelNo}] ${h.hotelName}`);
              }
            }
          }
        } catch (err) {
          console.error(`Error on broad query "${bq}":`, err.message);
        }
      }
    }

    result[t.theme] = {
      slug: t.slug,
      label: t.label,
      hotels: themeHotels
    };
    console.log(`Total hotels fetched for ${t.theme}: ${themeHotels.length}`);
  }

  const outPath = path.join(__dirname, 'round101_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll Round 101 hotels successfully written to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
