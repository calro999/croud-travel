const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kinugawa-onsen-valley-luxury-stay',
    queries: [
      { key: 'kinugawa_asaya', query: '鬼怒川温泉 あさや', label: '日光市ふるさと納税・創業百三十年の名門！空中庭園露天風呂と夕朝食100種豪華バイキング' },
      { key: 'kinugawa_kanaya', query: '鬼怒川金谷ホテル', label: '日光市ふるさと納税・ジョン・カナヤの美学息づく渓谷の別荘！ショコラバーと和敬洋讃料理' },
      { key: 'kinugawa_plazasponge', query: '鬼怒川プラザホテル', label: '日光市ふるさと納税・鬼怒川渓谷の絶景を望む離れ貸切露天風呂「鬼燈亭」と山里会席' }
    ]
  },
  {
    slug: 'furusato-tax-jozankei-onsen-sapporo-retreat-stay',
    queries: [
      { key: 'jozankei_furukawa', query: '定山渓温泉 ぬくもりの宿 ふる川', label: '札幌市ふるさと納税・囲炉裏と民芸の温もり宿！百松庵の温泉と自家製燻製・旬の会席' },
      { key: 'jozankei_view', query: '定山渓ビューホテル', label: '札幌市ふるさと納税・総面積4000平米の巨大屋内温水プール「水の王国ラグーン」と温泉バイキング' },
      { key: 'jozankei_daiichi', query: '定山渓第一寶亭留 翠山亭', label: '札幌市ふるさと納税・自家源泉3本をブレンドする濃厚名湯！贅沢な客室展望風呂と炭火会席' }
    ]
  },
  {
    slug: 'furusato-tax-tamatsukuri-onsen-izumo-beauty-stay',
    queries: [
      { key: 'tamatsukuri_minami', query: '玉造温泉 佳翠苑 皆美', label: '松江市ふるさと納税・創業百三十余年！日本庭園と展望露天風呂「天遊の湯」・伝統の鯛めし' },
      { key: 'tamatsukuri_chourakuen', query: '玉造温泉 湯之助の宿 長楽園', label: '松江市ふるさと納税・日本一の広さを誇る混浴大露天風呂！一万坪の廻遊式日本庭園と美肌源泉' },
      { key: 'tamatsukuri_shirasure', query: '玉造温泉 白石家', label: '松江市ふるさと納税・創業三百年の老舗！総檜大浴場と毎夜開催の安来節・しまね和牛会席' }
    ]
  },
  {
    slug: 'furusato-tax-shirahama-ocean-resort-luxury-stay',
    queries: [
      { key: 'shirahama_kawayu', query: '白浜温泉 ホテル川久', label: '白浜町ふるさと納税・海に浮かぶ夢の宮殿！総工費400億円の世界建築遺産と王様のビュッフェ' },
      { key: 'shirahama_musashi', query: '紀州・白浜温泉 むさし', label: '白浜町ふるさと納税・白良浜徒歩1分の名湯宿！2種類の天然温泉掛け流しと紀州郷土バイキング' },
      { key: 'shirahama_nanki', query: '南紀白浜マリオットホテル', label: '白浜町ふるさと納税・太平洋の夕陽を望む高台リゾート！最上階展望露天風呂と和歌山グリル料理' }
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
  console.log('\nSuccessfully saved Round 92 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
