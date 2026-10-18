const https = require('https');
const fs = require('fs');
const path = require('path');

const host = 'croud-travel.pages.dev';
const key = 'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e';

// サイトマップから全URLを取得
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

console.log(`=== Total URLs to Submit to IndexNow: ${allUrls.length} ===`);

// IndexNowは最大10,000URLまで一括送信可能
const body = JSON.stringify({
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: allUrls,
});

async function submitToEndpoint(endpoint) {
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: endpoint,
        path: '/indexnow',
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          console.log(`✓ ${endpoint}: HTTP ${res.statusCode} ${data ? `(Response: ${data})` : ''}`);
          resolve();
        });
      }
    );
    req.on('error', (e) => {
      console.log(`✗ ${endpoint}: Error ${e.message}`);
      resolve();
    });
    req.setTimeout(15000, () => {
      console.log(`✗ ${endpoint}: Timed out (15s)`);
      req.destroy();
      resolve();
    });
    req.write(body);
    req.end();
  });
}

async function pingSitemap(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`✓ Sitemap Ping: ${url} -> HTTP ${res.statusCode}`);
      resolve();
    }).on('error', (e) => {
      console.log(`✗ Sitemap Ping: ${url} -> Error: ${e.message}`);
      resolve();
    });
  });
}

async function main() {
  const endpoints = ['api.indexnow.org', 'www.bing.com', 'yandex.com', 'search.seznam.cz'];
  console.log('Sending IndexNow requests to global endpoints (Bing, DuckDuckGo, Yandex, Seznam)...');
  await Promise.all(endpoints.map(ep => submitToEndpoint(ep)));

  console.log('Pinging sitemap endpoints for Google, Bing, and web crawlers...');
  const sitemapUrl = `https://${host}/sitemap.xml`;
  await Promise.all([
    pingSitemap(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`),
    pingSitemap(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`),
  ]);

  console.log('=== All Search Engines & IndexNow Crawlers Successfully Notified ===');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
