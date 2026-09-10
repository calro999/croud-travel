import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【由布院温泉×ふるさと納税】金鱗湖の朝霧＆由布岳絶景！全室離れ露天風呂付き隠れ家名宿ガイド｜旅亭田乃倉・ゆふいん花由・ゆふいん月燈庵',
  description: '日本中の旅行者が憧れる名湯・由布院温泉を楽天ふるさと納税でお得にリゾートステイ！金鱗湖徒歩1分で本格懐石を味わう「旅亭 田乃倉」、由布岳と朝霧を見晴らす高台の離れ宿「ゆふいん花由」、築三百年古民家と客室露天風呂の「ゆふいん月燈庵」を徹底比較。大分県由布市トラベルクーポン活用術を網羅。',
  keywords: '由布院温泉 ふるさと納税,由布院 離れ 露天風呂 ふるさと納税,旅亭田乃倉 ふるさと納税,ゆふいん花由 クーポン,由布市 ふるさと納税 宿泊',
  openGraph: {
    title: '【由布院温泉×ふるさと納税】金鱗湖の朝霧＆由布岳絶景！全室離れ露天風呂付き隠れ家名宿ガイド｜旅亭田乃倉・ゆふいん花由・ゆふいん月燈庵',
    description: '日本中の旅行者が憧れる名湯・由布院温泉を楽天ふるさと納税でお得にリゾートステイ！金鱗湖徒歩1分で本格懐石を味わう「旅亭 田乃倉」、由布岳と朝霧を見晴らす高台の離れ宿「ゆふいん花由」、築三百年古民家と客室露天風呂の「ゆふいん月燈庵」を徹底比較。大分県由布市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-yufuin-kinrinko-luxury-villa-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-yufuin-kinrinko-luxury-villa-stay',
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
            【由布院温泉×ふるさと納税】金鱗湖の朝霧＆由布岳絶景！全室離れ露天風呂付き隠れ家名宿ガイド｜旅亭田乃倉・ゆふいん花由・ゆふいん月燈庵
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本中の旅行者が憧れる名湯・由布院温泉を楽天ふるさと納税でお得にリゾートステイ！金鱗湖徒歩1分で本格懐石を味わう「旅亭 田乃倉」、由布岳と朝霧を見晴らす高台の離れ宿「ゆふいん花由」、築三百年古民家と客室露天風呂の「ゆふいん月燈庵」を徹底比較。大分県由布市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">大分県由布市</strong></span>
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
            由布岳の雄姿、立ち上る朝霧と金鱗湖、雑木林に佇む離れの宿——由布院温泉で過ごす極上のプライベート休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            豊後富士と称される美しい「由布岳」の麓、穏やかな田園風景と清らかな湧水に恵まれた由布院温泉。別府に次ぐ全国第2位の湧出量を誇りながら、大型ホテルを建てず、自然と調和した低層の離れ宿や美術館、お洒落なカフェが点在する街並みは、大人の上質な旅先として絶大な人気を誇ります。冬の早朝、湖底から温泉が湧き出る「金鱗湖」から立ち上る幻想的な朝霧は、由布院を象徴する奇跡の絶景です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            由布院の魅力の真骨頂は、雑木林の中に独立した客室が点在する「離れ形式」の隠れ家旅館。誰にも邪魔されずに客室露天風呂で由布岳を眺め、夕食には豊後牛や地鶏、地元契約農家の採れたて野菜を使った極上の懐石料理を堪能できます。大分県由布市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより通常1泊数十万円クラスの憧れの名宿へお得に宿泊でき、特別な記念日や夫婦・カップル旅行に最高の思い出を刻めます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">大分県由布市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/38277/38277.jpg"
                alt="由布院温泉　旅亭　田乃倉"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.79（口コミ 108件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院温泉　旅亭　田乃倉
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  金鱗湖まで徒歩一分の静寂に佇む本格純和風料亭旅館！全室源泉掛け流し風呂と月替わりの極上懐石料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院温泉 旅亭 田乃倉 —— 金鱗湖畔の雅な隠れ宿。木の香薫る客室風呂と季節を愛でる本格懐石
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室に天然温泉を引いた専用風呂を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">わずか十数室の贅沢な空間。客室には源泉掛け流しの檜風呂や岩風呂が備えられ、誰にも邪魔されることなく由布院の名湯を独占できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 金鱗湖まで徒歩わずか1分の散策に最適なロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">早朝の静かな金鱗湖の朝霧散策へも気軽に出かけられる絶好の立地。湖畔のカフェや湯の坪街道へのアクセスも至便です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 豊後牛や旬の山海の幸を極める月替わり本格懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理旅館として名高い田乃倉自慢の夕食。お部屋食でゆっくりと提供され、豊後牛のフィレステーキや旬魚のお造りなど、洗練された美味に舌鼓を打てます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.79点。「お料理が一品一品本当に美味しくお部屋食でゆっくり堪能できた」「金鱗湖に近く朝の散歩が最高だった」と最高峰の評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 由布市湯布院町川上1556-2</div>
                <div>最寄り駅・アクセス: 駅よりタクシーで5分  金鱗湖徒歩２分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥29,610〜</span></div>
                <div>ホテル番号: No.38277</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38277"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/76377/76377.jpg"
                alt="由布院温泉　朝霧のみえる宿　ゆふいん花由"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.7（口コミ 1094件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院温泉　朝霧のみえる宿　ゆふいん花由
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  由布岳と朝霧を見晴らす高台の特等席！全室温泉露天風呂付き客室で愉しむ息をのむ絶景パノラマステイ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院温泉 朝霧のみえる宿 ゆふいん花由 —— 由布院の街並みと由布岳を一望。天空の離れリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 由布岳と朝霧のパノラマを一望する絶景テラスと露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">高台に位置するため、ロビーや客室テラス、露天風呂からの眺望は由布院随一。早朝には眼下の盆地一面に広がる幻想的な朝霧を鑑賞できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> プライベート感を極めた離れの温泉露天風呂付き客室
                    </h5>
                    <p className="text-stone-600 leading-relaxed">独立した離れスタイルの客室。広々としたテラスと客室露天風呂が備わり、贅沢なプライベートステイが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> おおいた和牛と旬の恵みを味わう創作会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大分の豊かな自然が育んだおおいた和牛の炭火焼きや地元の新鮮野菜、関アジなど、彩り豊かな創作会席を夜景とともに楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点。「部屋の露天風呂から見る由布岳の朝霧が息をのむ美しさだった」「スタッフの接客も温かく記念日に最高の滞在になった」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 由布市湯布院町川北913-11</div>
                <div>最寄り駅・アクセス: ■湯布院ＩＣから車1分■由布院駅から車で７分程でございます。■無料送迎もございます（電話にて要予約）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥24,640〜</span></div>
                <div>ホテル番号: No.76377</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D76377"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/54519/54519.jpg"
                alt="由布院温泉　ゆふいん月燈庵"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.88（口コミ 171件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県由布市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  由布院温泉　ゆふいん月燈庵
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  由布岳を望む雑木林に点在する全室離れ客室露天風呂付き！築三百年古民家を移築した静寂の隠れ家
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  由布院温泉 ゆふいん月燈庵 —— 吊り橋を渡って訪れる異空間。古民家の温もりと自然が溶け合う至極宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 小川にかかる専用の木造吊り橋を渡る特別なアプローチ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿の入口にある専用吊り橋を渡ると、そこは日常から遮断された別世界。一万坪の敷地にわずか18室の離れがゆったりと配されています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全室に源泉掛け流しの客室露天風呂を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">すべての離れに客室露天風呂が備わり、雑木林の木漏れ日や満天の星空を眺めながら、贅沢な源泉掛け流しを満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 築三百年古民家を活かした母屋でいただく炭火創作料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">重厚な梁が交差する古民家ダイニング。炭火で香ばしく焼き上げる豊後牛や地鶏、季節の野菜を五感で味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.88点。「吊り橋を渡る演出とお部屋の露天風呂の雰囲気が最高」「静かな自然に囲まれてゆっくり休めた」とプライベート感を求める旅行者に愛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 由布市湯布院町川上295-2</div>
                <div>最寄り駅・アクセス: 湯布院ICより車で１５分。由布院駅より車で７分。大分自動車道～湯布院ICを出て2つ目の信号を右折。50号線に乗り約4分。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥17,000〜</span></div>
                <div>ホテル番号: No.54519</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D54519"
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
            由布院温泉・湯の坪街道＆金鱗湖散策モデルルート
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 金鱗湖（きんりんこ）の朝霧と湖畔散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">湖底から清水と温泉が同時に湧き出ているため、秋から冬にかけての早朝には水面から湯気が立ち上り、幻想的な「朝霧」が発生します。湖畔の木道を歩きながら眺める鳥居と朝霧の光景は必見です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 湯の坪街道でのスイーツ＆工芸品ショッピング
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">由布院駅から金鱗湖へ続くメインストリート「湯の坪街道」。B-speakのロールケーキや、金賞コロッケ、地鶏炭火焼き、スヌーピー茶屋など、食べ歩きやクラフトショップ巡りを楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> COMICO ART MUSEUM YUFUINと名建築・アート巡り
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">建築家・隈研吾氏が設計を手掛け、草間彌生氏や村上隆氏らの現代アートを展示する「COMICO ART MUSEUM YUFUIN」。由布岳を借景にした美しい美術館で知的な時間を過ごせます。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              大分県由布市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「大分県由布市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「由布市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で記念日や週末旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行からたっぷり3年間。金鱗湖の朝霧が美しい秋・冬や、新緑の春など、希望の日程に合わせて自由に予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">旅亭田乃倉、ゆふいん花由、ゆふいん月燈庵などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-hakone-gora-onsen-art-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 美肌にごり湯＆客室露天風呂特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
