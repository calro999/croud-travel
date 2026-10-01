const fs = require('fs');
const path = require('path');

const { generateIwateSanrikuKotatsuTrainPage } = require('./scripts/round94/generate_iwate_sanriku_kotatsu_train');
const { generateAkitaMoriyoshiAniPage } = require('./scripts/round94/generate_akita_moriyoshi_ani');
const { generateNiigataSadoIslandPage } = require('./scripts/round94/generate_niigata_sado_island');
const { generateNaraDorogawaOnsenPage } = require('./scripts/round94/generate_nara_dorogawa_onsen');
const { generateKyotoKifuneKuramaPage } = require('./scripts/round94/generate_kyoto_kifune_kurama');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 94: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round94_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateIwateSanrikuKotatsuTrainPage(rawHotels.iwate_sanriku_kotatsu_train.hotels);
  generateAkitaMoriyoshiAniPage(rawHotels.akita_moriyoshi_ani.hotels);
  generateNiigataSadoIslandPage(rawHotels.niigata_sado_island.hotels);
  generateNaraDorogawaOnsenPage(rawHotels.nara_dorogawa_onsen.hotels);
  generateKyotoKifuneKuramaPage(rawHotels.kyoto_kifune_kurama.hotels);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-iwate-sanriku-kotatsu-train-kaisen-stay',
    'winter-akita-moriyoshi-ani-snow-monster-matagi-stay',
    'winter-niigata-sado-island-kanburi-crab-snow-stay',
    'winter-nara-dorogawa-onsen-snow-botannabe-stay',
    'winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay'
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
      slug: 'winter-iwate-sanriku-kotatsu-train-kaisen-stay',
      title: '三陸鉄道こたつ列車の冬絶景と浄土ヶ浜雪景色・名物瓶ドン＆極上三陸あわび・毛ガニを味わう名宿',
      desc: '11月から1月、三陸鉄道こたつ列車の旅情と白亜の流紋岩が雪化粧する名勝浄土ヶ浜、名物瓶ドンとあわび踊り焼き、冬の三陸毛ガニ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-akita-moriyoshi-ani-snow-monster-matagi-stay',
      title: '日本三大樹氷・森吉山スノーモンスターと秋田内陸線雪景色・比内地鶏きりたんぽ鍋＆マタギ秘湯を巡る名宿',
      desc: '11月から1月、日本三大樹氷・森吉山の巨大スノーモンスター、雪景色の秋田内陸線、本場比内地鶏きりたんぽ鍋と打当温泉マタギ秘湯…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-niigata-sado-island-kanburi-crab-snow-stay',
      title: '冬の王者「佐渡寒ブリ」と活本ズワイガニ・雪化粧の佐渡金山＆日本海絶景の佐渡温泉を堪能する名宿',
      desc: '11月から1月、佐渡寒ブリ宣言発令で脂が乗る天然寒ブリと本ズワイガニ、雪の世界文化遺産佐渡金山、源泉かけ流しの佐渡温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nara-dorogawa-onsen-snow-botannabe-stay',
      title: '雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉の名物ぼたん鍋＆名水とうふ・極上大和牛を味わう隠れ宿',
      desc: '11月から1月、標高820mの白銀行者宿街に灯る赤提灯、名水ごろごろ水仕込みの天然猪肉ぼたん鍋と名水豆腐、大和牛を味わう冬籠もり…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay',
      title: '白銀の貴船神社・積雪日限定ライトアップと冬の京都奥座敷・極上天然猪肉ぼたん鍋＆京都牛を愉しむ静寂の名宿',
      desc: '11月から1月、朱色の春日灯籠と白雪が輝く貴船神社積雪ライトアップ、静寂の京都奥座敷で味わう丹波天然猪ぼたん鍋と京都牛会席…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-iwate-sanriku-kotatsu-train-kaisen-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 94 features or marker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Extract all existing urls
  const existingLocs = new Set([...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
  let addedSitemapCount = 0;

  for (const slug of slugs) {
    const loc = `https://croud-travel.pages.dev/${slug}/`;
    if (!existingLocs.has(loc)) {
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-10-01</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
      sitemapContent = sitemapContent.replace('</urlset>', entry + '</urlset>');
      existingLocs.add(loc);
      addedSitemapCount++;
    }
  }

  // Sort sitemap entries alphabetically
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
  console.log('Round 94 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
