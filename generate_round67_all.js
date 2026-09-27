const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateSengokuharaPage } = require('./scripts/round67/generate_sengokuhara');
const { generateChuzenjiPage } = require('./scripts/round67/generate_chuzenji');
const { generateMikuniPage } = require('./scripts/round67/generate_mikuni');
const { generateKatsuuraPage } = require('./scripts/round67/generate_katsuura');
const { generateYudanakaPage } = require('./scripts/round67/generate_yudanaka');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 67: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round67_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateSengokuharaPage(rawHotels.sengokuhara);
  generateChuzenjiPage(rawHotels.chuzenji);
  generateMikuniPage(rawHotels.mikuni);
  generateKatsuuraPage(rawHotels.katsuura);
  generateYudanakaPage(rawHotels.yudanaka);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-kanagawa-hakone-sengokuhara-onsen-susuki-nigori-stay',
    'winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay',
    'winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay',
    'winter-wakayama-nanki-katsuura-onsen-tuna-cave-bath-stay',
    'winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay'
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
      slug: 'winter-kanagawa-hakone-sengokuhara-onsen-susuki-nigori-stay',
      title: '【11・12月箱根仙石原温泉の初冬ススキ絶景と白濁にごり湯】富士山望む露天風呂・足柄牛ステーキ＆美術館巡りの宿5選',
      description: '11月下旬から12月にかけて箱根・仙石原高原は、黄金色に波打つ一面のススキ草原が冬の銀白色へと移ろい、凛とした初冬の静寂に包まれます。大涌谷の噴煙から引湯される濃厚な乳白色の酸性硫酸塩泉（美肌のにごり湯）、客室露天や展望大浴場から望む富士山の雪化粧、近隣のポーラ美術館や箱根ラリック美術館を巡るアートな休日、地元神奈川が誇る極上ブランド牛「相州牛・足柄牛」の鉄板焼きステーキや旬の箱根山麓野菜を味わう至高の仙石原名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      badge: '初冬ススキ銀白＆大涌谷白濁にごり湯富士見露天足柄牛ステーキ',
      readTime: '6分'
    },
    {
      slug: 'winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay',
      title: '【11・12月奥日光中禅寺温泉の初冬中禅寺湖と男体山雪絶景】乳白色硫黄泉露天風呂・極上とちぎ和牛＆日光湯波会席の宿5選',
      description: '11月から12月にかけて栃木県・奥日光は、標高2,486mの霊峰・男体山が初雪の白銀を纏い、湖面標高1,269mの澄み切った中禅寺湖が静寂の鏡のように冬景色を映し出します。日光開山の祖・勝道上人ゆかりの源泉・日光湯元から約12kmを引湯する硫黄泉は、湧出時はエメラルドグリーン、空気に触れて神秘的な乳白色へと変化する美肌の名湯。冬の湖畔を眺めながら温まる雪見露天風呂、とろけるような霜降りの「とちぎ和牛」サーロイン、日光伝統の生湯波（ゆば）会席や奥日光イワナを堪能する極上の奥日光名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '男体山初雪＆中禅寺湖水鏡日光湯元引湯乳白色硫黄泉とちぎ和牛生湯波',
      readTime: '6分'
    },
    {
      slug: 'winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay',
      title: '【11・12月越前三国温泉の解禁越前がにと東尋坊冬絶景】日本海パノラマ露天風呂・本場越前蟹フルコース＆若狭牛会席の宿5選',
      description: '11月6日のズワイガニ漁解禁とともに、福井県・三国港は全国の美食家が押し寄せる「越前がに」の最高潮シーズンを迎えます。三国港で水揚げされ黄色いタグが付けられた越前がには、皇室献上ガニとしても名高い冬の日本海の至宝。冬の荒波が打ち寄せる奇岩・東尋坊のダイナミックな景観、日本海に沈む夕日と水平線を望む三国温泉の展望露天風呂、職人が絶妙な塩加減で茹で上げる本場越前がに、花咲くカニ刺し、甲羅焼き味噌、福井の銘柄牛「若狭牛」のステーキを味わう、冬の贅を尽くした海辺の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '解禁黄色タグ越前がに＆東尋坊荒波日本海夕日露天若狭牛会席',
      readTime: '6分'
    },
    {
      slug: 'winter-wakayama-nanki-katsuura-onsen-tuna-cave-bath-stay',
      title: '【11・12月南紀勝浦温泉の太平洋大洞窟露天風呂と初冬の熊野古道】勝浦港直送生マグロ尽くし・極上熊野牛ステーキ会席の宿5選',
      description: '11月から12月にかけて和歌山県・紀伊半島の南端に位置する勝浦温泉は、澄み切った太平洋の水平線から昇る朝日の絶景と、世界遺産・熊野古道（大門坂・那智の滝・熊野那智大社）の神聖な祈りの季節を迎えます。太平洋の荒波が長い年月をかけて穿った巨大海蝕洞窟に湧き出る名湯「忘帰洞」や海と一体化する波打ち際露天風呂、日本一の水揚げ高を誇る勝浦漁港直送の完全非冷凍「天然生マグロ」の赤身・中トロ・大トロ尽くし、世界遺産の地で育まれた霜降り「熊野牛」のサーロインを味わう至高の南紀海辺名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '太平洋大洞窟忘帰洞＆熊野古道那智の滝勝浦港天然生マグロ熊野牛',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay',
      title: '【11・12月信州湯田中渋温泉郷の雪中スノーモンキーと開湯1350年名湯】登録有形文化財風呂・信州プレミアム牛ステーキ＆雪見酒の宿5選',
      description: '11月下旬から12月にかけて長野県・北信濃の志賀高原山麓に広がる湯田中渋温泉郷は、初雪が舞い始め、世界で唯一温泉に入るニホンザルが見られる「地獄谷野猿公苑（スノーモンキー）」の本格シーズンが開幕します。開湯から1350年以上の歴史を誇る湯田中温泉・渋温泉は、石畳の小径に湯煙が立ち上り、国の登録有形文化財に指定された壮麗な木造建築「桃山風呂」や9つの外湯めぐりが情緒豊か。湯上がりに味わう「信州プレミアム牛肉」の陶板ステーキや信州サーモン、名物信州そば、北信流の雪見地酒を堪能する至福の温泉旅名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '雪中地獄谷スノーモンキー＆登録有形文化財桃山風呂信州プレミアム牛',
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

  console.log('\n[Complete] Round 67 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
