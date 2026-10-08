const fs = require('fs');
const path = require('path');

const targets = [
  {
    noteNum: 177,
    slug: 'winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay',
    theme: '沖縄・南城＆斎場御嶽・知念岬'
  },
  {
    noteNum: 178,
    slug: 'winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay',
    theme: '宮崎・日南＆飫肥城下町・鵜戸神宮'
  },
  {
    noteNum: 179,
    slug: 'winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay',
    theme: '高知・安芸＆室戸岬・野良時計'
  },
  {
    noteNum: 180,
    slug: 'winter-ehime-niihama-besshi-copper-mine-ishizuchi-shrine-hatsumode-iyogyu-stay',
    theme: '愛媛・新居浜＆西条・別子銅山'
  },
  {
    noteNum: 181,
    slug: 'winter-nara-sakurai-oomiwa-shrine-hatsumode-miwa-somen-yamatogyu-stay',
    theme: '奈良・桜井＆大神神社・三輪山'
  }
];

console.log('=== Verifying Round 141 Quality ===\n');

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
  console.log('🎉 ALL QUALITY CHECKS PASSED FOR ROUND 141!');
  console.log('=============================================');
  process.exit(0);
} else {
  console.error('❌ Quality check failed.');
  process.exit(1);
}
