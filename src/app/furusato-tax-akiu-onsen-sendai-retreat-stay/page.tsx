import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋保温泉×ふるさと納税】名取川渓谷美＆伊達政宗公ゆかりの名湯！仙台牛美食と老舗宿完全ガイド｜伝承千年の宿佐勘・緑水亭・ホテルニュー水戸屋',
  description: '仙台駅から車で約30分の奥州三名湯「秋保温泉」を楽天ふるさと納税でお得に旅する！伊達政宗公の湯守を務めた創業千年の格式「伝承千年の宿 佐勘」、広大な日本庭園と幻想的な篝火露天風呂の「緑水亭」、16種類の多彩な温泉を湯巡りできる「ホテルニュー水戸屋」を徹底比較。仙台牛会席や仙台市クーポン活用術を網羅。',
  keywords: '秋保温泉 ふるさと納税,伝承千年の宿佐勘 ふるさと納税,緑水亭 秋保 クーポン,ホテルニュー水戸屋 宿泊,仙台市 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【秋保温泉×ふるさと納税】名取川渓谷美＆伊達政宗公ゆかりの名湯！仙台牛美食と老舗宿完全ガイド｜伝承千年の宿佐勘・緑水亭・ホテルニュー水戸屋',
    description: '仙台駅から車で約30分の奥州三名湯「秋保温泉」を楽天ふるさと納税でお得に旅する！伊達政宗公の湯守を務めた創業千年の格式「伝承千年の宿 佐勘」、広大な日本庭園と幻想的な篝火露天風呂の「緑水亭」、16種類の多彩な温泉を湯巡りできる「ホテルニュー水戸屋」を徹底比較。仙台牛会席や仙台市クーポン活用術を網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-akiu-onsen-sendai-retreat-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-akiu-onsen-sendai-retreat-stay',
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
            【秋保温泉×ふるさと納税】名取川渓谷美＆伊達政宗公ゆかりの名湯！仙台牛美食と老舗宿完全ガイド｜伝承千年の宿佐勘・緑水亭・ホテルニュー水戸屋
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            仙台駅から車で約30分の奥州三名湯「秋保温泉」を楽天ふるさと納税でお得に旅する！伊達政宗公の湯守を務めた創業千年の格式「伝承千年の宿 佐勘」、広大な日本庭園と幻想的な篝火露天風呂の「緑水亭」、16種類の多彩な温泉を湯巡りできる「ホテルニュー水戸屋」を徹底比較。仙台牛会席や仙台市クーポン活用術を網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">宮城県仙台市</strong></span>
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
            名取川の奇岩と清流、伊達政宗が愛した千年の名湯、極上の仙台牛会席——秋保温泉で過ごす杜の都の上質リトリート
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            杜の都・仙台の中心街から車でわずか約30分。名取川の深い渓谷沿いに広がる秋保（あきう）温泉は、古墳時代の第29代欽明天皇の皮膚病を癒やしたことから「名取の御湯」と称され、別所温泉・野沢温泉とともに「日本三御湯」の一つに数えられる東北屈指の名湯です。戦国時代には仙台藩祖・伊達政宗公も合戦の傷と疲れを癒やすために訪れ、伊達家の入湯場として大切に守られてきました。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            秋保温泉の魅力は、名取川が削り出した奇岩怪石の「磊々峡（らいらいきょう）」や「秋保大滝」の豊かな大自然と、歴史ある名門旅館のおもてなし。夕食には日本最高ランクA5ランクのみに許されるブランド牛「仙台牛」のステーキやすき焼き、三陸沖で獲れた新鮮な魚介類が贅沢に並びます。宮城県仙台市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に滞在でき、仙台観光や松島観光と組み合わせた最高の東北旅行が実現します。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">宮城県仙台市のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/63615/63615.jpg"
                alt="伝承千年の宿　佐勘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.41（口コミ 2129件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県仙台市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伝承千年の宿　佐勘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業千年・伊達政宗公の湯守を務めた歴史宿！名取川を望む名物「名取の御湯」と極上仙台牛会席
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伝承千年の宿 佐勘 —— 伊達家ゆかりの格式と現代の優雅さ。名取川の渓流を望む歴史の湯宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名取川の清流を間近に望む名物大浴場「名取の御湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伊達政宗公の入湯場を再現した格子造りの湯処。名取川のせせらぎを聞きながら、千年前から湧き続ける弱アルカリ性単純温泉に浸かる贅沢な湯浴みが楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊達家の歴史を伝えるギャラリーと数寄屋の佇まい
                    </h5>
                    <p className="text-stone-600 leading-relaxed">館内には伊達家より拝領した古文書や美術品が展示。広々としたラウンジや中庭を眺めながら、名門宿ならではの品格ある時間を過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> A5ランク仙台牛と三陸の海の幸を味わう本格会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">厳選されたA5ランク仙台牛の陶板焼きやローストビーフ、三陸直送の旬魚の造りなど、宮城の食文化の粋を集めた贅沢な会席ディナーを堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.41点、口コミ2100件超。「お風呂の風情と名取川の景色が素晴らしく千年の歴史を感じた」「お料理の仙台牛が絶品で仲居さんの気配りも満点」と圧倒的な支持を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 仙台市太白区秋保町湯元薬師28</div>
                <div>最寄り駅・アクセス: ＪＲ　仙台駅より車で３０分／仙台駅西口バスプール８番乗り場より、宮城交通バス「秋保温泉方面行」約５０分</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥16,720〜</span></div>
                <div>ホテル番号: No.63615</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D63615"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/15989/15989.jpg"
                alt="秋保温泉　篝火の湯　緑水亭"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.25（口コミ 1439件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県仙台市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  秋保温泉　篝火の湯　緑水亭
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  広大な日本庭園の高台に佇むリゾート！夜を彩る幻想的な「篝火露天風呂」と宮城の山海の味覚
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  秋保温泉 篝火の湯 緑水亭 —— 三万坪の敷地に広がる庭園美。篝火に照らされる幻想の露天風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 夜になると篝火が灯る風情満点の名物露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">大自然に抱かれた庭園露天風呂。夕暮れから夜にかけて篝火が焚かれ、炎の揺らめきと満天の星空を眺めながら心温まる湯浴みを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 四季折々の花々が咲き誇る三万坪の日本庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、移ろう季節を肌で感じる広大な庭園。散策路が整備され、清々しい森林浴を楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 仙台牛と宮城の地酒を味わう豪華ディナー会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">仙台牛のすき焼きや鮑の踊り焼きなど、豪華食材を取り入れた和食会席。宮城の銘酒とともに至福のディナータイムを過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.25点、口コミ1400件超。「夜の篝火露天風呂の雰囲気が最高」「広い庭園の景色が素晴らしく朝の散歩が楽しかった」と高い評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 仙台市太白区秋保町湯元上原27-2</div>
                <div>最寄り駅・アクセス: 東北自動車道仙台南ICから約15分。仙台中心部まで車で約30分。JR仙台駅東口より無料シャトルバス毎日運行（※要予約）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥10,450〜</span></div>
                <div>ホテル番号: No.15989</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D15989"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/29475/29475.jpg"
                alt="秋保温泉　ホテルニュー水戸屋"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.31（口コミ 2796件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">宮城県仙台市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  秋保温泉　ホテルニュー水戸屋
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  十六種類もの多彩な湯船を館内湯巡り！名取川渓谷沿いの大型温泉リゾートと豪華バイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  秋保温泉 ホテルニュー水戸屋 —— 三つの大浴場と十六趣の湯巡り。ファミリーやグループに愛される王道名宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 館内だけで16種類のお風呂を巡る温泉三昧
                    </h5>
                    <p className="text-stone-600 leading-relaxed">「水秋の湯」「水鏡の湯」「梅の湯」という3つの大浴場に、檜風呂・岩風呂・陶器風呂など多彩な浴槽が揃い、飽きることなく温泉を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 季節を問わず楽しめる屋内温水プールと広大な館内
                    </h5>
                    <p className="text-stone-600 leading-relaxed">子ども連れに嬉しいドーム型屋内温水プール（通年営業）を完備。全世代が楽しめる充実したアクティビティが揃っています。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 宮城の郷土料理と豪華和洋中バイキング＆会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">オープンキッチンで焼き上げる牛タンや天ぷら、握り寿司が並ぶ人気のディナービュッフェ。個室での本格会席プランも選べます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.31点、口コミ約2800件。「お風呂がたくさんあって館内湯巡りが本当に楽しかった」「プールや食事も充実して三世代旅行にぴったり」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 宮城県 仙台市太白区秋保町湯元薬師１０２</div>
                <div>最寄り駅・アクセス: 宮城交通バス仙台駅西口バス8番乗り場⇒秋保温泉湯元下車/仙台駅東口から発無料送迎バスあり（要予約）</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥13,200〜</span></div>
                <div>ホテル番号: No.29475</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D29475"
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
            秋保温泉街・磊々峡＆秋保大滝観光ハイライト
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 磊々峡（らいらいきょう）の遊歩道散策とハートの岩肌
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">名取川が削り出した深さ約20メートルの奇岩怪石が続く景勝地。遊歩道から覗き込むと自然にできたハート型のくぼみ（覗橋ハート）があり、「恋人の聖地」として大人気のフォトスポットです。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 日本の滝百選「秋保大滝」の壮大な水しぶき
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">幅6メートル、落差55メートルを誇る国指定名勝の大瀑布。滝見台からの全景はもちろん、滝つぼまで降りて間近で浴びるマイナスイオンと轟音は圧巻の迫力です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 秋保ワイナリー＆主婦の店さいちのおはぎ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">宮城のぶどうで醸造する「秋保ワイナリー」のテラスカフェ。そして全国のテレビで話題沸騰のスーパー「主婦の店 さいち」で1日1万個売れる名物「秋保おはぎ」の甘さ控えめな美味しさは必食です。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              宮城県仙台市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「宮城県仙台市」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「仙台市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内で秋保温泉旅行を計画</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。秋の紅葉や冬の雪景色、夏の青葉まつりや七夕まつりなど、仙台観光とセットで日程を自由に選べます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">伝承千年の宿佐勘、緑水亭、ホテルニュー水戸屋などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
