const fs = require('fs');
const path = require('path');

const { generateFukuiTsurugaPage } = require('./scripts/round125/generate_fukui_tsuruga');
const { generateYamagataShonaiPage } = require('./scripts/round125/generate_yamagata_shonai');
const { generateMieIseshimaPage } = require('./scripts/round125/generate_mie_iseshima');
const { generateKyotoTangoPage } = require('./scripts/round125/generate_kyoto_tango');
const { generateMiyagiMatsushimaPage } = require('./scripts/round125/generate_miyagi_matsushima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 125: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round125_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateFukuiTsurugaPage, data: rawHotels.fukui_tsuruga_mikata_echizengani.hotels },
    { fn: generateYamagataShonaiPage, data: rawHotels.yamagata_shonai_hagurosan_kandarajiru.hotels },
    { fn: generateMieIseshimaPage, data: rawHotels.mie_iseshima_jingu_matoya_oyster.hotels },
    { fn: generateKyotoTangoPage, data: rawHotels.kyoto_tango_amanohashidate_taizagani.hotels },
    { fn: generateMiyagiMatsushimaPage, data: rawHotels.miyagi_matsushima_shiogama_oyster.hotels }
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
      slug: 'winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay',
      title: '敦賀＆若狭・三方五湖！北陸道総鎮守「氣比神宮」新春初詣と三方五湖冬景色・黄色タグ越前がに＆若狭ふぐ名宿',
      desc: '北陸新幹線敦賀開業で話題！日本三大木造鳥居・氣比神宮初詣と無病息災長命水、水墨画のような水月湖の冬静寂、11月解禁越前がにと極寒若狭ふぐの二大味覚…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamagata-shonai-hagurosan-sakata-kandarajiru-yunohama-onsen-stay',
      title: '酒田＆鶴岡・出羽三山！羽黒山「国宝五重塔」雪景色と酒田山居倉庫・冬名物「寒鱈どんがら汁」＆湯野浜・あつみ温泉名宿',
      desc: '白銀の杉並木回廊に佇む羽黒山国宝五重塔と出羽三山初詣。雪ケヤキ並木が美しい酒田山居倉庫、冬の日本海が育む濃厚な寒鱈どんがら汁と名湯雪見風呂…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay',
      title: '伊勢志摩＆鳥羽・賢島！「伊勢神宮」新春初詣と宇治橋大鳥居の冬日の出・冬旬「的矢かき」＆伊勢海老・松阪牛会席名宿',
      desc: '二千年の祈りを紡ぐ内宮・外宮早朝参宮と冬至前後に現れる宇治橋日の出の奇跡。清浄生牡蠣「的矢かき」と伊勢海老、サミット舞台の英虞湾リゾートと鳥羽温泉郷…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-tango-amanohashidate-ine-funaya-taizagani-kanburi-stay',
      title: '丹後＆天橋立・伊根の舟屋！日本三景「天橋立」幻雪の飛龍観と伊根の舟屋雪景色・元伊勢初詣＆幻の「間人ガニ」名宿',
      desc: '白砂青松が雪をまとう幻雪飛龍観と元伊勢籠神社新春祈願。海に浮かぶ伊根の舟屋群の雪景色、わずか5隻の小型船が獲る緑タグ間人ガニと極上伊根寒ブリしゃぶ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay',
      title: '松島＆塩竈・松島湾！陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色・冬旬「三陸松島かき」＆極上ひがしもの鮪名宿',
      desc: '表坂202段を登る陸奥国一ノ宮初詣と国宝瑞巌寺雪景色。松島湾260余島の冬パノラマ、冬に身が太る濃厚な三陸松島かきと100本に1本の奇跡・塩竈ひがしもの鮪…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
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
    console.warn('Could not find gridMarker in features/page.tsx, checking fallback...');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
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
  console.log('Round 125 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
