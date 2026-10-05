const fs = require('fs');
const path = require('path');

const { generateGunmaHoushiSarugakyoPage } = require('./scripts/round86/generate_gunma_houshi_sarugakyo');
const { generateIwateHanamakiMinamiPage } = require('./scripts/round86/generate_iwate_hanamaki_minami');
const { generateYamagataShirabuYonezawaPage } = require('./scripts/round86/generate_yamagata_shirabu_yonezawa');
const { generateOitaSujiyuKujuPage } = require('./scripts/round86/generate_oita_sujiyu_kuju');
const { generateKumamotoTsuetateWaitaPage } = require('./scripts/round86/generate_kumamoto_tsuetate_waita');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 86: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round86_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateGunmaHoushiSarugakyoPage(rawHotels.gunma_houshi_sarugakyo);
  generateIwateHanamakiMinamiPage(rawHotels.iwate_hanamaki_minami);
  generateYamagataShirabuYonezawaPage(rawHotels.yamagata_shirabu_yonezawa);
  generateOitaSujiyuKujuPage(rawHotels.oita_sujiyu_kuju);
  generateKumamotoTsuetateWaitaPage(rawHotels.kumamoto_tsuetate_waita);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-gunma-houshi-sarugakyo-onsen-snow-joshu-beef-stay',
    'winter-iwate-hanamaki-minami-namari-osawa-snow-stay',
    'winter-yamagata-shirabu-onsen-snow-yonezawa-beef-stay',
    'winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay',
    'winter-kumamoto-tsuetate-waita-onsen-steaming-higogyu-stay'
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
      slug: 'winter-gunma-houshi-sarugakyo-onsen-snow-joshu-beef-stay',
      title: '三国峠の秘湯雪景色＆足元湧出「法師乃湯」と極上面上州牛すき焼き名宿',
      desc: '11月から12月にかけて、文豪が愛した国登録有形文化財の玉石敷き足元自噴湯と赤谷湖の初冬絶景、上州牛すき焼きと自家製豆富懐石…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-iwate-hanamaki-minami-namari-osawa-snow-stay',
      title: '白銀の豊沢渓谷と日本一深い自噴立ち湯＆宮沢賢治ゆかりの前沢牛・白金豚名宿',
      desc: '11月から12月にかけて、水深1.25mの立ち湯「白猿の湯」と川面一体の雪見露天、南部鉄鍋で味わう極上前沢牛と花巻名物白金豚…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-yamagata-shirabu-onsen-snow-yonezawa-beef-stay',
      title: '西吾妻山の豪雪秘湯と開湯700年名物湯滝＆最高峰A5米沢牛すき焼き名宿',
      desc: '11月から12月にかけて、毎分1500L注ぐ名物打たせ湯と茅葺き屋根の歴史宿、日本三大和牛の頂点に立つ米沢牛すき焼きと山形芋煮…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay',
      title: '標高1000mくじゅう連山初冬の霧氷雪景色＆打たせ湯日本一と極上豊後牛名宿',
      desc: '11月から12月にかけて、18筋の湯が落ちるうたせ大浴場と小松地獄の湯けむり、おおいた豊後牛すき焼きと九重夢ポーク出汁しゃぶ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-kumamoto-tsuetate-waita-onsen-steaming-higogyu-stay',
      title: '初冬に立ち上る湯けむりと元祖むし湯＆名物地獄蒸しと極上肥後あか牛名宿',
      desc: '11月から12月にかけて、開湯1800年の天然サウナ「むし湯」と川沿いに噴き出す湯けむり、肥後あか牛ステーキと名物杖立プリン…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-gunma-houshi-sarugakyo-onsen-snow-joshu-beef-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 86 features.');
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
  console.log('Round 86 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
