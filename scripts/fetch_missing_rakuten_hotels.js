const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const missingIds = JSON.parse(fs.readFileSync('missing_hotel_ids.json', 'utf8'));
const cache = JSON.parse(fs.readFileSync('all_known_hotels_cache.json', 'utf8'));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fetchHotel(id) {
  return new Promise((resolve) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20260731?format=json&hotelNo=${id}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.hotels && j.hotels[0]) {
            const b = j.hotels[0].hotel[0].hotelBasicInfo;
            resolve({
              hotelNo: String(b.hotelNo),
              hotelName: b.hotelName,
              hotelKanaName: b.hotelKanaName || '',
              hotelSpecial: b.hotelSpecial || '',
              address1: b.address1 || '',
              address2: b.address2 || '',
              access: b.access || '',
              nearestStation: b.nearestStation || '',
              hotelMinCharge: b.hotelMinCharge || 0,
              reviewAverage: b.reviewAverage || 0,
              reviewCount: b.reviewCount || 0
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  console.log(`Starting Rakuten API fetch for ${missingIds.length} missing hotels...`);
  let fetchedCount = 0;
  let notFoundCount = 0;

  for (let i = 0; i < missingIds.length; i++) {
    const id = missingIds[i];
    const hotel = await fetchHotel(id);
    if (hotel) {
      cache[id] = hotel;
      fetchedCount++;
      if (fetchedCount % 20 === 0 || i === missingIds.length - 1) {
        console.log(`[${i + 1}/${missingIds.length}] Fetched ${hotel.hotelName} (Total so far: ${fetchedCount})`);
        fs.writeFileSync('all_known_hotels_cache.json', JSON.stringify(cache, null, 2), 'utf8');
      }
    } else {
      notFoundCount++;
    }
    // Rakuten API rate limit safe sleep: 350ms
    await sleep(350);
  }

  fs.writeFileSync('all_known_hotels_cache.json', JSON.stringify(cache, null, 2), 'utf8');
  console.log(`Completed Rakuten API fetch! Success: ${fetchedCount}, Not found/Discontinued: ${notFoundCount}`);
}

main().catch(console.error);
