const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateKasumiPage } = require('./scripts/round69/generate_kasumi');
const { generateAkayuPage } = require('./scripts/round69/generate_akayu');
const { generateYunoyamaPage } = require('./scripts/round69/generate_yunoyama');
const { generateKatayamazuPage } = require('./scripts/round69/generate_katayamazu');
const { generateAshinomakiPage } = require('./scripts/round69/generate_ashinomaki');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 69: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round69_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateKasumiPage(rawHotels.kasumi);
  generateAkayuPage(rawHotels.akayu);
  generateYunoyamaPage(rawHotels.yunoyama);
  generateKatayamazuPage(rawHotels.katayamazu);
  generateAshinomakiPage(rawHotels.ashinomaki);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay',
    'winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay',
    'winter-mie-yunoyama-onsen-gozaisho-snow-sohei-nabe-stay',
    'winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay',
    'winter-fukushima-ashinomaki-onsen-okawa-valley-snow-stay'
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
      slug: 'winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay',
      title: '【11・12月兵庫・香住温泉の初冬日本海と最高峰ブランド蟹】本場柴山ガニ＆香住松葉ガニ・但馬牛ステーキ＆海辺露天の宿5選',
      description: '11月6日のカニ漁解禁を迎えると、兵庫県但馬地方の日本海に面した香住海岸（香住港・柴山港）は、一年で最も活気あふれる松葉ガニの最高峰シーズンを迎えます。厳しい選別基準で「ピンクタグ」が付けられるブランド蟹の頂点「柴山がに」、香住港に水揚げされる新鮮な「香住松葉がに」、濃厚な内子と外子を味わう親ガニ「セコガニ」、そして最高峰黒毛和牛「但馬牛」の贅沢な饗宴。海辺に湧く塩化物温泉で潮風を感じながら身体の芯まで温まり、荒波打ち寄せる山陰海岸ジオパークの雄大な冬景色と極上のカニフルコースを満喫する至高の宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '最高峰柴山ガニ＆香住松葉ガニ・但馬牛ステーキ・香住温泉',
      readTime: '6分'
    },
    {
      slug: 'winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay',
      title: '【11・12月山形・赤湯温泉の置賜盆地雲海と開湯920年名湯】特選米沢牛すき焼き・日本最古級赤湯ワイン＆自家源泉掛け流しの宿5選',
      description: '11月から12月にかけて山形県置賜地方の赤湯温泉は、晩秋の澄み切った冷気の中で置賜盆地全体を真っ白な霧が覆う幻想的な「白竜湖の雲海」が発生し、奥羽山脈の山々が初冠雪で輝く美しい季節を迎えます。寛治7年（1093年）開湯、源義家の弟・義綱が発見したと伝わる名湯は、湯上がりに肌がしっとりと潤う弱アルカリ性硫黄・塩化物泉。日本三大和牛と称される最高峰「米沢牛」のとろける霜降りすき焼きやステーキ、明治時代から続く酒井ワイナリーなど日本屈指の老舗ワイナリーが醸す赤湯ワイン、山形新幹線赤湯駅からの抜群のアクセスを誇る名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '置賜盆地雲海＆開湯920年上杉御湯・特選A5米沢牛・老舗赤湯ワイン',
      readTime: '6分'
    },
    {
      slug: 'winter-mie-yunoyama-onsen-gozaisho-snow-sohei-nabe-stay',
      title: '【11・12月三重・湯の山温泉の御在所岳初雪樹氷と開湯1300年美肌湯】名物僧兵鍋・菰野豚＆伊勢湾望む絶景露天の宿5選',
      description: '11月下旬から12月にかけて鈴鹿山脈の主峰・御在所岳（標高1,212m）は、山上公園に白銀の初雪が舞い降り、条件が揃えば幻想的な「樹氷（スノーモンスター）」や青白く輝く「氷瀑」が出現します。麓の湯の山温泉は養老2年（718年）開湯、傷ついた鹿が癒やした「鹿の湯」伝説が残るアルカリ性単純温泉。三岳寺の僧兵たちにちなんだ滋養強壮満点の郷土鍋「名物僧兵鍋（猪肉・鶏肉・特製味噌仕立て）」、鈴鹿山麓の清流で育つ甘みたっぷりの「菰野豚（こものぶた）」、露天風呂から遠く伊勢湾や名古屋市街の夜景を見渡す絶景名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '御在所岳初雪樹氷＆開湯1300年鹿の湯・名物僧兵鍋・菰野豚・伊勢湾展望',
      readTime: '6分'
    },
    {
      slug: 'winter-ishikawa-katayamazu-onsen-hakusan-kano-crab-stay',
      title: '【11・12月石川・加賀片山津温泉の柴山潟と霊峰白山初冠雪】11月解禁加能ガニ・香箱ガニ＆塩化物強塩泉ポカポカ温まりの宿5選',
      description: '11月から12月にかけて石川県加賀市の片山津温泉は、柴山潟の穏やかな水面に初冠雪で純白に輝く霊峰白山連峰が鏡のように映り込む、北陸屈指の絶景パノラマが広がります。承応2年（1653年）発見、湖底から湧き出る塩化物強塩泉は「熱の湯」とも呼ばれ、湯冷めしにくく冬の身体を芯まで温める名湯。11月上旬に解禁される石川県の誇る青タグ付きブランドズワイガニ「加能ガニ」、内子と外子がぎっしり詰まった冬の至宝「香箱ガニ（こうばこがに）」、脂の乗った寒ブリや能登牛を堪能する湖畔の厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '柴山潟白山初冠雪＆11月解禁加能ガニ香箱ガニ・塩化物強塩泉熱の湯',
      readTime: '6分'
    },
    {
      slug: 'winter-fukushima-ashinomaki-onsen-okawa-valley-snow-stay',
      title: '【11・12月福島・会津芦ノ牧温泉の大川渓谷初雪絶景と渓流露天】会津馬刺し・極上会津牛＆源泉かけ流し湯めぐりの宿5選',
      description: '11月から12月にかけて福島県・会津若松の奥座敷「会津芦ノ牧温泉」は、大川（阿賀川）が何万年もの歳月をかけて刻んだ深い渓谷美「大川羽鳥県立自然公園」が初雪で白銀に化粧され、水墨画のような幽玄の冬景色が広がります。千数百年の昔、行基菩薩が開湯したと伝わる名湯は、渓谷の岩肌から自噴する弱アルカリ性低張性高温泉。渓谷に突き出すような迫力満点の棚田風露天風呂や空中露天風呂、極上の赤身が舌先でとろける本場「会津馬刺し」、福島県産黒毛和牛「会津牛」の陶板焼き、会津地酒の初しぼりを味わう厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '大川渓谷初雪絶景＆棚田風露天風呂・本場会津馬刺し・極上会津牛',
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

  console.log('\n[Complete] Round 69 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
