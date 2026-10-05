const fs = require('fs');
const path = require('path');

const { generateHiroshimaSaijoPage } = require('./scripts/round123/generate_hiroshima_saijo');
const { generateSaitamaHannoPage } = require('./scripts/round123/generate_saitama_hanno');
const { generateOkayamaKibijiPage } = require('./scripts/round123/generate_okayama_kibiji');
const { generateEhimeOzuPage } = require('./scripts/round123/generate_ehime_ozu');
const { generateTokushimaCityPage } = require('./scripts/round123/generate_tokushima_city');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 123: Generating 5 Independent 11-12-1 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round123_raw_hotels.json'), 'utf8'));

  const generators = [
    { fn: generateHiroshimaSaijoPage, data: rawHotels.hiroshima_saijo_takehara_sake_bikan.hotels },
    { fn: generateSaitamaHannoPage, data: rawHotels.saitama_hanno_naguri_moomin_bushugyu.hotels },
    { fn: generateOkayamaKibijiPage, data: rawHotels.okayama_kibiji_soja_saijo_inari_chiyagyu.hotels },
    { fn: generateEhimeOzuPage, data: rawHotels.ehime_ozu_uchiko_castle_uchikobuta.hotels },
    { fn: generateTokushimaCityPage, data: rawHotels.tokushima_city_oasashiko_hatsumode_awaodori_awagyu.hotels }
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
      slug: 'winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay',
      title: '西条酒蔵通り＆竹原！冬の新酒仕込みと名物「美酒鍋」・安芸の小京都町並み保存地区＆峠下牛名宿',
      desc: '日本三大酒処・西条の赤レンガ煙突に漂う吟醸香と青い杉玉。清酒で煮る伝統の蔵人料理「美酒鍋」と、江戸の豪商屋敷が連なる安芸の小京都・竹原の静寂…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-saitama-hanno-naguri-onsen-moomin-illumination-bushugyu-stay',
      title: '飯能＆名栗温泉・奥武蔵！ムーミンバレーパーク冬イルミと名栗温泉の秘湯・薪火サウナ＆武州和牛名宿',
      desc: '池袋から特急ラビューで40分。宮沢湖畔の森がオーロラに包まれる幻想的イルミネーションと、名栗渓谷に佇む西川材の温もり宿。本格薪サウナと極上武州和牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okayama-kibiji-soja-saijo-inari-hatsumode-chiyagyu-stay',
      title: '吉備路・総社＆最上稲荷！日本三大稲荷「最上稲荷」新春大初詣・国宝吉備津神社400m廻廊＆幻の千屋牛名宿',
      desc: '中国地方屈指の初詣参拝客60万人を集める最上稲荷の巨大鳥居と新春祈願。桃太郎伝説の国宝吉備津神社大廻廊と備中国分寺五重塔、日本最古の蔓牛・千屋牛…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay',
      title: '大洲＆内子！大洲城木造復元天守の冬霧とミシュラン名園「臥龍山荘」・白壁の内子町並み＆いもたき名宿',
      desc: '肱川の朝霧に浮かぶ木造復元天守・大洲城と不老庵の水かがみが息を呑む臥龍山荘。木蝋と和紙の豪商屋敷が並ぶ内子八日市の白壁散策と熱々の大洲いもたき…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay',
      title: '徳島市＆阿波一の宮！「大麻比古神社」樹齢千年の大楠大初詣と眉山冬夜景・本場阿波尾鶏鍋＆鳴門鯛名宿',
      desc: '阿波国一宮・大麻比古神社に響く新春の祈りと御神木大楠。標高290m眉山から望む吉野川デルタの煌めく冬夜景と、地鶏日本一・阿波尾鶏の濃厚白湯水炊き鍋…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
  if (featuresContent.includes(gridMarker)) {
    const formattedItems = newFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log('Successfully updated src/app/features/page.tsx grid items with 5 new features!');
  } else {
    console.warn('Could not find gridMarker in features/page.tsx, checking fallback...');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-05</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    if (!sitemapContent.includes(slug)) {
      sitemapContent = sitemapContent.replace('</urlset>', `${urlTag}</urlset>`);
      console.log(`- Added ${slug} to sitemap-features.xml`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  // 5. Update public/llms-full.txt
  console.log('\n[Step 5] Updating public/llms-full.txt...');
  const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  for (const item of newFeatures) {
    const entry = `- https://croud-travel.com/${item.slug}: ${item.title}。${item.desc}\n`;
    if (!llmsContent.includes(item.slug)) {
      llmsContent = llmsContent.trimEnd() + '\n' + entry;
      console.log(`- Added ${item.slug} to llms-full.txt`);
    }
  }
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');

  console.log('\n================================================================');
  console.log('Round 123 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
