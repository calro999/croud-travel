const fs = require('fs');
const path = require('path');

const { generateEhimeUwajimaPage } = require('./scripts/round122/generate_ehime_uwajima');
const { generateGunmaTakasakiPage } = require('./scripts/round122/generate_gunma_takasaki');
const { generateKumamotoMinamiasoPage } = require('./scripts/round122/generate_kumamoto_minamiaso');
const { generateToyamaTakaokaPage } = require('./scripts/round122/generate_toyama_takaoka');
const { generateKagoshimaKirishimaPage } = require('./scripts/round122/generate_kagoshima_kirishima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 122: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round122_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateEhimeUwajimaPage, data: rawHotels.ehime_uwajima_yawatahama_taimeshi_kanburi.hotels },
    { fn: generateGunmaTakasakiPage, data: rawHotels.gunma_takasaki_haruna_isobe_onsen.hotels },
    { fn: generateKumamotoMinamiasoPage, data: rawHotels.kumamoto_minamiaso_takamori_akagyu_dengaku.hotels },
    { fn: generateToyamaTakaokaPage, data: rawHotels.toyama_takaoka_imizu_shinminato_crab.hotels },
    { fn: generateKagoshimaKirishimaPage, data: rawHotels.kagoshima_kirishima_jingu_maruo_onsen.hotels }
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
      slug: 'winter-ehime-uwajima-yawatahama-taimeshi-kanburi-castle-stay',
      title: '宇和島＆八幡浜・南予！現存天守「宇和島城」冬情趣と本場宇和島鯛めし・宇和海寒ブリ＆南予名宿',
      desc: '日本に12基しか残らない現存天守・宇和島城の冬の静寂と伊達十万石の城下町。真冬が旬の真鯛刺身を生卵出汁で絡める本場宇和島鯛めし、八幡浜ちゃんぽん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gunma-takasaki-haruna-shrine-hatsumode-isobe-onsen-joshugyu-stay',
      title: '高崎＆榛名・安中！奇岩の霊場「榛名神社」新春初詣・少林山達磨寺と名湯「磯部温泉」・下仁田ネギ名宿',
      desc: '巨岩と千本杉が織りなす万能のパワースポット・榛名神社初詣と縁起だるま発祥寺。温泉記号♨発祥の地・磯部温泉美肌の湯と冬の極甘下仁田ネギ・上州牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay',
      title: '南阿蘇＆高森！白銀の阿蘇五岳パノラマ絶景と名物「高森田楽」囲炉裏炭火・美肌南阿蘇温泉＆あか牛名宿',
      desc: '白銀に染まる阿蘇五岳（釈迦の涅槃像）の雄大な雪景色と白川水源。800年の歴史を誇る高森田楽の囲炉裏炭火焼きと、赤身の旨味が凝縮した阿蘇あか牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay',
      title: '高岡＆射水・新湊！国宝「瑞龍寺」新春初詣・雨晴海岸の気嵐絶景と新湊紅ズワイガニ昼セリ＆高岡名宿',
      desc: '前田利長公菩提寺・国宝瑞龍寺の雪の回廊美と新春祈祷。冬の海から湯気が立ち上る雨晴海岸の気嵐と冠雪立山連峰、新湊名物昼セリの熱々紅ズワイガニ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagoshima-kirishima-jingu-hatsumode-onsen-kurobuta-stay',
      title: '霧島温泉郷＆霧島神宮！国宝「霧島神宮」新春初詣と湯けむり立ち上る丸尾温泉・源泉露天＆極上黒豚名宿',
      desc: '天孫降臨神話の息づく国宝・霧島神宮の朱塗り社殿で迎える新春。激しく湯けむりが噴き上がる丸尾・硫黄谷のにごり湯露天風呂と本場かごしま黒豚しゃぶしゃぶ…',
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
    // If features array is directly in grid or another format, check for grid array
    const gridMarker = '{[\n            {\n              slug: \'';
    if (featuresContent.includes(gridMarker)) {
      const formattedItems = newFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
      featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
      fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
      console.log('Successfully updated src/app/features/page.tsx grid items with 5 new features!');
    } else {
      console.warn('Could not find insertion marker in features/page.tsx!');
    }
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
  console.log('Round 122 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
