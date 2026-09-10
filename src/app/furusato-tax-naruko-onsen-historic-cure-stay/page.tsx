import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【鳴子温泉郷×ふるさと納税】千年の湯治文化と多彩な源泉めぐり！美肌硫黄泉＆宮城美食ステイガイド｜湯元吉祥・鳴子観光ホテル・鳴子風雅',
  description: '日本にある10種類の泉質のうち8種類が集まる奇跡の温泉郷・鳴子温泉を楽天ふるさと納税でお得に旅する！共立リゾートの和モダン宿「湯元 吉祥」、創業四百年の乳白色名湯「鳴子観光ホテル」、大人の隠れ家リゾート「鳴子風雅」を徹底紹介。鳴子峡の絶景やこけしの街歩き、大崎市トラベルクーポン活用術を網羅。',
  keywords: '鳴子温泉 ふるさと納税,鳴子観光ホテル ふるさと納税,湯元吉祥 クーポン,鳴子風雅 楽天トラベル,大崎市 ふるさと納税 宿泊',
  openGraph: {
    title: '【鳴子温泉郷×ふるさと納税】千年の湯治文化と多彩な源泉めぐり！美肌硫黄泉＆宮城美食ステイガイド｜湯元吉祥・鳴子観光ホテル・鳴子風雅',
    description: '日本にある10種類の泉質のうち8種類が集まる奇跡の温泉郷・鳴子温泉を楽天ふるさと納税でお得に旅する！共立リゾートの和モダン宿「湯元 吉祥」、創業四百年の乳白色名湯「鳴子観光ホテル」、大人の隠れ家リゾート「鳴子風雅」を徹底紹介。鳴子峡の絶景やこけしの街歩き、大崎市トラベルクーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-naruko-onsen-historic-cure-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-naruko-onsen-historic-cure-stay',
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
            【鳴子温泉郷×ふるさと納税】千年の湯治文化と多彩な源泉めぐり！美肌硫黄泉＆宮城美食ステイガイド｜湯元吉祥・鳴子観光ホテル・鳴子風雅
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本にある10種類の泉質のうち8種類が集まる奇跡の温泉郷・鳴子温泉を楽天ふるさと納税でお得に旅する！共立リゾートの和モダン宿「湯元 吉祥」、創業四百年の乳白色名湯「鳴子観光ホテル」、大人の隠れ家リゾート「鳴子風雅」を徹底紹介。鳴子峡の絶景やこけしの街歩き、大崎市トラベルクーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">宮城県大崎市</strong></span>
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
            千百年の歴史を誇る奥州の三名湯、立ち上る硫黄の香り——鳴子温泉郷で心と体を解きほぐす本格湯治旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            宮城県北部、江合川の清流沿いに広がる鳴子温泉郷は、鳴子・東鳴子・川渡・中山平・鬼首の5つの温泉地からなる東北屈指の巨大温泉郷です。承和4年（837年）の鳥谷ヶ森大噴火によって熱湯が噴出したと伝えられ、千百余年の歴史を誇ります。その最大の特徴は驚異的な泉質の豊かさ。日本に存在する10種類の主泉質のうち、実に8種類がこの狭い地域に集中しており、宿ごとに全く異なる色・香り・肌触りの湯を楽しめる「生きた温泉博物館」です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            温泉街には伝統工芸品「鳴子こけし」の工房が並び、カランコロンと下駄の音を響かせながら外湯「滝の湯」や「早稲田桟敷湯」をめぐる情緒あふれる風景が広がります。さらに紅葉の名所として名高い「鳴子峡」の絶景や、仙台牛・みやぎ美澄豚、地元の山菜など宮城の美食も旅の大きな楽しみ。宮城県大崎市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより名門旅館や最新リゾートホテルへお得に宿泊でき、本物の名湯を心ゆくまで堪能できます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">宮城県大崎市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/158439/158439.jpg"
                alt="鳴子温泉　湯元　吉祥（共立リゾート）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.37（口コミ 1514件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県大崎市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鳴子温泉　湯元　吉祥（共立リゾート）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  高台から温泉街を見下ろす共立リゾートの和モダン宿！源泉掛け流しの四つの無料貸切風呂と宮城の山海会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鳴子温泉 湯元 吉祥（共立リゾート） —— 伝統の温泉街に誕生した洗練のモダン湯宿。多彩な湯処と無料サービス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 予約不要・無料で何度でも入れる四つの源泉掛け流し貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">檜風呂や岩風呂など趣の異なる4つの貸切風呂。空いていれば何度でも自由に利用でき、大切な人と気兼ねなく鳴子の名湯をプライベートに満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 開放感あふれる大浴場と庭園露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">自家源泉から引く滑らかな湯。広々とした内湯と自然の風を感じる露天風呂で、旅の疲れを心地よく癒やすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 宮城の食材を盛り込んだ豪華和食会席と夜鳴きそば
                    </h5>
                    <p className="text-stone-600 leading-relaxed">旬の山海の幸を美しく盛り付けた夕食コース。湯上がり処のアイスや乳酸菌飲料、夜食のあっさり醤油ラーメン「夜鳴きそば」など、共立リゾートならではの充実した無料サービスが大好評です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.37点、口コミ1500件超。「4つの貸切風呂が素晴らしく温泉を心ゆくまで堪能できた」「夕食・朝食ともに品数が多く味も大満足」と高い支持を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 大崎市鳴子温泉湯元58-10</div>
                <div>最寄り駅・アクセス: 鳴子温泉駅より徒歩にて約７分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥10,500〜</span></div>
                <div>ホテル番号: No.158439</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D158439"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9300/9300.jpg"
                alt="鳴子温泉　源蔵の湯　鳴子観光ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.25（口コミ 1108件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県大崎市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鳴子温泉　源蔵の湯　鳴子観光ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業四百年の伝統を守る老舗旅館！美肌の乳白色硫黄泉「源蔵の湯」と宮城の豊かな郷土会席料理
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鳴子温泉 源蔵の湯 鳴子観光ホテル —— 鳴子の象徴たる名門旅館。とろみのある白濁硫黄泉と心温まるおもてなし
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> とろりとした肌触りの乳白色硫黄泉「源蔵の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">創業以来湧き出続ける自家源泉。空気に触れることで美しい乳白色に変化するアルカリ性の硫黄泉は、角質をやさしく落とし肌を整える至極の美肌湯です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鳴子温泉駅徒歩3分の便利な立地と純和風の落ち着き
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温泉街の中心に位置し、駅や外湯、こけし通りへの散策に最適。館内は清潔感にあふれ、ゆったりとした和室でくつろぎの時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 宮城の旬素材と三陸の海の幸を味わう本格会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元・大崎平野で収穫された美味しいお米や宮城のブランド牛、三陸直送の新鮮魚介が並ぶ豪華会席。伝統旅館ならではの上品な味付けが好評です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.25点、口コミ1100件超。「お湯のトロトロ感と硫黄の香りが最高で感動した」「スタッフの方々の温かい笑顔と挨拶に癒やされた」と温泉と接客に定評があります。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 大崎市鳴子温泉湯元</div>
                <div>最寄り駅・アクセス: 古川(東北新幹線)→鳴子温泉駅(陸羽東線)</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥8,250〜</span></div>
                <div>ホテル番号: No.9300</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9300"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9469/9469.jpg"
                alt="鳴子風雅"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.87（口コミ 2126件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県大崎市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  鳴子風雅
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  鳴子の自然に佇む大人のための温泉リゾート！名湯の癒やしとライブキッチンで焼き上げるみやぎ美澄豚グリル会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  鳴子風雅 —— 静寂と美食に癒やされる大人の隠れ家。モダンなデザイン空間と五感を刺激する創作ディナー
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 静かな大人の時間を楽しむ和モダンリノベーション空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">全館が落ち着いたモダンデザインに統一されたスタイリッシュな宿。ライブラリーラウンジやバー、テラスなど、大人が静かにリラックスできる空間が充実しています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鳴子の名湯を満喫する大浴場と貸切露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">豊かな湯量を誇る鳴子の湯を引いた温泉大浴場。日頃のストレスを解きほぐす柔らかな湯と、四季折々の自然の移ろいを感じられる湯浴みが魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ライブキッチンで仕上げるみやぎ美澄豚と宮城の美食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">レストランの鉄板カウンターで焼き上げられる地元ブランド豚や特選牛のグリル。見た目も華やかな創作会席が特別な旅の夜を華麗に演出します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.87点、口コミ2100件超。「お洒落な雰囲気で夫婦やカップル旅行にぴったり」「ライブキッチンのステーキがとても美味しかった」と落ち着いた滞在を求める層に人気です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 大崎市鳴子温泉湯元55</div>
                <div>最寄り駅・アクセス: 古川I.Cより国道47号線鳴子方面へ約40分／JR陸羽東線「鳴子温泉駅」から徒歩5分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥7,700〜</span></div>
                <div>ホテル番号: No.9469</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D9469"
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
            鳴子温泉街のこけし散歩＆鳴子峡絶景観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 紅葉の絶景「鳴子峡」と大深沢遊歩道ハイク
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">深さ約100メートルの大峡谷が紅葉で錦に染まる東北屈指の絶景スポット「鳴子峡」。見晴台から眺める「大深沢橋」と電車の通過シーンはまさに絵画のような美しさ。遊歩道でのハイキングも心地よい森林浴になります。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 滝の湯の酸性泉と共同浴場めぐり
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">鳴子温泉神社の境内下にある共同浴場「滝の湯」（入浴料300円）。白濁した強酸性の硫黄泉が木樋から打たせ湯として注がれる昔ながらの共同浴場で、温泉ファンなら一度は入るべき名所です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 鳴子こけし通りでの絵付け体験と栗だんご
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">駅前通りに軒を連ねるこけし工房では、自分だけのこけしを作れる絵付け体験が人気。また、蒸したてアツアツのお餅にみたらし餡がたっぷりかかった深瀬の「栗だんご」は必食のご当地スイーツです。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              宮城県大崎市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「宮城県大崎市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「大崎市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で鳴子峡紅葉や冬の湯治を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。紅葉シーズンの10月〜11月はもちろん、雪見風呂が楽しめる冬、新緑の春など、都合に合わせて利用できます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">湯元吉祥、鳴子観光ホテル、鳴子風雅などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
              <Link href="/furusato-tax-kinugawa-onsen-valley-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鬼怒川温泉 渓谷美と大露天風呂・あさやバイキング特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
