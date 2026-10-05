const fs = require('fs');
const path = require('path');

const { generateShizuokaFujinomiyaPage } = require('./scripts/round106/generate_shizuoka_fujinomiya');
const { generateFukuokaMojikoKokuraPage } = require('./scripts/round106/generate_fukuoka_mojiko_kokura');
const { generateYamanashiKofuYumuraPage } = require('./scripts/round106/generate_yamanashi_kofu_yumura');
const { generateYamaguchiIwakuniSuooshimaPage } = require('./scripts/round106/generate_yamaguchi_iwakuni_suooshima');
const { generateKagawaTakamatsuYashimaPage } = require('./scripts/round106/generate_kagawa_takamatsu_yashima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 106: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round106_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateShizuokaFujinomiyaPage, data: rawHotels.shizuoka_fujinomiya.hotels },
    { fn: generateFukuokaMojikoKokuraPage, data: rawHotels.fukuoka_mojiko_kokura.hotels },
    { fn: generateYamanashiKofuYumuraPage, data: rawHotels.yamanashi_kofu_yumura.hotels },
    { fn: generateYamaguchiIwakuniSuooshimaPage, data: rawHotels.yamaguchi_iwakuni_suooshima.hotels },
    { fn: generateKagawaTakamatsuYashimaPage, data: rawHotels.kagawa_takamatsu_yashima.hotels }
  ];

  const slugs = [];

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  for (const g of generators) {
    const { slug, pageContent } = g.fn(g.data);
    slugs.push(slug);

    const outDir = path.join(__dirname, 'src', 'app', slug);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outFile = path.join(outDir, 'page.tsx');
    fs.writeFileSync(outFile, pageContent, 'utf8');
    console.log(`- Generated: ${slug}/page.tsx (${pageContent.length} bytes)`);
  }

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
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
      slug: 'winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay',
      title: '白雪の富士山絶景＆富士山本宮浅間大社新春初詣！田貫湖逆さ富士と特選「静岡そだち」牛の名宿',
      desc: '年間で最も空気が澄む冬の富士宮。全国浅間神社の総本宮・浅間大社の新春初詣と特別天然記念物湧玉池、田貫湖の白雪逆さ富士、白糸の滝、極上「静岡そだち」牛と富士宮やきそば…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay',
      title: '門司港レトロ浪漫灯彩イルミネーション＆関門海峡！旬の「豊前海一粒牡蠣」と元祖焼きカレー・小倉牛の名宿',
      desc: '約30万球が洋館群を照らす門司港レトロ浪漫灯彩。海峡を行き交う船と対岸の夜景、11月解禁の濃厚な豊前海一粒牡蠣、香ばしい元祖焼きカレーと幻の黒毛和牛「小倉牛」…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamanashi-kofu-takeda-shrine-yumura-onsen-koshugyu-stay',
      title: '武田神社新春初詣＆富士山・南アルプス雪景色！開湯1200年信玄の隠し湯「湯村温泉」と熱々ほうとう・甲州牛の名宿',
      desc: '信玄公館跡に鎮座し勝運を授かる武田神社初詣。甲府城天守台からの白銀南アルプスと富士山、開湯1200年湯村温泉の弱アルカリ美肌湯、熱々のかぼちゃほうとうと極上甲州牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay',
      title: '日本三名橋「錦帯橋」の冬景色＆白蛇神社新春初詣！冬の風物詩「周防大島みかん鍋」と幻の高森牛・銘酒獺祭の名宿',
      desc: '五連木造アーチの錦帯橋に舞う雪化粧と夜間ライトアップ。金運の岩国白蛇神社初詣、丸ごとみかんを浮かべた周防大島名物みかん鍋、幻の黒毛和牛「高森牛」と世界的名酒獺祭…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay',
      title: '特別名勝「栗林公園」の冬景色＆屋島寺新春初詣！冬限定の奇跡魚「オリーブハマチ」と讃岐うどん・オリーブ牛の名宿',
      desc: 'ミシュラン三ツ星の栗林公園の静寂と雪吊り、掬月亭の抹茶。屋島山頂からの瀬戸内海初日の出と屋島寺初詣、1月中旬まで限定の奇跡の旬魚オリーブハマチ、熱々しっぽくうどんとオリーブ牛…',
      badge: '11・12・1月特集'
    }
  ];

  const marker = '{/* FEATURE_CARDS_START */}';
  let insertionString = '';
  for (const f of newFeatures) {
    insertionString += `            {
              slug: '${f.slug}',
              title: ${JSON.stringify(f.title)},
              desc: ${JSON.stringify(f.desc)},
              badge: '${f.badge}'
            },\n`;
  }

  // If marker not present, insert after the opening of the array
  const targetPattern = /\{\s*\[\s*\n\s*\{\s*slug:\s*'winter-/;
  if (featuresContent.match(targetPattern)) {
    featuresContent = featuresContent.replace(
      targetPattern,
      `{[\n${insertionString}            {
              slug: 'winter-`
    );
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx');
  } else {
    console.warn('Could not automatically match targetPattern in features page.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const today = '2026-10-03';
  let sitemapEntries = '';
  for (const slug of slugs) {
    if (!sitemapContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
      sitemapEntries += `  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
    }
  }

  if (sitemapEntries) {
    sitemapContent = sitemapContent.replace('</urlset>', `${sitemapEntries}</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log(`Added ${slugs.length} URLs to public/sitemap-features.xml`);
  } else {
    console.log('All URLs already exist in sitemap-features.xml');
  }

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  if (fs.existsSync(llmsPath)) {
    let llmsContent = fs.readFileSync(llmsPath, 'utf8');
    let llmsEntries = '';
    for (const slug of slugs) {
      if (!llmsContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
        llmsEntries += `- https://croud-travel.pages.dev/${slug}/\n`;
      }
    }
    if (llmsEntries) {
      llmsContent = llmsContent.trim() + '\n' + llmsEntries;
      fs.writeFileSync(llmsPath, llmsContent, 'utf8');
      console.log(`Added ${slugs.length} URLs to public/llms-full.txt`);
    } else {
      console.log('All URLs already exist in llms-full.txt');
    }
  }

  console.log('\n================================================================');
  console.log('Round 106 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error during generation:', err);
  process.exit(1);
});
