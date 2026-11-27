const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const articles = [
  {
    noteFile: 'note-324.md',
    slug: 'winter-vacation-elementary-science-study-trip-guide',
    title: '【小学生の親目線】冬休みの自由研究・探究を1泊で終わらせる！化石発掘・地学・宇宙体験ができる体験型温泉宿＆ミュージアム攻略ガイド',
    description: '冬休みの小学生を持つ親向けに、1泊2日の旅行中に自由研究や探究学習のレポートまで完結できる体験型温泉宿と屋内サイエンスミュージアムを徹底解説。福井県立恐竜博物館、那須の星空観察リゾート、裏磐梯の火山・自然史探究と名湯を網羅。',
    prefecture: '福井県・栃木県・福島県',
    area: '勝山・那須・裏磐梯',
    category: '特集',
    categories: ['特集', '家族旅行特集', '体験型ホテル特集'],
    tags: ['冬休み小学生', '冬休み自由研究', '体験型ホテル', '化石発掘', '恐竜博物館', '星空観察', '科学体験旅行', '子連れ探究学習'],
    hotelKeywords: ['勝山ニューホテル', 'ホテルエピナール那須', '裏磐梯レイクリゾート 本館 五色の森'],
    leadText: '冬休みの小学生家庭で親の頭を悩ませる「短い冬休みの学習サポート」と「自由研究のまとめ」。寒風が吹き荒れる野外で疲れるだけの観光を脱却し、全天候型のサイエンスミュージアムと快適な天然温泉宿を組み合わせることで、子どもは知的好奇心を爆発させ、親は温泉で骨休めできる一石二鳥の探究ステイが今大注目を集めています。',
    summaryBullets: [
      '**福井・勝山:** 世界三大恐竜博物館のひとつ「福井県立恐竜博物館」至近で化石や地球史のスケッチレポートを即日作成。',
      '**那須高原:** 冬の澄んだ星空を専門ガイドと観察するスターパーティ＆館内クラフト体験で理科の課題をクリア。',
      '**裏磐梯:** 火山活動と神秘の湖沼群「五色沼」の成り立ち、冬鳥の越冬観察記録をまとめられるネイチャーリゾート。'
    ],
    faq: [
      { q: '冬休みの自由研究は1泊2日で本当にまとまりますか？', a: '十分まとまります。館内にライブラリやワークデスクのある宿を選び、昼間に博物館で集めたパンフレットや写真を夕食前の45分〜1時間でノートに整理するのがコツです。' },
      { q: '雪道運転が不安ですがアクセスは大丈夫ですか？', a: '主要新幹線駅からの直通シャトルバスや、公共交通機関＋公式送迎が運行されている宿泊施設を厳選しています。' }
    ]
  },
  {
    noteFile: 'note-325.md',
    slug: 'winter-vacation-teenagers-family-trip-glamping-villa',
    title: '【中学生・高校生の親目線】思春期の子が本当に喜ぶ冬休み旅行！スマホ離れできる非日常グランピング＆適度な距離感を保つヴィラ泊',
    description: '「家族旅行に行きたがらない」「ずっと親と一緒だと気まずい」思春期の中学生・高校生を持つ親必見。お互いのプライベート空間を確保できる2ベッドルームヴィラや、自然と会話が生まれる冬グランピング＆焚き火リトリート宿を厳選紹介。',
    prefecture: '山梨県・長野県・静岡県',
    area: '河口湖・軽井沢・伊豆高原',
    category: '特集',
    categories: ['特集', '家族旅行特集', 'グランピング特集'],
    tags: ['冬休み中学生', '冬休み高校生', '家族旅行思春期', '一棟貸しヴィラ', '冬グランピング', '焚き火リトリート', '反抗期家族旅行'],
    hotelKeywords: ['PICA富士西湖', 'ルシアン旧軽井沢', 'コルテラルゴ伊豆高原'],
    leadText: '部活や塾、スマホゲームに没頭し、家族旅行を嫌がりがちになる中学生・高校生。「あと数年で家を出るかもしれないのに、家族の思い出を作れない」と悩む親御さんに最適なのが、適度な距離感を保てる一棟貸しヴィラと、焚き火の炎で自然に本音がポロリとこぼれる冬グランピングです。',
    summaryBullets: [
      '**富士河口湖:** 暖房完備の快適コテージと本格焚き火台。薪の炎を見つめながら無理なく会話が弾む非日常ステイ。',
      '**軽井沢:** コネクティングルームや広々和洋室を確保。アウトレットでの自由行動と温泉宿での合流で大人の距離感。',
      '**伊豆高原:** プライベート露天風呂付き離れヴィラ。誰にも気兼ねせず映画鑑賞や高音質サウンドを満喫できる極上隠れ家。'
    ],
    faq: [
      { q: '思春期の子どもを無理なく旅行に誘うコツは？', a: '「親の観光に付き合わせる」のではなく、「焚き火で肉を焼く」「アウトレットで好きな服を見る」など子ども自身のメリットを主役に企画することです。' },
      { q: '部屋割りはどうすればいいですか？', a: '親と完全に寝室を分けられるメゾネットコテージや、2部屋がドアで繋がるコネクティングルームがストレスゼロで一番喜ばれます。' }
    ]
  },
  {
    noteFile: 'note-326.md',
    slug: 'winter-vacation-high-school-friends-first-trip-guide',
    title: '【高校生だけの初旅行】冬休みに友達と行く温泉＆街歩き！未成年同意書・格安高速バス・駅チカ宿の完全準備マニュアル',
    description: '高校最後の冬休みに友達グループだけで行く温泉旅行を完全サポート。未成年者宿泊同意書の準備方法、青春18きっぷ・高速バス活用術、免許なしでも楽しめる駅チカ＆商店街食べ歩き温泉宿（熱海・伊香保・箱根）を徹底解説。',
    prefecture: '静岡県・群馬県・神奈川県',
    area: '熱海・伊香保・箱根湯本',
    category: '特集',
    categories: ['特集', '学生旅行特集', '温泉街歩き特集'],
    tags: ['高校生旅行', '高校生冬休み', '未成年旅行同意書', '友達旅行', '熱海温泉', '伊香保温泉', '学割旅行', '高校生だけ'],
    hotelKeywords: ['伊東園ホテル熱海館', '伊香保温泉 ホテル天坊', '箱根湯本温泉 ホテルマイユクール祥月'],
    leadText: '「高校最後の冬休み、いつもの親友や部活の仲間だけで旅行に行きたい！」そんな高校生の夢を叶えるための実践マニュアル。親の同意書の書き方から、1万円台で泊まれるコスパ宿、駅前商店街でのプリンや温泉まんじゅう食べ歩きスポットまで、高校生目線で知りたい情報を完全網羅しました。',
    summaryBullets: [
      '**熱海温泉:** 熱海駅から仲見世通りを抜けて徒歩2分。バイキング＆無料卓球・カラオケ完備で学生旅の殿堂。',
      '**伊香保温泉:** 新宿から直通高速バスで1本。365段の石段街で射的や玉こんにゃく食べ歩きを満喫できる名湯宿。',
      '**箱根湯本:** ロマンスカー直通。駅前から温泉街へ直結し、荷物を預けて手ぶらで散策できる安心の女子旅・グループ旅拠点。'
    ],
    faq: [
      { q: '高校生だけでホテルに宿泊できますか？', a: '宿泊可能です。ただし保護者の署名・捺印が入った「未成年者宿泊同意書」を宿泊者全員分提出する必要があります。' },
      { q: '予算は1人あたりどれくらい準備すべき？', a: '宿泊代（1泊2食）で約8,000円〜13,000円、往復交通費で約4,000円〜7,000円、食べ歩き小遣いで約5,000円、合計2万円前後が目安です。' }
    ]
  },
  {
    noteFile: 'note-327.md',
    slug: 'winter-vacation-college-students-retreat-work-cabin',
    title: '【大学生目線】冬休みの合宿型「夜通し語り合い＆開発・卒論・創作リトリート」！キッチン付きコテージ＆大画面プロジェクター宿',
    description: '大学生の短い冬休みに仲間と濃密な時間を過ごす合宿リトリート。卒論執筆、ハッカソン・開発合宿、サークル幹部会に最適な爆速Wi-Fi、自炊アイランドキッチン、大画面プロジェクター付きの一棟貸しヴィラ＆コテージ特集。',
    prefecture: '山梨県・長野県・京都府',
    area: '富士河口湖・白馬・京都郊外',
    category: '特集',
    categories: ['特集', '学生旅行特集', 'ワーケーション・合宿特集'],
    tags: ['大学生冬休み', '大学生サークル合宿', '卒論合宿', 'もくもく会', 'キッチン付きコテージ', '貸切宿', 'ワーケーション', '夜通し語る'],
    hotelKeywords: ['Rakuten STAY VILLA 富士河口湖の森', 'コテージホテル フェニーチェ白馬', '京町家貸切宿 高瀬川七条'],
    leadText: '大学生の冬休みは1〜2月の春休みと違って短いからこそ、目的を持った濃い旅がしたい。卒論のラストスパート、プログラミング開発合宿、就活前に朝まで語り合うリトリートなど、自炊鍋を囲みながら大画面スクリーンと爆速Wi-Fiで没頭できる一棟貸し切りコテージが最強の選択肢です。',
    summaryBullets: [
      '**富士河口湖:** 無人チェックインで気兼ねなし。大画面プロジェクター、最新家電、専用BBQテラス付きスマートヴィラ。',
      '**白馬山麓:** 雪景色を望むウッディなシャレー。昼は集中してPC作業、夜は薪ストーブの前で将来を語り合う贅沢。',
      '**京都町家:** 坪庭付き京町家を一棟完全貸切。静寂の中で読書会や研究論文の推敲に没頭できる知性派リトリート。'
    ],
    faq: [
      { q: '一棟貸しヴィラは大学生でも借りやすいですか？', a: '無人スマートロックの施設が多く、チェックイン・アウトもスムーズです。割り勘すれば1人1泊数千円台で高級ヴィラに滞在できます。' },
      { q: '自炊の買い出しはどうすればいいですか？', a: '地元の大型スーパーでご当地食材や鍋の具材、翌朝のパンやコーヒーをまとめて購入するのが一番コスパが高く盛り上がります。' }
    ]
  }
];

