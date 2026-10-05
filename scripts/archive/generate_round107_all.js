const fs = require('fs');
const path = require('path');

const { generateIbarakiMitoKasamaPage } = require('./scripts/round107/generate_ibaraki_mito_kasama');
const { generateHiroshimaOnomichiSenkojiPage } = require('./scripts/round107/generate_hiroshima_onomichi_senkoji');
const { generateOitaUsaKunisakiPage } = require('./scripts/round107/generate_oita_usa_kunisaki');
const { generateOkayamaTakahashiUnkaiPage } = require('./scripts/round107/generate_okayama_takahashi_unkai');
const { generateGifuGujoHachimanPage } = require('./scripts/round107/generate_gifu_gujo_hachiman');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 107: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round107_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateIbarakiMitoKasamaPage, data: rawHotels.ibaraki_mito_kasama.hotels },
    { fn: generateHiroshimaOnomichiSenkojiPage, data: rawHotels.hiroshima_onomichi_senkoji.hotels },
    { fn: generateOitaUsaKunisakiPage, data: rawHotels.oita_usa_kunisaki.hotels },
    { fn: generateOkayamaTakahashiUnkaiPage, data: rawHotels.okayama_takahashi_unkai.hotels },
    { fn: generateGifuGujoHachimanPage, data: rawHotels.gifu_gujo_hachiman.hotels }
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
      slug: 'winter-ibaraki-mito-kasama-inari-hatsumode-ankou-hitachigyu-stay',
      title: '笠間稲荷神社新春開運初詣＆水戸偕楽園冬梅！本場濃厚あんこう鍋と極上常陸牛の名宿',
      desc: '日本三大稲荷・笠間稲荷神社の新春初詣と、日本三名園・偕楽園の早咲き冬梅。常磐沖のあん肝溶け出す濃厚どぶ汁風あんこう鍋、最高峰黒毛和牛「常陸牛」の極上すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay',
      title: '尾道水道の夕景＆千光寺新春開運初詣！瀬戸内の旬魚オコゼ・穴子と名物尾道ラーメンの名宿',
      desc: '冬の澄んだ大気に輝く尾道水道の夕景マジックアワー。806年開基の古刹・千光寺での新春初詣と坂道散策、冬の白身の王様オコゼの薄造り、寒穴子飯、熱々尾道ラーメン…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay',
      title: '全国八幡宮総本宮・宇佐神宮新春開運初詣＆国東六郷満山！豊前海天然車海老と極上豊後牛の名宿',
      desc: '全国4万社を超える八幡宮の総本宮・宇佐神宮の二礼四拍手一礼初詣。九州最古の国宝富貴寺大堂の孤高の冬姿、豊前海直送の天然車海老、とろけるおおいた豊後牛と元祖宇佐からあげ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okayama-takahashi-bitchu-matsuyama-castle-unkai-chiyagyu-stay',
      title: '雲海に浮かぶ天空の山城・備中松山城＆美星町満天星空！幻の千屋牛すき焼きを堪能する名宿',
      desc: '現存天守唯一の山城が純白の雲海に浮かぶ冬の奇跡。猫城主さんじゅーろー、吹屋ふるさと村のベンガラ格子、星空保護区美星町の冬星空、日本最古の蔓牛「千屋牛」の極上すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gifu-gujo-hachiman-snow-castle-hidagyu-keichan-stay',
      title: '奥美濃の小京都・郡上八幡城雪景色＆宗祇水！名物鶏ちゃんと極上飛騨牛すき焼きの名宿',
      desc: '日本最古の木造再建城・郡上八幡城の白銀「積翠城」。名水百選第1号・宗祇水と職人町の水路、美濃市うだつの上がる町並み、熱々の味噌鉄板焼き「鶏ちゃん」と最高級飛騨牛すき焼き…',
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
    console.log('src/app/features/page.tsx already contains Round 107 features');
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
  console.log('Round 107 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error during generation:', err);
  process.exit(1);
});
