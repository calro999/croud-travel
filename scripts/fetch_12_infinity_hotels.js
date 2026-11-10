require('dotenv').config();
const https = require('https');
const fs = require('fs');

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const targetHotels = [
  { rank: 1, pref: '静岡県', area: '熱海温泉', keyword: '熱海後楽園ホテル' },
  { rank: 2, pref: '山梨県', area: '河口湖温泉', keyword: '湖楽おんやど富士吟景' },
  { rank: 3, pref: '神奈川県', area: '箱根・小涌谷温泉', keyword: '箱根小涌園 天悠' },
  { rank: 4, pref: '長野県', area: '松本・扉温泉', keyword: '明神館' },
  { rank: 5, pref: '兵庫県', area: '赤穂温泉', keyword: '赤穂温泉 絶景露天風呂の宿 銀波荘' },
  { rank: 6, pref: '和歌山県', area: '南紀白浜温泉', keyword: '川久' },
  { rank: 7, pref: '長崎県', area: '長崎市 / 稲佐山', keyword: '稲佐山' },
  { rank: 8, pref: '大分県', area: '別府温泉 / 観海寺温泉', keyword: '杉乃井' },
  { rank: 9, pref: '群馬県', area: '万座温泉', keyword: '万座プリンスホテル' },
  { rank: 10, pref: '岩手県', area: '花巻温泉郷 / 志戸平', keyword: '志戸平' },
  { rank: 11, pref: '香川県', area: '琴平温泉', keyword: 'ことひら 温泉' },
  { rank: 12, pref: '北海道', area: '洞爺湖温泉', keyword: 'ザ レイクビュー TOYA 乃の風リゾート' }
];

function fetchHotel(keyword) {
  return new Promise((resolve) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=1`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.hotels && j.hotels[0]) {
            const b = j.hotels[0].hotel[0].hotelBasicInfo;
            resolve(b);
          } else {
            console.warn(`No match for: ${keyword}`);
            resolve(null);
          }
        } catch (e) {
          console.error(`Parse err for ${keyword}:`, e.message);
          resolve(null);
        }
      });
    }).on('error', (err) => {
      console.error(`HTTP err for ${keyword}:`, err.message);
      resolve(null);
    });
  });
}

async function main() {
  console.log("Fetching 12 iconic infinity & sky open-air bath hotels via Rakuten API...");
  const results = [];
  for (const item of targetHotels) {
    const hotel = await fetchHotel(item.keyword);
    if (hotel) {
      console.log(`[Rank ${item.rank}] ✓ ${hotel.hotelName} (Rating: ${hotel.reviewAverage}, Review: ${hotel.reviewCount})`);
      results.push({
        rank: item.rank,
        pref: item.pref,
        area: item.area,
        searchKeyword: item.keyword,
        hotelNo: hotel.hotelNo,
        hotelName: hotel.hotelName,
        hotelInformationUrl: hotel.hotelInformationUrl,
        planListUrl: hotel.planListUrl,
        dpPlanListUrl: hotel.dpPlanListUrl,
        reviewUrl: hotel.reviewUrl,
        hotelImageUrl: hotel.hotelImageUrl,
        roomImageUrl: hotel.roomImageUrl || hotel.hotelImageUrl,
        reviewAverage: hotel.reviewAverage,
        reviewCount: hotel.reviewCount,
        hotelMinCharge: hotel.hotelMinCharge,
        postalCode: hotel.postalCode,
        address1: hotel.address1,
        address2: hotel.address2,
        access: hotel.access,
        hotelSpecial: hotel.hotelSpecial,
        userReview: hotel.userReview
      });
    } else {
      console.error(`Failed to find: ${item.keyword}`);
    }
    await new Promise(r => setTimeout(r, 400));
  }
  fs.writeFileSync('scripts/infinity_hotels_12.json', JSON.stringify(results, null, 2), 'utf8');
  console.log(`Completed fetching! Total items: ${results.length}/12`);
}

main();
