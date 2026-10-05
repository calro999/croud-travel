const https = require('https');

const API_KEY = 'e3b8b09335f64b1f9e2b17849c63b4b8'; // croud-travel indexnow key
const HOST = 'croud-travel.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

const urls = [
  `https://${HOST}/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay`,
  `https://${HOST}/winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay`,
  `https://${HOST}/winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay`,
  `https://${HOST}/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay`,
  `https://${HOST}/winter-shiga-omihachiman-hachimanbori-himure-omigyu-stay`,
  `https://${HOST}/features`,
  `https://${HOST}/sitemap-features.xml`,
  `https://${HOST}/llms-full.txt`
];

const payload = JSON.stringify({
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
});

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' },
  { hostname: 'yandex.com', path: '/indexnow' }
];

async function submitIndexNow() {
  console.log('=== Submitting Round 120 URLs to IndexNow ===\n');
  console.log(`Target Host: ${HOST}`);
  console.log(`Submitting ${urls.length} URLs:`);
  urls.forEach(u => console.log(`  - ${u}`));
  console.log('');

  for (const ep of endpoints) {
    await new Promise((resolve) => {
      const req = https.request({
        hostname: ep.hostname,
        port: 443,
        path: ep.path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          console.log(`✅ [${ep.hostname}] Response Status: ${res.statusCode} ${res.statusMessage || ''}`);
          if (body) {
            console.log(`   Body: ${body}`);
          }
          resolve();
        });
      });

      req.on('error', (e) => {
        console.warn(`⚠️ [${ep.hostname}] Error: ${e.message}`);
        resolve();
      });

      req.write(payload);
      req.end();
    });
  }

  console.log('\n🎉 IndexNow submission completed!');
}

submitIndexNow();
