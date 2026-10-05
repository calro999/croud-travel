const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateYufuinPage } = require('./scripts/round65/generate_yufuin');
const { generateHimiPage } = require('./scripts/round65/generate_himi');
const { generateKawaguchikoPage } = require('./scripts/round65/generate_kawaguchiko');
const { generateIbusukiPage } = require('./scripts/round65/generate_ibusuki');
const { generateHakubaPage } = require('./scripts/round65/generate_hakuba');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 65: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round65_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateYufuinPage(rawHotels.yufuin);
  generateHimiPage(rawHotels.himi);
  generateKawaguchikoPage(rawHotels.kawaguchiko);
  generateIbusukiPage(rawHotels.ibusuki);
  generateHakubaPage(rawHotels.hakuba);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay',
    'winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay',
    'winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay',
    'winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay',
    'winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay'
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
      slug: 'winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay',
      title: '【11・12月由布院温泉の冬名湯と金鱗湖の幻想朝霧】由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席の宿5選',
      description: '11月から12月にかけて大分県・由布院温泉は、冷え込んだ早朝に金鱗湖から立ち昇る幻想的な「朝霧」と、初雪を冠した優美な由布岳の絶景に包まれます。メタケイ酸を豊富に含む弱アルカリ性のまろやかな美肌の湯、全室離れや客室露天風呂で過ごす静謐な冬のプライベートタイム、最高峰ブランド黒毛和牛「おおいた和牛（豊後牛）」の炭火焼きやすき焼き、大分特産「冠地鶏」のあったか地鶏鍋を堪能する至高の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '由布院金鱗湖朝霧＆由布岳初雪離れ露天おおいた豊後牛冠地鶏',
      readTime: '6分'
    },
    {
      slug: 'winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay',
      title: '【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選',
      description: '11月下旬から12月にかけて富山湾で水揚げのピークを迎える冬の味覚の王様「ひみ寒ぶり」と、海越しに白銀の3,000m級立山連峰を望む富山県・氷見温泉郷。冷え込んだ早朝に富山湾から立ち上る幻想的な「気嵐（けあらし）」、太古の化石海水を湛えた美肌と保温の強塩泉露天風呂、脂が乗った極上の寒ブリ刺身・ブリしゃぶ・ブリ大根、希少な黒毛和牛「氷見牛」のステーキを心ゆくまで堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: 'ひみ寒ぶり宣言＆海越し雪化粧立山連峰露天極上氷見牛ブリしゃぶ',
      readTime: '6分'
    },
    {
      slug: 'winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay',
      title: '【11・12月富士河口湖温泉郷の澄み渡る白銀富士と紅富士絶景】湖畔展望露天・極上甲州牛すき焼き＆熱々名物ほうとう会席の宿5選',
      description: '11月から12月にかけて富士五湖・河口湖畔は、1年の中で最も空気が澄み渡り、雪化粧を纏った霊峰富士の絶景が美しく輝く年間最高のシーズンを迎えます。早朝の朝日に赤く染まる「紅富士」や湖面に映る「逆さ富士」を望む展望客室露天風呂、硫酸塩泉のまろやかな温まり美肌湯、山梨が誇る最高峰ブランド黒毛和牛「甲州牛」のすき焼きや陶板ステーキ、熱々のかぼちゃ名物ほうとう会席を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '澄み渡る初冬の雪化粧富士＆紅富士逆さ富士露天甲州牛ほうとう',
      readTime: '6分'
    },
    {
      slug: 'winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay',
      title: '【11・12月指宿温泉の南国初冬リゾートと天然砂むし温泉】開聞岳望む錦江湾露天・極上かごしま黒豚しゃぶしゃぶ＆薩摩美味会席の宿5選',
      description: '本州が本格的な寒さを迎える11月から12月にかけて、日中は20℃前後のぽかぽかとした暖かさが残る南国薩摩・鹿児島県「指宿温泉」。海岸から自然湧出する温泉熱を利用した世界唯一の「天然砂むし温泉」による究極のデトックス体験、薩摩富士「開聞岳」と穏やかな錦江湾を望む絶景パノラマ露天風呂、とろける甘みと極上の肉質を誇る「かごしま黒豚」しゃぶしゃぶ、さつま地鶏や錦江湾の旬魚、本場薩摩芋焼酎を堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '南国初冬の天然砂むし温泉＆開聞岳錦江湾露天かごしま黒豚しゃぶしゃぶ',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay',
      title: '【11・12月白馬山麓温泉の初雪パウダースノーと北アルプス絶景】白銀連峰望む露天・pH11高アルカリ美肌湯と極上信州牛＆信州サーモン会席の宿5選',
      description: '11月下旬から12月にかけて北アルプスの名峰・白馬連峰が純白の雪を纏い、世界中からスキーヤーや旅人が集う国際山岳リゾート・長野県「白馬村」。日本屈指の水素イオン濃度pH11.2以上を誇る強アルカリ性美肌名湯「白馬八方温泉」や、3,000m級の白銀パノラマを仰ぐ絶景露天風呂、暖炉の火が揺らぐヨーロッパ調のクラシックホテル、厳しい寒さを越えて旨味を凝縮させた極上「信州プレミアム牛」ステーキや清流「信州サーモン」会席を堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '白銀北アルプス連峰絶景露天＆pH11超美肌湯信州牛信州サーモン',
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

  console.log('\n[Complete] Round 65 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
