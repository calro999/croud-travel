const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = 'c4d9e7284b9148d2bc079e2f9d658931';
const HOST = 'croud-travel.pages.dev';

// サイトマップから全URLを抽出
const sitemaps = ['sitemap-main.xml', 'sitemap-features.xml', 'sitemap-prefectures.xml', 'sitemap-posts.xml'];
let urls = [];
for (const sm of sitemaps) {
  const p = path.join(__dirname, 'public', sm);
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const matches = text.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      for (const m of matches) {
        const u = m.replace('<loc>', '').replace('</loc>', '');
        if (!urls.includes(u)) urls.push(u);
      }
    }
  }
}

console.log(`=== Total URLs to IndexNow: ${urls.length} ===`);

// Bing / IndexNow APIへの一括JSON送信
const searchEngines = [
  'api.indexnow.org',
  'www.bing.com'
];

// 最大10,000URLまで一度に送信可能
const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  urlList: urls
});

async function submitToEngine(engineHost) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: engineHost,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        console.log(`[${engineHost}] Status: ${res.statusCode} ${res.statusMessage || ''} -> ${body || 'Success'}`);
        resolve();
      });
    });

    req.on('error', (e) => {
      console.warn(`[${engineHost}] Error: ${e.message}`);
      resolve();
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  for (const eng of searchEngines) {
    console.log(`Submitting ${urls.length} URLs to https://${eng}/indexnow...`);
    await submitToEngine(eng);
  }
  console.log('\n=== IndexNow Submission Completed! ===');
}

main().catch(console.error);
