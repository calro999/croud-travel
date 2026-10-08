const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay',
  'winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay',
  'winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay',
  'winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay',
  'winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay'
];

const noteNums = [152, 153, 154, 155, 156];

console.log('================================================================');
console.log('Verifying Round 136 Quality, Character Counts, Links, and Images');
console.log('================================================================');

let allPassed = true;

const aiCliches = [
  'いかがでしたでしょうか',
  'いかがでしたか',
  '魅力をご紹介',
  'と言えるでしょう',
  'に違いありません',
  'してみてはいかがでしょうか'
];

// 1. Next.js ページの検証
console.log('\n--- 1. Next.js Page Verification ---');
slugs.forEach(slug => {
  const pPath = path.join(process.cwd(), 'src', 'app', slug, 'page.tsx');
  if (!fs.existsSync(pPath)) {
    console.error(`❌ Page not found: ${pPath}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(pPath, 'utf8');
  const sizeKb = (content.length / 1024).toFixed(1);

  const hasAffiliate = content.includes('hb.afl.rakuten.co.jp');
  const hasRakutenImg = content.includes('img.travel.rakuten.co.jp');
  const hasWikiImg = content.includes('wikimedia.org');
  const hasFaqLd = content.includes('FAQPage');
  const hasBreadcrumbLd = content.includes('BreadcrumbList');
  const hasTouristLd = content.includes('TouristAttraction');
  const foundCliche = aiCliches.find(c => content.includes(c));
  const hasPlaceholder = content.includes('undefined') || content.includes('null') || content.includes('[object Object]');

  if (!hasAffiliate || !hasRakutenImg || !hasWikiImg || !hasFaqLd || !hasBreadcrumbLd || !hasTouristLd || foundCliche || hasPlaceholder) {
    console.error(`❌ Page issues in ${slug}:`);
    console.error(`  - Affiliate: ${hasAffiliate}, Rakuten Img: ${hasRakutenImg}, Wiki Img: ${hasWikiImg}`);
    console.error(`  - FAQ LD: ${hasFaqLd}, Breadcrumb LD: ${hasBreadcrumbLd}, Tourist LD: ${hasTouristLd}`);
    console.error(`  - AI Cliche: ${foundCliche}, Placeholder: ${hasPlaceholder}`);
    allPassed = false;
  } else {
    console.log(`✅ ${slug} (${sizeKb} KB) - All schemas, images, and affiliate links verified!`);
  }
});

// 2. note-*.md の検証
console.log('\n--- 2. note-*.md Article Verification (Character Count >= 3000) ---');
noteNums.forEach(num => {
  const nPath = path.join(process.cwd(), `note-${num}.md`);
  if (!fs.existsSync(nPath)) {
    console.error(`❌ note-${num}.md not found`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(nPath, 'utf8');
  const charCount = content.length;

  const hasAffiliate = content.includes('hb.afl.rakuten.co.jp');
  const hasRakutenImg = content.includes('img.travel.rakuten.co.jp');
  const hasWikiImg = content.includes('wikimedia.org');
  const foundCliche = aiCliches.find(c => content.includes(c));
  const hasPlaceholder = content.includes('undefined') || content.includes('null') || content.includes('[object Object]');

  if (charCount < 3000) {
    console.error(`❌ note-${num}.md character count too short: ${charCount} (< 3000)`);
    allPassed = false;
  } else if (!hasAffiliate || !hasRakutenImg || !hasWikiImg || foundCliche || hasPlaceholder) {
    console.error(`❌ note-${num}.md quality issues: Aff: ${hasAffiliate}, Rakuten: ${hasRakutenImg}, Wiki: ${hasWikiImg}, AI: ${foundCliche}, Placeholder: ${hasPlaceholder}`);
    allPassed = false;
  } else {
    console.log(`✅ note-${num}.md: ${charCount.toLocaleString()} 文字 - 完全独立・高品質・API画像＆リンク完備！`);
  }
});

if (allPassed) {
  console.log('\n🎉 ALL QUALITY CHECKS PASSED PERFECTLY! (No AI Cliche, Rich Content, 100% Verified)');
} else {
  console.error('\n❌ Some quality checks failed!');
  process.exit(1);
}
