const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-sand-bath-sunamushi-detox-onsen-stay',
    queries: [
      { key: 'ibusuki_sunamushi', query: '指宿 白水館', label: '指宿市ふるさと納税・元禄風呂と名物砂むし温泉を館内で完結できる至高の温泉旅館' },
      { key: 'beppu_sunamushi', query: '別府温泉 潮騒の宿 晴海', label: '別府市ふるさと納税・上人ヶ浜天然砂湯至近！全室海側露天風呂付きモダン湯宿' },
      { key: 'yamakawa_sunamushi', query: '指宿フェニックスホテル', label: '指宿市ふるさと納税・錦江湾一望の高台で楽しむ館内砂蒸し温泉と絶景リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-brand-maguro-tuna-feast-luxury-inn-stay',
    queries: [
      { key: 'oma_maguro', query: '下風呂温泉 海峡の宿 巧', label: '大間近隣・風間浦村ふるさと納税・津軽海峡本マグロと白濁硫黄泉の極上料理宿' },
      { key: 'katsuura_maguro', query: '南紀勝浦温泉 碧き島の宿 熊野別邸 中の島', label: '那智勝浦町ふるさと納税・専用船で渡る孤島の秘境温泉！生マグロ解体と絶景海中露天' },
      { key: 'misaki_maguro', query: 'マホロバ・マインズ三浦', label: '三浦市ふるさと納税・三崎まぐろ食べ放題と東京湾オーシャンビュー温泉リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-setouchi-island-luxury-ocean-resort-stay',
    queries: [
      { key: 'shodoshima_resort', query: '小豆島国際ホテル', label: '土庄町ふるさと納税・恋人の聖地エンジェルロードが目の前！全室オーシャンビュー温泉' },
      { key: 'sensuijima_resort', query: '鞆の浦温泉 汀邸 遠音近音', label: '福山市ふるさと納税・仙酔島を望む全室温泉露天風呂付き大人の隠れ家宿' },
      { key: 'setoda_resort', query: 'Azumi Setoda', label: '尾道市ふるさと納税・生口島しおまち商店街に佇むアマン創業者プロデュースの極上宿' }
    ]
  },
  {
    slug: 'furusato-tax-strawberry-buffet-sweets-resort-hotel-stay',
    queries: [
      { key: 'tochigi_strawberry', query: 'ホテルエピナール那須', label: '那須町ふるさと納税・とちおとめ＆スカイベリー食べ比べ！豪華いちごスイーツバイキング' },
      { key: 'kobe_strawberry', query: '神戸ベイシェラトン ホテル＆タワーズ', label: '神戸市ふるさと納税・天然温泉スパ＆季節のいちごスイーツビュッフェを堪能' },
      { key: 'chiba_strawberry', query: 'ホテルニューオータニ幕張', label: '千葉市ふるさと納税・スーパーあまおうショートケーキで名高いいちごビュッフェ' }
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
  console.log('\nSuccessfully saved Round 72 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
