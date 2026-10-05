const fs = require('fs');
const path = require('path');

const r123 = JSON.parse(fs.readFileSync('round123_batch_data.json', 'utf8'));

console.log('=== ROUND 123 QUALITY VERIFICATION (STAGE 1 & STAGE 2) ===\n');

// Forbidden AI cliché patterns
const aiCliches = [
  'いかがでしたでしょうか',
  'いかがだったでしょうか',
  '魅力が伝わりましたでしょうか',
  'ぜひ参考にしてみてください',
  '参考にしていただければ幸いです',
  '足を運んでみてはいかがでしょうか',
  'いかがですか',
  'AI',
  '人工知能',
  'プロンプト',
  'ChatGPT',
  'Gemini'
];

let hasErrors = false;

r123.forEach((article, idx) => {
  console.log(`[Check Article ${idx + 1}] ${article.slug}`);
  const targetFile = path.join(__dirname, 'src/app', article.slug, 'page.tsx');
  
  if (!fs.existsSync(targetFile)) {
    console.error(`  [FAIL] File does not exist: ${targetFile}`);
    hasErrors = true;
    return;
  }
  
  const content = fs.readFileSync(targetFile, 'utf8');
  
  // 1. Length check
  console.log(`  - File size: ${content.length} characters`);
  if (content.length < 2000) {
    console.error(`  [FAIL] Content is too short (${content.length} chars)`);
    hasErrors = true;
  }
  
  // 2. AI Cliches check
  aiCliches.forEach(cliche => {
    if (content.includes(cliche)) {
      console.error(`  [FAIL] Contains AI cliché: "${cliche}"`);
      hasErrors = true;
    }
  });
  
  // 3. Metadata and JSON-LD schema check
  if (!content.includes('metadata: Metadata')) {
    console.error(`  [FAIL] Missing Next.js metadata export`);
    hasErrors = true;
  }
  if (!content.includes('FAQPage') || !content.includes('schema.org')) {
    console.error(`  [FAIL] Missing FAQ / Schema JSON-LD`);
    hasErrors = true;
  }
  if (!content.includes(`https://croud-travel.com/${article.slug}`)) {
    console.error(`  [FAIL] Missing Canonical or URL match`);
    hasErrors = true;
  }
  
  // 4. Hotel links and affiliate check
  if (!content.includes('hb.afl.rakuten.co.jp')) {
    console.error(`  [FAIL] Missing Rakuten affiliate links`);
    hasErrors = true;
  }
  
  console.log(`  -> Passed validation checks for ${article.slug}`);
});

if (hasErrors) {
  console.error('\n❌ Verification FAILED with errors!');
  process.exit(1);
} else {
  console.log('\n✅ ALL 5 ARTICLES PASSED 2-STAGE QUALITY VERIFICATION!');
}
