const fs = require('fs');
const path = require('path');

const { generateIwateMoriokaPage } = require('./scripts/round110/generate_iwate_morioka');
const { generateShizuokaMishimaPage } = require('./scripts/round110/generate_shizuoka_mishima');
const { generateMieSuzukaPage } = require('./scripts/round110/generate_mie_suzuka');
const { generateWakayamaCityPage } = require('./scripts/round110/generate_wakayama_city');
const { generateKyotoFushimiPage } = require('./scripts/round110/generate_kyoto_fushimi');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 110: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round110_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateIwateMoriokaPage, data: rawHotels.iwate_morioka.hotels },
    { fn: generateShizuokaMishimaPage, data: rawHotels.shizuoka_mishima_numazu.hotels },
    { fn: generateMieSuzukaPage, data: rawHotels.mie_suzuka_kuwana.hotels },
    { fn: generateWakayamaCityPage, data: rawHotels.wakayama_city_kada.hotels },
    { fn: generateKyotoFushimiPage, data: rawHotels.kyoto_fushimi_uji.hotels }
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
      slug: 'winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay',
      title: '冬の盛岡八幡宮新春開運初詣＆岩手山白銀絶景！繋温泉美肌湯と盛岡三大麺の名宿',
      desc: '澄んだ青空に輝く岩手山南部片富士の雪嶺パノラマ。岩手県総鎮守・盛岡八幡宮初詣と伝統の裸参り、源泉掛け流し繋温泉、熱々じゃじゃ麺・盛岡冷麺と極上雫石牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay',
      title: '冬の三嶋大社新春開運初詣＆富士山スカイウォーク！駿河湾深海魚と沼津港寒魚の名宿',
      desc: '日本最長大吊橋からの純白冠雪富士と駿河湾大パノラマ。源頼朝旗揚げの伊豆国一宮初詣、冬が旬の本タカアシガニや深海魚・寒アジフライ、富士山展望温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay',
      title: '伊勢国一の宮・椿大神社新春みちびき初詣＆なばなの里！桑名冬蛤鍋と長島温泉名宿',
      desc: '全国猿田彦神社総本宮でのみちびき開運祈願とかなえ滝。国内最大級なばなの里光のトンネル、桑名名物大粒天然蛤鍋や四日市とんてき、湯あみの島大露天風呂…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay',
      title: '冬の日前神宮新春開運初詣＆紀淡海峡夕陽絶景！加太温泉名湯と冬の寒真鯛・幻のクエ名宿',
      desc: '紀淡海峡に沈む茜色の冬夕陽インフィニティ露天風呂。紀伊国一之宮・日前神宮の厳かな新春初詣、一本釣り加太の天然真鯛尽くしとコラーゲンたっぷり本クエ鍋…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay',
      title: '伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋名宿',
      desc: '全国3万社の総本宮・伏見稲荷千本鳥居の朱と冬空の神秘美。老舗酒蔵の寒仕込み搾りたて新酒とあったか酒粕鍋、雪化粧の国宝平等院鳳凰堂、冬の濃厚京鴨すき鍋…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const insertionPoint = featuresContent.indexOf('const features = [');
  if (insertionPoint !== -1) {
    const afterBracket = featuresContent.indexOf('[', insertionPoint) + 1;
    const itemsCode = newFeatures.map(f => `
    {
      slug: '${f.slug}',
      title: '${f.title}',
      desc: '${f.desc}',
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

  const today = '2026-10-03';
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
    `- https://croud-travel.com/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay/: 冬の盛岡八幡宮新春初詣＆岩手山白銀パノラマ！繋温泉美肌湯と盛岡三大麺（じゃじゃ麺・冷麺・わんこそば）＆雫石牛の名宿5選`,
    `- https://croud-travel.com/winter-shizuoka-mishima-numazu-taisha-fuji-suruga-stay/: 冬の三嶋大社新春開運初詣＆富士山スカイウォーク絶景！駿河湾深海魚（タカアシガニ）と沼津港寒魚・富士山展望温泉名宿5選`,
    `- https://croud-travel.com/winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay/: 伊勢国一の宮・椿大神社新春みちびき初詣＆なばなの里イルミネーション！桑名冬の天然蛤鍋と長島温泉名宿5選`,
    `- https://croud-travel.com/winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay/: 冬の日前神宮新春開運初詣＆紀淡海峡夕陽絶景！加太温泉重曹泉美肌湯と一本釣り天然真鯛・幻のクエ鍋名宿5選`,
    `- https://croud-travel.com/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay/: 伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂雪景色と極上京鴨鍋名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 110 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
