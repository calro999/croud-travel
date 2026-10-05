const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-golf-resort-hotspring-stay',
    queries: [
      { key: 'kawana_golf_resort', query: '川奈 温泉 ゴルフ ホテル 伊東 静岡', label: '伊東市ふるさと納税・名門川奈ゴルフコース＆オーシャンビュー温泉ホテル' },
      { key: 'karuizawa_golf_resort', query: '軽井沢 ゴルフ リゾート ホテル 長野', label: '軽井沢町ふるさと納税・高原の名門コースとクラシックリゾート' },
      { key: 'miyakojima_golf_resort', query: '宮古島 ゴルフ リゾート ホテル 沖縄', label: '宮古島市ふるさと納税・東洋一の海を望むシーサイドゴルフ＆ヴィラ' }
    ]
  },
  {
    slug: 'furusato-tax-solo-retreat-private-onsen-stay',
    queries: [
      { key: 'shima_solo_onsen', query: '四万温泉 旅館 露天風呂 群馬', label: '中之条町ふるさと納税・四万ブルーと四万温泉の静寂おひとり様ステイ' },
      { key: 'bessho_solo_onsen', query: '別所温泉 旅館 信州 長野', label: '上田市ふるさと納税・信州最古の湯・別所温泉で過ごすソロ湯治' },
      { key: 'kurokawa_solo_onsen', query: '黒川温泉 旅館 露天風呂 熊本', label: '南小国町ふるさと納税・阿蘇の隠れ里・黒川温泉で自然に抱かれる一人旅' }
    ]
  },
  {
    slug: 'furusato-tax-castle-town-heritage-onsen-stay',
    queries: [
      { key: 'himeji_castle_stay', query: '姫路 温泉 旅館 城 兵庫', label: '姫路市ふるさと納税・世界遺産姫路城を望む展望露天風呂と城下町宿' },
      { key: 'matsumoto_castle_stay', query: '松本 温泉 旅館 美ヶ原 長野', label: '松本市ふるさと納税・国宝松本城下町と美ヶ原温泉の名湯旅館' },
      { key: 'hikone_castle_stay', query: '彦根城 琵琶湖 旅館 ホテル 滋賀', label: '彦根市ふるさと納税・国宝彦根城と琵琶湖の恵みを味わう老舗宿' }
    ]
  },
  {
    slug: 'furusato-tax-bihada-medicinal-springs-retreat-stay',
    queries: [
      { key: 'nagayu_carbonated_spring', query: '長湯温泉 炭酸泉 旅館 大分', label: '竹田市ふるさと納税・日本屈指の天然強炭酸泉・長湯温泉の薬湯治宿' },
      { key: 'kirishima_mud_spring', query: '霧島 温泉 露天風呂 鹿児島', label: '霧島市ふるさと納税・天孫降臨の森と美肌の天然泥湯・硫黄泉宿' },
      { key: 'ureshino_bihada_spring', query: '嬉野温泉 美肌 旅館 佐賀', label: '嬉野市ふるさと納税・日本三大美肌の湯・嬉野温泉のとろとろ重曹泉宿' }
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

  for (const page of configs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        const hotels = await searchRakutenHotels(q.query, 4);
        console.log(`  -> Found ${hotels.length} hotels`);
        allSeasonal[page.slug][q.key] = {
          label: q.label,
          query: q.query,
          hotels: hotels
        };
      } catch (err) {
        console.error(`  -> Error fetching ${q.query}:`, err.message);
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved all round 3 furusato hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
