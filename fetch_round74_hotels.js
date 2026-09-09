const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-matsutake-autumn-gourmet-kaiseki-stay',
    queries: [
      { key: 'bessho_matsutake', query: '別所温泉 かしわや本店', label: '上田市ふるさと納税・信州信濃の松茸会席と創業百余年の数寄屋造り名門温泉宿' },
      { key: 'tamba_matsutake', query: '丹波篠山 近又', label: '丹波篠山市ふるさと納税・丹波松茸と天然ぼたん鍋を堪能する創業四百年の老舗料理旅館' },
      { key: 'kyoto_matsutake', query: '京都 湯の花温泉 すみや亀峰菴', label: '亀岡市ふるさと納税・丹波の秋の王様・地松茸とオーストリアワインを味わう大人の隠れ宿' }
    ]
  },
  {
    slug: 'furusato-tax-lakeview-onsen-resort-hotel-stay',
    queries: [
      { key: 'biwa_lakeview', query: '琵琶湖ホテル', label: '大津市ふるさと納税・全室レイクビューバルコニー＆天然温泉るりの湯から琵琶湖一望' },
      { key: 'toya_lakeview', query: 'ザ・レイクスイート 湖の栖', label: '壮瞥町ふるさと納税・洞爺湖と一体化するインフィニティ露天風呂と全室レイクビュー温泉' },
      { key: 'ashinoko_lakeview', query: '箱根 芦ノ湖温泉 絶景の癒しの湯宿 箱根 蛸川温泉 龍宮殿', label: '箱根町ふるさと納税・芦ノ湖と富士山の絶景パノラマを望む国登録有形文化財の名門宿' }
    ]
  },
  {
    slug: 'furusato-tax-scenic-sauna-totonoi-retreat-stay',
    queries: [
      { key: 'hokkaido_sauna', query: '洞爺湖万世閣 ホテルレイクサイドテラス', label: '壮瞥町ふるさと納税・水風呂と外気浴デッキから洞爺湖を一望する絶景サウナ' },
      { key: 'nagano_sauna', query: '白馬八方温泉 白馬ハイランドホテル', label: '白馬村ふるさと納税・北アルプスの絶景パノラマを仰ぐフィンランド式サウナと名湯' },
      { key: 'shizuoka_sauna', query: '焼津グランドホテル', label: '焼津市ふるさと納税・駿河湾と富士山を望む森のテラスサウナとオールインクルーシブ温泉' }
    ]
  },
  {
    slug: 'furusato-tax-fragrant-hinoki-bath-healing-stay',
    queries: [
      { key: 'kiso_hinoki', query: '木曽 木曽路の宿 いわや', label: '木曽町ふるさと納税・木曽ヒノキ発祥の地で樹齢数百年の総檜風呂と木曽牛会席' },
      { key: 'izu_hinoki', query: '湯ヶ島温泉 谷川の湯 あせび野', label: '伊豆市ふるさと納税・猫越川の清流を望む全室源泉かけ流し総檜露天風呂付きの名宿' },
      { key: 'kurokawa_hinoki', query: '黒川温泉 歴史の宿 御客屋', label: '南小国町ふるさと納税・創業三百年！肥後細川藩の御前湯の歴史を継ぐ檜風呂と小国郷土料理' }
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

  for (const page of furusatoConfigs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const results = await searchRakutenHotels(q.query, 1);
        if (results && results.length > 0) {
          const hotel = results[0];
          console.log(` -> Found: [${hotel.hotelNo}] ${hotel.hotelName} (Rating: ${hotel.reviewAverage}, Reviews: ${hotel.reviewCount})`);
          allSeasonal[page.slug][q.key] = {
            ...hotel,
            searchQuery: q.query,
            curatorLabel: q.label
          };
        } else {
          console.warn(` -> No hotels found for query: "${q.query}"`);
        }
      } catch (err) {
        console.error(` -> Error searching for "${q.query}":`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 74 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
