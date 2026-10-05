const fs = require('fs');
const path = require('path');

const { generateTottoriSakaiminatoKaikePage } = require('./scripts/round102/generate_tottori_sakaiminato_kaike');
const { generateShizuokaShimodaTsumekizakiPage } = require('./scripts/round102/generate_shizuoka_shimoda_tsumekizaki');
const { generateSagaTaraTakezakiPage } = require('./scripts/round102/generate_saga_tara_takezaki');
const { generateTokushimaIyaValleyPage } = require('./scripts/round102/generate_tokushima_iya_valley');
const { generateMiyazakiTakachihoNightKaguraPage } = require('./scripts/round102/generate_miyazaki_takachiho_night_kagura');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 102: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round102_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTottoriSakaiminatoKaikePage, data: rawHotels.tottori_sakaiminato_kaike.hotels },
    { fn: generateShizuokaShimodaTsumekizakiPage, data: rawHotels.shizuoka_shimoda_tsumekizaki.hotels },
    { fn: generateSagaTaraTakezakiPage, data: rawHotels.saga_tara_takezaki.hotels },
    { fn: generateTokushimaIyaValleyPage, data: rawHotels.tokushima_iya_valley.hotels },
    { fn: generateMiyazakiTakachihoNightKaguraPage, data: rawHotels.miyazaki_takachiho_night_kagura.hotels }
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
      slug: 'winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay',
      title: '山陰松葉ガニ解禁！境港水産物直売センター＆水木しげるロードと皆生温泉「塩の湯」・大山冬景色名宿',
      desc: '11月6日解禁、冬の味覚の王様・本松葉ガニ。活気あふれる境港の市場と水木しげるロード、日本海と白銀の大山を望む皆生温泉の保温美肌「塩の湯」…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay',
      title: '冬の南伊豆下田・300万本の爪木崎水仙まつりと富士山絶景・一本釣り極上「地金目鯛」姿煮の名宿',
      desc: '12月から1月、須崎半島爪木崎に咲き誇る300万本の野水仙と赤いアロエの花。真冬に脂が乗る下田港直送の一本釣り地金目鯛、ペリーロードと海洋美肌温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay',
      title: '冬の有明海名物「内子たっぷり竹崎カニ」と日本三大稲荷・祐徳稲荷神社初詣・日本三大美肌湯「嬉野温泉」名宿',
      desc: '11月から1月、朱色の内子と濃厚カニ味噌を抱く旬のメス竹崎カニ。日本三大稲荷・祐徳稲荷神社の初詣、日本三大美肌の湯嬉野温泉のとろとろ温泉湯豆腐…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay',
      title: '日本三大秘境・冬の祖谷渓谷「祖谷のかずら橋」雪景色と大歩危峡・ケーブルカーで行く谷底秘湯露天風呂名宿',
      desc: '11月から1月、粉雪をまとった国重文「祖谷のかずら橋」とエメラルド碧流。傾斜42度ケーブルカーで下る谷底自噴露天風呂、大歩危こたつ舟、阿波尾鶏囲炉裏料理…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-miyazaki-takachiho-night-kagura-beef-onsen-stay',
      title: '国の重要無形民俗文化財・高千穂の「夜神楽」と神秘の高千穂峡・最高峰「高千穂牛」＆天岩戸神社初詣の名宿',
      desc: '11月から2月、冬の夜に奉納される国の重要無形文化財「高千穂の夜神楽」。水澄み渡る真名井の滝、天岩戸神社・天安河原の冬初詣、内閣総理大臣賞高千穂牛…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 102 features or marker not found.');
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
  console.log('Round 102 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
