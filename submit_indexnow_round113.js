const https = require('https');
const fs = require('fs');
const path = require('path');

const round113Slugs = [
  'winter-hokkaido-sapporo-odori-illumination-jozankei-stay',
  'winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay',
  'winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay',
  'winter-tokyo-marunouchi-illumination-tokyo-station-hatsumode-stay',
  'winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay',
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
    urls: round113Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round113Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: allUrls
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
  const payload = JSON.stringify({
    host: cfg.host,
    key: cfg.key,
    keyLocation: cfg.keyLocation,
    urlList: cfg.urls
  });

  for (const ep of endpoints) {
    try {
      const status = await new Promise((resolve, reject) => {
        const req = https.request({
          hostname: ep,
          port: 443,
          path: '/indexnow',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 10000
        }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
        });

        req.on('error', reject);
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Timeout'));
        });

        req.write(payload);
        req.end();
      });

      console.log(`[${ep}] Submitted ${cfg.urls.length} URLs for ${cfg.host} - Status: ${status.statusCode}`);
    } catch (e) {
      console.warn(`[${ep}] Error submitting for ${cfg.host}: ${e.message}`);
    }
  }
}

async function main() {
  console.log('Starting IndexNow submission for Round 113...');
  for (const cfg of configs) {
    console.log(`\nSubmitting ${cfg.urls.length} URLs to host ${cfg.host}...`);
    await submitIndexNow(cfg);
  }
  console.log('\nAll IndexNow submissions completed!');
}

main().catch(console.error);
