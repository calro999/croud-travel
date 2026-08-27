const fs = require('fs');
const https = require('https');
const http = require('http');

const HOST = 'croud-travel.pages.dev';
const KEY = '54d2a4384bc4abc254d2a439aa1be583';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

function extractUrls() {
  const sitemapXml = fs.readFileSync('public/sitemap.xml', 'utf8');
  const matches = sitemapXml.match(/<loc>([^<]+)<\/loc>/g) || [];
  let urls = matches.map(m => m.replace(/<\/?loc>/g, '').trim());

  if (fs.existsSync('public/sitemap-posts.xml')) {
    const postXml = fs.readFileSync('public/sitemap-posts.xml', 'utf8');
    const postMatches = postXml.match(/<loc>([^<]+)<\/loc>/g) || [];
    urls = urls.concat(postMatches.map(m => m.replace(/<\/?loc>/g, '').trim()));
  }

  return [...new Set(urls)];
}

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
      timeout: 20000
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

function sendGet(urlStr) {
  return new Promise((resolve) => {
    try {
      const u = new URL(urlStr);
      const mod = u.protocol === 'https:' ? https : http;
      const req = mod.get(urlStr, { timeout: 15000 }, (res) => {
        resolve({ url: urlStr, status: res.statusCode });
      });
      req.on('error', (e) => {
        resolve({ url: urlStr, error: e.message });
      });
    } catch(err) {
      resolve({ url: urlStr, error: err.message });
    }
  });
}

async function main() {
  console.log('=== 全世界検索エンジン・AIクローラー向け インデックス送信（IndexNow & Global Pings） ===');
  const urls = extractUrls();
  console.log(`送信対象URL数: ${urls.length} 件`);

  const endpoints = [
    { host: 'api.indexnow.org', path: '/indexnow' },
    { host: 'www.bing.com', path: '/indexnow' },
    { host: 'yandex.com', path: '/indexnow' },
    { host: 'search.seznam.cz', path: '/indexnow' }
  ];

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  console.log('\n--- 1. IndexNow プロトコル（Bing, Yandex, Seznam, Naver, 各種AIクローラー網）へ送信 ---');
  for (const ep of endpoints) {
    const res = await sendPost(ep.host, ep.path, payload);
    console.log(`IndexNow [${ep.host}]: Status ${res.status || 'ERR'} ${res.error ? `(${res.error})` : '✓ 成功 (HTTP ' + res.status + ')'}`);
  }

  console.log('\n--- 2. 各国主要検索エンジン・クローラーへのサイトマップPing通知 ---');
  const pings = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    `https://webmaster.yandex.ru/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  ];

  for (const p of pings) {
    const res = await sendGet(p);
    console.log(`Ping [${res.url}]: Status ${res.status || 'ERR'} ${res.error ? `(${res.error})` : '✓ 送信完了'}`);
  }

  console.log('\n=== 全世界へのインデックス通知処理が完了しました ===');
}

main().catch(console.error);
