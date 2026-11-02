// scripts/build_batch_286_290.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_286_290_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle16 = require('./new_articles/article16_sapporo');
const buildArticle17 = require('./new_articles/article17_okuhida');
const buildArticle18 = require('./new_articles/article18_shibu');
const buildArticle19 = require('./new_articles/article19_tottori');
const buildArticle20 = require('./new_articles/article20_atami');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "autumn-winter-sapporo-white-illumination-odori-park-hotels-guide",
    builder: buildArticle16,
    noteNum: 286
  },
  {
    themeKey: "winter-okuhida-shin-hotaka-ropeway-snow-onsen-hotels-guide",
    builder: buildArticle17,
    noteNum: 287
  },
  {
    themeKey: "winter-nagano-shibu-onsen-jigokudani-snow-monkey-hotels-guide",
    builder: buildArticle18,
    noteNum: 288
  },
  {
    themeKey: "winter-tottori-sand-dunes-illusion-matsubagani-misasa-kaike-guide",
    builder: buildArticle19,
    noteNum: 289
  },
  {
    themeKey: "winter-shizuoka-atami-winter-fireworks-baien-momiji-ume-hotels-guide",
    builder: buildArticle20,
    noteNum: 290
  }
];

console.log('--- Generating 5 New Killer Articles (note-286 to note-290) ---');

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
