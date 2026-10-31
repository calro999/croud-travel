// scripts/build_batch_276_280.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_276_280_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle6 = require('./new_articles/article6_kawaguchiko');
const buildArticle7 = require('./new_articles/article7_sendai');
const buildArticle8 = require('./new_articles/article8_oirase');
const buildArticle9 = require('./new_articles/article9_miyajima');
const buildArticle10 = require('./new_articles/article10_ritsurin');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide",
    builder: buildArticle6,
    noteNum: 276
  },
  {
    themeKey: "winter-sendai-hikari-no-pageant-akiu-onsen-hotels-guide",
    builder: buildArticle7,
    noteNum: 277
  },
  {
    themeKey: "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide",
    builder: buildArticle8,
    noteNum: 278
  },
  {
    themeKey: "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide",
    builder: buildArticle9,
    noteNum: 279
  },
  {
    themeKey: "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide",
    builder: buildArticle10,
    noteNum: 280
  }
];

console.log('--- Generating 5 New Killer Articles (note-276 to note-280) ---');

let allPassed = true;

for (const a of articles) {
  const themeData = rawData[a.themeKey];
  const { postData, noteMarkdown } = a.builder(themeData);

  // 1. JSON output
  const jsonPath = path.join(POSTS_DIR, `${postData.slug}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(postData, null, 2), 'utf8');

  // 2. Note Markdown output
  const notePath = path.join(ROOT_DIR, `note-${a.noteNum}.md`);
  fs.writeFileSync(notePath, noteMarkdown, 'utf8');

  // 3. 文字数カウント（タグ除去した純テキスト文字数）
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
  console.log('\n✅ All 5 new articles generated successfully with >= 3000 characters!');
} else {
  console.error('\n❌ Some articles failed character count requirement!');
  process.exit(1);
}
