const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-tanabata-festivals-stay',
    queries: [
      { query: '仙台 ホテル 駅前 七夕まつり 牛たん', fallback: 'ウェスティンホテル仙台', key: 'tanabata_sendai', label: '宮城県仙台市青葉区ふるさと納税・伊達政宗公ゆかりの絢爛豪華な和紙笹飾り「仙台七夕まつり」仙台牛・厚切り牛たんとウェスティンホテル仙台' },
      { query: '平塚 ホテル 神奈川 七夕まつり 湘南', fallback: 'グランドホテル神奈中・平塚', key: 'tanabata_hiratsuka', label: '神奈川県平塚市ふるさと納税・関東屈指の光と竹飾り「湘南ひらつか七夕まつり」相模湾の生しらすとグランドホテル神奈中・平塚' },
      { query: '一宮 ホテル 愛知 七夕まつり 名古屋', fallback: 'ホテルルートイン一宮南', key: 'tanabata_ichinomiya', label: '愛知県一宮市ふるさと納税・織物の神への感謝を捧げる色鮮やかな吹き流し「一宮七夕まつり」尾張郷土料理とホテルルートイン一宮南' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-precipitous-coasts-stay',
    queries: [
      { query: '北山崎 ホテル 岩手 旅館 三陸 断崖', fallback: 'ホテル羅賀荘', key: 'coast_kitayamazaki', label: '岩手県田野畑村ふるさと納税・海のアルプス高さ200mの大断崖パノラマ「北山崎」三陸アワビと全室オーシャンビューホテル羅賀荘' },
      { query: '東尋坊 温泉 ホテル 福井 越前', fallback: '三国温泉　望洋楼', key: 'coast_tojinbo', label: '福井県坂井市三国町ふるさと納税・世界有数の輝石安山岩柱状節理「東尋坊」日本海に沈む夕日と越前ガニ料理旅館三国温泉望洋楼' },
      { query: '足摺岬 ホテル 高知 温泉 太平洋', fallback: '足摺国際ホテル', key: 'coast_ashizuri', label: '高知県土佐清水市ふるさと納税・黒潮踊る四国最南端の雄大な断崖「足摺岬」地球の丸見えパノラマと天然温泉足摺国際ホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-national-treasure-teahouses-stay',
    queries: [
      { query: '大山崎 京都 旅館 ホテル 待庵 千利休', fallback: '京都エミナース', key: 'teahouse_taian', label: '京都府大山崎町ふるさと納税・千利休が遺した唯一現存する国宝二畳茶室「待庵」茶懐石と天王山の静寂・京都ホテルステイ' },
      { query: '犬山 ホテル 如庵 国宝 愛知 温泉', fallback: 'ホテルミュースタイル犬山エクスペリエンス', key: 'teahouse_nyoan', label: '愛知県犬山市ふるさと納税・織田信長の実弟・有楽斎が極めた国宝茶室「如庵（有楽苑）」犬山城と木曽川温泉ホテルミュースタイル犬山' },
      { query: '京都 嵐山 旅館 茶室 数寄屋 温泉', fallback: '京都嵐山温泉　花伝抄', key: 'teahouse_kyoto', label: '京都府京都市右京区嵐山ふるさと納税・小堀遠州の美意識「忘筌」息づく数寄屋文化と嵐山渡月橋・京都嵐山温泉花伝抄' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-famous-stones-gardens-stay',
    queries: [
      { query: '佐渡 ホテル 新潟 赤玉石 温泉', fallback: '佐渡リゾートホテルよろづや', key: 'stone_sado', label: '新潟県佐渡市ふるさと納税・日本三大銘石として名高い深紅の貴石「佐渡赤玉石」佐渡金山世界遺産と日本海海鮮・佐渡リゾートホテルよろづや' },
      { query: '岐阜 揖斐 温泉 旅館 揖斐川石', fallback: '揖斐川温泉　ぬくもりの里', key: 'stone_ibi', label: '岐阜県揖斐川町ふるさと納税・菊花石や水石の最高峰「揖斐川石」揖斐峡の渓谷美と長良川アユ会席・名湯温泉ホテル' },
      { query: '京都 鴨川 旅館 ホテル 庭園 銘石', fallback: '嵐山温泉　彩四季の宿　花筏', key: 'stone_kamogawa', label: '京都府京都市上京区・右京区ふるさと納税・侘び寂びの枯山水庭園を彩る漆黒の銘石「鴨川真黒石」桂川清流と嵐山温泉彩四季の宿花筏' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 34 hotels using openapi helper...');
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
      await sleep(2000);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2000);
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
  console.log('Round 34 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
