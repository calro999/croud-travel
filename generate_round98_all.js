const fs = require('fs');
const path = require('path');

const { generateIbarakiOaraiNakaminatoPage } = require('./scripts/round98/generate_ibaraki_oarai_nakaminato');
const { generateYamanashiYamanakakoOshinoPage } = require('./scripts/round98/generate_yamanashi_yamanakako_oshino');
const { generateNaganoKisojiNaraiTsumagoPage } = require('./scripts/round98/generate_nagano_kisoji_narai_tsumago');
const { generateKyotoIneFunayaMiyazuPage } = require('./scripts/round98/generate_kyoto_ine_funaya_miyazu');
const { generateNagasakiSaseboKujukushimaPage } = require('./scripts/round98/generate_nagasaki_sasebo_kujukushima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 98: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round98_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateIbarakiOaraiNakaminatoPage(rawHotels.ibaraki_oarai_nakaminato.hotels);
  generateYamanashiYamanakakoOshinoPage(rawHotels.yamanashi_yamanakako_oshino.hotels);
  generateNaganoKisojiNaraiTsumagoPage(rawHotels.nagano_kisoji_narai_tsumago.hotels);
  generateKyotoIneFunayaMiyazuPage(rawHotels.kyoto_ine_funaya_miyazu.hotels);
  generateNagasakiSaseboKujukushimaPage(rawHotels.nagasaki_sasebo_kujukushima.hotels);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-ibaraki-oarai-nakaminato-ankou-sunrise-stay',
    'winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay',
    'winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay',
    'winter-kyoto-ine-funaya-ineburi-shabu-miyazu-stay',
    'winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay'
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
      slug: 'winter-ibaraki-oarai-nakaminato-ankou-sunrise-stay',
      title: '大洗磯前神社「神磯の鳥居」初日の出と冬の極上「大洗あんこう鍋（どぶ汁）」・那珂湊おさかな市場買い出し＆太平洋一望の名宿',
      desc: '11月から1月、太平洋の荒波打つ神磯の鳥居から昇る真紅の初日の出、水を加えずあん肝だけで煮込む元祖どぶ汁、那珂湊市場の年末活気…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay',
      title: '冬の澄天に輝く「ダイヤモンド富士」と雪化粧の忍野八海・熱々「甲州ほうとう鍋」＆富士山を望む絶景温泉宿',
      desc: '11月から1月、夕暮れの富士山頂に太陽が重なる奇跡のダイヤモンド富士、朝日に輝く紅富士、忍野八海のエメラルド湧水池と熱々ほうとう…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay',
      title: '中山道・木曽路の雪化粧宿場町（奈良井宿・妻籠宿）と冬の郷土味覚「投じ蕎麦・すんき鍋」・木曽牛＆木曽御嶽山麓の雪見温泉宿',
      desc: '11月から1月、奈良井千軒や妻籠宿の千本格子に降り積もる純白の雪、竹籠にくぐらせる熱々の名物投じ蕎麦、無塩植物性乳酸菌のすんき鍋…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-ine-funaya-ineburi-shabu-miyazu-stay',
      title: '雪化粧の伊根湾「伊根の舟屋」と日本三大寒ブリ「伊根ブリしゃぶしゃぶ」・海の京都宮津温泉＆冬の天橋立雪景色名宿',
      desc: '11月から1月、海に浮かぶ約230軒の舟屋群がまとう雪の水墨画風景、脂の乗った極上寒ブリのしゃぶしゃぶ、雪の飛龍観天橋立と美肌温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay',
      title: '冬の味覚「九十九島かき」焼き牡蠣小屋と世界最大イルミ「ハウステンボス光の王国」・佐世保名物＆九十九島温泉リゾート宿',
      desc: '11月から1月、濃厚ミルキーな旨味が凝縮した九十九島かきの炭火焼き、世界最大1300万球の白銀イルミネーション、元祖レモンステーキ…',
      badge: '11・12・1月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-ibaraki-oarai-nakaminato-ankou-sunrise-stay') && featuresContent.includes(gridInsertMarker)) {
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
    console.log('src/app/features/page.tsx already contains Round 98 features or marker not found.');
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
  console.log('Round 98 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
