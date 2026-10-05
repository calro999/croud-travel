const fs = require('fs');
const path = require('path');

const { generateHyogoTanbaSasayamaPage } = require('./scripts/round105/generate_hyogo_tanba_sasayama');
const { generateIwateHiraizumiGeibikeiPage } = require('./scripts/round105/generate_iwate_hiraizumi_geibikei');
const { generateAichiNagoyaAtsutaPage } = require('./scripts/round105/generate_aichi_nagoya_atsuta');
const { generateShigaHieizanOgotoPage } = require('./scripts/round105/generate_shiga_hieizan_ogoto');
const { generateKyotoOharaSanzeninPage } = require('./scripts/round105/generate_kyoto_ohara_sanzenin');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 105: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round105_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateHyogoTanbaSasayamaPage, data: rawHotels.hyogo_tanba_sasayama.hotels },
    { fn: generateIwateHiraizumiGeibikeiPage, data: rawHotels.iwate_hiraizumi_geibikei.hotels },
    { fn: generateAichiNagoyaAtsutaPage, data: rawHotels.aichi_nagoya_atsuta.hotels },
    { fn: generateShigaHieizanOgotoPage, data: rawHotels.shiga_hieizan_ogoto.hotels },
    { fn: generateKyotoOharaSanzeninPage, data: rawHotels.kyoto_ohara_sanzenin.hotels }
  ];

  const slugs = [];

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  for (const g of generators) {
    const { slug, pageContent } = g.fn(g.data);
    slugs.push(slug);

    const outDir = path.join(__dirname, 'src', 'app', slug);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'page.tsx');
    fs.writeFileSync(outFile, pageContent, 'utf8');
    console.log(`- Generated: ${slug}/page.tsx (${pageContent.length} bytes)`);
  }

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
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
      slug: 'winter-hyogo-tanba-sasayama-botannabe-castle-stay',
      title: '冬本番！丹波篠山の本場「ぼたん鍋」発祥の味＆雪化粧の篠山城下町・丹波篠山牛の名宿',
      desc: '11月15日の猟解禁とともに旬を迎える天然猪の極上「ぼたん鍋」。白味噌出汁と山椒の香り、徳川家康天下普請の篠山城大書院雪景色、重伝建の河原町妻入商家群と古民家宿…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-iwate-hiraizumi-chusonji-geibikei-maesawagyu-stay',
      title: '世界遺産・平泉中尊寺金色堂の白銀月見坂＆日本百景・猊鼻渓「雪見こたつ舟」と極上前沢牛の名宿',
      desc: '老杉に白雪が積もる静寂の月見坂と黄金に輝く国宝中尊寺金色堂。水墨画の百尺断崖をこたつと熱々木流し鍋で巡る猊鼻渓雪見舟下り、日本一の栄誉に輝く極上前沢牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay',
      title: '三種の神器を祀る「熱田神宮」新春初詣＆名物「本場ひつまぶし」・極上名古屋コーチン鍋の名宿',
      desc: '草薙神剣を祀り200万人が集う東海の総鎮守・熱田神宮の新春初詣。熱田発祥のカリッと香ばしい本場ひつまぶし、冬の寒さに染み渡る濃厚な名古屋コーチン鍋と天空夜景ホテル…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay',
      title: '世界遺産・比叡山延暦寺の静謐な冬参拝＆根本中堂「不滅の法灯」と琵琶湖一望おごと温泉・極上近江牛名宿',
      desc: '日本仏教の母山・比叡山の白銀雪景色と1200年燃え続ける不滅の法灯。日本一長い坂本ケーブル、最澄開湯1200年のおごと温泉美肌露天風呂、日本三大和牛・極上近江牛会席…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-ohara-sanzenin-snow-hosenin-misonabe-stay',
      title: '静寂の洛北・大原三千院の白銀雪景色と宝泉院「額縁庭園」冬参拝＆名物「地鶏味噌鍋」・大原温泉の名宿',
      desc: 'しんしんと雪が降る三千院有清園と愛らしいわらべ地蔵。宝泉院の柱を額縁に見立てた山水画のような雪景色とお抹茶、100年伝統味噌で煮込む京地鶏味噌鍋と大原温泉美肌湯…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-hyogo-tanba-sasayama-botannabe-castle-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 105 features or marker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const existingLocs = new Set([...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
  let addedSitemapCount = 0;

  for (const slug of slugs) {
    const loc = `https://croud-travel.pages.dev/${slug}/`;
    if (!existingLocs.has(loc)) {
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-10-03</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
      sitemapContent = sitemapContent.replace('</urlset>', entry + '</urlset>');
      existingLocs.add(loc);
      addedSitemapCount++;
    }
  }

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
  console.log('Round 105 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
