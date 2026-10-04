const https = require('https');

const host = 'croud-travel.pages.dev';
const key = 'c4d9e7284b9148d2bc079e2f9d658931';
const urls = [
  `https://${host}/`,
  `https://${host}/features/`,
  `https://${host}/sitemap.xml`,
];

const body = JSON.stringify({
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls,
});

for (const endpoint of ['api.indexnow.org', 'www.bing.com', 'yandex.com']) {
  const req = https.request(
    { hostname: endpoint, path: '/indexnow', method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) } },
    (res) => { res.resume(); console.log(`${endpoint}: ${res.statusCode}`); }
  );
  req.on('error', (e) => console.log(`${endpoint}: error ${e.message}`));
  req.setTimeout(15000, () => req.destroy());
  req.write(body);
  req.end();
}
