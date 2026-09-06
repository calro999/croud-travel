const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-carbonated-spring-effervescent-onsen-stay',
    queries: [
      { query: '長湯温泉 炭酸泉 大分 竹田', key: 'nagayu_carbonated', label: '大分県竹田市ふるさと納税・日本屈指の天然炭酸泉長湯温泉＆ラムネ温泉宿' },
      { query: '下呂温泉 炭酸 岐阜 旅館', key: 'gero_carbonated', label: '岐阜県下呂市ふるさと納税・飛騨川のせせらぎと美肌天然炭酸源泉宿' },
      { query: '吉川温泉 兵庫 炭酸 旅館', key: 'yokawa_carbonated', label: '兵庫県三木市ふるさと納税・超高濃度炭酸泉と神戸牛・丹波の恵み会席宿' }
    ]
  },
  {
    slug: 'furusato-tax-river-activity-canoe-fishing-resort-stay',
    queries: [
      { query: '長良川 鵜飼 旅館 岐阜 温泉', key: 'nagaragawa_river', label: '岐阜県岐阜市ふるさと納税・清流長良川の鵜飼舟鑑賞と天然鮎会席リバー宿' },
      { query: '四万十川 カヌー 高知 ホテル', key: 'shimanto_river', label: '高知県四万十市ふるさと納税・最後の清流四万十川カヌー体験＆川魚グルメ宿' },
      { query: '保津川 嵐山 亀岡 京都 温泉', key: 'hozugawa_river', label: '京都府亀岡市ふるさと納税・保津川下り渓谷舟下り＆湯の花温泉の贅沢宿' }
    ]
  },
  {
    slug: 'furusato-tax-sweets-cafe-wagashi-retro-onsen-stay',
    queries: [
      { query: '金沢 茶屋街 和菓子 ホテル 石川', key: 'kanazawa_sweets', label: '石川県金沢市ふるさと納税・ひがし茶屋街の金箔和菓子＆伝統町家ステイ' },
      { query: '小布施 栗 旅館 長野 ホテル', key: 'obuse_sweets', label: '長野県小布施町ふるさと納税・栗と北斎の街・名物栗菓子と信州山里宿' },
      { query: '伊勢 おはらい町 旅館 三重 温泉', key: 'ise_sweets', label: '三重県伊勢市ふるさと納税・おはらい町赤福食べ歩きと伊勢神宮参拝宿' }
    ]
  },
  {
    slug: 'furusato-tax-national-treasure-castle-view-luxury-stay',
    queries: [
      { query: '姫路城 ホテル 兵庫 展望', key: 'himeji_castle', label: '兵庫県姫路市ふるさと納税・世界遺産国宝白鷺城を望む展望スイートホテル' },
      { query: '松本城 ホテル 長野 展望', key: 'matsumoto_castle', label: '長野県松本市ふるさと納税・国宝松本城下町と北アルプスを望む名門ホテル' },
      { query: '彦根城 琵琶湖 ホテル 滋賀', key: 'hikone_castle', label: '滋賀県彦根市ふるさと納税・国宝彦根城と琵琶湖を望む名園キャッスルホテル' }
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
        let hotels = await searchRakutenHotels(q.query, 3);
        if (!hotels || hotels.length === 0) {
          const simplified = q.query.split(' ').slice(0, 2).join(' ');
          console.log(`Retrying simplified query: "${simplified}" ...`);
          hotels = await searchRakutenHotels(simplified, 3);
        }

        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = {
            label: q.label,
            hotels: hotels
          };
          console.log(`-> SUCCESS: Found ${hotels.length} hotels for ${q.key}. Top hotel: ${hotels[0].hotelName}`);
        } else {
          console.warn(`-> WARNING: No hotels found for ${q.key}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching for ${q.key}:`, err.message);
      }
      await sleep(1500); // 楽天APIレート制限対策
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log(`\nAll Round 14 hotels successfully stored into ${allSeasonalPath}`);
}

main();
