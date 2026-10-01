const fs = require('fs');
const path = require('path');

const { generateOkayamaHinaseOysterPage } = require('./scripts/round97/generate_okayama_hinase_oyster');
const { generateKochiCityTosaKuePage } = require('./scripts/round97/generate_kochi_city_tosa_kue');
const { generateOkinawaOnnaMotobuPage } = require('./scripts/round97/generate_okinawa_onna_motobu');
const { generateChibaChoshiInubosakiPage } = require('./scripts/round97/generate_chiba_choshi_inubosaki');
const { generateShigaOmihachimanHikonePage } = require('./scripts/round97/generate_shiga_omihachiman_hikone');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 97: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round97_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateOkayamaHinaseOysterPage(rawHotels.okayama_hinase_ushimado.hotels);
  generateKochiCityTosaKuePage(rawHotels.kochi_city_tosa_kue.hotels);
  generateOkinawaOnnaMotobuPage(rawHotels.okinawa_onna_motobu.hotels);
  generateChibaChoshiInubosakiPage(rawHotels.chiba_choshi_inubosaki.hotels);
  generateShigaOmihachimanHikonePage(rawHotels.shiga_omihachiman_hikone.hotels);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-okayama-hinase-ushimado-oyster-kakioko-stay',
    'winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay',
    'winter-okinawa-onna-motobu-whalewatching-agu-resort-stay',
    'winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay',
    'winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay'
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
      slug: 'winter-okayama-hinase-ushimado-oyster-kakioko-stay',
      title: '瀬戸内冬の味覚「日生牡蠣（ひなせかき）」と名物カキオコ・牛窓オリーブ園夕陽＆日本のエーゲ海リゾート名宿',
      desc: '11月から1月、播磨灘が育む大粒で縮まない日生牡蠣と鉄板で焼くカキオコ、牛窓オリーブ園の茜色サンセット…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay',
      title: '冬の幻の高級魚「天然クエ鍋」と脂の乗る戻り鰹・土佐あかうし＆高知城冬ライトアップ・桂浜初日の出の天然温泉宿',
      desc: '11月から1月、黒潮がもたらす天然クエちり鍋、藁焼き戻り鰹塩タタキ、現存天守高知城ライトアップとひろめ市場…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okinawa-onna-motobu-whalewatching-agu-resort-stay',
      title: '冬の楽園リゾート！12月開幕ホエールウォッチングと美ら海水族館・あぐー豚しゃぶしゃぶ＆恩納村スパ名宿',
      desc: '11月から1月、平均20℃の快適な避寒、遭遇率98%のザトウクジラ観察、あぐー豚出汁しゃぶしゃぶともとぶ牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay',
      title: '本州一早い初日の出「犬吠埼」と冬の極上「銚子つりきんめ」・九十九里焼きはまぐり鍋＆太平洋パノラマ犬吠埼温泉宿',
      desc: '11月から1月、太平洋の水平線から昇る元旦の初日の出、一本釣りの極上銚子つりきんめ姿煮、九十九里の天然地蛤…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay',
      title: '近江八幡水郷雪景色＆国宝・彦根城雪化粧と日本三大和牛「近江牛すき焼き」＆冬の琵琶湖名物・湖畔の絶景名宿',
      desc: '11月から1月、白銀に染まる国宝彦根城天守、八幡堀の冬の静寂とこたつ舟、400年の歴史を誇る近江牛のすき焼き…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-okayama-hinase-ushimado-oyster-kakioko-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 97 features or marker not found.');
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
  console.log('Round 97 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
