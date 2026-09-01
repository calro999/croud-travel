const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = 'c4d9e7284b9148d2bc079e2f9d658931';
const HOST = 'croud-travel.pages.dev';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// キーファイルをpublicに保存
fs.writeFileSync(path.join(__dirname, 'public', `${KEY}.txt`), KEY, 'utf8');

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
        if (!urls.includes(u)) {
          urls.push(u);
        }
      }
    }
  }
}

console.log(`Extracted ${urls.length} URLs for host: ${HOST}`);

// 500件ずつバッチ分割して送信
const BATCH_SIZE = 500;
async function submitBatch(targetHost, batchUrls, batchNum, totalBatches) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: batchUrls
  });

  return new Promise((resolve) => {
    const req = https.request({
      hostname: targetHost,
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
        console.log(`[${targetHost}] Batch ${batchNum}/${totalBatches} (${batchUrls.length} URLs) -> Status: ${res.statusCode} ${res.statusMessage || ''}`);
        resolve({ status: res.statusCode });
      });
    });

    req.on('error', (e) => {
      console.warn(`[${targetHost}] Batch ${batchNum} Error: ${e.message}`);
      resolve({ error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  const endpoints = ['api.indexnow.org', 'www.bing.com', 'yandex.com'];
  const totalBatches = Math.ceil(urls.length / BATCH_SIZE);

  for (const ep of endpoints) {
    console.log(`\n========================================`);
    console.log(`Submitting to IndexNow Endpoint: ${ep}`);
    console.log(`========================================`);
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      await submitBatch(ep, batch, batchNum, totalBatches);
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log('\n=== All IndexNow Batches Successfully Submitted! ===');
}

main().catch(console.error);
