const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-jozankei-onsen-keikoku-retreat-stay',
    queries: [
      { key: 'jozankei_suizan', query: '定山渓第一寶亭留 翠山亭', label: '札幌市ふるさと納税・自家源泉三本を贅沢にブレンド！源泉掛け流し露天風呂と炭火会席' },
      { key: 'jozankei_mizuno', query: '定山渓 ゆらく草庵', label: '札幌市ふるさと納税・全室天然温泉客室風呂付き！豊平川の渓谷美を望む大人の和風リゾート' },
      { key: 'jozankei_shika', query: '定山渓 鶴雅リゾートスパ 森の謌', label: '札幌市ふるさと納税・森の物語を紡ぐ癒やしのオアシス！ビュッフェダイニングと露天風呂' }
    ]
  },
  {
    slug: 'furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
    queries: [
      { key: 'shuzenji_kikuya', query: '湯回廊 菊屋', label: '伊豆市ふるさと納税・創業四百年・夏目漱石ゆかりの回廊宿！桂川のせせらぎと趣異なる湯巡り' },
      { key: 'shuzenji_araiya', query: '修善寺温泉 新井旅館', label: '伊豆市ふるさと納税・国の登録有形文化財十五棟！横山大観ら文人墨客が愛した名建築と名湯「天平大浴堂」' },
      { key: 'shuzenji_sora', query: '宙 SORA 渡月荘金龍', label: '伊豆市ふるさと納税・一万五千坪の日本庭園に抱かれるデザイナーズ旅館！円形露天風呂と光の庭園' }
    ]
  },
  {
    slug: 'furusato-tax-wakura-onsen-noto-ocean-stay',
    queries: [
      { key: 'wakura_notoraku', query: '和倉温泉 日本の宿 のと楽', label: '七尾市ふるさと納税・七尾湾を一望するパノラマ絶景露天風呂！能登牛と能登の山海の旬味' },
      { key: 'wakura_kaikan', query: '和倉温泉 ゆけむりの宿 美湾荘', label: '七尾市ふるさと納税・創業百二十年・海一望の特等席！七尾湾の潮騒と能登会席' },
      { key: 'wakura_housen', query: '和倉温泉 宝仙閣', label: '七尾市ふるさと納税・総湯のすぐ隣に佇む心のこもったもてなし宿！掛け流しの名湯と能登の海の幸' }
    ]
  },
  {
    slug: 'furusato-tax-akan-onsen-marimo-heritage-stay',
    queries: [
      { key: 'akan_tsuruga', query: 'あかん遊久の里 鶴雅', label: '釧路市ふるさと納税・阿寒湖と阿寒連峰を一望する展望大浴場！北海道最大級の温泉リゾート' },
      { key: 'akan_hinano', query: 'あかん湖 鶴雅ウイングス', label: '釧路市ふるさと納税・アイヌ文様アートと岩盤浴＆スパ！阿寒湖畔のモダン温泉ホテル' },
      { key: 'akan_hanayuuka', query: 'あかん 鶴雅別荘 鄙の座', label: '釧路市ふるさと納税・全室露天風呂付き・大人のための至極の隠れ宿！オールインクルーシブの贅' }
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

  const results = {};

  for (const config of furusatoConfigs) {
    console.log(`\n=== Processing ${config.slug} ===`);
    results[config.slug] = [];

    for (const q of config.queries) {
      console.log(`Searching for: ${q.query}...`);
      const hotels = await searchRakutenHotels(q.query, 1);
      await sleep(1500);

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`✓ Found: ${hotel.hotelName} (ID: ${hotel.hotelNo})`);
        results[config.slug].push({
          ...q,
          hotel
        });
        allSeasonal[hotel.hotelNo] = hotel;
      } else {
        console.log(`✗ Not found: ${q.query}`);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2));
  fs.writeFileSync('round100_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 100.');
}

main();
