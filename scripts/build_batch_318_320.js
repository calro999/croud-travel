// scripts/build_batch_318_320.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_318_320_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle48 = require('./new_articles/article48_roppongi_keyakizaka');
const buildArticle49 = require('./new_articles/article49_odaiba_rainbow_fireworks');
const buildArticle50 = require('./new_articles/article50_kobe_herb_gardens_christmas');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-tokyo-roppongi-hills-keyakizaka-illumination-luxury-hotels-guide",
    builder: buildArticle48,
    noteNum: 318
  },
  {
    themeKey: "winter-tokyo-odaiba-rainbow-fireworks-bayview-hotels-guide",
    builder: buildArticle49,
    noteNum: 319
  },
  {
    themeKey: "winter-hyogo-kobe-herb-gardens-christmas-waterfront-hotels-guide",
    builder: buildArticle50,
    noteNum: 320
  }
];

console.log('--- Generating 3 New Killer Articles (note-318 to note-320) ---');

let allPassed = true;

for (const a of articles) {
  const themeData = rawData[a.themeKey];
  const { postData, noteMarkdown } = a.builder(themeData);

  // 1. JSON output (本番記事)
  const jsonPath = path.join(POSTS_DIR, `${postData.slug}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(postData, null, 2), 'utf8');

  // 2. Note Markdown output (note用誘導記事)
  const notePath = path.join(ROOT_DIR, `note-${a.noteNum}.md`);
  fs.writeFileSync(notePath, noteMarkdown, 'utf8');

  // 3. 文字数カウント（タグ・空白除外）
  const plainText = postData.review.replace(/<[^>]+>/g, '').replace(/\s+/g, '');
  const jsonCharCount = plainText.length;
  const noteCharCount = noteMarkdown.replace(/\s+/g, '').length;

  const passed = jsonCharCount >= 3000;
  if (!passed) allPassed = false;

  console.log(`\n[Article ${a.noteNum}] ${postData.title}`);
  console.log(`  -> Slug: ${postData.slug}`);
  console.log(`  -> JSON: ${jsonPath}`);
  console.log(`  -> Note: ${notePath}`);
  console.log(`  -> Main Review Char Count (Plain Text): ${jsonCharCount} chars ${passed ? '✓ PASSED (>= 3000)' : '✗ FAILED (< 3000)'}`);
  console.log(`  -> Note Markdown Char Count: ${noteCharCount} chars`);
}

if (!allPassed) {
  console.error('\n✗ Error: Some articles did not meet the 3000 character minimum requirement!');
  process.exit(1);
} else {
  console.log('\n✓ All articles successfully generated and passed the 3000 character threshold!');
}
