const fs = require('fs');
const path = require('path');

const { generateNaganoToguraKamiyamadaPage } = require('./scripts/round88/generate_nagano_togura_kamiyamada');
const { generateHiroshimaTomonouraPage } = require('./scripts/round88/generate_hiroshima_tomonoura');
const { generateOitaHitaAmagasePage } = require('./scripts/round88/generate_oita_hita_amagase');
const { generateFukushimaDakePage } = require('./scripts/round88/generate_fukushima_dake');
const { generateShizuokaIzunagaokaPage } = require('./scripts/round88/generate_shizuoka_izunagaoka');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 88: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round88_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateNaganoToguraKamiyamadaPage(rawHotels.nagano_togura_kamiyamada);
  generateHiroshimaTomonouraPage(rawHotels.hiroshima_tomonoura);
  generateOitaHitaAmagasePage(rawHotels.oita_hita_amagase);
  generateFukushimaDakePage(rawHotels.fukushima_dake);
  generateShizuokaIzunagaokaPage(rawHotels.shizuoka_izunagaoka);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay',
    'winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay',
    'winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay',
    'winter-fukushima-dake-onsen-adatara-milky-bath-fukushimagyu-stay',
    'winter-shizuoka-izunagaoka-onsen-fujiview-kinmedai-izugyu-stay'
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
      slug: 'winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay',
      title: '善光寺精進落としの美肌硫黄泉と初冬の味覚・極上信州プレミアム牛＆完熟サンふじ・辛味大根おしぼりうどん名宿',
      desc: '11月から12月にかけて、千曲川の川霧と冠着山の初雪、エメラルドグリーンの単純硫黄泉、信州牛すき焼きとおしぼりうどん…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay',
      title: '瀬戸内海初冬の夕暮れと潮待ちの港情緒・名物寒真鯛の鯛めし＆地魚姿造り・幻の峠下牛と保命酒名宿',
      desc: '11月から12月にかけて、仙酔島を茜色に染める夕暮れマジックアワー、越冬の脂が乗る寒真鯛の土鍋鯛めしと峠下牛ステーキ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay',
      title: '水郷ひたの初冬川霧と天領豆田町の小江戸情緒・玖珠川渓流露天とおおいた豊後牛・初冬鮎うるか名宿',
      desc: '11月から12月にかけて、三隈川の幻想的な川霧と屋形船情緒、天領小江戸の白壁土蔵散策、最高峰おおいた豊後牛と梅酒…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-fukushima-dake-onsen-adatara-milky-bath-fukushimagyu-stay',
      title: '安達太良山初冬の雪景色と奇跡の強酸性ミルキー美肌湯・極上福島牛＆川俣シャモ鍋・二本松銘酒名宿',
      desc: '11月から12月にかけて、智恵子のほんとの空と安達太良山冠雪、8km流下で熟成する奇跡のミルキー湯、福島牛と川俣シャモ…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-shizuoka-izunagaoka-onsen-fujiview-kinmedai-izugyu-stay',
      title: '富士山眺望と温暖避寒の古奈名湯・駿河湾朝獲れ地魚舟盛り＆伊豆牛ステーキ・金目鯛姿煮名宿',
      desc: '11月から12月にかけて、碧テラスから望む純白の冠雪富士と駿河湾、温暖な中伊豆避寒、脂が乗った金目鯛姿煮と幻の伊豆牛…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 88 features or marker not found.');
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
  console.log('Round 88 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
