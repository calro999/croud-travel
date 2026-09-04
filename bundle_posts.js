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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

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

    const postSummaries = posts.map(p => ({
      id: p.id,
      title: p.title,
      hotel_name: p.hotel_name,
      description: p.description || '',
      image: p.image || '',
      other_images: p.other_images || [],
      affiliate_url: p.affiliate_url || '',
      prefecture: p.prefecture || '',
      area: p.area || '',
      categories: p.categories || [],
      price: p.price || '',
      rating: p.rating || '',
      date: p.date || '',
      keywords: p.keywords || []
    }));

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(postSummaries), 'utf8');
    console.log(`Bundled ${postSummaries.length} post summaries into ${OUTPUT_FILE}`);
  }

  // --- 1. public/sitemap.xml (Sitemap Index) ＆ カテゴリー別分割サイトマップの自動生成 ---
  const todayStr = new Date().toISOString().split('T')[0];

  // 1-0. 動的特集ハブページ（166ページ）の自動検出
  const appDir = path.join(__dirname, 'src', 'app');
  const appEntries = fs.readdirSync(appDir, { withFileTypes: true });
  const featurePageSlugs = [];
  for (const entry of appEntries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(appDir, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        if (!['api', 'components', 'features', 'posts', 'prefectures', 'spots', 'sitemap', 'campaigns'].includes(entry.name)) {
          featurePageSlugs.push(entry.name);
        }
      }
    }
  }
  featurePageSlugs.sort();

  // 1-1. 市町村サブハブURLの自動抽出
  let citySubHubs = [];
  const citiesFilePath = path.join(__dirname, 'src', 'data', 'citiesData.ts');
  if (fs.existsSync(citiesFilePath)) {
    const citiesFileContent = fs.readFileSync(citiesFilePath, 'utf8');
    const cityMatches = [...citiesFileContent.matchAll(/prefSlug:\s*["\x27]([^"\x27]+)["\x27][\s\S]*?citySlug:\s*["\x27]([^"\x27]+)["\x27]/g)];
    citySubHubs = cityMatches.map(m => `${m[1]}/${m[2]}`);
  }

  // 1-2. 観光名所解説URLの自動抽出
  let spotSlugs = [];
  const spotsFilePath = path.join(__dirname, 'src', 'data', 'spotsData.ts');
  if (fs.existsSync(spotsFilePath)) {
    const spotsFileContent = fs.readFileSync(spotsFilePath, 'utf8');
    const spotMatches = [...spotsFileContent.matchAll(/slug:\s*["\x27]([^"\x27]+)["\x27]/g)];
    spotSlugs = [...new Set(spotMatches.map(m => m[1]))];
  }

  // 主要静的ページ
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/kanazawa/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/noto/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/prefectures/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/sitemap/`, priority: '0.8', changefreq: 'weekly' }
  ];

  // A. sitemap-main.xml (主要静的ページ)
  let xmlMain = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  staticPages.forEach(p => {
    xmlMain += `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
  });
  xmlMain += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-main.xml'), xmlMain, 'utf8');

  // B. sitemap-features.xml (目的別・季節別・テーマ別特化特集ハブ 166件)
  let xmlFeatures = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  featurePageSlugs.forEach(slug => {
    xmlFeatures += `  <url>\n    <loc>${BASE_URL}/${slug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  xmlFeatures += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-features.xml'), xmlFeatures, 'utf8');

  // C. sitemap-prefectures.xml (47都道府県・主要市町村・観光名所スポット)
  let xmlPref = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  PREFECTURE_SLUGS.forEach(slug => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/cafes/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/souvenirs/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/sakes/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  citySubHubs.forEach(cPath => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${cPath}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  spotSlugs.forEach(sSlug => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/spots/${sSlug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  xmlPref += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-prefectures.xml'), xmlPref, 'utf8');

  // D. sitemap-posts.xml (個別宿泊施設・徹底比較ルポ全記事)
  let xmlPosts = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  posts.forEach(post => {
    const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : todayStr;
    xmlPosts += `  <url>\n    <loc>${BASE_URL}/posts/${post.id}/</loc>\n    <lastmod>${postDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  xmlPosts += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-posts.xml'), xmlPosts, 'utf8');

  // E. sitemap.xml (Google Search Console 標準 Sitemap Index)
  const sitemapIndexFiles = [
    'sitemap-main.xml',
    'sitemap-features.xml',
    'sitemap-prefectures.xml',
    'sitemap-posts.xml'
  ];
  let sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  sitemapIndexFiles.forEach(file => {
    sitemapIndexXml += `  <sitemap>\n    <loc>${BASE_URL}/${file}</loc>\n    <lastmod>${todayStr}</lastmod>\n  </sitemap>\n`;
  });
  sitemapIndexXml += `</sitemapindex>\n`;
  fs.writeFileSync(SITEMAP_FILE, sitemapIndexXml, 'utf8');

  const totalUrls = staticPages.length + featurePageSlugs.length + (PREFECTURE_SLUGS.length * 4) + citySubHubs.length + spotSlugs.length + posts.length;
  console.log(`Generated Google Search Console optimized Sitemap Index (sitemap.xml) and 4 sub-sitemaps (main: ${staticPages.length}, features: ${featurePageSlugs.length}, prefectures: ${(PREFECTURE_SLUGS.length * 4) + citySubHubs.length + spotSlugs.length}, posts: ${posts.length}) - Total: ${totalUrls} URLs`);

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
Sitemap: ${BASE_URL}/sitemap-main.xml
Sitemap: ${BASE_URL}/sitemap-features.xml
Sitemap: ${BASE_URL}/sitemap-prefectures.xml
Sitemap: ${BASE_URL}/sitemap-posts.xml
`;

  fs.writeFileSync(ROBOTS_FILE, robotsTxt, 'utf8');
  console.log(`Generated physical robots.txt at ${ROBOTS_FILE}`);

  // --- 3. public/llms.txt (LLM/AI専用標準サマリー仕様) の自動生成 ---
  let llmsTxt = `# 日本全国・旅宿クラウド (Tabiyado Croud Travel Magazine)

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
  let llmsFullTxt = `# 日本全国・旅宿クラウド - 全記事データアーカイブ (LLMs Full Knowledge Base)

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
    const cleanReview = (post.review || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 1200);
    llmsFullTxt += `\n### ルポ・解説概要\n${cleanReview}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf8');
  console.log(`Generated physical llms-full.txt at ${path.join(PUBLIC_DIR, 'llms-full.txt')}`);
}

main();

