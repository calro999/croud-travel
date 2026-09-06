const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-limestone-caves-mystery-stay',
    queries: [
      { query: '浄土ヶ浜パークホテル 岩手 宮古 龍泉洞', key: 'cave_ryusendo', label: '岩手県岩泉町・宮古市ふるさと納税・世界有数の透明度ドラゴンブルーの地底湖「龍泉洞」と三陸名門浄土ヶ浜パークホテル' },
      { query: 'オーベルジュ 土佐山 高知 龍河洞', key: 'cave_ryugado', label: '高知県香美市・高知市ふるさと納税・弥生時代の土器が鍾乳石と一体化した国の天然記念物「龍河洞」と山里の極上隠れ宿オーベルジュ土佐山' },
      { query: '大谷山荘 山口 長門湯本 秋芳洞', key: 'cave_akiyoshido', label: '山口県美祢市・長門市ふるさと納税・東洋屈指の鍾乳洞「秋芳洞」百枚皿パノラマと皇室御用達名館・音信川の湯宿大谷山荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-sandbar-stay',
    queries: [
      { query: '天橋立 文珠荘 京都 宮津 温泉', key: 'sandbar_amanohashidate', label: '京都府宮津市ふるさと納税・日本三景白砂青松の奇跡「天橋立」廻旋橋を望む数寄屋造りの名門旅館文珠荘' },
      { query: '敦賀 温泉 ホテル 福井 気比の松原', key: 'sandbar_kehinomatsubara', label: '福井県敦賀市ふるさと納税・萬葉集にも詠まれた白砂青松「気比の松原」越前若狭の海鮮美食と敦賀名湯ホテル' },
      { query: '日本平ホテル 静岡 三保の松原 富士山', key: 'sandbar_mihonomatsubara', label: '静岡県静岡市清水区ふるさと納税・世界遺産富士山と駿河湾を望む「三保の松原」風景美術館日本平ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-washi-craft-heritage-stay',
    queries: [
      { query: 'あわら温泉 グランディア芳泉 福井 越前和紙', key: 'washi_echizen', label: '福井県越前市・あわら市ふるさと納税・千五百年の歴史誇る越前和紙の郷「卯立の工芸館」と名湯あわら温泉グランディア芳泉' },
      { query: '十八楼 岐阜 長良川 美濃和紙', key: 'washi_mino', label: '岐阜県美濃市・岐阜市ふるさと納税・本美濃紙のうだつの上がる町並みと長良川鵜飼の宿創業百六十有余年十八楼' },
      { query: '秩父 新木鉱泉旅館 埼玉 小川和紙', key: 'washi_ogawa', label: '埼玉県小川町・秩父市ふるさと納税・細川紙の技が息づく和紙の里散策と二百年の歴史誇る秩父の美肌名湯新木鉱泉旅館' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-medicinal-springs-healing-stay',
    queries: [
      { query: 'ひなの宿 ちとせ 松之山温泉 新潟 薬湯', key: 'medicinal_matsunoyama', label: '新潟県十日町市ふるさと納税・太古の海水が湧出するジオプレッシャーの奇跡日本三大薬湯「松之山温泉」ひなの宿ちとせ' },
      { query: '草津温泉 望雲 群馬 日本三大薬湯 温泉', key: 'medicinal_kusatsu', label: '群馬県草津町ふるさと納税・万病を治す強酸性の名湯日本三大薬湯「草津温泉」名門望雲の極上かけ流し湯巡り' },
      { query: '兵衛向陽閣 有馬温泉 兵庫 金泉 日本三大薬湯', key: 'medicinal_arima', label: '兵庫県神戸市北区ふるさと納税・豊臣秀吉が愛した太古の濃厚赤湯金泉日本三大薬湯「有馬温泉」創業七百年の老舗兵衛向陽閣' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 27 hotels using openapi helper...');
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
        // Simple fallback with first 2 words
        const simpleQuery = q.query.split(' ').slice(0, 2).join(' ');
        console.log(`Trying fallback: ${simpleQuery}...`);
        list = await searchRakutenHotels(simpleQuery, 3);
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
  console.log('Round 27 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
