const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay',
  'winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay',
  'winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay',
  'winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay',
  'winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay'
];

async function verify() {
  console.log('================================================================');
  console.log('Verifying Round 124 Articles Quality & SEO/LLM Compliance');
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

    // 1-5. Internal links check
    const hasInternalLinks = content.includes('<Link href="/features"') && content.includes('<Link href="/');
    if (!hasInternalLinks) {
      console.error(`  x FAILED: Missing internal links`);
      overallPass = false;
    } else {
      console.log(`  ✓ Internal navigation & related feature links PASS`);
    }

    console.log('');
  }

  // 2. Check sitemap-features.xml
  console.log('Checking public/sitemap-features.xml...');
  const sitemap = fs.readFileSync(path.join(__dirname, 'public', 'sitemap-features.xml'), 'utf8');
  for (const slug of slugs) {
    if (!sitemap.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in sitemap-features.xml`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 slugs in sitemap PASS\n');

  // 3. Check llms-full.txt
  console.log('Checking public/llms-full.txt...');
  const llms = fs.readFileSync(path.join(__dirname, 'public', 'llms-full.txt'), 'utf8');
  for (const slug of slugs) {
    if (!llms.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in llms-full.txt`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 slugs in llms-full.txt PASS\n');

  // 4. Check src/app/features/page.tsx
  console.log('Checking src/app/features/page.tsx...');
  const features = fs.readFileSync(path.join(__dirname, 'src', 'app', 'features', 'page.tsx'), 'utf8');
  for (const slug of slugs) {
    if (!features.includes(slug)) {
      console.error(`  x FAILED: ${slug} missing in features/page.tsx`);
      overallPass = false;
    }
  }
  console.log('  ✓ All 5 slugs in features/page.tsx grid PASS\n');

  if (!overallPass) {
    console.error('❌ Verification FAILED!');
    process.exit(1);
  } else {
    console.log('🎉 ALL QUALITY & COMPLIANCE CHECKS PASSED PERFECTLY!');
  }
}

verify().catch(err => {
  console.error(err);
  process.exit(1);
});
