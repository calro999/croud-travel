const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateChibaMinamibosoPage } = require('./scripts/round72/generate_chiba_minamiboso');
const { generateShigaOgotoPage } = require('./scripts/round72/generate_shiga_ogoto');
const { generateShizuokaYaizuPage } = require('./scripts/round72/generate_shizuoka_yaizu');
const { generateShimaneIzumoPage } = require('./scripts/round72/generate_shimane_izumo');
const { generateTokushimaNarutoPage } = require('./scripts/round72/generate_tokushima_naruto');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 72: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round72_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateChibaMinamibosoPage(rawHotels.chiba_minamiboso);
  generateShigaOgotoPage(rawHotels.shiga_ogoto);
  generateShizuokaYaizuPage(rawHotels.shizuoka_yaizu);
  generateShimaneIzumoPage(rawHotels.shimane_izumo);
  generateTokushimaNarutoPage(rawHotels.tokushima_naruto);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-chiba-minamiboso-onsen-ise-ebi-oceanview-stay',
    'winter-shiga-ogoto-onsen-biwako-omigyu-stay',
    'winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay',
    'winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay',
    'winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay'
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
      slug: 'winter-chiba-minamiboso-onsen-ise-ebi-oceanview-stay',
      title: '【11・12月千葉・南房総温泉郷の温暖避寒旅と旬の伊勢海老・房州地魚】太平洋パノラマ絶景露天＆貸切風呂の宿5選',
      description: '11月から12月にかけて、東京湾アクアラインで都心からわずか90分で訪れることができる房総半島南部「南房総温泉郷（鴨川・小湊・千倉・館山・白浜）」は、黒潮がもたらす温暖な海洋性気候に包まれ、冬の厳しい寒さを逃れて穏やかな海風を感じられる関東屈指の避寒リゾートです。11・12月は秋に解禁された名物「房州伊勢海老」が最も甘みと身の締まりを極める最盛期を迎え、金目鯛の姿煮や房州アワビ、朝獲れ地魚姿造りが食卓を彩ります。太平洋の水平線から昇る神々しい朝焼けを露天風呂から独占する、初冬の南房総おすすめ名旅館・絶景リゾート5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '温暖避寒気候＆11・12月房州伊勢海老最盛期・太平洋日の出パノラマ露天',
      readTime: '6分'
    },
    {
      slug: 'winter-shiga-ogoto-onsen-biwako-omigyu-stay',
      title: '【11・12月滋賀・おごと温泉の初冬びわ湖景観と開湯千二百年美肌霊泉】比叡山初雪・特選近江牛＆冬限定真鴨鍋会席の宿5選',
      description: '11月から12月にかけて、京都駅からJR湖西線でわずか20分という好立地にありながら、雄大な琵琶湖の湖畔に静かに佇む「おごと温泉（雄琴温泉）」。平安時代初頭、比叡山延暦寺を開いた伝教大師・最澄によって開湯されたと伝わる歴史ある古湯は、pH9.0を誇る高アルカリ性単純温泉で、肌の角質をやさしく落としてしっとり潤す「美肌の湯」として名高い名泉です。初冬には比叡山の峰々が初冠雪の白をまとい、朝夕の琵琶湖は澄み切った水面が神秘的な茜色に染まります。夕食には日本三大和牛「近江牛」のとろける霜降りステーキやすき焼き、そして冬の琵琶湖の風物詩である天然真鴨の「鴨鍋」を味わう厳選名旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '比叡山初雪＆pH9.0美肌霊泉・日本三大和牛近江牛＆初冬限定真鴨鍋',
      readTime: '6分'
    },
    {
      slug: 'winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay',
      title: '【11・12月静岡・焼津温泉の初冬駿河湾越し富士山絶景と天然南マグロ】深層水高張性美肌温まりの湯＆極上鮪尽くしの宿5選',
      description: '11月から12月にかけて駿河湾に面した水産都市・静岡県焼津市は、一年の中で最も大気が澄み渡り、紺碧の駿河湾越しに純白の雪を戴く雄大な富士山がくっきりと浮かび上がる絶景のピークを迎えます。日本屈指の遠洋漁業基地である焼津港には、南氷洋の荒波で育ち濃厚な甘みと上品な脂の乗りを誇る「天然南マグロ（ミナミマグロ・インドマグロ）」が極上の鮮度で水揚げされます。地下1500メートルの太古の地層から湧出する「焼津温泉」は、海水の約半分の高濃度塩分を含む弱アルカリ性カルシウム・ナトリウム-塩化物泉で、芯まで温まり湯冷めしない奇跡の美肌泉。駿河湾富士見露天と極上南マグロ会席を堪能する厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '駿河湾越し冠雪富士山絶景＆焼津港天然南マグロ・1900万年前の高張性強塩泉',
      readTime: '6分'
    },
    {
      slug: 'winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay',
      title: '【11・12月島根・出雲大社周辺温泉の神在月・神在祭参拝と初冬解禁日本海の幸】出雲そば・しまね和牛＆日本海夕景露天の宿5選',
      description: '旧暦10月（新暦11月）を迎えると、全国の八百万（やおよろず）の神々が出雲の地に集まることから「神在月（かみありづき）」と呼ばれ、出雲大社では「神迎祭」「神在祭」「縁結大祭」が厳かに執り行われます。11月から12月の出雲地方は、人生の良縁や幸福を祈る参拝客の敬虔な熱気と、日本海から届く初冬の豊かな海の幸で満たされます。11月上旬に解禁される山陰の冬の王者「松葉ガニ」や脂の乗った「ノドグロ」、名物「出雲そば」、そして最高峰の肉質を誇る「しまね和牛」の極上会席。出雲大社まで徒歩圏の参拝の宿や、日本海の荒波と夕日を望む海辺の隠れ宿、川のせせらぎに癒やされる源泉掛け流しの名旅館5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '神在月・神在祭開運参拝＆11月解禁松葉ガニ・ノドグロ・しまね和牛会席',
      readTime: '6分'
    },
    {
      slug: 'winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay',
      title: '【11・12月徳島・鳴門温泉の冬海峡絶景と激流が育む天然鳴門鯛】大塚国際美術館アート鑑賞・特選阿波牛＆鳴門大橋展望露天の宿5選',
      description: '11月から12月にかけて、四国の東の玄関口・徳島県鳴門市は、鳴門海峡を吹き抜ける心地よい冬の潮風と、世界三大潮流の一つが織りなす大迫力の「冬の渦潮」の雄姿が旅人を迎えます。激しい潮流に逆らって泳ぎ、骨に「鳴門骨」と呼ばれるコブができるほど鍛え上げられた「鳴門鯛（天然真鯛）」は、冬に越冬のための上質な脂を蓄え、一年で最も美味な旬を迎えます。滋味豊かな「鳴門わかめ」、すだちを添えた「阿波牛」「阿波尾鶏」の極上会席。さらに世界の名画を原寸大で再現した「大塚国際美術館」のゆったりとした冬のアート鑑賞と、鳴門海峡や大鳴門橋を一望する海辺の温泉露天風呂に癒やされる厳選宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: '鳴門海峡大迫力冬渦潮＆激流育ち天然鳴門鯛・大塚国際美術館アート旅',
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

  console.log('\n[Complete] Round 72 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
