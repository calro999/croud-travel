const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateHakodatePage } = require('./scripts/round62/generate_hakodate');
const { generateTendoPage } = require('./scripts/round62/generate_tendo');
const { generateYamanakaPage } = require('./scripts/round62/generate_yamanaka');
const { generateBandaiAtamiPage } = require('./scripts/round62/generate_bandaiatami');
const { generateTakeoPage } = require('./scripts/round62/generate_takeo');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 62: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round62_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateHakodatePage(rawHotels.hakodate);
  generateTendoPage(rawHotels.tendo);
  generateYamanakaPage(rawHotels.yamanaka);
  generateBandaiAtamiPage(rawHotels.bandaiatami);
  generateTakeoPage(rawHotels.takeo);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay',
    'winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay',
    'winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay',
    'winter-fukushima-bandai-atami-onsen-bihada-swan-stay',
    'winter-saga-takeo-onsen-romon-saga-beef-stay'
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
      slug: 'winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay',
      title: '【11・12月函館湯の川温泉の冬名湯と漁火海鮮】津軽海峡インフィニティ露天と函館クリスマスファンタジー・冬イカ＆毛蟹会席の宿5選',
      description: '11月から12月にかけて津軽海峡にイカ釣り漁船の幻想的な漁火（いさりび）が瞬く北海道三大温泉郷「湯の川温泉」。海と一体化するインフィニティ露天風呂、赤レンガ倉庫を彩る巨大ツリー「函館クリスマスファンタジー」、函館朝市直送の透き通る冬イカ刺しや濃厚な毛蟹、大沼牛を堪能。初冬の函館を満喫する極上名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '函館湯の川津軽海峡漁火露天＆冬イカ毛蟹大沼牛',
      readTime: '6分'
    },
    {
      slug: 'winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay',
      title: '【11・12月天童温泉の冬名湯と山形美食】将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選',
      description: '将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと、極上の霜降りを誇るブランド黒毛和牛「山形牛」のすき焼き・ステーキ会席。初冬の奥羽山脈の雪見露天風呂、山寺（立石寺）の初冬散策を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '天童将棋の里奥羽山脈雪見露天＆旬ラフランス山形牛',
      readTime: '6分'
    },
    {
      slug: 'winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay',
      title: '【11・12月加賀山中温泉の冬名湯と加能ガニ】鶴仙渓雪景色・芭蕉ゆかりの美肌湯と青タグ加能蟹＆能登牛会席の宿5選',
      description: '松尾芭蕉が「有馬・草津と並ぶ扶桑三名湯」と称賛した石川・加賀の名湯「山中温泉」。11月6日のズワイガニ漁解禁で歓喜に沸く北陸の冬。石川県産水揚げの証である「青いタグ」付き極上加能ガニや、内子外子をたっぷり抱えた香箱ガニ（セイコガニ）、極上能登牛を山中漆器の器で堪能。名勝・鶴仙渓の初冬雪景色と露天風呂を満喫する厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '山中鶴仙渓雪景色＆青タグ加能ガニ香箱ガニ能登牛',
      readTime: '6分'
    },
    {
      slug: 'winter-fukushima-bandai-atami-onsen-bihada-swan-stay',
      title: '【11・12月磐梯熱海温泉の冬名湯と美肌ぬる湯】萩姫伝説の美人の湯・猪苗代湖白鳥飛来と極上福島牛＆会津新酒の宿5選',
      description: '南北朝時代の萩姫伝説が息づく郡山の奥座敷「磐梯熱海温泉」。pH9を超えるアルカリ性単純泉と、元湯の「ぬる湯」＆自家源泉「あつ湯」の交互浴で至高の美肌効果を体感。11月にシベリアから猪苗代湖へ飛来する優美な白鳥群と磐梯山初冠雪、極上の霜降り福島牛、会津郷土料理こづゆ、初冬のしぼりたて新酒地酒を堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '磐梯熱海萩姫美肌ぬる湯＆猪苗代湖白鳥極上福島牛',
      readTime: '6分'
    },
    {
      slug: 'winter-saga-takeo-onsen-romon-saga-beef-stay',
      title: '【11・12月武雄温泉の冬名湯と最高峰佐賀牛】国重文・朱塗り楼門と1300年美肌古湯・御船山初冬風情＆極上佐賀牛会席の宿5選',
      description: '1300年の歴史を誇り、東京駅を設計した辰野金吾が手がけた国重要文化財「朱塗りの楼門」がシンボルの名湯「武雄温泉」。宮本武蔵やシーボルトも浸かった弱アルカリ性単純温泉のトロリとした美肌湯で癒やされ、11月の御船山楽園紅葉ライトアップから初冬の静寂、最高峰の肉質等級を誇る「佐賀牛」の鉄板焼き・すき焼き、とろける温泉湯豆腐を堪能。西九州新幹線でアクセスも快適な厳選名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '武雄国重文朱塗り楼門美肌古湯＆最高峰A5佐賀牛',
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
    <lastmod>2026-09-27</lastmod>
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

  console.log('\n[Complete] Round 62 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
