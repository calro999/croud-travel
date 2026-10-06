const fs = require('fs');
const path = require('path');

const { generateYamanashiMinobusanPage } = require('./generate_yamanashi_minobusan.js');
const { generateMieIgaPage } = require('./generate_mie_iga.js');
const { generateHyogoAkashiPage } = require('./generate_hyogo_akashi.js');
const { generateChibaMinamibosoPage } = require('./generate_chiba_minamiboso.js');
const { generateShimaneTsuwanoPage } = require('./generate_shimane_tsuwano.js');

async function main() {
  console.log('================================================================');
  console.log('Generating Round 129 Feature Pages with Verified Live Rakuten API');
  console.log('================================================================');

  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round129_raw_hotels.json'), 'utf8'));

  const generators = [
    { 
      slug: 'winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay',
      fn: generateYamanashiMinobusanPage, 
      data: rawHotels.minobusan_kuonji_shimobe.hotels 
    },
    { 
      slug: 'winter-mie-iga-ueno-castle-akame-48waterfalls-hyobaku-igagyu-stay',
      fn: generateMieIgaPage, 
      data: rawHotels.iga_ueno_akame.hotels 
    },
    { 
      slug: 'winter-hyogo-akashi-uonotana-kakimoto-shrine-hatsumode-akashiyaki-stay',
      fn: generateHyogoAkashiPage, 
      data: rawHotels.akashi_uonotana.hotels 
    },
    { 
      slug: 'winter-chiba-minamiboso-kyonan-suisen-road-awa-shrine-hatsumode-iseebi-stay',
      fn: generateChibaMinamibosoPage, 
      data: rawHotels.chiba_minamiboso_kyonan.hotels 
    },
    { 
      slug: 'winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay',
      fn: generateShimaneTsuwanoPage, 
      data: rawHotels.shimane_tsuwano.hotels 
    }
  ];

  const slugs = generators.map(g => g.slug);

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  for (const g of generators) {
    g.fn(g.data);
    const outFile = path.join(__dirname, '../../src/app', g.slug, 'page.tsx');
    const stat = fs.statSync(outFile);
    console.log(`- Generated: ${g.slug}/page.tsx (${stat.size} bytes)`);
  }

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  let allPassed = true;
  for (const slug of slugs) {
    const filePath = path.join(__dirname, '../../src/app', slug, 'page.tsx');
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
  const featuresPagePath = path.join(__dirname, '../../src/app', 'features', 'page.tsx');
  let featuresContent = fs.readFileSync(featuresPagePath, 'utf8');

  const newFeatures = [
    {
      slug: 'winter-yamanashi-minobusan-kuonji-hatsumode-shimobe-onsen-yuba-stay',
      title: '身延山久遠寺＆下部温泉！日蓮宗総本山「身延山久遠寺」白銀の奥之院思親閣新春初詣と三門・千本杉・名物身延湯葉会席＆信玄隠し湯「下部温泉」ぬる湯治名宿',
      desc: '標高1153mの山頂から仰ぐ雪化粧の富士山と駿河湾大パノラマ！750年の歴史息づく日蓮宗総本山で迎える厳かな新春初詣。滋味豊かな身延山ゆば会席と、信玄公の隠し湯「下部温泉」で楽しむ温冷交互浴…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-mie-iga-ueno-castle-akame-48waterfalls-hyobaku-igagyu-stay',
      title: '伊賀上野＆赤目四十八滝！忍者の里「伊賀上野城」白銀の高石垣と上野天神宮新春初詣・冬限定「赤目四十八滝」氷瀑トレッキング＆幻の極上伊賀牛すき焼き名宿',
      desc: '藤堂高虎公が築いた日本有数の高石垣（約30m）の雪景色！学問の神・菅原道真公を祀る上野天神宮の新春初詣。凍結した神秘の赤目氷瀑トレッキングと、とろける霜降り極まる幻の伊賀牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hyogo-akashi-uonotana-kakimoto-shrine-hatsumode-akashiyaki-stay',
      title: '明石＆加古川！明石海峡大橋を望む人麿山「柿本神社」新春初詣と歳末・新春活気溢れる「魚の棚商店街」・熱々の本場「明石焼き」＆加古川かつめし名宿',
      desc: '歌聖・柿本人麻呂公を祀る古社で迎える海峡一望の新春初詣！約400年の歴史を持つ魚の棚商店街の熱気と激流が育む明石だこ。黄金出汁に浸して味わう熱々の明石焼き（玉子焼）と加古川名物かつめし…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-chiba-minamiboso-kyonan-suisen-road-awa-shrine-hatsumode-iseebi-stay',
      title: '南房総＆鋸南・館山！1000万本の水仙香る「江月水仙ロード」と安房神社新春初詣・野島埼灯台の初日の出＆房総伊勢海老・金目鯛姿煮名宿',
      desc: '黒潮の恵みによる常春の里！山肌を白く染める江月水仙ロードの日本水仙と早咲きの菜の花。日本三大金運神社「安房神社」の新春初詣と野島埼灯台の太平洋日の出、甘み弾ける房総伊勢海老＆金目鯛姿煮…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay',
      title: '津和野＆太皷谷稲成神社！山陰の小京都「津和野」雪化粧の殿町通りとなまこ壁・日本五大稲荷「太皷谷稲成神社」千本鳥居新春初詣＆熱々うずめ飯名宿',
      desc: '白壁となまこ壁に舞う粉雪と清らかな掘割を泳ぐ錦鯉！約1000本の朱塗り千本鳥居トンネルを登る太皷谷稲成神社の願望成就初詣。江戸の知恵が息づく熱々の名物うずめ飯と幻の極上石見和牛陶板焼き…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
  const missingFeatures = newFeatures.filter(item => !featuresContent.includes(item.slug));
  if (missingFeatures.length > 0 && featuresContent.includes(gridMarker)) {
    const formattedItems = missingFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log(`Successfully updated src/app/features/page.tsx with ${missingFeatures.length} new features!`);
  } else {
    console.log('src/app/features/page.tsx already has all features or gridMarker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, '../../public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-06</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, '../../public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  for (const item of newFeatures) {
    const entry = `- https://croud-travel.com/${item.slug}: ${item.title}。${item.desc}\n`;
    if (!llmsContent.includes(item.slug)) {
      llmsContent = llmsContent.trimEnd() + '\n' + entry;
      console.log(`- Added ${item.slug} to llms-full.txt`);
    }
  }
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');

  console.log('\n================================================================');
  console.log('Round 129 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
