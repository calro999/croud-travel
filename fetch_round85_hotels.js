const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kurokawa-onsen-yumeguri-luxury-stay',
    queries: [
      { key: 'kurokawa_yamamizuki', query: '黒川温泉 山あいの宿 山みず木', label: '南小国町ふるさと納税・渓流と森に抱かれた絶景露天風呂！自然美と入湯手形めぐりの極上宿' },
      { key: 'kurokawa_okunoyu', query: '黒川温泉 奥の湯', label: '南小国町ふるさと納税・茅葺き屋根と竹林の静寂！田の原川のせせらぎを聞く多彩な湯処' },
      { key: 'kurokawa_shinmeikan', query: '黒川温泉 新明館', label: '南小国町ふるさと納税・名物手掘り洞窟風呂！川端通りの風情と肥後あか牛会席' }
    ]
  },
  {
    slug: 'furusato-tax-ginzan-onsen-taisho-romantic-stay',
    queries: [
      { key: 'ginzan_notoya', query: '銀山温泉 能登屋旅館', label: '尾花沢市ふるさと納税・国登録有形文化財の木造四層楼閣！大正ロマン薫る温泉街のシンボル' },
      { key: 'ginzan_ginzanso', query: '銀山温泉 仙峡の宿 銀山荘', label: '尾花沢市ふるさと納税・銀山川を望む露天寝湯が大人気！尾花沢牛会席と開放的な大浴場' },
      { key: 'ginzan_kosekiya', query: '銀山温泉 古勢起屋別館', label: '尾花沢市ふるさと納税・大正ロマンの木造四層構造！川側客室からガス灯揺らめく街並みを一望' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-onsen-jigoku-meguri-stay',
    queries: [
      { key: 'beppu_suginoi', query: '別府温泉 杉乃井ホテル', label: '別府市ふるさと納税・大展望露天風呂棚湯と大迫力アクアガーデン！別府湾一望のメガリゾート' },
      { key: 'beppu_sansuikan', query: '別府鉄輪温泉 ホテル山水館', label: '別府市ふるさと納税・湯けむり立ち上る鉄輪温泉！展望露天風呂と名物地獄蒸し料理' },
      { key: 'beppu_kamenoi', query: '別府温泉 別府亀の井ホテル', label: '別府市ふるさと納税・別府駅徒歩4分！広々温泉大浴場と郷土料理バイキングが魅力の老舗名門' }
    ]
  },
  {
    slug: 'furusato-tax-kyoto-arashiyama-bamboo-luxury-stay',
    queries: [
      { key: 'arashiyama_suiran', query: '翠嵐 ラグジュアリーコレクションホテル 京都', label: '京都市ふるさと納税・保津川と嵐山の四季を望む最高峰ラグジュアリー！嵐山温泉の露天風呂付客室' },
      { key: 'arashiyama_kadensho', query: '京都 嵐山温泉 花伝抄', label: '京都市ふるさと納税・阪急嵐山駅徒歩1分！全館畳敷き＆趣の異なる5つの無料貸切風呂と京会席' },
      { key: 'arashiyama_benkei', query: '嵐山温泉 嵐山辨慶', label: '京都市ふるさと納税・嵐山大井川のほとり！伝統の京料理と嵐山温泉露天風呂を愉しむ料理旅館' }
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
      await sleep(2200);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 85 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
