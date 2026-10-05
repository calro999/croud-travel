const fs = require('fs');
const path = require('path');

const { generateOsakaUsjBayareaPage } = require('./scripts/round114/generate_osaka_usj_bayarea');
const { generateTokyoRoppongiAzabudaiPage } = require('./scripts/round114/generate_tokyo_roppongi_azabudai');
const { generateChibaMaihamaDisneyPage } = require('./scripts/round114/generate_chiba_maihama_disney');
const { generateKyotoKibuneKuramaPage } = require('./scripts/round114/generate_kyoto_kibune_kurama');
const { generateOkinawaMiyakojimaPage } = require('./scripts/round114/generate_okinawa_miyakojima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 114: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round114_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateOsakaUsjBayareaPage, data: rawHotels.osaka_usj_bayarea.hotels },
    { fn: generateTokyoRoppongiAzabudaiPage, data: rawHotels.tokyo_roppongi_azabudai.hotels },
    { fn: generateChibaMaihamaDisneyPage, data: rawHotels.chiba_maihama_disney.hotels },
    { fn: generateKyotoKibuneKuramaPage, data: rawHotels.kyoto_kibune_kurama.hotels },
    { fn: generateOkinawaMiyakojimaPage, data: rawHotels.okinawa_miyakojima.hotels }
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
      slug: 'winter-osaka-usj-bayarea-christmas-countdown-official-stay',
      title: 'USJ冬のクリスマス＆ベイエリア夜景！天然温泉スパと絶景オフィシャルホテル名宿',
      desc: 'NO LIMIT! クリスマスやホグワーツ雪景色、海遊館イルミ。オフィシャルホテルのパークビューと天然温泉スパ、熱々の大阪グルメ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay',
      title: '六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食のラグジュアリーホテル',
      desc: '80万球のSNOW & BLUE並木道と東京タワー、麻布台ヒルズのクリスマスマーケット。天空ラウンジから夜景を見下ろす極上ステイ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-chiba-tokyo-disney-resort-maihama-christmas-hotel-stay',
      title: '東京ディズニーリゾート冬のクリスマス＆年末年始！直営・オフィシャルホテルで叶える夢の冬旅名宿',
      desc: '巨大ツリーと花火スターブライト・クリスマス、新春お正月プログラム。ベイサイド至近オフィシャル宿、温水スパや伝統フレンチトースト…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay',
      title: '雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！名物ぼたん鍋と名湯京懐石の隠れ家名宿',
      desc: '積雪日限定の貴船神社灯籠ライトアップ、三千院の雪庭。囲炉裏端の元祖天然ぼたん鍋と大原温泉雪見露天風呂に癒やされる京都奥座敷…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okinawa-miyakojima-shigira-resort-sunrisepoint-miyakogyu-stay',
      title: '冬の避寒リゾート＆宮古ブルー！シギラリゾートの南国極上ステイと宮古牛・東平安名崎初日の出名宿',
      desc: '平均20度の温暖な南国避寒バカンス。冬に透明度が極まる宮古ブルー、東平安名崎初日の出、シギラ黄金温泉や極上宮古牛鉄板焼き…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const searchPattern = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';
  const insertionPoint = featuresContent.indexOf(searchPattern);
  if (insertionPoint !== -1) {
    const afterBracket = insertionPoint + searchPattern.length;
    const itemsCode = newFeatures.map(f => `
            {
              slug: '${f.slug}',
              title: "${f.title}",
              desc: "${f.desc}",
              badge: '${f.badge}'
            },`).join('');
    featuresContent = featuresContent.slice(0, afterBracket) + itemsCode + featuresContent.slice(afterBracket);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('- Updated: src/app/features/page.tsx with 5 new features');
  } else {
    console.warn('Could not find insertion point in src/app/features/page.tsx');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const today = '2026-10-04';
  const newSitemapEntries = slugs.map(slug => `  <url>
    <loc>https://croud-travel.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  if (sitemapContent.includes('</urlset>')) {
    sitemapContent = sitemapContent.replace('</urlset>', `${newSitemapEntries}\n</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('- Updated: public/sitemap-features.xml with 10 new URLs (both domains)');
  }

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  const newLlmsEntries = [
    `- https://croud-travel.com/winter-osaka-usj-bayarea-christmas-countdown-official-stay/: USJ冬のクリスマス＆ベイエリア夜景！天然温泉スパと絶景オフィシャルホテル名宿5選`,
    `- https://croud-travel.com/winter-tokyo-roppongi-hills-azabudai-keyakizaka-illumination-stay/: 六本木けやき坂イルミネーション＆麻布台ヒルズ！東京タワー冬夜景と美食のラグジュアリーホテル5選`,
    `- https://croud-travel.com/winter-chiba-tokyo-disney-resort-maihama-christmas-hotel-stay/: 東京ディズニーリゾート冬のクリスマス＆年末年始！直営・オフィシャルホテルで叶える夢の冬旅名宿5選`,
    `- https://croud-travel.com/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay/: 雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！名物ぼたん鍋と名湯京懐石の隠れ家名宿5選`,
    `- https://croud-travel.com/winter-okinawa-miyakojima-shigira-resort-sunrisepoint-miyakogyu-stay/: 冬の避寒リゾート＆宮古ブルー！シギラリゾートの南国極上ステイと宮古牛・東平安名崎初日の出名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 114 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
