const fs = require('fs');
const path = require('path');

const { generateIbarakiFukurodaIcePage } = require('./scripts/round101/generate_ibaraki_fukuroda_ice');
const { generateKanagawaMiuraMisakiPage } = require('./scripts/round101/generate_kanagawa_miura_misaki');
const { generateChibaKamogawaKominatoPage } = require('./scripts/round101/generate_chiba_kamogawa_kominato');
const { generateHokkaidoShikotsukoHyotoPage } = require('./scripts/round101/generate_hokkaido_shikotsuko_hyoto');
const { generateOkinawaIshigakiKabilabayPage } = require('./scripts/round101/generate_okinawa_ishigaki_kabilabay');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 101: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round101_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateIbarakiFukurodaIcePage, data: rawHotels.ibaraki_fukuroda_ice.hotels },
    { fn: generateKanagawaMiuraMisakiPage, data: rawHotels.kanagawa_miura_misaki.hotels },
    { fn: generateChibaKamogawaKominatoPage, data: rawHotels.chiba_kamogawa_kominato.hotels },
    { fn: generateHokkaidoShikotsukoHyotoPage, data: rawHotels.hokkaido_shikotsuko_hyoto.hotels },
    { fn: generateOkinawaIshigakiKabilabayPage, data: rawHotels.okinawa_ishigaki_kabilabay.hotels }
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
      slug: 'winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay',
      title: '日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛の冬名宿',
      desc: '11月から1月、巨大な岩壁が白銀の氷壁へと変貌する袋田の滝「氷瀑」。夜間ライトアップ「大子来人」、とろとろ美肌の奥久慈温泉、弾力と旨味溢れる奥久慈軍鶏鍋…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay',
      title: '冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚の三浦名宿',
      desc: '11月から1月、相模湾越しに純白の富士山が鮮やかに望める三浦半島。城ヶ島公園一面に甘い香りが広がる水仙まつり、冬に脂が乗る天然三崎まぐろ、三浦大根…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-chiba-kamogawa-seaworld-kominato-kinmedai-stay',
      title: '冬の鴨川シーワールドシャチパフォーマンスと小湊鯛の浦温泉・外房寒金目鯛煮付け＆房総伊勢海老の絶景名宿',
      desc: '11月から1月、黒潮がもたらす温暖な外房鴨川。澄み切った青空に舞う大迫力のシャチ、神秘の鯛の浦遊覧、一本釣り外房寒金目鯛の濃厚姿煮と活伊勢海老…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay',
      title: '千歳支笏湖ブルーの冬絶景・支笏湖氷濤まつりと美肌の湯・冬の名物ヒメマス料理＆白老牛のレイクサイド名宿',
      desc: '11月から1月、透明度日本一の不凍湖が魅せるコバルトブルー「支笏湖ブルー」。巨大な氷の宮殿「氷濤まつり」、足元湧出の秘湯丸駒温泉、名物チップ料理と白老牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay',
      title: '冬の石垣島・星空保護区の南十字星と川平湾エメラルドブルー・極上石垣牛焼肉＆旬の冬アーサの南国リゾート名宿',
      desc: '11月から1月、平均気温20度の快適避寒リゾート。日本初の星空保護区で観測する冬の南十字星、川平湾のエメラルドブルー、極上石垣牛炭火焼肉と旬の新海苔冬アーサ…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 101 features or marker not found.');
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
  console.log('Round 101 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
