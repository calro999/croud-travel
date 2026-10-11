const fs = require('fs');
const https = require('https');

const APP_ID = '1017441584944747761';
const AFFILIATE_ID = '4bf14a1a.2085cf55.4bf14a1b.469cb8e9';

const targets = [
  {
    themeKey: "mie-ago-bay-luxury",
    query: "志摩 ホテル ベイスイート"
  },
  {
    themeKey: "yamanashi-kawaguchiko-fufu-luxury",
    query: "富士河口湖 ふふ 高級"
  },
  {
    themeKey: "kumamoto-aso-kurokawa-takefue-luxury",
    query: "黒川温泉 高級 離れ"
  },
  {
    themeKey: "kyoto-tango-taizagani-sumihei-luxury",
    query: "丹後 炭平 蟹"
  },
  {
    themeKey: "kagoshima-kirishima-gajin-luxury",
    query: "霧島 妙見 高級 雅叙苑"
  }
];

function fetchRakuten(keyword) {
  return new Promise((resolve, reject) => {
    const url = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${APP_ID}&affiliateId=${AFFILIATE_ID}&hits=10`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const results = {};
  for (const t of targets) {
    console.log(`Fetching Rakuten data for: ${t.themeKey} (${t.query})`);
    try {
      const data = await fetchRakuten(t.query);
      if (data.hotels) {
        results[t.themeKey] = data.hotels.map(h => {
          const basicInfo = h.hotel[0].hotelBasicInfo;
          return {
            hotelNo: basicInfo.hotelNo,
            hotelName: basicInfo.hotelName,
            hotelInformationUrl: basicInfo.hotelInformationUrl,
            planListUrl: basicInfo.planListUrl,
            hotelImageUrl: basicInfo.hotelImageUrl,
            hotelMinCharge: basicInfo.hotelMinCharge,
            reviewAverage: basicInfo.reviewAverage,
            reviewCount: basicInfo.reviewCount,
            userReview: basicInfo.userReview,
            hotelSpecial: basicInfo.hotelSpecial,
            address1: basicInfo.address1,
            address2: basicInfo.address2,
            telephoneNo: basicInfo.telephoneNo
          };
        });
        console.log(`  -> Got ${results[t.themeKey].length} hotels`);
      } else {
        console.log(`  -> No hotels found for ${t.themeKey}`);
        results[t.themeKey] = [];
      }
    } catch (e) {
      console.error(`Error fetching ${t.themeKey}:`, e);
      results[t.themeKey] = [];
    }
    await new Promise(r => setTimeout(r, 600));
  }

  fs.writeFileSync('scripts/round147/round147_raw_hotels.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log("Saved raw hotel data to scripts/round147/round147_raw_hotels.json");
}

main();
