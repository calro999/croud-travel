const fs = require('fs');
const path = require('path');

const { generateMiyagiKesennumaMinamisanrikuPage } = require('./scripts/round103/generate_miyagi_kesennuma_minamisanriku');
const { generateNagasakiCityInasayamaPage } = require('./scripts/round103/generate_nagasaki_city_inasayama');
const { generateNaganoTogakushiZenkojiPage } = require('./scripts/round103/generate_nagano_togakushi_zenkoji');
const { generateFukushimaAizuOuchijukuPage } = require('./scripts/round103/generate_fukushima_aizu_ouchijuku');
const { generateWakayamaKoyasanShukuboPage } = require('./scripts/round103/generate_wakayama_koyasan_shukubo');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 103: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round103_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateMiyagiKesennumaMinamisanrikuPage, data: rawHotels.miyagi_kesennuma_minamisanriku.hotels },
    { fn: generateNagasakiCityInasayamaPage, data: rawHotels.nagasaki_city_inasayama.hotels },
    { fn: generateNaganoTogakushiZenkojiPage, data: rawHotels.nagano_togakushi_zenkoji.hotels },
    { fn: generateFukushimaAizuOuchijukuPage, data: rawHotels.fukushima_aizu_ouchijuku.hotels },
    { fn: generateWakayamaKoyasanShukuboPage, data: rawHotels.wakayama_koyasan_shukubo.hotels }
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
      slug: 'winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay',
      title: '冬の三陸の至宝・極上戻りメカジキ「冬木廻」＆南三陸キラキラいくら丼と気仙沼深層天然温泉の名宿',
      desc: '11月から1月、脂乗り最高潮の気仙沼冬メカジキ「冬木廻」と南三陸キラキラいくら丼。フカヒレ姿煮、唐桑半島の荒波絶景、身体の芯まで温まる深層天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagasaki-city-inasayama-nightview-glover-champon-stay',
      title: '世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理の名宿',
      desc: '冬の大気澄み渡る長崎。稲佐山からの立体的なパノラマ夜景、グラバー園のイルミネーション、新地中華街の濃厚ちゃんぽん・角煮まん、お諏訪さんの初詣…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagano-togakushi-zenkoji-hatsumode-snow-soba-beef-stay',
      title: '白銀の戸隠神社・奥社杉並木と冬の戸隠新そば＆国宝善光寺「お朝事」初詣・信州牛すき焼きの名宿',
      desc: '樹齢400年杉並木の白銀古道と秋収穫の戸隠手打ち新そば。国宝善光寺冬のお朝事参拝とお数珠頂戴、新春初詣、善光寺門前宿坊の精進料理と極上信州牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay',
      title: '白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺しの名宿',
      desc: '一面の銀世界に包まれる江戸の宿場町・大内宿と箸代わりにネギで食べる名物そば。茅葺きの湯野上温泉駅、芦ノ牧温泉の棚田状渓谷雪見露天、極上会津馬刺し…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay',
      title: '世界遺産・高野山の白銀「壇上伽藍＆奥之院」雪景色と宿坊阿字観体験＆冬の滋味精進料理・新春初詣の名宿',
      desc: '標高800mの白銀の聖地。根本大塔の雪景色、奥之院杉巨木の静寂参道、暖房完備の由緒ある宿坊での阿字観瞑想・朝の勤行、手練り生胡麻豆腐と伝統精進料理…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-miyagi-kesennuma-minamisanriku-mekajiki-ikuradon-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 103 features or marker not found.');
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
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-10-02</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
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
  console.log('Round 103 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
