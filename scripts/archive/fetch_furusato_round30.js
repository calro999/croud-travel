const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-primeval-forests-nature-stay',
    queries: [
      { query: '知床 ホテル 北海道 世界遺産 温泉', fallback: '北こぶし知床　ホテル＆リゾート', key: 'forest_shiretoko', label: '北海道斜里町ふるさと納税・世界自然遺産手つかずの原生林「知床国立公園」ヒグマ・エゾシカの楽園と北こぶし知床ホテル＆リゾート' },
      { query: '屋久島 ホテル 旅館 白谷雲水峡 縄文杉', fallback: '屋久島いわさきホテル', key: 'forest_yakushima', label: '鹿児島県屋久島町ふるさと納税・樹齢数千年の巨木息づく原生林「屋久島・白谷雲水峡」苔むす森と屋久島いわさきホテル' },
      { query: '白神山地 温泉 青森 不老ふ死温泉 旅館', fallback: '黄金崎不老ふ死温泉', key: 'forest_shirakami', label: '青森県深浦町・鰺ヶ沢町ふるさと納税・世界最大級のブナ原生林「白神山地・青池」と波打ち際の露天風呂黄金崎不老ふ死温泉' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sand-dunes-coastal-stay',
    queries: [
      { query: '鳥取砂丘 ホテル 旅館 温泉 鳥取', fallback: '鳥取温泉　観水庭　こぜにや', key: 'dune_tottori', label: '鳥取県鳥取市ふるさと納税・日本最大級の起伏美を誇る奇跡の砂丘「鳥取砂丘」ラクダ遊歩と松葉ガニ・鳥取温泉観水庭こぜにや' },
      { query: '吹上浜 ホテル 鹿児島 温泉 旅館', fallback: '吹上砂丘荘', key: 'dune_fukiage', label: '鹿児島県日置市・南さつま市ふるさと納税・白砂青松が47km続く日本屈指の砂丘「吹上浜」砂の祭典と伊集院温泉ステイ' },
      { query: '浜松 ホテル 静岡 中田島砂丘 浜名湖', fallback: 'オークラアクトシティホテル浜松', key: 'dune_nakatajima', label: '静岡県浜松市中央区ふるさと納税・遠州灘の潮風と美しい風紋が描く「中田島砂丘」浜名湖うなぎとオークラアクトシティホテル浜松' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-buddhas-heritage-stay',
    queries: [
      { query: '奈良 東大寺 ホテル 旅館 奈良公園', fallback: '奈良ホテル', key: 'buddha_nara', label: '奈良県奈良市ふるさと納税・世界最大の木造建築と盧舎那仏「東大寺大仏」若草山鹿の群れと名門クラシック奈良ホテル' },
      { query: '鎌倉 ホテル 旅館 大仏 由比ヶ浜', fallback: '鎌倉プリンスホテル', key: 'buddha_kamakura', label: '神奈川県鎌倉市ふるさと納税・青空の下に鎮座する国宝「鎌倉大仏（高徳院）」相模湾と富士山を望む七里ヶ浜鎌倉プリンスホテル' },
      { query: '高岡 大仏 ホテル 富山 旅館', fallback: '雨晴温泉　磯はなび', key: 'buddha_takaoka', label: '富山県高岡市ふるさと納税・日本一の美男と称される鋳物の都の象徴「高岡大仏」雨晴海岸立山連峰パノラマと雨晴温泉磯はなび' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    queries: [
      { query: '弘前 桜 ホテル 青森 温泉', fallback: 'アートホテル弘前シティ', key: 'cherry_hirosaki', label: '青森県弘前市ふるさと納税・お堀一面を覆うピンクの花筏「弘前公園の夜桜」二千六百本のライトアップとアートホテル弘前シティ' },
      { query: '上越 高田城 ホテル 新潟 桜', fallback: 'アートホテル上越', key: 'cherry_takada', label: '新潟県上越市ふるさと納税・四千本のボンボリが三重櫓を照らす「高田城址公園の夜桜」日本三大夜桜とアートホテル上越' },
      { query: '伊那 高遠 桜 旅館 長野 温泉', fallback: '仙流荘', key: 'cherry_takato', label: '長野県伊那市高遠町ふるさと納税・天下第一の桜と称される濃いピンク「高遠城址公園の夜桜」南アルプスパノラマと伊那谷名湯宿' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 30 hotels using openapi helper...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(1500);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(1500);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 30 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
