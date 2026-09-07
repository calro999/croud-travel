const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-high-mountain-passes-stay',
    queries: [
      { query: '志賀高原 万座温泉 渋峠 ホテル', fallback: '万座温泉 日進舘', key: 'pass_shibutoge', label: '群馬県草津町・長野県山ノ内町ふるさと納税・国道最高地点標高2172m雲海パノラマ「渋峠」万座温泉日進舘' },
      { query: '富士山 御殿場 温泉 ホテル 富士山スカイライン', fallback: 'レンブラントプレミアム富士御殿場', key: 'pass_fuji', label: '静岡県御殿場市・富士宮市ふるさと納税・富士山五合目へ駆け上がる天空ワインディング「富士山スカイライン」富士山一望温泉リゾート' },
      { query: '岐阜 本巣 根尾 温泉 ホテル', fallback: 'うすずみ温泉　四季彩館', key: 'pass_nukumi', label: '岐阜県本巣市ふるさと納税・大自然の秘境峠と清流根尾谷「温見峠ルート」うすずみ温泉四季彩館' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-terraced-rice-fields-stay',
    queries: [
      { query: '十日町 松之山温泉 星峠の棚田 旅館', fallback: 'まつだい芝峠温泉　雲海', key: 'tanada_hoshitoge', label: '新潟県十日町市ふるさと納税・雲海と水鏡が織りなす東洋の絶景「星峠の棚田」雲海を望むまつだい芝峠温泉雲海' },
      { query: '輪島 能登 白米千枚田 温泉 ホテル', fallback: '輪島温泉 八汐', key: 'tanada_shiroyone', label: '石川県輪島市ふるさと納税・日本海へ雪崩れ込む千枚のあぜ道「白米千枚田」能登牛と輪島温泉八汐' },
      { query: '熊野 丸山千枚田 温泉 旅館', fallback: '入鹿温泉ホテル瀞流荘', key: 'tanada_maruyama', label: '三重県熊野市ふるさと納税・千三百枚の石積みが描く日本の原風景「丸山千枚田」瀞峡の美と入鹿温泉ホテル瀞流荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-strange-festivals-stay',
    queries: [
      { query: '諏訪 諏訪大社 上諏訪温泉 御柱祭 ホテル', fallback: '上諏訪温泉　油屋旅館', key: 'matsuri_onbashira', label: '長野県諏訪市ふるさと納税・七年に一度の天下の大祭・巨木落としの勇壮「諏訪大社御柱祭」上諏訪温泉油屋旅館' },
      { query: '稲沢 国府宮 一宮 ホテル', fallback: '一宮シティホテル', key: 'matsuri_hadaka', label: '愛知県稲沢市・一宮市ふるさと納税・数千の裸男が神男に群がる熱気の厄除け「国府宮はだか祭」尾張の美食ステイ' },
      { query: '男鹿 なまはげ 温泉 旅館 男鹿観光ホテル', fallback: '男鹿温泉　結いの宿　別邸　つばき', key: 'matsuri_namahage', label: '秋田県男鹿市ふるさと納税・ユネスコ無形文化遺産・泣く子はいねがの咆哮「男鹿のナマハゲ」男鹿温泉郷別邸つばき' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-roof-tile-towns-stay',
    queries: [
      { query: '淡路島 洲本 温泉 淡路瓦 旅館', fallback: '淡路島観光ホテル', key: 'tile_awaji', label: '兵庫県洲本市・南あわじ市ふるさと納税・日本三大瓦の筆頭・美しいいぶし銀の輝き「淡路瓦の里」淡路牛と淡路島観光ホテル' },
      { query: '三州 高浜 刈谷 ホテル', fallback: 'エースイン刈谷', key: 'tile_sanshu', label: '愛知県高浜市・刈谷市ふるさと納税・日本一のシェアを誇る三州瓦の窯元「三州瓦の町」三河湾の海の幸と快適ステイ' },
      { query: '島根 江津 温泉 石州瓦 旅館', fallback: '有福温泉　旅館', key: 'tile_sekishu', label: '島根県江津市・浜田市ふるさと納税・赤瓦が日本海の夕日に映える伝統工芸「石州瓦の町」開湯1300年の名湯有福温泉ステイ' }
    ]
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = {};
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  const collected = {};

  for (const group of configs) {
    console.log(`\n========================================`);
    console.log(`Processing Group: ${group.slug}`);
    console.log(`========================================`);

    for (const q of group.queries) {
      console.log(`Searching for: "${q.query}" (key: ${q.key})...`);
      await sleep(3000);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (e) {
        console.warn('Query error:', e.message);
      }
      await sleep(3000);

      if (!list || list.length === 0) {
        console.log(`  -> Trying fallback: "${q.fallback}"...`);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (e) {
          console.warn('Fallback error:', e.message);
        }
        await sleep(3000);
      }

      if (list && list.length > 0) {
        const hotel = list[0];
        console.log(`  -> FOUND: ${hotel.hotelName} (No: ${hotel.hotelNo}) | MinPrice: ¥${hotel.hotelMinCharge} | Review: ${hotel.reviewAverage}`);
        collected[q.key] = {
          ...hotel,
          featureKey: q.key,
          featureLabel: q.label
        };
        db[q.key] = collected[q.key];
        db[hotel.hotelNo] = collected[q.key];
      } else {
        console.warn(`  -> FAILED to find hotel for key: ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync('round46_hotels.json', JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\n=== Done! Saved ${Object.keys(collected).length} hotels to all_seasonal_rakuten_hotels.json and round46_hotels.json ===`);
}

main().catch(err => {
  console.error('Fatal error in main:', err);
  process.exit(1);
});
