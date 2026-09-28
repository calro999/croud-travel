const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { generateTochigiYunishigawaPage } = require('./scripts/round80/generate_tochigi_yunishigawa');
const { generateAichiGamagoriPage } = require('./scripts/round80/generate_aichi_gamagori');
const { generateMiyazakiTakachihoPage } = require('./scripts/round80/generate_miyazaki_takachiho');
const { generateSagaKaratsuPage } = require('./scripts/round80/generate_saga_karatsu');
const { generateNaraYamatojiPage } = require('./scripts/round80/generate_nara_yamatoji');

async function main() {
  console.log('================================================================');
  console.log('Starting Round 80: Generating 5 Independent 11-12 Month Features');
  console.log('================================================================');

  // Load Rakuten API fetched hotels
  const rawHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round80_raw_hotels.json'), 'utf8'));

  // 1. Generate individual pages
  console.log('\n[Step 1] Generating 5 Custom Independent Feature Pages...');
  generateTochigiYunishigawaPage(rawHotels.tochigi_yunishigawa);
  generateAichiGamagoriPage(rawHotels.aichi_gamagori);
  generateMiyazakiTakachihoPage(rawHotels.miyazaki_takachiho);
  generateSagaKaratsuPage(rawHotels.saga_karatsu);
  generateNaraYamatojiPage(rawHotels.nara_yamatoji);

  // 2. Verify Character Count for each page
  console.log('\n[Step 2] Verifying Character Counts (Must be >= 3000 chars)...');
  const slugs = [
    'winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay',
    'winter-aichi-gamagori-onsen-mikawawan-mehikari-akazaebi-stay',
    'winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay',
    'winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay',
    'winter-nara-yamatoji-wakakusayama-yamatogyu-asukabeef-stay'
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
      slug: 'winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay',
      title: '【11・12月栃木・日光湯西川温泉の初雪渓谷美と平家落人伝説】名物囲炉裏会席・平家狩場焼＆とちぎ和牛・源泉かけ流し雪見露天名宿5選',
      description: '11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め、茅葺き屋根の古民家や湯西川渓谷が静謐な冬景色に包まれます。壇ノ浦の戦いに敗れた平家の落人たちが落ち延び、河原の炭火で野鳥や川魚を焼いたことに端を発する伝統の「本場囲炉裏（いろり）料理」平家狩場焼、山椒香るばんだい餅、とろける霜降りの「とちぎ和牛」、香ばしいイワナの骨酒。そして湯守が守り継ぐpH9前後の柔らかな源泉かけ流し雪見露天風呂。深山に佇む平家伝承の厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初雪の湯西川渓谷＆名物囲炉裏狩場焼・とちぎ和牛と源泉かけ流し雪見露天',
      readTime: '6分'
    },
    {
      slug: 'winter-aichi-gamagori-onsen-mikawawan-mehikari-akazaebi-stay',
      title: '【11・12月愛知・三河湾蒲郡温泉郷の竹島夕日パノラマと冬の深海魚】名物メヒカリ＆幻のアカザエビ・極上三河牛と冬イルミを愉しむ海辺名宿5選',
      description: '11月から12月にかけて、愛知県・三河湾の風光明媚な海岸線に広がる蒲郡温泉郷（蒲郡・三谷・西浦温泉）は、冬の澄み渡る青空と穏やかな海、国指定天然記念物「竹島」を染める真紅のサンセットが最も美しい季節を迎えます。全国屈指の深海魚水揚げを誇る蒲郡漁港で冬に最盛期を迎える名物「メヒカリ（目光）」のサクサク唐揚げや、水深200m超の深海から水揚げされる幻の美味「アカザエビ（深海手長エビ）」の刺身、とろける霜降りのブランド黒毛和牛「三河牛」、冬のラグーナテンボス・イルミネーション。三河湾を一望する絶景オーシャンビュー露天風呂とともに、温暖な冬旅を約束する厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '竹島夕日パノラマ＆深海魚メヒカリ・幻のアカザエビ・三河牛と美肌露天',
      readTime: '6分'
    },
    {
      slug: 'winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay',
      title: '【11・12月宮崎・神話の里高千穂の冬の夜神楽と真名井の滝】名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選',
      description: '11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '冬の伝統高千穂夜神楽＆真名井の滝・A5高千穂牛ステーキとかっぽ鶏',
      readTime: '6分'
    },
    {
      slug: 'winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay',
      title: '【11・12月佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ】極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選',
      description: '11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '冬の玄界灘・名物呼子透明活イカ姿造り＆最高級佐賀牛・唐津城絶景',
      readTime: '6分'
    },
    {
      slug: 'winter-nara-yamatoji-wakakusayama-yamatogyu-asukabeef-stay',
      title: '【11・12月奈良・大和路奈良町温泉の初冬古都散策と若草山冬景色】名物極上大和牛すき焼き＆飛鳥鍋・東大寺大仏殿を望む歴史名宿5選',
      description: '11月から12月にかけて、1300年の歴史を誇る古都・奈良は、秋の喧騒が落ち着きを取り戻し、澄み切った初冬の青空の下で静謐な大和路の風情が色濃くなります。冬枯れの木立と愛らしい鹿たちが佇む奈良公園、雪化粧を始めた若草山、凛とした空気に包まれる世界遺産・東大寺大仏殿や春日大社、風情ある格子戸が連なる「ならまち」の散策。夕食には大和の豊かな風土が育んだ最高峰の黒毛和牛「大和牛（やまとうし）」のすき焼きや陶板焼き、牛乳ベースの優しい出汁に鶏肉や旬野菜が溶け合う古代宮廷伝承の郷土鍋「飛鳥鍋（あすかなべ）」、大和野菜。古都の天然温泉に浸かり、歴史の深遠に抱かれる厳選名宿5選を徹底解説します。',
      category: '11・12月の旅',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      badge: '初冬の古都奈良散策＆極上大和牛すき焼き・古代伝承飛鳥鍋と歴史名宿',
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

  console.log('\n[Complete] Round 80 generation finished successfully!');
}

main().catch((err) => {
  console.error('Error in main:', err);
  process.exit(1);
});
