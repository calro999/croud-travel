const fs = require('fs');
const path = require('path');

const { generateAichiToyokawaPage } = require('./scripts/round121/generate_aichi_toyokawa');
const { generateIwateSanrikuPage } = require('./scripts/round121/generate_iwate_sanriku');
const { generateKochiSukumoPage } = require('./scripts/round121/generate_kochi_sukumo');
const { generateYamaguchiHofuPage } = require('./scripts/round121/generate_yamaguchi_hofu');
const { generateWakayamaAridaPage } = require('./scripts/round121/generate_wakayama_arida');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 121: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round121_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateAichiToyokawaPage, data: rawHotels.aichi_toyokawa_yuya_onsen.hotels },
    { fn: generateIwateSanrikuPage, data: rawHotels.iwate_sanriku_miyako_jodogahama.hotels },
    { fn: generateKochiSukumoPage, data: rawHotels.kochi_sukumo_daruma_sunset_shimanto.hotels },
    { fn: generateYamaguchiHofuPage, data: rawHotels.yamaguchi_hofu_tenmangu_shunan_fugu.hotels },
    { fn: generateWakayamaAridaPage, data: rawHotels.wakayama_arida_yuasa_mikan_tachiuo.hotels }
  ];

  const slugs = [];

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  for (const g of generators) {
    const { slug, pageContent } = g.fn(g.data);
    slugs.push(slug);

    const outDir = path.join(__dirname, 'src', 'app', slug);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'page.tsx');
    fs.writeFileSync(outFile, pageContent, 'utf8');
    console.log(`- Generated: ${slug}/page.tsx (${pageContent.length} bytes)`);
  }

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
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
      slug: 'winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay',
      title: '豊川＆新城・奥三河！日本三大稲荷「豊川稲荷」初詣・霊狐塚と名湯湯谷温泉・鳳来牛＆豊川いなり名宿',
      desc: '日本三大稲荷の豊川稲荷新春初詣と千体の白狐が並ぶ神秘の霊狐塚。宇連川渓谷美と雪景色を望む開湯1300年湯谷温泉源泉掛け流し露天風呂と鳳来牛・三河牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-iwate-sanriku-miyako-jodogahama-kegani-stay',
      title: '三陸宮古＆久慈！白銀の浄土ヶ浜絶景と冬が旬の三陸毛ガニ・寒アワビ・名物瓶ドン＆太平洋展望名宿',
      desc: '白緑色の奇岩と白雪、群青の海が織りなす極楽浄土の冬景色。冬が最盛期の身入り抜群三陸毛ガニと寒アワビ、朝食名物瓶ドンと水平線の初日の出…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kochi-sukumo-daruma-sunset-shimanto-stay',
      title: '宿毛＆四万十！冬の奇跡の絶景「宿毛湾だるま夕日」と四万十川冬情趣・宿毛寒ブリ・本マグロ＆絶景名宿',
      desc: '海水温と大気の温度差が生む冬期限定の奇跡「だるま夕日」。透明度が増す冬の清流四万十川の沈下橋と、豊後水道の荒波が育む極上宿毛寒ブリ・四万十牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamaguchi-hofu-tenmangu-hatsumode-shunan-fugu-stay',
      title: '防府＆周南・下松！日本最初「防府天満宮」新春初詣と延縄発祥徳山の冬とらふぐ・笠戸ひらめ名宿',
      desc: '菅原道真公ゆかりの日本最初の天満宮初詣と春風楼展望。とらふぐ延縄漁発祥の地・周南徳山の本場とらふぐ会席と、笠戸島温泉絶景サンセット露天風呂…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-wakayama-arida-yuasa-mikan-tachiuo-stay',
      title: '有田＆湯浅・広川！黄金色の有田みかん海道と重伝建・湯浅醤油蔵通り・箕島一本釣り太刀魚＆名湯名宿',
      desc: '山肌一面が黄金色に実る有田みかんの絶景ドライブと、醤油醸造発祥の地・湯浅の白壁土蔵通り。日本一の箕島一本釣り太刀魚と天然本クエ鍋・熊野牛…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features list in src/app/features/page.tsx
  const insertionMarker = 'const features = [';
  if (featuresContent.includes(insertionMarker)) {
    const formattedItems = newFeatures.map(item => `  {
    slug: '${item.slug}',
    title: '${item.title}',
    desc: '${item.desc}',
    badge: '${item.badge}'
  },`).join('\n');

    featuresContent = featuresContent.replace(insertionMarker, `${insertionMarker}\n${formattedItems}`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx with 5 new features!');
  } else {
    console.warn('Could not find insertion marker in features/page.tsx!');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  for (const item of newFeatures) {
    const entry = `- https://croud-travel.com/${item.slug}: ${item.title}。${item.desc}\n`;
    if (!llmsContent.includes(item.slug)) {
      llmsContent = llmsContent.trimEnd() + '\n' + entry;
      console.log(`- Added ${item.slug} to llms-full.txt`);
    }
  }
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');

  console.log('\n================================================================');
  console.log('Round 121 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
