const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateYamagataAtsumiPage } = require('./scripts/round81/generate_yamagata_atsumi');
const { generateSaitamaChichibuPage } = require('./scripts/round81/generate_saitama_chichibu');
const { generateIshikawaWakuraPage } = require('./scripts/round81/generate_ishikawa_wakura');
const { generateYamaguchiYudaPage } = require('./scripts/round81/generate_yamaguchi_yuda');
const { generateMieKashikojimaPage } = require('./scripts/round81/generate_mie_kashikojima');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 81: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round81_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateYamagataAtsumiPage(rawHotels.yamagata_atsumi);
  generateSaitamaChichibuPage(rawHotels.saitama_chichibu);
  generateIshikawaWakuraPage(rawHotels.ishikawa_wakura);
  generateYamaguchiYudaPage(rawHotels.yamaguchi_yuda);
  generateMieKashikojimaPage(rawHotels.mie_kashikojima);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay',
    'winter-saitama-chichibu-onsen-yomatsuri-nagatoro-bushugyu-stay',
    'winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay',
    'winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay',
    'winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay'
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
      slug: 'winter-yamagata-atsumi-onsen-kandara-shonaigyu-snow-stay',
      title: '【11・12月山形・庄内あつみ温泉の開湯1200年名湯と冬の日本海味覚】名物寒鱈汁＆紅ズワイガニ・極上庄内牛・温海川雪景色を愛でる老舗名宿5選',
      description: '11月から12月にかけて、山形県庄内地方の南端に位置する「あつみ温泉（温海温泉）」は、日本海の潮風と出羽の山並みが交錯する渓谷に位置し、初雪の静寂とともに冬の味覚の真髄が幕を開けます。開湯約1200年の歴史を誇り、温海川の清流沿いに風情ある木造建築や名旅館が立ち並ぶ温泉街。初冬の日本海・庄内浜で水揚げされる脂の乗った「寒鱈（かんだら）」のどんがら汁、甘み濃厚な紅ズワイガニ、きめ細やかな霜降りの「庄内牛」、赤紫色の伝統野菜「温海かぶ」。塩化物・硫酸塩泉のまろやかな湯が芯まで身体を温め、湯冷めを防ぎます。日本庭園や露天風呂に舞い落ちる雪を眺めながら極上の郷土料理に舌鼓を打つ、厳選の名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '開湯1200年名湯・寒鱈汁＆紅ズワイガニ・極上庄内牛と温海川雪見露天',
      readTime: '6分'
    },
    {
      slug: 'winter-saitama-chichibu-onsen-yomatsuri-nagatoro-bushugyu-stay',
      title: '【11・12月埼玉・秩父温泉郷の秩父夜祭と長瀞こたつ舟】名物武州和牛すき焼き＆秩父みそ豚・創業文政の美肌鉱泉を満喫する山里名宿5選',
      description: '11月から12月にかけて、都心から特急でわずか80分あまりの近さにありながら、奥武蔵の山々に抱かれた埼玉県「秩父・長瀞」は、冬ならではの活気と幽玄な静けさが同居する最もドラマチックな季節を迎えます。12月2日・3日にはユネスコ無形文化遺産に登録された日本三大曳山祭の一つ「秩父夜祭」が開催され、絢爛豪華な屋台や笠鉾が街を練り歩き、冬の澄み渡る夜空に壮大な花火が打ち上がります。荒川の清流を暖かなぬくもりで巡る「長瀞こたつ舟」、日本通貨発祥の地に湧く和銅鉱泉をはじめとする肌触り滑らかな名湯。夕食には埼玉が誇る最高峰の黒毛和牛「武州和牛（ぶしゅうわぎゅう）」のすき焼き、秩父伝統の「豚肉の味噌漬け」、秩父名水手打ち蕎麦。秩父路の冬情緒を心ゆくまで堪能できる厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初冬の秩父夜祭＆長瀞こたつ舟・名物武州和牛すき焼きと美肌鉱泉',
      readTime: '6分'
    },
    {
      slug: 'winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay',
      title: '【11・12月石川・能登和倉温泉の七尾湾冬景色と寒の味覚】名物能登寒ぶり＆加能ガニ・極上能登牛・開湯1200年の海のいで湯を愉しむ海辺名宿5選',
      description: '11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と、波静かなオーシャンビューに初雪が舞い散る風情豊かな季節を迎えます。開湯約1200年、海中から湧き出た白鷺伝説に由来する塩化物泉は、国内屈指の高温泉にして豊かな塩分が身体を芯から温める「海のいで湯」。11月6日に解禁される石川県産ブランドズワイガニ「加能ガニ」や内子・外子が詰まった「香箱ガニ」、初冬の寒風に揉まれて脂が乗り切った「能登寒ぶり」のブリしゃぶ、希少な極上「能登牛」。波穏やかな七尾湾と能登島大橋を望む絶景露天風呂とともに、心温まる北陸の贅を尽くす厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '七尾湾冬絶景＆極上能登寒ぶり・加能ガニ・能登牛と海のいで湯名宿',
      readTime: '6分'
    },
    {
      slug: 'winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay',
      title: '【11・12月山口・湯田温泉の白狐の湯と国宝瑠璃光寺散策】本場下関直送とらふぐフルコース＆やまぐち和牛燦・毎分2000L源泉の名宿5選',
      description: '11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は、冬の美食の最高峰「とらふぐ」が旬を迎え、白狐伝説に彩られた名湯がいっそう恋しくなる季節を迎えます。白狐が毎夜傷を癒やしたと伝わる湯田の湯は、1日2000トン・毎分約2000リットルという西日本屈指の湧出量を誇るpH9.1のアルカリ性単純温泉。柔らかく肌になじむアルカリ泉が古い角質をやさしく洗い流し、つるつるの美肌へ導きます。夕食には本場・下関南風泊港から直送される透き通るような「とらふぐ刺し（てっさ）」や熱々の「ふぐちり鍋」、香ばしい「ふぐヒレ酒」、山口の誇る黒毛和牛「やまぐち和牛 燦（きらめき）」。国宝・瑠璃光寺五重塔の初冬風景とともに至福の滞在を約束する厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '白狐伝説の名湯＆本場下関直送とらふぐ・やまぐち和牛燦と国宝散策',
      readTime: '6分'
    },
    {
      slug: 'winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay',
      title: '【11・12月三重・志摩賢島温泉の英虞湾夕日と冬の伊勢志摩美食】本場伊勢海老＆幻のあのりふぐ・極上松阪牛・真珠の海を望む絶景宿5選',
      description: '11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下、無数の真珠養殖筏が織りなすリアス海岸が夕陽に黄金色へと染まり、1年で最もドラマチックな美しさを放ちます。G7伊勢志摩サミットの舞台となった世界的名門ホテルをはじめ、海を一望する絶景温泉旅館が立ち並ぶ賢島温泉。10月に解禁され冬に甘みとプリプリの食感が極まる「伊勢海老」の姿造りや鬼殻焼き、志摩半島安乗沖で獲れる天然トラフグの最高峰「あのりふぐ」、クリーミーな「的矢かき」、世界の美食家を唸らせる極上の「松阪牛」。英虞湾の穏やかな波音と満天の星空に抱かれ、至高の美味と名湯に酔いしれる厳選宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '英虞湾夕日パノラマ＆本場伊勢海老・幻のあのりふぐ・松阪牛と絶景露天',
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
    <lastmod>2026-09-29</lastmod>
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

  console.log('\n[Complete] Round 81 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
