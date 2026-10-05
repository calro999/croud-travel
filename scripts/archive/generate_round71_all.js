const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateKaminoyamaPage } = require('./scripts/round71/generate_kaminoyama');
const { generateAkoPage } = require('./scripts/round71/generate_ako');
const { generateHirayamaPage } = require('./scripts/round71/generate_hirayama');
const { generateHagiPage } = require('./scripts/round71/generate_hagi');
const { generateOgaPage } = require('./scripts/round71/generate_oga');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 71: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round71_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateKaminoyamaPage(rawHotels.kaminoyama);
  generateAkoPage(rawHotels.ako);
  generateHirayamaPage(rawHotels.hirayama);
  generateHagiPage(rawHotels.hagi);
  generateOgaPage(rawHotels.oga);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay',
    'winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay',
    'winter-kumamoto-hirayama-onsen-sulfur-bihada-stay',
    'winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay',
    'winter-akita-oga-onsen-ishiyaki-namahage-snow-stay'
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
      slug: 'winter-yamagata-kaminoyama-onsen-hoshigaki-yamagata-beef-stay',
      title: '【11・12月山形・かみのやま温泉の初冬風情と開湯五百六十年美肌泉】干し柿暖簾・特選山形牛すき焼き＆蔵王雪見露天の宿5選',
      description: '11月から12月にかけて山形県上山市の奥座敷「かみのやま温泉」は、初冠雪を戴く蔵王連峰の雄大な稜線を背景に、古い武家屋敷や民家の軒先に鮮やかなオレンジ色の干し柿（つるし柿・紅柿）の暖簾が幾重にも吊るされる日本の原風景に包まれます。室町時代長禄2年（1558年）に月秀上人が傷を癒やす鶴を見つけて開湯したと伝わる「鶴の湯」は、ナトリウム・カルシウム-塩化物・硫酸塩泉で日本三大美肌の湯として名高い名泉。プロが選ぶ名旅館「日本の宿 古窯」や隠れ家旅館「名月荘」をはじめ、とろける脂が絶品の山形牛や米沢牛のすき焼き・ステーキ、山形名物芋煮を堪能する極上宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '蔵王初冠雪＆伝統紅柿つるし柿暖簾・開湯560年鶴の湯美肌泉・山形牛すき焼き',
      readTime: '6分'
    },
    {
      slug: 'winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay',
      title: '【11・12月兵庫・播州赤穂温泉の播磨灘夕景と11月解禁坂越牡蠣】赤穂義士祭の歴史情緒・瀬戸内インフィニティ絶景露天の宿5選',
      description: '11月下旬を迎えると、瀬戸内海・播磨灘に面した兵庫県「播州赤穂温泉」は、名水百選千種川の森のミネラルが注ぎ込む坂越湾で育つ名物「坂越牡蠣（さこしかき）」の本格解禁とともに一年で最も美食の熱気に沸き立ちます。大粒で火を通しても縮まず、甘く濃厚なミルキーさを誇る坂越牡蠣の焼き・蒸し・鍋・フライのフルコースを堪能。さらに12月14日は赤穂浪士討ち入りの「赤穂義士祭」が開催され、城下町全体が歴史絵巻の賑わいに包まれます。波打ち際すれすれのインフィニティ露天風呂で瀬戸内の夕日と海に溶け込む至福の湯浴みを満喫する厳選旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '播磨灘夕景＆11月解禁坂越牡蠣フルコース・12月14日赤穂義士祭・インフィニティ露天',
      readTime: '6分'
    },
    {
      slug: 'winter-kumamoto-hirayama-onsen-sulfur-bihada-stay',
      title: '【11・12月熊本・平山温泉の竹林秘湯と極上トロトロ美肌硫黄泉】加藤清正の霊泉伝説・特選肥後あか牛＆霜降り馬刺し会席の宿5選',
      description: '11月から12月にかけて熊本県北部・山鹿市の山あいに隠れる「平山温泉」は、冷涼な初冬の大気の中に立ち上る乳白色の湯けむりと、風にそよぐ緑鮮やかな竹林のコントラストが息をのむ静寂の秘湯郷。平安末期に皮膚病を治したと伝わり、戦国武将・加藤清正公が重い汗疹を癒やしたと伝えられる名湯は、pH9.7を誇る強アルカリ性単純硫黄泉。まるで美容液に浸かっているかのような驚異的なトロトロ・ヌルヌルとした湯ざわりは全国の温泉愛好家を圧倒します。全室離れや客室露天を備えた大人の隠れ宿で、ジューシーな赤身が旨い肥後あか牛の溶岩焼きや極上本場馬刺しを味わう厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: 'pH9.7奇跡の美容液トロトロ硫黄泉＆初冬竹林隠れ宿・加藤清正霊泉・肥後あか牛',
      readTime: '6分'
    },
    {
      slug: 'winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay',
      title: '【11・12月山口・萩温泉郷の維新城下町と初冬解禁本場天然とらふぐ】萩甘鯛・長州黒毛和牛＆日本海夕景露天の宿5選',
      description: '11月から12月にかけて世界遺産の城下町・山口県萩市は、白壁の武家屋敷通りに初冬の柔らかな日差しが差し込み、日本海の荒波が育む極上の冬の味覚シーズンへと突入します。下関と並ぶ本場山口の「天然とらふぐ（ふく料理）」が本格解禁を迎え、透き通るような薄造り（てっさ）、熱々のふぐちり鍋（てっちり）、香ばしいヒレ酒が膳を彩ります。さらに萩港特産の高級魚「萩の甘鯛（アマダイ）」の松笠揚げや、きめ細かな肉質の「長州藤光牛・長州黒かしわ」を堪能。開湯20余年ながら塩分を含み体の芯まで温める萩温泉の露天風呂から日本海と菊ヶ浜の夕景を望む厳選名旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '世界遺産萩城下町＆11月解禁本場天然とらふぐ・萩甘鯛・菊ヶ浜夕景露天',
      readTime: '6分'
    },
    {
      slug: 'winter-akita-oga-onsen-ishiyaki-namahage-snow-stay',
      title: '【11・12月秋田・男鹿温泉郷の初冬名物ハタハタと豪快石焼き鍋】なまはげ伝承の里・日本海荒波雪見露天＆海水の温まり湯の宿5選',
      description: '11月から12月にかけて日本海に突き出た秋田県・男鹿半島は、初冬の雷鳴とともに大群で沿岸に押し寄せる秋田の県魚「ハタハタ（雷魚）」の漁獲シーズンを迎え、半島全体が冬の到来の歓喜に包まれます。千度近くまで真っ赤に熱した地元の溶岩石（男鹿石）を木樽の出汁に一気に投入して瞬間沸騰させる男鹿の伝統漁師料理「名物・石焼き鍋」は、魚の旨味を閉じ込めた大迫力の郷土グルメ。さらに大晦日の伝統行事「なまはげ」の神秘的な文化に触れ、海水に近い高濃度の塩分を含み湯冷め知らずの「男鹿温泉（塩化物泉）」の雪見露天風呂に浸かる、初冬の男鹿半島厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初冬名物ハタハタ＆千度男鹿石の豪快石焼き鍋・なまはげ伝承・海水の温まり湯',
      readTime: '6分'
    }
  ];

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

  console.log('\n[Complete] Round 71 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
