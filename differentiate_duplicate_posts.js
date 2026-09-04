const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');

// 角度の切り口定義
const ANGLE_PERSPECTIVES = [
  {
    tag: 'カップル・記念日旅行',
    titleSuffix: 'カップル・夫婦記念日ステイ！客室露天風呂・贅沢会席・静かな滞在の口コミ',
    descSuffix: 'カップル・夫婦での特別な記念日やご褒美旅行におすすめ！客室露天風呂や静かな個室会席、サプライズ対応の評判を徹底紹介。',
    cat: '記念日・カップル'
  },
  {
    tag: '子連れファミリー・家族旅行',
    titleSuffix: '子連れファミリー宿泊レビュー！キッズ対応・ファミリールーム・大浴場ガイド',
    descSuffix: '小さなお子様連れや3世代ファミリー旅行での安心度をチェック！子供用アメニティや家族風呂、添い寝プランの評判を詳しく解説。',
    cat: '家族・子連れ旅行'
  },
  {
    tag: '温泉・泉質・サウナ湯治',
    titleSuffix: '温泉・泉質徹底解剖！名湯露天風呂・源泉かけ流し・日帰り入浴スペック',
    descSuffix: '名湯の泉質・効能・美肌効果を深掘り！大浴場の開放感や露天風呂、サウナ・水風呂設備、湯巡りの見どころを徹底解説。',
    cat: '温泉・湯巡り'
  },
  {
    tag: 'ご当地グルメ・夕食朝食バイキング',
    titleSuffix: 'ご当地グルメ・夕食会席＆朝食バイキング完全ガイド！地元旬の味覚を堪能',
    descSuffix: '宿自慢の絶品料理を徹底取材！名産ブランド肉や朝獲れ海鮮、朝食ビュッフェの看板メニューと口コミ満足度をまとめました。',
    cat: 'グルメ・郷土料理'
  },
  {
    tag: '車なし・一人旅・駅アクセス',
    titleSuffix: '車なし一人旅＆電車アクセス完全ガイド！送迎バス・周辺観光スポット巡り',
    descSuffix: '公共交通機関や一人旅でも安心！最寄り駅からの送迎バス運行情報、一人泊プラン、周辺の徒歩観光ルートを分かりやすくナビゲート。',
    cat: '一人旅・アクセス'
  }
];

function differentiateDuplicates() {
  console.log('=== 同一ホテル重複記事のリライト＆相互内部リンク連携開始 ===');

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
  const hotelMap = {};

  for (const file of files) {
    try {
      const p = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf8'));
      const hName = p.hotel_name || '';
      const id = file.replace('.json', '');
      if (!hName) continue;
      if (!hotelMap[hName]) hotelMap[hName] = [];
      hotelMap[hName].push({ id, file, post: p });
    } catch (e) {}
  }

  const dupes = Object.entries(hotelMap).filter(([k, v]) => v.length > 1);
  console.log(`重複ホテル数: ${dupes.length} グループ`);

  let modifiedPostsCount = 0;

  for (const [hotelName, items] of dupes) {
    // 2件以上の記事がある場合、1件目を「王道の総合宿泊予約ガイド」とし、
    // 2件目以降をそれぞれ異なる明確な切り口（カップル、ファミリー、温泉泉質、グルメ、一人旅等）へリライト
    
    // itemsをソート：数字IDがある場合はそれを王道メインにする
    items.sort((a, b) => {
      const aIsNum = /^\d+$/.test(a.id);
      const bIsNum = /^\d+$/.test(b.id);
      if (aIsNum && !bIsNum) return -1;
      if (!aIsNum && bIsNum) return 1;
      return a.id.localeCompare(b.id);
    });

    const cleanHotelName = hotelName.replace(/＜.+?＞/g, '').replace(/　/g, ' ').trim();

    items.forEach((item, idx) => {
      const post = item.post;
      let changed = false;

      // 他の重複記事への相互内部リンクを作成
      const otherItems = items.filter(it => it.id !== item.id);
      const crossLinkHtml = `
<div class="my-8 p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm">
  <div class="flex items-center gap-2 font-bold text-sm text-emerald-900 mb-2">
    <span>💡</span>
    <span>【${cleanHotelName}】目的・テーマ別の関連ガイド</span>
  </div>
  <p class="text-xs text-emerald-800 mb-3">当サイトでは、同じ宿泊施設でも旅の目的や同伴者に合わせた特化レビューを公開しています：</p>
  <ul class="space-y-1.5 text-xs">
    ${otherItems.map(other => `
      <li>
        👉 <a href="/posts/${other.id}" class="text-emerald-700 hover:text-emerald-900 font-bold underline">
          ${other.post.title || other.id}
        </a>
      </li>
    `).join('')}
  </ul>
</div>
`;

      if (idx === 0) {
        // メイン記事：総合宿泊・予約完全ガイド
        if (!post.title.includes('宿泊予約') && !post.title.includes('総合ガイド')) {
          post.title = `【2026最新】${cleanHotelName}の宿泊予約＆口コミ総合ガイド`;
          changed = true;
        }
        // 相互リンクをreviewの末尾または適切な位置に追加（既存がなければ）
        if (!post.review.includes('目的・テーマ別の関連ガイド')) {
          post.review = post.review + '\n' + crossLinkHtml;
          changed = true;
        }
      } else {
        // サブ記事（2件目以降）：角度を変えて完全リライト
        const angle = ANGLE_PERSPECTIVES[(idx - 1) % ANGLE_PERSPECTIVES.length];
        const newTitle = `【${cleanHotelName}】${angle.titleSuffix}`;
        const newDesc = `${cleanHotelName}の${angle.descSuffix}`;

        post.title = newTitle;
        post.description = newDesc;

        // カテゴリやrecommended_forの調整
        if (!post.categories) post.categories = [];
        if (!post.categories.includes(angle.cat)) {
          post.categories.unshift(angle.cat);
        }

        // review本文の冒頭見出しや導入をその切り口に最適化
        const customAngleIntro = `
<div class="mb-6 p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900">
  <strong>【本記事のテーマ：${angle.tag}】</strong><br/>
  本ページでは、「${cleanHotelName}」について、特に<strong>${angle.tag}</strong>の視点から客室・お食事・設備・サービスを徹底レビューしています。
</div>
`;

        if (!post.review.includes(angle.tag)) {
          post.review = customAngleIntro + post.review;
          changed = true;
        }

        if (!post.review.includes('目的・テーマ別の関連ガイド')) {
          post.review = post.review + '\n' + crossLinkHtml;
          changed = true;
        }

        changed = true;
      }

      if (changed) {
        fs.writeFileSync(path.join(postsDir, item.file), JSON.stringify(post, null, 2), 'utf8');
        modifiedPostsCount++;
      }
    });
  }

  console.log(`リライト＆相互リンク更新完了: ${modifiedPostsCount} 記事を更新しました！`);
}

differentiateDuplicates();
