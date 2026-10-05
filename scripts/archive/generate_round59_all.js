const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateKinugawaPage } = require('./scripts/round59/generate_kinugawa');
const { generateAkiuPage } = require('./scripts/round59/generate_akiu');
const { generateShirahamaPage } = require('./scripts/round59/generate_shirahama');
const { generateKaikePage } = require('./scripts/round59/generate_kaike');
const { generateUreshinoPage } = require('./scripts/round59/generate_ureshino');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 59: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round59_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateKinugawaPage(rawHotels.kinugawa);
  generateAkiuPage(rawHotels.akiu);
  generateShirahamaPage(rawHotels.shirahama);
  generateKaikePage(rawHotels.kaike);
  generateUreshinoPage(rawHotels.ureshino);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-tochigi-kinugawa-onsen-valley-snow-stay',
    'winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay',
    'winter-wakayama-nanki-shirahama-kue-hotspring-stay',
    'winter-tottori-kaike-onsen-matsuba-crab-stay',
    'winter-saga-ureshino-onsen-bihada-yudofu-stay'
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
      slug: 'winter-tochigi-kinugawa-onsen-valley-snow-stay',
      title: '【11・12月鬼怒川温泉の初冬渓谷美と名湯】雪化粧の奇岩とアルカリ性美肌泉・とちぎ和牛＆日光生ゆば会席の宿5選',
      description: '日光東照宮領の御用温泉として大名や高僧のみに入湯が許された鬼怒川温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、奇岩連なる渓谷美を望む露天風呂と、とろける極上A5とちぎ和牛、日光伝統の二つ折り手引き生ゆば懐石を心ゆくまで堪能。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '鬼怒川初冬渓谷美＆日光ゆばとちぎ和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay',
      title: '【11・12月秋保温泉の初冬渓谷美と名湯】伊達政宗公ゆかりの奥座敷・最高峰A5仙台牛＆名物せり鍋の宿5選',
      description: '皇室ゆかりの「日本三御湯」にして伊達政宗公の湯浴み御殿の歴史を誇る秋保温泉。名取川渓谷「磊々峡」の初冬の奇岩美、冷えを芯から癒やす弱アルカリ塩化物泉、冬の味覚の王様「根付き仙台せり鍋」と最高峰A5ランク仙台牛を味わい尽くす冬の名宿。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      badge: '秋保磊々峡初冬景観＆仙台せり鍋仙台牛',
      readTime: '6分'
    },
    {
      slug: 'winter-wakayama-nanki-shirahama-kue-hotspring-stay',
      title: '【11・12月南紀白浜温泉の太平洋絶景と名湯】白良浜夕陽と日本三古湯・幻の天然本クエ鍋＆熊野牛の宿5選',
      description: '万葉集の昔から歴代天皇が湯治に訪れた日本三古湯・南紀白浜温泉。11月から旬を迎える「幻の高級魚・紀州天然本クエ」の濃厚な旨味。水平線に沈む黄金の夕陽を望む海辺のインフィニティ露天風呂と、白良浜の冬のイルミネーションを愉しむ至福旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '白浜太平洋夕陽＆幻の天然本クエ鍋熊野牛',
      readTime: '6分'
    },
    {
      slug: 'winter-tottori-kaike-onsen-matsuba-crab-stay',
      title: '【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選',
      description: '11月6日、日本海屈指のカニ水揚げを誇る境港で冬の松葉ガニ漁が一斉解禁。弓ヶ浜の波打ち際から湧く美肌の塩化物泉。白銀に輝く秀峰・大山の冠雪パノラマを望み、青タグ付き極上活松葉ガニと鳥取和牛オレイン55に酔いしれる冬の山陰旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '皆生松葉ガニ解禁＆大山雪景色鳥取和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-saga-ureshino-onsen-bihada-yudofu-stay',
      title: '【11・12月嬉野温泉の日本三大美肌湯と冬情緒】嬉野茶の香りと名物とろける温泉湯豆腐＆極上佐賀牛の宿5選',
      description: '神功皇后の伝説が息づく「日本三大美肌の湯」嬉野温泉。冬の寒さを優しく包むぬめりのある重曹泉。淡雪のようにとろける名物「嬉野温泉湯豆腐」と、香ばしい嬉野茶の茶香炉、そして最高峰A5ランク佐賀牛を味わう大人の九州冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '嬉野日本三大美肌湯＆とろける温泉湯豆腐佐賀牛',
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

  console.log('\n[Complete] Round 59 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
