const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-izu-shuzenji-bamboo-luxury-stay',
    queries: [
      { key: 'shuzenji_asaba', query: '修善寺温泉 湯回廊 菊屋', label: '伊豆市ふるさと納税・創業四百年の風情！桂川に架かる渡り廊下と趣異なる貸切風呂' },
      { key: 'shuzenji_marukyu', query: '修善寺温泉 宙 SORA 渡月荘金龍', label: '伊豆市ふるさと納税・一万五千坪の日本庭園＆展望露天風呂！竹林の小径すぐの名門' },
      { key: 'shuzenji_katsuragawa', query: '修善寺温泉 桂川', label: '伊豆市ふるさと納税・七つの無料貸切風呂とバイキング！修禅寺や竹林の小径へ徒歩圏' }
    ]
  },
  {
    slug: 'furusato-tax-awajishima-ocean-view-luxury-stay',
    queries: [
      { key: 'awaji_hotel_new_awaji', query: 'ホテルニューアワジ', label: '洲本市ふるさと納税・全室オーシャンビュー＆棚田状大浴場！淡路牛と天然鯛・鱧会席' },
      { key: 'awaji_yumekaiyu', query: '夢海游 淡路島', label: '洲本市ふるさと納税・大浜海岸目前＆離れスパ「海音の森」！淡路牛ステーキと旬魚ビュッフェ' },
      { key: 'awaji_grandchariot', query: 'GRAND CHARIOT 北斗七星135°', label: '淡路市ふるさと納税・繭型コクーンの最高峰グランピング！満天の星と極上淡路ビーフ山海会席' }
    ]
  },
  {
    slug: 'furusato-tax-echigo-yuzawa-onsen-sake-stay',
    queries: [
      { key: 'yuzawa_futaba', query: '越後湯沢温泉 水が織りなす越後の宿 双葉', label: '湯沢町ふるさと納税・二十八の多彩なお風呂！展望露天風呂「空の湯」と魚沼産コシヒカリ会席' },
      { key: 'yuzawa_naspa', query: 'ＮＡＳＰＡニューオータニ', label: '湯沢町ふるさと納税・越後湯沢駅送迎3分！250坪の天然温泉大浴場とニューオータニ伝統フレンチ' },
      { key: 'yuzawa_shoshintei', query: '越後のお宿 いなもと', label: '湯沢町ふるさと納税・越後湯沢駅西口徒歩2分！100％源泉掛け流し露天風呂と越後郷土会席' }
    ]
  },
  {
    slug: 'furusato-tax-chichibu-nagatoro-nature-onsen-stay',
    queries: [
      { key: 'chichibu_miyamaso', query: '秩父温泉 和どう', label: '秩父市ふるさと納税・日本通貨発祥の地「和同開珎」ゆかりの薬師の湯！横瀬川の清流望む露天風呂' },
      { key: 'chichibu_hatago', query: '新木鉱泉旅館', label: '秩父市ふるさと納税・創業百九十年の歴史！卵水と称されるトロトロ美肌温泉と囲炉裏炭火料理' },
      { key: 'chichibu_nagatoro_choukan', query: '長瀞 花のおもてなし 長生館', label: '長瀞町ふるさと納税・長瀞渓谷と名勝「岩畳」を一望！創業大正四年の老舗流しそうめんと郷土会席' }
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
  console.log('\nSuccessfully saved Round 88 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
