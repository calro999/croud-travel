const https = require('https');

const host = "travel.navitime.jp.net";
const key = "e9ffb19b78d8442fae9bc892ea012e1a";

const urls = [
  `https://${host}/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay`,
  `https://${host}/winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay`,
  `https://${host}/winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay`,
  `https://${host}/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay`,
  `https://${host}/winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay`
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
