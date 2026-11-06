// scripts/build_batch_306_308.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_306_308_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle36 = require('./new_articles/article36_huistenbosch');
const buildArticle37 = require('./new_articles/article37_ashikaga');
const buildArticle38 = require('./new_articles/article38_kanazawa');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-nagasaki-huistenbosch-christmas-illumination-hotels-guide",
    builder: buildArticle36,
    noteNum: 306
  },
  {
    themeKey: "winter-tochigi-ashikaga-flowerpark-illumination-sano-hotels-guide",
    builder: buildArticle37,
    noteNum: 307
  },
  {
    themeKey: "winter-ishikawa-kanazawa-kenrokuen-yukitsuri-kanogani-hotels-guide",
    builder: buildArticle38,
    noteNum: 308
  }
];

console.log('--- Generating 3 New Killer Articles (note-306 to note-308) ---');

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
  console.log(`  -> 本文純文字数 (タグ・空白除外): ${jsonCharCount} 文字 (要件: 3000文字以上 -> ${passed ? '✅ 達成' : '❌ 不足'})`);
  console.log(`  -> Note純文字数 (空白除外): ${noteCharCount} 文字`);
}

if (allPassed) {
  console.log('\n✅ All 3 new killer articles generated successfully with >= 3000 characters!');
} else {
  console.error('\n❌ Some articles failed character count requirement!');
  process.exit(1);
}
