const https = require('https');
const fs = require('fs');
const path = require('path');

const round85Slugs = [
  'winter-iwate-hachimantai-matsukawa-onsen-snow-maesawagyu-stay',
  'winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay',
  'winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay',
  'winter-hokkaido-kawayu-onsen-mashu-kussharo-crab-stay',
  'winter-kagoshima-myoken-onsen-amorigawa-black-pork-stay',
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
    urls: round85Slugs.map(s => `https://croud-travel.com/${s}`)
  },
  {
    host: 'croud-travel.pages.dev',
    key: 'c4d9e7284b9148d2bc079e2f9d658931',
    keyLocation: 'https://croud-travel.pages.dev/c4d9e7284b9148d2bc079e2f9d658931.txt',
    urls: round85Slugs.map(s => `https://croud-travel.pages.dev/${s}`)
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
  console.log(`\n--- Submitting IndexNow for host: ${cfg.host} (URLs: ${cfg.urls.length}) ---`);
  
  // バッチ送信（最大10,000件）
  const batchSize = 1000;
  for (let i = 0; i < cfg.urls.length; i += batchSize) {
    const chunk = cfg.urls.slice(i, i + batchSize);
    const payload = JSON.stringify({
      host: cfg.host,
      key: cfg.key,
      keyLocation: cfg.keyLocation,
      urlList: chunk
    });

    for (const ep of endpoints) {
      try {
        const resStatus = await new Promise((resolve, reject) => {
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
            let resBody = '';
            res.on('data', d => resBody += d);
            res.on('end', () => resolve({ statusCode: res.statusCode, body: resBody }));
          });
          req.on('error', reject);
          req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
          req.write(payload);
          req.end();
        });
        console.log(`[${ep}] Chunk ${i / batchSize + 1}: Status ${resStatus.statusCode}`);
      } catch (e) {
        console.error(`[${ep}] Chunk ${i / batchSize + 1} Error: ${e.message}`);
      }
    }
  }
}

async function main() {
  console.log('================================================================');
  console.log('IndexNow Submission for Round 85 New Articles & All Sitemaps');
  console.log('================================================================');

  for (const cfg of configs) {
    await submitIndexNow(cfg);
  }

  console.log('\n================================================================');
  console.log('IndexNow Submission Completed!');
  console.log('================================================================');
}

main().catch(console.error);
