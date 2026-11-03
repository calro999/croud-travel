// scripts/build_batch_291_295.js
const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, 'batch_291_295_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

const buildArticle21 = require('./new_articles/article21_enoshima');
const buildArticle22 = require('./new_articles/article22_luminarie');
const buildArticle23 = require('./new_articles/article23_kurokawa');
const buildArticle24 = require('./new_articles/article24_koiwai');
const buildArticle25 = require('./new_articles/article25_shikaribetsu');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

const articles = [
  {
    themeKey: "winter-kanagawa-enoshima-shonan-jewel-illumination-kamakura-hotels-guide",
    builder: buildArticle21,
    noteNum: 291
  },
  {
    themeKey: "winter-hyogo-kobe-luminarie-arima-onsen-kinsen-hotels-guide",
    builder: buildArticle22,
    noteNum: 292
  },
  {
    themeKey: "winter-kumamoto-kurokawa-onsen-yuakari-bamboo-lantern-hotels-guide",
    builder: buildArticle23,
    noteNum: 293
  },
  {
    themeKey: "winter-iwate-koiwai-farm-milky-way-illumination-oujuku-shizukuishi-hotels-guide",
    builder: buildArticle24,
    noteNum: 294
  },
  {
    themeKey: "winter-hokkaido-shikaribetsuko-kotan-ice-bath-tokachigawa-moor-hotels-guide",
    builder: buildArticle25,
    noteNum: 295
  }
];

console.log('--- Generating 5 New Killer Articles (note-291 to note-295) ---');

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
  console.log('\n✅ All 5 new killer articles generated successfully with >= 3000 characters!');
} else {
  console.error('\n❌ Some articles failed character count requirement!');
  process.exit(1);
}
