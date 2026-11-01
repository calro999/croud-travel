// scripts/build_batch_281_285.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_281_285_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle11 = require('./new_articles/article11_nikko');
const buildArticle12 = require('./new_articles/article12_saga');
const buildArticle13 = require('./new_articles/article13_shuzenji');
const buildArticle14 = require('./new_articles/article14_kanazawa');
const buildArticle15 = require('./new_articles/article15_karuizawa');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide",
    builder: buildArticle11,
    noteNum: 281
  },
  {
    themeKey: "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide",
    builder: buildArticle12,
    noteNum: 282
  },
  {
    themeKey: "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide",
    builder: buildArticle13,
    noteNum: 283
  },
  {
    themeKey: "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide",
    builder: buildArticle14,
    noteNum: 284
  },
  {
    themeKey: "autumn-winter-karuizawa-kumobaike-illumination-resort-hotels-guide",
    builder: buildArticle15,
    noteNum: 285
  }
];

console.log('--- Generating 5 New Killer Articles (note-281 to note-285) ---');

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
