const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-dog-friendly-dogrun-luxury-resort-stay',
    queries: [
      { key: 'izu_dog_resort', query: '伊豆高原 ウブドの森', label: '伊東市ふるさと納税・愛犬同伴ラグジュアリー！天然温泉と専用ドッグラン・愛犬用ビュッフェ' },
      { key: 'nasu_dog_resort', query: 'ホテルフォレストヒルズ那須', label: '那須町ふるさと納税・那須高原の森に佇む全室愛犬同伴コテージ＆広大な天然芝ドッグラン' },
      { key: 'biwa_dog_resort', query: 'レジーナリゾートびわ湖長浜', label: '長浜市ふるさと納税・全室レイクビュー＆客室温泉露天風呂付き！愛犬と泊まる最高峰宿' }
    ]
  },
  {
    slug: 'furusato-tax-radium-radon-hotspring-healing-stay',
    queries: [
      { key: 'misasa_radium', query: '三朝温泉 依山楼 岩崎', label: '三朝町ふるさと納税・世界屈指のラジウム温泉！回遊式大庭園風呂「山の湯」と三朝名湯' },
      { key: 'masutomi_radium', query: '増富ラジウム温泉 不老閣', label: '北杜市ふるさと納税・日本屈指の高濃度ラジウム天然自噴泉！岩風呂と湯治の聖地' },
      { key: 'murasugi_radium', query: '村杉温泉 風雅の宿 長生館', label: '阿賀野市ふるさと納税・四千坪の大庭園と日本最大級のラジウム温泉露天風呂' }
    ]
  },
  {
    slug: 'furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay',
    queries: [
      { key: 'kanazawa_yakuzen', query: '金沢 湯涌温泉 湯の出旅館', label: '金沢市ふるさと納税・百万石の奥座敷！金沢薬膳会席と無色透明の美肌名湯' },
      { key: 'hakone_yakuzen', query: '箱根仙石原温泉 ホテルグリーンプラザ箱根', label: '箱根町ふるさと納税・富士山を望む露天風呂と健康薬膳・旬菜プレミアムビュッフェ' },
      { key: 'beppu_yakuzen', query: '別府鉄輪温泉 癒しの宿 彩葉', label: '別府市ふるさと納税・地熱と薬草の恵み！天然温泉掛け流し離れ宿と薬膳茶デトックス' }
    ]
  },
  {
    slug: 'furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay',
    queries: [
      { key: 'kurokawa_modern', query: '黒川温泉 湯本荘', label: '南小国町ふるさと納税・シモンズ社製ベッド完備の和モダン客室と渓流沿い露天風呂' },
      { key: 'hakone_modern', query: '箱根強羅温泉 季の湯 雪月花', label: '箱根町ふるさと納税・全室客室檜露天風呂＆快適ローベッド付き！強羅駅前人気名宿' },
      { key: 'arashiyama_modern', query: '京都 嵐山温泉 花伝抄', label: '京都市ふるさと納税・阪急嵐山駅前！全館畳敷き和モダンローベッド客室と五つの貸切風呂' }
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
  console.log('\nSuccessfully saved Round 78 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
