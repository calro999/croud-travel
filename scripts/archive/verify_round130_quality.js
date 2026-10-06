const fs = require('fs');
const path = require('path');

const slugs = [
  'autumn-tokyo-disney-resort-halloween-maihama-hotels-stay',
  'autumn-usj-halloween-horror-nights-osaka-bay-hotels-stay',
  'autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay',
  'autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay',
  'autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay'
];

async function verifyQuality() {
  console.log('================================================================');
  console.log('Verifying Round 130 Halloween Pages Quality & Completeness');
  console.log('================================================================');

  let hasError = false;

  for (const slug of slugs) {
    const filePath = path.join(__dirname, '../../src/app', slug, 'page.tsx');
    console.log(`\nInspecting [${slug}]...`);

    if (!fs.existsSync(filePath)) {
      console.error(`  x File not found: ${filePath}`);
      hasError = true;
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Check Character count (Text only)
    const textOnly = content
      .replace(/import[\s\S]*?from[\s\S]*?;/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/[a-zA-Z0-9_\-\.\:\/]+/g, ' ')
      .replace(/\s+/g, '');

    console.log(`  - Raw text characters: ${textOnly.length}`);
    if (textOnly.length < 3000) {
      console.error(`  x Character count under 3000! (${textOnly.length})`);
      hasError = true;
    } else {
      console.log(`  ✓ Character count PASS (${textOnly.length} chars)`);
    }

    // 2. Check JSON-LD
    const hasArticleLd = content.includes('"@type": "Article"');
    const hasBreadcrumbLd = content.includes('"@type": "BreadcrumbList"');
    const hasFaqLd = content.includes('"@type": "FAQPage"');

    if (hasArticleLd && hasBreadcrumbLd && hasFaqLd) {
      console.log('  ✓ JSON-LD Schemas present (Article, Breadcrumb, FAQPage)');
    } else {
      console.error('  x Missing JSON-LD Schema!');
      hasError = true;
    }

    // 3. Check Rakuten affiliate links
    const rakutenLinks = content.match(/https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\/[a-zA-Z0-9\.\_\-]+/g) || [];
    console.log(`  - Rakuten affiliate links found: ${rakutenLinks.length}`);
    if (rakutenLinks.length < 5) {
      console.error(`  x Less than 5 Rakuten affiliate links found (${rakutenLinks.length})`);
      hasError = true;
    } else {
      console.log('  ✓ Rakuten affiliate links PASS');
    }

    // 4. Check Hotel Images
    const imgMatches = content.match(/img\.travel\.rakuten\.co\.jp\/share\/HOTEL\/[0-9]+/g) || [];
    console.log(`  - Rakuten hotel images found: ${imgMatches.length}`);
    if (imgMatches.length < 5) {
      console.warn(`  ! Note: ${imgMatches.length} rakuten images found`);
    }

    // 5. Check Internal links
    const internalLinks = [
      content.includes('href="/features"'),
      content.includes('href="/prefectures/'),
      content.includes('href="/"')
    ];
    if (internalLinks.every(Boolean)) {
      console.log('  ✓ Core internal navigation links present');
    } else {
      console.error('  x Missing internal navigation links');
      hasError = true;
    }
  }

  // 6. Check features/page.tsx
  console.log('\nChecking src/app/features/page.tsx...');
  const featuresPage = fs.readFileSync(path.join(__dirname, '../../src/app/features/page.tsx'), 'utf8');
  for (const slug of slugs) {
    if (!featuresPage.includes(slug)) {
      console.error(`  x ${slug} missing from features/page.tsx`);
      hasError = true;
    }
  }
  console.log('  ✓ All 5 slugs verified in features/page.tsx');

  // 7. Check public/sitemap-features.xml
  console.log('\nChecking public/sitemap-features.xml...');
  const sitemap = fs.readFileSync(path.join(__dirname, '../../public/sitemap-features.xml'), 'utf8');
  for (const slug of slugs) {
    if (!sitemap.includes(slug)) {
      console.error(`  x ${slug} missing from sitemap-features.xml`);
      hasError = true;
    }
  }
  console.log('  ✓ All 5 slugs verified in sitemap-features.xml');

  // 8. Check public/llms-full.txt
  console.log('\nChecking public/llms-full.txt...');
  const llms = fs.readFileSync(path.join(__dirname, '../../public/llms-full.txt'), 'utf8');
  for (const slug of slugs) {
    if (!llms.includes(slug)) {
      console.error(`  x ${slug} missing from llms-full.txt`);
      hasError = true;
    }
  }
  console.log('  ✓ All 5 slugs verified in llms-full.txt');

  if (hasError) {
    console.error('\n❌ Quality verification failed with errors!');
    process.exit(1);
  } else {
    console.log('\n🎉 ALL QUALITY VERIFICATIONS PASSED! 100% READY FOR BUILD & DEPLOY.');
  }
}

verifyQuality().catch(err => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
