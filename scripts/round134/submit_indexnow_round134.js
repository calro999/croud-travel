const https = require('https');

const round134Slugs = [
  'winter-kagoshima-yakushima-shiratani-jomon-onsen-kubiore-saba-stay',
  'winter-toyama-gokayama-gassho-snow-lightup-ainokura-suganuma-stay',
  'winter-nara-yoshinoyama-kinpusenji-snow-temple-onsen-yamatotori-stay',
  'winter-oita-usuki-sekibutsu-hatsumode-torafugu-kaiseki-stay',
  'winter-okinawa-kumejima-hatenohama-kurumaebi-ocean-resort-stay',
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
    urls: round134Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: round134Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: round134Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.com',
    key: 'e3b8b09335f64b1f9e2b17849c63b4b8',
    keyLocation: 'https://croud-travel.com/e3b8b09335f64b1f9e2b17849c63b4b8.txt',
    urls: round134Slugs.map(s => `https://croud-travel.com/${s}`)
  }
];

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function submitIndexNow() {
  console.log('================================================================');
  console.log('Submitting Round 134 Winter URLs to IndexNow (Bing, Yandex, etc)');
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
          }
        }, (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            console.log(`  [${ep.hostname}] Response Status: ${res.statusCode} ${res.statusMessage || ''}`);
            if (res.statusCode === 200 || res.statusCode === 202) {
              successCount++;
            } else if (body) {
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

  console.log(`\n🎉 Round 134 Winter IndexNow submission completed! (Successful responses: ${successCount})`);
}

submitIndexNow().catch(console.error);
