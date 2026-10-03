const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'akita_kakunodate',
    slug: 'winter-akita-kakunodate-bukeyashiki-snow-kiritanpo-hinaijidori-stay',
    label: '秋田・角館＆田沢湖（陸奥の小京都・角館武家屋敷雪景色＆冬の田沢湖・比内地鶏きりたんぽ鍋と秘湯名宿）',
    filter: (h) => h.address1.includes('秋田県') && (h.address2.includes('仙北') || h.address2.includes('角館') || h.address2.includes('田沢湖') || h.address2.includes('大仙')),
    queries: [
      '和のゐ 角館',
      '町家ホテル 角館',
      '田沢湖高原温泉 プラザホテル山麓荘',
      '天然温泉 田沢湖レイクリゾート',
      'ホテルグランド天空',
      '角館リゾートホテル',
      '角館温泉',
      '田沢湖ホテル'
    ]
  },
  {
    theme: 'aichi_inuyama',
    slug: 'winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay',
    label: '愛知・犬山＆木曽川（現存最古木造天守・国宝犬山城冬景色＆三光稲荷神社新春初詣・白帝の湯と名古屋コーチン名宿）',
    filter: (h) => h.address1.includes('愛知県') && (h.address2.includes('犬山') || h.address2.includes('丹羽') || h.address2.includes('江南') || h.address2.includes('一宮') || h.address2.includes('小牧')),
    queries: [
      'ホテルインディゴ犬山有楽苑',
      'ホテルミュースタイル犬山エクスペリエンス',
      '灯屋 迎帆楼',
      '犬山温泉 臨江館',
      '犬山ミヤコホテル',
      '犬山国際ユースホステル',
      '犬山 ホテル'
    ]
  },
  {
    theme: 'fukui_eiheiji',
    slug: 'winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay',
    label: '福井・永平寺＆勝山・福井市（曹洞宗大本山永平寺雪静寂＆新春開運参拝・名物越前おろしそばと極上若狭牛名宿）',
    filter: (h) => h.address1.includes('福井県') && (h.address2.includes('永平寺') || h.address2.includes('吉田郡') || h.address2.includes('福井市') || h.address2.includes('勝山') || h.address2.includes('大野')),
    queries: [
      '永平寺 親禅の宿 柏樹關',
      'コートヤード・バイ・マリオット福井',
      'ホテルリバージュアケボノ',
      'ホテルフジタ福井',
      'ホテル京福 福井駅前',
      '勝山ニューホテル',
      '永平寺 ホテル'
    ]
  },
  {
    theme: 'fukuoka_munakata',
    slug: 'winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay',
    label: '福岡・宗像＆岡垣（世界遺産宗像大社新春開運初詣＆玄界灘冬絶景・鐘崎天然とらふぐと極上宗像牛名宿）',
    filter: (h) => h.address1.includes('福岡県') && (h.address2.includes('宗像') || h.address2.includes('岡垣') || h.address2.includes('福津') || h.address2.includes('遠賀') || h.address2.includes('古賀')),
    queries: [
      'メルキュール福岡宗像リゾート＆スパ',
      '杜の七種',
      'ぶどうの樹',
      'オテルグレージュ',
      '宿屋 伝八',
      'グランピング福岡 ぶどうの樹',
      '宗像 ホテル',
      '岡垣 ホテル'
    ]
  },
  {
    theme: 'hyogo_himeji',
    slug: 'winter-hyogo-himeji-castle-shoshasan-hatsumode-oyster-banshubee-stay',
    label: '兵庫・姫路＆播磨灘（世界遺産白鷺城・姫路城冬景色＆書写山圓教寺新春初詣・播磨灘旬牡蠣と極上播州牛名宿）',
    filter: (h) => h.address1.includes('兵庫県') && (h.address2.includes('姫路') || h.address2.includes('たつの') || h.address2.includes('相生') || h.address2.includes('加古川') || h.address2.includes('高砂')),
    queries: [
      'ホテル日航姫路',
      'セトレ ハイランドヴィラ姫路',
      'ダイワロイネットホテル姫路',
      'ホテルモントレ姫路',
      'リッチモンドホテル姫路',
      '姫路キャッスルグランヴィリオホテル',
      '天然温泉 白鷺の湯 ドーミーイン姫路'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 108 via Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 5);
        await sleep(400);

        for (const h of hotels) {
          if (!usedHotelNos.has(h.hotelNo) && t.filter(h)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Match: [${h.hotelNo}] ${h.hotelName} (${h.address1} ${h.address2}) [Review: ${h.reviewAverage}, MinCharge: ${h.hotelMinCharge}]`);
          }
        }
      } catch (err) {
        console.error(`  Error searching "${q}":`, err.message);
      }
      if (themeHotels.length >= 5) break;
    }

    console.log(`Total matched hotels for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length < 5) {
      console.warn(`WARNING: Less than 5 hotels matched for ${t.theme}! (${themeHotels.length}/5)`);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels.slice(0, 5)
    };
  }

  const outPath = path.join(__dirname, 'round108_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved raw hotel data to: ${outPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
