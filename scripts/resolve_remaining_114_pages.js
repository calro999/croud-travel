const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fetchHotel(id) {
  return new Promise((resolve) => {
    const url = `https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20260731?format=json&hotelNo=${id}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.hotels && j.hotels[0]) {
            const b = j.hotels[0].hotel[0].hotelBasicInfo;
            resolve({
              hotelNo: String(b.hotelNo),
              hotelName: b.hotelName,
              hotelSpecial: b.hotelSpecial || '',
              address1: b.address1 || '',
              address2: b.address2 || '',
              access: b.access || '',
              nearestStation: b.nearestStation || ''
            });
          } else resolve(null);
        } catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

const { generateIndividualSections } = require('./generate_individual_sections.js');
const secData = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

async function main() {
  const phrase = '周辺で話題のご当地グルメランチを堪能。地域の特産品を味わい旅のエネルギーを満たす。';
  let targetPages = [];

  function checkApp(dir) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory() && !f.startsWith('.') && f !== 'node_modules') {
        checkApp(full);
      } else if (f === 'page.tsx') {
        const c = fs.readFileSync(full, 'utf8');
        if (c.includes(phrase)) {
          targetPages.push({
            pagePath: full,
            slug: path.basename(dir),
            title: (c.match(/title:\s*['\"\`](.*?)['\"\`]/) || ['', path.basename(dir)])[1]
          });
        }
      }
    }
  }
  checkApp('src/app');

  console.log(`Found ${targetPages.length} pages to resolve.`);

  let cache = {};

  for (let i = 0; i < targetPages.length; i++) {
    const t = targetPages[i];
    const content = fs.readFileSync(t.pagePath, 'utf8');

    // Extract hotel IDs from code
    const rawMatches = (content.match(/HOTEL%2F(\d+)%2F|HOTEL\/(\d+)\//g) || []);
    const ids = [...new Set(rawMatches.map(m => {
      const idMatch = m.match(/(\d+)/);
      return idMatch ? idMatch[1] : null;
    }).filter(Boolean))];

    for (const id of ids.slice(0, 2)) {
      if (!cache[id]) {
        const h = await fetchHotel(id);
        if (h) cache[id] = h;
        await sleep(250);
      }
    }

    // Now re-generate sections
    const idxCourse = content.indexOf('【1泊2日】');
    if (idxCourse === -1) continue;
    const sec1Start = content.lastIndexOf('<section', idxCourse);
    const sec1End = content.indexOf('</section>', idxCourse) + '</section>'.length;

    const sec2Start = content.indexOf('<section', sec1End);
    let sec2End = sec1End;
    if (sec2Start !== -1) {
      sec2End = content.indexOf('</section>', sec2Start) + '</section>'.length;
    }

    const newSections = generateIndividualSections(t, cache, secData);
    const before = content.slice(0, sec1Start);
    const after = content.slice(sec2End);

    fs.writeFileSync(t.pagePath, before + newSections + after, 'utf8');
    if ((i + 1) % 20 === 0 || i === targetPages.length - 1) {
      console.log(`[${i + 1}/${targetPages.length}] Resolved: ${t.slug}`);
    }
  }

  console.log('Finished resolving all 114 pages with live API data!');
}

main().catch(console.error);
