const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-clear-rivers-stay',
    queries: [
      { query: '高知 四万十川 温泉 旅館 新ロイヤルホテル四万十', fallback: '新ロイヤルホテル四万十', key: 'river_shimanto', label: '高知県四万十市ふるさと納税・日本最後の清流と沈下橋パノラマ「四万十川」天然鮎・天然うなぎと新ロイヤルホテル四万十' },
      { query: '岐阜 長良川 温泉 旅館 鵜飼 十八楼', fallback: '長良川温泉　十八楼', key: 'river_nagara', label: '岐阜県岐阜市ふるさと納税・名水百選と1300年の鵜飼文化「長良川清流」金華山と長良川温泉十八楼' },
      { query: '静岡 三島 柿田川 富士山 ホテル ドーミーイン', fallback: '天然温泉　富嶽の湯　ドーミーイン三島', key: 'river_kakitagawa', label: '静岡県清水町・三島市ふるさと納税・富士山の湧水群が生んだ東洋一の湧水量「柿田川清流」名物うなぎとドーミーイン三島' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-giant-sacred-trees-stay',
    queries: [
      { query: '鹿児島 姶良 蒲生の大楠 温泉 旅館', fallback: 'フォンタナの丘かもう', key: 'tree_kamou', label: '鹿児島県姶良市ふるさと納税・樹齢1500年・日本最大の巨樹幹周り24m「蒲生の大楠」天然温泉と有機野菜フォンタナの丘かもう' },
      { query: '徳島 神山 温泉 阿川の大杉 旅館', fallback: '神山温泉　ホテル四季の里', key: 'tree_agawa', label: '徳島県神山町・名西郡ふるさと納税・樹齢千年の神宿る巨樹「阿川の大杉」里山の自然と美肌湯・神山温泉ホテル四季の里' },
      { query: '青森 深浦 不老ふ死温泉 北金ヶ沢 イチョウ', fallback: '黄金崎不老ふ死温泉', key: 'tree_kitakanegasawa', label: '青森県深浦町ふるさと納税・日本一の巨木イチョウ「ビッグイエロー北金ヶ沢」海辺の露天風呂と黄金崎不老ふ死温泉' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-hachiman-shrines-stay',
    queries: [
      { query: '大分 宇佐 宇佐神宮 ホテル パブコ 温泉', fallback: '宇佐ホテル　リバーサイド', key: 'shrine_usa', label: '大分県宇佐市ふるさと納税・全国4万社の八幡宮総本宮「宇佐神宮」国宝本殿の荘厳と宇佐ホテルリバーサイド' },
      { query: '京都 八幡 石清水八幡宮 ホテル 松花堂', fallback: 'ホテル京都エミナース', key: 'shrine_iwashimizu', label: '京都府八幡市ふるさと納税・厄除け開運の三大八幡「国宝 石清水八幡宮」男山ケーブルと京都ホテルステイ' },
      { query: '福岡 筥崎宮 博多 ホテル 都ホテル', fallback: '都ホテル　博多', key: 'shrine_hakozaki', label: '福岡県福岡市東区・博多区ふるさと納税・日本三大八幡宮・勝運と放生会の聖地「筥崎宮」天然温泉スパと都ホテル博多' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-coastal-sceneries-stay',
    queries: [
      { query: '京都 宮津 天橋立 温泉 旅館 文珠荘', fallback: '天橋立温泉　文珠荘', key: 'coast_amanohashidate', label: '京都府宮津市ふるさと納税・日本三景白砂青松の奇跡の砂州「天橋立」股のぞきパノラマと天橋立温泉文珠荘' },
      { query: '静岡 三保松原 富士山 ホテル 日本平ホテル', fallback: '日本平ホテル', key: 'coast_mihomatsubara', label: '静岡県静岡市清水区ふるさと納税・世界遺産富士山と羽衣伝説の松原「三保松原」風景美術館・日本平ホテル' },
      { query: '福井 敦賀 気比の松原 ホテル 敦賀マンテンホテル', fallback: '敦賀マンテンホテル駅前（マンテンホテルチェーン）', key: 'coast_kehinomatsubara', label: '福井県敦賀市ふるさと納税・白砂青松の景勝地「気比の松原」越前ガニ・若狭ふぐと敦賀マンテンホテル駅前' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 39 hotels using rakuten_api_helper.js...');
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
      await sleep(2200);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2200);
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
  console.log('Round 39 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
