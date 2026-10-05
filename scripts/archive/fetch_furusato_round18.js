const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-gorges-canyon-onsen-stay',
    queries: [
      { query: '清津峡 温泉 旅館 新潟 十日町', key: 'kiyotsu_gorge', label: '新潟県十日町市ふるさと納税・日本三大峡谷清津峡パノラマ水鏡と奥清津温泉名宿' },
      { query: '宇奈月温泉 旅館 富山 黒部峡谷', key: 'kurobe_gorge', label: '富山県黒部市ふるさと納税・日本三大峡谷黒部峡谷トロッコ玄関口・宇奈月温泉美肌湯宿' },
      { query: '奥伊勢 大杉谷 温泉 旅館 三重', key: 'osugidani_gorge', label: '三重県大台町ふるさと納税・日本三大峡谷秘境大杉谷と清流宮川の奥伊勢温泉リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay',
    queries: [
      { query: '松阪牛 鉄板焼き 温泉 旅館 三重', key: 'matsusaka_wagyu', label: '三重県松阪市・伊勢志摩ふるさと納税・本場松阪牛A5ランク鉄板焼きと天然温泉リゾート' },
      { query: '近江牛 鉄板焼き 旅館 滋賀 温泉', key: 'omi_wagyu', label: '滋賀県おごと温泉ふるさと納税・日本三大和牛近江牛サーロイン鉄板焼きカウンター宿' },
      { query: '米沢牛 鉄板焼き 旅館 山形 温泉', key: 'yonezawa_wagyu', label: '山形県米沢市・赤湯温泉ふるさと納税・最高峰米沢牛フィレステーキと開湯千年の名湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-japan-oldest-classic-hotel-heritage-stay',
    queries: [
      { query: '日光金谷ホテル 栃木 日光', key: 'nikko_kanaya', label: '栃木県日光市ふるさと納税・現存日本最古のクラシックホテル日光金谷ホテル滞在記' },
      { query: '富士屋ホテル 箱根 神奈川 温泉', key: 'hakone_fujiya', label: '神奈川県箱根町ふるさと納税・明治創業の宮ノ下箱根富士屋ホテルと名湯ステイ' },
      { query: '雲仙観光ホテル 長崎 温泉', key: 'unzen_kanko', label: '長崎県雲仙市ふるさと納税・日本初の国立公園クラシックリゾート雲仙観光ホテルと硫黄泉' }
    ]
  },
  {
    slug: 'furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay',
    queries: [
      { query: '志摩 英虞湾 温泉 ホテル 三重', key: 'shima_rias', label: '三重県志摩市ふるさと納税・リアス海岸英虞湾の夕映え多島美と本場伊勢海老・鮑会席' },
      { query: '南三陸 温泉 ホテル 宮城 鮑', key: 'sanriku_rias', label: '宮城県南三陸町ふるさと納税・三陸リアス海岸インフィニティ露天風呂と名物鮑踊り焼き' },
      { query: '伊根の舟屋 旅館 京都 温泉', key: 'ine_rias', label: '京都府伊根町ふるさと納税・重要伝統的建造物群伊根の舟屋群と丹後海の幸温泉宿' }
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
  console.log(`\nAll Round 18 hotels successfully stored into ${allSeasonalPath}`);
}

main();
