const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateShizuokaDogashimaPage } = require('./scripts/round79/generate_shizuoka_dogashima');
const { generateFukuokaYanagawaPage } = require('./scripts/round79/generate_fukuoka_yanagawa');
const { generateOitaNagayuPage } = require('./scripts/round79/generate_oita_nagayu');
const { generateShimaneMatsuePage } = require('./scripts/round79/generate_shimane_matsue');
const { generateFukushimaUrabandaiPage } = require('./scripts/round79/generate_fukushima_urabandai');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 79: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round79_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateShizuokaDogashimaPage(rawHotels.shizuoka_dogashima);
  generateFukuokaYanagawaPage(rawHotels.fukuoka_yanagawa);
  generateOitaNagayuPage(rawHotels.oita_nagayu);
  generateShimaneMatsuePage(rawHotels.shimane_matsue);
  generateFukushimaUrabandaiPage(rawHotels.fukushima_urabandai);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay',
    'winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay',
    'winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay',
    'winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay',
    'winter-fukushima-urabandai-onsen-goshikinuma-snow-fukushimagyu-stay'
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
      slug: 'winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay',
      title: '【11・12月静岡・西伊豆堂ヶ島温泉の夕陽百選＆駿河湾越しの雪化粧富士】名物戸田高足ガニ＆伊勢海老・地金目鯛会席を堪能する絶景オーシャンビュー名宿5選',
      description: '11月から12月にかけて、西伊豆・堂ヶ島温泉は空気が澄み渡り、駿河湾の彼方に白雪を戴く雄大な富士山と、日本屈指の美しさを誇る「夕陽百選」の黄金色の落日が重なる奇跡のベストシーズンを迎えます。奇岩が織りなす「伊豆の松島」堂ヶ島天窓洞や三四郎島の絶景、海辺に湧く肌触りなめらかな硫酸塩温泉。そして初冬に旬の最盛期を迎える駿河湾深海の名物「戸田の高足ガニ（タカアシガニ）」や伊勢海老、脂の乗った地金目鯛の姿煮を味わう絶景オーシャンビュー名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '夕陽百選駿河湾パノラマ＆雪化粧富士・戸田高足ガニと地金目鯛姿煮',
      readTime: '6分'
    },
    {
      slug: 'winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay',
      title: '【11・12月福岡・水郷柳川の冬の風物詩「こたつ舟」川下り】名物元祖うなぎのせいろ蒸し＆博多和牛会席を味わう城下町・掘割温泉名宿5選',
      description: '11月から12月にかけて、北原白秋の故郷として知られる水郷・福岡県柳川は、どんこ舟に温かい火鉢やこたつを乗せた冬の風物詩「こたつ舟」が運航を開始し、1年で最も情緒豊かな季節を迎えます。掘割沿いの柳並木やなまこ壁の白壁土塀をぬくぬく温まりながら巡る川下り、旧柳川藩主立花家別邸「御花」の美しい松涛園、そして冷えた身体を芯から解きほぐす天然温泉。湯気を上げる名物「元祖うなぎのせいろ蒸し」の香ばしいタレの香り、有明海の冬の珍味、極上の博多和牛会席を味わう城下町の厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '冬のこたつ舟川下り＆名物元祖うなぎのせいろ蒸し・博多和牛会席と名勝松涛園',
      readTime: '6分'
    },
    {
      slug: 'winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay',
      title: '【11・12月大分・竹田長湯温泉の世界屈指の天然炭酸泉とくじゅう初雪絶景】名物清流エノハ料理＆極上豊後牛会席を堪能する秘湯治名宿5選',
      description: '11月から12月にかけて、大分県竹田市の芹川沿いに広がる長湯温泉は、初雪を冠した雄大なくじゅう連山のパノラマと、世界屈指の湧出量・高濃度を誇る「奇跡の天然炭酸泉」が旅人を魅了します。ぬるめの湯に浸かると全身が銀色の炭酸泡に包まれ、血行促進と芯からのポカポカ感が持続する日本有数の名湯。「飲んで効き 浴ちて効く」長湯の名湯巡りやラムネ温泉館を堪能した後は、芹川の清流が育んだ「清流の女王エノハ（ヤマメ）」の塩焼きや骨酒、極上のおおいた豊後牛会席に舌鼓。初冬の静寂と滋味あふれる名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '世界屈指の天然炭酸泉＆初雪くじゅう連山・清流エノハ料理と極上豊後牛',
      readTime: '6分'
    },
    {
      slug: 'winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay',
      title: '【11・12月島根・松江しんじ湖温泉の宍道湖夕日絶景と冬の味覚】解禁松葉ガニ＆寒シジミ鍋・しまね和牛会席を愉しむ湖畔レイクビュー名宿5選',
      description: '11月から12月にかけて、水の都・松江の宍道湖畔に湧く松江しんじ湖温泉は、澄み切った初冬の空に広がる「夕日百選」宍道湖の真紅のサンセットと、11月に解禁を迎えた冬の味覚の王者「松葉ガニ」が揃う最高のハイシーズンを迎えます。湖上を茜色に染める夕景と飛来する冬鳥のシルエット、国宝・松江城の堀川遊覧船「こたつ船」で温まる城下町巡り、77度を超える高温良質なナトリウム・カルシウム硫酸塩泉のレイクビュー露天風呂。旨味あふれる松葉ガニフルコースや、ぷっくり肥えた宍道湖産寒シジミ鍋、極上しまね和牛を堪能する湖畔の厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '夕日百選宍道湖サンセット＆解禁松葉ガニ・寒シジミ鍋・しまね和牛レイクビュー',
      readTime: '6分'
    },
    {
      slug: 'winter-fukushima-urabandai-onsen-goshikinuma-snow-fukushimagyu-stay',
      title: '【11・12月福島・裏磐梯温泉郷の五色沼初雪ウォークと磐梯山雪景色】極上福島牛ステーキ＆会津地鶏鍋・桧原湖ワカサギを味わう高原リゾート名宿5選',
      description: '11月から12月にかけて、標高約800mの磐梯高原に位置する福島県・裏磐梯温泉郷は、青やエメラルドグリーンに輝く神秘の湖沼群「五色沼」に純白の初雪が降り積もり、冬の幻想美が幕を開けます。堂々たる雪化粧の磐梯山を望む絶景スノーウォーク、冬の桧原湖名物「ワカサギ釣り（暖房完備ドーム船）」の開幕、鉄分や塩分を豊富に含み体の芯から温まる源泉濁り湯露天風呂。夕食にはサシと赤身のバランスが絶妙な「福島牛ステーキ」や、旨味濃厚な会津地鶏鍋、会津伝統の雪下野菜、冬限定の搾りたて地酒を味わう高原の厳選リゾート・温泉名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初雪の五色沼スノーウォーク＆白銀磐梯山・桧原湖ワカサギと極上福島牛ステーキ',
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

  console.log('\n[Complete] Round 79 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
