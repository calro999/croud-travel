const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateAkitaNyutoPage } = require('./scripts/round82/generate_akita_nyuto');
const { generateGifuGeroPage } = require('./scripts/round82/generate_gifu_gero');
const { generateGunmaKusatsuPage } = require('./scripts/round82/generate_gunma_kusatsu');
const { generateEhimeDogoPage } = require('./scripts/round82/generate_ehime_dogo');
const { generateFukushimaAizuPage } = require('./scripts/round82/generate_fukushima_aizu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 82: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round82_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateAkitaNyutoPage(rawHotels.akita_nyuto);
  generateGifuGeroPage(rawHotels.gifu_gero);
  generateGunmaKusatsuPage(rawHotels.gunma_kusatsu);
  generateEhimeDogoPage(rawHotels.ehime_dogo);
  generateFukushimaAizuPage(rawHotels.fukushima_aizu);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-akita-nyuto-onsen-yukimi-kiritanpo-hinaijidori-stay',
    'winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay',
    'winter-gunma-kusatsu-onsen-yubatake-yukimi-joshugyu-stay',
    'winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay',
    'winter-fukushima-aizu-higashiyama-ashinomaki-onsen-stay'
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
      slug: 'winter-akita-nyuto-onsen-yukimi-kiritanpo-hinaijidori-stay',
      title: '初冬雪見秘湯・乳白色の濁り湯＆本場きりたんぽ鍋と比内地鶏名宿',
      desc: '11月から12月にかけて、十和田八幡平国立公園の乳頭山麓に抱かれた秋田県仙…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay',
      title: '日本三名泉のつるすべ美肌湯＆冬花火物語・極上飛騨牛すき焼き名宿',
      desc: '11月から12月にかけて、万里集九や林羅山によって有馬・草津と並ぶ日本三名…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-gunma-kusatsu-onsen-yubatake-yukimi-joshugyu-stay',
      title: '湯畑雪景色ライトアップ＆湧出量日本一の名湯・上州牛すき焼き名宿',
      desc: '11月から12月にかけて、毎分3万2300リットル以上という日本一の自然湧…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay',
      title: '日本三古湯・本館全館営業再開＆冬の宇和島鯛めし・伊予牛と美肌名宿',
      desc: '11月から12月にかけて、三千年の歴史を誇る日本三古湯の筆頭「愛媛・道後温泉…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-fukushima-aizu-higashiyama-ashinomaki-onsen-stay',
      title: '渓谷雪見露天＆名物会津牛・極上馬刺し・郷土こづゆと城下町名宿',
      desc: '11月から12月にかけて、鶴ヶ城の武家文化と城下町情緒が息づく福島県会津若松…',
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
  console.log('Round 82 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
