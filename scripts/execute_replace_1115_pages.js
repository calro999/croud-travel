const fs = require('fs');
const path = require('path');
const { generateIndividualSections } = require('./generate_individual_sections.js');

const targets = JSON.parse(fs.readFileSync('target_1115_pages.json', 'utf8'));

console.log(`Starting individual replacement for ${targets.length} pages...`);

let replacedCount = 0;
let errors = [];

for (let i = 0; i < targets.length; i++) {
  const t = targets[i];
  try {
    const content = fs.readFileSync(t.pagePath, 'utf8');

    const idxCourse = content.indexOf('【1泊2日】おすすめモデルコース＆旅の過ごし方');
    const idxFaq = content.indexOf('よくある質問（FAQ）と旅のノウハウ');

    if (idxCourse === -1 || idxFaq === -1) {
      errors.push({ slug: t.slug, reason: 'Marker not found' });
      continue;
    }

    const sec1Start = content.lastIndexOf('<section', idxCourse);
    const sec1End = content.indexOf('</section>', idxCourse) + '</section>'.length;

    const sec2Start = content.indexOf('<section', sec1End);
    const sec2End = content.indexOf('</section>', idxFaq) + '</section>'.length;

    if (sec1Start === -1 || sec2End <= sec1Start) {
      errors.push({ slug: t.slug, reason: 'Invalid boundary' });
      continue;
    }

    // Generate specific, unique sections based on live Rakuten data
    const newSections = generateIndividualSections(t);

    const before = content.slice(0, sec1Start);
    const after = content.slice(sec2End);

    const newContent = `${before}${newSections}${after}`;
    fs.writeFileSync(t.pagePath, newContent, 'utf8');
    replacedCount++;

    if (replacedCount % 100 === 0 || i === targets.length - 1) {
      console.log(`[${replacedCount}/${targets.length}] Successfully replaced sections for: ${t.slug}`);
    }
  } catch (err) {
    errors.push({ slug: t.slug, reason: err.message });
  }
}

console.log('================================================================');
console.log(`Finished replacement! Successfully replaced: ${replacedCount} / ${targets.length}`);
if (errors.length > 0) {
  console.log(`Errors encountered (${errors.length}):`, errors);
}
console.log('================================================================');
