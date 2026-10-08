const fs = require('fs');
const path = require('path');

const targets = [
  {
    noteNum: 167,
    slug: 'winter-chiba-katori-shrine-hatsumode-sawara-inubosaki-kinmedai-stay',
    theme: '千葉・香取＆佐原・銚子'
  },
  {
    noteNum: 168,
    slug: 'winter-okayama-tsuyama-castle-mimasaka-santo-onsen-sozurinabe-chiyagyu-stay',
    theme: '岡山・津山＆美作三湯'
  },
  {
    noteNum: 169,
    slug: 'winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay',
    theme: '滋賀・多賀＆彦根・湖東'
  },
  {
    noteNum: 170,
    slug: 'winter-tokushima-mima-udatsu-kirihataji-hatsumode-awaodori-onsen-stay',
    theme: '徳島・美馬＆吉野川・阿波'
  },
  {
    noteNum: 171,
    slug: 'winter-toyama-amaharashi-tateyama-snow-zuiryuji-hatsumode-kanburi-stay',
    theme: '富山・雨晴＆高岡・氷見'
  }
];

console.log('=== Verifying Round 139 Quality ===\n');

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
    console.log(`  [PASS] Character count: ${charCount.toLocaleString()} chars`);
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

// 3. 記事間の重複度チェック（コピペ・使い回しがないかの検証）
console.log('--- Checking Content Uniqueness Across Articles ---');
for (let i = 0; i < noteContents.length; i++) {
  for (let j = i + 1; j < noteContents.length; j++) {
    const c1 = noteContents[i];
    const c2 = noteContents[j];
    
    // 各記事の段落抽出（50文字以上）
    const p1 = c1.content.split('\n\n').filter(p => p.trim().length > 50 && !p.startsWith('##') && !p.startsWith('---') && !p.startsWith('👉') && !p.startsWith('!'));
    const p2 = c2.content.split('\n\n').filter(p => p.trim().length > 50 && !p.startsWith('##') && !p.startsWith('---') && !p.startsWith('👉') && !p.startsWith('!'));

    let duplicateCount = 0;
    for (const paragraph1 of p1) {
      if (paragraph1.includes('楽天ふるさと納税を活用すると')) continue;
      if (p2.includes(paragraph1)) {
        duplicateCount++;
        console.error(`  [DUPLICATE DETECTED] Between note-${c1.noteNum} and note-${c2.noteNum}: "${paragraph1.substring(0, 40)}..."`);
      }
    }

    if (duplicateCount === 0) {
      console.log(`  [PASS] note-${c1.noteNum} vs note-${c2.noteNum}: 100% Unique paragraphs (Zero duplicate content)`);
    } else {
      allPassed = false;
    }
  }
}

if (allPassed) {
  console.log('\n🌟 ALL QUALITY CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('\n❌ Quality check failed!');
  process.exit(1);
}
