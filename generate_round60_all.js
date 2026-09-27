const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateUnazukiPage } = require('./scripts/round60/generate_unazuki');
const { generateJozankeiPage } = require('./scripts/round60/generate_jozankei');
const { generateShirahonePage } = require('./scripts/round60/generate_shirahone');
const { generateNagatoPage } = require('./scripts/round60/generate_nagato');
const { generateNasuPage } = require('./scripts/round60/generate_nasu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 60: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round60_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateUnazukiPage(rawHotels.unazuki);
  generateJozankeiPage(rawHotels.jozankei);
  generateShirahonePage(rawHotels.shirahone);
  generateNagatoPage(rawHotels.nagato);
  generateNasuPage(rawHotels.nasu);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-toyama-unazuki-onsen-kurobe-snow-stay',
    'winter-hokkaido-jozankei-onsen-snow-keikoku-stay',
    'winter-nagano-shirahone-onsen-milky-snow-stay',
    'winter-yamaguchi-nagato-yumoto-onsen-fugu-stay',
    'winter-tochigi-nasu-onsen-shikanoyu-snow-stay'
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
      slug: 'winter-toyama-unazuki-onsen-kurobe-snow-stay',
      title: '【11・12月宇奈月温泉の初冬黒部峡谷美と名湯】雪化粧の峡谷露天と日本一の透明度・富山湾寒ブリ＆紅ズワイガニの宿5選',
      description: '北アルプス黒部川の清流が刻んだ断崖絶壁に広がる宇奈月温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、日本一の透明度を誇る弱アルカリ性美肌泉と、富山湾が誇る冬の二大王者「寒ブリ」＆獲れたて紅ズワイガニ会席を堪能する名宿ガイド。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '宇奈月黒部峡谷雪景色＆富山湾寒ブリ紅ズワイガニ',
      readTime: '6分'
    },
    {
      slug: 'winter-hokkaido-jozankei-onsen-snow-keikoku-stay',
      title: '【11・12月定山渓温泉の雪渓谷美と名湯】札幌の奥座敷・ナトリウム塩化物泉と道産和牛＆北海道冬の三大蟹会席の宿5選',
      description: '修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。11月下旬の初雪から12月の白銀雪景色へと移ろう豊平川渓谷。冷え切った身体の芯から温もる純生の塩化物泉と、道産和牛＆北海道冬の三大蟹（毛ガニ・ズワイ・タラバ）を堪能。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '定山渓豊平川雪渓谷＆北海道三大蟹道産和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-shirahone-onsen-milky-snow-stay',
      title: '【11・12月白骨温泉の北アルプス初冬雪景色と乳白色秘湯】3日入れば3年風邪ひかぬ霊泉・信州プレミアム牛＆投汁そばの宿5選',
      description: '北アルプス乗鞍岳の山懐、標高1,400メートルの深い原生林に抱かれた日本屈指の秘湯「白骨温泉」。「3日入れば3年風邪をひかない」と謳われる乳白色の炭酸水素塩泉。11月中旬の初雪から12月の白銀静寂世界に浸る雪見露天風呂と、信州プレミアム牛＆名物投汁そば。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '白骨北アルプス乳白色霊泉＆信州プレミアム牛投汁そば',
      readTime: '6分'
    },
    {
      slug: 'winter-yamaguchi-nagato-yumoto-onsen-fugu-stay',
      title: '【11・12月長門湯本温泉の冬情緒と名湯】音信川の冬灯りと開湯600年美肌泉・本場下関直送本とらふぐ＆山口県産和牛の宿5選',
      description: '室町時代に住吉大明神の神託により開かれた山口県最古の名湯「長門湯本温泉」。音信川のせせらぎと竹林の小径が冬の灯りに照らされる幻想的な温泉街。pH9.6を誇る化粧水のような美肌泉と、11月〜12月に最盛期を迎える本場下関直送の「活本とらふぐ」フルコース。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '長門湯本音信川冬灯り＆下関直送本とらふぐやまぐち和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-tochigi-nasu-onsen-shikanoyu-snow-stay',
      title: '【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選',
      description: '白鹿が傷を癒やした伝説から千三百年余。皇室の那須御用邸が置かれ、茶臼岳の雄大なパノラマを望む「那須温泉郷」。初冬の澄んだ空気の中に立ち上る硫黄の湯煙。名湯「鹿の湯」の乳白色露天風呂と、最高峰黒毛和牛「那須与一牛」＆高原会席に心満たされる極上の休日。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '那須茶臼岳雪景色鹿の湯＆最高峰那須与一牛高原会席',
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

  console.log('\n[Complete] Round 60 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
