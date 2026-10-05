const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-terraced-rice-fields-satoyama-onsen-stay',
    queries: [
      { query: '松之山温泉 旅館 新潟 十日町', key: 'matsudai_tanada', label: '新潟県十日町市ふるさと納税・星峠の棚田と松之山温泉・越後里山美食宿' },
      { query: '能登 輪島 温泉 旅館 石川', key: 'noto_tanada', label: '石川県輪島市ふるさと納税・世界農業遺産白米千枚田と能登里山海道の温泉名宿' },
      { query: '鴨川 温泉 旅館 千葉 里山', key: 'kamogawa_tanada', label: '千葉県鴨川市ふるさと納税・大山千枚田の里山風景と南房総太平洋海鮮温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-spring-water-soba-tofu-onsen-stay',
    queries: [
      { query: '忍野八海 富士吉田 ホテル 温泉 山梨', key: 'oshino_water', label: '山梨県忍野村・富士吉田市ふるさと納税・世界遺産富士の湧水忍野八海と手打ち蕎麦宿' },
      { query: '安曇野 温泉 ホテル わさび 長野', key: 'azumino_water', label: '長野県安曇野市ふるさと納税・北アルプスの清冽な雪解け湧水とわさび街道・名湯宿' },
      { query: '郡上八幡 旅館 岐阜 宗祇水', key: 'gujo_water', label: '岐阜県郡上市ふるさと納税・名水百選宗祇水と水の城下町・長良川天然鮎宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-medicinal-baths-onsen-stay',
    queries: [
      { query: '草津温泉 旅館 群馬 源泉', key: 'kusatsu_yakuto', label: '群馬県草津町ふるさと納税・日本三大名泉草津温泉の強酸性硫黄泉と湯畑散策名宿' },
      { query: '有馬温泉 金泉 旅館 兵庫 神戸', key: 'arima_yakuto', label: '兵庫県神戸市ふるさと納税・日本三大薬湯有馬温泉の含鉄ナトリウム塩化物強塩泉金泉宿' },
      { query: '松之山温泉 新潟 薬湯 旅館', key: 'matsunoyama_yakuto', label: '新潟県十日町市ふるさと納税・日本三大薬湯松之山温泉の太古の化石海水濃厚ジオ温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-craft-cider-hop-brewery-stay',
    queries: [
      { query: '弘前 リンゴ シードル ホテル 青森', key: 'hirosaki_cider', label: '青森県弘前市ふるさと納税・日本一のりんご王国弘前シードル工房＆津軽郷土料理宿' },
      { query: '遠野 ホップ ホテル 岩手 旅館', key: 'tono_hop', label: '岩手県遠野市ふるさと納税・日本一のホップの里遠野クラフトビール＆民話の里ステイ' },
      { query: '飯田 シードル 長野 ホテル 温泉', key: 'iida_cider', label: '長野県飯田市ふるさと納税・南信州りんご並木とご当地シードル・天竜川温泉リゾート' }
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
  console.log(`\nAll Round 16 hotels successfully stored into ${allSeasonalPath}`);
}

main();
