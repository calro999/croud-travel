const fs = require('fs');
const path = require('path');

const { generateMiyagiTogattaPage } = require('./scripts/round89/generate_miyagi_togatta');
const { generateFukushimaIwakiYumotoPage } = require('./scripts/round89/generate_fukushima_iwaki_yumoto');
const { generateChibaYoroKeikokuPage } = require('./scripts/round89/generate_chiba_yoro_keikoku');
const { generateShizuokaMinamiizuShimogamoPage } = require('./scripts/round89/generate_shizuoka_minamiizu_shimogamo');
const { generateKumamotoYamagaHirayamaPage } = require('./scripts/round89/generate_kumamoto_yamaga_hirayama');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 89: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round89_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateMiyagiTogattaPage(rawHotels.miyagi_togatta);
  generateFukushimaIwakiYumotoPage(rawHotels.fukushima_iwaki_yumoto);
  generateChibaYoroKeikokuPage(rawHotels.chiba_yoro_keikoku);
  generateShizuokaMinamiizuShimogamoPage(rawHotels.shizuoka_minamiizu_shimogamo);
  generateKumamotoYamagaHirayamaPage(rawHotels.kumamoto_yamaga_hirayama);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay',
    'winter-fukushima-iwaki-yumoto-onsen-ankou-jobanmono-fukushimagyu-stay',
    'winter-chiba-yoro-keikoku-onsen-kuroyu-kazusagyu-jibier-stay',
    'winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay',
    'winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay'
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
      slug: 'winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay',
      title: '初冠雪の蔵王連峰を望む開湯400年の名湯・最高級A5仙台牛ステーキ＆極上蔵王鴨せり鍋・遠刈田こけしの里名宿',
      desc: '11月から12月にかけて、白銀の蔵王連峰、茶褐色硫酸塩泉のぬくもり、根っこまで甘い名取せりと蔵王鴨鍋、A5仙台牛…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-fukushima-iwaki-yumoto-onsen-ankou-jobanmono-fukushimagyu-stay',
      title: '冬の味覚常磐もの寒アンコウ濃厚どぶ汁鍋＆目光唐揚げ・日本三古湯の美肌硫黄泉と極上福島牛名宿',
      desc: '11月から12月にかけて、東北のハワイ温暖避寒、日本三古湯の硫黄泉、あん肝を煎り煮込む本場寒アンコウどぶ汁と目光…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-chiba-yoro-keikoku-onsen-kuroyu-kazusagyu-jibier-stay',
      title: '本州一遅い初冬の紅葉ライトアップと美肌黒湯天然温泉・房総かずさ和牛＆天然猪ジビエ鍋名宿',
      desc: '11月下旬から12月にかけて、燃えるような粟又の滝紅葉、太古の恵み漆黒の美肌黒湯、房総かずさ和牛と天然猪ぼたん鍋…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay',
      title: '温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつり名宿',
      desc: '11月から12月にかけて、冬でも15℃前後の温暖避寒、弓ヶ浜の白砂青松、最盛期の伊勢海老姿造りと地金目鯛姿煮、水仙…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay',
      title: '八千代座の小江戸情緒と極上とろとろ美肌ぬる湯・熊本あか牛溶岩焼き＆極上霜降り馬刺し名宿',
      desc: '11月から12月にかけて、菊池川の川霧と八千代座の静寂、pH9.8超の奇跡のとろとろ美肌ぬる湯、熊本あか牛と馬刺し…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay') && featuresContent.includes(gridInsertMarker)) {
    const cardsJs = newFeatures.map(f => `            {
              slug: '${f.slug}',
              title: ${JSON.stringify(f.title)},
              desc: ${JSON.stringify(f.desc)},
              badge: '${f.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace(gridInsertMarker, gridInsertMarker + cardsJs + '\n');
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx');
  } else {
    console.log('src/app/features/page.tsx already contains Round 89 features or marker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Extract all existing urls
  const existingLocs = new Set([...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
  let addedSitemapCount = 0;

  for (const slug of slugs) {
    const loc = `https://croud-travel.pages.dev/${slug}/`;
    if (!existingLocs.has(loc)) {
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-09-30</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
      sitemapContent = sitemapContent.replace('</urlset>', entry + '</urlset>');
      existingLocs.add(loc);
      addedSitemapCount++;
    }
  }

  // Sort sitemap entries alphabetically
  const urlBlocks = [...sitemapContent.matchAll(/  <url>[\s\S]*?<\/url>/g)].map(m => m[0]);
  urlBlocks.sort((a, b) => {
    const locA = (a.match(/<loc>(.*?)<\/loc>/) || [])[1] || '';
    const locB = (b.match(/<loc>(.*?)<\/loc>/) || [])[1] || '';
    return locA.localeCompare(locB);
  });
  const newSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + urlBlocks.join('\n') + `\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, newSitemapXml, 'utf8');
  console.log(`Successfully updated public/sitemap-features.xml (added ${addedSitemapCount} entries, sorted alphabetically)`);

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  let addedLlmsCount = 0;

  for (const slug of slugs) {
    const url = `- https://croud-travel.pages.dev/${slug}/`;
    if (!llmsContent.includes(url)) {
      llmsContent += `\n${url}`;
      addedLlmsCount++;
    }
  }

  const lines = llmsContent.split('\n');
  const nonUrlLines = [];
  const urlLines = [];
  for (const line of lines) {
    if (line.startsWith('- https://croud-travel.pages.dev/')) {
      if (!urlLines.includes(line)) urlLines.push(line);
    } else {
      nonUrlLines.push(line);
    }
  }
  urlLines.sort();
  fs.writeFileSync(llmsPath, nonUrlLines.join('\n') + '\n' + urlLines.join('\n') + '\n', 'utf8');
  console.log(`Successfully updated public/llms-full.txt (added ${addedLlmsCount} entries)`);

  console.log('\n================================================================');
  console.log('Round 89 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
