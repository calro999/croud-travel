const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'miyagi_kesennuma_minamisanriku',
    slug: 'winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay',
    label: '宮城・気仙沼＆南三陸（冬の三陸・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼・気仙沼深層天然温泉名宿）',
    queries: [
      'サンマリン気仙沼ホテル観洋',
      '気仙沼プラザホテル',
      '南三陸ホテル観洋',
      '網元の宿 磯村',
      '気仙沼 ホテル'
    ]
  },
  {
    theme: 'nagasaki_city_inasayama',
    slug: 'winter-nagasaki-city-inasayama-nightview-glover-champon-stay',
    label: '長崎・長崎市街＆稲佐山（世界新三大夜景「稲佐山」1000万ドルの夜景・グラバー園イルミネーション＆本場ちゃんぽん・卓袱料理名宿）',
    queries: [
      '稲佐山観光ホテル',
      'ガーデンテラス長崎ホテル＆リゾート',
      'ルークプラザホテル',
      'ホテルニュー長崎',
      'にっしょうかん'
    ]
  },
  {
    theme: 'nagano_togakushi_zenkoji',
    slug: 'winter-nagano-togakushi-zenkoji-hatsumode-snow-soba-beef-stay',
    label: '長野・戸隠＆善光寺（白銀の戸隠神社奥社杉並木・新そば＆国宝善光寺冬の朝事・信州牛すき焼き名宿）',
    queries: [
      'ホテル国際21',
      'THE SAIHOKUKAN HOTEL',
      'チサングランド長野',
      '長野東急REIホテル',
      '宿坊 淵之坊'
    ]
  },
  {
    theme: 'fukushima_aizu_ouchijuku',
    slug: 'winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay',
    label: '福島・会津大内宿＆湯野上温泉・芦ノ牧温泉（白銀の茅葺き宿場町大内宿・一本ねぎそば＆渓谷雪見露天風呂・会津馬刺し名宿）',
    queries: [
      '会津芦ノ牧温泉 大川荘',
      '芦ノ牧温泉 丸峰',
      '湯野上温泉 藤龍館',
      '湯野上温泉 清涼荘',
      '芦ノ牧グランドホテル'
    ]
  },
  {
    theme: 'wakayama_koyasan_shukubo',
    slug: 'winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay',
    label: '和歌山・高野山＆奥之院（世界遺産高野山・白銀の壇上伽藍＆奥之院・宿坊阿字観体験＆冬の滋味精進料理名宿）',
    queries: [
      '高野山 宿坊 不動院',
      '高野山 宿坊 一乗院',
      '高野山 宿坊 恵光院',
      '宿坊 天徳院 高野山',
      '宿坊 蓮華定院'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 103 via Official Rakuten API');
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
        miyagi_kesennuma_minamisanriku: ['気仙沼 ホテル', '南三陸 ホテル', '気仙沼 旅館', '石巻 ホテル'],
        nagasaki_city_inasayama: ['長崎駅 ホテル', '長崎市 温泉 ホテル', '長崎 夜景 ホテル', '長崎市 宿'],
        nagano_togakushi_zenkoji: ['長野駅 ホテル', '善光寺 ホテル', '信州中野 温泉', '戸隠 旅館'],
        fukushima_aizu_ouchijuku: ['会津若松 温泉 ホテル', '東山温泉 ホテル', '南会津 温泉', '下郷町 温泉'],
        wakayama_koyasan_shukubo: ['高野山 宿坊', '高野山 旅館', '九度山 温泉', '橋本市 ホテル']
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

  const outPath = path.join(__dirname, 'round103_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll Round 103 hotels successfully written to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
