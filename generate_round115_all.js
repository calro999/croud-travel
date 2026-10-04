const fs = require('fs');
const path = require('path');

const { generateTokyoShibuyaOmotesandoPage } = require('./scripts/round115/generate_tokyo_shibuya_omotesando');
const { generateTokyoGinzaHibiyaPage } = require('./scripts/round115/generate_tokyo_ginza_hibiya');
const { generateHokkaidoBieiFuranoPage } = require('./scripts/round115/generate_hokkaido_biei_furano');
const { generateShizuokaGotembaPage } = require('./scripts/round115/generate_shizuoka_gotemba');
const { generateKyotoHeianJinguPage } = require('./scripts/round115/generate_kyoto_heian_jingu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 115: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round115_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTokyoShibuyaOmotesandoPage, data: rawHotels.tokyo_shibuya_omotesando.hotels },
    { fn: generateTokyoGinzaHibiyaPage, data: rawHotels.tokyo_ginza_hibiya.hotels },
    { fn: generateHokkaidoBieiFuranoPage, data: rawHotels.hokkaido_biei_furano.hotels },
    { fn: generateShizuokaGotembaPage, data: rawHotels.shizuoka_gotemba_tokinosumika.hotels },
    { fn: generateKyotoHeianJinguPage, data: rawHotels.kyoto_heian_jingu_okazaki.hotels }
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
      slug: 'winter-tokyo-shibuya-omotesando-meijijingu-hatsumode-illumination-stay',
      title: '渋谷＆表参道・原宿！明治神宮初詣＆青の洞窟・表参道イルミとSHIBUYA SKY夜景を味わう名宿',
      desc: 'ケヤキ並木を黄金色に染める表参道イルミ、代々木公園の青の洞窟、SHIBUYA SKY冬の夕富士。明治神宮初詣と最先端ホテルステイ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokyo-ginza-hibiya-illumination-christmas-market-luxury-stay',
      title: '銀座＆日比谷！HIBIYA Magic Timeイルミ＆東京クリスマスマーケットと銀座美食・最高峰ホテル名宿',
      desc: '日比谷ステップ広場のオーロラ光、本場ドイツのクリスマスマーケット、銀座中央通りの華麗な冬夜景。老舗すき焼きや江戸前鮨と最高峰宿…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-biei-furano-bluepond-lightup-tokachidake-onsen-stay',
      title: '美瑛＆富良野！白金青い池・白ひげの滝ライトアップと十勝岳雪見にごり湯・富良野和牛の名宿',
      desc: '凍結池に浮かぶ青い光のアート、コバルトブルーの白ひげの滝氷瀑。標高1200m十勝岳雪見にごり湯ととろける富良野和牛に癒やされる冬旅…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay',
      title: '御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿',
      desc: '約550万球が輝く時之栖ひかりのすみかと大迫力の噴水レーザーショー。アウトレット冬セールと湯船から拝む冠雪富士山の絶景温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay',
      title: '平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿',
      desc: '朱塗り大鳥居が雪に映える平安神宮初詣、赤レンガ水路閣の冬情趣。利尻昆布出汁の熱々南禅寺湯豆腐と東山天然温泉スパに癒やされる古都…',
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
    `- https://croud-travel.com/winter-tokyo-shibuya-omotesando-meijijingu-hatsumode-illumination-stay/: 渋谷＆表参道・原宿！明治神宮初詣＆青の洞窟・表参道イルミとSHIBUYA SKY夜景を味わう名宿5選`,
    `- https://croud-travel.com/winter-tokyo-ginza-hibiya-illumination-christmas-market-luxury-stay/: 銀座＆日比谷！HIBIYA Magic Timeイルミ＆東京クリスマスマーケットと銀座美食・最高峰ホテル名宿5選`,
    `- https://croud-travel.com/winter-hokkaido-biei-furano-bluepond-lightup-tokachidake-onsen-stay/: 美瑛＆富良野！白金青い池・白ひげの滝ライトアップと十勝岳雪見にごり湯・富良野和牛の名宿5選`,
    `- https://croud-travel.com/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-view-stay/: 御殿場＆裾野！時之栖イルミ＆アウトレットと冬の富士山展望露天風呂名宿5選`,
    `- https://croud-travel.com/winter-kyoto-heian-jingu-hatsumode-nanzenji-okazaki-yudofu-stay/: 平安神宮＆南禅寺・岡崎！初詣と神苑雪景色・水路閣の冬情趣と名物湯豆腐・京懐石の名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 115 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
