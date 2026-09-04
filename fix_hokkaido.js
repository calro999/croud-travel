const fs = require('fs');

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

content = content.replace('<h3 className="font-bold text-xl text-blue-900 mb-4">北海道のおすすめホテル</h3>', addSection + '\n          <h3 className="font-bold text-xl text-blue-900 mb-4">北海道のおすすめホテル</h3>');
fs.writeFileSync(file, content, 'utf8');
console.log('Hokkaido budget successfully updated!');
