const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-private-room-open-air-bath-luxury-stay',
    queries: [
      { key: 'izu_room_bath', query: '伊豆 修善寺温泉 宙 SORA 渡月荘金龍', label: '伊豆市ふるさと納税・全室露天風呂付き客室と一万五千坪の日本庭園' },
      { key: 'hakone_room_bath', query: '箱根 金乃竹 塔ノ澤', label: '箱根町ふるさと納税・自家源泉の客室露天風呂と竹取物語をコンセプトにした大人の隠れ宿' },
      { key: 'arashiyama_room_bath', query: '京都 嵐山温泉 翠嵐 ラグジュアリーコレクションホテル', label: '京都市ふるさと納税・保津川を望むプライベート天然温泉付き客室と極上のおもてなし' }
    ]
  },
  {
    slug: 'furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay',
    queries: [
      { key: 'kinosaki_heya_shoku', query: '城崎温泉 西村屋本館', label: '豊岡市ふるさと納税・創業百六十年の数寄屋建築と老舗仲居による極上部屋食会席' },
      { key: 'arimaya_heya_shoku', query: '有馬温泉 兵衛向陽閣', label: '神戸市ふるさと納税・金泉と老舗の伝統部屋食会席を心ゆくまで堪能する名宿' },
      { key: 'kusatsu_heya_shoku', query: '草津温泉 奈良屋', label: '草津町ふるさと納税・湯守が管理する極上白旗源泉と静寂の客室で味わう月替わり部屋食' }
    ]
  },
  {
    slug: 'furusato-tax-firefly-viewing-hotaru-night-stream-stay',
    queries: [
      { key: 'kikuchi_firefly', query: '菊池温泉 清流荘 菊池', label: '菊池市ふるさと納税・菊池渓谷の清流と初夏のホタル乱舞を愛でる美肌温泉宿' },
      { key: 'tatsuno_firefly', query: 'かんなべ温泉 ホテル ブルーリッジ', label: '兵庫県ふるさと納税・清流沿いに舞うホタルの夕べと緑豊かな高原温泉リゾート' },
      { key: 'yugawara_firefly', query: '湯河原温泉 万葉の里 白雲荘', label: '湯河原町ふるさと納税・千歳川のせせらぎと万葉公園ほたるの宴に近い大人の隠れ宿' }
    ]
  },
  {
    slug: 'furusato-tax-highland-ranch-farm-resort-hotel-stay',
    queries: [
      { key: 'nasu_farm_resort', query: '那須温泉 ホテルサンバレー那須', label: '那須町ふるさと納税・南ヶ丘牧場や千本松牧場に隣接する高原リゾートと多彩な名湯スパ' },
      { key: 'tomamu_farm_resort', query: '星野リゾート リゾナーレトマム', label: '占冠村ふるさと納税・広大なファームエリアで動物たちと触れ合う北海道最高峰リゾート' },
      { key: 'aso_farm_resort', query: '阿蘇ファームランド 阿蘇ファームヴィレッジ', label: '南阿蘇村ふるさと納税・大自然の牧場体験とドーム型客室が人気の健康テーマパーク' }
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
      await sleep(1200);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 73 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
