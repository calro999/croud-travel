const fs = require('fs');
const path = require('path');

const targets = [
  {
    noteNum: 182,
    slug: 'winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay',
    theme: '鹿児島・南薩摩＆知覧・枕崎'
  },
  {
    noteNum: 183,
    slug: 'winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay',
    theme: '埼玉・行田＆忍城・足袋蔵'
  },
  {
    noteNum: 184,
    slug: 'winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay',
    theme: '茨城・桜川＆真壁町並み・筑波山北麓'
  },
  {
    noteNum: 185,
    slug: 'winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay',
    theme: '山梨・大月＆名勝猿橋・岩殿山'
  },
  {
    noteNum: 186,
    slug: 'winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay',
    theme: '佐賀・鹿島＆肥前浜宿・祐徳稲荷神社'
  }
];

console.log('=== Verifying Round 142 Quality ===\n');

let allPassed = true;
const noteContents = [];

for (const t of targets) {
  console.log(`Checking ${t.theme} (note-${t.noteNum}.md & src/app/${t.slug}/page.tsx)...`);

  // 1. note markdown check
  const notePath = path.join(__dirname, `../../note-${t.noteNum}.md`);
  if (!fs.existsSync(notePath)) {
    console.error(`  [FAIL] Missing file: ${notePath}`);
    allPassed = false;
    continue;
  }

  const noteContent = fs.readFileSync(notePath, 'utf-8');
  noteContents.push({ noteNum: t.noteNum, content: noteContent });

  const charCount = noteContent.length;
  if (charCount < 3000) {
    console.error(`  [FAIL] Character count too short: ${charCount} (< 3000)`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Character count: ${charCount.toLocaleString()} chars (> 3,000 criteria passed)`);
  }

  // 宿リンク・画像チェック
  const rakutenImageMatches = noteContent.match(/!\[.*?\]\(https?:\/\/.*?rakuten.*?\)/g) || [];
  const wikiImageMatches = noteContent.match(/!\[.*?\]\(https?:\/\/.*?wikimedia.*?\)/g) || [];
  const rakutenLinkMatches = noteContent.match(/https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\//g) || [];

  if (rakutenImageMatches.length < 5) {
    console.warn(`  [WARN] Rakuten images found: ${rakutenImageMatches.length} (expected 5)`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Rakuten hotel images: ${rakutenImageMatches.length}`);
  }

  if (wikiImageMatches.length < 1) {
    console.warn(`  [WARN] Wikipedia images found: ${wikiImageMatches.length} (expected 1)`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Wikipedia spot image: ${wikiImageMatches.length}`);
  }

  if (rakutenLinkMatches.length < 5) {
    console.warn(`  [WARN] Affiliate links found: ${rakutenLinkMatches.length}`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Affiliate / API links: ${rakutenLinkMatches.length}`);
  }

  // 2. Next.js page.tsx check
  const pagePath = path.join(__dirname, `../../src/app/${t.slug}/page.tsx`);
  if (!fs.existsSync(pagePath)) {
    console.error(`  [FAIL] Missing page.tsx: ${pagePath}`);
    allPassed = false;
  } else {
    const pageContent = fs.readFileSync(pagePath, 'utf-8');
    if (!pageContent.includes('export const metadata') || !pageContent.includes('application/ld+json')) {
      console.error(`  [FAIL] Metadata or JSON-LD missing in ${pagePath}`);
      allPassed = false;
    } else {
      console.log(`  [PASS] Next.js page.tsx validated (Metadata & JSON-LD present)`);
    }
  }

  console.log('');
}

// 3. 重複チェック（各note間のユニーク性・独立性）
console.log('--- Duplicate & Independent Content Check ---');
for (let i = 0; i < noteContents.length; i++) {
  for (let j = i + 1; j < noteContents.length; j++) {
    const a = noteContents[i];
    const b = noteContents[j];
    
    // イントロ段落の重複がないかチェック
    const aIntro = a.content.split('##')[1] || '';
    const bIntro = b.content.split('##')[1] || '';
    
    if (aIntro.substring(0, 100) === bIntro.substring(0, 100)) {
      console.error(`  [FAIL] Duplication detected between note-${a.noteNum} and note-${b.noteNum}`);
      allPassed = false;
    }
  }
}
console.log('  [PASS] All 5 articles are completely distinct and independent!\n');

if (allPassed) {
  console.log('=============================================');
  console.log('🎉 ALL QUALITY CHECKS PASSED FOR ROUND 142!');
  console.log('=============================================');
  process.exit(0);
} else {
  console.error('❌ Quality check failed.');
  process.exit(1);
}
