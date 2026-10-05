const fs = require('fs');
const path = require('path');

const { generateMieIseJinguPage } = require('./scripts/round100/generate_mie_ise_jingu');
const { generateNaganoKaruizawaHoshinoPage } = require('./scripts/round100/generate_nagano_karuizawa_hoshino');
const { generateKanagawaKamakuraEnoshimaPage } = require('./scripts/round100/generate_kanagawa_kamakura_enoshima');
const { generateSaitamaKawagoeKoedoPage } = require('./scripts/round100/generate_saitama_kawagoe_koedo');
const { generateOkayamaKurashikiBikanPage } = require('./scripts/round100/generate_okayama_kurashiki_bikan');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 100: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round100_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateMieIseJinguPage, data: rawHotels.mie_ise_jingu_hatsumode.hotels },
    { fn: generateNaganoKaruizawaHoshinoPage, data: rawHotels.nagano_karuizawa_hoshino.hotels },
    { fn: generateKanagawaKamakuraEnoshimaPage, data: rawHotels.kanagawa_kamakura_enoshima.hotels },
    { fn: generateSaitamaKawagoeKoedoPage, data: rawHotels.saitama_kawagoe_koedo.hotels },
    { fn: generateOkayamaKurashikiBikanPage, data: rawHotels.okayama_kurashiki_bikan.hotels }
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
      slug: 'winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay',
      title: '伊勢神宮新春初詣とおかげ横丁・五十鈴川の朝霧と神域参拝・冬の極上伊勢海老＆松阪牛会席の伊勢名宿',
      desc: '11月から1月、凛とした静寂に包まれる伊勢神宮。五十鈴川の幻想的な朝霧、冬至の鳥居から昇る朝日、赤福ぜんざい・伊勢うどんの食べ歩き、極上の伊勢海老と松阪牛会席…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay',
      title: '冬の軽井沢高原リゾート・星野エリアもみの木イルミネーション＆星野温泉トンボの湯雪見風呂・信州プレミアム牛薪火ディナー名宿',
      desc: '11月から1月、澄み渡る浅間ブルーの青空と白銀の森。星野エリアの巨大天然もみの木イルミ、軽井沢高原教会キャンドルナイト、トンボの湯雪見露天風呂、薪火グリル…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay',
      title: '冬の湘南・江の島シーキャンドル「湘南の宝石」イルミネーション＆鶴岡八幡宮新春初詣・富士山夕景と相模湾冬魚名宿',
      desc: '11月から1月、相模湾越しに純白の富士山が鮮やかに浮かび上がる湘南。関東三大イルミ「湘南の宝石」、鶴岡八幡宮初詣、江ノ電沿線散策、冬に脂が乗る寒平目・葉山牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-saitama-kawagoe-koedo-kitain-daruma-unagi-stay',
      title: '小江戸川越・冬の蔵造りの町並みと時の鐘・喜多院初大師だるま市新春初詣＆名物うなぎ重・小江戸黒豚の川越名宿',
      desc: '11月から1月、黒漆喰の町並みに響く時の鐘。喜多院の1月3日初大師だるま市と新春初詣、菓子屋横丁のあったか芋菓子、天保創業の老舗炭火焼きうな重と小江戸黒豚…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay',
      title: '冬の倉敷美観地区・白壁土蔵の夜間景観照明＆国宝吉備津神社新春初詣・名物下津井真蛸と幻の千屋牛を堪能する名宿',
      desc: '11月から1月、川面に映える白壁土蔵と夜間景観照明の幽玄美。国宝吉備津神社の大回廊初詣、潮流で引き締まる冬の下津井真蛸、最古の蔓牛血統を誇る幻の千屋牛会席…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 100 features or marker not found.');
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
  console.log('Round 100 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
