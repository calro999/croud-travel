const fs = require('fs');
const path = require('path');

const { generateAomoriHachinoheKabushimaPage } = require('./scripts/round99/generate_aomori_hachinohe_kabushima');
const { generateTochigiAshikagaFlowerparkPage } = require('./scripts/round99/generate_tochigi_ashikaga_flowerpark');
const { generateShizuokaSumatakyoOnsenPage } = require('./scripts/round99/generate_shizuoka_sumatakyo_onsen');
const { generateKochiMurotoDarumaPage } = require('./scripts/round99/generate_kochi_muroto_daruma');
const { generateYamanashiKiyosatoYatsugatakePage } = require('./scripts/round99/generate_yamanashi_kiyosato_yatsugatake');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 99: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round99_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateAomoriHachinoheKabushimaPage, data: rawHotels.aomori_hachinohe_kabushima.hotels },
    { fn: generateTochigiAshikagaFlowerparkPage, data: rawHotels.tochigi_ashikaga_flowerpark.hotels },
    { fn: generateShizuokaSumatakyoOnsenPage, data: rawHotels.shizuoka_sumatakyo_onsen.hotels },
    { fn: generateKochiMurotoDarumaPage, data: rawHotels.kochi_muroto_daruma.hotels },
    { fn: generateYamanashiKiyosatoYatsugatakePage, data: rawHotels.yamanashi_kiyosato_yatsugatake.hotels }
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
      slug: 'winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay',
      title: '八戸前沖銀鯖と本場せんべい汁・八食センター七輪村買い出し＆蕪島神社初詣・太平洋一望の八戸名宿',
      desc: '11月から1月、日本一脂が乗る八戸前沖銀鯖、南部地鶏出汁の熱々せんべい汁、八食センターの年末年始買い出しと七輪村炭火焼き、金運上昇を願う蕪島神社初詣…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay',
      title: '日本一の光の祭典「あしかがフラワーパーク光の花の庭」・佐野厄除け大師初詣＆手打ち佐野ラーメン・とちおとめ苺ステイ宿',
      desc: '11月から1月、日本三大イルミネーション第1位の500万球奇蹟の大藤、関東三大師・佐野厄除け大師の新春初詣、青竹手打ち佐野ラーメンと旬のとちあいか苺狩り…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay',
      title: '南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿',
      desc: '11月から1月、湖水が最も冴え渡るミルキーブルーの夢の吊橋、美容液のような単純硫黄泉「美女づくりの湯」、天然猪肉の熱々味噌鍋、奥大井湖上駅の冬景色…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay',
      title: '太平洋の奇跡「だるま朝日・だるま夕日」と冬の極上「室戸キンメダイ」・御厨人窟初日の出＆海洋深層水リゾート宿',
      desc: '11月中旬から1月中旬、黒潮と冷気が織りなす幸運のだるま太陽、空海開眼の聖地・御厨人窟初日の出、深海一本釣りの極上室戸キンメダイ煮付け＆キンメ丼…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamanashi-kiyosato-yatsugatake-starry-sky-winebeef-stay',
      title: '冬の八ヶ岳ブルーと満天の星空観賞・萌木の村冬景色＆極上「甲州ワインビーフ」・八ヶ岳南麓の高原温泉リゾート宿',
      desc: '11月から1月、晴天率80%超の八ヶ岳ブルー、満天の冬星空観察、雪化粧の萌木の村と薪ストーブの温もり、極上甲州ワインビーフと富士見露天風呂…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 99 features or marker not found.');
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
  console.log('Round 99 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
