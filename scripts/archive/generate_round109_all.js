const fs = require('fs');
const path = require('path');

const { generateKanagawaHakonePage } = require('./scripts/round109/generate_kanagawa_hakone');
const { generateOsakaCityPage } = require('./scripts/round109/generate_osaka_city');
const { generateIbarakiTsukubasanPage } = require('./scripts/round109/generate_ibaraki_tsukubasan');
const { generateEhimeImabariPage } = require('./scripts/round109/generate_ehime_imabari');
const { generateKagoshimaCityPage } = require('./scripts/round109/generate_kagoshima_city');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 109: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round109_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateKanagawaHakonePage, data: rawHotels.kanagawa_hakone.hotels },
    { fn: generateOsakaCityPage, data: rawHotels.osaka_city.hotels },
    { fn: generateIbarakiTsukubasanPage, data: rawHotels.ibaraki_tsukubasan.hotels },
    { fn: generateEhimeImabariPage, data: rawHotels.ehime_imabari.hotels },
    { fn: generateKagoshimaCityPage, data: rawHotels.kagoshima_city.hotels }
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
      slug: 'winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay',
      title: '冬の箱根湯本＆芦ノ湖・箱根神社新春初詣！澄み渡る白雪富士の絶景と名湯の名宿',
      desc: '冬の大気で透き通る芦ノ湖越しに仰ぐ冠雪富士のパノラマ。関東総鎮守・箱根神社初詣と平和の鳥居、相模湾の寒魚や箱根山麓豚、美肌の箱根湯本温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay',
      title: '冬の大阪・住吉大社新春初詣＆御堂筋イルミネーション！本場てっちりと煌めく夜景の名宿',
      desc: '全長4kmに及ぶ世界最大級の光の回廊と中之島光のルネサンス。全国総本社・住吉大社の反橋渡りと開運祈願、ふぐ消費量日本一の極上てっちり鍋と地上高層絶景…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-ibaraki-tsukubasan-shrine-hatsumode-yakei-onsen-hitachigyu-stay',
      title: '冬の筑波山神社新春初詣＆スターダスト夜景！名湯筑波山温泉と極上常陸牛の名宿',
      desc: '澄んだ冬空で見晴らす関東平野一面の日本夜景遺産。三千年の古社・筑波山神社の縁結び初詣、pH10超の美肌温泉、A5ランク常陸牛やすき焼きとつくばうどん…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay',
      title: '冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！来島天然真鯛と名湯の名宿',
      desc: '冬晴れの多島美と来島海峡大橋の雄姿。大三島に鎮座する日本総鎮守・大山祇神社の国宝武具と新春初詣、激流が育む寒真鯛のふっくら鯛めし、美肌の鈍川温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay',
      title: '冬の桜島絶景＆照国神社新春初詣！本場黒豚しゃぶしゃぶと錦江湾寒ブリ・展望温泉の名宿',
      desc: '冬晴れの錦江湾に浮かぶ雄峰桜島の圧倒的パノラマ。薩摩藩祖・島津斉彬公を祀る照国神社初詣、とろけるかごしま黒豚しゃぶしゃぶ、錦江湾寒ブリと展望露天風呂…',
      badge: '11・12・1月特集'
    }
  ];

  let insertionString = '';
  for (const f of newFeatures) {
    insertionString += `            {
              slug: '${f.slug}',
              title: ${JSON.stringify(f.title)},
              desc: ${JSON.stringify(f.desc)},
              badge: '${f.badge}'
            },\n`;
  }

  // Insert at beginning of features array if not already present
  if (!featuresContent.includes(newFeatures[0].slug)) {
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
  } else {
    console.log('src/app/features/page.tsx already contains Round 109 features');
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
  console.log('Round 109 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error during generation:', err);
  process.exit(1);
});
