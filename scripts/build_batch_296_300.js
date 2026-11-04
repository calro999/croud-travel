// scripts/build_batch_296_300.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_296_300_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle26 = require('./new_articles/article26_granillumi');
const buildArticle27 = require('./new_articles/article27_misotsuchi');
const buildArticle28 = require('./new_articles/article28_yokote');
const buildArticle29 = require('./new_articles/article29_nagahama');
const buildArticle30 = require('./new_articles/article30_suwa');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-shizuoka-izukogen-granillumi-omuro-ito-onsen-hotels-guide",
    builder: buildArticle26,
    noteNum: 296
  },
  {
    themeKey: "winter-saitama-chichibu-misotsuchi-tsurara-ashigakubo-onsen-hotels-guide",
    builder: buildArticle27,
    noteNum: 297
  },
  {
    themeKey: "winter-akita-yokote-kamakura-snow-festival-yuzawa-onsen-hotels-guide",
    builder: buildArticle28,
    noteNum: 298
  },
  {
    themeKey: "winter-shiga-nagahama-kohoku-wild-duck-nabe-taiko-onsen-hotels-guide",
    builder: buildArticle29,
    noteNum: 299
  },
  {
    themeKey: "winter-nagano-suwa-taisha-hatsumode-omiwatari-kamisuwa-onsen-hotels-guide",
    builder: buildArticle30,
    noteNum: 300
  }
];

console.log('--- Generating 5 New Killer Articles (note-296 to note-300) ---');

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
