const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-sea-caves-mystery-stay',
    queries: [
      { query: '西伊豆 堂ヶ島 温泉 旅館 天窓洞 海遊亭', fallback: '堂ヶ島温泉ホテル', key: 'seacave_dogashima', label: '静岡県西伊豆町ふるさと納税・青の洞窟と天然記念物の天窓「堂ヶ島天窓洞」堂ヶ島温泉ホテル' },
      { query: '糸島 芥屋の大門 リゾート ホテル', fallback: 'グローカルホテル糸島', key: 'seacave_keya', label: '福岡県糸島市ふるさと納税・日本最大の玄武岩柱状節理海食洞「芥屋の大門」糸島美食グローカルホテル糸島' },
      { query: '唐津 七ツ釜 温泉 旅館 洋々閣', fallback: '唐津　網元の宿　汐湯凪の音', key: 'seacave_nanatsugama', label: '佐賀県唐津市ふるさと納税・荒波が穿った七つの神秘の洞門「屋形石の七ツ釜」汐湯凪の音' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pagodas-heritage-stay',
    queries: [
      { query: '奈良 斑鳩 法隆寺 旅館 ホテル', fallback: '門前宿　和空法隆寺', key: 'pagoda_horyuji', label: '奈良県斑鳩町ふるさと納税・世界最古の木造五重塔・飛鳥建築の粋「法隆寺五重塔」門前宿和空法隆寺' },
      { query: '京都 東寺 五重塔 ホテル', fallback: 'リーガロイヤルホテル京都', key: 'pagoda_toji', label: '京都府京都市ふるさと納税・日本一の高さを誇る木造塔・古都のランドマーク「東寺五重塔」リーガロイヤルホテル京都' },
      { query: '山形 鶴岡 湯野浜温泉 羽黒山 五重塔', fallback: '湯野浜温泉　亀や', key: 'pagoda_haguro', label: '山形県鶴岡市ふるさと納税・杉木立に佇む国宝の美・東北最古の塔「羽黒山五重塔」名湯湯野浜温泉亀や' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ekiben-gourmet-stay',
    queries: [
      { query: '群馬 安中 磯部温泉 峠の釜めし 旅館', fallback: '磯部温泉　舌切雀のお宿　ホテル磯部ガーデン', key: 'ekiben_kamameshi', label: '群馬県安中市ふるさと納税・益子焼の陶器に山の幸を炊き込んだ元祖「峠の釜めし」磯部温泉ホテル磯部ガーデン' },
      { query: '北海道 森町 函館 温泉 いかめし ホテル', fallback: 'ラ・ジェント・ステイ函館駅前', key: 'ekiben_ikameshi', label: '北海道森町・函館市ふるさと納税・もち米と真イカの秘伝タレ炊き込み「元祖森名物いかめし」ラ・ジェント・ステイ函館駅前' },
      { query: '三重 松阪 牛肉弁当 牛銀 旅館', fallback: '松阪シティホテル', key: 'ekiben_matsusaka', label: '三重県松阪市ふるさと納税・モー太郎弁当と極上黒毛和牛の贅「松阪牛駅弁」松阪牛美食ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-kannon-temples-stay',
    queries: [
      { query: '浅草 浅草寺 観音 ホテル', fallback: '浅草ビューホテル', key: 'kannon_sensoji', label: '東京都台東区ふるさと納税・江戸庶民の信仰を集める都内最古の霊場「浅草寺（浅草観音）」浅草ビューホテル' },
      { query: '滋賀 大津 石山寺 温泉 旅館', fallback: 'びわ湖大津プリンスホテル', key: 'kannon_ishiyamadera', label: '滋賀県大津市ふるさと納税・紫式部が源氏物語を起筆した西国第十三番札所「石山寺（石山観音）」びわ湖大津プリンスホテル' },
      { query: '愛知 名古屋 大須 観音 ホテル', fallback: '名古屋観光ホテル', key: 'kannon_osu', label: '愛知県名古屋市ふるさと納税・尾張名所図会に描かれた下町の信仰と賑わい「大須観音」名古屋観光ホテル' }
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
      await sleep(3500);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (err) {
        console.error(`Error searching "${q.query}":`, err.message);
      }

      if (!list || list.length === 0) {
        console.log(`Falling back to: "${q.fallback}"...`);
        await sleep(3500);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (err) {
          console.error(`Fallback error:`, err.message);
        }
      }

      if (list && list.length > 0) {
        const primary = list[0];
        console.log(` -> Found: [${primary.hotelName}] Price: ¥${primary.minPrice || primary.hotelMinCharge} Rating: ${primary.reviewAverage}`);
        collected[q.key] = {
          hotelNo: primary.hotelNo,
          hotelName: primary.hotelName,
          hotelInformationUrl: primary.hotelInformationUrl,
          planListUrl: primary.planListUrl,
          dpPlanListUrl: primary.dpPlanListUrl,
          reviewUrl: primary.reviewUrl,
          hotelKanaName: primary.hotelKanaName,
          hotelSpecial: primary.hotelSpecial,
          hotelMinCharge: primary.hotelMinCharge || primary.minPrice,
          latitude: primary.latitude,
          longitude: primary.longitude,
          postalCode: primary.postalCode,
          address1: primary.address1,
          address2: primary.address2,
          telephoneNo: primary.telephoneNo,
          hotelImageUrl: primary.hotelImageUrl,
          roomImageUrl: primary.roomImageUrl,
          reviewCount: primary.reviewCount,
          reviewAverage: primary.reviewAverage,
          userReview: primary.userReview,
          affiliateUrl: primary.affiliateUrl,
          access: primary.access || '最寄り駅・主要道路よりアクセス良好',
          label: q.label
        };
        db[q.key] = collected[q.key];
      } else {
        console.warn(`WARNING: No hotel found for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'round49_hotels.json'), JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 49 hotels to ${dbPath} and round49_hotels.json!`);
}

main();
