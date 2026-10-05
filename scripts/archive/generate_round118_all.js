const fs = require('fs');
const path = require('path');

const { generateTottoriDaisenKaikePage } = require('./scripts/round118/generate_tottori_daisen_kaike');
const { generateHokkaidoShikaribetsuNukabiraPage } = require('./scripts/round118/generate_hokkaido_shikaribetsu_nukabira');
const { generateNagasakiShimabaraAriakePage } = require('./scripts/round118/generate_nagasaki_shimabara_ariake');
const { generateKyotoMiyamaTanbaPage } = require('./scripts/round118/generate_kyoto_miyama_tanba');
const { generateAkitaYokoteOyasukyoPage } = require('./scripts/round118/generate_akita_yokote_oyasukyo');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 118: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round118_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTottoriDaisenKaikePage, data: rawHotels.tottori_daisen_kaike.hotels },
    { fn: generateHokkaidoShikaribetsuNukabiraPage, data: rawHotels.hokkaido_shikaribetsu_nukabira.hotels },
    { fn: generateNagasakiShimabaraAriakePage, data: rawHotels.nagasaki_shimabara_ariake.hotels },
    { fn: generateKyotoMiyamaTanbaPage, data: rawHotels.kyoto_miyama_tanba.hotels },
    { fn: generateAkitaYokoteOyasukyoPage, data: rawHotels.akita_yokote_oyasukyo.hotels }
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
      slug: 'winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay',
      title: '伯耆大山＆皆生温泉！白銀の伯耆富士絶景と大神山神社初詣・日本海塩湯露天＆境港松葉ガニ名宿',
      desc: '白銀の秀峰伯耆大山スノーシューと大神山神社奥宮初詣、海中から湧く皆生温泉の塩湯。境港直送のブランドタグ付き松葉ガニ・鳥取和牛オレイン55…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay',
      title: '然別湖＆ぬかびら源泉郷！氷結湖上の幻の村しかりべつ湖コタン氷上露天風呂・タウシュベツ橋梁＆十勝牛名宿',
      desc: '極寒の然別湖上にわずか60日現れる氷上露天風呂とアイスバー、雪原にそびえる古代ローマ風タウシュベツ川橋梁。源泉掛け流しぬかびら温泉と十勝牛…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay',
      title: '島原温泉＆雲仙・有明海！冬の島原城初詣と熱々具雑煮・有明海冬牡蠣＆海一望の美肌温泉名宿',
      desc: '白亜の島原城初詣と名水百選四明荘の錦鯉、島原の乱ゆかりの熱々具雑煮。有明海の冬牡蠣・長崎和牛と朝日のインフィニティ露天風呂＆海のサウナ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay',
      title: '美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰天然ぼたん鍋＆里山雪見名宿',
      desc: '雪積もるかやぶき集落の日本の原風景と美山雪灯廊ライトアップ。丹波の冬の王様・天然猪肉の熱々ぼたん鍋と丹波牛、湯の花温泉の美肌雪見露天…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay',
      title: '横手＆湯沢・小安峡！約450年の伝統横手のかまくら雪まつりと大噴湯の巨大氷柱しがっこ・本場稲庭うどん名宿',
      desc: '水神様を祀る横手のかまくら情緒と蛇の崎川原のミニかまくら灯火。小安峡大噴湯の白煙と巨大氷柱しがっこ、手綯い本場稲庭うどん・皆瀬牛と秋田杉温泉…',
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
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
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
    `- https://croud-travel.com/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay/: 伯耆大山＆皆生温泉！白銀の伯耆富士絶景と大神山神社初詣・日本海塩湯露天＆境港松葉ガニ名宿5選`,
    `- https://croud-travel.com/winter-hokkaido-shikaribetsu-kotan-nukabira-onsen-ice-stay/: 然別湖＆ぬかびら源泉郷！氷結湖上の幻の村しかりべつ湖コタン氷上露天風呂・タウシュベツ橋梁＆十勝牛名宿5選`,
    `- https://croud-travel.com/winter-nagasaki-shimabara-onsen-guzoni-castle-ariake-stay/: 島原温泉＆雲仙・有明海！冬の島原城初詣と熱々具雑煮・有明海冬牡蠣＆海一望の美肌温泉名宿5選`,
    `- https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay/: 美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰天然ぼたん鍋＆里山雪見名宿5選`,
    `- https://croud-travel.com/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay/: 横手＆湯沢・小安峡！約450年の伝統横手のかまくら雪まつりと大噴湯の巨大氷柱しがっこ・本場稲庭うどん名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 118 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
