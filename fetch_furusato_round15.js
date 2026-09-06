const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-alps-trekking-mountain-resort-stay',
    queries: [
      { query: '上高地 ホテル 長野 リゾート', key: 'kamikochi_alps', label: '長野県松本市ふるさと納税・神降ちる地・上高地帝国ホテル＆穂高連峰山岳リゾート' },
      { query: '白馬 リゾート ホテル 温泉 長野', key: 'hakuba_alps', label: '長野県白馬村ふるさと納税・北アルプス白馬山麓の絶景テラス＆温泉山岳リゾート' },
      { query: '立山 黒部アルペンルート ホテル 富山', key: 'tateyama_alps', label: '富山県立山町ふるさと納税・立山黒部アルペンルート雲上ホテル＆みくりが池温泉' }
    ]
  },
  {
    slug: 'furusato-tax-winery-vineyard-auberge-stay',
    queries: [
      { query: '勝沼 ワイン 温泉 ホテル 山梨', key: 'katsunuma_wine', label: '山梨県甲州市ふるさと納税・日本ワイン発祥の地勝沼ぶどう畑＆美肌温泉リゾート' },
      { query: '余市 ワイン ホテル 北海道', key: 'yoichi_wine', label: '北海道余市町ふるさと納税・世界が注目する余市ワイン＆日本海絶景オーベルジュ' },
      { query: '十勝 ワイン リゾート ホテル 北海道', key: 'tokachi_wine', label: '北海道池田町ふるさと納税・十勝ワイン城と広大な北の大地・十勝モール温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-scenic-train-torokko-railway-onsen-stay',
    queries: [
      { query: 'わたらせ渓谷 温泉 旅館 群馬', key: 'watarase_train', label: '群馬県みどり市ふるさと納税・わたらせ渓谷鐵道トロッコ列車と渓谷露天名湯宿' },
      { query: '大井川 温泉 旅館 静岡 SL', key: 'oigawa_train', label: '静岡県川根本町ふるさと納税・大井川鐵道SL蒸気機関車と寸又峡夢の吊橋温泉宿' },
      { query: '只見線 温泉 旅館 福島 会津', key: 'tadamisen_train', label: '福島県三島町ふるさと納税・世界一ロマンチックな只見線第一橋梁と奥会津秘湯宿' }
    ]
  },
  {
    slug: 'furusato-tax-lighthouse-cliff-ocean-panorama-stay',
    queries: [
      { query: '日御碕 温泉 旅館 出雲 島根', key: 'hinomisaki_cliff', label: '島根県出雲市ふるさと納税・東洋一の白亜出雲日御碕灯台と日本海茜色夕日温泉宿' },
      { query: '犬吠埼 温泉 ホテル 千葉 銚子', key: 'inubosaki_cliff', label: '千葉県銚子市ふるさと納税・本州一早い日の出と白亜の犬吠埼灯台オーシャンビュー宿' },
      { query: '室戸岬 温泉 ホテル 高知', key: 'muroto_cliff', label: '高知県室戸市ふるさと納税・太平洋の怒濤と白亜の室戸岬灯台＆海洋深層水リゾート' }
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
  console.log(`\nAll Round 15 hotels successfully stored into ${allSeasonalPath}`);
}

main();
