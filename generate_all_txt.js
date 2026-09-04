const fs = require('fs');
const path = require('path');
const { PREFECTURES_DATA } = require('./src/data/prefecturesData.js');

// citiesData.ts からパース
let citiesData = [];
const citiesDataPath = path.join(__dirname, 'src', 'data', 'citiesData.ts');
if (fs.existsSync(citiesDataPath)) {
  const code = fs.readFileSync(citiesDataPath, 'utf8');
  const match = code.match(/export const CITIES_DATA: CityInfo\[\] = (\[[\s\S]*?\]);/);
  if (match) {
    try {
      // JSON形式に変換して評価
      const jsonStr = match[1]
        .replace(/\/\/.*$/gm, '')
        .replace(/,\s*\]/g, ']')
        .replace(/,\s*\}/g, '}');
      citiesData = eval(jsonStr);
    } catch (e) {
      console.warn('Fallback regex parse for citiesData');
      const cityMatches = code.matchAll(/prefSlug:\s*["']([^"']+)["'][\s\S]*?citySlug:\s*["']([^"']+)["'][\s\S]*?cityName:\s*["']([^"']+)["']/g);
      for (const m of cityMatches) {
        citiesData.push({ prefSlug: m[1], citySlug: m[2], cityName: m[3] });
      }
    }
  }
}

// 英語スラッグから日本語正式名称（漢字）へのマッピング辞書
const slugToPrefName = {};
const slugToMajorCity = {
  'aichi': '名古屋',
  'miyagi': '仙台',
  'ishikawa': '金沢',
  'hokkaido': '札幌',
  'fukuoka': '博多',
  'hiroshima': '広島',
  'kyoto': '京都',
  'osaka': '大阪',
  'hyogo': '神戸',
  'kanagawa': '横浜'
};

PREFECTURES_DATA.forEach(p => {
  slugToPrefName[p.slug] = p.name;
});

const slugToCityName = {};
if (Array.isArray(citiesData)) {
  citiesData.forEach(c => {
    slugToCityName[`${c.prefSlug}/${c.citySlug}`] = c.cityName;
    slugToCityName[c.citySlug] = c.cityName;
  });
}

function getPrefJapanese(slug) {
  return slugToPrefName[slug] || slug;
}

function getPrefWithCity(slug) {
  const pref = slugToPrefName[slug];
  if (!pref) return slug;
  if (slugToMajorCity[slug]) {
    return `${pref}（${slugToMajorCity[slug]}）`;
  }
  return pref;
}

function getCityJapanese(prefSlug, citySlug) {
  return slugToCityName[`${prefSlug}/${citySlug}`] || slugToCityName[citySlug] || citySlug;
}

