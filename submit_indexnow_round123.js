const https = require('https');
const fs = require('fs');

const host = 'croud-travel.com';
const key = 'croudtravelindexnow2026';
const keyLocation = 'https://croud-travel.com/croudtravelindexnow2026.txt';

const r123 = JSON.parse(fs.readFileSync('round123_batch_data.json', 'utf8'));
const urlList = r123.map(a => 'https://' + host + '/' + a.slug);

const body = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

endpoints.forEach(ep => {
  const req = https.request({
    hostname: ep,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body)
    }
  }, (res) => {
    console.log(`Endpoint [${ep}] responded with status: ${res.statusCode}`);
  });

  req.on('error', (e) => {
    console.error(`Endpoint [${ep}] error: ${e.message}`);
  });

  req.write(body);
  req.end();
});
