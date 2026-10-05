const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateShogawaPage } = require('./scripts/round68/generate_shogawa');
const { generateAkakuraPage } = require('./scripts/round68/generate_akakura');
const { generateAsamaPage } = require('./scripts/round68/generate_asama');
const { generateShodoshimaPage } = require('./scripts/round68/generate_shodoshima');
const { generateMinamichitaPage } = require('./scripts/round68/generate_minamichita');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 68: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round68_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateShogawaPage(rawHotels.shogawa);
  generateAkakuraPage(rawHotels.akakura);
  generateAsamaPage(rawHotels.asama);
  generateShodoshimaPage(rawHotels.shodoshima);
  generateMinamichitaPage(rawHotels.minamichita);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-toyama-shogawa-onsen-snow-cruise-crab-stay',
    'winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay',
    'winter-nagano-asama-onsen-matsumoto-castle-snow-stay',
    'winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay',
    'winter-aichi-minamichita-onsen-torafugu-chita-beef-stay'
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
      slug: 'winter-toyama-shogawa-onsen-snow-cruise-crab-stay',
      title: '【11・12月富山・庄川温泉郷の雪見庄川峡遊覧船と冬の味覚】富山湾紅ズワイガニ・寒ブリ・白えび＆源泉美肌の宿5選',
      description: '11月下旬から12月にかけて富山県・庄川峡は、両岸の断崖絶壁が白銀の雪化粧をまとい、水墨画のような幽玄の冬景色が広がります。庄川峡遊覧船（小牧ダム〜大牧）から望む雪景色と湖面の水鏡、開湯以来湯治客を癒やし続ける庄川清流温泉・鳥越温泉のにごり湯や炭酸泉、11月に本格シーズンを迎える富山湾の紅ズワイガニ、氷見・新湊直送の脂が乗った極上寒ブリの刺身とブリしゃぶ、宝石のような白えびのかき揚げ、富山牛のサーロインを堪能する名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '雪見庄川峡遊覧船＆富山湾紅ズワイガニ氷見寒ブリ白えび富山牛',
      readTime: '6分'
    },
    {
      slug: 'winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay',
      title: '【11・12月新潟・妙高赤倉温泉の初雪妙高山と開湯200年名湯】硫酸塩・炭酸水素塩のダブル美肌露天・冬のどぐろ塩焼き＆新潟和牛会席の宿5選',
      description: '11月から12月にかけて新潟県・妙高山麓は、標高2,454mの日本百名山・妙高山が初雪の白銀に輝き、豪雪地帯ならではの純白の冬景色が広がります。文化13年（1816年）開湯、妙高山北地獄谷から湧き出る源泉は、「肌を滑らかにする炭酸水素塩泉」と「肌を保湿しコーティングする硫酸塩泉」を併せ持つ日本有数のダブル美肌温泉。創業1937年のクラシックリゾートからの雪海パノラマ、日本海・直江津港や能生漁港から直送される高級魚「冬のどぐろ」の塩焼きや刺身、とろける霜降りの「にいがた和牛」、妙高・魚沼産コシヒカリの新米と地酒を味わう至高の妙高名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '妙高山初雪絶景＆開湯200年ダブル美肌湯日本海のどぐろ新潟和牛',
      readTime: '6分'
    },
    {
      slug: 'winter-nagano-asama-onsen-matsumoto-castle-snow-stay',
      title: '【11・12月信州松本浅間温泉の国宝松本城初雪と城下町名湯】開湯1300年アルカリ単純泉・挽きたて信州新そば＆信州プレミアム牛すき焼きの宿5選',
      description: '11月から12月にかけて長野県・松本平は、雪化粧した北アルプスの山並みが澄み渡る初冬の青空にそびえ立ち、黒漆と白漆喰の国宝松本城が幻想的な冬景色を見せます。飛鳥時代（天武天皇の時代）開湯と伝わり、江戸時代には松本藩主の御殿湯として愛された浅間温泉は、湯量豊富な無色透明の弱アルカリ性単純温泉。11月に旬を迎える香り高い「信州新そば」、長野県が誇る最高峰ブランド「信州プレミアム牛肉」のとろけるすき焼きや陶板焼き、信州サーモン、安曇野わさび、城下町の地酒を堪能する大人の湯宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '国宝松本城初雪＆開湯1300年藩主御殿湯挽きたて信州新そば信州牛',
      readTime: '6分'
    },
    {
      slug: 'winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay',
      title: '【11・12月小豆島温泉の初冬寒霞渓奇岩絶景とエンジェルロード夕日】海一望露天風呂・小豆島オリーブ牛ステーキ＆冬の讃岐でんぶく会席の宿5選',
      description: '11月下旬から12月にかけて瀬戸内海の小豆島は、温暖で穏やかな気候の中、日本三大渓谷美「寒霞渓」の紅葉から初冬の岩肌へと移ろうダイナミックな景観と、オリーブの収穫・搾りたて初摘みオリーブオイルの豊かな香りに包まれます。干潮時に海の中から現れる神秘の砂の道「エンジェルロード」の冬の澄んだ夕景、瀬戸内海を行き交う船を眺めながら癒やされる絶景温泉露天風呂、オリーブの搾り果実で育った最高級黒毛和牛「小豆島オリーブ牛」、冬の瀬戸内海の隠れた極上フグ「讃岐でんぶく」、島仕込み手延べそうめんや木桶仕込み醤油会席を味わう至高のアイランド名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '寒霞渓奇岩絶景＆エンジェルロード夕日小豆島オリーブ牛讃岐でんぶく',
      readTime: '6分'
    },
    {
      slug: 'winter-aichi-minamichita-onsen-torafugu-chita-beef-stay',
      title: '【11・12月南知多温泉郷の伊勢湾パノラマ夕日露天と本場とらふぐ】天然とらふぐフルコース・知多牛ステーキ＆日間賀島たこ会席の海辺宿5選',
      description: '11月から12月にかけて愛知県・知多半島の最南端に位置する南知多温泉郷（内海・山海・師崎）は、全国屈指の天然とらふぐ水揚げ高を誇る日間賀島・篠島・師崎港から、冬の味覚の王様「とらふぐ」が届く最高潮シーズンを迎えます。伊勢湾の水平線に沈む黄金色の夕日と満天の星を望む展望露天風呂、地下1,300mから湧き出る濃厚な塩化物強塩泉（熱の湯）、薄造りの透き通るてっさ、旨味あふれるてっちり（ふぐ鍋）、香ばしいふぐ唐揚げやひれ酒、愛知の誇る銘柄黒毛和牛「知多牛」のヒレ・サーロインステーキ、名物タコ料理を堪能する海辺の名宿5選を徹底解説。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '伊勢湾夕日絶景露天＆本場日間賀島天然とらふぐ知多牛ステーキ',
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

  console.log('\n[Complete] Round 68 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
