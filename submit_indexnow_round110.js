const https = require('https');
const fs = require('fs');
const path = require('path');

const round110Slugs = [
  'winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay',
  'winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay',
  'features'
];

// サイトマップから全URLを抽出
const sitemaps = ['sitemap-main.xml', 'sitemap-features.xml', 'sitemap-prefectures.xml', 'sitemap-spots.xml', 'sitemap-posts.xml'];
let allUrls = [];
for (const sm of sitemaps) {
  const p = path.join(__dirname, 'public', sm);
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const matches = text.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      for (const m of matches) {
        const u = m.replace('<loc>', '').replace('</loc>', '');
        if (!allUrls.includes(u)) allUrls.push(u);
      }
    }
  }
}

console.log(`=== Total Sitemaps URLs to IndexNow: ${allUrls.length} ===`);

const configs = [
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: round110Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round110Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: allUrls
  }
];

const endpoints = [
  { host: 'api.indexnow.org', path: '/indexnow' },
  { host: 'www.bing.com', path: '/indexnow' },
  { host: 'yandex.com', path: '/indexnow' }
];

function submit(endpoint, payload) {
  return new Promise((resolve) => {
    const data = JSON.stringify(payload);
    const req = https.request({
      hostname: endpoint.host,
      port: 443,
      path: endpoint.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          endpoint: endpoint.host,
          host: payload.host,
          urlsCount: payload.urlList.length,
          status: res.statusCode,
          body: body.substring(0, 100)
        });
      });
    });

    req.on('error', (e) => {
      resolve({
        endpoint: endpoint.host,
        host: payload.host,
        urlsCount: payload.urlList.length,
        status: 'ERROR',
        error: e.message
      });
    });

    req.write(data);
    req.end();
  });
}

async function run() {
  console.log('Sending IndexNow requests for Round 110...');
  for (const cfg of configs) {
    const payload = {
      host: cfg.host,
      key: cfg.key,
      keyLocation: cfg.keyLocation,
      urlList: cfg.urls
    };

    for (const ep of endpoints) {
      const res = await submit(ep, payload);
      console.log(`[${res.endpoint}] -> ${res.host} (${res.urlsCount} URLs): Status ${res.status} ${res.body || res.error || ''}`);
    }
  }
}

run();
