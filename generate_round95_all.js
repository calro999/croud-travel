const fs = require('fs');
const path = require('path');

const { generateToyamaAmaharashiShinminatoPage } = require('./scripts/round95/generate_toyama_amaharashi_shinminato');
const { generateIshikawaKanazawaYuwakuPage } = require('./scripts/round95/generate_ishikawa_kanazawa_yuwaku');
const { generateGifuHidaTakayamaPage } = require('./scripts/round95/generate_gifu_hida_takayama');
const { generateFukuokaItoshimaHakataPage } = require('./scripts/round95/generate_fukuoka_itoshima_hakata');
const { generateHokkaidoTomamuFuranoPage } = require('./scripts/round95/generate_hokkaido_tomamu_furano');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 95: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round95_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateToyamaAmaharashiShinminatoPage(rawHotels.toyama_amaharashi_shinminato.hotels);
  generateIshikawaKanazawaYuwakuPage(rawHotels.ishikawa_kanazawa_yuwaku.hotels);
  generateGifuHidaTakayamaPage(rawHotels.gifu_hida_takayama.hotels);
  generateFukuokaItoshimaHakataPage(rawHotels.fukuoka_itoshima_hakata.hotels);
  generateHokkaidoTomamuFuranoPage(rawHotels.hokkaido_tomamu_furano.hotels);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-toyama-amaharashi-shinminato-tateyama-crab-stay',
    'winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay',
    'winter-gifu-hida-takayama-onsen-snow-beef-stay',
    'winter-fukuoka-itoshima-oyster-hakata-fugu-stay',
    'winter-hokkaido-tomamu-furano-ice-village-wagyu-stay'
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
      slug: 'winter-toyama-amaharashi-shinminato-tateyama-crab-stay',
      title: '雨晴海岸の冠雪立山連峰奇跡絶景と新湊昼セリ極上本ズワイガニ・寒ブリ・富山湾鮨を堪能する名宿',
      desc: '11月から1月、海上に浮かぶ白銀の立山連峰3000mと早朝の気嵐、新湊漁港13時の昼セリで紅く染まる本ズワイガニ、寒ブリ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay',
      title: '兼六園雪吊りと奥金沢「湯涌温泉」の静寂湯・冬限定の幻「香箱ガニ」＆加能ガニ・治部煮を味わう名宿',
      desc: '11月から1月、幾何学美の兼六園雪吊りと雪化粧の茶屋街、11月6日解禁のわずか2ヶ月しか味わえない香箱ガニの内子外子…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gifu-hida-takayama-onsen-snow-beef-stay',
      title: '白銀の古い町並み雪景色と飛騨高山温泉・極上A5飛騨牛すき焼き＆冬限定「しぼりたて新酒」酒蔵めぐりの名宿',
      desc: '11月から1月、雪化粧した古い町並みと朱塗りの中橋、青い杉玉揺れる老舗酒蔵のしぼりたて新酒利き酒、とろけるA5飛騨牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukuoka-itoshima-oyster-hakata-fugu-stay',
      title: '冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆温泉名宿',
      desc: '11月から1月、岐志や船越の漁港に並ぶ糸島カキ小屋で香ばしい焼きカキ、玄界灘の天然とらふぐ、博多駅前62万球イルミ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-tomamu-furano-ice-village-wagyu-stay',
      title: '氷の街トマム「アイスヴィレッジ」と白銀の富良野・極上富良野和牛＆濃厚ふらのチーズフォンデュの冬リゾート名宿',
      desc: '11月下旬から1月、氷点下30度の青い氷の教会や氷のBar、標高1088m霧氷テラス、富良野ニングルテラスと極上和牛…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-toyama-amaharashi-shinminato-tateyama-crab-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 95 features or marker not found.');
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
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-10-01</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
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
  console.log('Round 95 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
