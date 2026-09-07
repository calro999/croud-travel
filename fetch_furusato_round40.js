const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-columnar-joints-gorges-stay',
    queries: [
      { query: '十日町 清津峡 温泉 旅館 松之山', fallback: '清津館', key: 'gorge_kiyotsu', label: '新潟県十日町市ふるさと納税・柱状節理の巨大峡谷と水鏡アート「清津峡渓谷」清津川沿いの一軒宿清津館' },
      { query: '高千穂峡 宮崎 温泉 旅館 神話 宿', fallback: '高千穂 旅館 神仙', key: 'gorge_takachiho', label: '宮崎県高千穂町ふるさと納税・阿蘇溶岩が刻んだ柱状節理の神話峡谷「高千穂峡」真名井の滝と旅館神仙' },
      { query: '北海道 層雲峡 温泉 ホテル 朝陽亭', fallback: '層雲峡温泉　朝陽リゾートホテル', key: 'gorge_sounkyo', label: '北海道上川町ふるさと納税・大雪山麓に連なる24kmの大断崖柱状節理「層雲峡」銀河・流星の滝と層雲峡朝陽リゾートホテル' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pottery-festivals-stay',
    queries: [
      { query: '佐賀 有田 陶器市 温泉 旅館', fallback: '有田温泉　清香旅館', key: 'pottery_arita', label: '佐賀県有田町ふるさと納税・400年の磁器文化と120万人集う日本最大級「有田陶器市」美肌温泉と有田焼の器会席' },
      { query: '長崎 波佐見 陶器まつり 温泉 ホテル', fallback: 'ホテルブリスヴィラ波佐見', key: 'pottery_hasami', label: '長崎県波佐見町ふるさと納税・モダンでおしゃれな日常の器「波佐見陶器まつり」源泉かけ流し温泉とホテルブリスヴィラ波佐見' },
      { query: '滋賀 信楽 陶器まつり 温泉 ホテル', fallback: '信楽温泉　ホテルレイクヴィラ', key: 'pottery_shigaraki', label: '滋賀県甲賀市信楽町ふるさと納税・日本六古窯の伝統とたぬき焼「信楽陶器まつり」信楽焼の器と信楽温泉ホテルレイクヴィラ' }
    ]
  },
  {
    slug: 'furusato-tax-three-medicinal-hotsprings-stay',
    queries: [
      { query: '草津温泉 湯畑 旅館 ホテル 一井', fallback: '草津温泉　ホテル一井', key: 'onsen_kusatsu', label: '群馬県草津町ふるさと納税・日本三大名湯にして日本屈指の強酸性薬湯「草津温泉」湯畑目の前の老舗草津温泉ホテル一井' },
      { query: '有馬温泉 兵衛向陽閣 金泉 旅館', fallback: '有馬温泉　兵衛向陽閣', key: 'onsen_arima', label: '兵庫県神戸市有馬温泉ふるさと納税・日本最古の含鉄ナトリウム塩化物泉「有馬温泉 金泉」創業700年の名門兵衛向陽閣' },
      { query: '新潟 十日町 松之山温泉 旅館 ひなの宿', fallback: '松之山温泉　ひなの宿　ちとせ', key: 'onsen_matsunoyama', label: '新潟県十日町市ふるさと納税・化石海水が湧く日本三大薬湯の秘湯「松之山温泉」棚田の味覚とひなの宿ちとせ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-daimyo-gardens-stay',
    queries: [
      { query: '水戸 偕楽園 ホテル 旅館 コートホテル', fallback: 'ホテル・ザ・ウエストヒルズ・水戸', key: 'garden_kairakuen', label: '茨城県水戸市ふるさと納税・徳川斉昭公が創設した梅と千波湖の名園「偕楽園」好文亭とホテル・ザ・ウエストヒルズ・水戸' },
      { query: '金沢 兼六園 旅館 白鳥路 ホテル 山楽', fallback: '金沢白鳥路　ホテル山楽', key: 'garden_kenrokuen', label: '石川県金沢市ふるさと納税・加賀百万石の美の極致・六勝を兼ね備える大名庭園「兼六園」天然温泉金沢白鳥路ホテル山楽' },
      { query: '岡山 後楽園 ホテル 岡山プラザホテル', fallback: '岡山プラザホテル', key: 'garden_korakuen', label: '岡山県岡山市ふるさと納税・池田綱政公が築いた回遊式大名庭園「岡山後楽園」旭川越しに岡山城を望む岡山プラザホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 40 hotels using rakuten_api_helper.js...');
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
  console.log('Round 40 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
