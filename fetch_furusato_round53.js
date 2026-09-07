const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-rivers-riverside-stay',
    queries: [
      { query: '群馬 水上温泉 利根川 松乃井', fallback: '源泉湯の宿　松乃井', key: 'river_tone', label: '群馬県みなかみ町ふるさと納税・坂東太郎「利根川」源流のせせらぎと四つの源泉巡り「水上温泉 源泉湯の宿松乃井」' },
      { query: '福岡 うきは 筑後川温泉 清乃屋', fallback: '筑後川温泉　清乃屋', key: 'river_chikugo', label: '福岡県うきは市ふるさと納税・筑紫次郎「筑後川」の優美な流れと美肌の自噴温泉「筑後川温泉 清乃屋」' },
      { query: '徳島 三好 吉野川 大歩危 峡谷の湯宿 大歩危峡まんなか', fallback: '峡谷の湯宿　大歩危峡まんなか', key: 'river_yoshino', label: '徳島県三好市ふるさと納税・四国三郎「吉野川」激流の渓谷美を眼下に望む露天風呂「大歩危峡まんなか」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-karsts-highland-stay',
    queries: [
      { query: '山口 美祢 秋吉台 温泉 天宿の館 絵堂温泉', fallback: '天宿の館　絵堂温泉', key: 'karst_akiyoshi', label: '山口県美祢市ふるさと納税・東洋一の白大理石カルスト台地を望む展望露天「秋吉台・天宿の館 絵堂温泉」' },
      { query: '高知 梼原 四国カルスト 雲の上のホテル', fallback: '高原ふれあいの家　天狗荘', key: 'karst_shikoku', label: '高知県梼原町ふるさと納税・標高1400m天空の別世界・四国カルストと星空「星ふるヴィレッジTENGU」' },
      { query: '福岡 北九州 平尾台 ホテル クラウンパレス小倉', fallback: 'ホテルクラウンパレス小倉', key: 'karst_hiraodai', label: '福岡県北九州市ふるさと納税・羊群原の雄大なカルスト台地・平尾台散策の拠点「ホテルクラウンパレス小倉」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-wagyu-beef-luxury-stay',
    queries: [
      { query: '三重 松阪 松阪牛 鯛屋旅館', fallback: '鯛屋旅館', key: 'wagyu_matsusaka', label: '三重県松阪市ふるさと納税・創業二百余年・肉の芸術品松阪牛元祖の味と城下町情緒「鯛屋旅館」' },
      { query: '兵庫 有馬温泉 神戸牛 欽山', fallback: '有馬温泉　欽山', key: 'wagyu_kobe', label: '兵庫県神戸市ふるさと納税・最高峰のA5特選神戸ビーフ会席と金泉名湯・数寄屋造りの名料亭旅館「有馬温泉 欽山」' },
      { query: '山形 米沢 米沢牛 小野川温泉 名湯の宿 吾妻荘', fallback: '名湯の宿　吾妻荘', key: 'wagyu_yonezawa', label: '山形県米沢市ふるさと納税・極上の霜降り米沢牛サーロインと美肌の硫黄泉「小野川温泉 名湯の宿 吾妻荘」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-dunes-oceanview-stay',
    queries: [
      { query: '鳥取 鳥取砂丘 温泉 岩井温泉 明石家', fallback: '岩井温泉　岩井屋', key: 'dune_tottori', label: '鳥取県鳥取市・岩美町ふるさと納税・日本屈指の風紋パノラマ・鳥取砂丘と山陰最古の秘湯「岩井温泉 岩井屋」' },
      { query: '静岡 御前崎 遠州砂丘 御前崎グランドホテル', fallback: '御前崎グランドホテル', key: 'dune_enshu', label: '静岡県御前崎市ふるさと納税・遠州灘の雄大な波と風紋の丘・オーシャンフロント絶景「御前崎グランドホテル」' },
      { query: '鹿児島 南さつま 吹上浜 温泉 いせえび荘', fallback: 'いせえび荘', key: 'dune_fukiage', label: '鹿児島県南さつま市・南九州市ふるさと納税・東シナ海に沈む夕日と日本三大砂丘吹上浜・開聞岳「いせえび荘」' }
    ]
  }
];

async function run() {
  const allSeasonalPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let allSeasonalHotels = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonalHotels = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf-8'));
    } catch (e) {
      console.error('Error reading all_seasonal_rakuten_hotels.json:', e);
    }
  }

  const round53Hotels = {};

  for (const cfg of configs) {
    console.log(`\n=== Fetching for category: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching Rakuten API: "${q.query}" (fallback: "${q.fallback}")...`);
      let hotels = await searchRakutenHotels(q.query, 1);
      await sleep(3500); // 厳守: 楽天APIレート制限対策

      if (!hotels || hotels.length === 0) {
        console.log(`No results for "${q.query}". Trying fallback: "${q.fallback}"...`);
        hotels = await searchRakutenHotels(q.fallback, 1);
        await sleep(3500);
      }

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`  -> SUCCESS: Found "${hotel.hotelName}" (${hotel.hotelNo})`);
        const itemData = {
          hotelNo: hotel.hotelNo,
          hotelName: hotel.hotelName,
          hotelKanaName: hotel.hotelKanaName || '',
          hotelInformationUrl: hotel.hotelInformationUrl,
          planListUrl: hotel.planListUrl,
          dpPlanListUrl: hotel.dpPlanListUrl,
          reviewUrl: hotel.reviewUrl,
          hotelImageUrl: hotel.hotelImageUrl || '',
          hotelThumbnailUrl: hotel.hotelThumbnailUrl || '',
          roomImageUrl: hotel.roomImageUrl || '',
          hotelMinCharge: hotel.hotelMinCharge || 0,
          latitude: hotel.latitude,
          longitude: hotel.longitude,
          postalCode: hotel.postalCode,
          address1: hotel.address1,
          address2: hotel.address2,
          telephoneNo: hotel.telephoneNo,
          access: hotel.access,
          parkingInformation: hotel.parkingInformation,
          nearestStation: hotel.nearestStation,
          hotelHeaderImageUrl: hotel.hotelHeaderImageUrl || '',
          userReview: hotel.userReview || '',
          reviewCount: hotel.reviewCount || 0,
          reviewAverage: hotel.reviewAverage || 0,
          label: q.label,
          query: q.query
        };

        round53Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round53_hotels.json'), JSON.stringify(round53Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 53 hotels to round53_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
