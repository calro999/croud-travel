const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateGinzanPage } = require('./scripts/round55/generate_ginzan');
const { generateGeroPage } = require('./scripts/round55/generate_gero');
const { generateHirugamiPage } = require('./scripts/round55/generate_hirugami');
const { generateHakonePage } = require('./scripts/round55/generate_hakone');
const { generateNyutoPage } = require('./scripts/round55/generate_nyuto');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 55: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round55_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateGinzanPage(rawHotels.ginzan);
  generateGeroPage(rawHotels.gero);
  generateHirugamiPage(rawHotels.hirugami);
  generateHakonePage(rawHotels.hakone);
  generateNyutoPage(rawHotels.nyuto);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamagata-ginzan-onsen-snow-taisho-stay',
    'winter-gifu-gero-onsen-fireworks-hida-beef-stay',
    'winter-nagano-achimura-hirugami-starry-sky-stay',
    'winter-kanagawa-hakone-fuji-view-onsen-stay',
    'winter-akita-nyuto-onsen-yukimi-kiritanpo-stay'
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
      slug: 'winter-yamagata-ginzan-onsen-snow-taisho-stay',
      title: '【11・12月銀山温泉の初雪と大正浪漫】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿5選',
      description: '11月下旬の初雪から12月の白銀世界へと移ろう銀山温泉。銀山川沿いに並ぶ木造建築群と黄昏時に灯る温かなガス灯。雪見露天風呂と最高峰の雪降り和牛尾花沢を味わう至高の冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '銀山温泉ガス灯＆尾花沢牛',
      readTime: '6分'
    },
    {
      slug: 'winter-gifu-gero-onsen-fireworks-hida-beef-stay',
      title: '【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選',
      description: '12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」。日本三名泉のpH9超えとろとろ美肌湯と、最高ランク飛騨牛の朴葉味噌焼きや会席料理。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '下呂冬花火＆飛騨牛朴葉味噌',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-achimura-hirugami-starry-sky-stay',
      title: '【11・12月阿智村の日本一の星空ナイトツアー】昼神温泉の極上美肌湯と南信州冬の味覚宿5選',
      description: '環境省認定「日本一星が輝いて見える場所」阿智村。空気が最も澄み切る初冬の満天プラネタリウムと、pH9.7の昼神温泉「美肌の湯」、囲炉裏の炭火五平餅と信州牛。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '阿智村日本一の星空＆昼神美肌湯',
      readTime: '6分'
    },
    {
      slug: 'winter-kanagawa-hakone-fuji-view-onsen-stay',
      title: '【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選',
      description: '年間で最も晴天率が高い初冬の芦ノ湖。紺碧の湖面に映る雪化粧の白銀富士と平和の鳥居。芦ノ湖を望む絶景露天風呂と相模湾の冬魚・足柄牛を堪能する極上リゾート。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80',
      badge: '芦ノ湖富士山絶景＆箱根名湯',
      readTime: '6分'
    },
    {
      slug: 'winter-akita-nyuto-onsen-yukimi-kiritanpo-stay',
      title: '【11・12月乳頭温泉郷の白銀秘湯めぐり】ブナ原生林の雪見露天風呂と本場きりたんぽ鍋の宿5選',
      description: '11月中旬からブナの原生林が純白の雪に包まれる乳頭温泉郷。乳白色の湯けむりが立ち上る雪見露天風呂と、囲炉裏端でいただく比内地鶏出汁の本場きりたんぽ鍋。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '乳頭温泉郷雪見露天＆きりたんぽ',
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

  // 4. Run bundle_posts.js to update sitemap.xml
  console.log('\n[Step 4] Running bundle_posts.js to update sitemap.xml and posts bundles...');
  execSync('node bundle_posts.js', { stdio: 'inherit' });

  console.log('\n[Complete] Round 55 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
