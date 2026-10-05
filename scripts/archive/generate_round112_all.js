const fs = require('fs');
const path = require('path');

const { generateTokyoOdaibaPage } = require('./scripts/round112/generate_tokyo_odaiba');
const { generateOsakaCastlePage } = require('./scripts/round112/generate_osaka_castle');
const { generateHyogoKobePortPage } = require('./scripts/round112/generate_hyogo_kobe_port');
const { generateNaraParkPage } = require('./scripts/round112/generate_nara_park');
const { generateSaitamaOmiyaPage } = require('./scripts/round112/generate_saitama_omiya');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 112: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round112_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTokyoOdaibaPage, data: rawHotels.tokyo_odaiba.hotels },
    { fn: generateOsakaCastlePage, data: rawHotels.osaka_castle.hotels },
    { fn: generateHyogoKobePortPage, data: rawHotels.hyogo_kobe_port.hotels },
    { fn: generateNaraParkPage, data: rawHotels.nara_park.hotels },
    { fn: generateSaitamaOmiyaPage, data: rawHotels.saitama_omiya.hotels }
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
      slug: 'winter-tokyo-odaiba-toyosu-senkyakubanrai-yakei-stay',
      title: 'お台場レインボー花火＆豊洲千客万来！冬の東京ベイ夜景と江戸前海鮮・天然温泉名宿',
      desc: '澄明な冬空に重なるレインボーブリッジと東京タワー夜景。12月土曜のお台場レインボー花火、2024年誕生の豊洲千客万来江戸前市場グルメ、有明の天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-osaka-castle-nakanoshima-illumination-tenmangu-stay',
      title: '冬の大阪城イルミナージュ＆大阪天満宮新春初詣！水都中之島イルミネーションとなにわ冬グルメ名宿',
      desc: '西の丸庭園を光の歴史絵巻に変える大阪城イルミナージュ。中之島水都イルミネーション、学問の神様・大阪天満宮新春初詣、熱々のてっちりや串カツ、きつねうどん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay',
      title: '生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿',
      desc: '六甲山と神戸港の1000万ドルの冬夜景。希望を灯す神戸ルミナリエ、縁結び生田神社の新春初詣、南京町熱々点心、本場極上神戸牛ステーキと海を望む天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay',
      title: '春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿',
      desc: '世界遺産・春日大社の朱塗り回廊と釣燈籠が雪に映える新春厄除け初詣。東大寺大仏殿の厳かな佇まい、冬毛の鹿たち、滋味豊かな大和牛すき焼き・飛鳥鍋と名門宿…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-saitama-omiya-hikawa-shrine-hatsumode-keyaki-stay',
      title: '武蔵一宮氷川神社新春初詣＆けやきひろばイルミネーション！武州和牛と天然温泉に寛ぐ名宿',
      desc: '2400年の歴史誇る武蔵一宮氷川神社への新春200万人初詣と2kmの氷川参道散策。さいたま新都心けやきひろば15万球の光の森、武州和牛、武蔵野肉汁うどん…',
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

  const today = '2026-10-04';
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
    `- https://croud-travel.com/winter-tokyo-odaiba-toyosu-senkyakubanrai-yakei-stay/: お台場レインボー花火＆豊洲千客万来！冬の東京ベイ夜景と江戸前海鮮・天然温泉名宿5選`,
    `- https://croud-travel.com/winter-osaka-castle-nakanoshima-illumination-tenmangu-stay/: 冬の大阪城イルミナージュ＆大阪天満宮新春初詣！水都中之島イルミネーションとなにわ冬グルメ名宿5選`,
    `- https://croud-travel.com/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay/: 生田神社新春開運初詣＆神戸ルミナリエ！メリケンパーク冬夜景と極上神戸牛に酔いしれる名宿5選`,
    `- https://croud-travel.com/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay/: 春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選`,
    `- https://croud-travel.com/winter-saitama-omiya-hikawa-shrine-hatsumode-keyaki-stay/: 武蔵一宮氷川神社新春初詣＆けやきひろばイルミネーション！武州和牛と天然温泉に寛ぐ名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 112 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
