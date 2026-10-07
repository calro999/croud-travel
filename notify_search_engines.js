const https = require('https');

const sitemapUrl = encodeURIComponent('https://croud-travel.pages.dev/sitemap.xml');

const pings = [
  { name: 'Google (Sitemap Ping)', url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
  { name: 'Bing (Sitemap Ping)', url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` }
];

async function ping(target) {
  return new Promise((resolve) => {
    const req = https.get(target.url, (res) => {
      console.log(`[${target.name}] Status: ${res.statusCode} ${res.statusMessage || ''}`);
      // レスポンスストリームを確実に消費・破棄してソケットを開放する
      res.resume();
      res.on('end', () => resolve());
    });

    req.on('error', (e) => {
      console.log(`[${target.name}] Error: ${e.message}`);
      resolve();
    });

    // 10秒で確実にタイムアウト
    req.setTimeout(10000, () => {
      console.log(`[${target.name}] Timed out, skipping.`);
      req.destroy();
      resolve();
    });
  });
}

async function main() {
  console.log('=== Ping Search Engines with Sitemap ===');
  for (const p of pings) {
    await ping(p);
  }
  console.log('=== Ping Completed ===');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
