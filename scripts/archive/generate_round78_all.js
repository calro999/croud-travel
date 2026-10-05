const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateHokkaidoOtaruPage } = require('./scripts/round78/generate_hokkaido_otaru');
const { generateNagasakiHiradoPage } = require('./scripts/round78/generate_nagasaki_hirado');
const { generateFukuiWakasaPage } = require('./scripts/round78/generate_fukui_wakasa');
const { generateKumamotoHitoyoshiPage } = require('./scripts/round78/generate_kumamoto_hitoyoshi');
const { generateShizuokaAtagawaPage } = require('./scripts/round78/generate_shizuoka_atagawa');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 78: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round78_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateHokkaidoOtaruPage(rawHotels.hokkaido_otaru_asarigawa);
  generateNagasakiHiradoPage(rawHotels.nagasaki_hirado);
  generateFukuiWakasaPage(rawHotels.fukui_wakasa_mikatagoko);
  generateKumamotoHitoyoshiPage(rawHotels.kumamoto_hitoyoshi);
  generateShizuokaAtagawaPage(rawHotels.shizuoka_atagawa);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay',
    'winter-nagasaki-hirado-onsen-kue-hirame-hirado-beef-stay',
    'winter-fukui-wakasa-mikatagoko-onsen-fugu-echizen-crab-stay',
    'winter-kumamoto-hitoyoshi-onsen-kumagawa-mist-wagyu-ayu-stay',
    'winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay'
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
      slug: 'winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay',
      title: '【11・12月北海道・小樽の青の運河イルミネーションと朝里川雪見露天】小樽前浜極上寿司＆道産牛会席を味わう冬の運河・温泉名宿5選',
      description: '11月から12月にかけて、小樽は初雪が舞い散る運河沿いに約1万個の青色LEDが輝く冬の風物詩「小樽ゆき物語・青の運河」が開幕し、1年で最もロマンチックな季節を迎えます。明治・大正期の石造り倉庫群が雪化粧をまとい、ガス灯が揺れるノスタルジックな街並み散策の後は、小樽港で早朝水揚げされた冬の極上ウニ、活ホタテ、蝦夷前寿司、そして小樽奥座敷・朝里川温泉の森林に包まれた雪見露天風呂を満喫。日本海のパノラマ絶景を望む岬のホテルから歴史的風情が漂う運河畔の名宿まで、初冬の小樽を心ゆくまで味わい尽くす厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '小樽ゆき物語青の運河イルミネーション＆小樽前浜極上寿司・朝里川雪見露天',
      readTime: '6分'
    },
    {
      slug: 'winter-nagasaki-hirado-onsen-kue-hirame-hirado-beef-stay',
      title: '【11・12月長崎・平戸温泉郷の初冬黒潮絶景と天然クエ＆寒ヒラメ】幻の高級魚クエ鍋＆特選平戸和牛会席を堪能する城下町名宿5選',
      description: '11月から12月にかけて、長崎県北西端に浮かぶ歴史と異国情緒の島・平戸温泉郷は、日本屈指の激流「平戸瀬戸」で身が引き締まった冬の味覚の王様「天然クエ（アラ）」と「寒ヒラメ」が最盛期を迎えます。日本初の西洋貿易港として栄えたオランダ商館跡やカトリック教会、青い海を見下ろす平戸城の歴史散策を楽しみ、夜は美肌効果抜群のナトリウム炭酸水素塩泉に浸かりながら満天の星と漁火を眺める至福の時間。とろける脂が絶品の幻の高級魚クエ鍋、透き通るヒラメの姿造り、そして全国のブランド牛のルーツとも称される特選平戸和牛の陶板ステーキを味わう厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '平戸瀬戸黒潮絶景＆天然クエ鍋・寒ヒラメ活造り・特選平戸和牛と美肌重曹泉',
      readTime: '6分'
    },
    {
      slug: 'winter-fukui-wakasa-mikatagoko-onsen-fugu-echizen-crab-stay',
      title: '【11・12月福井・若狭三方五湖＆敦賀温泉郷の初冬レイクビューと若狭ふぐ】越前蟹・名物焼き鯖＆敦賀港冬海鮮会席を愉しむ湖畔・海辺名宿5選',
      description: '11月から12月にかけて、国の名勝・三方五湖と敦賀湾を擁する福井県若狭エリアは、日本最北限の冷たい荒波で鍛え抜かれた冬の美食の最高峰「若狭ふぐ」が本格解禁を迎え、11月6日の越前蟹解禁とともに美食家を唸らせる黄金の季節に突入します。水質や水深が異なる五つの湖が初冬の澄んだ光に染まる神秘的な湖畔風景、レインボーライン山頂公園からの360度パノラマ絶景、そして北陸新幹線敦賀開業でぐっと身近になった名湯露天風呂。本場の若狭ふぐフルコース（てっさ・てっちり・唐揚げ・ひれ酒）や敦賀港直送の越前蟹、若狭名物の焼き鯖を堪能する厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '三方五湖初冬レイクビュー＆若狭ふぐフルコース・越前蟹・敦賀港冬海鮮会席',
      readTime: '6分'
    },
    {
      slug: 'winter-kumamoto-hitoyoshi-onsen-kumagawa-mist-wagyu-ayu-stay',
      title: '【11・12月熊本・人吉温泉郷の球磨川初冬朝霧絶景と美肌名湯】名物子持ち落ち鮎塩焼き＆極上球磨黒毛和牛・球磨焼酎会席を味わう老舗宿5選',
      description: '11月から12月にかけて、相良700年の城下町の歴史が息づく熊本県南部の人吉盆地は、盆地特有の冷え込みによって街全体と日本三急流・球磨川が深い霧に包まれる「朝霧の都」の幻想的なベストシーズンを迎えます。朝日に照らされて霧が晴れゆく幽玄な球磨川の情景、国宝・青井阿蘇神社の厳かな歴史散策、そして化粧水のように肌を包み込む弱アルカリ性炭酸水素塩泉の名湯。夕食には晩秋から初冬に旨味が凝縮する名物「子持ち落ち鮎の塩焼き」やうるか、とろける霜降りの極上球磨黒毛和牛、500年の伝統を誇る米焼酎「球磨焼酎」のぬる燗を味わう厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '球磨川初冬朝霧絶景＆相良700年城下町・子持ち落ち鮎塩焼き・球磨黒毛和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay',
      title: '【11・12月静岡・熱川温泉＆東伊豆の湯けむりと水平線日の出露天】名物地金目鯛姿煮＆伊豆牛石焼きステーキを満喫するオーシャンビュー名宿5選',
      description: '11月から12月にかけて、伊豆半島東海岸の熱川温泉は、約100度の高温泉が吹き出す温泉櫓から白い湯けむりが温泉街一面に立ち上り、初冬の温泉情緒が最高潮を迎えます。相模灘と正面に浮かぶ伊豆大島の水平線から昇る劇的な日の出を望む絶景露天風呂、南国情緒と温もりあふれる熱川バナナワニ園や温泉玉子作り体験。そして冬に向けて最も脂が乗り旨味が凝縮する名物「地金目鯛」のこってり甘辛姿煮やしゃぶしゃぶ、ジューシーな伊豆牛ステーキ、伊勢海老を味わう厳選オーシャンビュー名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '東伊豆湯けむり櫓＆水平線日の出オーシャン露天・極上地金目鯛姿煮と伊豆牛',
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

  console.log('\n[Complete] Round 78 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
