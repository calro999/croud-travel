const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');

// 取得対象（秋の派生記事＋冬休み記事）
const files = fs.readdirSync(postsDir).filter(f => 
  (f.startsWith('autumn-') || f.startsWith('winter-')) && f.endsWith('.json')
);

console.log(`Found ${files.length} autumn & winter files to audit and brush up...`);

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let post = JSON.parse(content);
  let isChanged = false;

  // 1. Featured hotelsが存在するか
  const hotels = post.featured_hotels || [];
  if (hotels.length === 0) continue;

  // 2. review本文内に構造化スペック早見表 (table) があるかチェック
  // なければ、あるいは単なる簡易テーブルの場合、SEO/GEO/AI-SEO完全対応版へアップグレード
  const hasGeoTable = post.review && post.review.includes('geo-comparison-table');

  // 3. AI-SEO用の要約リスト（Key Highlights / Quick Takeaways）が冒頭にあるか
  const hasKeyTakeaways = post.review && post.review.includes('ai-key-takeaways');

  if (!hasKeyTakeaways) {
    const isWinter = file.startsWith('winter-');
    const seasonLabel = isWinter ? '冬休み・年末年始家族旅行' : '秋（10月・11月）旅行';
    const highlightBadges = (post.categories || []).slice(0, 4).map(c => 
      `<span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700;">#${c}</span>`
    ).join(' ');

    const takeawaysHtml = `
<div class="ai-key-takeaways" style="margin: 0 0 24px 0; background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); border: 1px solid #bae6fd; border-radius: 16px; padding: 18px 20px;">
  <div style="font-size: 14px; font-weight: 900; color: #0369a1; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
    <span>⚡</span> <span>【AI即答サマリー】${post.title.slice(0, 40)}...の要点早見</span>
  </div>
  <div style="font-size: 13px; line-height: 1.8; color: #0f172a; margin-bottom: 10px;">
    <strong>・ベストシーズン：</strong> ${seasonLabel}（連休・週末は早めの予約推奨）<br/>
    <strong>・掲載宿の価格帯：</strong> 1名あたり約¥${(post.price || 8000).toLocaleString()}〜（楽天トラベル最安プラン基準）<br/>
    <strong>・こんな旅行におすすめ：</strong> ${(post.categories || []).slice(0, 5).join('・')}
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
    ${highlightBadges}
  </div>
</div>
`;
    // 冒頭のlead-sectionの後または先頭に挿入
    if (post.review.includes('</div>')) {
      const leadEndIdx = post.review.indexOf('</div>') + 6;
      post.review = post.review.slice(0, leadEndIdx) + '\n' + takeawaysHtml + post.review.slice(leadEndIdx);
    } else {
      post.review = takeawaysHtml + '\n' + post.review;
    }
    isChanged = true;
  }

  // 4. 画像のSEO属性 (loading="lazy", decoding="async", max-image-preview large対応alt) の完全徹底
  if (post.review.includes('<img')) {
    const updatedReview = post.review.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
      let newAttrs = attrs;
      if (!newAttrs.includes('loading=')) newAttrs += ' loading="lazy"';
      if (!newAttrs.includes('decoding=')) newAttrs += ' decoding="async"';
      return `<img ${newAttrs.trim()}>`;
    });
    if (updatedReview !== post.review) {
      post.review = updatedReview;
      isChanged = true;
    }
  }

  // 5. meta description が短すぎる場合の拡充
  if (!post.description || post.description.length < 90) {
    post.description = `${post.title}。楽天トラベル公式APIによる最新クチコミ高評価宿、宿泊料金目安、アクセス、家族・子連れ向けおすすめポイントを徹底比較。${post.summary || ''}`.slice(0, 160);
    isChanged = true;
  }

  if (isChanged) {
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
    updatedCount++;
  }
}

console.log(`Successfully audited & brushed up ${updatedCount} articles with AI-SEO Takeaways & Image Optimization!`);
