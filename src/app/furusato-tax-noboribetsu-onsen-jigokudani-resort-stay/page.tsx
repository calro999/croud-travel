import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【登別温泉×ふるさと納税】地獄谷の大パノラマ＆五大泉質温泉天国！巨大露天風呂と北海道ビュッフェガイド｜第一滝本館・登別グランドホテル・ホテルまほろば',
  description: '北海道温泉の横綱・登別温泉を楽天ふるさと納税でお得に大満喫！千五百坪の大浴場に五つの泉質が注ぐ温泉天国「第一滝本館」、ローマ風大浴場と鬼サウナが話題の「登別グランドホテル」、日本最大級の露天風呂と三大蟹バイキングの「ホテルまほろば」を徹底比較。登別市トラベルクーポン活用術を網羅。',
  keywords: '登別温泉 ふるさと納税,第一滝本館 ふるさと納税,登別グランドホテル クーポン,ホテルまほろば 宿泊,登別市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【登別温泉×ふるさと納税】地獄谷の大パノラマ＆五大泉質温泉天国！巨大露天風呂と北海道ビュッフェガイド｜第一滝本館・登別グランドホテル・ホテルまほろば',
    description: '北海道温泉の横綱・登別温泉を楽天ふるさと納税でお得に大満喫！千五百坪の大浴場に五つの泉質が注ぐ温泉天国「第一滝本館」、ローマ風大浴場と鬼サウナが話題の「登別グランドホテル」、日本最大級の露天風呂と三大蟹バイキングの「ホテルまほろば」を徹底比較。登別市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-onsen-jigokudani-resort-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-noboribetsu-onsen-jigokudani-resort-stay',
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
            【登別温泉×ふるさと納税】地獄谷の大パノラマ＆五大泉質温泉天国！巨大露天風呂と北海道ビュッフェガイド｜第一滝本館・登別グランドホテル・ホテルまほろば
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            北海道温泉の横綱・登別温泉を楽天ふるさと納税でお得に大満喫！千五百坪の大浴場に五つの泉質が注ぐ温泉天国「第一滝本館」、ローマ風大浴場と鬼サウナが話題の「登別グランドホテル」、日本最大級の露天風呂と三大蟹バイキングの「ホテルまほろば」を徹底比較。登別市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">北海道登別市</strong></span>
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
            大地の鼓動を告げる地獄谷の噴煙、千五百坪の巨大大浴場——登別温泉で味わう北海道最高峰の温泉リゾート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            新千歳空港から車で約1時間。支笏洞爺国立公園の山あいに位置する登別温泉は、豊富な湧出量と多彩な泉質から「温泉のデパート」「北海道温泉の横綱」と称される日本屈指の温泉地です。温泉街の最奥に広がる「登別地獄谷」からは、毎分3,000リットルもの熱湯と白い噴煙が轟音とともに噴き出し、地球の息吹をダイレクトに体感できます。硫黄泉・食塩泉・重曹泉など多種多様な名湯が、日頃の疲れを劇的に癒やしてくれます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            登別温泉の宿のスケール感は全国でも随一。千五百坪の大浴場に何十種類もの浴槽が並ぶ巨大スパリゾートや、極上のサウナ施設、日本海・太平洋の新鮮な魚介（タラバガニ・ズワイガニ・毛ガニの三大蟹、ホタテ、いくら）や白老牛を惜しみなく提供する豪華ビュッフェが旅人を魅了します。北海道登別市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門リゾートホテルへお得に滞在でき、圧倒的な満足度の北海道温泉旅行が叶います。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">北海道登別市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/30109/30109.jpg"
                alt="登別温泉　第一滝本館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.56（口コミ 3858件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　第一滝本館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百六十余年・千五百坪の温泉天国！地獄谷を望むパノラマ露天風呂と五つの泉質を誇る登別の象徴
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 第一滝本館 —— 日本屈指のメガ大浴場。五つの異なる天然温泉と地獄谷ビューの圧倒的スケール
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 千五百坪の大浴場に広がる35の湯船と5つの泉質
                    </h5>
                    <p className="text-stone-600 leading-relaxed">硫黄泉・食塩泉・重曹泉・酸性緑礬泉・明礬泉の5つの泉質を擁する圧巻の大浴場。24時間いつでも好きな時に異なる効能の湯船を巡ることができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地獄谷の噴煙を湯船から見下ろす展望露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大浴場最前列の露天風呂からは、荒々しい地獄谷の岩肌と立ち上る白煙を一望。冷たい北海道の空気の中で温かい名湯に浸かる時間は格別の爽快感です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の旬の幸が並ぶ豪華ビュッフェ＆個室会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで焼き上げるステーキや揚げたて天ぷら、新鮮な刺身や蟹が並ぶディナーバイキング。落ち着いた個室で味わう伝統の和食会席プランも用意されています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ3800件超。「温泉の広さと種類の多さに圧倒された」「地獄谷を見ながらのお風呂は人生最高の体験」と不動の支持を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 登別市登別温泉町55</div>
                <div>最寄り駅・アクセス: JR登別駅よりバス又はタクシーで約15分／道央道登別東ＩＣから車で約10分／新千歳空港から車で約60分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥14,000〜</span></div>
                <div>ホテル番号: No.30109</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30109"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/39175/39175.jpg"
                alt="登別温泉　登別グランドホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.26（口コミ 3290件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　登別グランドホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  「登別の迎賓館」と称される気品あるリゾート！本格ドーム型ローマ風呂と話題沸騰の「鬼サウナ」
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 登別グランドホテル —— 昭和十三年創業のクラシックモダン。滝を望む庭園露天風呂と極上のととのい
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 荘厳なドーム型天井の本格ローマ風大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">まるでヨーロッパの宮殿のような優雅な円形大浴場。食塩泉や鉄泉、硫黄泉の名湯を注ぎ、滝が流れる日本庭園露天風呂とともに優雅な湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> サウナシュラン受賞！オートロウリュを誇る「鬼サウナ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">登別の赤鬼・青鬼をテーマにした本格サウナ。110度の超高温サウナと、熊笹の香るセルフロウリュサウナ、登別の山水を使った水風呂で極上の「ととのい」を体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> シェフが目の前で調理する贅沢な洋食・和食ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道産食材をふんだんに取り入れた豪華バイキング。ホテル伝統の洋食料理や地元の旬魚、北海道スイーツなど、美食の数々がテーブルを彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.26点、口コミ3200件超。「鬼サウナが最高すぎてサウナ好きにはたまらない」「ローマ風呂の天井が高く開放的で料理も美味しい」と高評価です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 登別市登別温泉町154</div>
                <div>最寄り駅・アクセス: JR登別駅からタクシーにて約13分、路線バスにて登別駅⇒登別温泉ターミナル約15分（バス運賃片道350円）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥15,400〜</span></div>
                <div>ホテル番号: No.39175</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39175"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/12568/12568.jpg"
                alt="登別温泉　ホテル　まほろば"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 2856件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道登別市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  登別温泉　ホテル　まほろば
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  日本最大級の露天風呂と四つの泉質！三大蟹（タラバ・ズワイ・毛ガニ）食べ放題の豪華ディナーバイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  登別温泉 ホテル まほろば —— 地下二階に広がる三十一の湯巡り。カニ三昧ディナーと巨大スパリゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 地下1階・地下2階に広がる31の湯処と日本最大級の露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">緑豊かな自然に囲まれた広大な露天風呂や檜風呂、ジャグジーなど多彩な湯船。硫黄泉・食塩泉・単純泉・酸性鉄泉の4つの泉質を一度に堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> タラバガニ・ズワイガニ・毛ガニが並ぶ三大蟹食べ放題ビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">北海道の冬の味覚を代表する三大蟹をはじめ、目の前で握る寿司や刺身、ステーキが食べ放題。食の満足度を極限まで高めた大人気ディナーです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ファミリーやグループに嬉しい充実の客室と館内設備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ゆったりとした和室や和洋室、露天風呂付き客室まで多彩な部屋タイプ。大人数での宿泊や三世代旅行にも快適に対応しています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.30点、口コミ2800件超。「三大蟹の食べ放題が豪華すぎて大満足」「お風呂がとても広く子どもからシニアまで全員楽しめた」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 北海道 登別市登別温泉町65</div>
                <div>最寄り駅・アクセス: ＪＲ登別駅～登別温泉行バス約15分+徒歩約3分/道央道～登別東ＩＣより約10分※JR特急札幌より約70分・千歳約50分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥12,500〜</span></div>
                <div>ホテル番号: No.12568</div>
              </div>

              {/* 予約プラン確認ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D12568"
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
            登別地獄谷・大湯沼の自然散策＆登別マリンパーク観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 登別地獄谷遊歩道と鉄泉池（間欠泉）の散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">地獄谷の谷底を巡る木道遊歩道。中央にある「鉄泉池」では、数分おきに熱湯がボコボコと音を立てて湧き出す間欠泉の様子を間近で見学できます。夜には「鬼火の路」としてライトアップされ幻想的です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 大湯沼川天然足湯での森林浴ヒーリング
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">地獄谷から山道を歩いた先にある「大湯沼川天然足湯」。大湯沼から流れ出す天然の温泉川にそのまま足を浸すことができ、原生林の木漏れ日の中で最高の足湯体験が楽しめます。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 登別伊達時代村＆登別マリンパークニクス
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">江戸時代の城下町や忍者アクションショーを楽しめる「登別伊達時代村」や、北欧風の古城水族館でペンギンのパレードが人気の「登別マリンパークニクス」など、観光施設も充実しています。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道登別市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「北海道登別市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「登別市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内でベストシーズンを予約</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。秋の紅葉や冬の雪見露天、夏の爽やかな北海道旅行など、希望の日程に合わせて自由に予約できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">第一滝本館、登別グランドホテル、ホテルまほろばなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
