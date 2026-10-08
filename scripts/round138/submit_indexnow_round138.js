const https = require('https');

const round138Slugs = [
  'winter-saitama-kumagaya-menuma-shodenzan-fukaya-negi-bushugyu-stay',
  'winter-kanagawa-kawasaki-daishi-hatsumode-factory-nightview-haneda-onsen-stay',
  'winter-saga-yoshinogari-hikarinohibiki-ariake-nori-sagagyu-onsen-stay',
  'winter-osaka-sumiyoshi-taisha-hatsumode-sakai-taikobashi-kawachikamo-stay',
  'winter-mie-futamiura-meotoiwa-hatsuhinode-vison-matsusaka-stay',
  'features',
  'sitemap-features.xml',
  'sitemap.xml',
  'llms.txt'
];

const configs = [
  {
    host: 'croud-travel.pages.dev',
    key: '54d2a4384bc4abc254d2a439aa1be583',
    keyLocation: 'https://croud-travel.pages.dev/54d2a4384bc4abc254d2a439aa1be583.txt',
    urls: round138Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: round138Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: round138Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'e3b8b09335f64b1f9e2b17849c63b4b8',
    keyLocation: 'https://croud-travel.com/e3b8b09335f64b1f9e2b17849c63b4b8.txt',
    urls: round138Slugs.map(s => `https://croud-travel.com/${s}`)
  }
];

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function submitIndexNow() {
  console.log('================================================================');
  console.log('Submitting Round 138 Winter URLs to IndexNow (Bing, Yandex, etc)');
  console.log('================================================================\n');

  let successCount = 0;

  for (const cfg of configs) {
    console.log(`Submitting ${cfg.urls.length} URLs for host: ${cfg.host} (Key: ${cfg.key})...`);
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
          },
          timeout: 10000
        }, (res) => {
          let resData = '';
          res.on('data', chunk => resData += chunk);
          res.on('end', () => {
            if (res.statusCode === 200 || res.statusCode === 202) {
              console.log(`  ✓ [${ep.hostname}] Response: ${res.statusCode} (OK / Accepted)`);
              successCount++;
            } else {
              console.log(`  - [${ep.hostname}] Response: ${res.statusCode} ${resData}`);
            }
            resolve();
          });
        });

        req.on('error', (e) => {
          console.warn(`  ! [${ep.hostname}] Error: ${e.message}`);
          resolve();
        });

        req.on('timeout', () => {
          console.warn(`  ! [${ep.hostname}] Timeout`);
          req.destroy();
          resolve();
        });

        req.write(payload);
        req.end();
      });
    }
  }

  console.log(`\n🎉 IndexNow submission finished! Successful requests: ${successCount}`);
}

submitIndexNow();
