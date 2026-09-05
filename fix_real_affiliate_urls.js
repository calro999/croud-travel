const fs = require('fs');
const path = require('path');

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
// 確定した真の楽天トラベルふるさと納税公式URL
const realFurusatoUrl = 'https://travel.rakuten.co.jp/special/furusato/';
// アフィリエイト経由URL
const realAffiliateUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent(realFurusatoUrl)}`;

console.log('REAL AFFILIATE URL TO APPLY:');
console.log(realAffiliateUrl);

const oldInvalidPatterns = [
  'https://event.travel.rakuten.co.jp/special/furusato/',
  'https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fevent.travel.rakuten.co.jp%2Fspecial%2Ffurusato%2F',
  'https://hb.afl.rakuten.co.jp/hgc/4e047466.08412853.4e047467.bbffea72/?pc=https%3A%2F%2Fevent.travel.rakuten.co.jp%2Fspecial%2Ffurusato%2F'
];

let updatedCount = 0;

function scanAndFix(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAndFix(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const bad of oldInvalidPatterns) {
        if (content.includes(bad)) {
          content = content.split(bad).join(realAffiliateUrl);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        updatedCount++;
        console.log(`Updated valid affiliate URL in: ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

// 走査実行
scanAndFix(path.join(__dirname, 'src/app'));

// ルートのスクリプト群も走査・置換
const rootScripts = [
  'generate_4_furusato_pages_round7.js',
  'generate_4_furusato_pages_round8.js',
  'generate_4_furusato_pages_round9.js',
  'add_cta_to_round1_to_6.js',
  'fix_affiliate_links.js',
  'fix_all_cta_affiliates.js'
];

for (const f of rootScripts) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    let changed = false;
    for (const bad of oldInvalidPatterns) {
      if (content.includes(bad)) {
        content = content.split(bad).join(realAffiliateUrl);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(p, content, 'utf8');
      console.log(`Updated root script: ${f}`);
    }
  }
}

console.log(`\nSuccessfully verified and replaced all URLs in ${updatedCount} files!`);
