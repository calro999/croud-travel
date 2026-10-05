const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-caves-underground-stay',
    queries: [
      { query: '岩手 岩泉 龍泉洞 龍泉洞温泉ホテル', fallback: '龍泉洞温泉ホテル', key: 'cave_ryusendo', label: '岩手県岩泉町ふるさと納税・世界屈指の透明度を誇るドラゴンブルーの地底湖「龍泉洞」龍泉洞温泉ホテル' },
      { query: '山口 美祢 秋吉台 秋芳洞 山口屋 別館', fallback: '湯田温泉　名勝　山水園', key: 'cave_akiyoshido', label: '山口県美祢市・山口市ふるさと納税・東洋最大の鍾乳洞と百枚皿「秋芳洞」湯田温泉名勝山水園' },
      { query: '高知 香美 龍河洞 温泉 リゾートホテル海辺の果樹園', fallback: 'リゾートホテル　海辺の果樹園', key: 'cave_ryugado', label: '高知県香美市・香南市ふるさと納税・神の壺が眠る悠久の鍾乳洞「龍河洞」リゾートホテル海辺の果樹園' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-oceanview-stay',
    queries: [
      { query: '静岡 三保の松原 富士山 天保荘', fallback: '三保松原口旅館　天保荘', key: 'pine_miho', label: '静岡県静岡市ふるさと納税・世界文化遺産・富士山と松原の絶景パノラマ「三保の松原」割烹旅館天保荘' },
      { query: '佐賀 唐津 虹の松原 唐津シーサイドホテル', fallback: '唐津シーサイドホテル', key: 'pine_niji', label: '佐賀県唐津市ふるさと納税・百万本の黒松が描く緑の弧と玄界灘の絶景「虹の松原」唐津シーサイドホテル' },
      { query: '福井 敦賀 気比の松原 敦賀マンテンホテル駅前', fallback: '北陸自動車道　敦賀トンネル温泉　北国グランドホテル', key: 'pine_kehi', label: '福井県敦賀市ふるさと納税・万葉の歌人に愛された白砂青松の美「気比の松原」敦賀温泉ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-mountain-castles-history-stay',
    queries: [
      { query: '兵庫 朝来 竹田城 雲海 竹田城 城下町 ホテル', fallback: '竹田城　城下町　ホテルＥＮ（えん）', key: 'castle_takeda', label: '兵庫県朝来市ふるさと納税・天空の城・日本のマチュピチュの雲海絶景「竹田城跡」竹田城城下町ホテルEN' },
      { query: '岡山 高梁 備中松山城 雲海 旅館', fallback: '油屋旅館', key: 'castle_bitchu', label: '岡山県高梁市ふるさと納税・現存天守を持つ唯一の山城・雲海に浮かぶ天空の砦「備中松山城」城下町油屋旅館' },
      { query: '岐阜 恵那 岩村城 城下町 旅館', fallback: '岩村山荘', key: 'castle_iwamura', label: '岐阜県恵那市ふるさと納税・日本三大山城・日本三大美村の伝統と女城主の浪漫「岩村城跡」岩村山荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-train-views-scenic-stay',
    queries: [
      { query: '長野 千曲 戸倉上山田温泉 姨捨 ホテル', fallback: '戸倉上山田温泉　遊子　美寸美の宿　ホテル亀屋本店', key: 'train_obasute', label: '長野県千曲市ふるさと納税・善光寺平と千曲川を一望する日本三大車窓「篠ノ井線・姨捨」戸倉上山田温泉ホテル亀屋本店' },
      { query: '熊本 人吉温泉 肥薩線 人吉旅館', fallback: '人吉温泉　人吉旅館', key: 'train_hisatsu', label: '熊本県人吉市ふるさと納税・霧島連峰のパノラマを越える矢岳越え「肥薩線」登録有形文化財・人吉温泉人吉旅館' },
      { query: '北海道 新得 狩勝峠 サホロリゾート', fallback: '十勝サホロリゾート', key: 'train_karikachi', label: '北海道新得町ふるさと納税・十勝平野の大パノラマを見渡す旧狩勝峠「日本三大車窓」十勝サホロリゾート' }
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

  const round54Hotels = {};

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

        round54Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round54_hotels.json'), JSON.stringify(round54Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 54 hotels to round54_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
