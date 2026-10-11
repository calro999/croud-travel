const fs = require('fs');
const path = require('path');

const round148Slugs = [
  'winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay',
  'winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay',
  'winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay',
  'winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay',
  'winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay'
];

const round148Notes = [
  'note-208.md',
  'note-209.md',
  'note-210.md',
  'note-211.md',
  'note-212.md'
];

console.log('=== Quality & Integrity Verification for Round 148 ===\n');

let allPassed = true;

// 1. note files verification
console.log('1. Verifying note Markdown files...');
for (const noteFile of round148Notes) {
  const filePath = path.join(__dirname, '../../', noteFile);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: ${noteFile}`);
    allPassed = false;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const charLen = content.length;
  console.log(`- ${noteFile}: ${charLen.toLocaleString()} chars`);
  
  if (charLen < 3000) {
    console.error(`❌ Text length too short (< 3,000 chars): ${charLen}`);
    allPassed = false;
  } else {
    console.log(`  ✓ Text length OK (> 3,000 chars)`);
  }

  // Check Rakuten images and links
  const hasRakutenImg = content.includes('https://img.travel.rakuten.co.jp/');
  const hasRakutenLink = content.includes('https://hb.afl.rakuten.co.jp/');
  const hasWikiImg = content.includes('https://thumb.wikimedia.org/');

  if (!hasRakutenImg) {
    console.error(`❌ Missing Rakuten image in ${noteFile}`);
    allPassed = false;
  } else {
    console.log(`  ✓ Rakuten images present`);
  }

  if (!hasRakutenLink) {
    console.error(`❌ Missing Rakuten affiliate links in ${noteFile}`);
    allPassed = false;
  } else {
    console.log(`  ✓ Rakuten affiliate links present`);
  }

  if (!hasWikiImg) {
    console.error(`❌ Missing Wikipedia tourist spot image in ${noteFile}`);
    allPassed = false;
  } else {
    console.log(`  ✓ Wikipedia tourist spot image present`);
  }
}

// 2. Next.js page verification
console.log('\n2. Verifying Next.js pages (src/app/[slug]/page.tsx)...');
for (const slug of round148Slugs) {
  const pagePath = path.join(__dirname, '../../src/app', slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.error(`❌ Missing page.tsx for slug: ${slug}`);
    allPassed = false;
    continue;
  }
  const content = fs.readFileSync(pagePath, 'utf-8');
  const charLen = content.length;
  console.log(`- ${slug}/page.tsx: ${charLen.toLocaleString()} chars`);

  const hasRakutenImg = content.includes('https://img.travel.rakuten.co.jp/');
  const hasRakutenAff = content.includes('https://hb.afl.rakuten.co.jp/');
  const hasWikiImg = content.includes('https://thumb.wikimedia.org/');
  const hasJsonLd = content.includes('application/ld+json');

  if (!hasRakutenImg || !hasRakutenAff || !hasWikiImg || !hasJsonLd) {
    console.error(`❌ Incomplete components in ${slug}/page.tsx`);
    allPassed = false;
  } else {
    console.log(`  ✓ All critical components present (Rakuten API images, affiliate URLs, Wiki photo, JSON-LD)`);
  }
}

// 3. Check metadata files
console.log('\n3. Verifying metadata registration...');
const sitemap = fs.readFileSync('public/sitemap-features.xml', 'utf-8');
const llms = fs.readFileSync('public/llms-full.txt', 'utf-8');
const accordion = fs.readFileSync('src/app/components/AllFeaturesAccordion.tsx', 'utf-8');
const trends = fs.readFileSync('src/data/featureTrendsData.ts', 'utf-8');
const feed = fs.readFileSync('public/feed.xml', 'utf-8');

for (const slug of round148Slugs) {
  const inSitemap = sitemap.includes(slug);
  const inLlms = llms.includes(slug);
  const inAccordion = accordion.includes(slug);
  const inTrends = trends.includes(slug);
  const inFeed = feed.includes(slug);

  if (!inSitemap || !inLlms || !inAccordion || !inTrends || !inFeed) {
    console.error(`❌ Missing metadata registration for ${slug}`);
    console.error(`   sitemap: ${inSitemap}, llms: ${inLlms}, accordion: ${inAccordion}, trends: ${inTrends}, feed: ${inFeed}`);
    allPassed = false;
  } else {
    console.log(`✓ ${slug} registered across all 5 metadata files`);
  }
}

if (allPassed) {
  console.log('\n🎉 ALL QUALITY & INTEGRITY CHECKS PASSED FOR ROUND 148!');
} else {
  console.error('\n⚠️ SOME CHECKS FAILED!');
  process.exit(1);
}
