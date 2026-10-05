const fs = require('fs');
const path = require('path');

const affId = '4e047466.08412853.4e047467.bbffea72';
const targetUrl = 'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F';
const affiliateFurusatoUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(targetUrl)}`;

console.log('Replacing non-affiliate furusato URL:');
console.log('FROM:', targetUrl);
console.log('TO:  ', affiliateFurusatoUrl);

const appDir = path.join(__dirname, 'src/app');

function scanAndReplace(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAndReplace(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(targetUrl)) {
        // 全てのアフィリエイトリンクへの置換
        const replaced = content.split(targetUrl).join(affiliateFurusatoUrl);
        fs.writeFileSync(fullPath, replaced, 'utf8');
        console.log(`Updated: ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

// src/app だけでなくルートのスクリプト群も走査
scanAndReplace(appDir);

// ルートのジェネレータースクリプトも更新
const rootFiles = ['generate_4_furusato_pages_round7.js', 'generate_4_furusato_pages_round8.js', 'generate_4_furusato_pages_round9.js'];
for (const f of rootFiles) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    if (content.includes(targetUrl)) {
      const replaced = content.split(targetUrl).join(affiliateFurusatoUrl);
      fs.writeFileSync(p, replaced, 'utf8');
      console.log(`Updated script: ${f}`);
    }
  }
}

console.log('All replacements completed successfully.');
