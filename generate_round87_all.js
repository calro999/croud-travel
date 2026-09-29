const fs = require('fs');
const path = require('path');

const { generateMieTobaOsaatsuPage } = require('./scripts/round87/generate_mie_toba_osaatsu');
const { generateNagasakiObamaPage } = require('./scripts/round87/generate_nagasaki_obama');
const { generateGifuNagaragawaPage } = require('./scripts/round87/generate_gifu_nagaragawa');
const { generateChibaMinamibosoTateyamaPage } = require('./scripts/round87/generate_chiba_minamiboso_tateyama');
const { generateShimaneYunotsuPage } = require('./scripts/round87/generate_shimane_yunotsu');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 87: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round87_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateMieTobaOsaatsuPage(rawHotels.mie_toba_osaatsu);
  generateNagasakiObamaPage(rawHotels.nagasaki_obama);
  generateGifuNagaragawaPage(rawHotels.gifu_nagaragawa);
  generateChibaMinamibosoTateyamaPage(rawHotels.chiba_minamiboso_tateyama);
  generateShimaneYunotsuPage(rawHotels.shimane_yunotsu);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-mie-toba-osaatsu-onsen-seafood-torasawara-matsusaka-stay',
    'winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay',
    'winter-gifu-nagaragawa-onsen-gihujo-hidagyu-ayu-stay',
    'winter-chiba-minamiboso-tateyama-chikura-ocean-iseebi-stay',
    'winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay'
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
      slug: 'winter-mie-toba-osaatsu-onsen-seafood-torasawara-matsusaka-stay',
      title: '現役海女の里相差の大漁舟盛り＆答志島トロさわら・活伊勢海老・的矢牡蠣と松阪牛名宿',
      desc: '11月から12月にかけて、日本一の海女の町で味わう一本釣り答志島トロさわらと特大舟盛り、石神さん参拝と千鳥ヶ浜の朝日露天…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay',
      title: '橘湾の茜色落日と熱量日本一105℃源泉＆冬ワタリガニ・小浜ちゃんぽん・雲仙あかね牛名宿',
      desc: '11月から12月にかけて、日本一長い105m足湯と橘湾夕陽露天、内子たっぷり冬ワタリガニと地獄蒸し、濃厚小浜ちゃんぽん…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-gifu-nagaragawa-onsen-gihujo-hidagyu-ayu-stay',
      title: '金華山と岐阜城の初冬静寂＆含鉄美肌の黄金赤湯と最高峰A5飛騨牛・冬の子持ち鮎名宿',
      desc: '11月から12月にかけて、黄金色の濁り湯含鉄泉と岐阜城ライトアップ、A5飛騨牛すき焼きと卵ぎっしり冬の子持ち鮎甘露煮…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-chiba-minamiboso-tateyama-chikura-ocean-iseebi-stay',
      title: '海越しに望む冠雪富士と温暖避寒の海辺温泉＆房州伊勢海老・地魚舟盛り・かずさ和牛名宿',
      desc: '11月から12月にかけて、鏡ヶ浦越しに夕暮れの紅富士パノラマ、解禁房州伊勢海老と定置網直送地魚舟盛り、温暖な海辺リゾート…',
      badge: '11・12月特集'
    },
    {
      slug: 'winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay',
      title: '世界遺産石見銀山の港町・開湯1300年薬師湯オール5自噴赤湯＆極上のどぐろ・しまね和牛名宿',
      desc: '11月から12月にかけて、重要伝統的建造物群保存地区の木造街並み、奇跡の自然湧出濃厚赤湯、脂の乗ったのどぐろとしまね和牛…',
      badge: '11・12月特集'
    }
  ];

  const gridInsertMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  if (!featuresContent.includes('winter-mie-toba-osaatsu-onsen-seafood-torasawara-matsusaka-stay') && featuresContent.includes(gridInsertMarker)) {
    const cardsJs = newFeatures.map(f => `            {
              slug: '${f.slug}',
              title: ${JSON.stringify(f.title)},
              desc: ${JSON.stringify(f.desc)},
              badge: '${f.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace(gridInsertMarker, gridInsertMarker + cardsJs + '\n');
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx');
  } else {
    console.log('src/app/features/page.tsx already contains Round 87 features.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Extract all existing urls
  const existingLocs = new Set([...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
  let addedSitemapCount = 0;

  for (const slug of slugs) {
    const loc = `https://croud-travel.pages.dev/${slug}/`;
    if (!existingLocs.has(loc)) {
      const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-09-30</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
      sitemapContent = sitemapContent.replace('</urlset>', entry + '</urlset>');
      existingLocs.add(loc);
      addedSitemapCount++;
    }
  }

  // Sort sitemap entries alphabetically
  const urlBlocks = [...sitemapContent.matchAll(/  <url>[\s\S]*?<\/url>/g)].map(m => m[0]);
  urlBlocks.sort((a, b) => {
    const locA = (a.match(/<loc>(.*?)<\/loc>/) || [])[1] || '';
    const locB = (b.match(/<loc>(.*?)<\/loc>/) || [])[1] || '';
    return locA.localeCompare(locB);
  });
  const newSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + urlBlocks.join('\n') + `\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, newSitemapXml, 'utf8');
  console.log(`Successfully updated public/sitemap-features.xml (added ${addedSitemapCount} entries, sorted alphabetically)`);

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  let addedLlmsCount = 0;

  for (const slug of slugs) {
    const url = `- https://croud-travel.pages.dev/${slug}/`;
    if (!llmsContent.includes(url)) {
      llmsContent += `\n${url}`;
      addedLlmsCount++;
    }
  }

  const lines = llmsContent.split('\n');
  const nonUrlLines = [];
  const urlLines = [];
  for (const line of lines) {
    if (line.startsWith('- https://croud-travel.pages.dev/')) {
      if (!urlLines.includes(line)) urlLines.push(line);
    } else {
      nonUrlLines.push(line);
    }
  }
  urlLines.sort();
  fs.writeFileSync(llmsPath, nonUrlLines.join('\n') + '\n' + urlLines.join('\n') + '\n', 'utf8');
  console.log(`Successfully updated public/llms-full.txt (added ${addedLlmsCount} entries)`);

  console.log('\n================================================================');
  console.log('Round 87 Generation Completed Successfully!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