function generateAllTxt() {
  console.log('=== all.txt 完全生成開始 ===');

  let entries = [];

  // 1. 静的ルート（src/app/*/page.tsx）
  const appDir = path.join(__dirname, 'src', 'app');
  const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('components'))
    .map(d => d.name);

  for (const slug of dirs) {
    const pagePath = path.join(appDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf8');

    // title 抽出
    let title = '';
    const titleMatch = content.match(/title:\s*["`‘](.+?)["`’]/);
    if (titleMatch) {
      title = titleMatch[1].replace(/ ｜ 日本全国・旅宿クラウド| \| 日本全国・旅宿クラウド/, '').trim();
    } else {
      const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      if (h1Match) {
        title = h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      }
    }

    // keywords または狙えるクエリの抽出
    let queries = [];
    const kwMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
    if (kwMatch) {
      queries = kwMatch[1]
        .split(',')
        .map(s => s.replace(/["`’\n\r]/g, '').trim())
        .filter(s => s && s !== slug && !s.includes('http') && s !== 'おすすめ' && s !== '楽天トラベル');
    }

    if (queries.length === 0) {
      const cleanTitle = title.replace(/【|】|！|？|｜|\|/g, ' ');
      queries = cleanTitle.split(/\s+/).filter(w => w.length >= 2).slice(0, 5);
    }

    entries.push({
      type: '特集・特化ガイド記事（静的ページ）',
      url: `/${slug}`,
      title: title || slug,
      queries: queries.slice(0, 6).join(' / ')
    });
  }

  // 2. 都道府県・市区町村・カフェ・お土産・地酒ページ（out/prefectures/ 内の生成HTML）
  function scanPrefectures(dir, base = '/prefectures') {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = path.join(dir, item.name);
      const urlPath = `${base}/${item.name}`;
      if (item.isDirectory()) {
        scanPrefectures(full, urlPath);
      } else if (item.name === 'index.html' || (item.name.endsWith('.html') && item.name !== '404.html')) {
        const cleanUrl = urlPath.replace(/\/index\.html$/, '').replace(/\.html$/, '');
        const parts = cleanUrl.split('/').filter(Boolean); // ['prefectures', 'aichi', 'cafes'] など
        let pageTitle = '';
        let targetQueries = '';

        if (parts.length === 2) {
          const prefJp = getPrefJapanese(parts[1]);
          const prefWithMajor = getPrefWithCity(parts[1]);
          pageTitle = `【${prefJp}】観光・宿泊・温泉・グルメ完全総合ガイド`;
          targetQueries = `${prefJp} 観光 / ${prefWithMajor} ホテル 宿泊 / ${prefJp} 温泉 旅館`;
        } else if (parts.length === 3) {
          const prefJp = getPrefJapanese(parts[1]);
          const prefWithMajor = getPrefWithCity(parts[1]);
          if (parts[2] === 'cafes') {
            pageTitle = `【${prefWithMajor}のおしゃれカフェ特集】絶景カフェ・モーニング・スイーツ`;
            targetQueries = `${prefJp} カフェ / ${prefWithMajor} カフェ / ${prefJp} おしゃれ カフェ / ${prefJp} スイーツ`;
          } else if (parts[2] === 'souvenirs') {
            pageTitle = `【${prefJp}の定番＆限定お土産】おすすめ銘菓・特産品ランキング`;
            targetQueries = `${prefJp} お土産 / ${prefJp} 銘菓 / ${prefJp} 特産品 ギフト`;
          } else if (parts[2] === 'sakes') {
            pageTitle = `【${prefJp}の銘酒・地酒完全ガイド】酒蔵巡り・ご当地日本酒`;
            targetQueries = `${prefJp} 地酒 / ${prefJp} 日本酒 銘柄 / ${prefJp} 酒蔵`;
          } else {
            const cityJp = getCityJapanese(parts[1], parts[2]);
            pageTitle = `【${prefJp}・${cityJp}】観光名所・おすすめホテル・ご当地グルメ`;
            targetQueries = `${cityJp} 観光 / ${cityJp} ホテル / ${cityJp} グルメ`;
          }
        } else {
          pageTitle = `【都道府県別ガイド】${cleanUrl}`;
          targetQueries = `${parts[parts.length - 1]} 旅行 観光`;
        }

        entries.push({
          type: '都道府県・市区町村・地域特化ハブ',
          url: cleanUrl,
          title: pageTitle,
          queries: targetQueries
        });
      }
    }
  }
  scanPrefectures(path.join(__dirname, 'out', 'prefectures'));

  // 3. スポット詳細ページ（out/spots/ 内の生成HTML）
  function scanSpots(dir, base = '/spots') {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = path.join(dir, item.name);
      const urlPath = `${base}/${item.name}`;
      if (item.isDirectory()) {
        scanSpots(full, urlPath);
      } else if (item.name === 'index.html' || (item.name.endsWith('.html') && item.name !== '404.html')) {
        const cleanUrl = urlPath.replace(/\/index\.html$/, '').replace(/\.html$/, '');
        const spotId = cleanUrl.replace('/spots/', '');
        entries.push({
          type: '観光スポット詳細ガイド',
          url: cleanUrl,
          title: `【観光スポット】${spotId} 周辺の宿・アクセス・見どころ`,
          queries: `${spotId} 観光 / ${spotId} 周辺 ホテル / ${spotId} 見どころ アクセス`
        });
      }
    }
  }
  scanSpots(path.join(__dirname, 'out', 'spots'));

  // 4. 個別宿泊施設・ホテル詳細記事（src/data/posts/*.json）
  const postsDir = path.join(__dirname, 'src', 'data', 'posts');
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
    for (const file of postFiles) {
      try {
        const post = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));
        const id = file.replace('.json', '');
        const title = post.title || post.hotel_name || id;
        
        let queries = [];
        if (post.hotel_name) queries.push(post.hotel_name);
        if (post.area && post.hotel_name) queries.push(`${post.area} ${post.hotel_name}`);
        if (post.prefecture && post.categories && post.categories[0]) {
          queries.push(`${post.prefecture} ${post.categories[0]}`);
        }
        if (post.nearby_tourist_spots && post.nearby_tourist_spots[0]) {
          queries.push(`${post.nearby_tourist_spots[0]} 宿泊 ホテル`);
        }

        entries.push({
          type: '個別ホテル・温泉宿詳細ガイド',
          url: `/posts/${id}`,
          title: title,
          queries: queries.join(' / ')
        });
      } catch (e) {}
    }
  }

  console.log(`全データ収集完了: 合計 ${entries.length} ページ`);

  // all.txt 出力
  let txt = `================================================================================\n`;
  txt += `【日本全国・旅宿クラウド（croud-travel）】全公開ページ・記事タイトル＆想定SEOクエリ一覧\n`;
  txt += `生成日時: ${new Date().toISOString()}\n`;
  txt += `総公開ページ数: ${entries.length} ページ（Cloudflare Pages 実装全URL網羅）\n`;
  txt += `================================================================================\n\n`;

  txt += `【ページ構成の内訳】\n`;
  const typeCounts = {};
  entries.forEach(e => typeCounts[e.type] = (typeCounts[e.type] || 0) + 1);
  for (const [k, v] of Object.entries(typeCounts)) {
    txt += `・${k}: ${v} ページ\n`;
  }
  txt += `\n================================================================================\n\n`;

  entries.forEach((e, idx) => {
    txt += `[#${idx + 1}] 【${e.type}】\n`;
    txt += `タイトル : ${e.title}\n`;
    txt += `URLパス  : ${e.url}\n`;
    txt += `狙える検索クエリ: ${e.queries}\n`;
    txt += `--------------------------------------------------------------------------------\n`;
  });

  fs.writeFileSync(path.join(__dirname, 'all.txt'), txt, 'utf8');
  console.log('all.txt 完全版出力完了！');
}

generateAllTxt();
