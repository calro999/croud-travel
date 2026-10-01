const https = require('https');
const fs = require('fs');
const path = require('path');

const round94Slugs = [
  'winter-iwate-sanriku-kotatsu-train-kaisen-stay',
  'winter-akita-moriyoshi-ani-snow-monster-matagi-stay',
  'winter-niigata-sado-island-kanburi-crab-snow-stay',
  'winter-nara-dorogawa-onsen-snow-botannabe-stay',
  'winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay',
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
    urls: round94Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round94Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: allUrls
  }
];

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

async function submitIndexNow(cfg) {
  for (const ep of endpoints) {
    const payload = JSON.stringify({
      host: cfg.host,
      key: cfg.key,
      keyLocation: cfg.keyLocation,
      urlList: cfg.urls
    });

    const options = {
      hostname: ep,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    await new Promise((resolve) => {
      const req = https.request(options, (res) => {
        let resData = '';
        res.on('data', chunk => resData += chunk);
        res.on('end', () => {
          console.log(`[IndexNow] ${ep} (${cfg.host} - ${cfg.urls.length} URLs): HTTP ${res.statusCode} ${res.statusMessage || ''}`);
          resolve();
        });
      });
      req.on('error', (e) => {
        console.error(`[IndexNow Error] ${ep} (${cfg.host}):`, e.message);
        resolve();
      });
      req.write(payload);
      req.end();
    });
  }
}

async function main() {
  console.log('=== SUBMITTING ROUND 94 TO INDEXNOW ===');
  for (const cfg of configs) {
    await submitIndexNow(cfg);
  }
  console.log('\n=== INDEXNOW SUBMISSION FINISHED ===');
}

main().catch(console.error);
