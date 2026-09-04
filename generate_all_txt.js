const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const OUT_DIR = path.join(__dirname, 'out');
const POSTS_DIR = path.join(__dirname, 'src', 'data', 'posts');

function cleanText(t) {
  if (!t) return '';
  return t.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanTitle(t) {
  if (!t) return '';
  let cleaned = t;
  // サイト名の共通サフィックスを除去
  cleaned = cleaned.replace(/ \| 日本全国・旅宿クラウド｜楽天トラベルでめぐる厳選宿・観光マガジン.*$/, '');
  cleaned = cleaned.replace(/ ｜ 日本全国・旅宿クラウド.*$/, '');
  cleaned = cleaned.replace(/ \| 日本全国・旅宿クラウド.*$/, '');
  cleaned = cleaned.replace(/ \| 旅宿クラウド.*$/, '');
  return cleanText(cleaned);
}

function extractMetaFromHtml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // 高速正規表現抽出
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  let title = titleMatch ? cleanTitle(titleMatch[1]) : '';

  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let h1 = h1Match ? cleanText(h1Match[1].replace(/<[^>]+>/g, '')) : '';

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) ||
                    content.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
  let desc = descMatch ? cleanText(descMatch[1]) : '';

  const kwMatch = content.match(/<meta\s+name=["']keywords["']\s+content=["']([\s\S]*?)["']/i) ||
                  content.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']keywords["']/i);
  let keywords = kwMatch ? kwMatch[1].split(',').map(s => s.trim()).filter(Boolean) : [];

  return { title, h1, desc, keywords };
}

function scanOutDir(dir, base = '') {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const urlPath = `${base}/${entry.name}`;

    if (entry.isDirectory()) {
      results = results.concat(scanOutDir(fullPath, urlPath));
    } else if (entry.name === 'index.html' || (entry.name.endsWith('.html') && entry.name !== '404.html')) {
      const cleanUrl = urlPath.replace(/\/index\.html$/, '').replace(/\.html$/, '') || '/';
      results.push({
        filePath: fullPath,
        url: cleanUrl
      });
    }
  }
  return results;
}

function main() {
  console.log('=== all.txt 実HTML/実記事タイトル完全同期生成開始 ===');

  const pages = scanOutDir(OUT_DIR);
  console.log(`out/ 内の公開HTML総数: ${pages.length}`);

  let entries = [];

  for (const p of pages) {
    const meta = extractMetaFromHtml(p.filePath);
    let type = '特集・特化ガイド記事（静的ページ）';
    let title = meta.title;
    let queries = meta.keywords;

    // 個別宿ページ (/posts/[id])
    if (p.url.startsWith('/posts/')) {
      type = '個別ホテル・温泉宿詳細ガイド';
      const id = p.url.replace('/posts/', '');
      const jsonPath = path.join(POSTS_DIR, `${id}.json`);
      if (fs.existsSync(jsonPath)) {
        try {
          const post = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
          // 記事タイトルは post.title（例: 【2026最新】大江戸温泉物語 下呂別館の温泉・客室口コミ＆宿泊予約｜岐阜）を採用
          title = post.title || meta.title;
          
          let qList = [];
          if (post.hotel_name) qList.push(post.hotel_name);
          if (post.area && post.hotel_name) qList.push(`${post.area} ${post.hotel_name}`);
          if (post.prefecture && post.categories && post.categories[0]) {
            qList.push(`${post.prefecture} ${post.categories[0]}`);
          }
          if (post.nearby_tourist_spots && post.nearby_tourist_spots[0]) {
            qList.push(`${post.nearby_tourist_spots[0]} 宿泊 ホテル`);
          }
          if (qList.length > 0) queries = qList;
        } catch (e) {}
      }
    } else if (p.url.startsWith('/prefectures')) {
      type = '都道府県・市区町村・地域特化ハブ';
      // title は実際の HTML <title> または <h1> をそのまま採用（例: 【2026年最新】愛知県のおすすめ絶景＆レトロカフェ・スイーツ比較ランキング）
      title = meta.title || meta.h1;
    } else if (p.url.startsWith('/spots')) {
      type = '観光スポット詳細ガイド';
      title = meta.title || meta.h1;
    } else if (p.url === '/') {
      type = 'トップページ';
      title = meta.title;
    }

    // 狙えるクエリが空の場合は、タイトルから単語抽出
    if (!queries || queries.length === 0) {
      const cleanWords = (title || '').replace(/【|】|！|？|｜|\||・|＆|\/|,/g, ' ');
      queries = cleanWords.split(/\s+/).filter(w => w.length >= 2 && !['最新', '2026', 'おすすめ', '比較', 'ランキング', 'ガイド', '旅宿クラウド'].includes(w)).slice(0, 5);
    }

    // クエリのフィルタリング（ノイズ除外）
    const safeQueries = queries.filter(q => q && !q.includes('http') && q.length >= 2).slice(0, 6);

    entries.push({
      type,
      url: p.url,
      title: title || p.url,
      queries: safeQueries.join(' / ')
    });
  }

  // URL順にソート（一貫性のため）
  entries.sort((a, b) => a.url.localeCompare(b.url));

  console.log(`全エントリー数: ${entries.length}`);

  // all.txt 出力
  let txt = `================================================================================\n`;
  txt += `【日本全国・旅宿クラウド（croud-travel）】全公開ページ・実記事タイトル＆想定SEOクエリ一覧\n`;
  txt += `生成日時: ${new Date().toISOString()}\n`;
  txt += `総公開ページ数: ${entries.length} ページ（Cloudflare Pages 実装全URL完全同期）\n`;
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
  console.log('all.txt 実HTML/実記事タイトル完全同期版 出力完了！');
}

main();
