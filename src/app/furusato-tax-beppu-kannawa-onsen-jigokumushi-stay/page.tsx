import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【別府鉄輪温泉×ふるさと納税】湯けむり展望＆名物地獄蒸し！湧出量日本一の名湯宿完全ガイド｜山荘神和苑・おにやまホテル・ホテル山水館',
  description: '日本一の温泉湧出量を誇る別府の象徴・鉄輪温泉を楽天ふるさと納税でお得に旅する！能舞台と二つの自家源泉を擁する最高級宿「山荘 神和苑」、鬼山地獄を望む西日本最大級露天風呂の「おにやまホテル」、地獄蒸しと展望大浴場が自慢の「ホテル山水館」を徹底比較。別府市トラベルクーポン活用術を網羅。',
  keywords: '別府鉄輪温泉 ふるさと納税,別府温泉 旅館 クーポン,山荘神和苑 ふるさと納税,おにやまホテル 別府 宿泊,別府市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【別府鉄輪温泉×ふるさと納税】湯けむり展望＆名物地獄蒸し！湧出量日本一の名湯宿完全ガイド｜山荘神和苑・おにやまホテル・ホテル山水館',
    description: '日本一の温泉湧出量を誇る別府の象徴・鉄輪温泉を楽天ふるさと納税でお得に旅する！能舞台と二つの自家源泉を擁する最高級宿「山荘 神和苑」、鬼山地獄を望む西日本最大級露天風呂の「おにやまホテル」、地獄蒸しと展望大浴場が自慢の「ホテル山水館」を徹底比較。別府市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
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
            【別府鉄輪温泉×ふるさと納税】湯けむり展望＆名物地獄蒸し！湧出量日本一の名湯宿完全ガイド｜山荘神和苑・おにやまホテル・ホテル山水館
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本一の温泉湧出量を誇る別府の象徴・鉄輪温泉を楽天ふるさと納税でお得に旅する！能舞台と二つの自家源泉を擁する最高級宿「山荘 神和苑」、鬼山地獄を望む西日本最大級露天風呂の「おにやまホテル」、地獄蒸しと展望大浴場が自慢の「ホテル山水館」を徹底比較。別府市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">大分県別府市</strong></span>
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
            街中から立ち上る白い湯けむり、大地の恵み「地獄蒸し」の滋味——別府鉄輪温泉で体験する至高の湯治リゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            毎分8万リットルを超える日本一の温泉湧出量を誇る大分県・別府温泉郷。その中でも最も濃厚な温泉情緒を醸し出しているのが「鉄輪（かんなわ）温泉」です。鎌倉時代に一遍上人が開いたとされる歴史を持ち、街のいたるところからモクモクと立ち上る白い湯煙は、国の重要文化的景観にも選定されています。レトロな石畳の坂道、共同浴場、そして温泉の噴気で蒸し上げる伝統調理法「地獄蒸し」の香りが、旅情を五感で刺激します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鉄輪温泉の宿は、昔ながらの湯治文化を受け継ぎつつ、優雅な庭園露天風呂や最上階のパノラマ展望風呂、能舞台を備えたラグジュアリー旅館まで多彩な魅力に溢れています。夕食には大分が誇るブランド牛「豊後牛」や関アジ・関サバ、そして高温の温泉蒸気で素材の旨味を凝縮させた名物「地獄蒸し料理」。大分県別府市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉宿へ驚くほどお得に宿泊でき、本物の温泉天国を大満喫できます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">大分県別府市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/158425/158425.jpg"
                alt="別府鉄輪温泉　山荘　神和苑"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.51（口コミ 730件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県別府市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府鉄輪温泉　山荘　神和苑
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  敷地内に能舞台・茶室・日本庭園を擁する別府最高峰の格式宿！二つの自家源泉掛け流しと極上懐石料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  別府鉄輪温泉 山荘 神和苑 —— 伝統美と現代ラグジュアリーの極み。鉄輪の湯けむりを見晴らす特別空間
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 敷地内から自噴する二つの自家源泉から引く天然温泉
                    </h5>
                    <p className="text-stone-600 leading-relaxed">一切加水・加温を行わない青みがかった神秘的な自家源泉。大浴場や露天風呂、客室露天風呂に贅沢に注がれ、とろみのある極上の美肌湯を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 本格能舞台「神和殿」と四季を映す壮大な日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">広大な敷地には本格的な能舞台や茶室、鯉が泳ぐ池が配され、まるで迎賓館のような重厚な佇まい。夜のライトアップも幻想的な美しさを誇ります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鉄板焼きまたは日本料理から選ぶ極上ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">豊後牛や伊勢海老、関アジなどの最高級食材を目の前で焼き上げる鉄板焼き、または熟練の職人が織りなす伝統懐石。至高の美食体験が待っています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.51点。「お部屋、庭園、能舞台、すべてが別次元の素晴らしさ」「温泉のとろみと肌触りが最高で何度も入った」とラグジュアリーステイを求める旅行者から絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 別府市鉄輪345</div>
                <div>最寄り駅・アクセス: JR別府駅から車・20分／鉄輪口バス停・徒歩５分／別府IC・車で５分　※送迎サービス有（定期便／条件・注意事項 要確認）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥15,950〜</span></div>
                <div>ホテル番号: No.158425</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D158425"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5543/5543.jpg"
                alt="別府最大級の露天風呂の宿　おにやまホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.48（口コミ 1920件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県別府市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府最大級の露天風呂の宿　おにやまホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  鬼山地獄のすぐ隣！南畑湧出の豊富な名湯が注ぐ西日本屈指の広さを誇る大露天風呂「鬼面の湯」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  別府最大級の露天風呂の宿 おにやまホテル —— 圧倒的な湯量と開放感。別府名物バイキングと家族湯巡り
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 一度に数十人がゆったり浸かれる大露天風呂「鬼面の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">巨大な岩と木々に囲まれた西日本屈指のスケールを誇る大露天風呂。湯量豊富な自家源泉が滝のように注がれ、豪快な湯浴みが楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階の展望露天風呂「空の湯」から望む湯けむりパノラマ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ホテル屋上に設けられた展望風呂。鉄輪温泉街から立ち上る湯けむりと別府湾、鶴見岳の山並みを一望できる絶景スポットです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 別府名物「地獄蒸し」と旬の味覚が並ぶ豪華バイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温泉の蒸気で蒸し上げた豚肉や野菜、新鮮魚介の刺身、とり天など、大分の郷土料理を好きなだけ味わえる人気のビュッフェです。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.48点。「大露天風呂の広さと開放感が圧巻」「屋上の展望風呂からの湯けむり景色が素晴らしかった」と温泉の充実度が高く評価されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 別府市鉄輪335-1</div>
                <div>最寄り駅・アクセス: 高速道別府ＩＣより右折、地獄めぐり方面へ約５分　大分空港より４５分　別府駅よりタクシーで１５分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥9,900〜</span></div>
                <div>ホテル番号: No.5543</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5543"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/107764/107764.jpg"
                alt="別府鉄輪温泉　ホテル山水館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.19（口コミ 244件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県別府市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府鉄輪温泉　ホテル山水館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  鉄輪温泉街の中心に佇む老舗名門宿！最上階の展望パノラマ大浴場と豊後牛・名物地獄蒸し会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  別府鉄輪温泉 ホテル山水館 —— 湯の街散策の絶好拠点。展望大浴場からの湯煙ビューと山海美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階展望風呂「天空の湯」から眺める鉄輪の湯けむり景観
                    </h5>
                    <p className="text-stone-600 leading-relaxed">鉄輪の街並みと鶴見岳を望む最上階大浴場。夜には温泉街の湯煙が街灯に照らされる幻想的な夜景を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 自家源泉を活用した伝統の「地獄蒸し料理」会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温泉のミネラルと高熱蒸気で素材の旨味を閉じ込めた地獄蒸し。大分県産豊後牛や新鮮な海の幸とともに、ヘルシーで奥深い美味しさを堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鉄輪の湯けむり通りや地獄めぐりへの抜群のアクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿を一歩出れば、レトロな路地や足湯、共同浴場が点在。地獄めぐりの主要スポットも徒歩圏内で、観光拠点として非常に便利です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.19点。「立地が良く地獄めぐりや街歩きが楽しめた」「地獄蒸し料理が美味しく温泉も温まる」と安定した人気を誇ります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 大分県 別府市鶴見628-1</div>
                <div>最寄り駅・アクセス: ＪＲ　別府駅よりお車にて約１５分、亀の井バスに乗車「朝日」にて下車後、徒歩１分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥11,550〜</span></div>
                <div>ホテル番号: No.107764</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D107764"
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
            別府地獄めぐり＆鉄輪温泉街のレトロ散策ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 別府地獄めぐり（海地獄・血の池地獄・白池地獄・龍巻地獄など）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">千年以上前から噴気や熱泥が噴出していた「別府の地獄」。コバルトブルーが美しい「海地獄」や、真っ赤に煮えたぎる「血の池地獄」、間欠泉が吹き上がる「龍巻地獄」など、地球の息吹を体感できる大迫力の観光名所です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 地獄蒸し工房 鉄輪でのセルフ地獄蒸し体験
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">温泉の蒸気窯を使って、自分で選んだ野菜や卵、海鮮を蒸して食べる大人気施設「地獄蒸し工房 鉄輪」。塩分を含んだ温泉蒸気によって、調味料なしでも素材本来の甘みと旨味が引き出されます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 湯けむり展望台からの夜景（日本夜景遺産）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">鉄輪温泉街の無数の湯けむりがライトアップされる光景を見下ろす「湯けむり展望台」。NHK「21世紀に残したい日本の風景」で富士山に次ぐ第2位に選ばれた絶景です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              大分県別府市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「大分県別府市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「別府市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で温泉旅行日程を自由に選定</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。温泉が最も恋しくなる冬はもちろん、新緑や紅葉の季節など都合に合わせて予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">山荘神和苑、おにやまホテル、ホテル山水館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
