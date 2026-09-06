const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-scenic-views-heritage-stay',
    queries: [
      { query: '松島 露天風呂 温泉 宮城', key: 'matsushima_view', label: '宮城県松島町ふるさと納税・日本三景松島湾パノラマ露天風呂と三陸海の幸会席' },
      { query: '天橋立 温泉 旅館 京都', key: 'amanohashidate_view', label: '京都府宮津市ふるさと納税・日本三景天橋立を望む老舗名湯旅館＆丹後旬鮮グルメ' },
      { query: '宮島 温泉 旅館 広島', key: 'miyajima_view', label: '広島県廿日市市ふるさと納税・世界遺産安芸の宮島＆嚴島神社大鳥居を望む歴史宿' }
    ]
  },
  {
    slug: 'furusato-tax-diving-ocean-resort-stay',
    queries: [
      { query: '恩納村 ビーチ リゾート 沖縄', key: 'onna_diving', label: '沖縄県恩納村ふるさと納税・青の洞窟＆エメラルドオーシャンフロントダイビングリゾート' },
      { query: '串本 温泉 旅館 和歌山', key: 'kushimoto_diving', label: '和歌山県串本町ふるさと納税・本州最南端テーブルサンゴ礁の海＆絶景露天温泉宿' },
      { query: '西伊豆 露天風呂 温泉 静岡', key: 'nishiizu_diving', label: '静岡県西伊豆エリアふるさと納税・駿河湾透明ダイビング拠点＆夕日と地魚会席の宿' }
    ]
  },
  {
    slug: 'furusato-tax-literary-heritage-historic-onsen-stay',
    queries: [
      { query: '城崎温泉 旅館 兵庫 外湯', key: 'kinosaki_literary', label: '兵庫県豊岡市ふるさと納税・志賀直哉ゆかりの城崎温泉・外湯めぐりと但馬牛老舗旅館' },
      { query: '湯ヶ島 温泉 旅館 静岡', key: 'yugashima_literary', label: '静岡県伊豆市ふるさと納税・川端康成『伊豆の踊子』執筆の狩野川清流と極上湯治宿' },
      { query: '道後温泉 旅館 愛媛 老舗', key: 'dogo_literary', label: '愛媛県松山市ふるさと納税・夏目漱石『坊っちゃん』舞台の日本最古の名湯＆伊予馳走旅館' }
    ]
  },
  {
    slug: 'furusato-tax-sky-open-air-glamping-resort-stay',
    queries: [
      { query: '富士河口湖 グランピング 山梨', key: 'fuji_glamping', label: '山梨県富士河口湖町ふるさと納税・富士山麓の星空ドーム＆プライベート露天グランピング' },
      { query: '阿蘇 グランピング 温泉 熊本', key: 'aso_glamping', label: '熊本県阿蘇市ふるさと納税・大自然カルデラ満天星空＆天然温泉露天グランピング' },
      { query: '那須 グランピング 栃木 温泉', key: 'nasu_glamping', label: '栃木県那須町ふるさと納税・那須高原フォレストドーム＆焚き火BARプライベートステイ' }
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
  console.log(`\nAll Round 13 hotels successfully stored into ${allSeasonalPath}`);
}

main();
