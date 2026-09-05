const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const targets = {
  'zen-meditation-shojin-cuisine-temple-retreat-stay': {
    koyasan_zen_shukubo_stay: {
      label: '高野山・精進料理＆朝のお勤め・阿字観瞑想宿坊',
      query: '高野山 宿坊 精進料理 寺'
    },
    kyoto_zen_temple_stay: {
      label: '京都・妙心寺＆大徳寺界隈の枯山水庭園と坐禅体験宿',
      query: '京都 宿坊 坐禅 寺'
    },
    eiheiji_zen_retreat_stay: {
      label: '福井・大本山永平寺門前親禅宿「柏樹關」＆禅体験ステイ',
      query: '永平寺 禅 旅館 温泉 福井'
    }
  },
  'tea-ceremony-authentic-chashitsu-matcha-ryokan-stay': {
    kyoto_sukiya_tea_ryokan_stay: {
      label: '京都・数寄屋造り本格茶室＆裏千家・表千家茶道体験宿',
      query: '京都 茶室 旅館 茶道 懐石'
    },
    kanazawa_tea_culture_stay: {
      label: '金沢・ひがし茶屋街＆金沢加賀藩御用達茶道体験宿',
      query: '金沢 茶室 旅館 露天風呂'
    },
    uji_tea_farm_retreat_stay: {
      label: '宇治・本場宇治抹茶点前＆茶畑ビュー極上ティーリゾート',
      query: '宇治 抹茶 旅館 ホテル 京都'
    }
  },
  'shakyo-meditation-mindfulness-sacred-temple-stay': {
    dewasanzan_mountain_ascetic_stay: {
      label: '出羽三山・羽黒山宿坊＆山伏精進料理・写経瞑想宿',
      query: '羽黒山 宿坊 山形 出羽三山'
    },
    shikoku_henro_pilgrimage_stay: {
      label: '四国八十八ヶ所お遍路・札所寺院宿坊＆写経巡礼宿',
      query: '四国 宿坊 お遍路 寺'
    },
    kamakura_zen_mindfulness_stay: {
      label: '古都鎌倉・円覚寺建長寺ゆかりの静寂写経＆マインドフルネス宿',
      query: '鎌倉 寺 ホテル 旅館'
    }
  },
  'samurai-katana-armor-buke-yashiki-heritage-stay': {
    aizu_samurai_buke_stay: {
      label: '会津若松・会津武家屋敷＆白虎隊ゆかりの伝統老舗宿',
      query: '会津若松 温泉 旅館 武家屋敷'
    },
    kakunodate_samurai_mansion_stay: {
      label: 'みちのく小京都・角館武家屋敷通り＆黒板塀蔵宿',
      query: '角館 武家屋敷 旅館 ホテル'
    },
    chiran_satsuma_samurai_stay: {
      label: '薩摩の小京都・知覧武家屋敷庭園＆島津家ゆかりの宿',
      query: '指宿 鹿児島 温泉 旅館 庭園'
    }
  },
  'traditional-crafts-pottery-gold-leaf-washi-stay': {
    kanazawa_gold_leaf_craft_stay: {
      label: '金沢・金箔貼り＆九谷焼絵付け体験・伝統工芸サロン宿',
      query: '金沢 伝統工芸 旅館 温泉'
    },
    echizen_washi_pottery_stay: {
      label: '越前和紙漉き・越前焼の里＆職人手仕事クラフト宿',
      query: '越前 温泉 旅館 工芸'
    },
    arita_hasami_ceramic_retreat_stay: {
      label: '有田・波佐見焼登り窯＆有田焼器ペアリングオーベルジュ',
      query: '有田 波佐見 陶芸 温泉 宿'
    }
  }
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const jsonPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  const allData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  for (const [slug, sections] of Object.entries(targets)) {
    console.log(`\n=== Processing: ${slug} ===`);
    if (!allData[slug]) {
      allData[slug] = {};
    }

    for (const [secKey, config] of Object.entries(sections)) {
      console.log(`Fetching [${secKey}] query: "${config.query}"...`);
      try {
        const hotels = await searchRakutenHotels(config.query, 4);
        console.log(` -> Found ${hotels.length} hotels`);
        allData[slug][secKey] = {
          label: config.label,
          query: config.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`Error fetching ${secKey}:`, err.message);
        allData[slug][secKey] = {
          label: config.label,
          query: config.query,
          hotels: []
        };
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(allData, null, 2), 'utf8');
  console.log('\nAll 5 traditional culture & shukubo hubs Rakuten hotel data saved successfully!');
}

main();
