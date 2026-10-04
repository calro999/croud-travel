const fs = require('fs');
const path = require('path');

const { generateTokushimaMinamiawaPage } = require('./scripts/round120/generate_tokushima_minamiawa');
const { generateMiyazakiMiyakonojoPage } = require('./scripts/round120/generate_miyazaki_miyakonojo');
const { generateSaitamaNagatoroPage } = require('./scripts/round120/generate_saitama_nagatoro');
const { generateOsakaMinooPage } = require('./scripts/round120/generate_osaka_minoo');
const { generateShigaOmihachimanPage } = require('./scripts/round120/generate_shiga_omihachiman');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 120: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round120_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateTokushimaMinamiawaPage, data: rawHotels.tokushima_minamiawa_yakuouji_iseebi.hotels },
    { fn: generateMiyazakiMiyakonojoPage, data: rawHotels.miyazaki_miyakonojo_kobayashi_kirishima.hotels },
    { fn: generateSaitamaNagatoroPage, data: rawHotels.saitama_nagatoro_hodosan_roubai.hotels },
    { fn: generateOsakaMinooPage, data: rawHotels.osaka_minoo_katsuo_ji_botannabe.hotels },
    { fn: generateShigaOmihachimanPage, data: rawHotels.shiga_omihachiman_hachimanbori_omigyu.hotels }
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
      slug: 'winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay',
      title: '美波＆海陽町！厄除け大師「薬王寺」初詣と冬が旬の天然伊勢海老・アオリイカ＆太平洋絶景温泉名宿',
      desc: '四国屈指の厄除け根本道場・薬王寺の初詣と厄坂参拝。冬の澄んだ太平洋を望む大浜海岸と、旨味が極まる天然活伊勢海老・阿波尾鶏＆極上美肌温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay',
      title: '都城＆小林・えびの！白銀の霧島連山と狭野神社・霧島東神社初詣・日本一の都城産宮崎牛＆美肌温泉名宿',
      desc: '白銀に輝く霊峰高千穂峰と天孫降臨神話の古刹初詣。内閣総理大臣賞受賞の日本一・都城産宮崎牛すき焼きと本格芋焼酎、一万年石風呂の黄金炭酸泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay',
      title: '長瀞＆秩父・宝登山！冬の風物詩長瀞こたつ舟下りと早咲き宝登山ロウバイ園・宝登山神社初詣＆武州和牛名宿',
      desc: '約3000本の黄色い花弁が甘く香る宝登山ロウバイ園と秩父三社・宝登山神社初詣。岩畳を巡る熱々こたつ舟下りと名物秩父豚みそ丼・武州和牛会席…',
      badge: '12・1月特集'
    },
    {
      slug: 'winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay',
      title: '箕面＆能勢・池田！日本の滝百選「箕面大滝」冬情趣と勝運の寺「勝尾寺」初詣・能勢の天然猪鍋＆天空温泉名宿',
      desc: '境内に無数の勝ちダルマが並ぶ勝運の寺・勝尾寺初詣。静寂に包まれる箕面大滝ともみじの天ぷら、冬が最旬の能勢天然ぼたん鍋と大阪夜景一望露天…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shiga-omihachiman-hachimanbori-himure-omigyu-stay',
      title: '近江八幡＆安土・東近江！雪化粧の八幡堀冬情趣と日牟禮八幡宮初詣・日本三大和牛近江牛すき焼き＆琵琶湖名宿',
      desc: '白壁土蔵が水面に映える八幡堀の幻想的な雪景色と近江商人の守護神・日牟禮八幡宮初詣。400年の伝統を誇る近江牛極上すき焼きと赤こんにゃく…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features array in src/app/features/page.tsx
  const searchPattern = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[';
  const insertionPoint = featuresContent.indexOf(searchPattern);
  if (insertionPoint !== -1) {
    const afterBracket = insertionPoint + searchPattern.length;
    const itemsCode = newFeatures.map(f => `
            {
              slug: '${f.slug}',
              title: "${f.title}",
              desc: "${f.desc}",
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

  const today = '2026-10-05';
  const newSitemapEntries = slugs.map(slug => `  <url>
    <loc>https://croud-travel.com/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
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
    `- https://croud-travel.com/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay/: 美波＆海陽町！厄除け大師「薬王寺」初詣と冬が旬の天然伊勢海老・アオリイカ＆太平洋絶景温泉名宿5選`,
    `- https://croud-travel.com/winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay/: 都城＆小林・えびの！白銀の霧島連山と狭野神社・霧島東神社初詣・日本一の都城産宮崎牛＆美肌温泉名宿5選`,
    `- https://croud-travel.com/winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay/: 長瀞＆秩父・宝登山！冬の風物詩長瀞こたつ舟下りと早咲き宝登山ロウバイ園・宝登山神社初詣＆武州和牛名宿5選`,
    `- https://croud-travel.com/winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay/: 箕面＆能勢・池田！日本の滝百選「箕面大滝」冬情趣と勝運の寺「勝尾寺」初詣・能勢の天然猪鍋＆天空温泉名宿5選`,
    `- https://croud-travel.com/winter-shiga-omihachiman-hachimanbori-himure-omigyu-stay/: 近江八幡＆安土・東近江！雪化粧の八幡堀冬情趣と日牟禮八幡宮初詣・日本三大和牛近江牛すき焼き＆琵琶湖名宿5選`
  ].join('\n');

  llmsContent = llmsContent.trim() + '\n' + newLlmsEntries + '\n';
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('- Updated: public/llms-full.txt with 5 new entries');

  console.log('\n================================================================');
  console.log('Round 120 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
