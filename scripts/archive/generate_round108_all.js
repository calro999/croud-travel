const fs = require('fs');
const path = require('path');

const { generateAkitaKakunodatePage } = require('./scripts/round108/generate_akita_kakunodate');
const { generateAichiInuyamaPage } = require('./scripts/round108/generate_aichi_inuyama');
const { generateFukuiEiheijiPage } = require('./scripts/round108/generate_fukui_eiheiji');
const { generateFukuokaMunakataPage } = require('./scripts/round108/generate_fukuoka_munakata');
const { generateHyogoHimejiPage } = require('./scripts/round108/generate_hyogo_himeji');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 108: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round108_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateAkitaKakunodatePage, data: rawHotels.akita_kakunodate.hotels },
    { fn: generateAichiInuyamaPage, data: rawHotels.aichi_inuyama.hotels },
    { fn: generateFukuiEiheijiPage, data: rawHotels.fukui_eiheiji.hotels },
    { fn: generateFukuokaMunakataPage, data: rawHotels.fukuoka_munakata.hotels },
    { fn: generateHyogoHimejiPage, data: rawHotels.hyogo_himeji.hotels }
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
      slug: 'winter-akita-kakunodate-bukeyashiki-snow-kiritanpo-hinaijidori-stay',
      title: '陸奥の小京都・角館武家屋敷雪景色＆冬の田沢湖！比内地鶏きりたんぽ鍋と名湯の名宿',
      desc: '黒板塀に降り積もる純白の雪と日本一深い瑠璃色の田沢湖。新米あきたこまちと比内地鶏の黄金出汁が染み入る本場きりたんぽ鍋、乳白色の濁り湯露天風呂…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay',
      title: '国宝犬山城の冬絶景＆三光稲荷神社新春初詣！白帝の湯と本場名古屋コーチンの名宿',
      desc: '現存最古の木造天守が木曽川の朝霧に浮かぶ白帝城。ハート絵馬と銭洗いの三光稲荷新春祈願、城下町散策、アルカリ性美肌温泉と最高峰地鶏名古屋コーチン鍋…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay',
      title: '曹洞宗大本山永平寺の雪静寂＆新春開運参拝！越前おろしそばと極上若狭牛・越前がにの名宿',
      desc: '巨杉の森と純白の回廊に響く禅の祈り。永平寺傘松閣の絵天井と早朝勤行、辛味大根の越前おろしそば、甘みとろける若狭牛と冬の味覚の王様・黄色タグ付き越前がに…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay',
      title: '世界遺産・宗像大社新春開運初詣＆玄界灘冬絶景！鐘崎天然とらふぐと極上宗像牛の名宿',
      desc: '日本神話の三女神を祀る世界遺産・宗像大社の新春祈願。さつき松原と冬の玄界灘、鐘崎港直送の極上天然とらふぐフルコース、旨み溢れる宗像牛と玄海さつき温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hyogo-himeji-castle-shoshasan-hatsumode-oyster-banshubee-stay',
      title: '世界遺産白鷺城の冬絶景＆書写山圓教寺新春初詣！播磨灘の旬牡蠣と極上播州牛の名宿',
      desc: '冬青空に純白の城壁が眩しく輝く世界遺産姫路城。ラストサムライの舞台・書写山圓教寺の新春初詣、播磨灘で育つ大粒ぷりぷり牡蠣、とろける播州牛と天然温泉サウナ…',
      badge: '11・12・1月特集'
    }
  ];

  let insertionString = '';
  for (const f of newFeatures) {
    insertionString += `            {
              slug: '${f.slug}',
              title: ${JSON.stringify(f.title)},
              desc: ${JSON.stringify(f.desc)},
              badge: '${f.badge}'
            },\n`;
  }

  // Insert at beginning of features array if not already present
  if (!featuresContent.includes(newFeatures[0].slug)) {
    const targetPattern = /\{\s*\[\s*\n\s*\{\s*slug:\s*'winter-/;
    if (featuresContent.match(targetPattern)) {
      featuresContent = featuresContent.replace(
        targetPattern,
        `{[\n${insertionString}            {
              slug: 'winter-`
      );
      fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
      console.log('Successfully updated src/app/features/page.tsx');
    } else {
      console.warn('Could not automatically match targetPattern in features page.');
    }
  } else {
    console.log('src/app/features/page.tsx already contains Round 108 features');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const today = '2026-10-03';
  let sitemapEntries = '';
  for (const slug of slugs) {
    if (!sitemapContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
      sitemapEntries += `  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
    }
  }

  if (sitemapEntries) {
    sitemapContent = sitemapContent.replace('</urlset>', `${sitemapEntries}</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log(`Added ${slugs.length} URLs to public/sitemap-features.xml`);
  } else {
    console.log('All URLs already exist in sitemap-features.xml');
  }

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  if (fs.existsSync(llmsPath)) {
    let llmsContent = fs.readFileSync(llmsPath, 'utf8');
    let llmsEntries = '';
    for (const slug of slugs) {
      if (!llmsContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
        llmsEntries += `- https://croud-travel.pages.dev/${slug}/\n`;
      }
    }
    if (llmsEntries) {
      llmsContent = llmsContent.trim() + '\n' + llmsEntries;
      fs.writeFileSync(llmsPath, llmsContent, 'utf8');
      console.log(`Added ${slugs.length} URLs to public/llms-full.txt`);
    } else {
      console.log('All URLs already exist in llms-full.txt');
    }
  }

  console.log('\n================================================================');
  console.log('Round 108 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error during generation:', err);
  process.exit(1);
});
