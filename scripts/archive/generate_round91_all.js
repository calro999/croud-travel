const fs = require('fs');
const path = require('path');

const { generateAomoriOwaniHirosakiPage } = require('./scripts/round91/generate_aomori_owani_hirosaki');
const { generateMieSakakibaraAkamePage } = require('./scripts/round91/generate_mie_sakakibara_akame');
const { generateTottoriIwaiUradomePage } = require('./scripts/round91/generate_tottori_iwai_uradome');
const { generateOitaYunohiraYufuPage } = require('./scripts/round91/generate_oita_yunohira_yufu');
const { generateKumamotoKikuchiValleyPage } = require('./scripts/round91/generate_kumamoto_kikuchi_valley');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 91: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round91_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateAomoriOwaniHirosakiPage(rawHotels.aomori_owani_hirosaki);
  generateMieSakakibaraAkamePage(rawHotels.mie_sakakibara_akame);
  generateTottoriIwaiUradomePage(rawHotels.tottori_iwai_uradome);
  generateOitaYunohiraYufuPage(rawHotels.oita_yunohira_yufu);
  generateKumamotoKikuchiValleyPage(rawHotels.kumamoto_kikuchi_valley);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-aomori-owani-hirosaki-onsen-moyashi-tsugarugyu-stay',
    'winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay',
    'winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay',
    'winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay',
    'winter-kumamoto-kikuchi-onsen-bihada-akagyu-pork-stay'
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
      slug: 'winter-aomori-owani-hirosaki-onsen-moyashi-tsugarugyu-stay',
      title: '冬限定「大鰐温泉もやし」と開湯800年の名湯・津軽あっぷる牛＆弘前城冬さくらライトアップを巡る名宿',
      desc: '11月中旬から12月、350年受け継がれる冬限定の奇跡「大鰐温泉もやし」と開湯800年の温まり湯、津軽あっぷる牛、弘前城の冬桜…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay',
      title: '枕草子三名泉「七栗の湯」の極上美肌ぬる湯・最高峰伊賀牛すき焼き＆初冬の赤目四十八滝を巡る名宿',
      desc: '11月から12月にかけて、清少納言絶賛のpH9.4超とろとろ美肌生源泉、31℃ぬる湯温冷交互浴、幻の最高峰伊賀牛と赤目渓谷竹あかり…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay',
      title: '11月解禁の本場鳥取松葉ガニと山陰最古1300年の名湯「湯かむり」・鳥取和牛＆世界ジオパーク浦富海岸を巡る名宿',
      desc: '11月6日解禁の獲れたて本場鳥取松葉ガニフルコース、奈良時代開湯の山陰最古湯かむり温泉、口どけ鳥取和牛オレイン55と浦富海岸…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay',
      title: '300個の赤提灯揺れる江戸石畳と名湯五大共同浴場・極上豊後牛＆冬の滋味合鴨鍋を味わう名宿',
      desc: '11月から12月、夕暮れに300個の赤提灯が灯る江戸石畳の坂道、鎌倉開湯の胃腸の名湯五大共同浴場、おおいた和牛と冬の合鴨鍋…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-kumamoto-kikuchi-onsen-bihada-akagyu-pork-stay',
      title: '日本の名湯百選「化粧の湯」の極上とろみ泉・初冬の菊池渓谷美＆熊本あか牛ステーキ＆名水ポークを堪能する名宿',
      desc: '11月から12月、pH9.0超の天然美容液のような極上とろみ源泉100%かけ流し、初冬の菊池渓谷清流美、熊本あか牛と名水ポーク…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-aomori-owani-hirosaki-onsen-moyashi-tsugarugyu-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 91 features or marker not found.');
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
  console.log('Round 91 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
