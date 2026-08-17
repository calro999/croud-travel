const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

function searchRakutenHotels(keyword, hits = 5) {
  return new Promise((resolve, reject) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=${hits}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.hotels) {
            const list = json.hotels.map(h => {
              const b = h.hotel[0].hotelBasicInfo;
              return {
                hotelNo: b.hotelNo,
                hotelName: b.hotelName,
                hotelKanaName: b.hotelKanaName || '',
                hotelInformationUrl: b.hotelInformationUrl || '',
                planListUrl: b.planListUrl || '',
                dpPlanListUrl: b.dpPlanListUrl || '',
                reviewUrl: b.reviewUrl || '',
                hotelImageUrl: b.hotelImageUrl || '',
                hotelThumbnailUrl: b.hotelThumbnailUrl || '',
                roomImageUrl: b.roomImageUrl || '',
                hotelMapImageUrl: b.hotelMapImageUrl || '',
                reviewCount: b.reviewCount || 0,
                reviewAverage: b.reviewAverage || 0,
                userReview: b.userReview || '',
                hotelMinCharge: b.hotelMinCharge || 0,
                address1: b.address1 || '',
                address2: b.address2 || '',
                telephoneNo: b.telephoneNo || '',
                access: b.access || '',
                parkingInformation: b.parkingInformation || '',
                nearestStation: b.nearestStation || '',
                hotelSpecial: b.hotelSpecial || '',
                affiliateUrl: b.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(b.hotelInformationUrl || 'https://travel.rakuten.co.jp/HOTEL/' + b.hotelNo + '/' + b.hotelNo + '.html')}`
              };
            });
            resolve(list);
          } else {
            console.warn('No hotels found for keyword:', keyword, json);
            resolve([]);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function getHotelByNo(hotelNo) {
  return new Promise((resolve, reject) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20260731?format=json&hotelNo=${hotelNo}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.hotels && json.hotels.length > 0) {
            const b = json.hotels[0].hotel[0].hotelBasicInfo;
            resolve({
              hotelNo: b.hotelNo,
              hotelName: b.hotelName,
              hotelImageUrl: b.hotelImageUrl,
              reviewAverage: b.reviewAverage,
              hotelMinCharge: b.hotelMinCharge,
              address1: b.address1,
              address2: b.address2,
              access: b.access,
              hotelSpecial: b.hotelSpecial,
              affiliateUrl: b.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(b.hotelInformationUrl || 'https://travel.rakuten.co.jp/HOTEL/' + b.hotelNo + '/' + b.hotelNo + '.html')}`
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

module.exports = { searchRakutenHotels, getHotelByNo };
