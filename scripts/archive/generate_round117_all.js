const fs = require('fs');
const path = require('path');

const { generateAichiAtsumiIrakoPage } = require('./scripts/round117/generate_aichi_atsumi_irako');
const { generateHiroshimaKureEdajimaPage } = require('./scripts/round117/generate_hiroshima_kure_edajima');
const { generateFukushimaInawashiroBandaiPage } = require('./scripts/round117/generate_fukushima_inawashiro_bandai');
const { generateShigaTakashimaMakinoPage } = require('./scripts/round117/generate_shiga_takashima_makino');
const { generateAomoriTowadaOirasePage } = require('./scripts/round117/generate_aomori_towada_oirase');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 117: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round117_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateAichiAtsumiIrakoPage, data: rawHotels.aichi_atsumi_irako.hotels },
    { fn: generateHiroshimaKureEdajimaPage, data: rawHotels.hiroshima_kure_edajima.hotels },
    { fn: generateFukushimaInawashiroBandaiPage, data: rawHotels.fukushima_inawashiro_bandai.hotels },
    { fn: generateShigaTakashimaMakinoPage, data: rawHotels.shiga_takashima_makino.hotels },
    { fn: generateAomoriTowadaOirasePage, data: rawHotels.aomori_towada_oirase.hotels }
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
      slug: 'winter-aichi-atsumi-irako-nanohana-torafugu-asari-stay',
      title: '渥美半島＆伊良湖岬！1月満開の菜の花まつりと初日の出・冬旬の天然とらふぐ＆伊良湖温泉名宿',
      desc: '1月開幕の菜の花まつり一面の黄色い絨毯、伊良湖岬灯台の初日の出。遠州灘天然とらふぐ・大アサリ浜焼き・完熟いちご狩りと新開湯の伊良湖温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hiroshima-kure-edajima-oyster-yamato-port-stay',
      title: '呉＆江田島・音戸！最旬の広島かき小屋グルメと艦船ライトアップ冬イルミ・瀬戸内海一望名宿',
      desc: '最盛期を迎える江田島・呉の冬牡蠣づくし、大和ミュージアムと夕日に染まる潜水艦・護衛艦。音戸の瀬戸、海軍カレー・広島牛と極上療養泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay',
      title: '猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿',
      desc: '厳冬期天神浜の氷結アート「しぶき氷」と長浜の白鳥たち、白銀の秀峰磐梯山。開湯800年磐梯熱海の美肌雪見露天と会津地鶏・馬刺し・福島牛…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-shiga-takashima-makino-metasequoia-snow-shirahige-stay',
      title: '高島＆マキノ・白鬚神社！白銀のメタセコイア並木雪景色と湖中大鳥居初詣・天然鴨鍋＆近江牛名宿',
      desc: '2.4kmのメタセコイア白銀並木スノーロード、白鬚神社湖中大鳥居の初日の出。冬の最高峰・天然真鴨鍋と日本三大和牛・近江牛すき焼き…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-aomori-towada-lake-oirase-hyobaku-snow-onsen-stay',
      title: '十和田湖＆奥入瀬渓流！白銀の巨大氷瀑ツアーと十和田神社初詣・奥入瀬雪見露天＆倉石牛名宿',
      desc: '青白く凍りつく馬門岩・銚子大滝の巨大氷瀑と夜のライトアップ、不凍湖・十和田湖と十和田神社初詣。十和田バラ焼き・倉石牛と氷瀑露天風呂…',
      badge: '12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const searchPattern = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';
  const insertionPoint = featuresContent.indexOf(searchPattern);
  if (insertionPoint !== -1) {
    const afterBracket = insertionPoint + searchPattern.length;
    const itemsCode = newFeatures.map(f => `
            {
              slug: '${f.slug}',
              title: "${f.title}",
              desc: "${f.desc}",
              badge: '${f.badge}'
            },`).join('');
    featuresContent = featuresContent.slice(0, afterBracket) + itemsCode + featuresContent.slice(afterBracket);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('- Updated: src/app/features/page.tsx with 5 new features');
  } else {
    console.warn('Could not find insertion point in src/app/features/page.tsx');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const today = '2026-10-04';
  const newSitemapEntries = slugs.map(slug => `  <url>
    <loc>https://croud-travel.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`).join('\n');

  if (sitemapContent.includes('</urlset>')) {
    sitemapContent = sitemapContent.replace('</urlset>', `${newSitemapEntries}\n</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('- Updated: public/sitemap-features.xml with 10 new URLs (both domains)');
  }

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  const newLlmsEntries = [
    `- https://croud-travel.com/winter-aichi-atsumi-irako-nanohana-torafugu-asari-stay/: 渥美半島＆伊良湖岬！1月満開の菜の花まつりと初日の出・冬旬の天然とらふぐ＆伊良湖温泉名宿5選`,
    `- https://croud-travel.com/winter-hiroshima-kure-edajima-oyster-yamato-port-stay/: 呉＆江田島・音戸！最旬の広島かき小屋グルメと艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選`,
    `- https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay/: 猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選`,
    `- https://croud-travel.com/winter-shiga-takashima-makino-metasequoia-snow-shirahige-stay/: 高島＆マキノ・白鬚神社！白銀のメタセコイア並木雪景色と湖中大鳥居初詣・天然鴨鍋＆近江牛名宿5選`,
    `- https://croud-travel.com/winter-aomori-towada-lake-oirase-hyobaku-snow-onsen-stay/: 十和田湖＆奥入瀬渓流！白銀の巨大氷瀑ツアーと十和田神社初詣・奥入瀬雪見露天＆倉石牛名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 117 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
