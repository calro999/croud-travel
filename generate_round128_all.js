const fs = require('fs');
const path = require('path');

const { generateOsakaMinohPage } = require('./scripts/round128/generate_osaka_minoh.js');
const { generateKochiKatsurahamaPage } = require('./scripts/round128/generate_kochi_katsurahama.js');
const { generateEhimeImabariPage } = require('./scripts/round128/generate_ehime_imabari.js');
const { generateShigaOmihachimanPage } = require('./scripts/round128/generate_shiga_omihachiman.js');
const { generateOkayamaKurashikiPage } = require('./scripts/round128/generate_okayama_kurashiki.js');

async function main() {
  console.log('================================================================');
  console.log('Generating Round 128 Feature Pages with Verified Live Rakuten API');
  console.log('================================================================');

  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'scripts', 'round128', 'round128_raw_hotels.json'), 'utf8'));

  const generators = [
    { 
      slug: 'winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay',
      fn: generateOsakaMinohPage, 
      data: rawHotels.osaka_minoh_katsuoji_waterfall.hotels 
    },
    { 
      slug: 'winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay',
      fn: generateKochiKatsurahamaPage, 
      data: rawHotels.kochi_katsurahama_ryoma_chikurinji.hotels 
    },
    { 
      slug: 'winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay',
      fn: generateEhimeImabariPage, 
      data: rawHotels.ehime_imabari_shimanami_oyamazumi.hotels 
    },
    { 
      slug: 'winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay',
      fn: generateShigaOmihachimanPage, 
      data: rawHotels.shiga_omihachiman_suigo_himure.hotels 
    },
    { 
      slug: 'winter-okayama-kurashiki-bikan-achi-shrine-hatsumode-chiyagyu-stay',
      fn: generateOkayamaKurashikiPage, 
      data: rawHotels.okayama_kurashiki_bikan_achi.hotels 
    }
  ];

  const slugs = generators.map(g => g.slug);

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  for (const g of generators) {
    g.fn(g.data);
    const outFile = path.join(__dirname, 'src', 'app', g.slug, 'page.tsx');
    const stat = fs.statSync(outFile);
    console.log(`- Generated: ${g.slug}/page.tsx (${stat.size} bytes)`);
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
      slug: 'winter-osaka-minoh-katsuoji-daruma-hatsumode-waterfall-onsen-stay',
      title: '箕面＆勝尾寺！勝ち運の寺「勝尾寺」新春初詣と勝ちダルマ祈願・白銀の「箕面大滝」氷紋と名物もみじ天ぷら・箕面温泉名宿',
      desc: '北大阪急行延伸で都心から直通20分！無数の赤い勝ちダルマが迎える勝尾寺で己に打ち勝つ新春初詣。落差33m箕面大滝の清冽な氷紋ともみじ天ぷら、トロトロ美肌の箕面温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay',
      title: '高知・桂浜＆竹林寺！太平洋望む名勝「桂浜」初日の出と坂本龍馬像・知恵の文殊「五台山 竹林寺」新春初詣・極上戻り鰹藁焼き名宿',
      desc: '黒潮洗う南国土佐の冬景色！桂浜の弓状の渚から拝する感動の初日の出と坂本龍馬像。四国霊場第31番竹林寺の文殊菩薩初詣と、香ばしく脂が乗る戻り鰹藁焼き塩タタキ＆天然温泉…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay',
      title: '今治＆しまなみ海道！日本総鎮守「大山祇神社」樹齢2600年神木新春初詣・冬晴れしまなみ海道パノラマ＆土鍋今治鯛めし名宿',
      desc: '冬晴れ瀬戸内ブルーの多島美！大三島の大山祇神社で迎える厳かな新春初詣と国宝甲冑。来島海峡大橋の絶景とふっくら土鍋で炊き上げる冬の今治鯛めし、pH9.9鈍川温泉美肌湯…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay',
      title: '近江八幡＆水郷！白壁土蔵佇む「近江八幡水郷めぐり」冬のこたつ舟・千年の古社「日牟禮八幡宮」新春初詣＆極上近江牛すき焼き名宿',
      desc: '近江商人の誇り息づく重伝建！冬限定のこたつ舟に温まりながら枯葦の水路を進む風流体験。商売繁盛を願う日牟禮八幡宮初詣と八幡山絶景、とろける霜降り極まる近江牛すき焼き…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-okayama-kurashiki-bikan-achi-shrine-hatsumode-chiyagyu-stay',
      title: '倉敷美観地区＆阿智神社！白壁となまこ壁が雪景色に映える冬情景と町家ライトアップ・倉敷総鎮守「阿智神社」初詣＆下津井タコ名宿',
      desc: '江戸幕府天領の静寂と歴史情緒！夜間景観照明に浮かぶ倉敷川白壁と、鶴形山山頂阿智神社の宗像三女神初詣。激流で育つ冬旬下津井タコしゃぶしゃぶと幻の千屋牛ステーキ…',
      badge: '11・12・1月特集'
    }
  ];

  // Insert items at the beginning of features grid in src/app/features/page.tsx
  const gridMarker = '{[\n            {';
  const missingFeatures = newFeatures.filter(item => !featuresContent.includes(item.slug));
  if (missingFeatures.length > 0 && featuresContent.includes(gridMarker)) {
    const formattedItems = missingFeatures.map(item => `            {
              slug: '${item.slug}',
              title: "${item.title}",
              desc: "${item.desc}",
              badge: '${item.badge}'
            },`).join('\n');
    featuresContent = featuresContent.replace('{[\n            {', `{[\n${formattedItems}\n            {`);
    fs.writeFileSync(featuresPagePath, featuresContent, 'utf8');
    console.log(`Successfully updated src/app/features/page.tsx with ${missingFeatures.length} new features!`);
  } else {
    console.log('src/app/features/page.tsx already has all features or gridMarker not found.');
  }

  // 4. Update public/sitemap-features.xml
  console.log('\n[Step 4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  for (const slug of slugs) {
    const urlTag = `  <url>\n    <loc>https://croud-travel.pages.dev/${slug}/</loc>\n    <lastmod>2026-10-06</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
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
  console.log('Round 128 Generation Complete! All 5 Pages Ready & Verified!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in generate script:', err);
  process.exit(1);
});
