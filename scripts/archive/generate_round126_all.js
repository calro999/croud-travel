const fs = require('fs');
const path = require('path');

const { generateKagawaKotohiraPage } = require('./scripts/round126/generate_kagawa_kotohira.js');
const { generateWakayamaKushimotoPage } = require('./scripts/round126/generate_wakayama_kushimoto.js');
const { generateTokyoOkutamaPage } = require('./scripts/round126/generate_tokyo_okutama.js');
const { generateTottoriSakyuPage } = require('./scripts/round126/generate_tottori_sakyu.js');
const { generateHokkaidoKushiroPage } = require('./scripts/round126/generate_hokkaido_kushiro.js');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 126: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round126_raw_hotels.json'), 'utf8'));

  const generators = [
    { 
      fn: generateKagawaKotohiraPage, 
      data: rawHotels.kagawa_kotohira_konpira_zentsuji.hotels 
    },
    { 
      fn: generateWakayamaKushimotoPage, 
      data: rawHotels.wakayama_kushimoto_shionomisaki_hashiguiiwa.hotels 
    },
    { 
      fn: generateTokyoOkutamaPage, 
      data: rawHotels.tokyo_okutama_mitake_hikawa.hotels 
    },
    { 
      fn: generateTottoriSakyuPage, 
      data: rawHotels.tottori_sakyu_hakuto_matsubagani.hotels 
    },
    { 
      fn: generateHokkaidoKushiroPage, 
      data: rawHotels.hokkaido_kushiro_tancho_nusamaibashi.hotels 
    }
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
      slug: 'winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay',
      title: '琴平＆善通寺・丸亀！四国随一初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願・讃岐オリーブ牛＆こんぴら温泉名宿',
      desc: '一生に一度のこんぴら参り！御本宮785段石段と新春初詣、善通寺暗闇の戒壇めぐり。讃岐富士の冬パノラマ、小豆島オリーブ育ちの讃岐オリーブ牛＆熱々讃岐うどん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-wakayama-kushimoto-shionomisaki-sunrise-hashiguiiwa-kindai-maguro-stay',
      title: '串本＆本州最南端・潮岬！本州最南端「潮岬」冬の太平洋初日の出と朝焼け「橋杭岩」絶景・発祥の地「近大マグロ」会席＆串本温泉名宿',
      desc: '黒潮が洗う本州最南端！水平線から昇る元旦初日の出と国の天然記念物・橋杭岩の茜色朝焼け。世界初完全養殖の近大マグロ極上会席と湯冷めしない絶景串本温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokyo-okutama-mitake-shrine-hatsumode-hikawa-gorge-akikawagyu-stay',
      title: '奥多摩＆青梅・御岳山！天空の古社「武蔵御嶽神社」新春初詣と氷川渓谷の冬静寂・奥多摩わさび＆幻の極上「秋川牛」会席と清流名湯宿',
      desc: '都心から90分の深山幽谷！標高929m御岳山山頂のおいぬ様初詣、エメラルドに澄む氷川・鳩ノ巣渓谷の雪景色。都内唯一の希少黒毛和牛・秋川牛と清流美肌温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay',
      title: '鳥取砂丘＆鳥取市・白兎海岸！白銀に染まる「鳥取砂丘」雪景色と因幡の白兎「白兎神社」新春縁結び初詣・冬旬「鳥取松葉がに」＆鳥取温泉名宿',
      desc: '山陰の冬が魅せる奇跡！白銀の雪砂丘と風紋アート、日本最古の縁結び神話・白兎神社初詣。11月解禁の冬の王者・鳥取松葉がにフルコースと市街地に湧く天然鳥取温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay',
      title: '釧路＆鶴居・釧路湿原！雪原に舞う特別天然記念物「丹頂鶴」と世界三大夕日「幣舞橋」・元祖炭火炉端焼き＆冬の真だち・釧路天然温泉名宿',
      desc: '道東の白銀の詩情！雪原に舞うタンチョウの優美な求愛ダンス、太平洋に沈む幣舞橋の真紅の世界三大夕日。炭火香る元祖炉端焼き、冬限定の濃厚真だちと展望天然温泉…',
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
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
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
  console.log('Round 126 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
