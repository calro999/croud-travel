const fs = require('fs');
const path = require('path');

const { generateYamagataHijioriOnsenPage } = require('./scripts/round93/generate_yamagata_hijiori_onsen');
const { generateNaganoHirugamiOnsenPage } = require('./scripts/round93/generate_nagano_hirugami_onsen');
const { generateTochigiYunishigawaOnsenPage } = require('./scripts/round93/generate_tochigi_yunishigawa_onsen');
const { generateShizuokaNishiizuToiOnsenPage } = require('./scripts/round93/generate_shizuoka_nishiizu_toi_onsen');
const { generateNagasakiUnzenOnsenPage } = require('./scripts/round93/generate_nagasaki_unzen_onsen');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 93: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round93_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateYamagataHijioriOnsenPage(rawHotels.yamagata_hijiori_onsen);
  generateNaganoHirugamiOnsenPage(rawHotels.nagano_hirugami_onsen);
  generateTochigiYunishigawaOnsenPage(rawHotels.tochigi_yunishigawa_onsen);
  generateShizuokaNishiizuToiOnsenPage(rawHotels.shizuoka_nishiizu_toi_onsen);
  generateNagasakiUnzenOnsenPage(rawHotels.nagasaki_unzen_onsen);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamagata-hijiori-onsen-snow-yamagatagyu-toji-stay',
    'winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay',
    'winter-tochigi-yunishigawa-onsen-kamakura-irori-stay',
    'winter-shizuoka-nishiizu-toi-onsen-sunset-kinmedai-stay',
    'winter-nagasaki-unzen-onsen-jigoku-muhyo-unzen-beef-stay'
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
      slug: 'winter-yamagata-hijiori-onsen-snow-yamagatagyu-toji-stay',
      title: '豪雪の奇跡・開湯1200年肘折温泉の黄金湯治と名物納豆汁＆極上山形牛・肘折幻想雪回廊を巡る名宿',
      desc: '11月から1月、出羽三山の麓・大蔵村肘折温泉は日本屈指の豪雪と木造三層の楼閣、黄金色の自家源泉、名物納豆汁と山形牛、雪回廊…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay',
      title: '日本一の星空ナイトツアーとpH9.7強アルカリ美肌の湯・極上南信州牛＆信州サーモンを味わう名宿',
      desc: '11月から1月、環境省認定星空日本一の阿智村で澄み切った満天の冬星空と、pH9.7のトロトロ強アルカリ美肌湯、霜降り南信州牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tochigi-yunishigawa-onsen-kamakura-irori-stay',
      title: '平家落人の隠れ里・湯西川温泉の雪見露天風呂と名物平家囲炉裏会席＆日本夜景遺産かまくら祭を巡る名宿',
      desc: '11月から1月、日光の最奥・平家落人伝説の里で初雪の渓谷美、炭火で焼く岩魚やばんだい餅の囲炉裏会席、夜景遺産かまくら祭…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-nishiizu-toi-onsen-sunset-kinmedai-stay',
      title: '西伊豆・土肥温泉の黄金夕日富士と極上寒金目鯛姿煮＆伊勢海老・日本一早咲きの土肥桜露天を巡る名宿',
      desc: '11月から1月、駿河湾越しの夕日富士パノラマと、1月中旬満開の日本一早咲き土肥桜、脂が乗った寒金目鯛姿煮と伊勢海老の饗宴…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagasaki-unzen-onsen-jigoku-muhyo-unzen-beef-stay',
      title: '立ち上る雲仙地獄の白煙と冬の奇跡「霧氷」・極上雲仙牛＆島原名物具雑煮を堪能する雲仙温泉名宿',
      desc: '11月から1月、標高700mの雲仙地獄の大迫力白煙と、仁田峠を純白に染める冬の霧氷花ぼうろ、濃厚な乳白色硫黄泉と極上雲仙牛…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-yamagata-hijiori-onsen-snow-yamagatagyu-toji-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 93 features or marker not found.');
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
  console.log('Round 93 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
