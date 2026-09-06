const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-waterfalls-onsen-stay',
    queries: [
      { query: '勝浦温泉 那智の滝 旅館 和歌山', key: 'nachi_waterfall', label: '和歌山県那智勝浦町ふるさと納税・日本三名瀑那智の滝と世界遺産熊野古道・南紀勝浦温泉宿' },
      { query: '中禅寺湖 華厳の滝 温泉 旅館 日光', key: 'kegon_waterfall', label: '栃木県日光市ふるさと納税・日本三名瀑華厳の滝と中禅寺湖畔乳白色にごり湯温泉宿' },
      { query: '袋田温泉 茨城 滝 旅館', key: 'fukuroda_waterfall', label: '茨城県大子町ふるさと納税・日本三名瀑袋田の滝と奥久慈しゃも・美肌袋田温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-sake-bar-unlimited-tasting-stay',
    queries: [
      { query: '越後湯沢 日本酒 利き酒 旅館 新潟 温泉', key: 'echigo_sake', label: '新潟県湯沢町ふるさと納税・ぽんしゅ館利き酒めぐりと越後湯沢美肌名湯宿' },
      { query: '赤湯温泉 山形 地酒 旅館', key: 'akayu_sake', label: '山形県南陽市ふるさと納税・山形地酒飲み比べBARと開湯900年赤湯温泉宿' },
      { query: '京都 伏見 酒蔵 ホテル 町家', key: 'fushimi_sake', label: '京都府京都市ふるさと納税・伏水名水仕込み銘酒と伏見酒蔵通りクラシック町家ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sand-dunes-resort-stay',
    queries: [
      { query: '鳥取砂丘 温泉 ホテル 旅館 鳥取', key: 'tottori_dune', label: '鳥取県鳥取市ふるさと納税・日本最大の起伏を誇る鳥取砂丘と日本海旬鮮会席温泉リゾート' },
      { query: '浜松 中田島砂丘 ホテル 温泉 静岡', key: 'nakatajima_dune', label: '静岡県浜松市ふるさと納税・遠州灘を望む中田島砂丘の風紋と名物浜名湖うなぎ宿' },
      { query: '指宿 吹上浜 温泉 旅館 鹿児島', key: 'fukiage_dune', label: '鹿児島県南さつま市・指宿ふるさと納税・日本三大砂丘吹上浜と白砂青松・天然砂むし温泉' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-kamado-rice-irori-stay',
    queries: [
      { query: '白川郷 合掌造り 旅館 岐阜 温泉', key: 'shirakawago_kamado', label: '岐阜県白川村ふるさと納税・世界遺産白川郷合掌造り集落とかまど炊き飛騨牛囲炉裏宿' },
      { query: '遠野 どぶろく 民話 旅館 岩手', key: 'tono_kamado', label: '岩手県遠野市ふるさと納税・南部曲り家とかまど炊き郷土料理・民話の里のんびりステイ' },
      { query: '丹波篠山 ぼたん鍋 旅館 兵庫 古民家', key: 'sasayama_kamado', label: '兵庫県丹波篠山市ふるさと納税・丹波篠山黒豆羽釜ご飯と名物ぼたん鍋・城下町古民家宿' }
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
  console.log(`\nAll Round 19 hotels successfully stored into ${allSeasonalPath}`);
}

main();
