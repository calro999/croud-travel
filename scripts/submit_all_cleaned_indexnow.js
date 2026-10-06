const https = require('https');
const fs = require('fs');

// Read all URLs from sitemaps
const featuresSitemap = fs.readFileSync('public/sitemap-features.xml', 'utf8');
const mainSitemap = fs.readFileSync('public/sitemap-main.xml', 'utf8');

const regex = /<loc>(.*?)<\/loc>/g;
let urls = [];
let m;
while ((m = regex.exec(featuresSitemap)) !== null) {
  urls.push(m[1]);
}
while ((m = regex.exec(mainSitemap)) !== null) {
  urls.push(m[1]);
}

urls = [...new Set(urls)];
console.log(`Extracted ${urls.length} unique URLs to submit to IndexNow.`);

// Split into batches of 1,000 URLs (IndexNow limit per request is 10,000, 1000 is very safe)
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const batches = chunkArray(urls, 1000);

const key = '54d2a4384bc4abc254d2a439aa1be583';
const keyLocation = 'https://croud-travel.pages.dev/54d2a4384bc4abc254d2a439aa1be583.txt';
const host = 'croud-travel.pages.dev';

const endpoints = [
  { hostname: 'api.indexnow.org', path: '/IndexNow' },
  { hostname: 'www.bing.com', path: '/IndexNow' }
];

function submitBatch(endpoint, urlList) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      host,
      key,
      keyLocation,
      urlList
    });

    const req = https.request(
      {
        hostname: endpoint.hostname,
        port: 443,
        path: endpoint.path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload)
        }
      },
      (res) => {
        let respData = '';
        res.on('data', (c) => (respData += c));
        res.on('end', () => {
          resolve({
            endpoint: endpoint.hostname,
            statusCode: res.statusCode,
            response: respData
          });
        });
      }
    );

    req.on('error', (e) => {
      resolve({ endpoint: endpoint.hostname, statusCode: 500, error: e.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('=== Submitting All Updated Clean URLs to IndexNow ===');
  for (let bIndex = 0; bIndex < batches.length; bIndex++) {
    const batch = batches[bIndex];
    console.log(`\nSubmitting Batch ${bIndex + 1}/${batches.length} (${batch.length} URLs)...`);
    for (const ep of endpoints) {
      const res = await submitBatch(ep, batch);
      console.log(`  [${res.endpoint}] HTTP Status: ${res.statusCode} ${res.statusCode === 200 || res.statusCode === 202 ? 'SUCCESS (Accepted)' : 'Response: ' + res.response}`);
    }
  }
  console.log('\n=== IndexNow Submission Complete! ===');
}

main().catch(console.error);
