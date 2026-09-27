const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateKurokawaPage } = require('./scripts/round57/generate_kurokawa');
const { generateNoboribetsuPage } = require('./scripts/round57/generate_noboribetsu');
const { generateYuzawaPage } = require('./scripts/round57/generate_yuzawa');
const { generateArimaPage } = require('./scripts/round57/generate_arima');
const { generateKagaPage } = require('./scripts/round57/generate_kaga');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 57: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round57_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateKurokawaPage(rawHotels.kurokawa);
  generateNoboribetsuPage(rawHotels.noboribetsu);
  generateYuzawaPage(rawHotels.yuzawa);
  generateArimaPage(rawHotels.arima);
  generateKagaPage(rawHotels.kaga);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-kumamoto-kurokawa-onsen-yuakari-stay',
    'winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay',
    'winter-niigata-echigo-yuzawa-snow-sake-stay',
    'winter-hyogo-arima-onsen-kinsen-kobe-beef-stay',
    'winter-ishikawa-kaga-yamashiro-kano-crab-stay'
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
      slug: 'winter-kumamoto-kurokawa-onsen-yuakari-stay',
      title: '【11・12月黒川温泉の湯あかりと秘湯情緒】竹灯籠が彩る渓流露天風呂と阿蘇あか牛・肥後会席の名宿5選',
      description: '11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。12月中旬から田の原川の渓流に幻想的な竹灯籠が灯る冬の風物詩「湯あかり」、名物「入湯手形」で巡る野趣あふれる露天風呂と阿蘇あか牛・極上馬刺しの美食。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '黒川湯あかり竹灯籠＆阿蘇あか牛',
      readTime: '6分'
    },
    {
      slug: 'winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay',
      title: '【11・12月登別温泉の白銀地獄谷と極上名湯】圧倒的湯量と9つの泉質・冬の北海道毛ガニ＆白老牛を堪能する名宿5選',
      description: '11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。もうもうと白煙を上げる雪化粧の地獄谷、世界でも稀な9種類もの多彩な泉質を誇る名湯巡り。冬に身がぎっしり詰まる北海道産毛ガニと最高峰白老牛ステーキ。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '登別地獄谷雪景色＆冬毛ガニ白老牛',
      readTime: '6分'
    },
    {
      slug: 'winter-niigata-echigo-yuzawa-snow-sake-stay',
      title: '【11・12月越後湯沢温泉の雪国情緒と地酒巡り】川端康成ゆかりの名湯・南魚沼産コシヒカリ新米と越後もち豚会席の宿5選',
      description: '東京から新幹線で最速約70分、川端康成『雪国』の舞台・新潟越後湯沢温泉。11月の収穫期を祝う日本一の南魚沼産コシヒカリ新米と新酒、12月の息をのむ白銀の雪国世界。ぽんしゅ館利き酒と越後もち豚しゃぶしゃぶ。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '越後湯沢雪国＆南魚沼新米地酒',
      readTime: '6分'
    },
    {
      slug: 'winter-hyogo-arima-onsen-kinsen-kobe-beef-stay',
      title: '【11・12月有馬温泉の金泉銀泉と六甲山夜景】日本最古の名湯で芯から温まる冬・最高峰神戸牛会席を味わう老舗宿5選',
      description: '日本三古湯・三名泉の筆頭・有馬温泉。海水の約2倍の塩分を含み冬でも湯冷め知らずの赤茶色「金泉」と「銀泉」。12月の澄み切った六甲山1000万ドルの冬夜景と、最高峰A5ランク神戸牛すき焼き・ステーキ会席。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '有馬金泉銀泉＆六甲山夜景神戸牛',
      readTime: '6分'
    },
    {
      slug: 'winter-ishikawa-kaga-yamashiro-kano-crab-stay',
      title: '【11・12月加賀温泉郷の冬の贅と加能ガニ解禁】山代・山中温泉の歴史名湯と九谷焼で味わう極上ズワイガニ会席の宿5選',
      description: '11月6日のズワイガニ漁解禁で美食の最盛期を迎える石川・加賀温泉郷。開湯1300年の名湯・山代温泉と鶴仙渓の山中温泉。青タグの加能ガニや限定の香箱ガニを九谷焼の絢爛な器で味わう冬の日本海グルメ旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '加賀温泉加能ガニ解禁＆九谷焼会席',
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

  // 5. Run bundle_posts.js
  if (fs.existsSync(path.join(__dirname, 'bundle_posts.js'))) {
    console.log('\n[Step 5] Running bundle_posts.js...');
    try {
      execSync('node bundle_posts.js', { stdio: 'inherit' });
    } catch (e) {
      console.warn('bundle_posts.js warning:', e.message);
    }
  }

  console.log('\n[Complete] Round 57 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
