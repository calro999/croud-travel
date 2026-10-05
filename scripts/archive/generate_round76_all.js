const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateHokkaidoTokachigawaPage } = require('./scripts/round76/generate_hokkaido_tokachigawa');
const { generateTochigiShiobaraPage } = require('./scripts/round76/generate_tochigi_shiobara');
const { generateNiigataSenamiPage } = require('./scripts/round76/generate_niigata_senami');
const { generateShigaNagahamaPage } = require('./scripts/round76/generate_shiga_nagahama');
const { generateKumamotoAsoUchinomakiPage } = require('./scripts/round76/generate_kumamoto_aso_uchinomaki');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 76: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round76_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateHokkaidoTokachigawaPage(rawHotels.hokkaido_tokachigawa);
  generateTochigiShiobaraPage(rawHotels.tochigi_shiobara);
  generateNiigataSenamiPage(rawHotels.niigata_senami);
  generateShigaNagahamaPage(rawHotels.shiga_nagahama);
  generateKumamotoAsoUchinomakiPage(rawHotels.kumamoto_aso_uchinomaki);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay',
    'winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay',
    'winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay',
    'winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay',
    'winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay'
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
      slug: 'winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay',
      title: '【11・12月北海道・十勝川温泉の初冬白鳥飛来と美肌遺産モール温泉】極上十勝牛ステーキ＆十勝野チーズ会席を愉しむ名宿5選',
      description: '11月から12月にかけて、広大な十勝平野に位置する十勝川温泉は、シベリアから優雅なオオハクチョウが越冬のために飛来し、澄み渡る「十勝晴れ」の青空と雪化粧した日高山脈が織りなす息を呑むような初冬の絶景を迎えます。北海道遺産に選定された奇跡の「植物性モール温泉」で温まり、極上十勝牛ステーキや十勝チーズを堪能する名宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '北海道遺産植物性モール温泉＆初冬白鳥飛来・十勝牛ステーキ・十勝チーズ',
      readTime: '6分'
    },
    {
      slug: 'winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay',
      title: '【11・12月栃木・塩原温泉の初冬箒川雪見露天と名湯十一湯巡り】極上とちぎ和牛会席＆旬の塩原高原大根を味わう老舗宿5選',
      description: '11月から12月にかけて、栃木県北部の那須連山山麓に広がる塩原温泉郷は、箒川沿いの渓谷が初雪に彩られ、静寂と白い湯けむりが立ち込める情緒豊かな初冬を迎えます。千二百年の歴史誇る「塩原十一湯」の多彩な名湯雪見露天風呂と、寒暖差で甘さを極めた名物「塩原高原大根」、とろける霜降り「とちぎ和牛」を味わう厳選老舗宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '塩原十一湯名湯掛け流し＆初冬箒川雪見露天・極上とちぎ和牛・塩原大根',
      readTime: '6分'
    },
    {
      slug: 'winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay',
      title: '【11・12月新潟・瀬波温泉の初冬日本海夕日絶景露天と越後村上鮭三昧】名物塩引鮭・はらこ飯＆極上村上牛会席の海辺宿5選',
      description: '11月から12月にかけて、新潟県北部の日本海沿いに湧く瀬波温泉は、水平線に沈む茜色の夕日と荒波が織りなす息を呑むような初冬の絶景を迎えます。清流・三面川の伝統鮭漁が最盛期を迎え、町屋に吊るされる塩引鮭やプチプチのはらこ飯、A5村上牛の陶板ステーキを「熱の湯」展望露天風呂とともに味わう海辺の厳選宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '日本海夕日絶景露天風呂＆初冬越後村上鮭三昧・塩引鮭はらこ飯・村上牛',
      readTime: '6分'
    },
    {
      slug: 'winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay',
      title: '【11・12月滋賀・長浜太閤温泉の初冬琵琶湖夕景と名物天然鴨鍋】秀吉ゆかりの含鉄泉＆極上近江牛すき焼きを堪能する湖北名宿5選',
      description: '11月から12月にかけて、琵琶湖の東岸に位置する長浜は、シベリアからコハクチョウが飛来し、湖面を黄金色に染め上げる夕暮れパノラマが美しい初冬の旅情に包まれます。豊臣秀吉公ゆかりの茶褐色の含鉄泉で温まり、11月15日猟解禁の本場湖北名物「天然真鴨の鴨鍋（かもすき）」と三大和牛「近江牛」の霜降り会席を味わう名宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '秀吉ゆかり太閤温泉＆初冬琵琶湖夕景・11月解禁名物天然鴨鍋・極上近江牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay',
      title: '【11・12月熊本・阿蘇内牧温泉の初冬阿蘇五岳絶景と名物あか牛】名湯掛け流し湯巡り＆極上あか牛溶岩焼きと特選馬刺しを味わう厳選宿5選',
      description: '11月から12月にかけて、世界最大級の阿蘇カルデラに抱かれた内牧温泉は、広大な草原が初霜・初雪へと移ろい、澄み切った大気の中に阿蘇五岳の涅槃像が荘厳に浮かび上がる初冬の絶景を迎えます。文豪も愛した豊富な自家源泉掛け流し湯で温まり、赤身の旨味が凝縮した「あか牛」溶岩焼きと本場特選霜降り馬刺しを味わう厳選宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '阿蘇五岳涅槃像絶景＆初冬草千里・名湯掛け流し・あか牛溶岩焼き・馬刺し',
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

  console.log('\n[Complete] Round 76 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
