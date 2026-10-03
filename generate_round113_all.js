const fs = require('fs');
const path = require('path');

const { generateSapporoJozankeiPage } = require('./scripts/round113/generate_sapporo_jozankei');
const { generateYokohamaMinatomiraiPage } = require('./scripts/round113/generate_yokohama_minatomirai');
const { generateShirakawagoHidaTakayamaPage } = require('./scripts/round113/generate_shirakawago_hidatakayama');
const { generateMarunouchiTokyoPage } = require('./scripts/round113/generate_marunouchi_tokyo');
const { generateKyotoGionHigashiyamaPage } = require('./scripts/round113/generate_kyoto_gion_higashiyama');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 113: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round113_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateSapporoJozankeiPage, data: rawHotels.sapporo_jozankei.hotels },
    { fn: generateYokohamaMinatomiraiPage, data: rawHotels.yokohama_minatomirai.hotels },
    { fn: generateShirakawagoHidaTakayamaPage, data: rawHotels.shirakawago_hidatakayama.hotels },
    { fn: generateMarunouchiTokyoPage, data: rawHotels.marunouchi_tokyo.hotels },
    { fn: generateKyotoGionHigashiyamaPage, data: rawHotels.kyoto_gion_higashiyama.hotels }
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
      slug: 'winter-hokkaido-sapporo-odori-illumination-jozankei-stay',
      title: 'さっぽろホワイトイルミネーション＆定山渓雪見露天！札幌味噌ラーメンと北の味覚名宿',
      desc: '初雪から白銀ピークの11〜1月。大通公園70万球のホワイトイルミ＆ミュンヘン・クリスマス市、すすきの夜景、熱々濃厚味噌ラーメン、定山渓温泉の雪見露天…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay',
      title: '赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿',
      desc: '冬の澄み渡る横浜港に輝く大観覧車。本場ドイツ仕込みの赤レンガ倉庫クリスマスマーケット、光アート「ヨルノヨ」、中華街の冬点心・春節ランタンと絶景バルコニー…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay',
      title: '世界遺産白川郷雪景色＆飛騨高山古い町並み！奥飛騨雪見露天と極上飛騨牛会席の名宿',
      desc: '白銀の茅葺き屋根が並ぶ世界遺産・白川郷合掌集落。新酒の杉玉が掲げられる高山古い町並み、奥飛騨温泉郷の原生林雪見露天風呂、A5飛騨牛炭火焼きと朴葉味噌…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokyo-marunouchi-illumination-tokyo-station-hatsumode-stay',
      title: '丸の内イルミネーション＆東京駅丸の内駅舎夜景！皇居新春散策と江戸前極上宿',
      desc: '1.2km続くシャンパンゴールドの丸の内仲通り。重文・東京駅赤レンガ駅舎のライトアップ、皇居東御苑散策、日本橋福徳神社の新春初詣、江戸前老舗グルメと最高峰ホテル…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay',
      title: '八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿',
      desc: '大晦日のをけら詣りから新春の活気あふれる八坂神社。雪の清水の舞台、静寂が包む祇園白川の石畳、熱々の南禅寺湯豆腐と白味噌雑煮、繊細な冬の京懐石と洗練雅宿…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const insertionPoint = featuresContent.indexOf('const features = [');
  if (insertionPoint !== -1) {
    const afterBracket = featuresContent.indexOf('[', insertionPoint) + 1;
    const itemsCode = newFeatures.map(f => `
    {
      slug: '${f.slug}',
      title: '${f.title}',
      desc: '${f.desc}',
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
    `- https://croud-travel.com/winter-hokkaido-sapporo-odori-illumination-jozankei-stay/: さっぽろホワイトイルミネーション＆定山渓雪見露天！札幌味噌ラーメンと北の味覚名宿5選`,
    `- https://croud-travel.com/winter-kanagawa-yokohama-minatomirai-illumination-chinatown-stay/: 赤レンガ倉庫クリスマスマーケット＆ヨルノヨ夜景！中華街熱々点心と絶景港宿5選`,
    `- https://croud-travel.com/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay/: 世界遺産白川郷雪景色＆飛騨高山古い町並み！奥飛騨雪見露天と極上飛騨牛会席の名宿5選`,
    `- https://croud-travel.com/winter-tokyo-marunouchi-illumination-tokyo-station-hatsumode-stay/: 丸の内イルミネーション＆東京駅丸の内駅舎夜景！皇居新春散策と江戸前極上宿5選`,
    `- https://croud-travel.com/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay/: 八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 113 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
