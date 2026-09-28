const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateShizuokaKanzanjiPage } = require('./scripts/round75/generate_shizuoka_kanzanji');
const { generateNiigataIwamuroYahikoPage } = require('./scripts/round75/generate_niigata_iwamuro_yahiko');
const { generateWakayamaRyujinPage } = require('./scripts/round75/generate_wakayama_ryujin');
const { generateHiroshimaMiyajimaPage } = require('./scripts/round75/generate_hiroshima_miyajima');
const { generateNaganoBesshoPage } = require('./scripts/round75/generate_nagano_bessho');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 75: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round75_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateShizuokaKanzanjiPage(rawHotels.shizuoka_kanzanji);
  generateNiigataIwamuroYahikoPage(rawHotels.niigata_iwamuro_yahiko);
  generateWakayamaRyujinPage(rawHotels.wakayama_ryujin);
  generateHiroshimaMiyajimaPage(rawHotels.hiroshima_miyajima);
  generateNaganoBesshoPage(rawHotels.nagano_bessho);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-shizuoka-kanzanji-onsen-hamanako-fugu-eel-stay',
    'winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay',
    'winter-wakayama-ryujin-onsen-bihada-botannabe-stay',
    'winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay',
    'winter-nagano-bessho-onsen-shinshu-beef-heritage-stay'
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
      slug: 'winter-shizuoka-kanzanji-onsen-hamanako-fugu-eel-stay',
      title: '【11・12月静岡・浜名湖 舘山寺温泉の初冬レイクビューと遠州灘天然とらふぐ】名物冬うなぎ＆湖畔パノラマ展望露天風呂の宿5選',
      description: '11月から12月にかけて、静岡県西部に広がる浜名湖畔の舘山寺温泉は、遠州灘の冬の至宝「天然とらふぐ」が水揚げ最盛期を迎え、脂が乗った名物「浜名湖うなぎ」とともに年間最高の美食シーズンに突入します。初冬の澄み渡る青空のもと、湖面越しに遠く冠雪した富士山を望む絶景露天風呂や、舘山寺ロープウェイから眺める夕暮れパノラマ。保温力抜群の塩化物強塩温泉と極上の冬の味覚を堪能する厳選名宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '浜名湖初冬レイクビュー＆遠州灘天然とらふぐ・冬うなぎ・展望露天風呂',
      readTime: '6分'
    },
    {
      slug: 'winter-niigata-iwamuro-yahiko-onsen-kanburi-nodoguro-stay',
      title: '【11・12月新潟・弥彦＆岩室温泉の初冬情緒と日本海寒ブリ・のどぐろ会席】越後一宮彌彦神社参詣＆開湯300年名物黒湯の宿5選',
      description: '11月から12月にかけて、新潟県の弥彦温泉と岩室温泉は、越後平野の黄金色の実りから初雪の白銀へと季節が移ろう風情豊かな初冬を迎えます。越後一宮「彌彦神社」の初冬の厳かな空気に包まれ、開湯300年の歴史を誇る岩室名物「黒湯」で温まる至福のひととき。11月に水揚げが本格化する荒波の日本海直送「寒ブリ」や脂の乗った「のどぐろ塩焼き」、新米コシヒカリと越後銘酒に酔いしれる厳選宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '越後一宮彌彦神社参詣＆開湯300年名物黒湯・日本海寒ブリ・のどぐろ会席',
      readTime: '6分'
    },
    {
      slug: 'winter-wakayama-ryujin-onsen-bihada-botannabe-stay',
      title: '【11・12月和歌山・龍神温泉の初冬渓谷美と日本三美人の湯】名物紀州天然ぼたん鍋＆最高峰熊野牛会席を味わう隠れ家宿5選',
      description: '11月から12月にかけて、紀伊半島の奥深き山懐・日高川の上流に位置する「龍神温泉」は、清流沿いに初冬の朝霧が立ち込める幽玄な渓谷美に包まれます。「日本三美人の湯」と称されるトロトロの炭酸水素塩泉は、冬の乾燥で疲れた肌を驚くほど滑らかに潤す名湯。さらに11月15日狩猟解禁の本場紀州「天然猪肉のぼたん鍋」や霜降りがとろける「熊野牛」の贅沢会席を堪能できる厳選隠れ宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '日本三美人の湯重曹泉＆日高川初冬渓谷美・11月解禁天然猪ぼたん鍋・熊野牛',
      readTime: '6分'
    },
    {
      slug: 'winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay',
      title: '【11・12月広島・宮島温泉の世界遺産初冬絶景と旬解禁広島カキづくし会席】厳島神社大鳥居一望＆瀬戸内海オーシャンビュー露天の宿5選',
      description: '11月から12月にかけて、世界遺産の島・宮島（厳島）は、紅葉の喧騒が落ち着き、瀬戸内海の澄み切った青空と海上に浮かぶ大鳥居の荘厳な姿が際立つ初冬の静寂シーズンを迎えます。11月はまさに広島名物「牡蠣（カキ）」が身を大きく太らせ旨味を凝縮させる本格シーズンの開幕。香ばしい殻付き焼き牡蠣や濃厚な牡蠣の土手鍋、安芸牛に舌鼓を打ち、宮島潮湯温泉で温まる贅沢宿5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '世界遺産厳島神社初冬絶景＆11月旬解禁広島カキづくし・安芸牛・宮島潮湯温泉',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-bessho-onsen-shinshu-beef-heritage-stay',
      title: '【11・12月長野・信州 別所温泉の古湯情緒と北向観音初冬参拝】極上信州プレミアム牛＆名湯掛け流し硫黄泉で寛ぐ老舗旅館5選',
      description: '11月から12月にかけて、「信州の鎌倉」と称される上田市の「別所温泉」は、山並みに初雪が冠し、石畳の小路に白い湯けむりが立ち込める風情豊かな初冬を迎えます。善光寺と向かい合う厄除けの名刹「北向観音堂」への初冬参拝や国宝八角三重塔の静寂。ほのかに硫黄が香る源泉掛け流しの名湯で温まり、霜降り極上の「信州プレミアム牛」や信州サーモン、サンふじ林檎を堪能する名門旅館5選を解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '信州最古の古湯掛け流し硫黄泉＆厄除け北向観音初冬参詣・信州プレミアム牛会席',
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

  console.log('\n[Complete] Round 75 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
