const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay',
  'winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay',
  'winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay',
  'winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay',
  'winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay'
];

console.log('=== ROUND 118 QUALITY VERIFICATION ===\n');

// 禁止AI臭フレーズ
const aiCliches = [
  'いかがでしたでしょうか',
  'いかがだったでしょうか',
  '魅力が伝わりましたでしょうか',
  'ぜひ参考にしてみてください',
  '参考にしていただければ幸いです',
  '足を運んでみてはいかがでしょうか',
  'いかがですか',
  /(?<![a-zA-Z])AI(?![a-zA-Z])/,
  '人工知能',
  'プロンプト',
  'ChatGPT',
  'Gemini',
  'いかがでしょうか'
];

let hasErrors = false;

slugs.forEach((slug, idx) => {
  console.log(`[Check Article ${idx + 1}] ${slug}`);
  const targetFile = path.join(__dirname, 'src/app', slug, 'page.tsx');
  
  if (!fs.existsSync(targetFile)) {
    console.error(`  [FAIL] File does not exist: ${targetFile}`);
    hasErrors = true;
    return;
  }
  
  const content = fs.readFileSync(targetFile, 'utf8');
  
  // 1. 純日本語文字数チェック（>= 3,000字）
  const textOnly = content
    .replace(/import[\s\S]*?from[\s\S]*?;/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/[a-zA-Z0-9_\-\.\:\/]+/g, ' ')
    .replace(/\s+/g, '');
  console.log(`  - Raw Text Length: ${textOnly.length} characters`);
  if (textOnly.length < 3000) {
    console.error(`  [FAIL] Raw text is less than 3,000 chars (${textOnly.length})`);
    hasErrors = true;
  } else {
    console.log(`  [OK] Exceeds 3,000 characters (${textOnly.length} chars)`);
  }
  
  // 2. AI Cliches check
  aiCliches.forEach(cliche => {
    const isMatched = cliche instanceof RegExp ? cliche.test(content) : content.includes(cliche);
    if (isMatched) {
      console.error(`  [FAIL] Contains AI cliché: "${cliche}"`);
      hasErrors = true;
    }
  });
  
  // 3. Metadata and JSON-LD schema check (SEO, AI-SEO, GEO, LLM)
  if (!content.includes('metadata: Metadata')) {
    console.error(`  [FAIL] Missing Next.js metadata export`);
    hasErrors = true;
  }
  if (!content.includes('FAQPage') || !content.includes('schema.org') || !content.includes('BreadcrumbList')) {
    console.error(`  [FAIL] Missing Schema JSON-LD (Breadcrumb/FAQPage)`);
    hasErrors = true;
  }
  if (!content.includes(`https://croud-travel.com/${slug}`)) {
    console.error(`  [FAIL] Missing Canonical or URL match`);
    hasErrors = true;
  }
  
  // 4. Hotel links and affiliate check
  if (!content.includes('hb.afl.rakuten.co.jp')) {
    console.error(`  [FAIL] Missing Rakuten affiliate links`);
    hasErrors = true;
  } else {
    console.log(`  [OK] Rakuten affiliate links verified`);
  }

  // 5. 内部リンクチェック
  if (!content.includes('<Link') || !content.includes('href="/')) {
    console.error(`  [FAIL] Missing internal feature links`);
    hasErrors = true;
  } else {
    console.log(`  [OK] Internal links verified`);
  }
  
  console.log(`  -> Passed all validation checks for ${slug}\n`);
});

// 6. features/page.tsx check
const featuresContent = fs.readFileSync(path.join(__dirname, 'src/app/features/page.tsx'), 'utf8');
slugs.forEach(slug => {
  if (!featuresContent.includes(slug)) {
    console.error(`  [FAIL] Slug ${slug} missing in features/page.tsx`);
    hasErrors = true;
  }
});
console.log('[OK] features/page.tsx contains all 5 new slugs');

// 7. sitemap-features.xml check
const sitemapContent = fs.readFileSync(path.join(__dirname, 'public/sitemap-features.xml'), 'utf8');
slugs.forEach(slug => {
  if (!sitemapContent.includes(`https://croud-travel.com/${slug}/`)) {
    console.error(`  [FAIL] Slug ${slug} missing in sitemap-features.xml`);
    hasErrors = true;
  }
});
console.log('[OK] sitemap-features.xml contains all 5 new URLs');

// 8. llms-full.txt check
const llmsContent = fs.readFileSync(path.join(__dirname, 'public/llms-full.txt'), 'utf8');
slugs.forEach(slug => {
  if (!llmsContent.includes(slug)) {
    console.error(`  [FAIL] Slug ${slug} missing in llms-full.txt`);
    hasErrors = true;
  }
});
console.log('[OK] llms-full.txt contains all 5 new entries');

if (hasErrors) {
  console.error('\nQuality verification FAILED!');
  process.exit(1);
} else {
  console.log('\nQuality verification PASSED for all 5 articles!');
}
