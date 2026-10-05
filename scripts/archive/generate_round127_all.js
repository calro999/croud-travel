const fs = require('fs');
const path = require('path');

const { generateTokyoTakaoPage } = require('./scripts/round127/generate_tokyo_takao.js');
const { generateKanagawaOyamaPage } = require('./scripts/round127/generate_kanagawa_oyama.js');
const { generateHokkaidoWakkanaiPage } = require('./scripts/round127/generate_hokkaido_wakkanai.js');
const { generateHyogoTakarazukaPage } = require('./scripts/round127/generate_hyogo_takarazuka.js');
const { generateMiyazakiHyugaPage } = require('./scripts/round127/generate_miyazaki_hyuga.js');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 127: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round127_raw_hotels.json'), 'utf8'));

  const generators = [
    { 
      fn: generateTokyoTakaoPage, 
      data: rawHotels.tokyo_takao_yakuoin_tororo_soba.hotels 
    },
    { 
      fn: generateKanagawaOyamaPage, 
      data: rawHotels.kanagawa_isehara_oyama_afuri_tofu.hotels 
    },
    { 
      fn: generateHokkaidoWakkanaiPage, 
      data: rawHotels.hokkaido_wakkanai_soya_cape_sunrise.hotels 
    },
    { 
      fn: generateHyogoTakarazukaPage, 
      data: rawHotels.hyogo_takarazuka_kiyoshikojin_takedao.hotels 
    },
    { 
      fn: generateMiyazakiHyugaPage, 
      data: rawHotels.miyazaki_hyuga_umagase_sea_cross.hotels 
    }
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
      slug: 'winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay',
      title: '高尾山＆八王子！霊峰「高尾山薬王院」新春初詣と冬晴れダイヤモンド富士・元祖自然薯とろろそば＆極楽湯天然温泉名宿',
      desc: '都心から50分の霊峰！開山1200余年の薬王院で迎える新春大護摩供と天狗信仰初詣、冬至前後の奇跡ダイヤモンド富士。熱々の自然薯とろろそばと極楽湯温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay',
      title: '大山＆伊勢原・丹沢！日本遺産「大山阿夫利神社」新春初詣とミシュラン二つ星相模湾絶景・名水大山豆腐料理＆鶴巻・七沢温泉名宿',
      desc: '江戸庶民が熱狂した大山詣り！阿夫利神社下社から見渡す江の島・相模湾パノラマと初日の出。大山名水仕込みの熱々豆腐会席・ぼたん鍋と世界有数のカルシウム名湯…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hokkaido-wakkanai-soya-cape-sunrise-tako-shabu-soya-beef-stay',
      title: '稚内＆宗谷岬！日本最北端「宗谷岬」冬の元旦初日の出と北防波堤ドーム・元祖タコしゃぶ＆幻の宗谷黒牛・最北天然温泉名宿',
      desc: '北緯45度最果ての詩情！白銀のオホーツク海から昇る日本最北端の初日の出、古代ローマ円柱が連なる北海道遺産・北防波堤ドーム。名物タコしゃぶと最北天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay',
      title: '宝塚＆武田尾温泉！夢の宝塚大劇場冬公演と「清荒神清澄寺」新春初詣・隈研吾設計離れ「武田尾温泉」雪見露天＆極上三田牛名宿',
      desc: '華麗な歌劇の舞台と深山幽谷の秘湯！台所の神様・清荒神と安産観音中山寺の初詣。武庫川渓谷のラドン温泉雪見露天と兵庫最高峰ブランド和牛・三田牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay',
      title: '日向＆延岡！日向岬「馬ヶ背」高さ70m断崖絶壁と「クルスの海」新春願掛け・冬旬「日向灘伊勢海老」＆日本一宮崎牛・延岡名宿',
      desc: '温暖な南国の紺碧パノラマ！柱状節理の奇勝・馬ヶ背スカイウォークと願い叶うクルスの海初詣。甘み極まる冬の日向灘伊勢海老活造りと最高峰宮崎牛・元祖チキン南蛮…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
  const missingFeatures = newFeatures.filter(item => !featuresContent.includes(item.slug));
  if (missingFeatures.length > 0 && featuresContent.includes(gridMarker)) {
    const formattedItems = missingFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log(`Successfully updated src/app/features/page.tsx with ${missingFeatures.length} new features!`);
  } else {
    console.log('src/app/features/page.tsx already has all features or gridMarker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-06</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  for (const item of newFeatures) {
    const entry = `- https://croud-travel.com/${item.slug}: ${item.title}。${item.desc}\n`;
    if (!llmsContent.includes(item.slug)) {
      llmsContent = llmsContent.trimEnd() + '\n' + entry;
      console.log(`- Added ${item.slug} to llms-full.txt`);
    }
  }
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');

  console.log('\n================================================================');
  console.log('Round 127 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
