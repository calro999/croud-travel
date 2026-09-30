const fs = require('fs');
const path = require('path');

const { generateWakayamaKawayuYunominePage } = require('./scripts/round90/generate_wakayama_kawayu_yunomine');
const { generateAkitaOyasukyoAkinomiyaPage } = require('./scripts/round90/generate_akita_oyasukyo_akinomiya');
const { generateSagaFuruyuKumanokawaPage } = require('./scripts/round90/generate_saga_furuyu_kumanokawa');
const { generateGunmaOigamiPage } = require('./scripts/round90/generate_gunma_oigami');
const { generateShizuokaUmegashimaPage } = require('./scripts/round90/generate_shizuoka_umegashima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 90: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round90_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateWakayamaKawayuYunominePage(rawHotels.wakayama_kawayu_yunomine);
  generateAkitaOyasukyoAkinomiyaPage(rawHotels.akita_oyasukyo_akinomiya);
  generateSagaFuruyuKumanokawaPage(rawHotels.saga_furuyu_kumanokawa);
  generateGunmaOigamiPage(rawHotels.gunma_oigami);
  generateShizuokaUmegashimaPage(rawHotels.shizuoka_umegashima);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay',
    'winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay',
    'winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay',
    'winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay',
    'winter-shizuoka-umegashima-onsen-okushizu-surugashamo-stay'
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
      slug: 'winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay',
      title: '冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥・熊野三山を巡る名宿',
      desc: '11月から12月にかけて、12月1日開湯の大塔川仙人風呂、世界遺産つぼ湯の白濁硫黄泉、極上熊野牛すき焼きと源泉名物温泉粥…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay',
      title: '白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん名宿',
      desc: '11月から12月にかけて、轟音響く小安峡大噴湯の白煙、開湯1200年秋の宮の静寂、根っこまで甘い本場三関セリ鍋と皆瀬牛…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay',
      title: 'ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかりの名宿',
      desc: '11月から12月にかけて、体温同等の38℃ぬる湯と加温湯の温冷交互浴、pH9.5超の極上美肌泉、最高級佐賀牛と三瀬鶏…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay',
      title: '赤城山北麓・初冬の片品渓谷美と美肌単純硫黄泉・極上上州牛すき焼き＆上州麦豚・手打ち十割蕎麦名宿',
      desc: '11月から12月にかけて、片品川の深い渓谷美、東洋のナイアガラ吹割の滝、肌に優しい単純硫黄泉、極上上州牛と手打ち十割蕎麦…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-shizuoka-umegashima-onsen-okushizu-surugashamo-stay',
      title: '駿府の隠し湯・南アルプス前衛峰の静寂と開湯1700年超濃厚とろとろ硫黄泉・駿河軍鶏鍋＆しずおか和牛名宿',
      desc: '11月から12月にかけて、家康公も愛したpH9.6超のとろとろ美容液硫黄泉、幻の駿河軍鶏鍋、しずおか和牛と有東木本わさび…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 90 features or marker not found.');
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
  console.log('Round 90 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
