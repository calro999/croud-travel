const https = require('https');

const tests = [
  'https://travel.rakuten.co.jp/',
  'https://event.travel.rakuten.co.jp/',
  'https://travel.rakuten.co.jp/coupon/',
  'https://travel.rakuten.co.jp/coupon/furusato/',
  'https://event.travel.rakuten.co.jp/special/furusato_coupon/',
  'https://event.travel.rakuten.co.jp/special/furusato/coupon/',
  'https://event.travel.rakuten.co.jp/special/sales/furusato/',
  'https://travel.rakuten.co.jp/special/furusato/',
  'https://event.travel.rakuten.co.jp/special/coupon/',
  'https://event.travel.rakuten.co.jp/special/'
];

for (const url of tests) {
  https.get(url, (res) => {
    console.log(`${res.statusCode} : ${url}`);
  }).on('error', e => console.log(`ERR: ${url}`));
}
