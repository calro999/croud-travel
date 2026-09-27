const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateArashiyamaPage } = require('./scripts/round54/generate_arashiyama');
const { generateNikkoPage } = require('./scripts/round54/generate_nikko');
const { generateOnogawaPage } = require('./scripts/round54/generate_onogawa');
const { generateKinosakiPage } = require('./scripts/round54/generate_kinosaki');
const { generateIzukogenPage } = require('./scripts/round54/generate_izukogen');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 54: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round54_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateArashiyamaPage(rawHotels.arashiyama);
  generateNikkoPage(rawHotels.nikko);
  generateOnogawaPage(rawHotels.onogawa);
  generateKinosakiPage(rawHotels.kinosaki);
  generateIzukogenPage(rawHotels.izukogen);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-kyoto-arashiyama-onsen-yudofu-stay',
    'winter-tochigi-okunikko-yumoto-snow-onsen-stay',
    'winter-yamagata-onogawa-yonezawa-beef-stay',
    'winter-hyogo-kinosaki-onsen-matsuba-crab-stay',
    'winter-shizuoka-izukogen-granillumi-ito-onsen-stay'
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
      slug: 'winter-kyoto-arashiyama-onsen-yudofu-stay',
      title: '【11・12月冬の嵐山と静寂の名刹】嵯峨野の竹林雪景色と嵐山温泉・熱々湯豆腐宿5選',
      description: '晩秋の紅葉から冬の静寂へと表情を変える京都・嵐山と嵯峨野。渡月橋にかかる幻想的な朝霧や早朝の竹林の小径を歩き、嵐山温泉と名物・嵯峨湯豆腐を堪能する冬旅。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      badge: '嵐山雪景色＆名物湯豆腐',
      readTime: '6分'
    },
    {
      slug: 'winter-tochigi-okunikko-yumoto-snow-onsen-stay',
      title: '【11・12月奥日光の白銀世界と濃厚にごり湯】日本屈指のエメラルド硫黄泉と日光湯波会席宿5選',
      description: '11月中旬から雪化粧が始まり12月には純白の世界が広がる標高1500mの奥日光・湯元温泉。エメラルドグリーンから乳白色へ変わる神秘のにごり湯と日光湯波会席。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '奥日光雪見にごり湯＆湯波',
      readTime: '6分'
    },
    {
      slug: 'winter-yamagata-onogawa-yonezawa-beef-stay',
      title: '【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選',
      description: '11月下旬から里山が白銀に包まれる米沢の奥座敷「小野川温泉」。小野小町ゆかりの美肌硫黄泉露天風呂と、とろける甘みのA5米沢牛すき焼き、冬限定の小野川豆もやし。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '米沢牛すき焼き＆小野川美肌湯',
      readTime: '6分'
    },
    {
      slug: 'winter-hyogo-kinosaki-onsen-matsuba-crab-stay',
      title: '【11月解禁！城崎温泉の青タグ津居山ガニ】名物7つの外湯めぐりと極上活ズワイガニ会席宿5選',
      description: '11月6日解禁！地元・津居山港直送の青タグ付き活松葉ガニフルコース（カニ刺し・焼きガニ・茹で姿・カニすき・甲羅酒）と雪舞う柳並木を歩く7つの外湯めぐり。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '城崎青タグ津居山ガニ＆7外湯',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-izukogen-granillumi-ito-onsen-stay',
      title: '【11・12月伊豆高原グランイルミ】日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選',
      description: '11月中旬から本格シーズン！全国第1位の体験型ナイトエンターテインメント「伊豆高原グランイルミ」。光の海を滑空するジップラインと美肌温泉、冬が旬の金目鯛姿煮。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: '伊豆高原グランイルミ＆金目鯛',
      readTime: '6分'
    }
  ];

  // Also update the static card list in features page
  const searchTrendAnchor = '{/* ❄️ 先回り！秋冬〜春の超人気目的別・厳選比較特集 */}';
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

  // 4. Run bundle_posts.js to update sitemap.xml
  console.log('\n[Step 4] Running bundle_posts.js to update sitemap.xml and posts bundles...');
  execSync('node bundle_posts.js', { stdio: 'inherit' });

  console.log('\n[Complete] Round 54 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
