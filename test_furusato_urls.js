const https = require('https');

const candidates = [
  'https://travel.rakuten.co.jp/furusato/',
  'https://travel.rakuten.co.jp/special/furusato/',
  'https://event.travel.rakuten.co.jp/furusato/',
  'https://event.travel.rakuten.co.jp/special/furusato_coupon/',
  'https://travel.rakuten.co.jp/movement/furusato/',
  'https://event.travel.rakuten.co.jp/special/furusatonouzei/',
  'https://event.travel.rakuten.co.jp/special/furusato/'
];

for (const u of candidates) {
  https.get(u, (res) => {
    console.log(`${res.statusCode} : ${u} (location: ${res.headers.location || 'none'})`);
  }).on('error', err => {
    console.log(`ERR : ${u} - ${err.message}`);
  });
}
