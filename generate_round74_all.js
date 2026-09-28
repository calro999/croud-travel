const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateHokkaidoSounkyoPage } = require('./scripts/round74/generate_hokkaido_sounkyo');
const { generateShizuokaInatoriPage } = require('./scripts/round74/generate_shizuoka_inatori');
const { generateHyogoYumuraPage } = require('./scripts/round74/generate_hyogo_yumura');
const { generateMiyazakiAoshimaPage } = require('./scripts/round74/generate_miyazaki_aoshima');
const { generateFukuokaHarazuruPage } = require('./scripts/round74/generate_fukuoka_harazuru');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 74: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round74_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateHokkaidoSounkyoPage(rawHotels.hokkaido_sounkyo);
  generateShizuokaInatoriPage(rawHotels.shizuoka_inatori);
  generateHyogoYumuraPage(rawHotels.hyogo_yumura);
  generateMiyazakiAoshimaPage(rawHotels.miyazaki_aoshima);
  generateFukuokaHarazuruPage(rawHotels.fukuoka_harazuru);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hokkaido-sounkyo-onsen-snow-gorge-stay',
    'winter-shizuoka-inatori-onsen-kinmedai-oceanview-stay',
    'winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay',
    'winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay',
    'winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay'
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
      slug: 'winter-hokkaido-sounkyo-onsen-snow-gorge-stay',
      title: '【11・12月北海道・層雲峡温泉の初冬峡谷美と大雪山雪見露天】名湯硫黄泉＆上川十勝牛・オホーツク冬海鮮会席の宿5選',
      description: '11月から12月にかけて、北海道屋根・大雪山連峰の麓に位置する層雲峡温泉は、巨大な柱状節理の断崖絶壁が白銀に染まり、水墨画のような渓谷美が広がる初冬の雪景色を迎えます。厳冬期の氷瀑まつり本番前のこの時期は、静寂に包まれた峡谷でゆったりと雪見露天を満喫できる絶好の隠れシーズン。冷えた身体を芯から温める単純硫黄泉の湯けむり、地元・上川町産ポークやジューシーな十勝牛、オホーツク海直送の冬の味覚を心ゆくまで堪能する厳選温泉ホテル・名旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
      badge: '大雪山初冬峡谷雪景色＆雪見露天・単純硫黄泉・上川十勝牛オホーツク海鮮',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-inatori-onsen-kinmedai-oceanview-stay',
      title: '【11・12月静岡・伊豆稲取温泉の極上地金目鯛会席と相模灘絶景】オーシャンビュー展望露天風呂＆伊豆温暖避寒の宿5選',
      description: '11月から12月にかけて、伊豆半島東海岸の岬に広がる稲取温泉は、冬の味覚の最高峰「稲取一本釣り地金目鯛」が年間で最も上質な脂を蓄える最高の旬を迎えます。黒潮の恩恵を受ける伊豆稲取は、初冬でも穏やかで温暖な気候に恵まれ、寒さを逃れて贅沢な美食と温泉を楽しみたい避寒旅行に最適。目の前に広がる相模灘の水平線から昇る神々しい朝日、伊豆大島を望むパノラマ絶景露天風呂、そして秘伝のタレでふっくら炊き上げた名物「金目鯛の姿煮」に舌鼓を打つ、厳選のおすすめ温泉旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '11・12月最盛期本場稲取地金目鯛姿煮＆相模灘絶景オーシャンビュー露天・伊豆温暖避寒',
      readTime: '6分'
    },
    {
      slug: 'winter-hyogo-yumura-onsen-tajima-beef-matsuba-crab-stay',
      title: '【11・12月兵庫・湯村温泉の荒湯源泉情緒と解禁松葉ガニ】本場但馬牛すき焼き＆美肌高温泉の隠れ家宿5選',
      description: '11月から12月にかけて、兵庫県北部の山懐に抱かれた山陰の名湯「湯村温泉」は、日本海の冬の王様「松葉ガニ」の漁解禁と、もうもうと立ち上る荒湯の湯けむりが旅情をかきたてる至高の冬シーズンを迎えます。中心を流れる春来川沿いには、日本屈指の高温98度を誇る元湯「荒湯」が湧き、名物の温泉卵づくりを体験。全国の黒毛和牛の頂点に君臨する本場「但馬牛」のとろけるステーキやすき焼き、近隣の浜坂港から直送される獲れたての松葉ガニフルコース、美肌高温泉を満喫できる厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '開湯1200年荒湯源泉情緒＆11月解禁浜坂産松葉ガニ・本場但馬牛すき焼き・美肌高温泉',
      readTime: '6分'
    },
    {
      slug: 'winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay',
      title: '【11・12月宮崎・青島温泉の南国温暖避寒と鬼の洗濯板絶景】最高峰宮崎牛・日向灘伊勢海老＆美肌炭酸泉リゾートの宿5選',
      description: '11月から12月にかけて、日南海岸の玄関口に位置する宮崎・青島温泉は、本州が本格的な冬の寒気に包まれるなか、日中は18〜20℃前後まで気温が上がる温暖な南国リゾート気候に恵まれ、極上の避寒旅行シーズンを迎えます。国の天然記念物「鬼の洗濯板」に囲まれた神秘の青島神社、太平洋の青い水平線を望む絶景露天風呂、トロトロの美肌炭酸水素塩泉。最高峰「宮崎牛」鉄板焼きや、旬の日向灘「天然伊勢海老」に舌鼓を打つ厳選ホテル・旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '初冬南国温暖避寒＆鬼の洗濯板絶景・最高峰宮崎牛鉄板焼き・日向灘伊勢海老・美肌炭酸泉',
      readTime: '6分'
    },
    {
      slug: 'winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay',
      title: '【11・12月福岡・原鶴温泉の筑後川冬情緒と奇跡のW美肌の湯】博多和牛会席＆掛け流し展望露天の湯巡り宿5選',
      description: '11月から12月にかけて、福岡市内から高速で約60分、九州一の大河・筑後川のほとりに佇む「原鶴温泉」は、川面に初冬の朝霧が立ち込め、柿やすだちが実る筑後平野の豊かな風情に包まれます。最大の魅力は、角質を落とす「弱アルカリ性単純温泉」と、美白効果を高める「単純硫黄泉」を併せ持つ全国的にも稀有な「W美肌の湯」。福岡が誇る最高峰「博多和牛」のすき焼きや陶板焼き、朝倉の旬の冬野菜をふんだんに使った会席料理を堪能できる厳選の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '筑後川初冬朝霧絶景＆弱アルカリ×硫黄の奇跡のW美肌泉・最高峰博多和牛会席・名湯湯巡り',
      readTime: '6分'
    }
  ];

  const gridAnchor = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';

  for (const item of newFeatures) {
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

  console.log('\n[Complete] Round 74 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
