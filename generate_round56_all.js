const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateIkahoPage } = require('./scripts/round56/generate_ikaho');
const { generateShuzenjiPage } = require('./scripts/round56/generate_shuzenji');
const { generateDogoPage } = require('./scripts/round56/generate_dogo');
const { generateHigashiyamaPage } = require('./scripts/round56/generate_higashiyama');
const { generateIsawaPage } = require('./scripts/round56/generate_isawa');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 56: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round56_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateIkahoPage(rawHotels.ikaho);
  generateShuzenjiPage(rawHotels.shuzenji);
  generateDogoPage(rawHotels.dogo);
  generateHigashiyamaPage(rawHotels.higashiyama);
  generateIsawaPage(rawHotels.isawa);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-gunma-ikaho-stone-steps-joshu-beef-stay',
    'winter-shizuoka-shuzenji-late-momiji-bamboo-stay',
    'winter-ehime-dogo-onsen-taimeshi-heritage-stay',
    'winter-fukushima-aizu-higashiyama-snow-heritage-stay',
    'winter-yamanashi-isawa-onsen-wine-koshu-beef-stay'
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
      slug: 'winter-gunma-ikaho-stone-steps-joshu-beef-stay',
      title: '【11・12月伊香保温泉の初冬散策】365段の石段街と黄金の湯・上州牛会席を味わう名旅館5選',
      description: '11月から12月にかけて澄み切った初冬の空気に包まれる伊香保温泉。365段の石段街に灯る提灯、茶褐色の名湯「黄金の湯」と柔らかな「白銀の湯」。上州牛すき焼きと水沢うどんの美食。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '伊香保石段街＆上州牛会席',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-shuzenji-late-momiji-bamboo-stay',
      title: '【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選',
      description: '日本で最も遅い11月下旬〜12月上旬の紅葉美を誇る修善寺温泉。桂川沿いの竹林の小径と朱塗りの橋、弘法大師ゆかりの独鈷の湯。天城の生わさびと伊豆牛ステーキを味わう静寂の初冬ステイ。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '修善寺竹林紅葉＆伊豆牛',
      readTime: '6分'
    },
    {
      slug: 'winter-ehime-dogo-onsen-taimeshi-heritage-stay',
      title: '【11・12月道後温泉の冬情緒と瀬戸内美味】日本最古の名湯と極上真鯛鯛めし・伊予牛会席の名宿5選',
      description: '保存修理工事を終えて完全復活した日本最古の名湯・道後温泉本館。11月・12月の澄み切った瀬戸内の風を感じる湯めぐりと、冬に最も脂が乗る本場瀬戸内真鯛の鯛めし、とろける伊予牛会席。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '道後温泉本館＆瀬戸内鯛めし',
      readTime: '6分'
    },
    {
      slug: 'winter-fukushima-aizu-higashiyama-snow-heritage-stay',
      title: '【11・12月会津東山温泉の初雪と武家文化】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿5選',
      description: '11月下旬の初雪から12月の白銀世界へと移ろう会津の奥座敷・東山温泉。開湯1300年、湯川渓谷を望む雪見露天風呂と、会津漆器で味わう本場極上馬刺し・会津地鶏・郷土料理こづゆと会津美酒。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '会津東山雪見露天＆極上馬刺し',
      readTime: '6分'
    },
    {
      slug: 'winter-yamanashi-isawa-onsen-wine-koshu-beef-stay',
      title: '【11・12月石和温泉の新酒ワインと美肌湯】富士を望む甲州名湯と甲州牛ステーキ・冬のほうとう会席宿5選',
      description: '11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧の富士山と南アルプスを望み、毎分湧出する美肌アルカリ単純泉に浸かる。最高峰甲州牛ステーキと熱々のほうとう鍋。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '石和美肌湯＆山梨ヌーボー甲州牛',
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

  console.log('\n[Complete] Round 56 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
