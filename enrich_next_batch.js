const fs = require('fs');

function enrichArticles() {
  // 1. 箱根 vs 熱海
  {
    const file = 'src/app/hakone-vs-atami-which-better/page.tsx';
    let content = fs.readFileSync(file, 'utf8');
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "箱根と熱海、日帰りで行くならどちらがおすすめですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "日帰りなら圧倒的に熱海がおすすめ。東京駅から東海道線普通列車で約1時間40分（1,980円）、新幹線なら約45分で到着し、駅前から熱海銀座商店街やサンビーチまで徒歩圏内。移動に時間を取られずランチ・温泉・海散歩をコンパクトに満喫できます。"
          }
        },
        {
          "@type": "Question",
          "name": "1泊2日で記念日や贅沢な温泉旅行をするなら？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1泊2日なら箱根が優勢です。箱根フリーパスを活用して登山電車、ケーブルカー、大涌谷ロープウェイ、芦ノ湖海賊船をぐるりと周遊でき、強羅や仙石原のにごり湯・隠れ家露天風呂旅館で非日常のステイを楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "海鮮グルメが目的ならどちらが満足度が高い？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "海鮮料理なら相模湾の地魚・金目鯛煮付け・海鮮丼が充実している熱海の圧勝です。一方、箱根は名水仕込みの湯葉・豆腐料理、大涌谷の黒たまご、老舗ホテルのベーカリーなど山のリゾートグルメが充実しています。"
          }
        }
      ]
    };

    const addSection = `
      {/* 目的別おすすめ早見表 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
          旅の目的別：あなたにぴったりの決定チャート
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50/60 rounded-3xl p-6 border border-amber-200">
            <h3 className="font-bold text-lg text-amber-900 mb-3">こんな人は「熱海」へGO！</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">✔ 東京から片道2,000円以内・短時間で手軽に行きたい</li>
              <li className="flex items-center gap-2">✔ 朝獲れの地魚海鮮丼や金目鯛をたらふく食べたい</li>
              <li className="flex items-center gap-2">✔ 相模湾の海絶景や夜の海上花火を眺めたい</li>
              <li className="flex items-center gap-2">✔ 昭和レトロな喫茶店や商店街の食べ歩きが好き</li>
            </ul>
          </div>
          <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200">
            <h3 className="font-bold text-lg text-emerald-900 mb-3">こんな人は「箱根」へGO！</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">✔ 登山電車やロープウェイで観光地を周遊したい</li>
              <li className="flex items-center gap-2">✔ 白濁のにごり湯や硫黄泉など名湯に浸かりたい</li>
              <li className="flex items-center gap-2">✔ 彫刻の森やポーラ美術館などアート鑑賞を楽しみたい</li>
              <li className="flex items-center gap-2">✔ 富士山の絶景と芦ノ湖の静寂に包まれたい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
          箱根 vs 熱海 よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 日帰りならどっちがおすすめ？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              日帰りなら圧倒的に熱海がおすすめ。東京駅から東海道線普通列車で約1時間40分（1,980円）、新幹線なら約45分。駅から商店街や海まで徒歩圏内で移動ロスがありません。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 1泊2日で記念日旅行なら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              1泊2日なら箱根が優勢です。箱根フリーパスで山内を周遊し、強羅や仙石原の露天風呂付き客室で非日常ステイを満喫できます。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 海鮮料理が食べたいなら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              海鮮なら相模湾の地魚・金目鯛煮付けが名物の熱海が圧倒的です。箱根は湯葉・豆腐料理や大涌谷黒たまごなど山の幸が中心となります。
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
    console.log('Hakone vs Atami enriched!');
  }

  // 2. 金沢 vs 京都
  {
    const file = 'src/app/kanazawa-vs-kyoto-comparison/page.tsx';
    let content = fs.readFileSync(file, 'utf8');
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "金沢と京都、初めての古都旅行ならどちらを選ぶべき？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "圧倒的な寺社仏閣のスケールと千年の歴史を体感したいなら京都。一方、観光スポットが金沢駅周辺のコンパクトなエリアに集中しており、1泊2日で街歩き・現代アート・日本海の新鮮な海鮮丼をすべて制覇したいなら金沢が抜群に回りやすいです。"
          }
        },
        {
          "@type": "Question",
          "name": "混雑を避けてゆったり観光したい場合は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "混雑回避なら金沢がおすすめ。京都は通年で国内外からの観光客が多く市バスも満員になりがちですが、金沢は兼六園や茶屋街も朝夕は非常に落ち着いており、ゆったりとした時間の流れを楽しめます。"
          }
        }
      ]
    };

    const addSection = `
      {/* 混雑度・回りやすさの徹底比較 */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-200 pb-2">
          混雑度と移動のストレス度：どちらが快適に回れるか
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100">
            <h3 className="font-bold text-lg text-indigo-900 mb-2">🚲 金沢：徒歩＆シェアサイクルで完結</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              金沢の主要名所（兼六園、金沢城、21世紀美術館、近江町市場、ひがし茶屋街）は中心部2km圏内に集中。まちのり（シェアサイクル）や周遊バスで快適に移動できます。
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-2">🚃 京都：地下鉄を軸にした動線が必須</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              東山、嵐山、伏見稲荷、金閣寺とエリアが東西南北に大きく離れているため、市バスだけに頼ると大渋滞でタイムロス。地下鉄を活用した賢い移動計画が不可欠です。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-14">
        <h2 className="font-journal-serif text-2xl md:text-3xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-200 pb-2">
          金沢 vs 京都 よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 初めての古都旅行ならどっちがおすすめ？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              千年の歴史と寺社仏閣の圧倒的スケールなら京都。1泊2日でコンパクトに名所・グルメ・アートをストレスフリーに回り尽くしたいなら金沢が最適です。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2">Q. 混雑を避けてゆっくり過ごしたいなら？</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              混雑回避なら金沢が断然おすすめ。兼六園や茶屋街も早朝や夕暮れ時は驚くほど静かで、情緒あふれる大人の散歩が楽しめます。
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
    console.log('Kanazawa vs Kyoto enriched!');
  }

  // 3. 北海道旅行 予算
  {
    const file = 'src/app/hokkaido-travel-budget-plan/page.tsx';
    let content = fs.readFileSync(file, 'utf8');
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "北海道旅行はレンタカーなしでも楽しめますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "札幌・小樽・函館・旭川などの主要都市観光であれば、JR快速エアポートや特急列車、都市間高速バスが非常に充実しているため、レンタカーなしで全く問題なく楽しめます。冬期の雪道運転リスクも回避できるため公共交通機関の利用は特におすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "北海道2泊3日の総額費用の相場はいくらですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LCCや早割航空券を活用した節約プランで1人約35,000円〜45,000円、大手航空会社＋駅前大浴場ホテル＋海鮮・ジンギスカンを満喫する標準プランで1人約60,000円〜80,000円がリアルな目安です。"
          }
        }
      ]
    };

    const addSection = `
      {/* 旅費を大幅に節約する5つのウラ技 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
          北海道旅行の費用をガッツリ抑える5つの節約術
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">1. 航空券は2〜3ヶ月前のLCCセールを狙う</h3>
            <p className="text-sm text-gray-600">
              成田・関空発着のピーチやジェットスターなら片道4,000円〜6,000円台で予約可能。手荷物枠だけ1人分追加するのが最もコスパの良い方法です。
            </p>
          </div>
          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">2. 新千歳空港〜札幌間は快速エアポートを賢く活用</h3>
            <p className="text-sm text-gray-600">
              普通運賃1,150円で約37分。指定席（Uシート別途840円）を使わなくても始発駅の新千歳空港から乗れば座れる確率が高めです。
            </p>
          </div>
        </div>
      </section>

      {/* よくある質問 FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-200 inline-block mb-8 pb-2">
          北海道旅行 予算・日程のよくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Q. レンタカーなしでも観光できますか？</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              札幌・小樽・函館・旭川などの主要都市であれば、JRや高速バスが充実しているためレンタカーなしで全く問題ありません。冬期の雪道運転が不安な方にも強く推奨します。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">Q. 2泊3日の総予算の目安は？</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              節約プランで1人約35,000円〜45,000円、標準プランで1人約60,000円〜80,000円が目安です。食費やお土産代に15,000円〜20,000円確保しておくと大満足できます。
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqData)}) }}
        />
      </section>
    `;

    content = content.replace('{/* Hotel Recommendations */}', addSection + '\n      {/* Hotel Recommendations */}');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Hokkaido budget plan enriched!');
  }
}

enrichArticles();
