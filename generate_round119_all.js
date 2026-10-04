const fs = require('fs');
const path = require('path');

const { generateFukuiEchizenCoastPage } = require('./scripts/round119/generate_fukui_echizen_coast');
const { generateNaganoAzuminoOmachiPage } = require('./scripts/round119/generate_nagano_azumino_omachi');
const { generateYamagataSakataTsuruokaPage } = require('./scripts/round119/generate_yamagata_sakata_tsuruoka');
const { generateKagawaZentsujiMarugamePage } = require('./scripts/round119/generate_kagawa_zentsuji_marugame');
const { generateKagoshimaIzumiAkunePage } = require('./scripts/round119/generate_kagoshima_izumi_akune');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 119: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round119_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateFukuiEchizenCoastPage, data: rawHotels.fukui_echizen_coast_suisen_crab.hotels },
    { fn: generateNaganoAzuminoOmachiPage, data: rawHotels.nagano_azumino_omachi_hotaka.hotels },
    { fn: generateYamagataSakataTsuruokaPage, data: rawHotels.yamagata_sakata_tsuruoka_hagurosan.hotels },
    { fn: generateKagawaZentsujiMarugamePage, data: rawHotels.kagawa_zentsuji_marugame_castle.hotels },
    { fn: generateKagoshimaIzumiAkunePage, data: rawHotels.kagoshima_izumi_crane_akune_kurobuta.hotels }
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
      slug: 'winter-fukui-echizen-coast-suisen-crab-misaki-stay',
      title: '越前海岸＆越前町！日本海に咲く越前水仙まつり群生美と越前岬灯台・黄色タグ付き本場越前がに名宿',
      desc: '冬の荒波日本海に咲き乱れる日本三大水仙群生地の絶景と越前岬灯台。本場越前町が誇る黄色いブランドタグ付き活越前がにの極上フルコースと絶景露天…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay',
      title: '安曇野＆大町温泉郷！白銀の北アルプス後立山連峰と穂高神社初詣・光のイルミネーション＆雪見露天名宿',
      desc: '白銀の後立山連峰大パノラマと県内最大級あづみの公園光の祭典。日本アルプス総鎮守・穂高神社初詣と葛温泉引湯の大町雪見露天、信州サーモン・信州牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay',
      title: '酒田＆鶴岡・羽黒山！出羽三山神社の雪の初詣と山居倉庫雪景色・冬の日本海名物寒鱈どんがら汁＆名湯名宿',
      desc: '白銀の静寂に佇む国宝羽黒山五重塔と出羽三山神社初詣。酒田山居倉庫の雪化粧ケヤキ並木と荒海が育む熱々寒鱈どんがら汁・白子、湯野浜・温海温泉露天…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagawa-zentsuji-marugame-castle-udon-stay',
      title: '善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん名宿',
      desc: '空海御生誕の総本山善通寺初詣と戒壇めぐり。日本一高い石垣美の丸亀城ライトアップ、冬限定の根菜たっぷり熱々しっぽくうどんと丸亀発祥骨付鳥…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagoshima-izumi-crane-akune-kurobuta-stay',
      title: '出水＆阿久根・さつま！世界屈指のツル渡来地一万羽のツルと出水麓武家屋敷初詣・阿久根の華アジ＆黒豚名宿',
      desc: '冬の大空を舞う1万羽の特別天然記念物ツル群舞と出水麓武家屋敷群初詣。阿久根の極上ブランド華アジ・天然ウニとかごしま黒豚、紫尾温泉神の湯美肌露天…',
      badge: '11・12・1月特集'
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
    `- https://croud-travel.com/winter-fukui-echizen-coast-suisen-crab-misaki-stay/: 越前海岸＆越前町！日本海に咲く越前水仙まつり群生美と越前岬灯台・黄色タグ付き本場越前がに名宿5選`,
    `- https://croud-travel.com/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay/: 安曇野＆大町温泉郷！白銀の北アルプス後立山連峰と穂高神社初詣・光のイルミネーション＆雪見露天名宿5選`,
    `- https://croud-travel.com/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay/: 酒田＆鶴岡・羽黒山！出羽三山神社の雪の初詣と山居倉庫雪景色・冬の日本海名物寒鱈どんがら汁＆名湯名宿5選`,
    `- https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay/: 善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん名宿5選`,
    `- https://croud-travel.com/winter-kagoshima-izumi-crane-akune-kurobuta-stay/: 出水＆阿久根・さつま！世界屈指のツル渡来地一万羽のツルと出水麓武家屋敷初詣・阿久根の華アジ＆黒豚名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 119 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
