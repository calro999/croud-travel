const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateMiyagiMatsushimaPage } = require('./scripts/round73/generate_miyagi_matsushima');
const { generateIbarakiKitaibarakiPage } = require('./scripts/round73/generate_ibaraki_kitaibaraki');
const { generateYamaguchiShimonosekiPage } = require('./scripts/round73/generate_yamaguchi_shimonoseki');
const { generateHokkaidoToyakoPage } = require('./scripts/round73/generate_hokkaido_toyako');
const { generateOkayamaYubaraPage } = require('./scripts/round73/generate_okayama_yubara');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 73: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round73_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateMiyagiMatsushimaPage(rawHotels.miyagi_matsushima);
  generateIbarakiKitaibarakiPage(rawHotels.ibaraki_kitaibaraki);
  generateYamaguchiShimonosekiPage(rawHotels.yamaguchi_shimonoseki);
  generateHokkaidoToyakoPage(rawHotels.hokkaido_toyako);
  generateOkayamaYubaraPage(rawHotels.okayama_yubara);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay',
    'winter-ibaraki-kitaibaraki-isohara-onsen-ankou-dobujiru-stay',
    'winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay',
    'winter-hokkaido-toyako-onsen-lakeview-illumination-stay',
    'winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay'
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
      slug: 'winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay',
      title: '【11・12月宮城・松島温泉の初冬松島湾絶景と解禁・極上松島牡蠣】日本三景日の出パノラマ展望露天＆仙台牛会席の宿5選',
      description: '11月から12月にかけて、日本三景の一つに数えられる宮城県・松島湾は、初冬の澄み切った冷涼な空気によって260余りの島々が最も鮮やかに浮かび上がる絶景シーズンを迎えます。この時期の松島を象徴するのが、秋から冬にかけて水揚げが本格解禁される名物「松島牡蠣（かき）」。豊かな三陸の山々から流れ込むミネラルをたっぷり吸収した牡蠣は、ぷりぷりと大粒で甘みと濃厚なコクが凝縮しています。さらに宮城が誇る最高峰ブランド「仙台牛」や三陸直送の海の幸、地下深層から湧き出る「絹肌の湯」こと松島温泉が旅人を迎えます。太平洋の水平線から昇る神々しい朝焼けを客室や展望露天風呂から独占する、初冬の松島おすすめ名旅館・ホテル5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '松島湾初冬日の出絶景＆11・12月解禁松島牡蠣・最高峰仙台牛・美肌絹肌の湯',
      readTime: '6分'
    },
    {
      slug: 'winter-ibaraki-kitaibaraki-isohara-onsen-ankou-dobujiru-stay',
      title: '【11・12月茨城・北茨城温泉郷の元祖あんこう鍋・濃厚どぶ汁と太平洋絶景】五浦・磯原の温まり美肌塩化物泉＆常陸牛の宿5選',
      description: '11月から12月にかけて、東京から常磐道やJR特急ひたちで約2時間の茨城県最北部「北茨城温泉郷（平潟・磯原・五浦）」は、冬の味覚の王様「あんこう」の本格シーズンを迎えます。北茨城は全国あんこう鍋発祥の地として知られ、水を一切使わずに生あん肝を鍋肌でじっくり乾煎りして溶かし、秘伝味噌とアンコウ自身の水分だけで炊き上げる究極の漁師料理「どぶ汁（どぶじる）」の本場です。太平洋の荒波が削り出した奇岩・六角堂が佇む五浦海岸の絶景、地下深層から湧出する高濃度塩化物泉の「温まり美肌の湯」、そして銘柄牛「常陸牛」の極上会席。水平線から昇る初冬の日の出を露天風呂から望む、北茨城の厳選名旅館・温泉ホテル5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '元祖あんこう鍋濃厚どぶ汁＆五浦海岸太平洋絶景・高張性温まり強塩泉・常陸牛',
      readTime: '6分'
    },
    {
      slug: 'winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay',
      title: '【11・12月山口・下関と川棚温泉の本場とらふぐ解禁美食と元祖瓦そば】関門海峡・響灘夕景＆開湯八百年ラジウム美肌泉の宿5選',
      description: '11月から12月にかけて、本州最西端に位置する山口県下関市および響灘沿いの名湯「川棚温泉（かわたなおんせん）」は、冬の味覚の最高峰「本場とらふぐ（下関ふく）」が最も身を引き締め、濃厚な旨味を蓄える年間最高のハイシーズンを迎えます。日本屈指のふぐ水揚げを誇る南風泊港から届く極上の天然・厳選とらふぐは、職人技が光る繊細な菊盛りの「てっさ」、身がぷりぷりの「てっちり」、香ばしい「ひれ酒」で五感を満たします。さらに熱々の日本瓦で茶そばを焼き上げる名物「元祖瓦そば」、毛利侯の隠れ湯として愛された開湯800年の名湯ラジウム泉。関門海峡と響灘の絶景夕日に癒やされる、初冬の下関・川棚の厳選名旅館・ホテル5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '11・12月本場下関とらふぐ最盛期＆名物元祖瓦そば・開湯800年ラジウム美肌泉',
      readTime: '6分'
    },
    {
      slug: 'winter-hokkaido-toyako-onsen-lakeview-illumination-stay',
      title: '【11・12月北海道・洞爺湖温泉のイルミネーションと冠雪羊蹄山絶景】全室レイクビュー展望露天風呂＆白老牛・噴火湾冬ホタテの宿5選',
      description: '11月から12月にかけて、北海道有数のカルデラ湖畔に広がる「洞爺湖温泉（とうやこおんせん）」は、日本最北の不凍湖が魅せる静寂の湖面と、純白の雪を戴く名峰「羊蹄山（蝦夷富士）」の冠雪絶景が広がるロマンチックな初冬シーズンを迎えます。11月からは温泉街を約40万球の幻想的な光で包み込む「イルミネーショントンネル」が点灯。湖と湯面が一体化するインフィニティ展望露天風呂からは、澄み切った冬空と雪化粧した山々のパノラマを一望できます。夕食には近隣の内浦湾（噴火湾）で獲れる肉厚で甘みたっぷりの「冬ホタテ」や、北海道屈指の黒毛和牛「白老牛」の極上会席。心洗われる絶景に癒やされる厳選リゾートホテル・名旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
      badge: '洞爺湖40万球イルミネーション＆冠雪羊蹄山絶景・インフィニティ露天・白老牛',
      readTime: '6分'
    },
    {
      slug: 'winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay',
      title: '【11・12月岡山・湯原温泉の初冬渓谷美と美作三湯・名物砂湯】pH9.3アルカリ美肌天然自噴泉＆蒜山ジャージー牛・冬ジビエ会席の宿5選',
      description: '11月から12月にかけて、岡山県北部の旭川上流に佇む名湯「湯原温泉（ゆばらおんせん）」は、美作三湯の筆頭として、また全国露天風呂番付で「西の横綱」に輝く名物露天風呂「砂湯」を中心に、初冬の澄んだ渓谷美と情緒あふれる湯けむりに包まれます。川底から毎分6,000リットルもの湯が自噴するアルカリ性単純温泉は、pH9.3という全国屈指の高アルカリ度を誇り、肌に吸い付くようなとろみで古い角質を落とす奇跡の「美肌の湯」。初冬の澄み渡る寒気の中、旭川のせせらぎを聞きながら露天風呂に浸かり、夕食には近隣の蒜山高原が育む極上の「蒜山ジャージー牛」や冬の滋味「天然猪鍋（ぼたん鍋）」を味わう厳選名旅館・ホテル5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '西の横綱名物砂湯＆pH9.3高アルカリ美肌自噴泉・蒜山ジャージー牛・天然猪鍋',
      readTime: '6分'
    }
  ];

  const gridAnchor = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';

  for (const item of newFeatures) {
    // Add to the JSX grid list if present
    if (featuresContent.includes(gridAnchor) && !featuresContent.includes(`slug: '${item.slug}'`)) {
      const cardItem = `            {
              slug: '${item.slug}',
              title: ${JSON.stringify(item.badge)},
              desc: ${JSON.stringify(item.description.slice(0, 36) + '…')},
              badge: '11・12月特集'
            },`;
      featuresContent = featuresContent.replace(
        gridAnchor,
        `${gridAnchor}\n${cardItem}`
      );
      console.log(`Added grid card item: ${item.slug}`);
    }
  }

  fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
  console.log('src/app/features/page.tsx updated successfully.');

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapFeaturesPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapFeaturesPath, 'utf8');

  for (const slug of slugs) {
    if (!sitemapContent.includes(`<loc>https://croud-travel.pages.dev/${slug}/</loc>`)) {
      const urlBlock = `  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>2026-09-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
      sitemapContent = sitemapContent.replace('</urlset>', `${urlBlock}\n</urlset>`);
      console.log(`Added to sitemap-features.xml: ${slug}`);
    }
  }
  fs.writeFileSync(sitemapFeaturesPath, sitemapContent, 'utf8');
  console.log('public/sitemap-features.xml updated successfully.');

  // 5. Update public/llms-full.txt and public/llms.txt if present
  console.log('\n[Step 5] Checking and updating LLM text files...');
  const llmsFullPath = path.join(__dirname, 'public', 'llms-full.txt');
  if (fs.existsSync(llmsFullPath)) {
    let llmsFullContent = fs.readFileSync(llmsFullPath, 'utf8');
    for (const item of newFeatures) {
      const entry = `\n- https://croud-travel.pages.dev/${item.slug}/: ${item.title}`;
      if (!llmsFullContent.includes(item.slug)) {
        llmsFullContent += entry;
      }
    }
    fs.writeFileSync(llmsFullPath, llmsFullContent, 'utf8');
    console.log('public/llms-full.txt updated.');
  }

  // 6. Run bundle_posts.js if exists
  if (fs.existsSync(path.join(__dirname, 'bundle_posts.js'))) {
    console.log('\n[Step 6] Running bundle_posts.js...');
    try {
      execSync('node bundle_posts.js', { stdio: 'inherit' });
    } catch (e) {
      console.warn('bundle_posts.js warning:', e.message);
    }
  }

  console.log('\n[Complete] Round 73 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
