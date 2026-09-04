const fs = require('fs');

function enrichKyotoAndKanazawa() {
  // 1. 京都 何泊がベスト？
  {
    const file = 'src/app/kyoto-travel-budget-how-many-nights/page.tsx';
    let content = fs.readFileSync(file, 'utf8');
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "京都旅行は1泊2日と2泊3日、どちらが満足度が高い？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "初めての京都旅行なら2泊3日が圧倒的におすすめです。1泊2日だと東山と嵐山の2大エリアを駆け足で回るだけで終わってしまいますが、2泊あれば伏見稲荷の千本鳥居、金閣寺・銀閣寺、錦市場の食べ歩きや夜間ライトアップまでゆったり満喫できます。"
          }
        },
        {
          "@type": "Question",
          "name": "京都観光で一番効率的な移動手段は何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "地下鉄を主軸にして、駅から遠い寺社のみ市バスや徒歩を組み合わせるのが鉄則です。市バスだけに頼ると京都駅前や東山通りの慢性的な渋滞に巻き込まれ、1日1〜2ヶ所しか回れなくなるリスクがあります。"
          }
        }
      ]
    };

    const addSection = `
      {/* 泊数別の満足度と回りやすさ比較 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-200 pb-2">
          1泊2日 vs 2泊3日：リアルなスケジュール比較
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-lg mb-2">⚡ 1泊2日：王道エリア弾丸プラン</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              1日目に清水寺〜八坂神社〜祇園、2日目午前に嵐山の竹林と天龍寺を回って終了。移動時間を切り詰める計画性が必須です。
            </p>
            <span className="text-xs bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-bold">リピーター・週末旅行向き</span>
          </div>
          <div className="bg-teal-50 p-6 rounded-3xl border border-teal-200">
            <h3 className="font-bold text-teal-900 text-lg mb-2">✨ 2泊3日：京都満喫の黄金プラン</h3>
            <p className="text-sm text-teal-800 leading-relaxed mb-3">
              伏見稲荷の早朝参拝、宇治の抹茶スイーツ、夕暮れの先斗町ディナーまで網羅。混雑する昼を避けて朝夕の静寂を楽しめます。
            </p>
            <span className="text-xs bg-teal-600 text-white px-2.5 py-1 rounded-full font-bold">初京都・カップル旅行にイチオシ</span>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-teal-800 mb-6 border-b-2 border-teal-200 pb-2">
          京都旅行 何泊・予算のよくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日と2泊3日、どちらが満足度が高い？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              初めてなら2泊3日が圧倒的におすすめ。1泊だと移動で手一杯になりますが、2泊あれば早朝の清水寺や夜の先斗町など京都の本当の魅力を味わい尽くせます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 移動でバスと地下鉄、どちらを使うべき？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              地下鉄を軸に動くのが大原則です。京都の主要道路は常に混雑しているため、地下鉄・バス1日券を駆使して渋滞をスキップするのがプロの回り方です。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqData)}) }}
        />
      </section>
    `;

    content = content.replace('{hotels.length > 0 && (', addSection + '\n      {hotels.length > 0 && (');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Kyoto nights plan enriched!');
  }

  // 2. 金沢旅行 費用
  {
    const file = 'src/app/kanazawa-travel-budget-guide/page.tsx';
    let content = fs.readFileSync(file, 'utf8');
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "金沢旅行1泊2日の総額はいくら必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "東京・大阪からの往復新幹線・特急代（約20,000円〜28,000円）、駅前ホテル宿泊（約8,000円〜15,000円）、近江町市場の海鮮丼や金沢おでんなどの食費（約10,000円〜15,000円）、兼六園等の入場料・交通費を含め、1人あたり約40,000円〜60,000円が標準的な目安です。高速バスを利用すれば3万円台前半まで抑えられます。"
          }
        },
        {
          "@type": "Question",
          "name": "金沢市内の移動でおすすめの交通手段は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "主要名所が中心部にまとまっているため、「城下まち金沢周遊バス（1日フリー乗車券800円）」または公共シェアサイクル「まちのり（1回165円）」の利用が最も便利でコスパ抜群です。"
          }
        }
      ]
    };

    const addSection = `
      {/* 賢く浮かす！金沢旅行の節約テクニック */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          金沢旅行の費用を浮かす3大節約テクニック
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">1. 兼六園の早朝無料入園を活用</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              通常大人320円の兼六園は、毎朝開門時間前の「早朝無料開放」を実施中。澄んだ朝の空気と人混みゼロの絶景を完全無料で独占できます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">2. まちのりシェアサイクル</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              市内数十カ所にあるポートで乗り降り自由。電動アシスト付きで坂道も楽々、1回165円でバス待ちのストレスから完全解放されます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-emerald-900 mb-2">3. 夜は地元の回転寿司・金沢おでん</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              高級割烹でなくても、金沢駅前のもりもり寿しやすし食いねぇ！、黒百合の金沢おでんなら1人2,500円〜3,500円で感動級の美味しさを味わえます。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-200 pb-2">
          金沢旅行 費用・予算のよくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日の総額費用はいくら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              新幹線＋ホテル＋海鮮グルメ込みで1人約40,000円〜60,000円が目安。夜行バスや高速バスを利用すれば3万円台前半まで抑えることができます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 市内の移動はバスとタクシーどっちが良い？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              中心部2km圏内なので周遊バス（1日800円）またはシェアサイクル「まちのり」が圧倒的におすすめ。3〜4人のグループならワンメーター圏内でタクシー移動も割安です。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqData)}) }}
        />
      </section>
    `;

    content = content.replace('{hotels.length > 0 && (', addSection + '\n      {hotels.length > 0 && (');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Kanazawa budget plan enriched!');
  }
}

enrichKyotoAndKanazawa();
