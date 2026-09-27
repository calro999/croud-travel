const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateTsunagiPage } = require('./scripts/round63/generate_tsunagi');
const { generateSuwaPage } = require('./scripts/round63/generate_suwa');
const { generateAmakusaPage } = require('./scripts/round63/generate_amakusa');
const { generateUnzenPage } = require('./scripts/round63/generate_unzen');
const { generateMinakamiPage } = require('./scripts/round63/generate_minakami');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 63: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round63_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateTsunagiPage(rawHotels.tsunagi);
  generateSuwaPage(rawHotels.suwa);
  generateAmakusaPage(rawHotels.amakusa);
  generateUnzenPage(rawHotels.unzen);
  generateMinakamiPage(rawHotels.minakami);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-iwate-tsunagi-onsen-koiwai-illumination-stay',
    'winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay',
    'winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay',
    'winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay',
    'winter-gunma-minakami-onsen-tanigawa-yukimi-stay'
  ];

  let allPassed = true;
  for (const slug of slugs) {
    const filePath = path.join(__dirname, 'src', 'app', slug, 'page.tsx');
    const content = fs.readFileSync(filePath, 'utf8');
    // Strip code and HTML tags to count raw Japanese text length
    const textOnly = content
      .replace(/import[\s\S]*?from[\s\S]*?;/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/[a-zA-Z0-9_\-\.\:\/]+/g, ' ')
      .replace(/\s+/g, '');
    console.log(`- ${slug}: Raw Text Length = ${textOnly.length} characters (Requirement: >= 3,000)`);
    if (textOnly.length < 3000) {
      console.warn(`WARNING: ${slug} has less than 3,000 characters!`);
      allPassed = false;
    } else {
      console.log(`  => PASS (Exceeds 3,000 characters)`);
    }
  }

  if (!allPassed) {
    console.error('Character count check failed!');
    process.exit(1);
  }

  // 3. Update src/app/features/page.tsx
  console.log('\n[Step 3] Updating src/app/features/page.tsx...');
  const featuresPagePath = path.join(__dirname, 'src', 'app', 'features', 'page.tsx');
  let featuresContent = fs.readFileSync(featuresPagePath, 'utf8');

  const newFeatures = [
    {
      slug: 'winter-iwate-tsunagi-onsen-koiwai-illumination-stay',
      title: '【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選',
      description: '11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩井農場 銀河農場の夜」が輝き、御所湖越しに秀峰・岩手山の白銀の初冠雪が広がる盛岡の奥座敷「つなぎ温泉」と「鶯宿温泉」。平安時代・源義家ゆかりの名湯や北東北屈指の自家源泉掛け流し、極上ブランド黒毛和牛「前沢牛」「雫石牛」の鉄板焼きやすき焼き、盛岡三大麺を堪能する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '盛岡つなぎ御所湖岩手山初冠雪＆小岩井銀河イルミ前沢牛',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay',
      title: '【11・12月諏訪湖・上諏訪温泉の冬名湯と信州美食】諏訪湖一望露天と千人風呂・諏訪五蔵新酒＆信州プレミアム牛の宿5選',
      description: '11月から12月にかけて冷涼な澄み切った大気の中に冠雪の八ヶ岳と富士山がくっきりと浮かび上がる信州「諏訪湖」と「上諏訪温泉」。毎分万リットル級の圧倒的な湯量を誇る自家源泉や国重文・片倉館千人風呂、諏訪湖冬の風物詩ワカサギ釣り、甲州街道に佇む諏訪五蔵の搾りたて初冬新酒めぐり、極上の信州プレミアム牛肉すき焼き会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '上諏訪湖畔パノラマ露天千人風呂＆諏訪五蔵新酒信州牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay',
      title: '【11・12月天草・下田温泉の冬名湯と夕陽海鮮】東シナ海サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老会席の宿5選',
      description: '11月から12月にかけて東シナ海に沈む茜色の夕陽が最も美しく輝く熊本「天草」と開湯700年の名湯「下田温泉」。日本の夕陽百選に選ばれる海岸沿いの絶景露天風呂や100%源泉掛け流しの白鷺古湯、旬の極上「天草伊勢海老」「天然車海老」「天草とらふぐ」の豪快海鮮会席、世界遺産・﨑津集落の初冬風情を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '天草下田東シナ海夕陽百選露天＆伊勢海老車海老とらふぐ',
      readTime: '6分'
    },
    {
      slug: 'winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay',
      title: '【11・12月長崎雲仙温泉の冬名湯と普賢岳霧氷】雲仙地獄の湯煙・乳白色の硫黄泉露天と極上雲仙あかね牛・島原郷土会席の宿5選',
      description: '11月下旬から12月にかけて雲仙普賢岳や仁田峠を純白に染める自然の芸術「霧氷（花ぼうろ）」と、冬の冷気の中で白い湯煙を轟音とともに噴き上げる「雲仙地獄」。日本最初の国立公園に位置する歴史ある高原温泉街で、冷えた体を芯から解き放つ濃厚な乳白色の強酸性硫黄泉、幻の極上黒毛和牛「雲仙あかね牛」、島原伝統の具雑煮会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '雲仙普賢岳霧氷＆地獄の湯煙白濁硫黄泉雲仙あかね牛',
      readTime: '6分'
    },
    {
      slug: 'winter-gunma-minakami-onsen-tanigawa-yukimi-stay',
      title: '【11・12月みなかみ温泉郷の冬名湯と谷川岳雪見風呂】利根川渓谷露天と谷川岳初冠雪・極上上州牛＆旬きのこ会席の宿5選',
      description: '11月下旬から12月にかけて谷川連峰が白銀の初冠雪を纏い、利根川源流の渓谷に初冬の静寂が広がる群馬「みなかみ温泉郷」。ルレ・エ・シャトー加盟の世界最高峰旅館から天下一の広さを誇る宝川温泉の雪見大露天風呂、清流を望む全室露天風呂付きモダンホテルまで、極上ブランド肉「上州牛」やすき焼き、地元特産の肉厚舞茸きのこ会席を堪能する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: 'みなかみ谷川岳初冠雪利根川雪見露天＆宝川上州牛舞茸',
      readTime: '6分'
    }
  ];

  const gridAnchor = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';

  for (const item of newFeatures) {
    // 1. Add to featureArticles if featureArticles array exists
    if (featuresContent.includes('export const featureArticles = [')) {
      if (!featuresContent.includes(item.slug)) {
        const codeItem = `    {
      slug: '${item.slug}',
      title: ${JSON.stringify(item.title)},
      description: ${JSON.stringify(item.description)},
      category: ${JSON.stringify(item.category)},
      image: ${JSON.stringify(item.image)},
      badge: ${JSON.stringify(item.badge)},
      readTime: ${JSON.stringify(item.readTime)}
    },`;
        featuresContent = featuresContent.replace(
          'export const featureArticles = [',
          `export const featureArticles = [\n${codeItem}`
        );
        console.log(`Added featureArticles item: ${item.slug}`);
      }
    }

    // 2. Add to the JSX grid list if present
    if (featuresContent.includes(gridAnchor) && !featuresContent.includes(`slug: '${item.slug}'`)) {
      const cardItem = `            {
              slug: '${item.slug}',
              title: ${JSON.stringify(item.badge)},
              desc: ${JSON.stringify(item.description.slice(0, 36) + '…')},
              badge: '11・12月特集'
            },`;
      featuresContent = featuresContent.replace(
        gridAnchor,
        `${gridAnchor}\n${cardItem}`
      );
      console.log(`Added grid card item: ${item.slug}`);
    }
  }

  fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
  console.log('src/app/features/page.tsx updated successfully.');

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapFeaturesPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapFeaturesPath, 'utf8');

  for (const slug of slugs) {
    if (!sitemapContent.includes(`<loc>https://croud-travel.pages.dev/${slug}/</loc>`)) {
      const urlBlock = `  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>2026-09-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
      sitemapContent = sitemapContent.replace('</urlset>', `${urlBlock}\n</urlset>`);
      console.log(`Added to sitemap-features.xml: ${slug}`);
    }
  }
  fs.writeFileSync(sitemapFeaturesPath, sitemapContent, 'utf8');
  console.log('public/sitemap-features.xml updated successfully.');

  // 5. Update public/llms-full.txt and public/llms.txt if present
  console.log('\n[Step 5] Checking and updating LLM text files...');
  const llmsFullPath = path.join(__dirname, 'public', 'llms-full.txt');
  if (fs.existsSync(llmsFullPath)) {
    let llmsFullContent = fs.readFileSync(llmsFullPath, 'utf8');
    for (const item of newFeatures) {
      const entry = `\n- https://croud-travel.pages.dev/${item.slug}/: ${item.title}`;
      if (!llmsFullContent.includes(item.slug)) {
        llmsFullContent += entry;
      }
    }
    fs.writeFileSync(llmsFullPath, llmsFullContent, 'utf8');
    console.log('public/llms-full.txt updated.');
  }

  // 6. Run bundle_posts.js if exists
  if (fs.existsSync(path.join(__dirname, 'bundle_posts.js'))) {
    console.log('\n[Step 6] Running bundle_posts.js...');
    try {
      execSync('node bundle_posts.js', { stdio: 'inherit' });
    } catch (e) {
      console.warn('bundle_posts.js warning:', e.message);
    }
  }

  console.log('\n[Complete] Round 63 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
