const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateKusatsuPage } = require('./scripts/round64/generate_kusatsu');
const { generateBeppuPage } = require('./scripts/round64/generate_beppu');
const { generateZaoPage } = require('./scripts/round64/generate_zao');
const { generateAtamiPage } = require('./scripts/round64/generate_atami');
const { generateNarukoPage } = require('./scripts/round64/generate_naruko');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 64: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round64_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateKusatsuPage(rawHotels.kusatsu);
  generateBeppuPage(rawHotels.beppu);
  generateZaoPage(rawHotels.zao);
  generateAtamiPage(rawHotels.atami);
  generateNarukoPage(rawHotels.naruko);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay',
    'winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay',
    'winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay',
    'winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay',
    'winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay'
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
      slug: 'winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay',
      title: '【11・12月草津温泉の冬名湯と湯畑ライトアップ】湯畑の冬幻想イルミ・湯けむり露天と極上上州牛すき焼き・群馬地酒の宿5選',
      description: '11月から12月にかけて日本屈指の名湯・草津温泉は湯畑から立ち上る真っ白な湯煙と初冬の幻想的なイルミネーションに包まれます。標高1,200mの澄んだ冷気の中で楽しむ酸性・含硫黄・アルミニウム・硫酸塩・塩化物温泉の圧倒的な温まり効果、天下の名湯「湯畑源泉」「万代鉱源泉」「西の河原源泉」の湯巡り、最高級「上州牛」のすき焼きや陶板ステーキ、群馬の銘酒を堪能する極上名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '草津湯畑冬イルミ＆万代鉱白旗名湯巡り極上上州牛すき焼き',
      readTime: '6分'
    },
    {
      slug: 'winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay',
      title: '【11・12月別府・鉄輪温泉の冬湯けむりと海鮮美食】初冬の別府湾絶景露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席の宿5選',
      description: '11月から12月にかけて冷気により街一面の湯けむりが最も美しく立ち昇る日本一の湧出量を誇る大分「別府温泉郷」と湯治情緒漂う「鉄輪（かんなわ）温泉」。海抜ゼロメートルから高原まで広がる雄大な別府湾の初冬の朝焼けを望む絶景露天風呂、伝統の地獄蒸し料理、大分が誇る豊後水道の荒波で育った「関アジ・関サバ」の活造りや「豊後牛（おおいた和牛）」の極上ステーキを堪能する至高の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '別府鉄輪湯けむり夜景＆別府湾絶景露天豊後牛関アジ関サバ',
      readTime: '6分'
    },
    {
      slug: 'winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay',
      title: '【11・12月山形蔵王温泉の冬名湯と白銀の樹氷】初雪の強酸性硫黄泉露天と蔵王ロープウェイ・極上山形牛すき焼き＆郷土芋煮会席の宿5選',
      description: '11月下旬から12月にかけて奥羽山脈の主峰・蔵王連峰に雪が降り積もり、冬の奇跡「樹氷（スノーモンスター）」が徐々に姿を現し始める山形「蔵王温泉」。開湯1900年の歴史を誇るpH1.5前後の強酸性白濁硫黄泉は肌を滑らかにし血行を促進する「美人づくりの湯」。雪景色に包まれた野趣あふれる露天風呂、とろける肉質のブランド黒毛和牛「山形牛」「蔵王牛」のすき焼きや名物山形芋煮会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '蔵王強酸性白濁硫黄泉＆初雪樹氷ロープウェイ山形牛芋煮',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay',
      title: '【11・12月熱海温泉の冬花火と相模湾絶景露天】澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席の宿5選',
      description: '11月から12月にかけて澄み切った冬の夜空に大輪の花火が咲き誇る伝統の「熱海海上花火大会」と、都心から新幹線で最速35分の名湯「熱海温泉」。すり鉢状の熱海湾に響き渡る花火の轟音を客室や露天風呂から間近に体感できる贅沢なロケーション。相模湾を一望する絶景インフィニティ露天風呂、徳川家康公も愛した名湯、脂の乗った伊豆名物「金目鯛の姿煮」や新鮮な鮑・伊勢海老会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '熱海海上花火冬大会＆相模湾インフィニティ露天金目鯛姿煮',
      readTime: '6分'
    },
    {
      slug: 'winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay',
      title: '【11・12月宮城鳴子温泉郷の冬湯治と雪見露天】多彩な源泉めぐりと初冬の鳴子峡・極上仙台牛すき焼き＆奥羽郷土会席の宿5選',
      description: '11月から12月にかけて鳴子峡に初雪が舞い、奥羽山脈の山懐に静寂が訪れるみちのく随一の名湯「鳴子温泉郷」。日本に存在する11の泉質のうち実に9種類が集まる奇跡の温泉地で、乳白色・エメラルドグリーン・黒湯など多彩な源泉掛け流しの雪見風呂を堪能。手削りの鳴子こけしが並ぶノスタルジックな湯治街の散策、最高級A5ランク「仙台牛」のすき焼きや陶板焼き、名物栗だんごや奥羽の山里会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '鳴子9泉質巡り雪見露天＆初雪の鳴子峡最高峰A5仙台牛栗だんご',
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

  console.log('\n[Complete] Round 64 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
