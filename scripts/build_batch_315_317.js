// scripts/build_batch_315_317.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_315_317_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle45 = require('./new_articles/article45_hakata_christmas_advent');
const buildArticle46 = require('./new_articles/article46_marunouchi_illumination');
const buildArticle47 = require('./new_articles/article47_nagoya_noritake_christmas');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-fukuoka-hakata-christmas-advent-illumination-hotels-guide",
    builder: buildArticle45,
    noteNum: 315
  },
  {
    themeKey: "winter-tokyo-marunouchi-illumination-tokyo-station-luxury-hotels-guide",
    builder: buildArticle46,
    noteNum: 316
  },
  {
    themeKey: "winter-aichi-nagoya-noritake-christmas-meieki-sakae-hotels-guide",
    builder: buildArticle47,
    noteNum: 317
  }
];

console.log('--- Generating 3 New Killer Articles (note-315 to note-317) ---');

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
