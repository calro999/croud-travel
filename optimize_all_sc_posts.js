const fs = require('fs');
const path = require('path');

const matchedData = JSON.parse(fs.readFileSync('scratch_matched_sc_posts.json', 'utf8'));
const files = matchedData.files;

console.log('Starting comprehensive optimization and fleshing out for ' + files.length + ' posts...');

let updatedCount = 0;

files.forEach(f => {
  const filepath = path.join('src/data/posts', f);
  if (!fs.existsSync(filepath)) return;
  const post = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  let changed = false;

  const hotelName = post.hotel_name || '';
  const area = post.area || '';
  const pref = post.prefecture || '';
  let title = post.title || '';
  let desc = post.description || '';
  let review = post.review || '';

  // 1. タイトルの最適化（【2026】または【宿泊記】などを付与し、具体的メリット・検索意図を反映）
  if (!title.includes('【2026') && !title.includes('【宿泊記') && !title.includes('【完全ガイド')) {
    title = `【2026】${title}`;
    changed = true;
  }
  if (!title.includes('口コミ') && !title.includes('おすすめ') && !title.includes('比較') && !title.includes('宿泊予約')) {
    title = `${title}の口コミ評判＆おすすめ宿泊ガイド`;
    changed = true;
  }

  // 2. ディスクリプションの最適化
  if (desc.length < 100 || !desc.includes('？')) {
    desc = `「${hotelName || area}の客室の広さや温泉・露天風呂の泉質は？」「名物料理やバイキングの味、アクセス・駐車場の使い勝手は？」${pref || ''}${area ? area + 'の' : ''}注目宿・スポットを徹底レビュー！実際に泊まった本音口コミや最新空室・最安値予約方法まで完全解説。`;
    changed = true;
  }

  // 3. 本文の肉付け（検索ユーザーが知りたい「温泉・客室」「食事・グルメ」「アクセス・駐車場・周辺観光」の3大要素を網羅）
  if (!review.includes('ユーザーが気になる宿泊ポイント＆本音チェック')) {
    const extraSection = `
<div class="my-8 p-6 bg-gradient-to-br from-amber-50/70 via-stone-50 to-emerald-50/50 border border-amber-200/90 rounded-3xl space-y-4 shadow-sm">
  <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-amber-200 pb-2">
    🔍 ユーザーが気になる宿泊ポイント＆本音チェック
  </h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
    <div class="p-3 bg-white rounded-2xl border border-stone-200 shadow-2xs">
      <strong class="text-stone-900 block mb-1">♨️ 温泉・客室の快適さ</strong>
      <p class="text-stone-600 leading-relaxed">足を伸ばせる大浴場や露天風呂、清潔でゆったり過ごせる客室空間。旅や出張の疲れを心地よくリフレッシュできます。</p>
    </div>
    <div class="p-3 bg-white rounded-2xl border border-stone-200 shadow-2xs">
      <strong class="text-stone-900 block mb-1">🍽️ 食事・地元グルメ</strong>
      <p class="text-stone-600 leading-relaxed">${pref ? pref + 'の' : ''}旬の地元食材を活かした朝食や夕食会席・バイキング。郷土色豊かな味覚を堪能できます。</p>
    </div>
    <div class="p-3 bg-white rounded-2xl border border-stone-200 shadow-2xs">
      <strong class="text-stone-900 block mb-1">🚗 駐車場・観光アクセス</strong>
      <p class="text-stone-600 leading-relaxed">最寄り駅やICからのアクセス良好。周辺観光地や名所巡りの拠点として抜群のロケーションを誇ります。</p>
    </div>
  </div>

  <div class="p-3.5 bg-amber-100/60 rounded-2xl border border-amber-200 text-xs text-amber-950">
    💡 <strong>予約のコツ：</strong>楽天トラベルでは季節の限定割引クーポンやポイント還元キャンペーンが定期開催されています。早期予約プランや直前割をチェックしてお得に予約するのがおすすめです。
  </div>
</div>`;
    review += extraSection;
    changed = true;
  }

  // 4. キーワードの充実
  if (post.keywords && Array.isArray(post.keywords)) {
    const kws = new Set(post.keywords);
    if (hotelName) {
      kws.add(`${hotelName} 口コミ`);
      kws.add(`${hotelName} 宿泊予約`);
      kws.add(`${hotelName} ブログ 宿泊記`);
    }
    if (area) {
      kws.add(`${area} ホテル 旅館 おすすめ`);
      kws.add(`${area} 温泉 宿泊`);
    }
    if (pref) {
      kws.add(`${pref} 旅行 おすすめ`);
    }
    post.keywords = Array.from(kws);
    changed = true;
  }

  if (changed) {
    post.title = title;
    post.description = desc;
    post.review = review;
    fs.writeFileSync(filepath, JSON.stringify(post, null, 2));
    updatedCount++;
  }
});

console.log(`Successfully optimized and fleshed out ${updatedCount} posts!`);
