const fs = require('fs');
const path = require('path');

const { generateYamagataShonaiKandaraPage } = require('./scripts/round96/generate_yamagata_shonai_kandara');
const { generateFukuiWakasaFuguPage } = require('./scripts/round96/generate_fukui_wakasa_fugu');
const { generateHiroshimaMiyajimaOysterPage } = require('./scripts/round96/generate_hiroshima_miyajima_oyster');
const { generateShizuokaHamanakoKanzanjiPage } = require('./scripts/round96/generate_shizuoka_hamanako_kanzanji');
const { generateHokkaidoShiretokoAbashiriPage } = require('./scripts/round96/generate_hokkaido_shiretoko_abashiri');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 96: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round96_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateYamagataShonaiKandaraPage(rawHotels.yamagata_shonai_kandara.hotels);
  generateFukuiWakasaFuguPage(rawHotels.fukui_wakasa_fugu.hotels);
  generateHiroshimaMiyajimaOysterPage(rawHotels.hiroshima_miyajima_oyster.hotels);
  generateShizuokaHamanakoKanzanjiPage(rawHotels.shizuoka_hamanako_kanzanji.hotels);
  generateHokkaidoShiretokoAbashiriPage(rawHotels.hokkaido_shiretoko_abashiri.hotels);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamagata-shonai-kandara-atsumi-yunohama-stay',
    'winter-fukui-wakasa-fugu-tsuruga-echizen-crab-stay',
    'winter-hiroshima-miyajima-etajima-oyster-onsen-stay',
    'winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay',
    'winter-hokkaido-shiretoko-abashiri-onsen-crab-kinki-stay'
  ];

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
      slug: 'winter-yamagata-shonai-kandara-atsumi-yunohama-stay',
      title: '庄内名物「寒鱈汁（どんがら汁）」と極上白子・寒ブリ・出羽三山雪景色＆名湯あつみ・湯野浜温泉の名宿',
      desc: '11月から1月、真鱈を丸ごと味噌で豪快に煮込む寒鱈汁と熱々の白子、雪化粧の出羽三山羽黒山五重塔、日本海雪見露天…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukui-wakasa-fugu-tsuruga-echizen-crab-stay',
      title: '冬の若狭湾「若狭ふぐ」てっさ・てっちり＆敦賀港越前がに・三方五湖寒うなぎ・海絶景温泉を満喫する名宿',
      desc: '11月から1月、日本海最北の冷水で締まる若狭ふぐ、敦賀港越前がに、レインボーライン三方五湖パノラマと気比神宮初詣…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hiroshima-miyajima-etajima-oyster-onsen-stay',
      title: '冬の瀬戸内「広島牡蠣」焼き牡蠣・土手鍋＆世界遺産・宮島厳島神社の初詣・江田島温泉を巡る名宿',
      desc: '11月から1月、濃厚ミルキーな広島牡蠣、朱塗りが蘇った厳島神社大鳥居の初詣、宮島穴子めしと江田島オリーブ温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay',
      title: '冬限定「遠州灘天然とらふぐ」＆脂の乗る冬の浜名湖うなぎ・牡蠣カバ丼・三ヶ日みかん風呂とレイクビュー名宿',
      desc: '11月から1月、舞阪港直送の天然とらふぐ、冬眠前の寒うなぎ蒲焼き、本物みかんが浮かぶ三ヶ日みかん風呂と冠雪富士山…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-shiretoko-abashiri-onsen-crab-kinki-stay',
      title: '知床ウトロ＆網走の冬絶景とオホーツク海鮮・極上知床牛＆冬タラバ・毛ガニ・高級魚めんめ湯煮を堪能する名宿',
      desc: '11月から1月、世界自然遺産知床連峰の白銀美、深海の赤い宝石めんめ湯煮、オホーツク活毛ガニ、海を望む流氷サウナ…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-yamagata-shonai-kandara-atsumi-yunohama-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 96 features or marker not found.');
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
  console.log('Round 96 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
