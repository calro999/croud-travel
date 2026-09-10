import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【有馬温泉×ふるさと納税】日本最古の名湯・金泉銀泉めぐり＆極上神戸牛！名門老舗旅館ステイ完全ガイド｜兵衛向陽閣・月光園鴻朧館・陶泉御所坊',
  description: '日本三古湯・日本三名泉の頂点に立つ名湯・有馬温泉を楽天ふるさと納税でお得に旅する！創業七百年の伝統を誇る名門「兵衛向陽閣」、落葉山の絶景と自家源泉金泉の「月光園 鴻朧館」、創業八百年・谷崎潤一郎ゆかりの最古の湯宿「陶泉 御所坊」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
  keywords: '有馬温泉 ふるさと納税,兵衛向陽閣 ふるさと納税,有馬温泉 金の湯 旅館,月光園鴻朧館 クーポン,神戸市 ふるさと納税 宿泊',
  openGraph: {
    title: '【有馬温泉×ふるさと納税】日本最古の名湯・金泉銀泉めぐり＆極上神戸牛！名門老舗旅館ステイ完全ガイド｜兵衛向陽閣・月光園鴻朧館・陶泉御所坊',
    description: '日本三古湯・日本三名泉の頂点に立つ名湯・有馬温泉を楽天ふるさと納税でお得に旅する！創業七百年の伝統を誇る名門「兵衛向陽閣」、落葉山の絶景と自家源泉金泉の「月光園 鴻朧館」、創業八百年・谷崎潤一郎ゆかりの最古の湯宿「陶泉 御所坊」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            【有馬温泉×ふるさと納税】日本最古の名湯・金泉銀泉めぐり＆極上神戸牛！名門老舗旅館ステイ完全ガイド｜兵衛向陽閣・月光園鴻朧館・陶泉御所坊
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本三古湯・日本三名泉の頂点に立つ名湯・有馬温泉を楽天ふるさと納税でお得に旅する！創業七百年の伝統を誇る名門「兵衛向陽閣」、落葉山の絶景と自家源泉金泉の「月光園 鴻朧館」、創業八百年・谷崎潤一郎ゆかりの最古の湯宿「陶泉 御所坊」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">兵庫県神戸市</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            太閤秀吉が愛した鉄分の赤湯、立ち上る湯煙、世界の舌を魅了する神戸牛——有馬温泉で過ごす極上の休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            神代の昔、大己貴命と少彦名命の二神によって発見されたと伝わる日本最古の温泉・有馬温泉。奈良時代の行基、平安時代の仁西によって拓かれ、戦国時代には天下人・豊臣秀吉が戦傷と激務の体を癒やすために足繁く通ったことで知られます。地中深くから火山活動とは無関係に湧き出る温泉は、塩分と鉄分を豊富に含み空気に触れると赤褐色に濁る「金泉」と、ラジウムや炭酸を含む透明な「銀泉」という、全く異なる二大名湯を誇ります。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            風情ある有馬の温泉街には、細い路地に格子戸の町家が連なり、炭酸せんべいの焼き立ての香ばしい匂いが漂います。そして夕食の主役は、世界に名だたる最高級ブランド牛「神戸ビーフ」。サシの入った柔らかな肉質を、すき焼きやしゃぶしゃぶ、ステーキで味わう体験は、旅のクライマックスにふさわしい贅沢です。兵庫県神戸市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門老舗旅館へお得に滞在でき、一生の記念に残る優雅なひとときを過ごせます。
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">兵庫県神戸市のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>


          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg"
                alt="有馬温泉　兵衛向陽閣"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 2592件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　兵衛向陽閣
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業七百余年・秀吉公より「兵衛」の呼び名を授かった名門宿！三つの趣異なる大浴場でめぐる名湯金泉と神戸牛
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 兵衛向陽閣 —— 伝統と格式が織りなす極上のもてなし。広大な館内で愉しむ三湯めぐりと美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 和風・ローマ風・湯治風の趣異なる三つの大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一の湯（和風）、二の湯（ローマ風）、三の湯（湯治場風）と、それぞれ異なる風情を持つ大浴場すべてに名湯「金泉」を完備。館内だけで本格的な湯巡りを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 客室での贅沢な和食会席または豪華バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">熟練の料理人が腕を振るう四季の会席料理。とろけるような神戸牛の鉄板焼きや旬の魚介など、お部屋食プランや炭火焼き会席、バイキングなど多彩なプランから選べます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 七百年の歴史を受け継ぐ洗練されたホスピタリティ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">老舗ならではの行き届いたおもてなし。高台に位置し、有馬の山並みを見晴らす広々とした客室で、心安らぐ上質な休日を約束します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.55点、口コミ2500件超。「三つの大浴場の金泉がどれも最高で大満足」「お料理の神戸牛が驚くほど柔らかく美味しかった」と世代を問わず絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 神戸市北区有馬町1904</div>
                <div>最寄り駅・アクセス: 神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥15,950〜</span></div>
                <div>ホテル番号: No.8636</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/18252/18252.jpg"
                alt="有馬温泉　月光園　鴻朧館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.55（口コミ 1679件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　月光園　鴻朧館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  落葉山と滝川の清流を望む絶景宿！敷地内から湧出する自家源泉の金泉と茶道精神を受け継ぐ本格京風懐石
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 月光園 鴻朧館 —— 絶景パノラマと数寄屋の雅。渓流のせせらぎに包まれる上質リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 落葉山の四季パノラマを望む絶景大浴場と自家源泉金泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ロビーや大浴場、客室から望むのは四季折々に色を変える落葉山の壮大な借景。敷地内から湧き出る良質な自家源泉の金泉露天風呂に浸かりながら絶景を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 茶道・裏千家の美学息づく本格京風懐石料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">味はもちろん器や盛り付け、配膳のタイミングに至るまで洗練された京懐石。神戸牛の石焼きや明石浦直送の鮮魚など、厳選された旬の美味が並びます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 姉妹館「游月山荘」の露天風呂も巡れる湯巡りサービス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">月光橋を渡って隣接する姉妹館「游月山荘」の渓流露天風呂も無料で相互利用可能。趣の異なる湯処を贅沢に楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.55点、口コミ1600件超。「部屋や大浴場からの落葉山の紅葉が息をのむ美しさだった」「料理が一品一品繊細で感動した」とリピーターが多数。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 神戸市北区有馬町318</div>
                <div>最寄り駅・アクセス: 中国自動車道 西宮北ＩＣより有馬温泉方面約１０分／神戸電鉄「有馬温泉」駅下車 徒歩１０分（※毎日８時～１９時は無料送迎可</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥15,180〜</span></div>
                <div>ホテル番号: No.18252</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/80572/80572.jpg"
                alt="有馬温泉　陶泉　御所坊"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.44（口コミ 311件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">兵庫県神戸市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  有馬温泉　陶泉　御所坊
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業八百年・有馬最古の湯宿！文豪・谷崎潤一郎が愛した木造数寄屋建築と半混浴の金泉露天風呂
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  有馬温泉 陶泉 御所坊 —— 歴史と文学が薫るサロン風旅館。温泉街の原点に佇む唯一無二の空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 低い仕切り越しに会話を交わす独特の半混浴露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">男女の湯船が低い段差と竹垣で仕切られた名物露天風呂。濃い金泉の濁り湯に浸かりながら、夫婦や家族で旅の語らいを楽しめる風情ある造りです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 木造三階建て数寄屋造りのノスタルジックな美学
                    </h5>
                    <p className="text-stone-600 leading-relaxed">足踏みオルガンやアンティーク家具が置かれたサロンラウンジ。谷崎潤一郎や吉川英治ら文豪が愛した、大正・昭和初期の陰翳礼讃の世界が息づいています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 但馬玄（たじまぐろ）と旬の野菜を味わう山家料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">契約牧場から一頭買いする幻の純血但馬牛「但馬玄」。融点の低い上質な脂の甘みと旨味を、素朴ながら洗練された山家会席で堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.44点。「唯一無二のノスタルジックな雰囲気に魅了された」「金泉のお湯の濃さと但馬牛の美味しさは他では味わえない」と熱狂的なファンに支持されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 兵庫県 神戸市北区有馬町858</div>
                <div>最寄り駅・アクセス: 神戸電鉄有馬温泉駅から徒歩5分／中国自動車道西宮北ＩＣより５ｋｍ／神戸空港より電車乗り継ぎで約60分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥17,800〜</span></div>
                <div>ホテル番号: No.80572</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D80572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            有馬温泉街の路地散策＆六甲山頂パノラマ観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 湯本坂のレトロ散歩と炭酸せんべい・有馬サイダー
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">有馬温泉の中心を通る昔ながらの路地「湯本坂」。出来立ての温かい炭酸せんべいの試食や、明治生まれの復刻版「有馬サイダー」、金泉焼きの食べ歩きなど、温泉情緒を満喫できます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 金の湯・銀の湯の足湯と泉源めぐり
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">温泉街には「天神泉源」「御所泉源」「妬泉源」など七つの源泉が点在し、ゴボゴボと湯煙を上げる様子を間近で見学できます。外湯「金の湯」前の無料足湯も人気の憩いの場です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 六甲有馬ロープウェーで六甲山頂へ（1000万ドルの夜景）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">有馬温泉駅からロープウェーで約12分で六甲山山頂へ。昼は大阪湾から淡路島まで見渡す大パノラマ、夜は「1000万ドルの夜景」と称される息をのむ絶景が広がります。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              兵庫県神戸市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「兵庫県神戸市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「神戸市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で特別な記念日や週末旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行からたっぷり3年間。気候の良い春秋や冬の温泉シーズンなど、都合に合わせて日程を組めます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">兵衛向陽閣、月光園鴻朧館、陶泉御所坊などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kurokawa-onsen-nyuto-tegata-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 黒川温泉 入湯手形露天めぐり＆あか牛美食ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
