const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateShimaPage } = require('./scripts/round70/generate_shima');
const { generateYuhigauraPage } = require('./scripts/round70/generate_yuhigaura');
const { generateHawaiPage } = require('./scripts/round70/generate_hawai');
const { generateAsamushiPage } = require('./scripts/round70/generate_asamushi');
const { generateIyaPage } = require('./scripts/round70/generate_iya');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 70: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round70_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateShimaPage(rawHotels.shima);
  generateYuhigauraPage(rawHotels.yuhigaura);
  generateHawaiPage(rawHotels.hawai);
  generateAsamushiPage(rawHotels.asamushi);
  generateIyaPage(rawHotels.iya);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-gunma-shima-onsen-shima-blue-sekizenkan-stay',
    'winter-kyoto-tango-yuhigaura-matsuba-crab-stay',
    'winter-tottori-hawai-onsen-togo-lake-matsuba-crab-stay',
    'winter-aomori-asamushi-onsen-mutsu-bay-maguro-stay',
    'winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay'
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
      slug: 'winter-gunma-shima-onsen-shima-blue-sekizenkan-stay',
      title: '【11・12月群馬・四万温泉の神秘の四万ブルーと千二百年霊泉】積善館の歴史情緒・上州牛会席＆清流雪見露天の宿5選',
      description: '11月から12月にかけて上州・群馬の奥座敷「四万温泉」は、四万川や奥四万湖が年間で最も澄み渡る奇跡のコバルトブルー「四万ブルー」を湛え、渓谷の木々が晩秋の落葉から初雪の白銀へと移ろう幽玄の季節を迎えます。「四万の病を癒やす霊泉」として開湯1200年の歴史を誇る名湯は、胃腸病や美肌に効能高い弱食塩・硫酸塩泉。日本最古の木造湯宿建築として名高い積善館をはじめ、四万川の渓流沿いに佇む自家源泉掛け流しの名旅館、甘みあふれる群馬の特選上州牛や冬の旬菜会席を堪能する極上宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '神秘の四万ブルー＆開湯1200年霊泉・積善館の歴史美・特選上州牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kyoto-tango-yuhigaura-matsuba-crab-stay',
      title: '【11・12月京都丹後・夕日ヶ浦温泉の日本海夕景と11月解禁松葉ガニ】本場間人ガニ・美人の湯＆海辺展望露天の宿5選',
      description: '11月6日のカニ漁解禁を迎えると、京都府北部・丹後半島の西端に位置する夕日ヶ浦温泉（浜詰温泉）は、一年で最も活気と美食の熱気に包まれる松葉ガニの最盛期を迎えます。「日本の夕陽百選」に選定された白砂青松の浜詰海岸に沈む黄金の夕日と荒波打ち寄せる日本海の絶景を眺めながら、緑のタグで知られる幻の最高峰「間人ガニ（たいざがに）」や本場丹後松葉ガニの刺し・焼き・茹で・鍋のフルコースを堪能。「美人の湯」と称されるトロリとした弱アルカリ性単純温泉で冷えた身体を芯から温める、初冬の厳選海辺旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '夕陽百選パノラマ＆11月解禁松葉ガニ・幻の間人ガニ・とろり美人の湯',
      readTime: '6分'
    },
    {
      slug: 'winter-tottori-hawai-onsen-togo-lake-matsuba-crab-stay',
      title: '【11・12月鳥取・はわい温泉の東郷湖上露天風呂と11月解禁鳥取松葉ガニ】鳥取和牛オレイン55・源泉かけ流し湖畔名宿5選',
      description: '11月から12月にかけて鳥取県中央部に位置する東郷湖畔の「はわい温泉・東郷温泉」は、静かな湖面から立ち上る幻想的な朝霧と湯けむりに包まれ、11月6日のカニ漁解禁とともに一年で最も贅沢な冬の味覚シーズンを迎えます。全国的にも極めて珍しい東郷湖上に浮かぶように突き出た「湖上露天風呂」に浸かり、湖水と一体となる奇跡のインフィニティ湯浴みを満喫。境港や泊港から直送される新鮮なタグ付き鳥取松葉ガニのフルコース、脂の融点が低くとろける最高峰ブランド「鳥取和牛オレイン55」のステーキを味わう、初冬の湖畔厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '日本唯一の湖上露天風呂＆11月解禁鳥取松葉ガニ・鳥取和牛オレイン55',
      readTime: '6分'
    },
    {
      slug: 'winter-aomori-asamushi-onsen-mutsu-bay-maguro-stay',
      title: '【11・12月青森・浅虫温泉の初冬陸奥湾絶景と開湯千二百年名湯】津軽海峡冬本マグロ・肉厚陸奥湾ホタテ＆津軽三味線響く宿5選',
      description: '11月から12月にかけて青森の奥座敷「浅虫温泉」は、初冠雪を戴く八甲田連峰を背に、冷たい潮風が吹き抜ける陸奥湾（青森湾）の海原と湯の島が水墨画のように浮かぶ風光明媚な初冬の季節を迎えます。平安時代に慈覚大師円仁が開湯したと伝わる名湯は、肌触り柔らかで体の芯まで温もりを届ける無色透明の弱アルカリ性単純温泉。津軽海峡の荒波で脂が乗り切った最高峰の「冬の本マグロ」、陸奥湾の恵みが凝縮した肉厚で甘みたっぷりの「活ホタテ」、毎夜ロビーに力強く響き渡る津軽三味線の生演奏、棟方志功ゆかりの芸術情緒を堪能する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '陸奥湾初冬パノラマ＆津軽海峡冬本マグロ・肉厚陸奥湾ホタテ・津軽三味線',
      readTime: '6分'
    },
    {
      slug: 'winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay',
      title: '【11・12月徳島・祖谷温泉の日本三大秘境初雪渓谷美と谷底露天風呂】特選阿波牛・名物祖谷そば＆ケーブルカーで行く秘湯の宿5選',
      description: '11月から12月にかけて四国の霊峰・剣山山系の深山幽谷に抱かれた「徳島・祖谷渓（いやけい）＆大歩危峡（おおぼけきょう）」は、日本三大秘境にふさわしい静寂と、初冠雪の白銀に化粧されたV字渓谷の圧倒的な自然美に包まれます。断崖絶壁から専用ケーブルカーで高低差170mの谷底へ下り、エメラルドグリーンの祖谷川の清流すれすれで浸かる自噴掛け流しの単純硫黄泉。スロープカーで登る天空露天風呂、とろける旨味の極上黒毛和牛「阿波牛」の陶板焼き、香り高い名物「祖谷そば」、囲炉裏の炭火で香ばしく焼き上げる郷土の伝統料理「でこまわし」を満喫する至高の秘湯宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '日本三大秘境初雪渓谷＆ケーブルカー谷底露天・特選阿波牛・手打ち祖谷そば',
      readTime: '6分'
    }
  ];

  const gridAnchor = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';

  for (const item of newFeatures) {
    // 1. Add to featureArticles if featureArticles array exists
    if (featuresContent.includes('export const featureArticles = [')) {
      if (!featuresContent.includes(item.slug)) {
        const codeItem = `    {
      slug: '${item.slug}',
      title: ${JSON.stringify(item.title)},
      description: ${JSON.stringify(item.description)},
      category: ${JSON.stringify(item.category)},
      image: ${JSON.stringify(item.image)},
      badge: ${JSON.stringify(item.badge)},
      readTime: ${JSON.stringify(item.readTime)}
    },`;
        featuresContent = featuresContent.replace(
          'export const featureArticles = [',
          `export const featureArticles = [\n${codeItem}`
        );
        console.log(`Added featureArticles item: ${item.slug}`);
      }
    }

    // 2. Add to the JSX grid list if present
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

  console.log('\n[Complete] Round 70 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
