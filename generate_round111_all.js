const fs = require('fs');
const path = require('path');

const { generateKanazawaCityPage } = require('./scripts/round111/generate_kanazawa_city');
const { generateTokyoAsakusaPage } = require('./scripts/round111/generate_tokyo_asakusa');
const { generateShizuokaCityPage } = require('./scripts/round111/generate_shizuoka_city');
const { generateMiyazakiNichinanPage } = require('./scripts/round111/generate_miyazaki_nichinan');
const { generateOkinawaNahaPage } = require('./scripts/round111/generate_okinawa_naha');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 111: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round111_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateKanazawaCityPage, data: rawHotels.kanazawa_city.hotels },
    { fn: generateTokyoAsakusaPage, data: rawHotels.tokyo_asakusa.hotels },
    { fn: generateShizuokaCityPage, data: rawHotels.shizuoka_city.hotels },
    { fn: generateMiyazakiNichinanPage, data: rawHotels.miyazaki_nichinan.hotels },
    { fn: generateOkinawaNahaPage, data: rawHotels.okinawa_naha.hotels }
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
      slug: 'winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay',
      title: '冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでん名宿',
      desc: '日本三名園・兼六園の唐崎松雪吊りと白銀の静謐美。11月6日解禁の香箱ガニや寒ブリ、尾山神社ステンドグラス神門初詣、出汁染みる金沢おでんと天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokyo-asakusa-sensoji-hatsumode-skytree-edomae-stay',
      title: '浅草寺新春初詣＆東京スカイツリー冬夜景！老舗すき焼き・江戸前天ぷら・下町天然温泉宿',
      desc: '雷門から続く新春の祈りと1400年の歴史。澄み渡る冬空に輝くスカイツリー限定ライティング、浅草今半すき焼き・江戸前天丼・どぜう鍋、名物黒湯天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay',
      title: '冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えび名宿',
      desc: '日本平夢テラスからの白銀冠雪富士山と駿河湾360度大絶景。徳川家康公を祀る国宝久能山東照宮初詣、清水港日本一の本マグロ丼、由比桜えびと静岡おでん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay',
      title: '冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿',
      desc: '断崖洞窟に鎮座する霊場・鵜戸神宮の運玉投げと新春初詣。冬でも温暖な青空広がる日南フェニックスロード、飫肥城下町の小京都情緒、本場伊勢海老と宮崎牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay',
      title: '新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル',
      desc: '平均気温18℃の温暖な避冬リゾート。琉球八社最高位・波上宮の新春開運初詣、2026年正殿復元へ進む首里城見せる復興、あぐー豚しゃぶしゃぶと琉球天然温泉…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const insertionPoint = featuresContent.indexOf('const features = [');
  if (insertionPoint !== -1) {
    const afterBracket = featuresContent.indexOf('[', insertionPoint) + 1;
    const itemsCode = newFeatures.map(f => `
    {
      slug: '${f.slug}',
      title: '${f.title}',
      desc: '${f.desc}',
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

  const today = '2026-10-03';
  const newSitemapEntries = slugs.map(slug => `  <url>
    <loc>https://croud-travel.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
    `- https://croud-travel.com/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay/: 冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでん名宿5選`,
    `- https://croud-travel.com/winter-tokyo-asakusa-sensoji-hatsumode-skytree-edomae-stay/: 浅草寺新春初詣＆東京スカイツリー冬夜景！老舗すき焼き・江戸前天ぷら・下町天然温泉宿5選`,
    `- https://croud-travel.com/winter-shizuoka-city-nihondaira-kunozan-toshogu-maguro-stay/: 冬の久能山東照宮新春初詣＆日本平富士山パノラマ絶景！清水港冬マグロ・由比桜えび名宿5選`,
    `- https://croud-travel.com/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay/: 冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿5選`,
    `- https://croud-travel.com/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay/: 新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 111 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
