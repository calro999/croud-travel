const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-morning-markets-seafood-stay',
    queries: [
      { query: '輪島 ホテル 能登 温泉', fallback: '和倉温泉　加賀屋', key: 'market_wajima', label: '石川県輪島市・七尾市ふるさと納税・千年続く日本最古の青空市場「輪島朝市」復興のぬくもりと能登前寿司・和倉温泉加賀屋' },
      { query: '呼子 ホテル 唐津 旅館 活イカ', fallback: '唐津シーサイドホテル', key: 'market_yobuko', label: '佐賀県唐津市呼子町ふるさと納税・玄界灘の活気あふれる朝「呼子朝市」透明な泳ぎイカ活造りと唐津シーサイドホテル' },
      { query: '勝浦 ホテル 千葉 温泉 朝市', fallback: '勝浦ヒルトップホテル＆レジデンス', key: 'market_katsuura', label: '千葉県勝浦市ふるさと納税・四百三十年の伝統「勝浦朝市」初がつおと勝浦タンタンメン・勝浦ヒルトップホテル＆レジデンス' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapids-river-boat-stay',
    queries: [
      { query: '最上川 温泉 旅館 舟下り 山形', fallback: '銀山温泉　仙峡の宿　銀山荘', key: 'rapid_mogami', label: '山形県戸沢村・新庄市ふるさと納税・五月雨をあつめて早し「最上川」船頭の舟唄と山形牛・銀山温泉仙峡の宿銀山荘' },
      { query: '富士川 温泉 身延山 山梨 旅館', fallback: '下部温泉　下部ホテル', key: 'rapid_fuji', label: '山梨県身延町・富士川町ふるさと納税・駿河湾へと注ぐ怒濤の清流「富士川」武田信玄の隠し湯名湯下部温泉下部ホテル' },
      { query: '人吉 温泉 球磨川 旅館 熊本', fallback: '人吉温泉　清流山水花　あゆの里', key: 'rapid_kuma', label: '熊本県人吉市ふるさと納税・九州一の急流下り「球磨川」人吉城下町の歴史と球磨焼酎・人吉温泉清流山水花あゆの里' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gorges-canyon-scenery-stay',
    queries: [
      { query: '清津峡 温泉 十日町 旅館 新潟', fallback: '松之山温泉　凌雲閣', key: 'gorge_kiyotsu', label: '新潟県十日町市ふるさと納税・水鏡アートで世界が絶賛する柱状節理の絶景「清津峡」と国登録有形文化財松之山温泉凌雲閣' },
      { query: '黒部峡谷 宇奈月温泉 ホテル 富山', fallback: '宇奈月温泉　延対寺荘', key: 'gorge_kurobe', label: '富山県黒部市ふるさと納税・日本屈指の大峡谷トロッコ電車の旅「黒部峡谷」黒薙・鐘釣と名湯宇奈月温泉延対寺荘' },
      { query: '瀞峡 温泉 和歌山 熊野 旅館', fallback: '熊野倶楽部', key: 'gorge_doro', label: '和歌山県新宮市・田辺市ふるさと納税・巨岩と深淵が織りなす国の特別名勝「瀞峡」ウォータージェット船と世界遺産リゾート熊野倶楽部' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sake-capitals-brewery-stay',
    queries: [
      { query: '神戸 三宮 ホテル 灘五郷 酒蔵', fallback: '神戸オリエンタルホテル', key: 'sake_nada', label: '兵庫県神戸市灘区・東灘区ふるさと納税・日本一の酒どころ「灘五郷」宮水仕込みの生一本と神戸牛・オリエンタルホテル' },
      { query: '京都 伏見 ホテル 旅館 酒蔵', fallback: '京都国際ホテル', key: 'sake_fushimi', label: '京都府京都市伏見区ふるさと納税・伏水が育むまろやかな銘酒「伏見の酒蔵」十石舟めぐりと京会席名門ホテル' },
      { query: '西条 東広島 ホテル 酒蔵通り 広島', fallback: 'ホテルグランヴィア広島', key: 'sake_saijo', label: '広島県東広島市西条ふるさと納税・赤瓦と白壁が連なる吟醸酒の故郷「西条酒蔵通り」美酒鍋と瀬戸内海の恵みホテルグランヴィア広島' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 29 hotels using openapi helper...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(1500);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(1500);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 29 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
