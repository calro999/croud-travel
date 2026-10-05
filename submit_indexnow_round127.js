const https = require('https');

const round127Slugs = [
  'winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay',
  'winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay',
  'winter-hokkaido-wakkanai-soya-cape-sunrise-tako-shabu-soya-beef-stay',
  'winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay',
  'winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay',
  'features',
  'sitemap-features.xml',
  'llms-full.txt'
];

const configs = [
  {
    host: 'croud-travel.pages.dev',
    key: '54d2a4384bc4abc254d2a439aa1be583',
    keyLocation: 'https://croud-travel.pages.dev/54d2a4384bc4abc254d2a439aa1be583.txt',
    urls: round127Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: round127Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round127Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: round127Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'e3b8b09335f64b1f9e2b17849c63b4b8',
    keyLocation: 'https://croud-travel.com/e3b8b09335f64b1f9e2b17849c63b4b8.txt',
    urls: round127Slugs.map(s => `https://croud-travel.com/${s}`)
  }
];

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function submitIndexNow() {
  console.log('=== Submitting Round 127 URLs to IndexNow ===\n');

  for (const cfg of configs) {
    console.log(`\nSubmitting ${cfg.urls.length} URLs for host: ${cfg.host} (Key: ${cfg.key})...`);
    const payload = JSON.stringify({
      host: cfg.host,
      key: cfg.key,
      keyLocation: cfg.keyLocation,
      urlList: cfg.urls
    });

    for (const ep of endpoints) {
      await new Promise((resolve) => {
        const req = https.request({
          hostname: ep.hostname,
          port: 443,
          path: ep.path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
          }
        }, (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            console.log(`  [${ep.hostname}] Response Status: ${res.statusCode} ${res.statusMessage || ''}`);
            if (body && res.statusCode !== 200 && res.statusCode !== 202) {
              console.log(`     Response: ${body}`);
            }
            resolve();
          });
        });

        req.on('error', (e) => {
          console.warn(`  [${ep.hostname}] Error: ${e.message}`);
          resolve();
        });

        req.write(payload);
        req.end();
      });
    }
  }

  console.log('\n🎉 Round 127 IndexNow submission finished!');
}

submitIndexNow().catch(console.error);
