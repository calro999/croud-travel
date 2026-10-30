// scripts/build_new_5_articles.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'new_5_killer_articles_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle1 = require('./new_articles/article1_nabana');
const buildArticle2 = require('./new_articles/article2_atami');
const buildArticle3 = require('./new_articles/article3_ashikaga');
const buildArticle4 = require('./new_articles/article4_matsumoto');
const buildArticle5 = require('./new_articles/article5_koto');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-mie-nabana-no-sato-illumination-nagashima-hotels-guide",
    builder: buildArticle1,
    noteNum: 271
  },
  {
    themeKey: "autumn-winter-atami-kaijo-hanabi-momiji-onsen-hotels-guide",
    builder: buildArticle2,
    noteNum: 272
  },
  {
    themeKey: "autumn-winter-ashikaga-flower-park-illumination-hotels-guide",
    builder: buildArticle3,
    noteNum: 273
  },
  {
    themeKey: "autumn-winter-matsumoto-castle-night-illumination-onsen-hotels-guide",
    builder: buildArticle4,
    noteNum: 274
  },
  {
    themeKey: "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide",
    builder: buildArticle5,
    noteNum: 275
  }
];

console.log('--- Generating 5 New Killer Articles (note-271 to note-275) ---');

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
