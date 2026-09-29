const fs = require('fs');
const path = require('path');

const { generateIwateHachimantaiPage } = require('./scripts/round85/generate_iwate_hachimantai');
const { generateNiigataMatsunoyamaPage } = require('./scripts/round85/generate_niigata_matsunoyama');
const { generateNaganoYamadaPage } = require('./scripts/round85/generate_nagano_yamada');
const { generateHokkaidoKawayuPage } = require('./scripts/round85/generate_hokkaido_kawayu');
const { generateKagoshimaMyokenPage } = require('./scripts/round85/generate_kagoshima_myoken');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 85: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round85_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateIwateHachimantaiPage(rawHotels.iwate_hachimantai);
  generateNiigataMatsunoyamaPage(rawHotels.niigata_matsunoyama);
  generateNaganoYamadaPage(rawHotels.nagano_yamada_matsukawa);
  generateHokkaidoKawayuPage(rawHotels.hokkaido_kawayu_mashu);
  generateKagoshimaMyokenPage(rawHotels.kagoshima_myoken);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-iwate-hachimantai-matsukawa-onsen-snow-maesawagyu-stay',
    'winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay',
    'winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay',
    'winter-hokkaido-kawayu-onsen-mashu-kussharo-crab-stay',
    'winter-kagoshima-myoken-onsen-amorigawa-black-pork-stay'
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
      slug: 'winter-iwate-hachimantai-matsukawa-onsen-snow-maesawagyu-stay',
      title: '白銀の樹氷と乳白色雪見秘湯＆南部鉄器で味わう極上前沢牛すき焼き名宿',
      desc: '11月から12月にかけて、八幡平のブナ原生林と松川渓谷に湧く青みがかった自噴乳白色硫黄泉、伝統の南部鉄鍋で香ばしく仕上げる前沢牛…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-niigata-matsunoyama-onsen-yakuto-snow-tsumari-pork-stay',
      title: '日本三大薬湯の自噴化石海水＆美人林の雪景色・極上妻有ポークと魚沼米名宿',
      desc: '11月から12月にかけて、約1200万年前の化石海水が自噴する奇跡の薬湯と美人林の白銀世界、甘くとろける妻有ポークと魚沼コシヒカリ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-nagano-yamada-onsen-matsukawakeikoku-shinshugyu-stay',
      title: '松川渓谷の断崖雪見露天＆信州プレミアム牛と名物小布施栗おこわ隠れ名宿',
      desc: '11月から12月にかけて、文豪ゆかりの山田温泉と断崖絶壁にせり出す野趣あふれる露天風呂、小布施栗おこわと信州高山ワインのマリアージュ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-hokkaido-kawayu-onsen-mashu-kussharo-crab-stay',
      title: 'pH1.7極上強酸性硫黄泉＆屈斜路湖の白鳥雪景色・冬のオホーツク毛ガニ名宿',
      desc: '11月から12月にかけて、硫黄山から自噴する釘をも溶かす強酸性硫黄泉と屈斜路湖砂湯に集う白鳥の群れ、身が詰まったオホーツク毛ガニ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-kagoshima-myoken-onsen-amorigawa-black-pork-stay',
      title: '天降川渓流の直下自噴炭酸泉露天＆極上かごしま黒豚しゃぶしゃぶ隠れ名宿',
      desc: '11月から12月にかけて、空港から車で15分の秘境・天降川沿いに湧く新鮮な炭酸水素塩泉と川面一体露天、かごしま黒豚出汁しゃぶと黒牛…',
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
  console.log('Round 85 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
