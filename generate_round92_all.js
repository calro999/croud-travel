const fs = require('fs');
const path = require('path');

const { generateAichiIragoOnsenPage } = require('./scripts/round92/generate_aichi_irago_onsen');
const { generateTochigiNasuItamuroPage } = require('./scripts/round92/generate_tochigi_nasu_itamuro');
const { generateShimaneTsuwanoOnsenPage } = require('./scripts/round92/generate_shimane_tsuwano_onsen');
const { generateAomoriAjigasawaFukauraPage } = require('./scripts/round92/generate_aomori_ajigasawa_fukaura');
const { generateNaganoObuseShibuPage } = require('./scripts/round92/generate_nagano_obuse_shibu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 92: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round92_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateAichiIragoOnsenPage(rawHotels.aichi_irago_onsen);
  generateTochigiNasuItamuroPage(rawHotels.tochigi_nasu_itamuro);
  generateShimaneTsuwanoOnsenPage(rawHotels.shimane_tsuwano_onsen);
  generateAomoriAjigasawaFukauraPage(rawHotels.aomori_ajigasawa_fukaura);
  generateNaganoObuseShibuPage(rawHotels.nagano_obuse_shibu);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-aichi-irago-onsen-torafugu-atsumigyu-stay',
    'winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay',
    'winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay',
    'winter-aomori-ajigasawa-fukaura-onsen-hirame-maguro-stay',
    'winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay'
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
      slug: 'winter-aichi-irago-onsen-torafugu-atsumigyu-stay',
      title: '伊良湖天然とらふぐと新源泉「伊良湖温泉」美肌の湯・極上渥美牛＆伊良湖岬の夕日パノラマを巡る名宿',
      desc: '11月から12月、遠州灘の荒波が育む伊良湖天然とらふぐの引き締まった旨味と新源泉・伊良湖温泉の温まり美肌湯、渥美牛と岬の冬夕日…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay',
      title: '開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛＆初雪の那須連山を望む隠れ宿',
      desc: '11月中旬から12月、平安開湯の優しい38〜40℃ぬる湯と名物綱の湯立ち湯、最高級那須黒毛和牛と茶臼岳の初雪に包まれる現代湯治…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay',
      title: '山陰の小京都・津和野の冬情緒と冬の新酒蔵開き・幻の石見牛＆津和野温泉の静謐な湯浴みを堪能する名宿',
      desc: '11月から12月、白壁土塀の殿町通りに揺れる錦鯉と津和野城跡の朝霧雲海、冬の新酒蔵開きと幻の石見牛、美肌の天然温泉に浸る小京都旅…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-aomori-ajigasawa-fukaura-onsen-hirame-maguro-stay',
      title: '冬旬「鰺ヶ沢ヒラメ」＆深浦マグロ・太古の化石海水温まり湯と黄金崎不老ふ死温泉を巡る名宿',
      desc: '11月から12月、白神山地の清流が育む鰺ヶ沢ヒラメのヅケ丼と深浦マグロ、太古の化石海水が湧く温まり湯と海辺の不老ふ死温泉…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay',
      title: '小布施の冬栗おこわ＆完熟サンふじ・石畳の渋温泉「九湯めぐり」と信州プレミアム牛を味わう名宿',
      desc: '11月中旬から12月、北斎ゆかりの小布施で味わう出来立て栗おこわと蜜入りサンふじ、開湯1300年渋温泉の石畳九湯めぐりと信州牛…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-aichi-irago-onsen-torafugu-atsumigyu-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 92 features or marker not found.');
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
  console.log('Round 92 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
