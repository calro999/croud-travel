const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-ikaho-onsen-stone-steps-luxury-stay',
    queries: [
      { key: 'ikaho_fukuichi', query: '伊香保温泉 福一', label: '渋川市ふるさと納税・創業四百四十年！石段街最上位に佇む名門「黄金の湯」「白銀の湯」二大名湯' },
      { key: 'ikaho_kishigon', query: '伊香保温泉 岸権旅館', label: '渋川市ふるさと納税・創業天正四年！石段街に面した黄金の湯完全かけ流しと上州牛会席' },
      { key: 'ikaho_moraki', query: '伊香保温泉 ホテル木暮', label: '渋川市ふるさと納税・伊香保随一の湯量！北関東最大級大浴場「子の湯千両」と上州牛料理' }
    ]
  },
  {
    slug: 'furusato-tax-hida-takayama-old-town-luxury-stay',
    queries: [
      { key: 'takayama_honjin', query: '本陣平野屋 花兆庵', label: '高山市ふるさと納税・古い町並み徒歩1分！口コミ総合4.9超の最高峰おもてなしと極上飛騨牛会席' },
      { key: 'takayama_ouka', query: '飛騨亭 花扇', label: '高山市ふるさと納税・神代欅と天然木が香る宿！自家源泉のとろとろ美肌温泉と個室飛騨牛料理' },
      { key: 'takayama_miyagawa', query: '高山観光ホテル', label: '高山市ふるさと納税・北アルプスと高山市街を一望する高台！展望大浴場と飛騨郷土会席' }
    ]
  },
  {
    slug: 'furusato-tax-kurobe-unazuki-onsen-gorge-stay',
    queries: [
      { key: 'unazuki_entaijiso', query: '宇奈月温泉 延対寺荘', label: '黒部市ふるさと納税・創業明治三十三年！黒部川の絶壁を望む渓谷露天風呂と富山湾のキトキト海の幸' },
      { key: 'unazuki_grand', query: '黒部・宇奈月温泉 やまのは', label: '黒部市ふるさと納税・棚田状展望露天風呂「棚湯」から峡谷一望！富山湾バイキングが大人気' },
      { key: 'unazuki_togen', query: '宇奈月温泉 延楽', label: '黒部市ふるさと納税・黒部峡谷を真正面に望む全室峡谷ビュー！樹齢数百年の檜露天風呂と名匠の料理' }
    ]
  },
  {
    slug: 'furusato-tax-tateyama-kurobe-alpen-route-resort-stay',
    queries: [
      { key: 'tateyama_hotel', query: 'ホテル立山', label: '立山町ふるさと納税・標高2450m日本最高所の山岳リゾート！満天の星とご来光・室堂直結' },
      { key: 'tateyama_midagahara', query: '弥陀ヶ原ホテル', label: '立山町ふるさと納税・雲上の高原リゾート！大パノラマの雲海と夕日・高山植物トレッキング' },
      { key: 'tateyama_morinosuiseki', query: '森の風立山', label: '富山市ふるさと納税・立山山麓の美肌温泉！壮大な吹き抜けロビーと富山湾の旬魚会席' }
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
  console.log('\nSuccessfully saved Round 89 hotel data to src/data/all_seasonal_rakuten_hotels.json');
}

main().catch(console.error);
