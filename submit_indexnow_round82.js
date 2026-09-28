const https = require('https');
const fs = require('fs');
const path = require('path');

const round82Slugs = [
  'winter-akita-nyuto-onsen-yukimi-kiritanpo-hinaijidori-stay',
  'winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay',
  'winter-gunma-kusatsu-onsen-yubatake-yukimi-joshugyu-stay',
  'winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay',
  'winter-fukushima-aizu-higashiyama-ashinomaki-onsen-stay',
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
    urls: round82Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round82Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
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
  const body = JSON.stringify({
    host: cfg.host,
    key: cfg.key,
    keyLocation: cfg.keyLocation,
    urlList: cfg.urls
  });

  for (const ep of endpoints) {
    await new Promise((resolve) => {
      const req = https.request({
        hostname: ep,
        path: '/indexnow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(body)
        }
      }, (res) => {
        let resData = '';
        res.on('data', chunk => resData += chunk);
        res.on('end', () => {
          console.log(`[${cfg.host}] -> [${ep}] Status: ${res.statusCode} ${res.statusMessage || ''}`);
          resolve();
        });
      });

      req.on('error', (e) => {
        console.error(`[${cfg.host}] -> [${ep}] Error: ${e.message}`);
        resolve();
      });

      req.write(body);
      req.end();
    });
  }
}

async function main() {
  console.log('=== Submitting Round 82 URLs to IndexNow ===');
  for (const cfg of configs) {
    console.log(`\nSubmitting ${cfg.urls.length} URLs for host: ${cfg.host} (Key: ${cfg.key.slice(0, 8)}...)`);
    await submitIndexNow(cfg);
  }
  console.log('\n=== IndexNow Submission Complete! ===');
}

main().catch(console.error);
