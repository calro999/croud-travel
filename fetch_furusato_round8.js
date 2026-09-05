const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-craft-beer-brewery-hotel-stay',
    queries: [
      { query: '軽井沢 クラフトビール ホテル 長野', key: 'karuizawa_beer', label: '長野県軽井沢町ふるさと納税・クラフトビール飲み比べ＆高原リゾート' },
      { query: '修善寺 ベアードビール 静岡 温泉 旅館', key: 'shuzenji_beer', label: '静岡県伊豆市ふるさと納税・ブルワリーガーデン修善寺＆狩野川ステイ' },
      { query: '小樽 ビール ホテル 北海道 運河', key: 'otaru_beer', label: '北海道小樽市ふるさと納税・小樽運河沿いの醸造パブ＆クラシックホテル' }
    ]
  },
  {
    slug: 'furusato-tax-tangible-cultural-property-architectural-ryokan-stay',
    queries: [
      { query: '修善寺 新井旅館 静岡 文化財', key: 'shuzenji_arai', label: '静岡県伊豆市ふるさと納税・国の登録有形文化財・宮大工数寄屋造りの新井旅館' },
      { query: '渋温泉 歴史の宿 金具屋 長野', key: 'shibu_kanaguya', label: '長野県山ノ内町ふるさと納税・昭和初期の木造四階建て文化財建築・歴史の宿金具屋' },
      { query: '箱根 塔ノ沢 環翠楼 神奈川 旅館', key: 'hakone_kansuirou', label: '神奈川県箱根町ふるさと納税・早川渓谷沿いに佇む登録有形文化財・老舗銘宿環翠楼' }
    ]
  },
  {
    slug: 'furusato-tax-morning-market-hamayaki-seafood-inn-stay',
    queries: [
      { query: '八戸 館鼻岸壁朝市 青森 ホテル', key: 'hachinohe_market', label: '青森県八戸市ふるさと納税・日本最大級の館鼻岸壁朝市＆獲れたてイカ・サバ尽くし' },
      { query: '沼津港 浜焼き ホテル 静岡 海鮮', key: 'numazu_market', label: '静岡県沼津市ふるさと納税・沼津港市場直結の深海魚・アジ干物・海鮮浜焼きステイ' },
      { query: '高知 ひろめ市場 ホテル カツオ', key: 'kochi_market', label: '高知県高知市ふるさと納税・ひろめ市場徒歩圏内の名宿＆藁焼きカツオのタタキ' }
    ]
  },
  {
    slug: 'furusato-tax-oceanfront-wave-sound-healing-stay',
    queries: [
      { query: '東伊豆 稲取 オーシャンビュー 露天風呂 静岡', key: 'inatori_ocean', label: '静岡県東伊豆町ふるさと納税・全室オーシャンビュー＆波音に包まれる海岸露天風呂' },
      { query: '南房総 白浜 海岸 ホテル 千葉', key: 'minamiboso_ocean', label: '千葉県南房総市ふるさと納税・房総半島最南端の太平洋パノラマ＆潮騒リゾート' },
      { query: '沖縄 読谷村 オーシャンフロント リゾート ホテル', key: 'yomitan_ocean', label: '沖縄県読谷村ふるさと納税・残波岬のコバルトブルー東シナ海一望ラグジュアリー' }
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
  console.log(`\nAll Round 8 hotels successfully stored into ${allSeasonalPath}`);
}

main();
