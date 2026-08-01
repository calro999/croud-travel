const fs = require('fs');
const path = require('path');

// ビルド時に個別JSONファイルを結合して一時的なposts.jsonを生成し、
// さらにpublic/sitemap.xmlおよびpublic/robots.txtを物理ファイルとして出力するプレビルド処理
const POSTS_DIR = path.join(__dirname, 'src', 'data', 'posts');
const PUBLIC_DIR = path.join(__dirname, 'public');
const PUBLIC_DATA_DIR = path.join(PUBLIC_DIR, 'data');
const OUTPUT_FILE = path.join(PUBLIC_DATA_DIR, 'posts.json');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_FILE = path.join(PUBLIC_DIR, 'robots.txt');

const BASE_URL = 'https://croud-travel.pages.dev';

const PREFECTURE_SLUGS = [
  "hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima",
  "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa",
  "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano",
  "gifu", "shizuoka", "aichi", "mie",
  "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama",
  "tottori", "shimane", "okayama", "hiroshima", "yamaguchi",
  "tokushima", "kagawa", "ehime", "kochi",
  "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"
];

function main() {
  console.log('--- Prebuild: Bundling travel post JSONs & generating physical sitemap.xml / robots.txt ---');
  
  fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });

  let posts = [];
  
  if (fs.existsSync(POSTS_DIR)) {
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.json'));
    
    posts = files.map(file => {
      try {
        const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
        return JSON.parse(content);
      } catch (err) {
        console.error(`Failed to parse: ${file}`, err);
        return null;
      }
    }).filter(Boolean);

    // 最新記事順（date降順）にソート
    posts.sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`Bundled ${posts.length} posts into ${OUTPUT_FILE}`);

  // --- 1. public/sitemap.xml 物理ファイルの自動生成 ---
  const todayStr = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 静的基本ページ
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/kanazawa`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/noto`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/prefectures`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/sitemap`, priority: '0.8', changefreq: 'weekly' }
  ];

  staticPages.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${p.url}</loc>\n`;
    xml += `    <lastmod>${todayStr}</lastmod>\n`;
    xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
    xml += `    <priority>${p.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // 都道府県ページ (47)
  PREFECTURE_SLUGS.forEach(slug => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/prefectures/${slug}</loc>\n`;
    xml += `    <lastmod>${todayStr}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `  </url>\n`;
  });

  // 記事ページ
  posts.forEach(post => {
    const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : todayStr;
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/posts/${post.id}</loc>\n`;
    xml += `    <lastmod>${postDate}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');
  console.log(`Generated physical sitemap.xml at ${SITEMAP_FILE} with ${staticPages.length + PREFECTURE_SLUGS.length + posts.length} URLs`);

  // --- 2. public/robots.txt 物理ファイルの自動生成 ---
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(ROBOTS_FILE, robotsTxt, 'utf8');
  console.log(`Generated physical robots.txt at ${ROBOTS_FILE}`);

  // --- 3. public/llms.txt (LLM/AI専用標準サマリー仕様) の自動生成 ---
  let llmsTxt = `# 日本全国・旅びより (Tabibiyori Travel Magazine)

> 日本全国47都道府県の厳選温泉宿・リゾートホテル・観光ガイド・ご当地グルメ・地酒・お土産情報を旅ライターが網羅する旅行マガジン。

## 主要セクション
- [トップページ](${BASE_URL}/): 厳選宿と47都道府県旅行ハブ
- [47都道府県観光ガイド一覧](${BASE_URL}/prefectures): 日本全国の地域別・ミクロエリア別観光ガイド
- [お得キャンペーン一覧](${BASE_URL}/campaigns): 楽天トラベルの最新割引クーポン・セール情報
- [サイトマップ](${BASE_URL}/sitemap): 全ページの構造化ナビゲーション

## 都道府県別観光＆宿泊ガイド
`;
  PREFECTURE_SLUGS.forEach(slug => {
    llmsTxt += `- [${slug.toUpperCase()} 観光＆宿泊ガイド](${BASE_URL}/prefectures/${slug})\n`;
  });

  llmsTxt += `\n## 最新厳選宿・観光ルポ記事\n`;
  posts.slice(0, 50).forEach(post => {
    llmsTxt += `- [${post.title}](${BASE_URL}/posts/${post.id}): ${post.hotel_name}（${post.prefecture}）\n`;
  });

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf8');
  console.log(`Generated physical llms.txt at ${path.join(PUBLIC_DIR, 'llms.txt')}`);

  // --- 4. public/llms-full.txt (LLM/AI専用全記事コンテンツ集約仕様) の自動生成 ---
  let llmsFullTxt = `# 日本全国・旅びより - 全記事データアーカイブ (LLMs Full Knowledge Base)

> 当ファイルは、ChatGPT、Claude、Perplexity、Geminiなどの大規模言語モデル（LLM）が日本全国の観光名所・温泉宿・名物グルメ・モデルコースの知識を取得するための完全な知識データベースです。

---

`;

  posts.forEach(post => {
    llmsFullTxt += `## 記事: ${post.title}\n`;
    llmsFullTxt += `- URL: ${BASE_URL}/posts/${post.id}\n`;
    llmsFullTxt += `- 宿泊施設名: ${post.hotel_name}\n`;
    llmsFullTxt += `- 都道府県: ${post.prefecture}\n`;
    llmsFullTxt += `- エリア: ${post.area}\n`;
    if (post.price) llmsFullTxt += `- 参考価格: ¥${post.price}〜\n`;
    if (post.rating) llmsFullTxt += `- 評価: ⭐ ${post.rating}\n`;
    llmsFullTxt += `\n### ルポ・解説内容\n${(post.review || '').replace(/<[^>]*>/g, '')}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf8');
  console.log(`Generated physical llms-full.txt at ${path.join(PUBLIC_DIR, 'llms-full.txt')}`);
}

main();
