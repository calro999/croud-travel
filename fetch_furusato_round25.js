const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-sacred-mountains-sky-resort-stay',
    queries: [
      { query: '富士山 展望 ホテル 山梨 河口湖', key: 'mountain_fuji', label: '山梨県富士河口湖町ふるさと納税・日本三霊山富士山を仰ぐ逆さ富士パノラマリゾート＆甲州ワイン牛会席' },
      { query: '白山 温泉 旅館 石川 白山市 加賀', key: 'mountain_hakusan', label: '石川県白山市ふるさと納税・日本三霊山白山の雪解け伏流水と美肌の白山一里野温泉・加賀会席宿' },
      { query: '立山 ホテル 富山 アルペンルート 温泉', key: 'mountain_tateyama', label: '富山県立山町ふるさと納税・日本三霊山立山連峰パノラマと立山黒部アルペンルート直結マウンテンリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-waters-culinary-stay',
    queries: [
      { query: '南阿蘇 白川水源 温泉 旅館 熊本', key: 'water_aso', label: '熊本県南阿蘇村ふるさと納税・日本名水百選「白川水源」の極上湧水料理と阿蘇五岳を望む絶景温泉宿' },
      { query: '白州 八ヶ岳 ホテル 山梨 温泉', key: 'water_hakushu', label: '山梨県北杜市ふるさと納税・南アルプス甲斐駒ヶ岳の清冽な名水仕込み蕎麦・ウイスキーと八ヶ岳高原リゾート' },
      { query: '京都 伏見 旅館 伏水 宇治', key: 'water_fushimi', label: '京都府京都市伏見区ふるさと納税・名水「伏水」で醸す極上純米酒と京料理・伏見酒蔵通り散策宿' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-towns-riverside-stay',
    queries: [
      { query: '柳川 旅館 うなぎ 福岡 川下り', key: 'water_town_yanagawa', label: '福岡県柳川市ふるさと納税・掘割をどんこ舟で巡る水郷柳川川下りと名物うなぎのせいろ蒸し老舗旅館' },
      { query: '近江八幡 旅館 滋賀 八幡堀 近江牛', key: 'water_town_omihachiman', label: '滋賀県近江八幡市ふるさと納税・重要伝統的建造物群保存地区八幡堀和船めぐりと近江牛ステーキ会席宿' },
      { query: '佐原 旅館 千葉 潮来 小江戸 水郷', key: 'water_town_sawara', label: '千葉県香取市・茨城県潮来市ふるさと納税・小江戸佐原の舟めぐりと水郷あやめ園・歴史的町家オーベルジュ' }
    ]
  },
  {
    slug: 'furusato-tax-three-gorge-open-air-baths-retreat-stay',
    queries: [
      { query: '天城湯ヶ島 温泉 旅館 伊豆 静岡', key: 'gorge_bath_amagi', label: '静岡県伊豆市ふるさと納税・川端康成ゆかりの狩野川渓谷清流露天風呂と天城本わさび・猪鍋会席宿' },
      { query: '尻焼温泉 旅館 群馬 中之条 秘湯', key: 'gorge_bath_shiriyaki', label: '群馬県中之条町ふるさと納税・川底から温泉が自噴する天然の川風呂「尻焼温泉」と奥草津の秘湯宿' },
      { query: '秋ノ宮温泉郷 旅館 秋田 湯沢 秘湯', key: 'gorge_bath_akinomiya', label: '秋田県湯沢市ふるさと納税・武者小路実篤も愛した役内川の渓流露天風呂「秋ノ宮温泉郷」と稲庭うどん名宿' }
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
          await sleep(1500);
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
  console.log(`\nAll Round 25 hotels successfully stored into ${allSeasonalPath}`);
}

main();
