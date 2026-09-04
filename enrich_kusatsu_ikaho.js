const fs = require('fs');
const path = require('path');

// 1. 草津 vs 伊香保の拡充
function enrichKusatsuVsIkaho() {
  const file = 'src/app/kusatsu-vs-ikaho-onsen-comparison/page.tsx';
  let content = fs.readFileSync(file, 'utf8');

  // FAQ構造化データと詳細FAQ、季節別比較、節約テクニックの挿入
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "草津温泉と伊香保温泉、電車とバスだけで行くならどっちが楽？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "所要時間の手軽さなら伊香保温泉（新宿・東京から高速バスで約2時間30分）、乗り換えなしの直行高速バスが充実している点では草津温泉（バスタ新宿・東京駅から直行便で約3時間30分〜4時間）も非常に快適です。どちらも車なしで完全に回ることができます。"
        }
      },
      {
        "@type": "Question",
        "name": "カップルや女子旅で行くならどちらがおすすめですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "石段街のレトロな雰囲気や射的、水沢うどんのランチ、おしゃれなカフェ巡りを楽しみたいなら伊香保温泉がおすすめ。夜の湯畑ライトアップや圧倒的な硫黄泉の湯浴み、外湯巡りを楽しみたいなら草津温泉が最適です。"
        }
      },
      {
        "@type": "Question",
        "name": "草津と伊香保、1泊2日で両方ハシゴすることは可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "レンタカーや自家用車であれば約1時間〜1時間20分で移動可能なため、1日目昼に伊香保石段街を散策し、夕方に草津温泉の宿にチェックインするハシゴ旅行も大人気です。公共交通機関の場合は高崎駅・渋川駅経由で約2時間〜2時間半で移動できます。"
        }
      },
      {
        "@type": "Question",
        "name": "冬場（12月〜3月）にノーマルタイヤの車で行けますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "草津温泉は標高約1,200mの豪雪地帯に位置するため、冬期はスタッドレスタイヤまたはチェーンが絶対に必須です。ノーマルタイヤの場合は都内からの直行高速バスを利用するのが最も安全で確実です。伊香保温泉も降雪・凍結リスクがあるため冬用タイヤを推奨します。"
        }
      }
    ]
  };

  const addition = `
      {/* 季節ごとの見どころ比較 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          季節別の選び方：春・夏・秋・冬のベストシーズン
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-emerald-900 mb-2">🌿 春・夏の避暑なら草津温泉</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              草津は標高1,200mに位置するため、真夏でも最高気温が25度前後の圧倒的な涼しさ。都会の猛暑を逃れて湯畑周辺を夕涼み散歩する体験は格別です。
            </p>
            <p className="text-xs text-slate-500">※夜間は夏でも肌寒くなるため、薄手の羽織りものが1枚あると安心です。</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-amber-800 mb-2">🍁 秋の紅葉ライトアップなら伊香保温泉</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              伊香保の「河鹿橋」は全国屈指の紅葉名所。朱塗りの太鼓橋と深紅のモミジが夜間ライトアップされる光景は息をのむ美しさです。石段街から徒歩10分でアクセス可能。
            </p>
            <p className="text-xs text-slate-500">※見頃は例年10月下旬〜11月中旬。周辺の宿は早くから満室になるため早めの予約が鉄則。</p>
          </div>
        </div>
      </section>

      {/* 現地で使える節約＆賢い回り方 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          損しないための現地節約ハック＆予約のコツ
        </h2>
        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
          <div className="flex items-start gap-3">
            <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">草津</span>
            <p className="text-sm text-slate-700">
              「三湯めぐり手形（大人2,100円）」を購入すると、御座之湯・大滝乃湯・西の河原露天風呂の3大外湯に個別入場するより400円お得になります。有効期限がないため次回訪問時にも利用可能。
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">伊香保</span>
            <p className="text-sm text-slate-700">
              水沢うどん街の店舗は夕方16時には閉店する店が多いため、ランチタイム（11:30〜13:30）の訪問が必須。石段街の無料足湯「辰の湯」タオル持参でサクッと楽しめます。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          草津温泉 vs 伊香保温泉 よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 電車とバスだけで行くならどっちが楽？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              所要時間の手軽さなら伊香保温泉（新宿・東京から高速バスで約2時間30分）。乗り換えなしの直行高速バスが充実している点では草津温泉（バスタ新宿・東京駅から直行便で約3時間30分〜4時間）も非常に快適です。どちらも車なしで完全に回ることができます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. カップルや女子旅で行くならどちらがおすすめ？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              石段街のレトロな雰囲気や射的、水沢うどんのランチ、おしゃれなカフェ巡りを楽しみたいなら伊香保温泉がおすすめ。夜の湯畑ライトアップや圧倒的な硫黄泉の湯浴み、外湯巡りを楽しみたいなら草津温泉が最適です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日で草津と伊香保を両方ハシゴできますか？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              車であれば約1時間〜1時間20分で移動可能なため、1日目昼に伊香保石段街を散策し、夕方に草津温泉の宿にチェックインするハシゴ旅行も大人気です。公共交通機関の場合は高崎駅・渋川駅経由で約2時間〜2時間半でアクセスできます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 冬場（12月〜3月）にノーマルタイヤの車で行けますか？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              草津温泉は標高約1,200mの豪雪地帯に位置するため、冬期はスタッドレスタイヤまたはチェーンが絶対に必須です。ノーマルタイヤの場合は都内からの直行高速バスを利用するのが最も安全で確実です。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqData)}) }}
        />
      </section>
  `;

  // {hotels.length > 0 && の直前に挿入
  content = content.replace('{hotels.length > 0 && (', addition + '\n      {hotels.length > 0 && (');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Kusatsu vs Ikaho enriched successfully!');
}

enrichKusatsuVsIkaho();
