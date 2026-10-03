const fs = require('fs');
const path = require('path');

const articles = [
  {
    name: '宮城・仙台市内',
    slug: 'winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay',
  },
  {
    name: '広島・庄原＆帝釈峡',
    slug: 'winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay',
  }
];

const ngWords = [
  'いかがでしたでしょうか',
  'いかがでしょうか',
  'いかがでしたか',
  'ぜひ参考に',
  'ぜひ訪れてみて',
  '足を運んでみてはいかが',
  '魅力が伝わりましたでしょうか',
  '人工知能',
  'AIが生成',
  'AIアシスタント'
];

let allPassed = true;

for (const a of articles) {
  const filePath = path.join(__dirname, 'src/app', a.slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [${a.name}] ファイルが存在しません: ${filePath}`);
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 純日本語文字数カウント（タグやコード除外の簡易抽出）
  const textOnly = content
    .replace(/<[^>]+>/g, ' ')
    .replace(/import\s+[\s\S]+?;/g, ' ')
    .replace(/export\s+const\s+[\s\S]+?;/g, ' ')
    .replace(/const\s+jsonLd\s*=[\s\S]+?;/g, ' ')
    .replace(/[a-zA-Z0-9_\-\.\:\/\"\'\{\}\(\)\,\;\=\>\<\@\#\$\%\^\&\*\+\?\!]/g, '')
    .replace(/\s+/g, '');

  const charCount = textOnly.length;

  console.log(`\n========================================`);
  console.log(`検証: ${a.name} (${a.slug})`);
  console.log(`純日本語文字数: ${charCount} 文字`);

  if (charCount < 3000) {
    console.warn(`⚠️ [警告] 3,000文字未満です: ${charCount}文字`);
  } else {
    console.log(`✅ 文字数クリア (>= 3,000文字)`);
  }

  // NGワードチェック
  let foundNg = false;
  for (const ng of ngWords) {
    if (content.includes(ng)) {
      console.error(`❌ NGワード検出: "${ng}"`);
      foundNg = true;
      allPassed = false;
    }
  }
  if (!foundNg) {
    console.log(`✅ AIテンプレ・NGワードなし`);
  }

  // 構造チェック
  const hasMetadata = content.includes('export const metadata: Metadata');
  const hasJsonLd = content.includes('application/ld+json') && content.includes('FAQPage');
  const hasRakutenAffiliate = content.includes('hb.afl.rakuten.co.jp');
  const hasInternalLinks = content.includes('<Link href="/winter-');

  console.log(`Metadata: ${hasMetadata ? '✅' : '❌'}`);
  console.log(`JSON-LD (FAQPage): ${hasJsonLd ? '✅' : '❌'}`);
  console.log(`楽天アフィリエイトリンク: ${hasRakutenAffiliate ? '✅' : '❌'}`);
  console.log(`内部リンク: ${hasInternalLinks ? '✅' : '❌'}`);

  if (!hasMetadata || !hasJsonLd || !hasRakutenAffiliate || !hasInternalLinks) {
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 Round 110 全2記事の基本品質検証を通過しました！');
} else {
  console.error('\n❌ 一部検証に不合格項目があります。');
  process.exit(1);
}
