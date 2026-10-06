const fs = require('fs');
const path = require('path');

const { generateTdrHalloweenPage } = require('./generate_tdr_halloween.js');
const { generateUsjHalloweenPage } = require('./generate_usj_halloween.js');
const { generateHuistenboschHalloweenPage } = require('./generate_huistenbosch_halloween.js');
const { generateYokohamaHalloweenPage } = require('./generate_yokohama_halloween.js');
const { generateShimaSpanishHalloweenPage } = require('./generate_shimaspanish_halloween.js');

async function main() {
  console.log('================================================================');
  console.log('Generating Round 130 Halloween Feature Pages with Verified Rakuten API');
  console.log('================================================================');

  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round130_raw_hotels.json'), 'utf8'));

  const generators = [
    { 
      slug: 'autumn-tokyo-disney-resort-halloween-maihama-hotels-stay',
      fn: generateTdrHalloweenPage, 
      data: rawHotels.tdr_halloween.hotels 
    },
    { 
      slug: 'autumn-usj-halloween-horror-nights-osaka-bay-hotels-stay',
      fn: generateUsjHalloweenPage, 
      data: rawHotels.usj_halloween.hotels 
    },
    { 
      slug: 'autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay',
      fn: generateHuistenboschHalloweenPage, 
      data: rawHotels.huistenbosch_halloween.hotels 
    },
    { 
      slug: 'autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay',
      fn: generateYokohamaHalloweenPage, 
      data: rawHotels.yokohama_halloween.hotels 
    },
    { 
      slug: 'autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay',
      fn: generateShimaSpanishHalloweenPage, 
      data: rawHotels.shimaspanish_halloween.hotels 
    }
  ];

  const slugs = generators.map(g => g.slug);

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Halloween Feature Pages...');
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
      slug: 'autumn-tokyo-disney-resort-halloween-maihama-hotels-stay',
      title: '東京ディズニーリゾート・ハロウィーン！ヴィランズの饗宴＆仮装パレード・限定スイーツ＆舞浜オフィシャル・パートナー厳選名宿',
      desc: '悪役たちが主役の魅惑の新パレードと大人の全身仮装！ホーンテッドマンション“ホリデーナイトメアー”や秋の限定スイーツ。天然温泉や広々客室でパークの余韻に浸る舞浜・新浦安名宿…',
      badge: '9・10月特集'
    },
    {
      slug: 'autumn-usj-halloween-horror-nights-osaka-bay-hotels-stay',
      title: 'USJハロウィーン・ホラー・ナイト！ストリート・ゾンビ＆狂乱のゾンビデダンス・昼はポケモンフェス＆パーク直結・展望天然温泉名宿',
      desc: '夜のパークに凶悪ゾンビが徘徊！Adoの楽曲に合わせて群衆が狂乱するゾンビ・デ・ダンスと本格ホラーメイズ。昼はDJピカチュウと踊り、夜は地上110mの展望温泉やゲート前ホテルへ…',
      badge: '9・10月特集'
    },
    {
      slug: 'autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay',
      title: '長崎ハウステンボス・ハロウィーン！ヨーロッパの街並みを包むカボチャランタン＆1300万球の光の王国・直営クラシック＆源泉温泉名宿',
      desc: 'レンガ造りの街並みと運河が黄金色の秋に染まる欧風ハロウィーン！世界最大1300万球が輝く光の王国イルミネーションと秋花火。専用クルーザーでチェックインする最高峰クラシックホテル…',
      badge: '9・10月特集'
    },
    {
      slug: 'autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay',
      title: '横浜山手西洋館ハロウィーン！歴史ある異人館7館の本格装飾と港の見える丘公園の秋バラ・大観覧車夜景＆クラシック名門・ベイサイド名宿',
      desc: '山手の丘の洋館7館が魅せる一流のハロウィーンアート！深紅に咲き誇る秋バラとハロウィーンウォーク。昭和2年開業の名門ニューグランドや全室バルコニー付き絶景ホテルで大人の秋ステイ…',
      badge: '10月特集'
    },
    {
      slug: 'autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay',
      title: '志摩スペイン村・ハロウィーンフィエスタ！巨大モンスターパンプキン＆白壁の街並み・本場魚介パエリャ＆美肌温泉ひまわりの湯名宿',
      desc: 'マヨール広場を埋め尽くすカボチャと陽気なスペイン風ハロウィーン！限定パレードと本格フラメンコ、大鍋パエリャ。パーク直結アンダルシア風ホテルや英虞湾一望の美肌天然温泉リゾート…',
      badge: '9・10月特集'
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
  console.log('Round 130 Generation Complete! All 5 Halloween Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
