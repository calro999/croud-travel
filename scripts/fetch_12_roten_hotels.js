require('dotenv').config();
const https = require('https');
const fs = require('fs');

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const targetHotels = [
  { rank: 1, pref: '神奈川県', area: '箱根・仙石原温泉', keyword: 'センチュリオン箱根別邸' },
  { rank: 2, pref: '群馬県', area: '草津温泉', keyword: '湯宿 季の庭' },
  { rank: 3, pref: '栃木県', area: '日光・鬼怒川温泉', keyword: 'あさや' },
  { rank: 4, pref: '静岡県', area: '伊豆・修善寺温泉', keyword: '修善寺温泉 桂川' },
  { rank: 5, pref: '長野県', area: '白骨温泉 / 乗鞍', keyword: '白骨の名湯 泡の湯' },
  { rank: 6, pref: '石川県', area: '加賀温泉郷・山代温泉', keyword: '山代温泉 ゆのくに天祥' },
  { rank: 7, pref: '兵庫県', area: '有馬温泉', keyword: '兵衛向陽閣' },
  { rank: 8, pref: '山形県', area: '銀山温泉', keyword: '銀山荘' },
  { rank: 9, pref: '愛媛県', area: '道後温泉', keyword: '道後温泉 茶玻瑠' },
  { rank: 10, pref: '大分県', area: '由布院温泉', keyword: '山灯館' },
  { rank: 11, pref: '熊本県', area: '黒川温泉', keyword: '黒川温泉 瀬の本高原ホテル' },
  { rank: 12, pref: '北海道', area: '定山渓温泉', keyword: 'エグゼクティブスイート翠嶺' }
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
  console.log("Fetching 12 iconic onsen hotels with private open-air baths via Rakuten API...");
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
      console.error(`Failed to find hotel for rank ${item.rank}: ${item.keyword}`);
    }
    await new Promise(r => setTimeout(r, 400));
  }
  fs.writeFileSync('scripts/roten_hotels_12.json', JSON.stringify(results, null, 2), 'utf8');
  console.log(`Completed fetching! Total items: ${results.length}/12`);
}

main();
