import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【万座温泉×ふるさと納税】日本一の高濃度硫黄泉！標高1800mの雲上露天風呂＆満天星空ステイガイド｜万座プリンスホテル・万座高原ホテル・日進舘',
  description: '日本一の硫黄含有量を誇る名湯・万座温泉を楽天ふるさと納税で満喫！標高1,800メートルの高地に広がる乳白色のにごり湯露天風呂「こまくさの湯」を擁する万座プリンスホテル、4種の自家源泉を巡る石庭露天風呂の万座高原ホテル、創業百五十年の湯治名門・日進舘を徹底比較。嬬恋村クーポン活用術も網羅。',
  keywords: '万座温泉 ふるさと納税,万座プリンスホテル ふるさと納税,万座高原ホテル クーポン,日進舘 万座 宿泊,嬬恋村 ふるさと納税 楽天トラベル',
  openGraph: {
    title: '【万座温泉×ふるさと納税】日本一の高濃度硫黄泉！標高1800mの雲上露天風呂＆満天星空ステイガイド｜万座プリンスホテル・万座高原ホテル・日進舘',
    description: '日本一の硫黄含有量を誇る名湯・万座温泉を楽天ふるさと納税で満喫！標高1,800メートルの高地に広がる乳白色のにごり湯露天風呂「こまくさの湯」を擁する万座プリンスホテル、4種の自家源泉を巡る石庭露天風呂の万座高原ホテル、創業百五十年の湯治名門・日進舘を徹底比較。嬬恋村クーポン活用術も網羅。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/furusato-tax-manza-onsen-milky-sulfur-stay',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-manza-onsen-milky-sulfur-stay',
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
            【万座温泉×ふるさと納税】日本一の高濃度硫黄泉！標高1800mの雲上露天風呂＆満天星空ステイガイド｜万座プリンスホテル・万座高原ホテル・日進舘
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            日本一の硫黄含有量を誇る名湯・万座温泉を楽天ふるさと納税で満喫！標高1,800メートルの高地に広がる乳白色のにごり湯露天風呂「こまくさの湯」を擁する万座プリンスホテル、4種の自家源泉を巡る石庭露天風呂の万座高原ホテル、創業百五十年の湯治名門・日進舘を徹底比較。嬬恋村クーポン活用術も網羅。
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">群馬県嬬恋村</strong></span>
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
            標高1,800mの雲上に広がる奇跡の乳白色湯、夜空を埋め尽くす天の川——万座温泉で味わう極上の湯治体験
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            上信越高原国立公園内、標高約1,800メートルの山岳地帯に位置する万座温泉は、「星に一番近い温泉」として名高い日本屈指の高所温泉郷です。白根山の山懐から湧き出る温泉は、硫黄の含有量が日本一を誇る超濃厚な酸性硫黄泉。エメラルドグリーンから乳白色へと変化するにごり湯は、美肌作用はもちろん、冷え性や神経痛、疲労回復に抜群の効果を発揮し、古くから多くの人々を惹きつけてやまない名湯です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            万座のハイライトは、視界を遮るもののない大自然と一体化する雲上の大露天風呂。昼は雄大な山並みと白樺の原生林、夜は澄み切った高冷地ならではの満天の星空や天の川を湯船から仰ぎ見る感動体験が待っています。群馬県嬬恋村へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門リゾートや老舗湯治宿へお得に宿泊でき、心洗われる雲上リトリートを最高のコストパフォーマンスで満喫できます。
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
            <h3 className="text-lg sm:text-xl font-bold font-serif">群馬県嬬恋村のふるさと納税クーポンをチェック</h3>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg"
                alt="万座温泉　万座プリンスホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 3.79（口コミ 2131件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　万座プリンスホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  標高1800mの天空に浮かぶ絶景露天風呂「こまくさの湯」！乳白色のにごり湯と満天の星空パノラマ
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 万座プリンスホテル —— 山岳パノラマと開放感の極み。星空に近い高原リゾート
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 雄大な山並みを見渡す名物露天風呂「こまくさの湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">標高1,800mの斜面にせり出すように造られた絶景露天風呂。乳白色の濃厚な硫黄泉に浸かりながら、眼下に広がる渓谷美と遠くの山々を一望する大パノラマは圧巻です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 女性専用・混浴露天風呂を備えた多彩な湯処
                    </h5>
                    <p className="text-stone-600 leading-relaxed">専用の湯浴み着で安心して楽しめる混浴露天風呂のほか、女性専用露天風呂や内湯も完備。カップルや家族で同じ絶景を共有できる貴重な温泉体験が叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 高原の恵みを味わう和洋中ブッフェ＆会席ディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">嬬恋村特産のキャベツや高原野菜、上州牛や群馬県産もち豚など、地元の新鮮素材をふんだんに取り入れた充実のビュッフェ料理が宿泊者の舌を喜ばせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価3.79点、口コミ2100件超。「露天風呂からの景色と夜の満天の星空が圧巻」「乳白色の硫黄泉に入ると肌がすべすべになり体の芯から温まる」と絶景温泉の評価が極めて高い名門宿です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 吾妻郡嬬恋村万座温泉</div>
                <div>最寄り駅・アクセス: 北陸新幹線「軽井沢駅南口」より送迎バスあり（約９０分：要事前予約）／上信越自動車道「碓氷軽井沢IC」より約６４km</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥3,893〜</span></div>
                <div>ホテル番号: No.30739</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30739"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/67057/67057.jpg"
                alt="万座温泉　万座高原ホテル"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.08（口コミ 2017件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　万座高原ホテル
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  黄・緑・白と異なる4つの自家源泉！渓流沿いに広がる名物石庭露天風呂「百泉の湯」で究極の泉質めぐり
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 万座高原ホテル —— 8つの湯船が並ぶ石庭露天風呂。色彩豊かな源泉掛け流しパラダイス
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 4つの自家源泉が注ぐ圧巻の石庭露天風呂「百泉の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">渓流沿いの大自然の中に広がる8つの露天風呂。万座唯一の「黄色い湯」をはじめ、透明、緑、白濁と色も成分も異なる自家源泉をその場で湯巡りできる贅沢な温泉施設です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 万座プリンスホテルの絶景露天風呂も無料で利用可能
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿泊者はシャトルバスや徒歩で姉妹館「万座プリンスホテル」の露天風呂も無料で相互利用可能。万座の名湯を余すところなく味わい尽くすことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> カジュアルに楽しむ高原バイキング＆リーズナブルな連泊プラン
                    </h5>
                    <p className="text-stone-600 leading-relaxed">好きなものを自由に選べる和洋中バイキング。気取らない雰囲気とリーズナブルな価格設定で、じっくりと湯治を楽しみたい温泉ファンや長期滞在者に最適です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.08点、口コミ2000件超。「百泉の湯の種類の多さと開放感が素晴らしい」「姉妹館のプリンスホテルの風呂にも入れてお得感が抜群」と温泉好きから熱烈な支持を集めています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 吾妻郡嬬恋村万座温泉</div>
                <div>最寄り駅・アクセス: ＪＲ吾妻線万座鹿沢口駅からバスで４０分、タクシーで３５分。／軽井沢ＩＣから鬼押、万座ハイウェー（有料道路）経由で６４ｋｍ</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥2,793〜</span></div>
                <div>ホテル番号: No.67057</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D67057"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg"
                alt="万座温泉　日進舘"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.23（口コミ 2481件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県嬬恋村</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  万座温泉　日進舘
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業百五十余年・万座最古の木造湯治宿！総檜造りの名物大浴場「長寿の湯」と心身を癒やす健康プログラム
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  万座温泉 日進舘 —— 万座の原点を受け継ぐ奇跡の湯治場。九つの天然温泉とぬくもりの木造建築
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 天然木に囲まれた総檜造りの名湯大浴場「長寿の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">木の温もりと硫黄の香りに包まれる風情満点の大浴場。苦湯、姥湯、ささ湯など、異なる効能を持つ湯船が並び、昔ながらの本格的な湯治文化を肌で体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 満天の星空と雲海を仰ぐ展望露天風呂「極楽湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">本館から少し歩いた高台に佇む露天風呂「極楽湯」。昼は雄大な熊四郎山のパノラマ、夜は満天の星空を眺めながら、源泉100％の白濁湯に浸かる時間はまさに極楽そのものです。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 健康に配慮したヘルシーなビュッフェと毎夜のフロアショー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">地元産の新鮮野菜や玄米、身体に優しい和食を中心としたバイキング。ロビーでは毎晩コンサートや健康セミナーなどの催しが開かれ、滞在を楽しく彩ります。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.23点、口コミ約2500件。「お湯の質は全国の温泉でも間違いなくトップクラス」「長寿の湯と極楽湯の雰囲気が最高で何泊もしたくなる」と根強い湯治ファンに愛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: 群馬県 吾妻郡嬬恋村大字干俣万座温泉２４０１</div>
                <div>最寄り駅・アクセス: 上信越自動車道碓氷軽井沢ＩＣより車で９０分。</div>
                <div>参考料金: <span className="font-bold text-stone-800">¥6,590〜</span></div>
                <div>ホテル番号: No.3033</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D3033"
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
            万座温泉周辺のハイキング・星空観賞＆嬬恋村ドライブ
          </h2>
          <div className="grid gap-4">

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 万座空吹（からぶき）と熊四郎洞窟の遊歩道散策
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">万座温泉の名物スポット「空吹」。昔の噴火口から今も硫黄の噴気がモクモクと立ち上る迫力の光景を間近で見学できます。また、縄文時代の土器が出土した「熊四郎洞窟」への遊歩道ハイクも人気です。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 志賀草津高原ルートの絶景ドライブ（雪の回廊・新緑・紅葉）
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">日本一標高の高い国道（渋峠・標高2,172m）を通る「志賀草津高原ルート」。春の開通直後の巨大な「雪の回廊」、夏の新緑と高山植物、秋の全山紅葉と、息をのむ絶景ドライブコースです。</p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> 愛妻の丘と嬬恋高原キャベツ畑のパノラマ
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">広大なキャベツ畑がどこまでも広がる嬬恋高原。「愛妻家の聖地」として知られる「愛妻の丘」からは、浅間山と広大な緑の絨毯を見渡すロマンチックなパノラマが広がります。</p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県嬬恋村ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 1: 楽天ふるさと納税で「群馬県嬬恋村」のクーポンを獲得</div>
              <p className="text-stone-200 leading-relaxed">楽天ふるさと納税で「嬬恋村」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 2: 3年間の有効期間内でベストシーズンを予約</div>
              <p className="text-stone-200 leading-relaxed">クーポンの有効期限は発行から3年間。スキーや雪見露天の冬、涼しい夏の避暑、紅葉の秋など、自分の好みに合わせて宿泊日程を選べます。</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">Step 3: 楽天トラベル予約画面でクーポン割引を適用</div>
              <p className="text-stone-200 leading-relaxed">万座プリンスホテル、万座高原ホテル、日進舘などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。</p>
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
