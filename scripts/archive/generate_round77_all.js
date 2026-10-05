const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateShizuokaShimodaPage } = require('./scripts/round77/generate_shizuoka_shimoda');
const { generateKochiAshizuriPage } = require('./scripts/round77/generate_kochi_ashizuri');
const { generateNaganoTateshinaPage } = require('./scripts/round77/generate_nagano_tateshina');
const { generateMiyagiSakunamiPage } = require('./scripts/round77/generate_miyagi_sakunami');
const { generateHokkaidoAkankoPage } = require('./scripts/round77/generate_hokkaido_akanko');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 77: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round77_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateShizuokaShimodaPage(rawHotels.shizuoka_shimoda);
  generateKochiAshizuriPage(rawHotels.kochi_ashizuri);
  generateNaganoTateshinaPage(rawHotels.nagano_tateshina);
  generateMiyagiSakunamiPage(rawHotels.miyagi_sakunami);
  generateHokkaidoAkankoPage(rawHotels.hokkaido_akanko);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay',
    'winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay',
    'winter-nagano-tateshina-onsen-yatsugatake-snow-shinshu-beef-stay',
    'winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay',
    'winter-hokkaido-akanko-onsen-lakeview-frost-flower-hokkaido-beef-stay'
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
      slug: 'winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay',
      title: '【11・12月静岡・下田南伊豆温泉郷の初冬海絶景と極上地金目鯛】水揚げ日本一の金目鯛姿煮＆伊勢海老会席を満喫する絶景宿5選',
      description: '11月から12月にかけて、伊豆半島南端の下田・南伊豆エリアは、水揚げ日本一を誇る名物「下田の地金目鯛」が最も脂を蓄える最高の旬を迎えます。初冬でも太平洋の黒潮に洗われ温暖な気候が広がり、水平線が茜色に染まる夕暮れや満天の星を望む海辺の絶景露天風呂は格別の心地よさ。12月中旬には爪木崎の水仙まつりが開幕し、エメラルドグリーンの海と白い水仙のコントラストが旅人を魅了します。肉厚でとろける金目鯛の姿煮やしゃぶしゃぶ、伊勢海老、下田温泉・奥下田美肌源泉を心ゆくまで堪能する厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '水揚げ日本一地金目鯛姿煮＆伊勢海老・初冬の絶景オーシャンビュー露天風呂',
      readTime: '6分'
    },
    {
      slug: 'winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay',
      title: '【11・12月高知・足摺温泉郷の初冬黒潮絶景と満天星空】戻り鰹藁焼きタタキ＆幻の土佐あかうし会席を堪能する名宿5選',
      description: '11月から12月にかけて、四国最南端の足摺岬・足摺温泉郷は、初冬でも黒潮の暖流により温暖な気候に恵まれ、紺碧の太平洋が広がるダイナミックな断崖絶景と、澄み渡る夜空一面に広がる満天の星空・天の川の絶好の観賞シーズンを迎えます。弘法大師ゆかりの千二百年の歴史を誇る「あしずり温泉」は、美肌と保温に優れた名湯。夕食には脂がたっぷりと乗った冬の戻り鰹を豪快な炎で焼き上げる本場藁焼きタタキ、引き締まった身が絶品の清水サバ、赤身の芳醇な旨味が凝縮した幻の和牛「土佐あかうし」を味わう厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '四国最南端黒潮絶景露天＆満天星空・戻り鰹藁焼きタタキと幻の土佐あかうし',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-tateshina-onsen-yatsugatake-snow-shinshu-beef-stay',
      title: '【11・12月長野・蓼科温泉郷の初冬八ヶ岳雪景色と信玄の隠し湯】極上信州蓼科牛ステーキ＆信州サーモン・新蕎麦会席を愉しむ高原名宿5選',
      description: '11月から12月にかけて、長野県・八ヶ岳連峰の裾野に広がる蓼科高原・蓼科温泉郷は、静寂な白樺林やカラマツ林が初雪に彩られ、蓼科湖や御射鹿池（みしゃかいけ）が氷雪の神秘的な冬景色へと移ろう息を呑むような初冬を迎えます。戦国武将・武田信玄公が川中島の戦いで傷ついた兵士を癒やしたと伝わる「信玄の隠し湯」は、美肌効果と疲労回復に優れた名湯。夕食にはジューシーで上品な甘みの「信州蓼科牛」ステーキ、清流が育む「信州サーモン」、収穫したての香り高い信州新蕎麦を味わう厳選高原名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '八ヶ岳連峰初冬雪景色＆信玄隠し湯・極上信州蓼科牛ステーキと八ヶ岳新蕎麦',
      readTime: '6分'
    },
    {
      slug: 'winter-miyagi-sakunami-onsen-yukimi-sendai-beef-serinabe-stay',
      title: '【11・12月宮城・作並温泉＆仙台奥座敷の初冬広瀬川雪見露天と美女づくりの湯】極上A5仙台牛ステーキ＆名物仙台せり鍋会席を味わう老舗宿5選',
      description: '11月から12月にかけて、杜の都・仙台の奥座敷として古くから親しまれる作並温泉および秋保温泉エリアは、広瀬川や名取川の深い渓谷が初雪に彩られ、湯けむりが白く立ち上る情緒豊かな初冬の温泉情緒に包まれます。奈良時代に行基菩薩が発見し、歴代仙台藩主も湯治に訪れた作並温泉は、肌をしっとりと包み込む弱アルカリ性の「美女づくりの湯」。夕食には見事なサシが入った最高級A5仙台牛の陶板ステーキやしゃぶしゃぶ、そして冬の宮城を代表する風物詩・根っこまでシャキシャキと甘い名物「仙台せり鍋」を地酒とともに味わう厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '広瀬川渓谷初冬雪見露天＆美女づくりの湯・極上A5仙台牛と名物仙台せり鍋',
      readTime: '6分'
    },
    {
      slug: 'winter-hokkaido-akanko-onsen-lakeview-frost-flower-hokkaido-beef-stay',
      title: '【11・12月北海道・阿寒湖温泉の初冬フロストフラワーとアイヌ文化】極上道東海鮮蟹会席＆北海道黒毛和牛を愉しむ湖畔名宿5選',
      description: '11月から12月にかけて、道東・阿寒摩周国立公園の雄大な大自然に抱かれた阿寒湖温泉は、湖面が結氷を始める前の静謐な冬景色を迎え、氷点下15度以下の早朝には湖水が奇跡の結晶を作る「フロストフラワー（霜の花）」の幻想的な現象が観測される神秘の季節を迎えます。アイヌの伝統文化が息づく「阿寒湖アイヌコタン」の木彫り工芸や古式舞踊、湖畔を見下ろす展望雪見露天風呂、そしてオホーツク海から直送される冬の毛蟹やいくら、阿寒湖特産のワカサギ天ぷら、北海道産黒毛和牛の陶板ステーキを味わう厳選湖畔名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '阿寒湖初氷フロストフラワー＆アイヌ文化・極上オホーツク毛蟹と北海道牛',
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

  console.log('\n[Complete] Round 77 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
