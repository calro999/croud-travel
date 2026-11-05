// scripts/build_batch_301_305.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_301_305_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle31 = require('./new_articles/article31_zao');
const buildArticle32 = require('./new_articles/article32_korankei');
const buildArticle33 = require('./new_articles/article33_okuhida');
const buildArticle34 = require('./new_articles/article34_akan');
const buildArticle35 = require('./new_articles/article35_hamanako');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-yamagata-zao-snow-monster-ropeway-onsen-hotels-guide",
    builder: buildArticle31,
    noteNum: 301
  },
  {
    themeKey: "autumn-winter-aichi-korankei-momiji-lightup-asuke-sanage-onsen-hotels-guide",
    builder: buildArticle32,
    noteNum: 302
  },
  {
    themeKey: "winter-gifu-shinhotaka-ropeway-snow-alps-okuhida-onsen-hotels-guide",
    builder: buildArticle33,
    noteNum: 303
  },
  {
    themeKey: "winter-hokkaido-akan-mashu-frost-flower-ice-lake-onsen-hotels-guide",
    builder: buildArticle34,
    noteNum: 304
  },
  {
    themeKey: "winter-shizuoka-hamanako-kanzanji-illumination-oyster-unagi-hotels-guide",
    builder: buildArticle35,
    noteNum: 305
  }
];

console.log('--- Generating 5 New Killer Articles (note-301 to note-305) ---');

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
  console.log('\n✅ All 5 new killer articles generated successfully with >= 3000 characters!');
} else {
  console.error('\n❌ Some articles failed character count requirement!');
  process.exit(1);
}
