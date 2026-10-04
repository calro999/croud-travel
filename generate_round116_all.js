const fs = require('fs');
const path = require('path');

const { generateTokyoShinjukuPage } = require('./scripts/round116/generate_tokyo_shinjuku');
const { generateGunmaManzaPage } = require('./scripts/round116/generate_gunma_manza');
const { generateYamaguchiNagatoPage } = require('./scripts/round116/generate_yamaguchi_nagato');
const { generateNagasakiCityPage } = require('./scripts/round116/generate_nagasaki_city');
const { generateOkinawaMotobuPage } = require('./scripts/round116/generate_okinawa_motobu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 116: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round116_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTokyoShinjukuPage, data: rawHotels.tokyo_shinjuku_nishishinjuku.hotels },
    { fn: generateGunmaManzaPage, data: rawHotels.gunma_manza_onsen_tsumagoi.hotels },
    { fn: generateYamaguchiNagatoPage, data: rawHotels.yamaguchi_nagato_tsunoshima_motonosumi.hotels },
    { fn: generateNagasakiCityPage, data: rawHotels.nagasaki_city_lantern_inasayama.hotels },
    { fn: generateOkinawaMotobuPage, data: rawHotels.okinawa_motobu_nakijin_yaedake.hotels }
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
      slug: 'winter-tokyo-shinjuku-nishishinjuku-illumination-hatsumode-luxury-stay',
      title: '新宿＆西新宿・新宿御苑！新宿ミナミルミ＆サザンテラス冬イルミと都庁展望室夜景・花園神社初詣を味わう名宿',
      desc: '世界最大のターミナルを包む新宿ミナミルミ、都庁展望室から望む冬の夕暮れ富士山と360度パノラマ夜景。花園神社初詣と西新宿摩天楼ホテル…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay',
      title: '万座温泉＆嬬恋！標高1800m極上白濁にごり湯雪見露天と満天の星空・上州牛すき焼きの名宿',
      desc: '日本一の硫黄含有量を誇る乳白色のにごり湯雪見露天風呂！氷点下10度の白銀世界、万座パウダースノーと満天星空、とろける上州牛すき焼き…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay',
      title: '長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐの名宿',
      desc: '澄み渡る海を貫く角島大橋の絶景、元乃隅神社123基の朱塗り鳥居初詣。長門湯本温泉の恩湯と竹林ライトアップ、仙崎活イカと本場とらふぐ…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay',
      title: '長崎市＆稲佐山・南山手！1万5千個の長崎ランタンフェスと稲佐山世界新三大夜景・名物ちゃんぽんと長崎和牛の名宿',
      desc: '旧正月を祝う1万5000個の中国提灯が彩るランタンフェス、稲佐山1000万ドルのすり鉢夜景。グラバー園冬イルミと熱々ちゃんぽん・長崎和牛…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay',
      title: '本部＆今帰仁・名護！日本一早い春を告げる八重岳桜まつり＆今帰仁城跡ライトアップと美ら海リゾート・島豚アグー・本部牛の名宿',
      desc: '1月中旬に開花する八重岳7,000本の濃いピンク寒緋桜、今帰仁城跡の夜桜ライトアップ。冬の透き通るエメラルド美ら海とアグー豚しゃぶしゃぶ…',
      badge: '1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const searchPattern = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';
  const insertionPoint = featuresContent.indexOf(searchPattern);
  if (insertionPoint !== -1) {
    const afterBracket = insertionPoint + searchPattern.length;
    const itemsCode = newFeatures.map(f => `
            {
              slug: '${f.slug}',
              title: "${f.title}",
              desc: "${f.desc}",
              badge: '${f.badge}'
            },`).join('');
    featuresContent = featuresContent.slice(0, afterBracket) + itemsCode + featuresContent.slice(afterBracket);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('- Updated: src/app/features/page.tsx with 5 new features');
  } else {
    console.warn('Could not find insertion point in src/app/features/page.tsx');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const today = '2026-10-04';
  const newSitemapEntries = slugs.map(slug => `  <url>
    <loc>https://croud-travel.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  if (sitemapContent.includes('</urlset>')) {
    sitemapContent = sitemapContent.replace('</urlset>', `${newSitemapEntries}\n</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('- Updated: public/sitemap-features.xml with 10 new URLs (both domains)');
  }

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  const newLlmsEntries = [
    `- https://croud-travel.com/winter-tokyo-shinjuku-nishishinjuku-illumination-hatsumode-luxury-stay/: 新宿＆西新宿・新宿御苑！新宿ミナミルミ＆サザンテラス冬イルミと都庁展望室夜景・花園神社初詣を味わう名宿5選`,
    `- https://croud-travel.com/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay/: 万座温泉＆嬬恋！標高1800m極上白濁にごり湯雪見露天と満天の星空・上州牛すき焼きの名宿5選`,
    `- https://croud-travel.com/winter-yamaguchi-nagato-tsunoshima-motonosumi-shrine-hatsumode-onsen-stay/: 長門＆角島・元乃隅神社！冬のコバルトブルー角島大橋と123基赤鳥居初詣・長門湯本温泉と仙崎イカ・ふぐの名宿5選`,
    `- https://croud-travel.com/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay/: 長崎市＆稲佐山・南山手！1万5千個の長崎ランタンフェスと稲佐山世界新三大夜景・名物ちゃんぽんと長崎和牛の名宿5選`,
    `- https://croud-travel.com/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay/: 本部＆今帰仁・名護！日本一早い春を告げる八重岳桜まつり＆今帰仁城跡ライトアップと美ら海リゾート・島豚アグー・本部牛の名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 116 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
