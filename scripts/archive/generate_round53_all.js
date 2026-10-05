const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateFukuokaPage } = require('./scripts/round53/generate_fukuoka');
const { generateHuistenboschPage } = require('./scripts/round53/generate_huistenbosch');
const { generateIseshimaPage } = require('./scripts/round53/generate_iseshima');
const { generateNozawaPage } = require('./scripts/round53/generate_nozawa');
const { generateMisasaPage } = require('./scripts/round53/generate_misasa');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 53: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round53_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateFukuokaPage(rawHotels.fukuoka);
  generateHuistenboschPage(rawHotels.huistenbosch);
  generateIseshimaPage(rawHotels.iseshima);
  generateNozawaPage(rawHotels.nozawa);
  generateMisasaPage(rawHotels.misasa);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-fukuoka-hakata-christmas-advent-gourmet-stay',
    'winter-nagasaki-huistenbosch-christmas-lights-stay',
    'winter-iseshima-ujibashi-sunrise-matoya-oyster-stay',
    'winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay',
    'winter-tottori-misasa-onsen-matsuba-crab-stay'
  ];

  for (const slug of slugs) {
    const filePath = path.join(__dirname, 'src', 'app', slug, 'page.tsx');
    const content = fs.readFileSync(filePath, 'utf8');
    // Strip code and HTML tags to count raw text length
    const textOnly = content
      .replace(/import[\s\S]*?from[\s\S]*?;/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]+\}/g, ' ')
      .replace(/[a-zA-Z0-9_\-\.\:\/]+/g, ' ')
      .replace(/\s+/g, '');
    console.log(`- ${slug}: Raw Text Length = ${textOnly.length} characters (Requirement: >= 3,000)`);
    if (textOnly.length < 3000) {
      console.warn(`WARNING: ${slug} has less than 3,000 characters!`);
    } else {
      console.log(`  => PASS (Exceeds 3,000 characters)`);
    }
  }

  // 3. Update src/app/features/page.tsx
  console.log('\n[Step 3] Updating src/app/features/page.tsx...');
  const featuresPagePath = path.join(__dirname, 'src', 'app', 'features', 'page.tsx');
  let featuresContent = fs.readFileSync(featuresPagePath, 'utf8');

  const newFeatures = [
    {
      slug: 'winter-fukuoka-hakata-christmas-advent-gourmet-stay',
      title: '【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選',
      description: '11月中旬から博多駅・天神・中洲が煌めく「福岡クリスマスアドベント」！限定マグカップのホットワインと冬の博多名物（もつ鍋・水炊き）、天然温泉付きホテルステイ。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '福岡クリスマス＆もつ鍋温泉',
      readTime: '6分'
    },
    {
      slug: 'winter-nagasaki-huistenbosch-christmas-lights-stay',
      title: '【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選',
      description: '11月上旬から開幕する世界最大級1300万球の祭典「光の街のクリスマス」！運河アイススケートや花火、直営クラシックホテル・温泉リゾートで過ごす特別な冬休み。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=800&q=80',
      badge: 'ハウステンボス1300万球イルミ',
      readTime: '6分'
    },
    {
      slug: 'winter-iseshima-ujibashi-sunrise-matoya-oyster-stay',
      title: '【11・12月伊勢神宮の冬至・年越し参拝】宇治橋の朝日絶景と伊勢志摩の冬の至宝・的矢かき＆伊勢海老宿5選',
      description: '冬至前後に宇治橋大鳥居の中央から昇る奇跡の朝日！年末のお礼参りと11月解禁の「的矢かき」「活伊勢海老」「松阪牛」、鳥羽湾の絶景露天風呂に癒やされる冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '伊勢神宮冬至朝日＆的矢かき',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay',
      title: '【12月開幕！野沢温泉パウダースノー】天然雪100%ゲレンデと名物13外湯めぐり＆信州牛美食宿5選',
      description: '12月上旬オープン！天然雪100%のパウダースノーゲレンデと、江戸時代から湯仲間が守る名物「13の外湯めぐり」、冬の風物詩・野沢菜本漬けに寛ぐ老舗温泉宿。',
      category: '12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '野沢温泉パウダー＆13外湯',
      readTime: '6分'
    },
    {
      slug: 'winter-tottori-misasa-onsen-matsuba-crab-stay',
      title: '【11月解禁！鳥取松葉ガニと三朝温泉】日本海直送タグ付き活ガニと世界屈指のラジウム名湯宿5選',
      description: '11月6日解禁！境港直送ブランドタグ付き活松葉ガニフルコース！世界屈指の高濃度ラジウム泉・三朝温泉の奇跡の温浴効果と国登録有形文化財宿で寛ぐ至高の冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '鳥取タグ付き松葉ガニ＆三朝温泉',
      readTime: '6分'
    }
  ];

  for (const item of newFeatures) {
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
      console.log(`Added feature card: ${item.slug}`);
    }
  }
  fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');

  // 4. Run bundle_posts.js to update sitemap.xml
  console.log('\n[Step 4] Running bundle_posts.js to update sitemap.xml and posts bundles...');
  execSync('node bundle_posts.js', { stdio: 'inherit' });

  console.log('\n[Complete] Round 53 generation finished successfully!');
}

main().catch(console.error);
