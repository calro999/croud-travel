const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tottori_sakaiminato_kaike',
    slug: 'winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay',
    label: '鳥取・境港＆皆生温泉（山陰松葉ガニ解禁・水木しげるロード・皆生温泉「塩の湯」＆大山冬景色名宿）',
    queries: [
      '皆生温泉 皆生菊乃家',
      '皆生温泉 湯喜望 白扇',
      '皆生温泉 華水亭',
      '天然温泉 夕凪の湯 御宿 野乃 境港',
      '皆生つるや',
      '皆生温泉 海色・湯の宿 松月',
      '皆生温泉'
    ]
  },
  {
    theme: 'shizuoka_shimoda_tsumekizaki',
    slug: 'winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay',
    label: '静岡・下田＆爪木崎（300万本の爪木崎水仙まつり・下田港直送一本釣り地金目鯛＆下田温泉美肌名宿）',
    queries: [
      '下田東急ホテル',
      '下田温泉 下田大和館',
      '下田温泉 清流荘',
      '下田ビューホテル',
      '里山の別邸 下田セントラルホテル',
      '下田プリンスホテル',
      '下田温泉'
    ]
  },
  {
    theme: 'saga_tara_takezaki',
    slug: 'winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay',
    label: '佐賀・太良町＆祐徳稲荷＆嬉野温泉（冬の有明海内子竹崎カニ・祐徳稲荷神社初詣・日本三大美肌湯嬉野名宿）',
    queries: [
      '太良嶽温泉 蟹御殿',
      '竹崎観光ホテル 梅崎亭',
      '嬉野温泉 和多屋別荘',
      '嬉野観光ホテル 大正屋',
      '嬉野温泉 茶心の宿 和楽園',
      '太良嶽温泉観光ホテル',
      '嬉野温泉'
    ]
  },
  {
    theme: 'tokushima_iya_valley',
    slug: 'winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay',
    label: '徳島・祖谷渓谷＆大歩危（祖谷のかずら橋雪景色・ケーブルカーで行く谷底露天風呂＆阿波尾鶏郷土名宿）',
    queries: [
      '和の宿 ホテル祖谷温泉',
      '峡谷の湯宿 大歩危峡まんなか',
      '新祖谷温泉 ホテルかずら橋',
      'サンリバー大歩危',
      '祖谷渓温泉 秘境の湯',
      '祖谷 温泉'
    ]
  },
  {
    theme: 'miyazaki_takachiho_night_kagura',
    slug: 'winter-miyazaki-takachiho-night-kagura-beef-onsen-stay',
    label: '宮崎・高千穂＆天岩戸（冬の高千穂夜神楽・神秘の高千穂峡・最高峰高千穂牛＆神話の里厳選名宿）',
    queries: [
      '旅館 神仙',
      '高千穂 離れの宿 神隠れ',
      'ソレスト高千穂ホテル',
      'ホテル高千穂',
      '雲海の宿 旅館 新橋',
      '高千穂 ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 102 via Official Rakuten API');
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
        tottori_sakaiminato_kaike: ['米子 温泉 ホテル', '境港 ホテル', '鳥取 温泉 ホテル'],
        shizuoka_shimoda_tsumekizaki: ['南伊豆 温泉 ホテル', '下田 ホテル 温泉', '伊豆急下田 ホテル'],
        saga_tara_takezaki: ['嬉野 温泉 ホテル', '武雄 温泉 ホテル', '佐賀 温泉 ホテル'],
        tokushima_iya_valley: ['三好市 温泉 ホテル', '大歩危 ホテル', '徳島 温泉 秘境'],
        miyazaki_takachiho_night_kagura: ['高千穂町 ホテル', '延岡 ホテル', '日向 ホテル']
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

  const outPath = path.join(__dirname, 'round102_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll Round 102 hotels successfully written to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
