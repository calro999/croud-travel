const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-ports-waterfront-luxury-stay',
    queries: [
      { query: '神戸港 メリケンパーク ホテル 兵庫 オーシャンビュー', key: 'port_kobe', label: '兵庫県神戸市中央区ふるさと納税・開港150年の国際貿易港「神戸港」メリケンパークパノラマと神戸牛鉄板焼きホテル' },
      { query: '横浜 みなとみらい ホテル 神奈川 ベイブリッジ', key: 'port_yokohama', label: '神奈川県横浜市西区・中区ふるさと納税・日本屈指の美港「横浜港」ベイブリッジ夜景と元町中華街クラシックホテル' },
      { query: '長崎港 稲佐山 ホテル 長崎 夜景', key: 'port_nagasaki', label: '長崎県長崎市ふるさと納税・すり鉢状の天然良港「長崎港」稲佐山から望む1000万ドル夜景と卓袱料理リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-green-tea-regions-healing-stay',
    queries: [
      { query: '牧之原 茶畑 ホテル 静岡 温泉', key: 'tea_shizuoka', label: '静岡県牧之原市・島田市ふるさと納税・日本一の大茶園「牧之原台地」富士山と緑の絨毯を望む茶香炉ヒーリング温泉宿' },
      { query: '宇治 旅館 京都 宇治茶 抹茶', key: 'tea_uji', label: '京都府宇治市ふるさと納税・千年の茶どころ「宇治茶」本場抹茶スイーツめぐりと世界遺産平等院鳳凰堂・宇治川料理旅館' },
      { query: '信楽 甲賀 温泉 滋賀 朝宮茶 旅館', key: 'tea_asamiya', label: '滋賀県甲賀市信楽町ふるさと納税・日本最古千二百年の歴史「朝宮茶」と信楽焼陶芸の郷・奥伊吹の隠れ家温泉' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-castles-seaside-stay',
    queries: [
      { query: '今治城 ホテル 愛媛 来島海峡 瀬戸内海', key: 'castle_imabari', label: '愛媛県今治市ふるさと納税・海水を引き込む日本三大水城「今治城」天守閣展望と来島海峡の荒波鯛めしホテル' },
      { query: '高松城 玉藻公園 ホテル 香川 瀬戸内海', key: 'castle_takamatsu', label: '香川県高松市ふるさと納税・生駒親正公築城「高松城（玉藻城）」水門越しに瀬戸内海の多島美を望むベイサイド宿' },
      { query: '中津城 ホテル 大分 耶馬渓', key: 'castle_nakatsu', label: '大分県中津市ふるさと納税・黒田官兵衛が築いた日本三大水城「中津城」周防灘のハモ料理と城下町名門ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-wonders-rock-scenery-stay',
    queries: [
      { query: '妙義山 温泉 旅館 群馬 妙義温泉', key: 'wonder_myogi', label: '群馬県安中市・下仁田町ふるさと納税・日本屈指の奇岩巨峰「妙義山」ダイナミック岩峰展望と美肌の妙義温泉宿' },
      { query: '耶馬渓 温泉 旅館 大分 青の洞門', key: 'wonder_yabakei', label: '大分県中津市本耶馬渓ふるさと納税・日本新三景「耶馬渓」競秀峰の巨岩パノラマと青の洞門・耶馬溪名湯宿' },
      { query: '小豆島 寒霞渓 温泉 ホテル 香川', key: 'wonder_kankakei', label: '香川県小豆島町ふるさと納税・日本三大渓谷美「寒霞渓」奇岩絶壁ロープウェイと小豆島オリーブ・瀬戸内海展望露天風呂' }
    ]
  }
];

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
    } catch (e) {
      console.error('Failed to parse all_seasonal_rakuten_hotels.json', e);
    }
  }

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        let hotels = await searchRakutenHotels(q.query, 3);
        if (!hotels || hotels.length === 0) {
          const simplified = q.query.split(' ').slice(0, 2).join(' ');
          console.log(`Retrying simplified query: "${simplified}" ...`);
          await sleep(1500);
          hotels = await searchRakutenHotels(simplified, 3);
        }

        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = {
            label: q.label,
            hotels: hotels
          };
          console.log(`-> SUCCESS: Found ${hotels.length} hotels for ${q.key}. Top hotel: ${hotels[0].hotelName}`);
        } else {
          console.warn(`-> WARNING: No hotels found for ${q.key}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching for ${q.key}:`, err.message);
      }
      await sleep(1500); // 楽天APIレート制限対策
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log(`\nAll Round 26 hotels successfully stored into ${allSeasonalPath}`);
}

main();
