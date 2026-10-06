const fs = require('fs');
const path = require('path');

const { generateShigaKogenPage } = require('./generate_shiga_kogen.js');
const { generateMonbetsuPage } = require('./generate_monbetsu.js');
const { generateGotembaPage } = require('./generate_gotemba.js');
const { generateKamakuraPage } = require('./generate_kamakura.js');
const { generateTottoriPage } = require('./generate_tottori.js');

async function main() {
  console.log('================================================================');
  console.log('Generating Round 131 - 5 Winter Feature Pages & Updating Site Meta');
  console.log('================================================================');

  const rawDataPath = path.join(__dirname, 'round131_raw_hotels.json');
  if (!fs.existsSync(rawDataPath)) {
    console.error('Error: round131_raw_hotels.json does not exist!');
    process.exit(1);
  }

  const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

  // 1. Generate 5 pages
  console.log('\n[1/4] Generating individual feature page.tsx files...');
  generateShigaKogenPage(rawData.shiga_kogen_snow_monkey);
  generateMonbetsuPage(rawData.monbetsu_drift_ice_garinko);
  generateGotembaPage(rawData.gotemba_tokinosumika_illumination);
  generateKamakuraPage(rawData.kamakura_tsurugaoka_hatsumode_enoshima);
  generateTottoriPage(rawData.tottori_sand_dunes_snow_matsubagani);

  // 2. Update sitemap-features.xml
  console.log('\n[2/4] Updating public/sitemap-features.xml...');
  const sitemapPath = path.join(process.cwd(), 'public/sitemap-features.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const newFeatures = [
    {
      slug: 'winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
      title: '志賀高原＆地獄谷スノーモンキー！白銀パウダースノー＆湯田中渋温泉郷九湯めぐり・信州牛名宿',
      desc: '世界が愛するスノーモンキーと標高2000m極上パウダースノー！登録有形文化財「桃山風呂」や歴史の宿金具屋、ゲレンデ直結プリンスホテル…',
      badge: '12・1・2月特集'
    },
    {
      slug: 'winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
      title: '紋別流氷観光＆砕氷船ガリンコ号！オホーツクタワー・極上毛ガニ＆ホタテ・天然温泉名宿',
      desc: '巨大ドリルで流氷を砕き進むガリンコ号III IMERU！オホーツクタワーの海底観測とクリオネ、冬の王様オホーツク毛ガニ・ホタテ尽くし…',
      badge: '1・2・3月特集'
    },
    {
      slug: 'winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
      title: '御殿場・時之栖イルミネーション！ひかりのすみか550万球＆白銀富士山・御殿場高原ビール温泉名宿',
      desc: '300mの光のトンネルと日本一の噴水レーザーショー！富士山雪景色と御殿場高原ビール、死海風呂の気楽坊＆アウトレット直結リゾート…',
      badge: '11・12・1月特集'
    },
    {
      slug: 'winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
      title: '鎌倉・鶴岡八幡宮初詣＆湘南の宝石！神苑冬牡丹・小町通り冬グルメ＆相模湾絶景オーシャンビュー名宿',
      desc: '武家古都の厳かな新春初詣と藁囲いの可憐な冬牡丹！江の島シーキャンドルの光の大空間、七里ヶ浜全室オーシャンビュー＆由比ヶ浜天然温泉…',
      badge: '12・1・2月特集'
    },
    {
      slug: 'winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
      title: '冬の鳥取砂丘＆白兎神社初詣！白銀の雪砂丘と風紋・本場松葉ガニフルコース＆自家源泉鳥取温泉名宿',
      desc: '日本海寒風が刻む雪砂丘と神秘の風紋！因幡の白兎伝説で縁結び初詣、11月解禁の本場松葉ガニ茹で・焼き・刺身・甲羅酒＆自家源泉老舗宿…',
      badge: '11・12・1月特集'
    }
  ];

  let sitemapEntries = '';
  for (const f of newFeatures) {
    if (!sitemapContent.includes(f.slug)) {
      sitemapEntries += `  <url>\n    <loc>https://croud-travel.pages.dev/${f.slug}</loc>\n    <lastmod>2026-10-06</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    }
  }

  if (sitemapEntries) {
    sitemapContent = sitemapContent.replace('</urlset>', `${sitemapEntries}</urlset>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('Added 5 new URLs to sitemap-features.xml');
  } else {
    console.log('URLs already present in sitemap-features.xml');
  }

  // 3. Update public/llms-full.txt
  console.log('\n[3/4] Updating public/llms-full.txt...');
  const llmsPath = path.join(process.cwd(), 'public/llms-full.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');

  let llmsEntries = '';
  for (const f of newFeatures) {
    const line = `- https://croud-travel.com/${f.slug}: ${f.title}。${f.desc}`;
    if (!llmsContent.includes(f.slug)) {
      llmsEntries += `\n${line}`;
    }
  }

  if (llmsEntries) {
    llmsContent += llmsEntries;
    fs.writeFileSync(llmsPath, llmsContent, 'utf8');
    console.log('Appended 5 new feature summaries to llms-full.txt');
  } else {
    console.log('Entries already present in llms-full.txt');
  }

  // 4. Update src/app/features/page.tsx
  console.log('\n[4/4] Updating src/app/features/page.tsx...');
  const featuresPagePath = path.join(process.cwd(), 'src/app/features/page.tsx');
  let featuresPageContent = fs.readFileSync(featuresPagePath, 'utf8');

  const topMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n          {[\n';
  
  if (featuresPageContent.includes(topMarker)) {
    const newItemsCode = newFeatures.map(f => {
      return `            {
              slug: '${f.slug}',
              title: "${f.title}",
              desc: "${f.desc}",
              badge: '${f.badge}'
            },`;
    }).join('\n');

    // 重複追加を避ける
    if (!featuresPageContent.includes(newFeatures[0].slug)) {
      featuresPageContent = featuresPageContent.replace(
        topMarker,
        `${topMarker}${newItemsCode}\n`
      );
      fs.writeFileSync(featuresPagePath, featuresPageContent, 'utf8');
      console.log('Added 5 feature items to the top of features/page.tsx');
    } else {
      console.log('Items already present in features/page.tsx');
    }
  } else {
    console.warn('Could not find topMarker in features/page.tsx');
  }

  console.log('\n🎉 Round 131 Winter Feature generation complete!');
}

main().catch(err => {
  console.error('Error running generate_round131_all.js:', err);
  process.exit(1);
});
