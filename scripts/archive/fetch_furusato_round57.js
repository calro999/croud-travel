const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-rapids-river-stay',
    queries: [
      { query: '山形 最上川 舟下り 高見屋 最上川別邸 紅', fallback: '高見屋　最上川別邸　紅', key: 'rapid_mogami', label: '山形県戸沢村ふるさと納税・五月雨をあつめて早し最上川・芭蕉ゆかりの舟下りと清流露天「最上川別邸 紅」' },
      { query: '山梨 富士川 下部温泉 下部ホテル', fallback: '下部温泉　下部ホテル', key: 'rapid_fuji', label: '山梨県身延町ふるさと納税・富士山の懐を貫く急流富士川と信玄の隠し湯「下部温泉 下部ホテル」' },
      { query: '熊本 人吉 球磨川 温泉 あゆの里', fallback: '清流山水花　あゆの里', key: 'rapid_kuma', label: '熊本県人吉市ふるさと納税・日本三大急流球磨川のラフティングと木炭・アユの美食「清流山水花 あゆの里」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    queries: [
      { query: '青森 弘前 桜 弘前パークホテル', fallback: 'アートホテル弘前シティ', key: 'sakura_hirosaki', label: '青森県弘前市ふるさと納税・二千六百本の夜桜と濠を埋め尽くす花筏パノラマ「弘前公園」アートホテル弘前シティ' },
      { query: '新潟 上越 高田城 夜桜 アートホテル上越', fallback: 'アートホテル上越', key: 'sakura_takada', label: '新潟県上越市ふるさと納税・四千本のぼんぼりに照らされる高田城三重櫓と夜桜「日本三大夜桜・高田城址公園」アートホテル上越' },
      { query: '東京 上野 桜 ホテルモントレ上野', fallback: 'ホテルモントレ上野', key: 'sakura_ueno', label: '東京都台東区ふるさと納税・寛永寺の昔から江戸庶民に愛され続ける桜の名所「上野恩賜公園」ホテルモントレ上野' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fireworks-resort-stay',
    queries: [
      { query: '秋田 大仙 大曲花火 ホテルルートイン大曲駅前', fallback: 'ホテルルートイン大曲駅前', key: 'fireworks_omagari', label: '秋田県大仙市ふるさと納税・全国花火競技大会・内閣総理大臣賞を競う日本最高峰の花火芸術「大曲の花火」大曲ステイ' },
      { query: '新潟 長岡 花火 ホテルニューオータニ長岡', fallback: 'ホテルニューオータニ長岡', key: 'fireworks_nagaoka', label: '新潟県長岡市ふるさと納税・復興の祈りを捧げる正三尺玉とフェニックス花火「長岡まつり大花火大会」ホテルニューオータニ長岡' },
      { query: '茨城 土浦 全国花火 ホテル マロウド筑波', fallback: 'ホテルマロウド筑波', key: 'fireworks_tsuchiura', label: '茨城県土浦市ふるさと納税・秋の夜空を彩る煙火芸術の頂上決戦「土浦全国花火競技大会」ホテルマロウド筑波' }
    ]
  },
  {
    slug: 'furusato-tax-famous-castles-stone-walls-stay',
    queries: [
      { query: '長野 松本 松本ホテル花月', fallback: '松本ホテル花月', key: 'castle_matsumoto', label: '長野県松本市ふるさと納税・国宝五重天守と北アルプスを望む城下町の名門クラシックホテル「松本ホテル花月」' },
      { query: '兵庫 姫路 白鷺城 ホテルモントレ姫路', fallback: 'ホテルモントレ姫路', key: 'castle_himeji', label: '兵庫県姫路市ふるさと納税・世界遺産・白鷺が羽を広げたような美しき国宝天守「姫路城」ホテルモントレ姫路' },
      { query: '熊本 熊本城 熊本ホテルキャッスル', fallback: '熊本ホテルキャッスル（オークラホテルズ＆リゾーツ）', key: 'castle_kumamoto', label: '熊本県熊本市ふるさと納税・武者返しの壮大な石垣と復興の天守閣を一望する迎賓館「熊本ホテルキャッスル」' }
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

  const round57Hotels = {};

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

        round57Hotels[q.key] = itemData;
        allSeasonalHotels[q.key] = itemData;
      } else {
        console.error(`  -> FAILED: Could not find hotel for "${q.query}" or "${q.fallback}"`);
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, 'round57_hotels.json'), JSON.stringify(round57Hotels, null, 2), 'utf-8');
  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonalHotels, null, 2), 'utf-8');
  console.log('\nSaved all Round 57 hotels to round57_hotels.json and updated all_seasonal_rakuten_hotels.json!');
}

run();
