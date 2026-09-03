const https = require('https');
const http = require('http');

const sitemapUrl = encodeURIComponent('https://croud-travel.pages.dev/sitemap.xml');

const pings = [
  { name: 'Google (Sitemap Ping)', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
  { name: 'Bing (Sitemap Ping)', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` }
];

async function ping(target) {
  return new Promise((resolve) => {
    https.get(target.url, (res) => {
      console.log(`[${target.name}] Status: ${res.statusCode} ${res.statusMessage || ''}`);
      resolve();
    }).on('error', (e) => {
      console.log(`[${target.name}] Error: ${e.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log('=== Ping Search Engines with Sitemap ===');
  for (const p of pings) {
    await ping(p);
  }
}

main().catch(console.error);
