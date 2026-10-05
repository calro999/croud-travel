// scripts/round128/verify_round128_quality.js
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');

const TARGET_SLUGS = [
  'winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay',
  'winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay',
  'winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay',
  'winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay',
  'winter-okayama-kurashiki-bikan-achi-shrine-hatsumode-chiyagyu-stay'
];

const AI_CLICHES = [
  'いかがでしたでしょうか',
  'いかがでしたか',
  '魅力をご紹介',
  '魅力を徹底解説',
  'と言えるでしょう',
  'ではないでしょうか',
  '足を運んでみてはいかが',
  'ぜひ訪れてみてはいかが',
  '日常の喧騒を離れ',
  '日常の喧騒を忘れ',
  '心ゆくまで堪能',
  '息をのむような',
  '息を呑むような'
];

let allPassed = true;

console.log('================================================================');
console.log('Quality & Compliance Verification for Round 128 Feature Articles');
console.log('================================================================\n');

// 1. 各ページの検証
TARGET_SLUGS.forEach(slug => {
  console.log(`--- Checking: ${slug} ---`);
  const pagePath = path.join(ROOT_DIR, 'src/app', slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.error(`[FAIL] Page file not found: ${pagePath}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(pagePath, 'utf8');

  // 文字数カウント（タグ・コード除去後のテキスト文字数）
  const cleanText = content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{`[\s\S]*?`\}/g, ' ')
    .replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/export\s+default[\s\S]*?return\s*\(/g, '')
    .replace(/[a-zA-Z0-9_\-\+]+="[^"]*"/g, '')
    .replace(/\s+/g, '');

  console.log(`  Character Count (Clean Text): ${cleanText.length} chars (Must be >= 3,000)`);
  if (cleanText.length < 3000) {
    console.error(`  [FAIL] Text length too short! (${cleanText.length} < 3,000)`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Text length exceeds 3,000 chars.`);
  }

  // 楽天API実在ホテルデータ検証
  const rakutenLinks = (content.match(/https:\/\/hb\.afl\.rakuten\.co\.jp\/[^\s"'>]+/g) || []);
  const rakutenImages = (content.match(/https:\/\/img\.travel\.rakuten\.co\.jp\/[^\s"'>]+/g) || []);
  console.log(`  Rakuten Affiliate Links: ${rakutenLinks.length} found`);
  console.log(`  Rakuten Image Links: ${rakutenImages.length} found`);

  if (rakutenLinks.length < 5) {
    console.error(`  [FAIL] Expected at least 5 affiliate links, found ${rakutenLinks.length}`);
    allPassed = false;
  } else {
    console.log(`  [PASS] At least 5 affiliate links present.`);
  }

  if (rakutenImages.length < 5) {
    console.error(`  [FAIL] Expected at least 5 hotel images, found ${rakutenImages.length}`);
    allPassed = false;
  } else {
    console.log(`  [PASS] At least 5 hotel images present.`);
  }

  // 構造化データ検証 (JSON-LD: Article, BreadcrumbList, FAQPage)
  const hasArticleSchema = content.includes('"@type": "Article"') || content.includes('"@type":"Article"');
  const hasBreadcrumbSchema = content.includes('"@type": "BreadcrumbList"') || content.includes('"@type":"BreadcrumbList"');
  const hasFaqSchema = content.includes('"@type": "FAQPage"') || content.includes('"@type":"FAQPage"');

  if (hasArticleSchema && hasBreadcrumbSchema && hasFaqSchema) {
    console.log(`  [PASS] Full JSON-LD Schemas present (Article, BreadcrumbList, FAQPage).`);
  } else {
    console.error(`  [FAIL] Missing JSON-LD schemas: Article=${hasArticleSchema}, Breadcrumb=${hasBreadcrumbSchema}, FAQ=${hasFaqSchema}`);
    allPassed = false;
  }

  // AIクリシェ検出
  let clicheFound = false;
  AI_CLICHES.forEach(cliche => {
    if (content.includes(cliche)) {
      console.error(`  [FAIL] AI Cliche detected: "${cliche}"`);
      clicheFound = true;
      allPassed = false;
    }
  });
  if (!clicheFound) {
    console.log(`  [PASS] Zero AI cliches detected.`);
  }

  // 内部リンク検証
  const hasFeaturesLink = content.includes('/features');
  const hasHomeLink = content.includes('href="/"');
  if (hasFeaturesLink && hasHomeLink) {
    console.log(`  [PASS] Internal links to /features and / present.`);
  } else {
    console.error(`  [FAIL] Missing internal links: /features=${hasFeaturesLink}, /= ${hasHomeLink}`);
    allPassed = false;
  }

  console.log('');
});

// 2. 一覧・サイトマップ・LLMファイルへの登録確認
console.log('--- Checking Global Indexation & Site Configs ---');

// src/app/features/page.tsx
const featuresPagePath = path.join(ROOT_DIR, 'src/app/features/page.tsx');
const featuresContent = fs.readFileSync(featuresPagePath, 'utf8');
TARGET_SLUGS.forEach(slug => {
  if (featuresContent.includes(slug)) {
    console.log(`  [PASS] ${slug} found in src/app/features/page.tsx`);
  } else {
    console.error(`  [FAIL] ${slug} missing from src/app/features/page.tsx`);
    allPassed = false;
  }
});

// public/sitemap-features.xml
const sitemapPath = path.join(ROOT_DIR, 'public/sitemap-features.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
TARGET_SLUGS.forEach(slug => {
  if (sitemapContent.includes(slug)) {
    console.log(`  [PASS] ${slug} found in public/sitemap-features.xml`);
  } else {
    console.error(`  [FAIL] ${slug} missing from public/sitemap-features.xml`);
    allPassed = false;
  }
});

// public/llms-full.txt
const llmsPath = path.join(ROOT_DIR, 'public/llms-full.txt');
const llmsContent = fs.readFileSync(llmsPath, 'utf8');
TARGET_SLUGS.forEach(slug => {
  if (llmsContent.includes(slug)) {
    console.log(`  [PASS] ${slug} found in public/llms-full.txt`);
  } else {
    console.error(`  [FAIL] ${slug} missing from public/llms-full.txt`);
    allPassed = false;
  }
});

console.log('\n================================================================');
if (allPassed) {
  console.log('ALL ROUND 128 QUALITY CHECKS PASSED PERFECTLY!');
  console.log('================================================================');
  process.exit(0);
} else {
  console.error('QUALITY CHECK FAILED! Please review the errors above.');
  console.log('================================================================');
  process.exit(1);
}
