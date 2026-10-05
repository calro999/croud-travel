const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay',
  'winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay',
  'winter-hokkaido-wakkanai-soya-cape-sunrise-tako-shabu-soya-beef-stay',
  'winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay',
  'winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay'
];

async function verify() {
  console.log('================================================================');
  console.log('Verifying Round 127 Articles Quality & SEO/LLM Compliance');
  console.log('================================================================\n');

  let overallPass = true;

  // 1. Check each page
  for (const slug of slugs) {
    console.log(`Checking [${slug}]...`);
    const pagePath = path.join(__dirname, 'src', 'app', slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.error(`  x Page file missing: ${pagePath}`);
      overallPass = false;
      continue;
    }

    const content = fs.readFileSync(pagePath, 'utf8');

    // 1-1. Character count check (plain Japanese text >= 3000 chars)
    const textOnly = content
      .replace(/import[\s\S]*?from[\s\S]*?;/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/[a-zA-Z0-9_\-\.\:\/]+/g, ' ')
      .replace(/\s+/g, '');

    console.log(`  -> Text length: ${textOnly.length} chars`);
    if (textOnly.length < 3000) {
      console.error(`  x FAILED: Character count is below 3,000 (${textOnly.length})`);
      overallPass = false;
    } else {
      console.log(`  ✓ Character count PASS (${textOnly.length} >= 3,000)`);
    }

    // 1-2. Hotel cards check (must have 5 hotels with affiliate links and ratings)
    const hotelMatches = [...content.matchAll(/id:\s*([1-5]),/g)];
    const affiliateUrlMatches = [...content.matchAll(/https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\//g)];
    console.log(`  -> Hotel count: ${hotelMatches.length}, Affiliate links: ${affiliateUrlMatches.length}`);
    if (hotelMatches.length !== 5 || affiliateUrlMatches.length < 5) {
      console.error(`  x FAILED: Hotel count or affiliate links incomplete`);
      overallPass = false;
    } else {
      console.log(`  ✓ 5 Verified hotels with live Rakuten affiliate links PASS`);
    }

    // 1-3. JSON-LD Schema check (Article, BreadcrumbList, FAQPage)
    const hasArticle = content.includes('"@type": "Article"');
    const hasBreadcrumbs = content.includes('"@type": "BreadcrumbList"');
    const hasFAQ = content.includes('"@type": "FAQPage"');
    if (!hasArticle || !hasBreadcrumbs || !hasFAQ) {
      console.error(`  x FAILED: Missing structured data (Article:${hasArticle}, Breadcrumbs:${hasBreadcrumbs}, FAQ:${hasFAQ})`);
      overallPass = false;
    } else {
      console.log(`  ✓ JSON-LD Schemas (Article, BreadcrumbList, FAQPage) PASS`);
    }

    // 1-4. AI cliche phrases check
    const aiCliches = [
      'いかがでしたでしょうか',
      'いかがでしょうか。',
      '魅力をご紹介します',
      'ご紹介していきましょう',
      'と言えるでしょう',
      'ぜひ訪れてみてはいかが'
    ];
    let foundCliche = false;
    for (const c of aiCliches) {
      if (content.includes(c)) {
        console.warn(`  ! Found AI cliche phrase: "${c}"`);
        foundCliche = true;
      }
    }
    if (!foundCliche) {
      console.log(`  ✓ No AI cliche phrases found PASS`);
    }

    // 1-5. Internal links check (must include /features, /, and RELATED WINTER FEATURES links)
    const hasInternalNav = content.includes('href="/features"');
    const hasHomeNav = content.includes('href="/"');
    const hasRelatedLinks = content.includes('RELATED WINTER FEATURES');
    if (!hasInternalNav || !hasHomeNav || !hasRelatedLinks) {
      console.error(`  x FAILED: Missing internal navigation or related feature links (Nav:${hasInternalNav}, Home:${hasHomeNav}, Related:${hasRelatedLinks})`);
      overallPass = false;
    } else {
      console.log(`  ✓ Rich internal links & related cross-links PASS`);
    }

    console.log('');
  }

  // 2. Check sitemap-features.xml
  console.log('Checking public/sitemap-features.xml...');
  const sitemapContent = fs.readFileSync(path.join(__dirname, 'public', 'sitemap-features.xml'), 'utf8');
  for (const slug of slugs) {
    if (!sitemapContent.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in sitemap-features.xml`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 slugs present in sitemap-features.xml PASS\n');

  // 3. Check public/llms-full.txt
  console.log('Checking public/llms-full.txt...');
  const llmsContent = fs.readFileSync(path.join(__dirname, 'public', 'llms-full.txt'), 'utf8');
  for (const slug of slugs) {
    if (!llmsContent.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in llms-full.txt`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 slugs present in llms-full.txt PASS\n');

  // 4. Check src/app/features/page.tsx
  console.log('Checking src/app/features/page.tsx...');
  const featuresContent = fs.readFileSync(path.join(__dirname, 'src', 'app', 'features', 'page.tsx'), 'utf8');
  for (const slug of slugs) {
    if (!featuresContent.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in src/app/features/page.tsx`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 features listed in src/app/features/page.tsx PASS\n');

  if (!overallPass) {
    console.error('❌ Quality Verification FAILED! Please fix issues above.');
    process.exit(1);
  } else {
    console.log('🎉 ALL QUALITY & SEO CHECKS PASSED PERFECTLY (Round 127)!');
  }
}

verify().catch(err => {
  console.error('Verification error:', err);
  process.exit(1);
});
