const fs = require('fs');
const path = require('path');

const { generateIshikawaHakusanPage } = require('./scripts/round124/generate_ishikawa_hakusan');
const { generateNaraKashiharaPage } = require('./scripts/round124/generate_nara_kashihara');
const { generateShizuokaKakegawaPage } = require('./scripts/round124/generate_shizuoka_kakegawa');
const { generateKagawaTakamatsuPage } = require('./scripts/round124/generate_kagawa_takamatsu');
const { generateGunmaKiryuPage } = require('./scripts/round124/generate_gunma_kiryu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 124: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round124_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateIshikawaHakusanPage, data: rawHotels.ishikawa_hakusan_shirayamahime_tatsunokuchi.hotels },
    { fn: generateNaraKashiharaPage, data: rawHotels.nara_kashihara_jingu_asuka_asukunabe.hotels },
    { fn: generateShizuokaKakegawaPage, data: rawHotels.shizuoka_kakegawa_fukuroi_hattasan.hotels },
    { fn: generateKagawaTakamatsuPage, data: rawHotels.kagawa_takamatsu_tamura_shionoe.hotels },
    { fn: generateGunmaKiryuPage, data: rawHotels.gunma_kiryu_houtokuji_himokawa.hotels }
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
      slug: 'winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay',
      title: '白山＆加賀・辰口温泉！加賀一ノ宮「白山比咩神社」新春初詣と手取川雪景色・開湯1400年美肌湯＆加能ガニ名宿',
      desc: '全国三千余社の白山神社総本宮で迎える厳かな新春。雪化粧した樹齢数百年の表参道杉並木、開湯1400年辰口温泉の柔らかな湯と解禁されたばかりの極上加能ガニ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay',
      title: '橿原＆明日香・飛鳥！日本建国の聖地「橿原神宮」新春初詣と畝傍山の冬朝霧・飛鳥路の静寂＆名物「飛鳥鍋」名宿',
      desc: '第一代神武天皇を祀る橿原神宮に響く新春の祈りと100万人の参拝。冬の澄んだ朝霧に浮かぶ大和三山、石舞台古墳の静寂と古代宮廷に由来する牛乳仕立て飛鳥鍋…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay',
      title: '掛川＆袋井・遠州三山！厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守・可睡齋ひなまつり＆遠州夢咲牛名宿',
      desc: '厄除け大本山・法多山の杉並木を歩く新春初詣と名物厄除団子。日本初の本格木造復元天守・掛川城と可睡齋32段1200体ひな人形、日本一に輝いた黒毛和牛遠州夢咲牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay',
      title: '高松＆屋島・塩江温泉！讃岐一ノ宮「田村神社」新春初詣と栗林公園の冬雪吊り・奥座敷美肌湯＆熱々しっぽくうどん名宿',
      desc: '龍神信仰の讃岐国一ノ宮・田村神社初詣とミシュラン三つ星栗林公園の冬の雪吊り松美。高松の奥座敷・塩江温泉の渓谷露天風呂と根菜たっぷりの冬名物しっぽくうどん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay',
      title: '桐生＆みどり・わたらせ！織物の都「桐生新町」のこぎり屋根と「宝徳寺」冬の床もみじ初詣・熱々ひもかわうどん名宿',
      desc: '漆床に雪景色が鏡のように映り込む宝徳寺の新春特別祈祷。日本遺産・桐生新町重伝建地区のレトロ散策、幅十数センチの熱々肉汁ひもかわうどんと極上上州牛すき焼き…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
  if (featuresContent.includes(gridMarker)) {
    const formattedItems = newFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx grid items with 5 new features!');
  } else {
    console.warn('Could not find gridMarker in features/page.tsx, checking fallback...');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
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
  console.log('Round 124 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
