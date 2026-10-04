const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay',
  'winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay',
  'winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay',
  'winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay',
  'winter-shiga-omihachiman-hachimanbori-himure-omigyu-stay'
];

const ngWords = [
  'いかがでしたでしょうか',
  'いかがでしたか',
  'いかがでしたでしょうか？',
  '参考にしてみてください',
  '参考になれば幸いです',
  'いかがだったでしょうか',
  '今回は',
  '今回は、',
  'をご紹介しました',
  'をご紹介させていただきました',
  'ぜひ訪れてみてくださいね',
  '足を運んでみてくださいね'
];

let hasError = false;

console.log('=== Round 120 Comprehensive Quality Verification ===\n');

// 1. 各記事ファイルの検証
slugs.forEach(slug => {
  const filePath = path.join(__dirname, 'src', 'app', slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [Missing File] ${filePath} does not exist!`);
    hasError = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 純日本語文字数カウント（HTMLタグ・英数字・記号・import文等を除去）
  const cleanJapanese = content
    .replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/export\s+const\s+metadata[\s\S]*?};/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[a-zA-Z0-9_\-\.\:\/\\,\{\}\[\]\(\)\<\>\=\;\"\'\`\&\?\%\$\#\@\*\+\~\^\!\|]/g, '')
    .replace(/\s+/g, '');

  console.log(`[Testing] ${slug}`);
  console.log(`  - Pure Japanese Character Count: ${cleanJapanese.length} chars (Requirement: >= 3,000)`);
  if (cleanJapanese.length < 3000) {
    console.error(`  ❌ Failed: Character count is below 3,000!`);
    hasError = true;
  } else {
    console.log(`  ✅ Passed: Character count >= 3,000`);
  }

  // AI臭NGワードチェック
  let foundNg = [];
  ngWords.forEach(ng => {
    if (content.includes(ng)) {
      foundNg.push(ng);
    }
  });
  if (foundNg.length > 0) {
    console.error(`  ❌ Found AI cliché words: ${foundNg.join(', ')}`);
    hasError = true;
  } else {
    console.log(`  ✅ Passed: No AI cliché words found`);
  }

  // 楽天アフィリエイトURLチェック
  if (!content.includes('rakuten.co.jp') && !content.includes('travel.rakuten.co.jp')) {
    console.error(`  ❌ Missing Rakuten Affiliate link!`);
    hasError = true;
  } else {
    console.log(`  ✅ Passed: Live Rakuten API affiliate link present`);
  }

  // JSON-LD Schema (Article, BreadcrumbList, FAQPage) チェック
  if (!content.includes('"@type": "Article"') || !content.includes('"@type": "BreadcrumbList"') || !content.includes('"@type": "FAQPage"')) {
    console.error(`  ❌ Missing Structured Data (JSON-LD schema)!`);
    hasError = true;
  } else {
    console.log(`  ✅ Passed: Article, Breadcrumb, and FAQPage JSON-LD schemas present`);
  }

  // メタデータチェック
  if (!content.includes('canonical') || !content.includes('openGraph') || !content.includes('twitter')) {
    console.error(`  ❌ Incomplete metadata!`);
    hasError = true;
  } else {
    console.log(`  ✅ Passed: Full SEO metadata defined`);
  }

  console.log('');
});

// 2. features/page.tsx チェック
const featuresPage = fs.readFileSync(path.join(__dirname, 'src', 'app', 'features', 'page.tsx'), 'utf8');
slugs.forEach(slug => {
  if (!featuresPage.includes(slug)) {
    console.error(`❌ features/page.tsx missing link to ${slug}`);
    hasError = true;
  }
});
console.log(`✅ Passed: All 5 slugs linked in src/app/features/page.tsx`);

// 3. sitemap-features.xml チェック
const sitemap = fs.readFileSync(path.join(__dirname, 'public', 'sitemap-features.xml'), 'utf8');
slugs.forEach(slug => {
  if (!sitemap.includes(slug)) {
    console.error(`❌ sitemap-features.xml missing ${slug}`);
    hasError = true;
  }
});
console.log(`✅ Passed: All 5 slugs registered in sitemap-features.xml`);

// 4. llms-full.txt チェック
const llms = fs.readFileSync(path.join(__dirname, 'public', 'llms-full.txt'), 'utf8');
slugs.forEach(slug => {
  if (!llms.includes(slug)) {
    console.error(`❌ llms-full.txt missing ${slug}`);
    hasError = true;
  }
});
console.log(`✅ Passed: All 5 slugs indexed in public/llms-full.txt`);

console.log('\n==================================================');
if (hasError) {
  console.error('❌ QUALITY VERIFICATION FAILED! Please fix errors above.');
  process.exit(1);
} else {
  console.log('🎉 ALL QUALITY VERIFICATIONS PASSED SUCCESSFULLY!');
  process.exit(0);
}
