const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
  'winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
  'winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
  'winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
  'winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay'
];

function countJapaneseChars(text) {
  const matches = text.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3001-\u303F]/g);
  return matches ? matches.length : 0;
}

let allOk = true;

console.log('================================================================');
console.log('Comprehensive Quality & SEO Verification (Round 131 - Winter)');
console.log('================================================================');

for (const slug of slugs) {
  const filePath = path.join(process.cwd(), 'src/app', slug, 'page.tsx');
  console.log(`\n--- Checking: ${slug} ---`);

  if (!fs.existsSync(filePath)) {
    console.error(`  FAIL: File does not exist at ${filePath}`);
    allOk = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const jpCount = countJapaneseChars(content);
  console.log(`- Japanese Character Count: ${jpCount} (Requirement >= 3,000)`);

  if (jpCount < 3000) {
    console.error(`  FAIL: Character count ${jpCount} is LESS than 3,000!`);
    allOk = false;
  } else {
    console.log(`  PASS: Character count requirement satisfied (High volume: ${jpCount} chars)`);
  }

  // Schema checks
  const hasArticle = content.includes("'@type': 'Article'");
  const hasBreadcrumb = content.includes("'@type': 'BreadcrumbList'");
  const hasFaq = content.includes("'@type': 'FAQPage'");
  console.log(`- JSON-LD Schemas: Article=${hasArticle}, Breadcrumb=${hasBreadcrumb}, FAQ=${hasFaq}`);
  if (!hasArticle || !hasBreadcrumb || !hasFaq) {
    console.error('  FAIL: Missing required JSON-LD schema');
    allOk = false;
  }

  // Rakuten affiliate links check
  const hasRakuten = content.includes('hb.afl.rakuten.co.jp') && content.includes('img.travel.rakuten.co.jp');
  console.log(`- Rakuten affiliate links & live images present: ${hasRakuten}`);
  if (!hasRakuten) {
    console.error('  FAIL: Missing Rakuten affiliate URLs or images');
    allOk = false;
  }

  // Internal links check
  const linkMatches = content.match(/<Link[\s\S]*?href="\/(winter|furusato|nagano|hokkaido|atami|hakone|tottori)[^"]*"/g);
  const hasInternalLinks = linkMatches && linkMatches.length >= 4;
  console.log(`- Internal links present: ${hasInternalLinks} (Count: ${linkMatches ? linkMatches.length : 0})`);
  if (!hasInternalLinks) {
    console.error('  FAIL: Missing sufficient internal links');
    allOk = false;
  }

  // Check for undefined variables or suspicious placeholders
  const suspicious = ['undefined', 'null', 'TODO', 'FIXME', 'sample_hotel'];
  for (const s of suspicious) {
    if (content.includes(`"${s}"`) || content.includes(`'${s}'`)) {
      console.warn(`  WARNING: Found suspicious token ${s}`);
    }
  }
}

// Check sitemap-features.xml
console.log('\n--- Checking sitemap-features.xml ---');
const sitemapContent = fs.readFileSync(path.join(process.cwd(), 'public/sitemap-features.xml'), 'utf8');
for (const slug of slugs) {
  const inSitemap = sitemapContent.includes(slug);
  console.log(`- ${slug} in sitemap: ${inSitemap}`);
  if (!inSitemap) allOk = false;
}

// Check llms-full.txt
console.log('\n--- Checking llms-full.txt ---');
const llmsContent = fs.readFileSync(path.join(process.cwd(), 'public/llms-full.txt'), 'utf8');
for (const slug of slugs) {
  const inLlms = llmsContent.includes(slug);
  console.log(`- ${slug} in llms-full.txt: ${inLlms}`);
  if (!inLlms) allOk = false;
}

// Check features/page.tsx
console.log('\n--- Checking features/page.tsx ---');
const featuresContent = fs.readFileSync(path.join(process.cwd(), 'src/app/features/page.tsx'), 'utf8');
for (const slug of slugs) {
  const inFeatures = featuresContent.includes(slug);
  console.log(`- ${slug} in features/page.tsx: ${inFeatures}`);
  if (!inFeatures) allOk = false;
}

console.log('\n================================================================');
if (allOk) {
  console.log(' ALL QUALITY CHECKS PASSED PERFECTLY! (Round 131 - Winter)');
} else {
  console.error(' SOME QUALITY CHECKS FAILED!');
  process.exit(1);
}
console.log('================================================================');
