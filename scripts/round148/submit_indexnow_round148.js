const https = require('https');

const key = "e9ffb19b78d8442fae9bc892ea012e1a";

const round148Slugs = [
  'winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay',
  'winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay',
  'winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay',
  'winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay',
  'winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay'
];

async function submitToIndexNow(host) {
  return new Promise((resolve, reject) => {
    const urls = round148Slugs.map(s => `https://${host}/${s}`);
    const postData = JSON.stringify({
      host: host,
      key: key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: urls
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log(`\nSubmitting ${urls.length} URLs for host: ${host} to IndexNow...`);
    urls.forEach(u => console.log(` - ${u}`));

    const req = https.request(options, (res) => {
      console.log(`IndexNow Response Code (${host}): ${res.statusCode}`);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data) console.log(`Response data: ${data}`);
        resolve(res.statusCode);
      });
    });

    req.on('error', (e) => {
      console.error(`Error submitting to IndexNow (${host}):`, e.message);
      resolve(null);
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('=== Round 148 IndexNow Submission ===');
  await submitToIndexNow('travel.navitime.jp.net');
  await submitToIndexNow('croud-travel.pages.dev');
  console.log('\nAll IndexNow submissions completed!');
}

main();
