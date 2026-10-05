const fs = require('fs');
const path = require('path');

const { generateFukushimaTakayuPage } = require('./scripts/round83/generate_fukushima_takayu');
const { generateYamagataHijioriPage } = require('./scripts/round83/generate_yamagata_hijiori');
const { generateAomoriShimofuroPage } = require('./scripts/round83/generate_aomori_shimofuro');
const { generateIwateOshukuPage } = require('./scripts/round83/generate_iwate_oshuku');
const { generateOkayamaMimasakaPage } = require('./scripts/round83/generate_okayama_mimasaka');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 83: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round83_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateFukushimaTakayuPage(rawHotels.fukushima_takayu);
  generateYamagataHijioriPage(rawHotels.yamagata_hijiori);
  generateAomoriShimofuroPage(rawHotels.aomori_shimofuro);
  generateIwateOshukuPage(rawHotels.iwate_oshuku);
  generateOkayamaMimasakaPage(rawHotels.okayama_mimasaka);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-fukushima-takayu-tsuchiyu-onsen-yukimi-fukushimagyu-stay',
    'winter-yamagata-hijiori-onsen-heavy-snow-toji-yamagata-beef-stay',
    'winter-aomori-shimofuro-onsen-oma-maguro-ankou-tsugaru-stay',
    'winter-iwate-oshuku-shizukuishi-onsen-koiwai-snow-shizukuishigyu-stay',
    'winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay'
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
      slug: 'winter-fukushima-takayu-tsuchiyu-onsen-yukimi-fukushimagyu-stay',
      title: '吾妻連峰の雪見露天＆白濁完全掛け流し薬湯・極上福島牛と地酒名宿',
      desc: '11月から12月にかけて、奥羽三高湯の筆頭「高湯温泉」の白濁硫黄泉と土湯温泉のこけし情緒…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-yamagata-hijiori-onsen-heavy-snow-toji-yamagata-beef-stay',
      title: '開湯1200年の豪雪秘湯カルデラ＆朝市情緒・極上山形牛と熱々芋煮名宿',
      desc: '11月から12月にかけて、特別豪雪地帯の大蔵村肘折カルデラに湧く名湯と朝市の温もり…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-aomori-shimofuro-onsen-oma-maguro-ankou-tsugaru-stay',
      title: '津軽海峡冬景色＆名物風間浦あんこう・極重大間マグロと白濁硫黄泉名宿',
      desc: '11月から12月にかけて、本州最北端の下北半島で味わう生きたまま揚がる幻の鮟鱇と漁火雪見…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-iwate-oshuku-shizukuishi-onsen-koiwai-snow-shizukuishigyu-stay',
      title: '開湯450年の名湯鶯宿＆小岩井農場雪景色・極上雫石牛と盛岡三大麺名宿',
      desc: '11月から12月にかけて、岩手山麓に広がる鶯宿温泉の豊富な湯量と小岩井イルミネーション…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-okayama-mimasaka-okutsu-yunogo-onsen-sakushugyu-stay',
      title: '美作三湯奥津＆湯郷温泉の初冬雪見・吉井川足元湧出湯と津山そずり鍋名宿',
      desc: '11月から12月にかけて、中国山地の名湯奥津温泉の「鍵湯」美肌ぬる湯と作州牛・そずり鍋…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (featuresContent.includes(gridInsertMarker)) {
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
    console.warn('Could not locate grid insert marker in src/app/features/page.tsx');
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
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-09-29</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
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

  // Sort lines if applicable or clean
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
  console.log('Round 83 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