async function main() {
  const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const art of articles) {
    console.log(`\n=== Processing: ${art.title} ===`);
    const fetchedHotels = [];

    for (const kw of art.hotelKeywords) {
      console.log(`Searching Rakuten API for: ${kw}`);
      try {
        const res = await searchRakutenHotels(kw, 1);
        if (res && res.length > 0) {
          fetchedHotels.push(res[0]);
          console.log(`Found: ${res[0].hotelName}`);
        } else {
          console.log(`Not found: ${kw}`);
        }
      } catch (e) {
        console.error(`Error searching ${kw}:`, e.message);
      }
      await sleep(1200);
    }

    if (fetchedHotels.length === 0) {
      console.error(`No hotels found for ${art.title}`);
      continue;
    }

    const featuredHotels = fetchedHotels.map(h => ({
      name: h.hotelName,
      rating: String(h.reviewAverage || '4.50'),
      price: h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥8,000〜',
      url: h.affiliateUrl
    }));

    const minCharge = Math.min(...fetchedHotels.map(h => h.hotelMinCharge || 999999).filter(c => c > 0));
    const avgRating = (fetchedHotels.reduce((sum, h) => sum + (parseFloat(h.reviewAverage) || 4.5), 0) / fetchedHotels.length).toFixed(2);

    // Build rich review HTML for website
    let reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>❄️</span><span>冬休み特選ガイド：${art.prefecture}の厳選滞在拠点</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      ${art.description}
    </p>
  </div>
  <a href="${fetchedHotels[0].affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 ${fetchedHotels[0].hotelName}の宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-4">定番の混雑を避ける！新しい冬休み旅行のコンセプトと魅力</h2>
<p class="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
  ${art.leadText}
</p>

<div class="bg-blue-50/60 border border-blue-200 rounded-xl p-4 my-6">
  <h3 class="text-base font-bold text-blue-900 mb-2">🎯 この旅で体験できる3大ハイライト</h3>
  <ul class="list-disc list-inside space-y-1 text-sm text-slate-700">
    ${art.summaryBullets.map(b => `<li>${b}</li>`).join('\n    ')}
  </ul>
</div>

<h2 id="hotels" class="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-6">旅の目的に応じて選ぶ！厳選宿泊拠点</h2>
`;

    fetchedHotels.forEach((h, idx) => {
      reviewHtml += `
<div class="mb-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 pb-3 border-b border-slate-100">
    <div>
      <span class="inline-block px-2.5 py-0.5 bg-blue-600 text-white font-bold text-xs rounded-full mb-1">おすすめ拠点 ${idx + 1}</span>
      <h3 class="text-lg md:text-xl font-bold text-slate-900">${h.hotelName}</h3>
      <p class="text-xs text-slate-500">${h.address1}${h.address2} / 最寄駅: ${h.nearestStation || h.access}</p>
    </div>
    <div class="text-right">
      <span class="text-xs text-amber-500 font-bold">★ ${h.reviewAverage || '4.50'}</span>
      <span class="text-xs text-slate-400">(${h.reviewCount || 0}件)</span>
      <div class="text-base font-black text-rose-600">${h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '要プラン確認'}</div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div class="md:col-span-1">
      <img src="${h.hotelImageUrl}" alt="${h.hotelName}" class="w-full h-44 object-cover rounded-xl shadow-inner" />
    </div>
    <div class="md:col-span-2 space-y-2 text-sm text-slate-700">
      <p class="font-semibold text-blue-950">${h.hotelSpecial || ''}</p>
      <p class="text-xs text-slate-600 leading-relaxed">${h.userReview ? h.userReview.replace(/<[^>]+>/g, '').slice(0, 180) + '...' : ''}</p>
      <p class="text-xs text-slate-500"><strong>アクセス情報:</strong> ${h.access}</p>
    </div>
  </div>
  <div class="text-right">
    <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-lg shadow">
      👉 ${h.hotelName}の空室・プランを見る
    </a>
  </div>
</div>
`;
    });

    reviewHtml += `
<h2 id="faq" class="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-4">よくある質問（FAQ）</h2>
<div class="space-y-4 mb-8">
  ${art.faq.map(f => `
  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
    <h4 class="font-bold text-slate-900 text-sm mb-1">Q. ${f.q}</h4>
    <p class="text-xs text-slate-600 leading-relaxed">A. ${f.a}</p>
  </div>
  `).join('\n')}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${art.title}",
  "description": "${art.description}",
  "datePublished": "2026-11-27",
  "author": {
    "@type": "Organization",
    "name": "Croud Travel"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/og-image.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://croud-travel.pages.dev/posts/${art.slug}"
  }
}
</script>
`;

    const postData = {
      id: art.slug,
      slug: art.slug,
      title: art.title,
      description: art.description,
      date: '2026-11-27',
      prefecture: art.prefecture,
      area: art.area,
      category: art.category,
      tags: art.tags,
      hotelCount: fetchedHotels.length,
      minPrice: minCharge,
      review: reviewHtml.trim(),
      hotels: fetchedHotels,
      hotel_name: fetchedHotels.map(h => h.hotelName).join('・'),
      summary: art.description,
      categories: art.categories,
      image: fetchedHotels[0].hotelImageUrl,
      other_images: fetchedHotels.map(h => h.hotelImageUrl),
      affiliate_url: fetchedHotels[0].affiliateUrl,
      price: `${minCharge.toLocaleString()}円〜`,
      rating: avgRating,
      is_special_feature: true,
      featured_hotels: featuredHotels
    };

    const jsonPath = path.join(postsDir, `${art.slug}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(postData, null, 2), 'utf8');
    console.log(`Saved website main article: ${jsonPath}`);

    // Now write note markdown file (note-*.md) as summary & guide leading to the main article
    const noteContent = `---
title: "${art.title}"
slug: "${art.slug}"
date: "2026-11-27"
prefecture: "${art.prefecture}"
area: "${art.area}"
tags: [${art.tags.map(t => `"${t}"`).join(',')}]
---

# ${art.title}

${art.leadText}

定番の混雑スポットを避け、旅行後の満足度を最大化するための厳選プランと宿泊拠点のポイントを要約してご紹介します。

---

## 💡 本記事のハイライト・ポイント

${art.summaryBullets.map(b => `- ${b}`).join('\n')}

---

## 🏨 目的別おすすめ宿泊拠点ダイジェスト

${fetchedHotels.map((h, i) => `### ${i + 1}. ${h.hotelName}（${h.address1}）
- **特徴:** ${h.hotelSpecial || '快適な滞在環境と温泉・食事'}
- **宿泊目安:** 1名 ${h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '要プラン確認'}
- **楽天トラベル評価:** ⭐ ${h.reviewAverage || '4.50'}（${h.reviewCount || 0}件）
- 👉 [${h.hotelName}の空室・宿泊プランを見る](${h.affiliateUrl})
`).join('\n')}

---

## 🗺️ 1泊2日のおすすめ滞在スケジュール例

- **1日目:** 午前中に目的地へ到着 ➔ テーマに応じた体験（見学・アクティビティ・街歩き・作業） ➔ 16:00 宿にチェックインして温泉や部屋でリラックス ➔ 夕食＆夜の自由時間
- **2日目:** 朝食 ➔ 周辺スポット散策・お買い物 ➔ 昼過ぎに帰路へ

---

## ❓ よくある質問（FAQ）

${art.faq.map(f => `**Q. ${f.q}**  
A. ${f.a}
`).join('\n')}

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [${art.title}本編はこちら](https://croud-travel.pages.dev/posts/${art.slug}/)
`;

    const noteFilePath = path.join(__dirname, '..', art.noteFile);
    fs.writeFileSync(noteFilePath, noteContent.trim() + '\n', 'utf8');
    console.log(`Saved note file: ${noteFilePath}`);
  }

  console.log('\nAll done! Regenerating bundle and sitemaps...');
}

main().catch(console.error);
