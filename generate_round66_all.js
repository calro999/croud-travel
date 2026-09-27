const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateNisekoPage } = require('./scripts/round66/generate_niseko');
const { generateOirasePage } = require('./scripts/round66/generate_oirase');
const { generateTobaPage } = require('./scripts/round66/generate_toba');
const { generateYunohanaPage } = require('./scripts/round66/generate_yunohana');
const { generateKotohiraPage } = require('./scripts/round66/generate_kotohira');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 66: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round66_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateNisekoPage(rawHotels.niseko);
  generateOirasePage(rawHotels.oirase);
  generateTobaPage(rawHotels.toba);
  generateYunohanaPage(rawHotels.yunohana);
  generateKotohiraPage(rawHotels.kotohira);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hokkaido-niseko-onsen-powder-snow-yotei-stay',
    'winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay',
    'winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay',
    'winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay',
    'winter-kagawa-kotohira-onsen-konpira-olive-beef-stay'
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
      slug: 'winter-hokkaido-niseko-onsen-powder-snow-yotei-stay',
      title: '【11・12月ニセコ温泉郷の初雪パウダースノーと羊蹄山絶景】白銀の蝦夷富士望む露天風呂・道産黒毛和牛＆冬の北海味覚ディナーの宿5選',
      description: '11月下旬から12月にかけて北海道・ニセコ山麓は、世界中のスキーヤーや旅人を魅了する超微粒子の初雪「パウダースノー（Japow）」に包まれ、雄大な羊蹄山（蝦夷富士）が純白の雪化粧を纏います。白銀の原生林に抱かれた源泉掛け流しの雪見露天風呂、暖炉が揺らめく洗練されたラグジュアリーホテル、北海道産白老牛や十勝ハーブ牛の鉄板焼き、近海で獲れた冬の活毛ガニやウニ、タラバガニを贅沢に味わう至福の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初雪パウダースノー＆羊蹄山蝦夷富士絶景露天道産黒毛和牛活毛ガニ',
      readTime: '6分'
    },
    {
      slug: 'winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay',
      title: '【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選',
      description: '11月から12月にかけて青森県・十和田八甲田エリアは、奥入瀬渓流の滝が凍り始める神秘的な「氷瀑（ひょうばく）」や、八甲田山のブナ林やアオモリトドマツが純白の雪と氷を纏う「初期樹氷（スノーモンスター）」の季節を迎えます。千人風呂で知られる酸ヶ湯や足元湧出の蔦温泉、白銀のブナ原生林を望む八甲田リゾートの白濁硫黄泉、雪見露天風呂に浸かり、青森が誇る極上銘柄牛「倉石牛」や陸奥湾直送の甘みたっぷりの肉厚ホタテ、地酒を味わう至極の秘湯宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '奥入瀬氷瀑ライトアップ＆八甲田山樹氷白濁秘湯露天青森倉石牛ホタテ',
      readTime: '6分'
    },
    {
      slug: 'winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay',
      title: '【11・12月鳥羽温泉郷の旬を迎える伊勢海老と的矢牡蠣】鳥羽湾パノラマ絶景露天風呂・極上松阪牛ステーキ＆答志島トロさわら会席の宿5選',
      description: '11月から12月にかけて三重県・伊勢志摩の鳥羽温泉郷は、秋の禁漁明けから本番を迎える冬の二大味覚「本場伊勢海老」と「的矢牡蠣（まとやかき）」の最高峰シーズンに突入します。波静かな鳥羽湾に浮かぶ島々や朝焼けパノラマを望む絶景展望露天風呂、ミキモト真珠パウダーを配合したパールオーロラ風呂、一本釣りで水揚げされる脂の乗った「答志島トロさわら」の炙り、世界に誇る銘柄牛「松阪牛」の陶板焼きやすき焼きを心ゆくまで堪能する至福の海辺名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '解禁本場伊勢海老＆的矢牡蠣鳥羽湾パノラマ露天極上松阪牛トロさわら',
      readTime: '6分'
    },
    {
      slug: 'winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay',
      title: '【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選',
      description: '11月から12月にかけて京都の奥座敷・亀岡盆地は、冷え込みとともに盆地全体が真っ白な霧の海に沈む幻想的な「丹波霧（かめおか雲海）」のシーズンを迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、初冬の里山に囲まれた静寂のプライベート空間、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと深いコクを誇る「丹波牛」の鉄板焼きや陶板ステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する大人の隠れ名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '丹波霧亀岡雲海＆京奥座敷の薬湯露天本場猪肉ぼたん鍋最高級丹波牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kagawa-kotohira-onsen-konpira-olive-beef-stay',
      title: '【11・12月ことひら温泉郷のこんぴら参りと讃岐富士冬絶景】初冬の金刀比羅宮門前名湯・讃岐オリーブ牛ステーキ＆本場手打ち讃岐うどん会席の宿5選',
      description: '11月から12月にかけて香川県・琴平町は、空気が澄み渡り讃岐富士（飯野山）や讃岐平野の美しい冬景色が広がる、年間で最も快適に金刀比羅宮の石段（御本宮785段・奥社1368段）を登れる参拝のベストシーズンを迎えます。参拝後にじんわりと足の疲れを癒やす門前町の天然温泉露天風呂、初冬の澄んだ夜空を仰ぐ展望露天、小豆島のオリーブ粕で育った香川最高峰の黒毛和牛「讃岐オリーブ牛」の鉄板焼きや陶板ステーキ、伊吹島産いりこ出汁が香る本場手打ち讃岐うどん、瀬戸内の冬真鯛を堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: 'こんぴら参り初冬石段＆讃岐富士展望露天讃岐オリーブ牛手打ちうどん',
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

  console.log('\n[Complete] Round 66 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
