const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateOkuhidaPage } = require('./scripts/round58/generate_okuhida');
const { generateShibuPage } = require('./scripts/round58/generate_shibu');
const { generateYugawaraPage } = require('./scripts/round58/generate_yugawara');
const { generateHanamakiPage } = require('./scripts/round58/generate_hanamaki');
const { generateAmanohashidatePage } = require('./scripts/round58/generate_amanohashidate');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 58: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round58_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateOkuhidaPage(rawHotels.okuhida);
  generateShibuPage(rawHotels.shibu);
  generateYugawaraPage(rawHotels.yugawara);
  generateHanamakiPage(rawHotels.hanamaki);
  generateAmanohashidatePage(rawHotels.amanohashidate);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-gifu-okuhida-onsen-yukimi-roten-stay',
    'winter-nagano-shibu-onsen-nine-sotoyu-stay',
    'winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay',
    'winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay',
    'winter-kyoto-amanohashidate-matsuba-crab-stay'
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
      slug: 'winter-gifu-okuhida-onsen-yukimi-roten-stay',
      title: '【11・12月奥飛騨温泉郷の雪見露天と北アルプス絶景】圧倒的湯量と雄大な山岳美・飛騨牛朴葉味噌焼き会席の宿5選',
      description: '北アルプス穂高連峰の麓に広がる日本屈指の温泉天国・奥飛騨温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、毎分44,000L超の湧出量を誇る雪見大露天風呂と、A5飛騨牛の香ばしい朴葉味噌焼き・囲炉裏会席を五感で堪能する冬の名宿。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '奥飛騨雪見露天＆飛騨牛朴葉味噌',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-shibu-onsen-nine-sotoyu-stay',
      title: '【11・12月渋温泉の厄除巡浴九湯めぐりと石畳情緒】木造建築が彩る冬のノスタルジー・信州プレミアム牛と地酒の宿5選',
      description: '開湯1300年、下駄の音が心地よく響く長野県・信州渋温泉。宿泊者限定のマスターキーで巡る名物「厄除巡浴九湯めぐり」、登録有形文化財の木造建築・金具屋を照らす暖かな灯りと初雪の石畳。信州プレミアム牛と地酒の熱燗を味わう冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '渋温泉九湯めぐり＆金具屋ライトアップ',
      readTime: '6分'
    },
    {
      slug: 'winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay',
      title: '【11・12月湯河原温泉の名湯と奥湯河原晩秋紅葉】文豪が愛した万葉の隠れ家・相模湾の伊勢海老＆地魚会席の宿5選',
      description: '万葉集に唯一詠まれた関東最古の名湯・湯河原温泉。11月下旬から12月上旬にかけて奥湯河原を彩る関東で最も遅い紅葉。夏目漱石や芥川龍之介ら文豪が愛した静寂の数寄屋宿、肌を柔らかく包む弱アルカリ性源泉と相模湾の伊勢海老・寒金目鯛会席。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '奥湯河原晩秋紅葉＆相模湾伊勢海老',
      readTime: '6分'
    },
    {
      slug: 'winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay',
      title: '【11・12月花巻温泉郷の白銀雪見露天と宮沢賢治の世界】奥羽山脈の名湯巡り・極上前沢牛＆白金豚しゃぶしゃぶの宿5選',
      description: '宮沢賢治が愛したイーハトーブの地・岩手県花巻温泉郷。11月下旬の初雪から12月の白銀世界へと移ろう初冬、赤松林に囲まれた美肌の湯や日本一深い自噴立ち湯で愉しむ雪見露天風呂。霜降り極上の前沢牛すき焼きとブランド豚「白金豚」の贅沢会席。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '花巻温泉郷白銀雪見＆前沢牛白金豚',
      readTime: '6分'
    },
    {
      slug: 'winter-kyoto-amanohashidate-matsuba-crab-stay',
      title: '【11・12月天橋立の白砂青松雪景色とカニ漁解禁】日本三景を望む冬の美肌湯・幻の間人ガニ＆寒ブリしゃぶしゃぶの宿5選',
      description: '日本三景の筆頭・京都府丹後天橋立。11月6日のズワイガニ漁解禁とともに美食の最高峰シーズンが開幕。松並木にうっすらと初雪が積もる「白砂青松の幻雪景」、地下1,500mから湧く茶褐色の天橋立温泉、幻の間人ガニと伊根の極上寒ブリしゃぶしゃぶ。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '天橋立カニ解禁＆間人ガニ寒ブリ',
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

  // 5. Run bundle_posts.js if exists
  if (fs.existsSync(path.join(__dirname, 'bundle_posts.js'))) {
    console.log('\n[Step 5] Running bundle_posts.js...');
    try {
      execSync('node bundle_posts.js', { stdio: 'inherit' });
    } catch (e) {
      console.warn('bundle_posts.js warning:', e.message);
    }
  }

  console.log('\n[Complete] Round 58 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
