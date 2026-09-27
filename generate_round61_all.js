const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateAwaraPage } = require('./scripts/round61/generate_awara');
const { generateTamatsukuriPage } = require('./scripts/round61/generate_tamatsukuri');
const { generateTsukiokaPage } = require('./scripts/round61/generate_tsukioka');
const { generateAwajishimaPage } = require('./scripts/round61/generate_awajishima');
const { generateKirishimaPage } = require('./scripts/round61/generate_kirishima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 61: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round61_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateAwaraPage(rawHotels.awara);
  generateTamatsukuriPage(rawHotels.tamatsukuri);
  generateTsukiokaPage(rawHotels.tsukioka);
  generateAwajishimaPage(rawHotels.awajishima);
  generateKirishimaPage(rawHotels.kirishima);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-fukui-awara-onsen-echizen-crab-stay',
    'winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay',
    'winter-niigata-tsukioka-onsen-emerald-bihada-stay',
    'winter-hyogo-awajishima-sumoto-3year-torafugu-stay',
    'winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay'
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
      slug: 'winter-fukui-awara-onsen-echizen-crab-stay',
      title: '【11・12月あわら温泉の冬名湯と越前がに】関西の奥座敷・庭園露天風呂と黄色いタグ付き越前蟹＆若狭牛会席の宿5選',
      description: '11月6日の越前がに解禁で歓喜に沸く福井の名湯「あわら温泉」。明治の開湯以来、各宿が独自源泉を所有する贅沢な湯巡りと、三國港直送の黄色タグ付き越前がにフルコース、極上若狭牛を堪能。庭園露天風呂が彩る初冬の極上温泉宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: 'あわら庭園露天風呂＆黄色タグ越前がに若狭牛',
      readTime: '6分'
    },
    {
      slug: 'winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay',
      title: '【11・12月玉造温泉の初冬美肌湯と松葉がに】出雲大社神在月参拝と日本最古の化粧水温泉・山陰松葉蟹＆しまね和牛の宿5選',
      description: '全国の八百万の神々が集う11月の出雲「神在月」。奈良時代の風土記に「神の湯」と記された日本最古の美肌温泉・玉造温泉で潤い、11月解禁の山陰松葉がに会席としまね和牛を堪能。玉湯川沿いの初冬風情と出雲大社参拝を叶える厳選名宿5選。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '玉造出雲神在月美肌湯＆山陰松葉がにしまね和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-niigata-tsukioka-onsen-emerald-bihada-stay',
      title: '【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選',
      description: '国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「月岡温泉」。「もっと美人になれる温泉」と謳われる美肌の湯に浸かり、11月下旬の初雪から12月の白銀雪景色を望む雪見露天風呂、A5ランク村上牛と日本海の寒ブリ、新潟新酒地酒を味わう名宿5選。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '月岡エメラルド硫黄泉雪見露天＆村上牛寒ブリ新酒',
      readTime: '6分'
    },
    {
      slug: 'winter-hyogo-awajishima-sumoto-3year-torafugu-stay',
      title: '【11・12月淡路島洲本温泉の初冬海景と淡路島3年とらふぐ】紀淡海峡パノラマ露天と冬の絶品3年とらふぐ＆淡路牛会席の宿5選',
      description: '鳴門海峡の激流が育む冬の最高峰ブランド「淡路島3年とらふぐ」。通常2年のところ3年もの歳月をかけてじっくり育て上げた極上の身の締まりと濃厚白子。紀淡海峡の水平線から昇る朝日を望む洲本温泉のインフィニティ露天風呂と、淡路牛・とらふぐフルコースを堪能する名宿5選。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '淡路島洲本紀淡海峡朝日露天＆淡路島3年とらふぐ淡路牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay',
      title: '【11・12月霧島温泉郷の冬パノラマと坂本龍馬ゆかりの名湯】湯煙立ち上る霧島連山と乳白色泥湯・鹿児島黒豚しゃぶしゃぶ＆黒毛和牛の宿5選',
      description: '坂本龍馬とおりょうが日本初の新婚旅行で訪れた九州屈指の名湯「霧島温泉郷」。初冬の澄み渡る空気の中に立ち上る雄大な湯煙と、霧島連山を望む絶景露天風呂、天然泥パックの美肌泥湯。極上の甘みを誇る「かごしま黒豚」しゃぶしゃぶと黒毛和牛、国宝・霧島神宮参拝を堪能する名宿5選。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '霧島連山湯煙パノラマ泥湯＆かごしま黒豚しゃぶ黒毛和牛',
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

  console.log('\n[Complete] Round 61 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
