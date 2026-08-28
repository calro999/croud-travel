const fs = require('fs');
const path = require('path');

// 1. Clean all post JSON files
const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));

let cleanedPosts = 0;
for (const file of postFiles) {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove meta / AI-ish UI titles in HTML
  content = content.replace(/【楽天トラベル公式】リアルタイム最安値＆空室状況をチェック/g, '宿泊プラン・空室情報の確認');
  content = content.replace(/楽天トラベル公式 リアルタイム空室・最安値情報/g, '宿泊プラン・空室案内');
  content = content.replace(/（SEO対策・よくある検索）/g, '');
  content = content.replace(/（404絶対なし）/g, '');
  content = content.replace(/（404ゼロ保証）/g, '');
  content = content.replace(/※楽天API公式画像＆アフィリエイトリンクのみを使用/g, '');
  content = content.replace(/【楽天トラベル公式API直接取得データ】/g, '');
  content = content.replace(/RAKUTEN API DIRECT [^\n<"]*/g, 'HOTEL SELECTION');
  content = content.replace(/※楽天トラベル公式API連携・最安値確認/g, '');
  content = content.replace(/楽天トラベルAPIから直接取得した公式データのみで/g, '厳選されたホテル情報で');
  content = content.replace(/楽天トラベルAPI直接取得データで/g, '最新の宿泊プラン情報で');
  content = content.replace(/楽天トラベルAPIから都度直接取得した公式データのみで/g, 'おすすめの宿泊施設情報で');
  content = content.replace(/楽天トラベルAPI直接取得/g, 'おすすめ宿泊');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    cleanedPosts++;
  }
}
console.log(`Cleaned meta expressions in ${cleanedPosts} post JSONs.`);

// 2. Clean all app page files (tsx)
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      callback(fullPath);
    }
  });
}

let cleanedPages = 0;
walkDir(path.join(__dirname, 'src', 'app'), (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/【楽天トラベル公式API直接取得データ】/g, '');
  content = content.replace(/RAKUTEN API DIRECT [^\n<"]*/g, 'RECOMMENDED STAY');
  content = content.replace(/※楽天API公式画像＆アフィリエイトリンクのみを使用/g, '');
  content = content.replace(/※楽天トラベル公式API連携・最安値確認/g, '');
  content = content.replace(/楽天トラベル公式API直接取得データ/g, 'おすすめホテル・温泉旅館');
  content = content.replace(/楽天トラベルAPI直接取得データで徹底網羅/g, 'おすすめの宿泊プランまで徹底網羅');
  content = content.replace(/楽天トラベルAPI直接取得データで完全網羅/g, 'おすすめの宿泊プランまで完全網羅');
  content = content.replace(/楽天トラベルAPIから都度直接取得した公式データのみで/g, 'おすすめの宿泊施設情報で');
  content = content.replace(/楽天トラベルAPIから直接取得した公式データのみで/g, 'おすすめの宿泊施設情報で');
  content = content.replace(/楽天トラベルAPI直接取得/g, 'おすすめ厳選');
  content = content.replace(/（404絶対なし）/g, '');
  content = content.replace(/（404ゼロ保証）/g, '');
  content = content.replace(/（SEO対策・よくある検索）/g, '');
  content = content.replace(/（SEO全クエリハブ）/g, '');
  content = content.replace(/フェーズ2\.5観光名所解説リンク（回遊動線）/g, '周辺の観光名所ガイド');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    cleanedPages++;
  }
});

console.log(`Cleaned meta expressions in ${cleanedPages} page TSX files.`);
