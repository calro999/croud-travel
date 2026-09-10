const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-toya-onsen-lake-view-fireworks-stay',
    queries: [
      { key: 'toya_nonokaze', query: 'ザ レイクビュー TOYA 乃の風リゾート', label: '壮瞥町/洞爺湖町ふるさと納税・全室レイクビュー！屋上天空パノラマ露天風呂と洞爺湖ロングラン花火' },
      { key: 'toya_sunpalace', query: '洞爺サンパレス リゾート＆スパ', label: '有珠郡壮瞥町ふるさと納税・湖と一体化するインフィニティ露天風呂！巨大ウォーターパーク併設' },
      { key: 'toya_kanko', query: '洞爺観光ホテル', label: '洞爺湖町ふるさと納税・洞爺湖畔の特等席！パノラマ大浴場と名物洞窟風呂、四季の会席料理' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-onsen-suginoi-jigoku-stay',
    queries: [
      { key: 'beppu_suginoi', query: '別府温泉 杉乃井ホテル', label: '別府市ふるさと納税・五段の棚田状露天風呂「棚湯」！噴水ショーと西日本最大級エンタメ温泉リゾート' },
      { key: 'beppu_termes', query: '潮騒の宿 晴海', label: '別府市ふるさと納税・全室海一望の源泉掛け流し客室露天風呂！別府湾の潮騒と海の恵み会席' },
      { key: 'beppu_kannawa', query: '山荘 神和苑', label: '別府市ふるさと納税・鉄輪温泉の高台に佇む名門！能舞台と日本庭園、自家源泉掛け流しの湯' }
    ]
  },
  {
    slug: 'furusato-tax-kurokawa-onsen-satoyama-roten-stay',
    queries: [
      { key: 'kurokawa_noshiyu', query: '黒川温泉 お宿 のし湯', label: '南小国町ふるさと納税・雑木林に抱かれる隠れ家！茅葺き門と野趣あふれる大野天風呂' },
      { key: 'kurokawa_sanga', query: '黒川温泉 旅館 山河', label: '南小国町ふるさと納税・三千坪の原生林に佇む秘湯の一軒宿！二つの自家源泉と薬師の湯' },
      { key: 'kurokawa_yumoto', query: '黒川温泉 黒川荘', label: '南小国町ふるさと納税・びょうぶ岩を望む絶景露天風呂！エメラルドグリーンの名湯と肥後牛' }
    ]
  },
  {
    slug: 'furusato-tax-manza-onsen-cloud-sulfur-stay',
    queries: [
      { key: 'manza_nisshinkan', query: '万座温泉 日進舘', label: '嬬恋村ふるさと納税・日本屈指の白濁硫黄泉！九つの天然温泉巡りと健康長寿の湯治宿' },
      { key: 'manza_prince', query: '万座プリンスホテル', label: '嬬恋村ふるさと納税・標高千八百メートルの絶景露天風呂「こまくさの湯」！雲上のパノラマステイ' },
      { key: 'manza_kogen', query: '万座高原ホテル', label: '嬬恋村ふるさと納税・名物「石庭露天風呂」に八つの湯船！四色の異なる源泉巡りと嬬恋キャベツ' }
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
  fs.writeFileSync('round101_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 101.');
}

main();
