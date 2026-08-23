const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

// 保持する静的テキストファイルのホワイトリスト（out直下）
const PRESERVED_ROOT_TXT_FILES = new Set([
  'llms.txt',
  'llms-full.txt',
  'robots.txt',
  'croudtravelindexnow2026.txt',
  'b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e.txt',
  '54d2a4384bc4abc254d2a439aa1be583.txt'
]);

function cleanDirectory(dir, isRoot = false) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      cleanDirectory(fullPath, false);
      // 空ディレクトリがあれば削除
      try {
        const remaining = fs.readdirSync(fullPath);
        if (remaining.length === 0) {
          fs.rmdirSync(fullPath);
        }
      } catch (e) {}
    } else if (entry.isFile()) {
      const isNextPayload = entry.name.startsWith('__next.') || entry.name.endsWith('.__PAGE__.txt');
      const isTxt = entry.name.endsWith('.txt');

      if (isNextPayload) {
        fs.unlinkSync(fullPath);
      } else if (isTxt) {
        if (isRoot && PRESERVED_ROOT_TXT_FILES.has(entry.name)) {
          // 保持する
        } else if (isRoot && !entry.name.startsWith('__next') && entry.name !== 'index.txt') {
          // ルートにあるカスタム検証ファイル等は保持
        } else {
          // 各ページ用の index.txt やセグメントtxt等を削除
          fs.unlinkSync(fullPath);
        }
      }
    }
  }
}

function countFiles(dir) {
  let count = 0;
  if (!fs.existsSync(dir)) return 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countFiles(fullPath);
    } else if (entry.isFile()) {
      count++;
    }
  }
  return count;
}

console.log('--- Cleaning export directory for Cloudflare Pages (20k file limit fix) ---');
const beforeCount = countFiles(OUT_DIR);
console.log(`Files in out/ before cleanup: ${beforeCount}`);

cleanDirectory(OUT_DIR, true);

const afterCount = countFiles(OUT_DIR);
console.log(`Files in out/ after cleanup: ${afterCount}`);
console.log(`Removed ${beforeCount - afterCount} unnecessary RSC/payload files.`);

if (afterCount > 20000) {
  console.error(`ERROR: File count ${afterCount} still exceeds Cloudflare Pages 20,000 limit!`);
  process.exit(1);
} else {
  console.log(`SUCCESS: File count is well under the 20,000 limit (${afterCount}/20000).`);
}
