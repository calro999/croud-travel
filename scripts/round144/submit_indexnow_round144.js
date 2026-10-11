const https = require('https');

const round144Slugs = [
  'winter-fukushima-iizaka-onsen-sabakoyu-enban-gyoza-fukushimagyu-stay',
  'winter-miyagi-zao-fox-village-kamasaki-onsen-shiroishi-umen-sendaigyu-stay',
  'winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay',
  'winter-hyogo-tatsuno-murotsu-oyster-shinmaiko-sunset-aioi-onsen-stay',
  'winter-yamagata-onogawa-onsen-bihada-yonezawagyu-sukiyaki-mame-moyashi-stay',
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
    urls: round144Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e',
    keyLocation: 'https://croud-travel.pages.dev/b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
    urls: round144Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
  }
];

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function submitIndexNow() {
  console.log('================================================================');
  console.log('Submitting Round 144 Winter URLs to IndexNow (Bing, Yandex, etc)');
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
      try {
        const res = await new Promise((resolve, reject) => {
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
          }, (resp) => {
            let data = '';
            resp.on('data', chunk => data += chunk);
            resp.on('end', () => resolve({ statusCode: resp.statusCode, statusMessage: resp.statusMessage, data }));
          });

          req.on('error', reject);
          req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timed out'));
          });
          req.write(payload);
          req.end();
        });

        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`  [${ep.hostname}] Response Status: ${res.statusCode} ${res.statusMessage}`);
          successCount++;
        } else {
          console.log(`  [${ep.hostname}] Response Status: ${res.statusCode} ${res.statusMessage}`);
          if (res.data) console.log(`     Response: ${res.data.trim()}`);
        }
      } catch (err) {
        console.error(`  [${ep.hostname}] Error: ${err.message}`);
      }
    }
  }

  console.log(`\n🎉 Round 144 Winter IndexNow submission completed! (Successful responses: ${successCount})`);
}

submitIndexNow().catch(console.error);
