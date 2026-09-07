const fs = require('fs');
const path = require('path');

// ビルド時に個別JSONファイルを結合して一時的なposts.jsonを生成し、
// さらにpublic/sitemap.xmlおよびpublic/robots.txtを物理ファイルとして出力するプレビルド処理
const POSTS_DIR = path.join(__dirname, 'src', 'data', 'posts');
const PUBLIC_DIR = path.join(__dirname, 'public');
const PUBLIC_DATA_DIR = path.join(PUBLIC_DIR, 'data');
const OUTPUT_FILE = path.join(PUBLIC_DATA_DIR, 'posts.json');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const ROBOTS_FILE = path.join(PUBLIC_DIR, 'robots.txt');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

const PREFECTURE_SLUGS = [
  "hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima",
  "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa",
  "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano",
  "gifu", "shizuoka", "aichi", "mie",
  "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama",
  "tottori", "shimane", "okayama", "hiroshima", "yamaguchi",
  "tokushima", "kagawa", "ehime", "kochi",
  "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"
];

function main() {
  console.log('--- Prebuild: Bundling travel post JSONs & generating physical sitemap.xml / robots.txt ---');
  
  fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });

  let posts = [];
  
  if (fs.existsSync(POSTS_DIR)) {
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.json'));
    
    posts = files.map(file => {
      try {
        const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
        return JSON.parse(content);
      } catch (err) {
        console.error(`Failed to parse: ${file}`, err);
        return null;
      }
    }).filter(Boolean);

    // 最新記事順（date降順）にソート
    posts.sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB.getTime() - dateA.getTime();
    });

    const postSummaries = posts.map(p => ({
      id: p.id,
      title: p.title,
      hotel_name: p.hotel_name,
      description: p.description || '',
      image: p.image || '',
      other_images: p.other_images || [],
      affiliate_url: p.affiliate_url || '',
      prefecture: p.prefecture || '',
      area: p.area || '',
      categories: p.categories || [],
      price: p.price || '',
      rating: p.rating || '',
      date: p.date || '',
      keywords: p.keywords || []
    }));

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(postSummaries), 'utf8');
    console.log(`Bundled ${postSummaries.length} post summaries into ${OUTPUT_FILE}`);
  }

  // --- 1. public/sitemap.xml (Sitemap Index) ＆ カテゴリー別分割サイトマップの自動生成 ---
  const todayStr = new Date().toISOString().split('T')[0];

  // 1-0. 動的特集ハブページ（166ページ）の自動検出
  const appDir = path.join(__dirname, 'src', 'app');
  const appEntries = fs.readdirSync(appDir, { withFileTypes: true });
  const featurePageSlugs = [];
  for (const entry of appEntries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(appDir, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        if (!['api', 'components', 'features', 'posts', 'prefectures', 'spots', 'sitemap', 'campaigns'].includes(entry.name)) {
          featurePageSlugs.push(entry.name);
        }
      }
    }
  }
  featurePageSlugs.sort();

  // 1-1. 市町村サブハブURLの自動抽出
  let citySubHubs = [];
  const citiesFilePath = path.join(__dirname, 'src', 'data', 'citiesData.ts');
  if (fs.existsSync(citiesFilePath)) {
    const citiesFileContent = fs.readFileSync(citiesFilePath, 'utf8');
    const cityMatches = [...citiesFileContent.matchAll(/prefSlug:\s*["\x27]([^"\x27]+)["\x27][\s\S]*?citySlug:\s*["\x27]([^"\x27]+)["\x27]/g)];
    citySubHubs = cityMatches.map(m => `${m[1]}/${m[2]}`);
  }

  // 1-2. 観光名所解説URLの自動抽出
  let spotSlugs = [];
  const spotsFilePath = path.join(__dirname, 'src', 'data', 'spotsData.ts');
  if (fs.existsSync(spotsFilePath)) {
    const spotsFileContent = fs.readFileSync(spotsFilePath, 'utf8');
    const spotMatches = [...spotsFileContent.matchAll(/slug:\s*["\x27]([^"\x27]+)["\x27]/g)];
    spotSlugs = [...new Set(spotMatches.map(m => m[1]))];
  }

  // 主要静的ページ
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/kanazawa/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/noto/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/prefectures/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/sitemap/`, priority: '0.8', changefreq: 'weekly' }
  ];

  // A. sitemap-main.xml (主要静的ページ)
  let xmlMain = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  staticPages.forEach(p => {
    xmlMain += `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
  });
  xmlMain += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-main.xml'), xmlMain, 'utf8');

  // B. sitemap-features.xml (目的別・季節別・テーマ別特化特集ハブ 166件)
  let xmlFeatures = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  featurePageSlugs.forEach(slug => {
    xmlFeatures += `  <url>\n    <loc>${BASE_URL}/${slug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  xmlFeatures += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-features.xml'), xmlFeatures, 'utf8');

  // C. sitemap-prefectures.xml (47都道府県・主要市町村・観光名所スポット)
  let xmlPref = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  PREFECTURE_SLUGS.forEach(slug => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/cafes/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/souvenirs/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${slug}/sakes/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  citySubHubs.forEach(cPath => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/prefectures/${cPath}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  spotSlugs.forEach(sSlug => {
    xmlPref += `  <url>\n    <loc>${BASE_URL}/spots/${sSlug}/</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });
  xmlPref += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-prefectures.xml'), xmlPref, 'utf8');

  // D. sitemap-posts.xml (個別宿泊施設・徹底比較ルポ全記事)
  let xmlPosts = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  posts.forEach(post => {
    const postDate = post.date ? new Date(post.date).toISOString().split('T')[0] : todayStr;
    xmlPosts += `  <url>\n    <loc>${BASE_URL}/posts/${post.id}/</loc>\n    <lastmod>${postDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });
  xmlPosts += `</urlset>\n`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-posts.xml'), xmlPosts, 'utf8');

  // E. sitemap.xml (Google Search Console 標準 Sitemap Index)
  const sitemapIndexFiles = [
    'sitemap-main.xml',
    'sitemap-features.xml',
    'sitemap-prefectures.xml',
    'sitemap-posts.xml'
  ];
  let sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  sitemapIndexFiles.forEach(file => {
    sitemapIndexXml += `  <sitemap>\n    <loc>${BASE_URL}/${file}</loc>\n    <lastmod>${todayStr}</lastmod>\n  </sitemap>\n`;
  });
  sitemapIndexXml += `</sitemapindex>\n`;
  fs.writeFileSync(SITEMAP_FILE, sitemapIndexXml, 'utf8');

  const totalUrls = staticPages.length + featurePageSlugs.length + (PREFECTURE_SLUGS.length * 4) + citySubHubs.length + spotSlugs.length + posts.length;
  console.log(`Generated Google Search Console optimized Sitemap Index (sitemap.xml) and 4 sub-sitemaps (main: ${staticPages.length}, features: ${featurePageSlugs.length}, prefectures: ${(PREFECTURE_SLUGS.length * 4) + citySubHubs.length + spotSlugs.length}, posts: ${posts.length}) - Total: ${totalUrls} URLs`);

  // --- 2. public/robots.txt 物理ファイルの自動生成 ---
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-main.xml
Sitemap: ${BASE_URL}/sitemap-features.xml
Sitemap: ${BASE_URL}/sitemap-prefectures.xml
Sitemap: ${BASE_URL}/sitemap-posts.xml
`;

  fs.writeFileSync(ROBOTS_FILE, robotsTxt, 'utf8');
  console.log(`Generated physical robots.txt at ${ROBOTS_FILE}`);

  // --- 3. public/llms.txt (LLM/AI専用標準サマリー仕様) の自動生成 ---
  let llmsTxt = `# 日本全国・旅宿クラウド (Tabiyado Croud Travel Magazine)

> 日本全国47都道府県の厳選温泉宿・リゾートホテル・観光ガイド・ご当地グルメ・地酒・お土産情報を旅ライターが網羅する旅行マガジン。

## 主要セクション
- [トップページ](${BASE_URL}/): 厳選宿と47都道府県旅行ハブ
- [47都道府県観光ガイド一覧](${BASE_URL}/prefectures): 日本全国の地域別・ミクロエリア別観光ガイド
- [お得キャンペーン一覧](${BASE_URL}/campaigns): 楽天トラベルの最新割引クーポン・セール情報
- [サイトマップ](${BASE_URL}/sitemap): 全ページの構造化ナビゲーション

## 楽天ふるさと納税×トラベル特集
- [実質2,000円で泊まる名湯・高級温泉旅館完全ガイド](${BASE_URL}/furusato-tax-luxury-hotspring-ryokan-stay): 草津・伊豆・有馬の名宿と控除枠活用術
- [楽天トラベル「あとから割引」完全攻略ガイド](${BASE_URL}/furusato-tax-travel-after-booking-discount-guide): 予約済み宿にも使えるふるさと納税クーポン活用法
- [ご当地グルメ宿を堪能する美食旅特集](${BASE_URL}/furusato-tax-local-gourmet-inn-stay): 高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅
- [愛犬同伴＆プライベートサウナご褒美ステイ](${BASE_URL}/furusato-tax-pet-sauna-private-hotspring-stay): 裏磐梯・伊豆高原・白馬の特化宿ガイド
- [3世代家族旅行×高額枠一括消化ガイド](${BASE_URL}/furusato-tax-three-generation-family-luxury-stay): 熱海・白浜・那須の離れ＆客室露天風呂宿
- [ゲレンデ直結×白銀スノーリゾート特集](${BASE_URL}/furusato-tax-ski-snowboard-slope-resort-stay): ニセコ・白馬・越後湯沢のスキー温泉ホテル
- [憧れの最高峰宿・記念日スイート＆ヴィラ](${BASE_URL}/furusato-tax-anniversary-luxury-suite-villa-stay): 箱根・京都・沖縄の極上アニバーサリーステイ
- [車なし・新幹線駅直結の名湯旅館ガイド](${BASE_URL}/furusato-tax-shinkansen-station-walk-hotspring-stay): 越後湯沢・熱海・加賀温泉の雪道運転不要旅
- [名門ゴルフ×ふるさと納税宿泊パック完全ガイド](${BASE_URL}/furusato-tax-golf-resort-hotspring-stay): 川奈・軽井沢・宮古島の温泉ゴルフリゾート
- [おひとり様贅沢ソロ温泉ワーケーション旅](${BASE_URL}/furusato-tax-solo-retreat-private-onsen-stay): 四万・別所・黒川の客室露天風呂宿
- [国宝名城めぐり×城下町老舗名宿ガイド](${BASE_URL}/furusato-tax-castle-town-heritage-onsen-stay): 姫路・松本・彦根の天守展望露天風呂宿
- [奇跡の名湯×強炭酸泉・泥湯・美肌温泉リトリート](${BASE_URL}/furusato-tax-bihada-medicinal-springs-retreat-stay): 長湯・霧島・嬉野の本格薬湯治ステイ
- [冬の味覚の王様×活蟹尽くし極上温泉宿ガイド](${BASE_URL}/furusato-tax-winter-crab-gourmet-luxury-stay): 城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席
- [大人の隠れ家・極上の離島リゾートステイ](${BASE_URL}/furusato-tax-remote-island-luxury-resort-stay): 屋久島・奄美大島・石垣島の自然遺産ヴィラ
- [ワイン＆地ビール×醸造オーベルジュ旅ガイド](${BASE_URL}/furusato-tax-winery-craft-beer-auberge-stay): 勝沼・富良野・余市のワイナリーホテル
- [赤ちゃん・未就学児連れ安心ウェルカムベビー宿](${BASE_URL}/furusato-tax-welcome-baby-family-kids-stay): 熱海・那須・南房総の離乳食＆貸切風呂完備宿
- [秘湯・ランプの宿×デジタルデトックス温泉旅](${BASE_URL}/furusato-tax-secret-hotspring-lamp-retreat-stay): 法師・祖谷・酸ヶ湯の渓谷野天風呂
- [豪華グランピング×星空ドームテント完全ガイド](${BASE_URL}/furusato-tax-luxury-glamping-bbq-dome-stay): 河口湖・琵琶湖・淡路島の手ぶら焚き火BBQ
- [絶景観光列車×途中下車の名湯温泉旅館ガイド](${BASE_URL}/furusato-tax-scenic-train-trolley-onsen-stay): 黒部トロッコ・わたらせ・只見線の鉄道旅
- [お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド](${BASE_URL}/furusato-tax-ise-kumano-sacred-power-spot-stay): 伊勢神宮・熊野三山・出雲大社の祈願ステイ
- [絶景インフィニティ温泉×海空一体パノラマ露天宿](${BASE_URL}/furusato-tax-infinity-onsen-sky-ocean-view-stay): 熱海・南紀白浜・指宿の海と空に溶け込む湯守宿
- [全室離れの隠れ家おこもり宿×極上プライベートヴィラ](${BASE_URL}/furusato-tax-private-villa-hanare-hideaway-stay): 由布院・伊豆高原・定山渓の静寂と美食ステイ
- [全国桜名所お花見温泉×春爛漫の桜花露天風呂ガイド](${BASE_URL}/furusato-tax-cherry-blossom-spring-hanami-onsen-stay): 弘前・伊豆河津・吉野山の桜と温泉巡り旅
- [古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記](${BASE_URL}/furusato-tax-kominka-heritage-townhouse-auberge-stay): 篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ
- [水族館・テーマパーク直結ホテル×ふるさと納税活用ガイド](${BASE_URL}/furusato-tax-themepark-aquarium-family-hotel-stay): 鴨川シーワールド・白浜アドベンチャーワールド・富士急ハイランドのパスポート付き宿
- [日本三大星空・天体観測リゾート×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-starry-sky-astronomy-retreat-stay): 阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート
- [朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-award-winning-breakfast-gourmet-hotel-stay): 函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ
- [清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-waterfall-river-gorge-healing-onsen-stay): 奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿
- [クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-craft-beer-brewery-hotel-stay): 軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ
- [登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-tangible-cultural-property-architectural-ryokan-stay): 修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿
- [海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-morning-market-hamayaki-seafood-inn-stay): 八戸・沼津・高知の獲れたて市場グルメと浜焼き
- [絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-oceanfront-wave-sound-healing-stay): 稲取・南房総・読谷村の全室オーシャンビューと潮騒露天
- [絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-fuji-view-onsen-resort-stay): 河口湖・山中湖・日本平の霊峰一望リゾート
- [高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-highland-resort-french-auberge-stay): 那須・清里・裏磐梯の森の休日
- [日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-major-bihada-hotspring-stay): 嬉野・喜連川・玉造の名湯治宿
- [歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-historical-kaido-post-town-ryokan-stay): 中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅
- [絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sunset-ocean-magic-hour-stay): 堂ヶ島・由良・白浜の茜色マジックアワー温泉
- [日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sake-brewery-pairing-onsen-stay): 越後湯沢・諏訪・会津の名酒と温泉旅
- [雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay): トマム・志賀高原・蔵王の雲上絶景ホテル
- [古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-temple-shukubo-shojin-mindfulness-stay): 高野山・善光寺・京都寺院のマインドフルネス旅
- [秘境・渓谷の一軒宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-secluded-canyon-isolated-onsen-stay): 黒部峡谷・祖谷・みちのく深山の完全遮断リトリート
- [日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-major-night-view-luxury-hotel-stay): 長崎・神戸・函館の1000万ドル夜景ステイ
- [清流川床料理＆避暑せせらぎ名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-riverside-kawadoko-cooling-inn-stay): 京都貴船・四万十川・越後岩室の涼風ステイ
- [蔵サウナ＆一棟貸しプライベートヴィラ×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-kura-sauna-private-villa-charter-stay): 信濃町・八ヶ岳・丹波篠山の完全貸切ととのい旅
- [紅葉渓谷＆錦秋の絶景露天風呂宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-autumn-foliage-gorge-onsen-stay): 定山渓・奥日光・嵐山の錦秋名湯ステイ
- [ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-brand-jidori-mizutaki-gourmet-stay): 比内地鶏・土佐ジロー・黒さつま鶏の美食宿
- [日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-gardens-heritage-stay): 兼六園・後楽園・偕楽園の庭園美ステイ
- [絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-cycling-shimanami-lake-resort-stay): しまなみ海道・尾道・琵琶湖ビワイチの絶景リゾート
- [日本三景の絶景オーシャンビュー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-scenic-views-heritage-stay): 松島・天橋立・宮島の名門旅館
- [海中展望＆ダイビング・シュノーケリング直結リゾート×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-diving-ocean-resort-stay): 恩納村・串本・西伊豆のマリンホテル
- [文豪の愛した名湯・文学ゆかりの老舗旅館×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-literary-heritage-historic-onsen-stay): 城崎・伊豆湯ヶ島・道後の文芸宿
- [天空の露天風呂付きグランピング＆星空ドーム×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sky-open-air-glamping-resort-stay): 富士山・阿蘇・那須の高級アウトドア宿
- [天然炭酸泉＆シュワシュワ美肌の湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-carbonated-spring-effervescent-onsen-stay): 長湯・下呂・有馬の極上泡風呂
- [清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-river-activity-canoe-fishing-resort-stay): 長良川・四万十川・保津川の舟旅
- [銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sweets-cafe-wagashi-retro-onsen-stay): 金沢・小布施・伊勢の甘味旅
- [国宝天守・城下町キャッスルビュー名門宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-national-treasure-castle-view-luxury-stay): 姫路城・松本城・彦根城の歴史旅
- [日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-alps-trekking-mountain-resort-stay): 上高地・白馬・立山の雲上ホテル
- [銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-winery-vineyard-auberge-stay): 勝沼・余市・十勝のワインペアリング旅
- [絶景ローカル線＆トロッコ列車めぐり温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-scenic-train-torokko-railway-onsen-stay): わたらせ・大井川SL・只見線の鉄道旅
- [白亜の灯台＆断崖絶景オーシャンビュー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-lighthouse-cliff-ocean-panorama-stay): 日御碕・犬吠埼・室戸岬の岬リゾート
- [絶景棚田＆日本の原風景里山温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-terraced-rice-fields-satoyama-onsen-stay): 星峠・白米千枚田・大山千枚田の休日
- [名水百選・湧水めぐり＆名水蕎麦豆腐料理の宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-spring-water-soba-tofu-onsen-stay): 忍野八海・安曇野・郡上八幡の名湯
- [日本三大薬湯＆奇跡の濃厚湯治宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-medicinal-baths-onsen-stay): 有馬・草津・松之山の名湯治体験
- [クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-craft-cider-hop-brewery-stay): 弘前・遠野・南信州飯田の果実酒ステイ
- [神秘のコバルトブルー・カルデラ湖畔ホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-caldera-blue-lake-resort-stay): 支笏湖・屈斜路湖・田沢湖の美景
- [銘柄豚・極上しゃぶしゃぶ料理の名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-brand-pork-shabu-gourmet-stay): 鹿児島黒豚・平田牧場金華豚・那須高原豚の美食旅
- [日本三大美林＆巨樹・森林セラピー癒やしの宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-major-forest-therapy-retreat-stay): 屋久島・木曽ヒノキ・青森ヒバの森
- [国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-distillery-whisky-pairing-stay): 余市・白州・秩父のモルト旅
- [日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-gorges-canyon-onsen-stay): 清津峡・黒部峡谷・大杉谷の絶景名湯
- [最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay): 松阪牛・近江牛・米沢牛の美食ホテル
- [日本最古のクラシックリゾートホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-japan-oldest-classic-hotel-heritage-stay): 日光金谷・箱根富士屋・雲仙観光ホテルの洋館ステイ
- [夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay): 志摩英虞湾・南三陸・伊根の舟屋の贅沢旅
- [日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-waterfalls-onsen-stay): 那智の滝・華厳の滝・袋田の滝の豪快名湯
- [地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-sake-bar-unlimited-tasting-stay): 越後湯沢・山形赤湯・京都伏見の酒蔵ステイ
- [日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-sand-dunes-resort-stay): 鳥取砂丘・中田島砂丘・吹上浜の海宿
- [古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-traditional-kamado-rice-irori-stay): 白川郷・遠野・丹波篠山のおばあちゃん家ステイ
- [日本三大イルミネーション直結リゾートホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-illuminations-resort-stay): あしかが・ハウステンボス・さっぽろ光のステイ
- [天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-kue-gourmet-luxury-fish-stay): 南紀白浜・長崎五島・高知室戸の本クエ会席
- [日本三名橋＆歴史遺産を望むリバーサイド名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-famous-bridges-heritage-stay): 岩国錦帯橋・長崎眼鏡橋・東京日本橋の風情旅
- [富士山ビュー客室露天風呂宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-open-air-bath-with-majestic-fuji-view-stay): 河口湖・日本平・箱根芦ノ湖の霊峰一望リゾート
- [日本三大急流＆爽快川下り名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-rapids-river-activity-stay): 最上川・富士川・球磨川のリバーサイド名湯旅
- [日本三大美祭＆歴史山鉾の街の老舗旅館×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-festivals-heritage-stay): 高山祭・秩父夜祭・京都祇園祭の伝統美ステイ
- [幻の極上赤身肉「短角牛・あか牛」美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay): 岩手短角牛・熊本あか牛・土佐あかうしの極上ステーキ
- [満天の星空露天風呂＆天体ドーム天文台宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-starry-sky-open-air-bath-observatory-stay): 阿智村・美星町・石垣島星空保護区リゾート
- [日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-emerald-valley-gorge-hot-spring-stay): 大歩危・黒部峡谷・清津峡の絶景秘湯
- [日本三名鐘＆歴史の響き・古刹めぐり宿坊名門宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-sacred-temple-bells-retreat-stay): 三井寺・神護寺・観世音寺の静寂リトリート
- [日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-wagashi-tea-culture-stay): 金沢長生殿・長岡越乃雪・松江山川の城下町旅
- [日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-japanese-whisky-distillery-retreat-stay): 余市・白州・富士御殿場の至福ステイ
- [日本三大陶磁器の里＆窯元めぐり・器と美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-pottery-towns-gourmet-stay): 有田・美濃・瀬戸の名陶と武雄嬉野温泉
- [日本三大八幡宮＆厄除け開運祈願・門前町名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-hachiman-shrines-sacred-stay): 宇佐神宮・石清水八幡宮・筥崎宮の聖地巡礼
- [日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-master-brewers-toji-sake-inn-stay): 南部杜氏・越後杜氏・丹波杜氏の美酒ステイ
- [日本三大カルスト台地＆白亜の石灰岩パノラマ高原宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-karst-plateaus-mountain-resort-stay): 秋吉台・四国カルスト・平尾台の絶景リゾート
- [日本三名泉＆格式ある老舗温泉旅館×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-japan-three-great-hot-springs-heritage-stay): 有馬・草津・下呂の天下の名湯ステイ
- [日本三大古道＆歴史巡礼の山林トレッキング宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-ancient-trails-historic-stay): 熊野古道・木曽路・鯖街道の宿場町名宿
- [激流ラフティング＆清流キャニオニング宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-whitewater-rafting-canyoning-adventure-stay): みなかみ利根川・吉野川小歩危・仁淀川ブルー
- [日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-pine-groves-ocean-stay): 三保松原・虹の松原・気比の松原のシーサイドステイ
- [日本三霊山＆名峰を仰ぐ天空リゾート×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-sacred-mountains-sky-resort-stay): 富士山・白山・立山の絶景パノラマ宿
- [日本三大名水＆清冽な湧水仕込み美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-famous-waters-culinary-stay): 南阿蘇白川水源・八ヶ岳白州・京都伏見の極上ステイ
- [日本三大水郷＆川下り舟舟遊び・水上情景宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-water-towns-riverside-stay): 柳川・近江八幡・佐原の水郷情緒旅
- [日本三大渓谷露天風呂＆野天温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-gorge-open-air-baths-retreat-stay): 天城湯ヶ島・群馬尻焼・秋田秋の宮の清流秘湯
- [日本三大美港＆ウォーターフロント名門ホテル×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-ports-waterfront-luxury-stay): 神戸・横浜・長崎のエキゾチック港町ステイ
- [日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-green-tea-regions-healing-stay): 静岡茶・宇治茶・朝宮茶の大茶園リトリート
- [日本三大水城＆海に浮かぶ名城展望宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-water-castles-seaside-stay): 今治城・高松城・中津城の海水堀と海の幸
- [日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-wonders-rock-scenery-stay): 妙義山・耶馬渓・寒霞渓のダイナミック絶景
- [日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-limestone-caves-mystery-stay): 龍泉洞・龍河洞・秋芳洞のドラゴンブルー地底湖
- [日本三大松原・砂州＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-pine-groves-sandbar-stay): 天橋立・気比の松原・三保の松原の海岸リゾート
- [日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-washi-craft-heritage-stay): 越前和紙・美濃和紙・小川和紙の手漉き体験
- [日本三大薬湯＆濃厚生薬湯治宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-medicinal-springs-healing-stay): 松之山温泉・草津温泉・有馬温泉の圧倒的奇跡薬湯
- [日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-bon-dances-heritage-stay): 西馬音内・郡上おどり・阿波おどりの伝統熱気
- [日本三大カルスト台地＆絶景スカイドライブ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-karsts-highland-drive-stay): 秋吉台・四国カルスト・平尾台の白銀高原
- [日本三大刃物の里＆職人クラフト宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-cutlery-towns-craft-stay): 関・越前・堺の名刀と至高の和包丁
- [日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-gardens-heritage-luxury-stay): 兼六園・後楽園・偕楽園の四季風雅ステイ
- [日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-morning-markets-seafood-stay): 輪島・呼子・勝浦の活気あふれる朝市
- [日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-rapids-river-boat-stay): 最上川・富士川・球磨川の豪快舟旅
- [日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-gorges-canyon-scenery-stay): 清津峡・黒部峡谷・瀞峡の圧倒的パノラマ
- [日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-sake-capitals-brewery-stay): 灘五郷・伏見・西条の銘酒ペアリング
- [日本三大原生林＆世界遺産ネイチャー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-primeval-forests-nature-stay): 知床・屋久島・白神山地の手つかず大自然
- [日本三大砂丘＆風紋パノラマ・海宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-sand-dunes-coastal-stay): 鳥取砂丘・吹上浜・中田島砂丘の砂漠リゾート
- [日本三大仏＆古都クラシック宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-buddhas-heritage-stay): 奈良・鎌倉・高岡大仏の歴史ヒーリング旅
- [日本三大夜桜＆お花見ライトアップ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-night-cherry-blossoms-stay): 弘前・高田城・高遠城址の満開桜幻郷
- [日本三大美林＆天然木アロマ温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-beautiful-forests-wood-stay): 青森ヒバ・秋田スギ・木曽ヒノキの森林浴
- [日本三奇橋＆スリル満点の名橋・渓谷宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-curious-bridges-canyon-stay): 錦帯橋・甲斐の猿橋・祖谷のかずら橋
- [新日本三大夜景＆天空スカイパノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-new-three-major-night-views-sky-stay): 皿倉山・若草山・フルーツ公園の100億ドル夜景
- [日本三大火祭り＆燃え盛る情熱の伝統宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-fire-festivals-passion-stay): 那智の火祭・野沢温泉道祖神・鞍馬の火祭
- [日本三大氷穴・洞窟探検宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-caves-ice-adventure-stay): 富岳風穴鳴沢氷穴・玉泉洞・昇竜洞の地底美
- [日本三大奇祭＆天下の熱狂カルチャー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-curious-festivals-heritage-stay): 諏訪御柱祭・国府宮はだか祭・男鹿ナマハゲ
- [日本三大鳥居＆聖地パワースポット宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-torii-gates-sacred-stay): 厳島神社・大神神社・平安神宮の神聖鳥居
- [日本三大花火大会＆リバーサイド展望宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-fireworks-riverside-stay): 長岡フェニックス・大曲芸術玉・土浦競技花火
- [日本三大茅葺きの里＆原風景ノスタルジー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-thatched-roof-villages-heritage-stay): 美山・大内宿・白川郷の古民家遺産
- [日本三大地底滝鍾乳洞＆地底アドベンチャー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-subterranean-waterfalls-caves-stay): 井倉洞・あぶくま洞・日原鍾乳洞の地下瀑布
- [日本三大港クルーズ＆夜景ディナークルーズ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-harbor-cruises-luxury-stay): 神戸・横浜・長崎の洋上夜景
- [日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-coastal-pine-glamping-resort-stay): 虹の松原・気比の松原・三保松原のシーサイド
- [日本三大七夕まつり＆星空短冊散策宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-tanabata-festivals-stay): 仙台・平塚・一宮の和紙笹飾り
- [日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-precipitous-coasts-stay): 北山崎・東尋坊・足摺岬の絶叫絶景
- [国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-national-treasure-teahouses-stay): 待庵・如庵・密庵の侘び寂び世界
- [日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-famous-stones-gardens-stay): 佐渡赤玉石・揖斐川石・鴨川真黒石の石庭美
- [日本三大名橋＆伝統建築美を渡る歴史街道宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-bridges-history-stay): 錦帯橋・眼鏡橋・日本橋の架橋建築美
- [日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-famous-confections-historic-town-stay): 長生殿・越乃雪・京銘菓の茶道美学
- [日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-limestone-caves-stay): 龍泉洞・秋芳洞・龍河洞のエメラルド地底湖
- [日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-beautiful-forests-stay): 青森ヒバ・秋田スギ・木曽ヒノキのフィトンチッド
- [日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-strange-sceneries-geopark-stay): 妙義山・寒霞渓・耶馬渓の奇岩怪石
- [日本三大イルミネーション＆光の祭典宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-illuminations-stay): あしかが・ハウステンボス・さっぽろ白雪
- [日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-train-window-views-stay): 姨捨・矢岳越え・狩勝峠の鉄道絶景
- [日本三大水城＆名城パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-water-castles-stay): 高松城・今治城・中津城の海水堀天守
- [日本三大うどん＆極上麺道湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-udons-gourmet-stay): 讃岐・稲庭・五島の伝統手延べ麺
- [日本三霊山＆霊峰パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-sacred-mountains-stay): 富士山・立山・白山の神聖なる霊峰
- [日本三大漆器＆伝統工芸名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-lacquerwares-stay): 越前・山中・会津の漆芸器文化
- [日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-tidal-flats-nature-stay): 有明海・諫早湾・曽根干潟の干満差パノラマ
- [日本三大和牛＆最高峰霜降り美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-wagyu-beef-gourmet-stay): 松阪牛・神戸牛・近江牛の本場すき焼き会席
- [日本三大急潮＆激流うず潮パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-rapid-currents-strait-stay): 鳴門・来島・関門海峡のダイナミック潮流
- [日本三大和紙＆清流文化湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-washi-papers-stay): 越前・美濃・土佐和紙の手漉き職人体験
- [日本三大高原＆マウンテンリゾート宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-highlands-resort-stay): 志賀高原・軽井沢・白樺湖霧ヶ峰の爽快ステイ
- [日本三大清流＆名水リバーサイド宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-clear-rivers-stay): 四万十川・長良川・柿田川の奇跡の透明度
- [日本三大巨樹＆神木パワースポット宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-giant-sacred-trees-stay): 蒲生の大楠・阿川の大杉・北金ヶ沢の大イチョウ
- [日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-sacred-hachiman-shrines-stay): 宇佐神宮・石清水八幡宮・筥崎宮の神域
- [日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-coastal-sceneries-stay): 天橋立・三保松原・気比の松原の海岸美
- [日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-columnar-joints-gorges-stay): 清津峡・高千穂峡・層雲峡の幾何学断崖
- [日本三大陶器まつり＆名窯工芸宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-pottery-festivals-stay): 有田・波佐見・信楽の器と美食巡礼
- [日本三大薬湯＆極上湯治リトリート宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-medicinal-hotsprings-stay): 草津・有馬・松之山の万病平癒濃厚泉
- [日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-daimyo-gardens-stay): 偕楽園・兼六園・後楽園の大名庭園文化
- [日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-beautiful-ports-stay): 清水港・長崎港・神戸港の海風ステイ
- [日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-mountain-castles-stay): 大和高取城・美濃岩村城・備中松山城の天空石垣
- [日本三大そうめん＆手延べ麺道宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-somen-noodles-stay): 三輪・播州・小豆島の手延べ極細白糸麺
- [日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-stalactite-caves-stay): あぶくま洞・玉泉洞・井倉洞の奇跡の石筍
- [日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-bihada-onsen-stay): 嬉野・斐乃上・喜連川の極上重曹泉
- [日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-secret-hotsprings-stay): 谷地温泉・祖谷温泉・乳頭温泉郷の自噴霊泉
- [日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-gorges-scenery-stay): 清津峡・黒部峡谷・大杉谷の奇岩清流
- [日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-waterfalls-resort-stay): 華厳の滝・那智の滝・袋田の滝の大迫力水煙
- [日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-sand-dunes-stay): 鳥取砂丘・中田島砂丘・吹上浜の風紋美
- [日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-unusual-bridges-stay): 錦帯橋・甲斐の猿橋・日光神橋の木造美
- [日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-rapid-rivers-stay): 最上川・富士川・球磨川の激流下り
- [日本三大夜桜＆幽玄のライトアップ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-night-cherry-blossoms-stay): 弘前公園・高田城址公園・上野恩賜公園の春宵
- [日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-rapid-tidal-currents-stay): 鳴門海峡・来島海峡・関門海峡の激流鯛
- [日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-train-window-views-stay): 姨捨・肥薩線矢岳・狩勝峠の車窓ロマン
- [日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-inari-shrines-stay): 伏見・豊川・祐徳の千本鳥居と門前町
- [日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-beautiful-forests-stay): 青森ヒバ・秋田スギ・木曽ヒノキの癒やし
- [日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-spring-waters-stay): 黒部湧水・白州尾白川・南阿蘇白川水源
- [日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-buddhas-heritage-stay): 奈良・鎌倉・高岡大仏の祈りと文化
- [日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-clear-stream-valleys-stay): 奥入瀬・抱返り・阿寺渓谷の清流美
- [日本三大急坂・天空峠道＆雲海パノラマ絶景宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-high-mountain-passes-stay): 渋峠・富士山スカイライン・温見峠の絶景ドライブ
- [日本三大美田・棚田百選＆日本の原風景リトリート宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-terraced-rice-fields-stay): 星峠・白米千枚田・丸山千枚田の黄金パノラマ
- [日本三大奇祭＆神話民俗・パワースポット名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-strange-festivals-stay): 諏訪御柱祭・国府宮はだか祭・男鹿ナマハゲの神事
- [日本三大瓦の町＆伝統美・いぶし瓦情趣の名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-roof-tile-towns-stay): 淡路瓦・三州瓦・石州瓦の歴史的町並み
- [日本三大そば＆打ち立て蕎麦の芳香・名水と門前宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-soba-noodles-stay): 戸隠・出雲割子・盛岡わんこそばの味覚
- [日本三大運河＆水郷レトロ・白壁の蔵屋敷と舟流し情趣の名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-historic-canals-stay): 小樽運河・倉敷美観地区・近江八幡八幡堀
- [日本三大ラーメン＆ご当地麺文化・名湯と屋台街の美食宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-ramen-capitals-stay): 喜多方・札幌味噌・博多豚骨ラーメン巡礼
- [日本三大ガラス工芸の町＆光の芸術・切子の輝きと風雅名宿×ふるさと納税完全ガイド](${BASE_URL}/furusato-tax-three-great-glass-craft-towns-stay): 小樽切子・江戸切子・薩摩切子の伝統工芸

















## 都道府県別観光＆宿泊ガイド
`;
  PREFECTURE_SLUGS.forEach(slug => {
    llmsTxt += `- [${slug.toUpperCase()} 観光＆宿泊ガイド](${BASE_URL}/prefectures/${slug})\n`;
  });

  llmsTxt += `\n## 最新厳選宿・観光ルポ記事\n`;
  posts.slice(0, 50).forEach(post => {
    llmsTxt += `- [${post.title}](${BASE_URL}/posts/${post.id}): ${post.hotel_name}（${post.prefecture}）\n`;
  });

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf8');
  console.log(`Generated physical llms.txt at ${path.join(PUBLIC_DIR, 'llms.txt')}`);

  // --- 4. public/llms-full.txt (LLM/AI専用全記事コンテンツ集約仕様) の自動生成 ---
  let llmsFullTxt = `# 日本全国・旅宿クラウド - 全記事データアーカイブ (LLMs Full Knowledge Base)

> 当ファイルは、ChatGPT、Claude、Perplexity、Geminiなどの大規模言語モデル（LLM）が日本全国の観光名所・温泉宿・名物グルメ・モデルコースの知識を取得するための完全な知識データベースです。

---

`;

  posts.forEach(post => {
    llmsFullTxt += `## 記事: ${post.title}\n`;
    llmsFullTxt += `- URL: ${BASE_URL}/posts/${post.id}\n`;
    llmsFullTxt += `- 宿泊施設名: ${post.hotel_name}\n`;
    llmsFullTxt += `- 都道府県: ${post.prefecture}\n`;
    llmsFullTxt += `- エリア: ${post.area}\n`;
    if (post.price) llmsFullTxt += `- 参考価格: ¥${post.price}〜\n`;
    if (post.rating) llmsFullTxt += `- 評価: ⭐ ${post.rating}\n`;
    const cleanReview = (post.review || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 1200);
    llmsFullTxt += `\n### ルポ・解説概要\n${cleanReview}\n\n---\n\n`;
  });

  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf8');
  console.log(`Generated physical llms-full.txt at ${path.join(PUBLIC_DIR, 'llms-full.txt')}`);
}

main();

