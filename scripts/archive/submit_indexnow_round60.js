const https = require('https');

const slugs = [
  'winter-toyama-unazuki-onsen-kurobe-snow-stay',
  'winter-hokkaido-jozankei-onsen-snow-keikoku-stay',
  'winter-nagano-shirahone-onsen-milky-snow-stay',
  'winter-yamaguchi-nagato-yumoto-onsen-fugu-stay',
  'winter-tochigi-nasu-onsen-shikanoyu-snow-stay',
  'features'
];

const configs = [
  {
    host: 'croud-travel.com',
    key: 'croudtravelindexnow2026',
    keyLocation: 'https://croud-travel.com/croudtravelindexnow2026.txt',
    urls: slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: slugs.map(s => `https://croud-travel.pages.dev/${s}`)
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
  console.log('=== Submitting Round 60 URLs to IndexNow ===');
  for (const cfg of configs) {
    console.log(`\nSubmitting for host: ${cfg.host} (${cfg.urls.length} URLs)...`);
    await submitIndexNow(cfg);
  }
  console.log('\n=== Round 60 IndexNow Submission Complete! ===');
}

main().catch(console.error);
