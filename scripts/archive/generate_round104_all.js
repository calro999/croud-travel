const fs = require('fs');
const path = require('path');

const { generateTochigiNikkoToshoguPage } = require('./scripts/round104/generate_tochigi_nikko_toshogu');
const { generateChibaNaritasanSawaraPage } = require('./scripts/round104/generate_chiba_naritasan_sawara');
const { generateNaraHasederaOomiwaPage } = require('./scripts/round104/generate_nara_hasedera_oomiwa');
const { generateShimaneAdachiSaginoyuPage } = require('./scripts/round104/generate_shimane_adachi_saginoyu');
const { generateFukuokaDazaifuFutsukaichiPage } = require('./scripts/round104/generate_fukuoka_dazaifu_futsukaichi');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 104: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round104_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTochigiNikkoToshoguPage, data: rawHotels.tochigi_nikko_toshogu.hotels },
    { fn: generateChibaNaritasanSawaraPage, data: rawHotels.chiba_naritasan_sawara.hotels },
    { fn: generateNaraHasederaOomiwaPage, data: rawHotels.nara_hasedera_oomiwa.hotels },
    { fn: generateShimaneAdachiSaginoyuPage, data: rawHotels.shimane_adachi_saginoyu.hotels },
    { fn: generateFukuokaDazaifuFutsukaichiPage, data: rawHotels.fukuoka_dazaifu_futsukaichi.hotels }
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
      slug: 'winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay',
      title: '世界遺産・日光東照宮の静謐な冬参拝＆新春初詣と名物「日光湯波会席」・とちぎ和牛の名宿',
      desc: '11月から1月、白銀に映える国宝陽明門と静寂の杉並木古道。新春の東照宮・二荒山神社初詣、二重仕立てで肉厚ジューシーな名物「日光湯波」、とろける霜降り「とちぎ和牛」…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-chiba-naritasan-shinshoji-hatsumode-unagi-sawara-stay',
      title: '成田山新勝寺の新春初詣＆表参道名物うなぎと北総小江戸・佐原の重伝建風情を巡る名宿',
      desc: '300万人が集う日本屈指の新春初詣スポット成田山新勝寺。迫力の大本堂御護摩祈祷、表参道の老舗が焼く香ばしい江戸前うなぎ蒲焼、水郷佐原のこたつ舟と重伝建古民家…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay',
      title: '花の御寺・長谷寺の「冬牡丹（寒牡丹）」と日本最古の三輪山・大神神社初詣＆極上大和牛の名宿',
      desc: '藁囲いに守られ雪中に咲く可憐な冬牡丹と長谷寺399段の登廊。三輪山をご神体とする日本最古の神社「大神神社」と橿原神宮初詣、熱々三輪にゅうめんと大和牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shimane-adachi-museum-snow-garden-saginoyu-wagyu-stay',
      title: '米誌20年連続日本一・足立美術館「白銀の日本庭園」雪景色とさぎの湯温泉・極上しまね和牛＆松葉ガニの名宿',
      desc: '5万坪の枯山水庭園が一面の白銀に染まる冬の絶景。額縁越しに眺める生の山水画、白鷺伝説の美肌名湯「さぎの湯温泉」、冬の日本海が誇る本場松葉ガニと極上しまね和牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay',
      title: '学問の神様・太宰府天満宮の合格祈願＆新春200万人初詣と名物「梅ヶ枝餅」・万葉の古湯二日市温泉と博多和牛の名宿',
      desc: '受験合格祈願と200万人が訪れる新春初詣。話題の仮殿と早咲きの御神木「飛梅」、参道で頬張る出来立て熱々の梅ヶ枝餅、開湯1300年の万葉名湯「二日市温泉」と博多和牛…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 104 features or marker not found.');
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
  console.log('Round 104 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
