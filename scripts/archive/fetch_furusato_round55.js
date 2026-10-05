const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-scenic-drives-highland-resort-stay',
    queries: [
      { query: '長野 白樺湖 ビーナスライン 池の平ホテル', fallback: '白樺リゾート　池の平ホテル', key: 'drive_venus', label: '長野県茅野市・立科町ふるさと納税・高原を駆け抜ける日本屈指の絶景道「ビーナスライン」白樺リゾート池の平ホテル' },
      { query: '群馬 草津温泉 志賀草津高原ルート 季の庭', fallback: '湯宿　季の庭（ときのにわ）', key: 'drive_shiga', label: '群馬県草津町ふるさと納税・標高2172m日本国道最高地点を越える天空ロード「志賀草津高原ルート」湯宿季の庭' },
      { query: '大分 湯布院 やまなみハイウェイ ゆふいん 月燈庵', fallback: 'ゆふいん月燈庵', key: 'drive_yamanami', label: '大分県由布市・竹田市ふるさと納税・阿蘇くじゅう連山を望む九州屈指のスカイライン「やまなみハイウェイ」ゆふいん月燈庵' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-bridges-heritage-stay',
    queries: [
      { query: '東京 日本橋 マンダリン オリエンタル 東京', fallback: 'ロイヤルパークホテル', key: 'bridge_nihonbashi', label: '東京都中央区ふるさと納税・五街道の起点にして日本の道路元標「日本橋」ロイヤルパークホテル' },
      { query: '山口 岩国 錦帯橋 岩国国際観光ホテル', fallback: '錦帯橋温泉　岩国国際観光ホテル', key: 'bridge_kintaikyo', label: '山口県岩国市ふるさと納税・五連の木造アーチが描く錦川の奇跡「錦帯橋」錦帯橋温泉岩国国際観光ホテル' },
      { query: '長崎 めがね橋 温泉 和泉屋', fallback: 'にっしょうかん　別邸　紅葉亭', key: 'bridge_megane', label: '長崎県長崎市ふるさと納税・日本最古のアーチ型石橋・中島川の歴史風情「長崎眼鏡橋」にっしょうかん別邸紅葉亭' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-towns-canal-stay',
    queries: [
      { query: '滋賀 近江八幡 休暇村 近江八幡', fallback: '休暇村　近江八幡', key: 'town_omihachiman', label: '滋賀県近江八幡市ふるさと納税・白壁土蔵と水郷巡り・近江商人の伝統息づく八幡堀「休暇村 近江八幡」' },
      { query: '福岡 柳川 川下り 柳川藩主立花邸 御花', fallback: '柳川藩主立花邸　御花', key: 'town_yanagawa', label: '福岡県柳川市ふるさと納税・水路をゆったり進むどんこ舟川下りと名物うなぎのせいろ蒸し「柳川藩主立花邸 御花」' },
      { query: '茨城 潮来 水郷 潮来ホテル', fallback: '潮来ホテル', key: 'town_itako', label: '茨城県潮来市ふるさと納税・前川あやめ園と十二橋めぐり・利根川下流の水郷情緒「潮来ホテル」' }
    ]
  },
  {
    slug: 'furusato-tax-kumano-kodo-world-heritage-stay',
    queries: [
      { query: '和歌山 田辺 熊野古道 湯の峰温泉 旅館 あづまや', fallback: '湯の峰温泉　旅館あづまや', key: 'kumano_yunomine', label: '和歌山県田辺市ふるさと納税・世界遺産「つぼ湯」湧く日本最古の温泉地・熊野古道中辺路「湯の峰温泉 旅館あづまや」' },
      { query: '和歌山 那智勝浦 温泉 熊野古道 かつうら御苑', fallback: 'かつうら御苑', key: 'kumano_katsuura', label: '和歌山県那智勝浦町ふるさと納税・大門坂と那智の滝・生マグロと絶景露天「南紀勝浦温泉 かつうら御苑」' },
      { query: '和歌山 白浜 熊野古道 浜千鳥の湯 海舟', fallback: '浜千鳥の湯　海舟（共立リゾート）', key: 'kumano_kaishu', label: '和歌山県白浜町ふるさと納税・紀伊山地の霊場と参詣道巡礼の拠点・海景混浴露天「浜千鳥の湯 海舟」' }
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

  const round55Hotels = {};

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

        round55Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round55_hotels.json'), JSON.stringify(round55Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 55 hotels to round55_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
