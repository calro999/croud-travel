const https = require('https');

const host = "travel.navitime.jp.net";
const key = "e9ffb19b78d8442fae9bc892ea012e1a";

const urls = [
  `https://${host}/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay`,
  `https://${host}/winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay`,
  `https://${host}/winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay`,
  `https://${host}/winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay`,
  `https://${host}/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay`
];

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow status code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
  res.on('end', () => {
    console.log('\nIndexNow submission completed successfully.');
  });
});

req.on('error', (e) => {
  console.error(`IndexNow submission error: ${e.message}`);
});

req.write(postData);
req.end();
