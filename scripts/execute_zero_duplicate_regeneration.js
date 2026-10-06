const fs = require('fs');
const path = require('path');
const { generateIndividualSections } = require('./generate_individual_sections.js');

const secData = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// Build local cache
let cache = {};
function scanObj(obj) {
  if (Array.isArray(obj)) {
    for (const item of obj) scanObj(item);
  } else if (obj && typeof obj === 'object') {
    if (obj.hotelNo && (obj.hotelName || obj.hotelBasicInfo)) {
      const basic = obj.hotelBasicInfo || obj;
      const no = String(basic.hotelNo || obj.hotelNo);
      if (!cache[no] || (!cache[no].hotelSpecial && basic.hotelSpecial)) {
        cache[no] = {
          hotelNo: no,
          hotelName: basic.hotelName || obj.hotelName,
          hotelKanaName: basic.hotelKanaName || obj.hotelKanaName || '',
          hotelSpecial: basic.hotelSpecial || obj.hotelSpecial || '',
          address1: basic.address1 || obj.address1 || '',
          address2: basic.address2 || obj.address2 || '',
          access: basic.access || obj.access || '',
          nearestStation: basic.nearestStation || obj.nearestStation || ''
        };
      }
    }
    for (const v of Object.values(obj)) scanObj(v);
  }
}
scanObj(secData);

function scanDir(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) scanDir(full);
    else if (f.endsWith('.json')) {
      try { scanObj(JSON.parse(fs.readFileSync(full, 'utf8'))); } catch (e) {}
    }
  }
}
scanDir('scripts');

console.log('Total hotels in cache:', Object.keys(cache).length);

// Scan all pages in src/app that have the model course section
let targetPages = [];
function checkApp(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && !f.startsWith('.') && f !== 'node_modules') {
      checkApp(full);
    } else if (f === 'page.tsx') {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('【1泊2日】') && (c.includes('おすすめ滞在モデルコース') || c.includes('おすすめモデルコース'))) {
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

console.log('Target pages with model course section:', targetPages.length);

let updated = 0;
for (const t of targetPages) {
  const content = fs.readFileSync(t.pagePath, 'utf8');
  
  const m1 = content.search(/<section[^>]*>[\s\S]*?【1泊2日】[\s\S]*?おすすめ(?:滞在)?モデルコース/);
  if (m1 === -1) continue;

  const idxCourse = content.indexOf('【1泊2日】', m1);
  const sec1Start = content.lastIndexOf('<section', idxCourse);
  const sec1End = content.indexOf('</section>', idxCourse) + '</section>'.length;

  const sec2Start = content.indexOf('<section', sec1End);
  if (sec2Start === -1) continue;
  const sec2End = content.indexOf('</section>', sec2Start) + '</section>'.length;

  const newSections = generateIndividualSections(t, cache, secData);
  const before = content.slice(0, sec1Start);
  const after = content.slice(sec2End);

  fs.writeFileSync(t.pagePath, before + newSections + after, 'utf8');
  updated++;
}

console.log('Successfully re-generated sections for ' + updated + ' pages with zero templates!');
