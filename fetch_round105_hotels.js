const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hyogo_tanba_sasayama',
    slug: 'winter-hyogo-tanba-sasayama-botannabe-castle-stay',
    label: '兵庫・丹波篠山（冬本番！本場ぼたん鍋発祥の地＆雪化粧の篠山城下町・丹波篠山牛・重伝建古民家名宿）',
    queries: [
      '篠山城下町ホテル ＮＩＰＰＯＮＩＡ',
      '近又 丹波篠山',
      '丹波篠山 近又',
      '丹波の宿 恵泉',
      '丹波ささやまホロンピアホテル',
      '草山温泉 大谷にしき荘',
      '丹波篠山 旅館',
      '丹波篠山 ホテル'
    ]
  },
  {
    theme: 'iwate_hiraizumi_geibikei',
    slug: 'winter-iwate-hiraizumi-chusonji-geibikei-maesawagyu-stay',
    label: '岩手・平泉中尊寺＆一関・猊鼻渓（世界遺産中尊寺金色堂の静謐な白銀月見坂＆日本百景猊鼻渓雪見こたつ舟・前沢牛すき焼き名宿）',
    queries: [
      'しづか亭',
      '山桜 桃の湯',
      'ベリーノホテル一関',
      '亀の井ホテル 一関',
      '平泉倶楽部 柏之庵',
      '平泉 ホテル',
      '一関 ホテル'
    ]
  },
  {
    theme: 'aichi_nagoya_atsuta',
    slug: 'winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay',
    label: '愛知・熱田神宮＆名古屋（三種の神器草薙神剣を祀る熱田神宮新春初詣＆名物本場ひつまぶし・名古屋コーチン鍋・名駅栄イルミネーション名宿）',
    queries: [
      '名古屋マリオットアソシアホテル',
      'ANAクラウンプラザホテルグランコート名古屋',
      '名古屋観光ホテル',
      'ヒルトン名古屋',
      '三井ガーデンホテル名古屋プレミア',
      '名鉄グランドホテル',
      '熱田神宮 ホテル'
    ]
  },
  {
    theme: 'shiga_hieizan_ogoto',
    slug: 'winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay',
    label: '滋賀・比叡山延暦寺＆大津・おごと温泉（世界遺産比叡山延暦寺の静謐な冬参拝＆不滅の法灯・琵琶湖一望おごと温泉雪見露天・極上近江牛名宿）',
    queries: [
      'びわこ緑水亭',
      '湯元舘',
      '暖灯館 きくのや',
      'おごと温泉 雄山荘',
      '琵琶湖グランドホテル 京近江',
      'おごと温泉 ホテル',
      '大津 温泉 ホテル'
    ]
  },
  {
    theme: 'kyoto_ohara_sanzenin',
    slug: 'winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay',
    label: '京都・大原三千院＆洛北（静寂の洛北・大原三千院の白銀雪景色と宝泉院額縁庭園冬参拝＆名物京地鶏味噌鍋・大原温泉名宿）',
    queries: [
      '芹生',
      '大原温泉 芹生',
      '魚山園',
      '大原の里',
      'グランドプリンスホテル京都',
      'エクシブ京都 八瀬離宮',
      '大原 旅館',
      '洛北 ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 105 via Official Rakuten API');
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

    // 5件に満たない場合のフォールバック
    if (themeHotels.length < 5) {
      console.log(`Need more hotels for ${t.theme} (currently ${themeHotels.length}), doing broader search...`);
      const fallbackQueries = {
        hyogo_tanba_sasayama: ['丹波篠山 ホテル', '篠山市 旅館', '三田 ホテル', '福知山 ホテル'],
        iwate_hiraizumi_geibikei: ['一関 ホテル', '平泉 旅館', '奥州市 ホテル', '水沢 ホテル'],
        aichi_nagoya_atsuta: ['名古屋 ホテル', '金山駅 ホテル', '栄 ホテル', '熱田 ホテル'],
        shiga_hieizan_ogoto: ['おごと温泉 旅館', '大津市 ホテル', '琵琶湖 ホテル', '草津 ホテル'],
        kyoto_ohara_sanzenin: ['京都 大原 ホテル', '京都市 左京区 ホテル', '国際会館 ホテル', '鞍馬 旅館']
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

  const outPath = path.join(__dirname, 'round105_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to ${outPath}`);
}

main().catch((err) => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
