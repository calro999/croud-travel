const fs = require('fs');
const path = require('path');

const { generateYamanashiShimobePage } = require('./scripts/round84/generate_yamanashi_shimobe');
const { generateIshikawaAwazuPage } = require('./scripts/round84/generate_ishikawa_awazu');
const { generateAkitaYuzePage } = require('./scripts/round84/generate_akita_yuze');
const { generateFukushimaBandaiatamiPage } = require('./scripts/round84/generate_fukushima_bandaiatami');
const { generateNaganoKakeyuPage } = require('./scripts/round84/generate_nagano_kakeyu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 84: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round84_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateYamanashiShimobePage(rawHotels.yamanashi_shimobe);
  generateIshikawaAwazuPage(rawHotels.ishikawa_awazu);
  generateAkitaYuzePage(rawHotels.akita_yuze);
  generateFukushimaBandaiatamiPage(rawHotels.fukushima_bandaiatami);
  generateNaganoKakeyuPage(rawHotels.nagano_kakeyu);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay',
    'winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay',
    'winter-akita-yuze-onsen-towada-kiritanpo-hinaijidori-stay',
    'winter-fukushima-bandaiatami-onsen-hagihime-fukushimagyu-stay',
    'winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay'
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
      slug: 'winter-yamanashi-shimobe-onsen-minobu-koshu-beef-stay',
      title: '武田信玄公の隠し湯ぬる湯治＆初冬富士山・極上甲州牛と名物ほうとう名宿',
      desc: '11月から12月にかけて、戦国武将・武田信玄公ゆかりの自噴30度ぬる湯とあつ湯の交互浴、身延山久遠寺…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay',
      title: '開湯1300年霊峰白山古湯＆解禁加能ガニ・香箱ガニと極上能登牛名宿',
      desc: '11月から12月にかけて、全宿自家堀り源泉の純度100%硫酸塩泉と日本海ズワイガニの王者・能登牛…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-akita-yuze-onsen-towada-kiritanpo-hinaijidori-stay',
      title: '日本三大美人の湯米代川雪渓谷＆発祥本場きりたんぽ鍋と比内地鶏名宿',
      desc: '11月から12月にかけて、pH9超のアルカリ性単純温泉の雪見露天と新米あきたこまち・比内地鶏黄金出汁…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-fukushima-bandaiatami-onsen-hagihime-fukushimagyu-stay',
      title: '萩姫伝説の美肌ぬる湯＆初冬猪苗代湖の白鳥・極上福島牛と郡山名物鯉料理名宿',
      desc: '11月から12月にかけて、郡山の奥座敷に湧くpH9の美肌霊泉と猪苗代湖に舞う何千羽もの白鳥の群れ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-nagano-kakeyu-onsen-toji-soba-shinshugyu-stay',
      title: '文殊菩薩の霊泉雪見露天＆名物信州投じ蕎麦と極上信州プレミアム牛名宿',
      desc: '11月から12月にかけて、国民保養温泉地の名湯と屋根付き五台橋の雪景色、熱々出汁をくぐらせる投じ蕎麦…',
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
  console.log('Round 84 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
