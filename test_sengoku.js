const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

async function main() {
  const query = '箱根 仙石原';
  const results = await searchRakutenHotels(query, 5);
  results.forEach(h => console.log(`[${h.hotelNo}] ${h.hotelName} (${h.reviewAverage})`));
}
main();
