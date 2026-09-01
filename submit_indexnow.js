const fs = require('fs');
const https = require('https');
const http = require('http');

const HOST = 'croud-travel.pages.dev';
const KEY = '54d2a4384bc4abc254d2a439aa1be583';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// Extract all URLs from all generated sitemaps
function extractUrls() {
  let urls = [];
  const sitemapFiles = [
    'public/sitemap-main.xml',
    'public/sitemap-features.xml',
    'public/sitemap-prefectures.xml',
    'public/sitemap-posts.xml',
    'public/sitemap.xml'
  ];

  for (const sFile of sitemapFiles) {
    if (fs.existsSync(sFile)) {
      const xml = fs.readFileSync(sFile, 'utf8');
      const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
      const extracted = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
      // sitemapindexのloc（.xml）は除外してページURLのみ対象にする
      const pageUrls = extracted.filter(u => !u.endsWith('.xml'));
      urls = urls.concat(pageUrls);
    }
  }

  // Deduplicate
  urls = [...new Set(urls)];
  return urls;
}

// POST request helper
function sendPost(hostname, path, data) {
  return new Promise((resolve) => {
    const payload = JSON.stringify(data);
    const req = https.request({
      hostname,
      port: 443,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 15000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ endpoint: hostname + path, status: res.statusCode, body });
      });
    });

    req.on('error', (e) => {
      resolve({ endpoint: hostname + path, error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

// GET ping helper
function sendGet(urlStr) {
  return new Promise((resolve) => {
    const u = new URL(urlStr);
    const mod = u.protocol === 'https:' ? https : http;
    const req = mod.get(urlStr, { timeout: 10000 }, (res) => {
      resolve({ url: urlStr, status: res.statusCode });
    });
    req.on('error', (e) => {
      resolve({ url: urlStr, error: e.message });
    });
  });
}

async function main() {
  console.log('=== Starting Instant Global Search Engine & AI Indexing ===');
  const urls = extractUrls();
  console.log(`Found ${urls.length} unique URLs to index.`);

  const endpoints = [
    { host: 'api.indexnow.org', path: '/indexnow' },
    { host: 'www.bing.com', path: '/indexnow' },
    { host: 'yandex.com', path: '/indexnow' },
    { host: 'search.seznam.cz', path: '/indexnow' }
  ];

  // IndexNow allows max 10,000 URLs per batch
  const batch = urls.slice(0, 10000);
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: batch
  };

  console.log('\n--- 1. Submitting to IndexNow Protocol (Bing, Yandex, Seznam, Naver & AI Crawlers) ---');
  for (const ep of endpoints) {
    const res = await sendPost(ep.host, ep.path, payload);
    console.log(`IndexNow [${ep.host}]: Status ${res.status || 'ERR'} ${res.error ? `(${res.error})` : '✓ OK'}`);
  }

  console.log('\n--- 2. Pinging Global Search Engines & Web Crawlers with Sitemap ---');
  const pings = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  ];

  for (const p of pings) {
    const res = await sendGet(p);
    console.log(`Ping [${res.url}]: Status ${res.status || 'ERR'} ${res.error ? `(${res.error})` : '✓ OK'}`);
  }

  console.log('\n=== Global Indexing & Notification Completed Successfully! ===');
}

main().catch(console.error);
