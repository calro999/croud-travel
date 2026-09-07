import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '旅行費を最大30%安くする裏ワザ7選｜ホテル代・温泉旅行の節約術【2026年完全版】',
  description: '国内旅行の費用を大幅に節約する7つの方法を徹底解説。早割・ポイント活用・クーポン・ふるさと納税トラベルクーポンなど、知るだけで年間数万円得する旅の裏ワザ。温泉旅行から家族旅行まで、どんな旅にも使える保存版ガイド。',
  keywords: ['旅行 節約', '旅行 お得', 'ホテル 安く泊まる', '温泉旅行 節約', '旅行費 節約', '国内旅行 安く', '宿泊費 節約', '旅行 割引 方法', '旅行 裏ワザ', 'ホテル代 節約術'],
  alternates: { canonical: baseUrl + '/travel-savings-guide' },
  openGraph: {
    title: '旅行費を最大30%安くする裏ワザ7選｜ホテル代・温泉旅行の節約術【2026年完全版】',
    description: '国内旅行の費用を大幅に節約する7つの方法を徹底解説。早割・ポイント活用・クーポン・ふるさと納税トラベルクーポンなど、知るだけで年間数万円得する旅の裏ワザ。',
    url: baseUrl + '/travel-savings-guide',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function TravelSavingsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ふるさと納税で旅行が安くなるって本当？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。楽天ふるさと納税の「トラベルクーポン」を利用すれば、寄付額の最大30%相当が宿泊クーポンとして還元されます。自己負担は実質2,000円のみで、高級旅館やリゾートホテルの宿泊費を大幅に節約できます。有効期限は3年間と長く、予約済みの宿泊にもあとから適用できます。',
        },
      },
      {
        '@type': 'Question',
        name: '旅行費を安くする方法は？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '旅行費を節約する主な方法は7つ。早期予約割引（早割60〜120日前）、楽天トラベルスーパーSALE活用、ポイント10倍プラン、平日・オフシーズン利用、全国旅行支援、ふるさと納税トラベルクーポン、セット予約（航空券+ホテル）です。中でもふるさと納税は実質自己負担2,000円で寄付額の最大30%が還元される最強の方法です。',
        },
      },
      {
        '@type': 'Question',
        name: 'ふるさと納税クーポンは予約済みのホテルにも使える？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、楽天トラベルのふるさと納税クーポンは「あとから適用」に対応しています。すでに予約済みの宿泊にも遡ってクーポンを適用し、宿泊費を割引できます。',
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行費の節約術ガイド', item: baseUrl + '/travel-savings-guide' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">旅行費の節約術ガイド</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            旅行費の節約術 完全ガイド
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            旅行費を最大30%安くする裏ワザ7選
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-4">
            「もう少し安く泊まれたらなぁ」。旅行の計画中、誰もが一度は感じるこの気持ち。実は、ちょっとした工夫と知識だけで宿泊費は劇的に変わります。年間の旅行費を数万円単位で圧縮できる7つの方法を、旅行ライターが本音で解説します。
          </p>
          <p className="text-stone-400 text-sm leading-relaxed max-w-3xl">
            特に「知っている人だけが得をしている」のが、このページで一番伝えたい方法——ふるさと納税を旅行に使うテクニック。自己負担たった2,000円で、寄付額の最大30%がそのまま宿泊クーポンに変わるこの仕組み、まだ使っていないなら確実に損をしています。
          </p>
        </header>

        {/* 目次 */}
        <nav className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 mb-12">
          <h2 className="text-lg font-bold text-stone-800 mb-4">📋 このページの内容</h2>
          <ol className="space-y-2 text-sm text-stone-600">
            <li><a href="#methods" className="hover:text-amber-700 transition">1. 旅行費を安くする7つの方法</a></li>
            <li><a href="#furusato" className="hover:text-amber-700 transition">2. 最もインパクトの大きい節約法——ふるさと納税×旅行の仕組み</a></li>
            <li><a href="#howto" className="hover:text-amber-700 transition">3. ふるさと納税トラベルクーポンの使い方3ステップ</a></li>
            <li><a href="#faq" className="hover:text-amber-700 transition">4. よくある質問</a></li>
            <li><a href="#guides" className="hover:text-amber-700 transition">5. テーマ別おすすめ宿ガイド一覧（238件）</a></li>
          </ol>
        </nav>

        {/* セクション1: 7つの方法 */}
        <section id="methods" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-8 flex items-center gap-3">
            <span className="text-amber-600">1</span>
            旅行費を安くする7つの方法
          </h2>

          <div className="grid gap-4">
            {/* 方法1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                早期予約割引（早割）を活用する
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                60日前、90日前、120日前の早割プランは通常料金から15〜25%オフになるケースが多い。特に人気の温泉宿やリゾートホテルでは、早割限定の部屋タイプや特典（レイトチェックアウト、部屋食アップグレードなど）が付くことも。旅の日程が決まったら真っ先にチェックすべき基本テクニック。
              </p>
            </div>

            {/* 方法2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                楽天トラベルスーパーSALE・クーポン祭りを狙う
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                年に数回開催される楽天スーパーSALEでは、半額プランやタイムセールが登場する。3月・6月・9月・12月のSALE時期を事前にカレンダーに入れておくと、掘り出し物に出会える確率がぐっと上がる。開始直後の数分間が最も在庫が豊富なので、目当ての宿は事前にお気に入り登録しておこう。
              </p>
            </div>

            {/* 方法3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                ポイント10倍プラン・SPU活用
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                楽天トラベルの「ポイント10倍プラン」なら、1泊30,000円の宿で3,000ポイント還元。楽天カード決済やSPU（スーパーポイントアッププログラム）を組み合わせれば実質15%以上の還元率になることも。貯まったポイントは次回の旅行や日常の買い物にそのまま使える。
              </p>
            </div>

            {/* 方法4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                平日・オフシーズンを選ぶ
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                金土の宿泊料金は平日の1.3〜2倍になることも珍しくない。日曜泊や月曜泊にスライドするだけで同じ宿が半額近くになるケースもある。さらにGWや盆・正月を避けたオフシーズンなら、繁忙期の半額以下で高級旅館に泊まれることも。有給休暇との組み合わせが鍵。
              </p>
            </div>

            {/* 方法5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>
                全国旅行支援・自治体独自クーポンを使う
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                国や自治体が実施する旅行支援キャンペーンは、宿泊費の20〜40%が割引になる大型施策。開催時期は不定期だが、各都道府県の公式観光サイトや楽天トラベルの「クーポン・キャンペーン」ページをこまめにチェックしておけば見逃さない。他の割引との併用が可能なケースも多く、重ね掛けできるとインパクトは絶大。
              </p>
            </div>

            {/* 方法6 ★メイン★ */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-md border-2 border-amber-400/60 p-6 relative">
              <div className="absolute -top-3 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ★ 最もインパクト大
              </div>
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 mt-1">
                <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">6</span>
                ふるさと納税トラベルクーポンを使う
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                多くの人がまだ気づいていない、旅行費節約の最強カード。楽天ふるさと納税で自治体に寄付すると、<strong>寄付額の最大30%が宿泊クーポンとして還元</strong>される。しかも翌年の確定申告（またはワンストップ特例）で寄付額が所得税・住民税から控除されるため、<strong>実質的な自己負担はたったの2,000円</strong>。つまり年収に応じた控除上限額の範囲内であれば、10万円を寄付して3万円分のクーポンを手に入れても、実際に財布から出ていくのは2,000円だけ。これを知らずに旅行しているなら、毎回数万円を損している計算になる。
              </p>
              <p className="text-sm text-stone-700 leading-relaxed">
                クーポンの有効期限は3年間。予約済みのホテルにも「あとから適用」できるため、旅行の計画前でも年末の駆け込み寄付でOK。詳しい仕組みとおすすめ宿は、このページの下で徹底的に解説しています。
              </p>
            </div>

            {/* 方法7 */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6">
              <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                <span className="bg-stone-100 text-stone-600 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">7</span>
                セット予約（航空券+ホテル / レンタカー+宿泊）
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                航空券とホテルをバラバラに予約するよりも、楽天トラベルの「楽パック」のようなセット予約なら合計で数千〜数万円安くなることがある。特に遠方への旅行では、移動費+宿泊費のトータルコストで比較するのが鉄則。レンタカー付きプランも同様にお得な場合が多い。
              </p>
            </div>
          </div>
        </section>

        {/* セクション2: ふるさと納税×旅行の仕組み */}
        <section id="furusato" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-8 flex items-center gap-3">
            <span className="text-amber-600">2</span>
            最もインパクトの大きい節約法——ふるさと納税×旅行
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 mb-6">
            <h3 className="text-lg font-bold text-stone-800 mb-4">なぜ「ふるさと納税」が旅行の節約に効くのか？</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              ふるさと納税といえば「お米」「お肉」「果物」を思い浮かべる人が多いでしょう。しかし実は、全国の自治体が楽天トラベルと連携して「宿泊で使えるトラベルクーポン」を返礼品として提供しています。仕組みはシンプルです。
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-xs font-bold text-amber-800 mb-1">寄付額の例</div>
                <div className="text-2xl font-bold text-stone-800">100,000<span className="text-sm">円</span></div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🎫</div>
                <div className="text-xs font-bold text-green-800 mb-1">もらえるクーポン</div>
                <div className="text-2xl font-bold text-stone-800">30,000<span className="text-sm">円分</span></div>
                <div className="text-xs text-green-700 mt-1">寄付額の最大30%</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🧾</div>
                <div className="text-xs font-bold text-blue-800 mb-1">実質の自己負担</div>
                <div className="text-2xl font-bold text-stone-800">2,000<span className="text-sm">円</span></div>
                <div className="text-xs text-blue-700 mt-1">残りは税控除で戻る</div>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              つまり、年収に応じた控除上限額（目安：年収500万円の会社員で約6万円、年収700万円で約10万円）の範囲内で寄付すれば、<strong>2,000円の自己負担で数万円分の宿泊クーポンが手に入る</strong>ということ。もともと払う税金の使い道を選ぶだけなので、「追加出費」ではなく「税金の使い方を変える」だけで旅行費が浮く——これがふるさと納税トラベルクーポンの破壊力です。
            </p>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60">
              <h4 className="text-sm font-bold text-stone-700 mb-2">💡 年収別・控除上限の目安（独身または共働き）</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white rounded-lg p-2 border border-stone-200/60">
                  <div className="text-stone-500">年収400万</div>
                  <div className="font-bold text-stone-800">約4.2万円</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-stone-200/60">
                  <div className="text-stone-500">年収500万</div>
                  <div className="font-bold text-stone-800">約6.1万円</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-stone-200/60">
                  <div className="text-stone-500">年収700万</div>
                  <div className="font-bold text-stone-800">約10.8万円</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-stone-200/60">
                  <div className="text-stone-500">年収1000万</div>
                  <div className="font-bold text-stone-800">約17.6万円</div>
                </div>
              </div>
              <p className="text-xs text-stone-400 mt-2">※金額はあくまで概算です。家族構成や他の控除により異なります。詳しくは各ふるさと納税サイトのシミュレーターをご利用ください。</p>
            </div>
          </div>
        </section>

        {/* セクション3: 使い方3ステップ */}
        <section id="howto" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-8 flex items-center gap-3">
            <span className="text-amber-600">3</span>
            ふるさと納税トラベルクーポンの使い方
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 text-center">
              <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-stone-800 mb-2">行きたい地域の自治体に寄付</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                楽天ふるさと納税サイトで、旅行先の自治体を選んで寄付。返礼品として「楽天トラベルクーポン」を選択します。
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 text-center">
              <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-stone-800 mb-2">クーポンを受け取る</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                寄付完了後、楽天トラベルのマイクーポンに自動付与（即時〜数日）。有効期限は3年間なので急ぐ必要なし。
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 text-center">
              <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-stone-800 mb-2">予約時にクーポン適用</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                楽天トラベルで宿を予約する際にクーポンを選択するだけ。予約済みの宿にも「あとから適用」可能です。
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンをチェック →
            </a>
          </div>
        </section>

        {/* セクション4: FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-8 flex items-center gap-3">
            <span className="text-amber-600">4</span>
            よくある質問
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-5 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                ふるさと納税のクーポンは、どのホテル・旅館でも使える？
              </summary>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">
                楽天トラベルに掲載されている対象自治体内の宿泊施設で利用できます。寄付先の自治体に所在するホテル・旅館が対象のため、行きたいエリアの自治体を選んで寄付するのがポイントです。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-5 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                クーポンの有効期限はどのくらい？
              </summary>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">
                楽天ふるさと納税トラベルクーポンの有効期限は発行日から3年間です。年末に駆け込み寄付しても、翌年以降ゆっくり旅行の計画を立てられます。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-5 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                すでに予約済みのホテルにもクーポンを適用できる？
              </summary>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">
                はい、楽天トラベルでは「あとから適用」が可能です。予約済みの宿泊にも遡ってクーポンを適用し、宿泊費を割引できます。旅行を計画してから寄付しても間に合います。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-5 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                確定申告が面倒そう……ワンストップ特例なら手続き不要？
              </summary>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">
                会社員で年間の寄付先が5自治体以内なら、ワンストップ特例制度を利用することで確定申告は不要です。寄付時に申請書を提出するだけで、翌年の住民税から自動的に控除されます。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-5 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                他の割引（早割、ポイント10倍）と併用できる？
              </summary>
              <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">
                ふるさと納税クーポンは、早割プランやポイント10倍プランとの併用が基本的に可能です。早割で宿泊費を下げ、さらにふるさと納税クーポンで割引し、ポイント還元も受け取る——という三重取りも狙えます。
              </div>
            </details>
          </div>
        </section>

        {/* セクション5: テーマ別おすすめ宿ガイド一覧 */}
        <section id="guides" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-4 flex items-center gap-3">
            <span className="text-amber-600">5</span>
            テーマ別おすすめ宿ガイド一覧
          </h2>
          <p className="text-sm text-stone-500 mb-8">
            ふるさと納税トラベルクーポンで泊まれるおすすめ宿を、テーマ別に238件厳選しました。気になるジャンルをタップして、あなたの旅にぴったりの一軒を見つけてください。
          </p>

          <div className="grid gap-6">

            {/* 🍽 グルメ・美食 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🍽</span>
                  グルメ・美食
                  <span className="text-xs font-normal text-stone-400 ml-1">(31件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">ブランド牛・蟹・朝市の海鮮・ご当地麺・フルーツ狩り——各地の「食」を堪能する旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-award-winning-breakfast-gourmet-hotel-stay">
                  <Link href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">朝食日本一受賞・究極の朝ごはんホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-brand-jidori-mizutaki-gourmet-stay">
                  <Link href="/furusato-tax-brand-jidori-mizutaki-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">ブランド地鶏・水炊き・軍鶏料理の名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-brand-pork-shabu-gourmet-stay">
                  <Link href="/furusato-tax-brand-pork-shabu-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">銘柄豚・極上しゃぶしゃぶ料理の名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-kue-gourmet-luxury-fish-stay">
                  <Link href="/furusato-tax-kue-gourmet-luxury-fish-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">天然クエ鍋＆幻の高級魚グルメ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay">
                  <Link href="/furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-local-gourmet-inn-stay">
                  <Link href="/furusato-tax-local-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿をふるさと納税で堪能する旅</span>
                  </Link>
                </li>
                <li key="furusato-tax-morning-market-hamayaki-seafood-inn-stay">
                  <Link href="/furusato-tax-morning-market-hamayaki-seafood-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">海鮮浜焼き・港町朝市めぐり直結宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay">
                  <Link href="/furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">幻の極上赤身肉「短角牛・あか牛」美食温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-spring-water-soba-tofu-onsen-stay">
                  <Link href="/furusato-tax-spring-water-soba-tofu-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">名水百選・湧水めぐり＆名水蕎麦豆腐料理の宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-sweets-cafe-wagashi-retro-onsen-stay">
                  <Link href="/furusato-tax-sweets-cafe-wagashi-retro-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">銘菓・和カフェ＆老舗スイーツめぐり温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-terraced-rice-fields-satoyama-onsen-stay">
                  <Link href="/furusato-tax-terraced-rice-fields-satoyama-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景棚田＆日本の原風景里山温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-famous-confections-historic-town-stay">
                  <Link href="/furusato-tax-three-famous-confections-historic-town-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘菓＆城下町の伝統茶寮・老舗和菓子文化宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-citrus-kingdoms-resort-stay">
                  <Link href="/furusato-tax-three-great-citrus-kingdoms-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大柑橘王国＆黄金色の果樹園・海風薫る爽快リゾートと名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ekiben-gourmet-stay">
                  <Link href="/furusato-tax-three-great-ekiben-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大駅弁＆鉄道旅情・元祖の味と極上ブランド牛・名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-fruit-kingdoms-auberge-stay">
                  <Link href="/furusato-tax-three-great-fruit-kingdoms-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大フルーツ王国＆もぎたて果実の恵み・果樹園パノラマと美食リゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-miso-capitals-gastronomy-stay">
                  <Link href="/furusato-tax-three-great-miso-capitals-gastronomy-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大味噌の郷＆百花繚乱の郷土発酵美・老舗蔵と郷土鍋の名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-morning-markets-gourmet-stay">
                  <Link href="/furusato-tax-three-great-morning-markets-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大朝市＆獲れたて鮮魚と旬の恵み・活気あふれる市場宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-morning-markets-seafood-stay">
                  <Link href="/furusato-tax-three-great-morning-markets-seafood-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大朝市＆獲れたて海鮮・朝ごはん宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pottery-towns-gourmet-stay">
                  <Link href="/furusato-tax-three-great-pottery-towns-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大陶磁器の里＆窯元めぐり・器と美食を愉しむ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ramen-capitals-stay">
                  <Link href="/furusato-tax-three-great-ramen-capitals-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大ラーメン＆ご当地麺文化・名湯と屋台街の美食宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-shoyu-capitals-brewery-stay">
                  <Link href="/furusato-tax-three-great-shoyu-capitals-brewery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大醤油の醸造地＆木桶仕込みの芳香・白壁の蔵元巡りと発酵美名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-soba-noodles-stay">
                  <Link href="/furusato-tax-three-great-soba-noodles-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大そば＆打ち立て蕎麦の芳香・名水と門前宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-somen-noodles-stay">
                  <Link href="/furusato-tax-three-great-somen-noodles-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大そうめん＆手延べ極細麺の伝統技・名水と古都の湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-terraced-rice-fields-stay">
                  <Link href="/furusato-tax-three-great-terraced-rice-fields-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美田・棚田百選＆水鏡と黄金色の日本の原風景・農村リトリート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-udons-gourmet-stay">
                  <Link href="/furusato-tax-three-great-udons-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大うどん＆名水と小麦の麺道・ご当地名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-wagashi-tea-culture-stay">
                  <Link href="/furusato-tax-three-great-wagashi-tea-culture-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-wagyu-beef-gourmet-stay">
                  <Link href="/furusato-tax-three-great-wagyu-beef-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大和牛＆最高峰霜降り肉会席・本場美食宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-wagyu-beef-luxury-stay">
                  <Link href="/furusato-tax-three-great-wagyu-beef-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘牛の極上鉄板焼き＆すき焼き名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-traditional-kamado-rice-irori-stay">
                  <Link href="/furusato-tax-traditional-kamado-rice-irori-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">古民家かまど炊きご飯＆囲炉裏郷土料理の宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-winter-crab-gourmet-luxury-stay">
                  <Link href="/furusato-tax-winter-crab-gourmet-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【冬の味覚の王様×ふるさと納税】越前ガニ・松葉ガニのタグ付き活蟹尽くし極上温泉宿ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-tea-plantations-stay">
                  <Link href="/furusato-tax-three-great-tea-plantations-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大茶園＆天空の緑の絨毯・茶畑パノラマと最高峰の抹茶文化・茶香宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* ♨ 温泉・湯治・癒やし */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">♨</span>
                  温泉・湯治・癒やし
                  <span className="text-xs font-normal text-stone-400 ml-1">(39件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">美肌の湯、秘湯、薬湯、渓谷露天風呂……日本が誇る名湯を巡る贅沢な湯旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-autumn-foliage-gorge-onsen-stay">
                  <Link href="/furusato-tax-autumn-foliage-gorge-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">紅葉渓谷＆錦秋の絶景露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-bihada-medicinal-springs-retreat-stay">
                  <Link href="/furusato-tax-bihada-medicinal-springs-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【奇跡の名湯×ふるさと納税】強炭酸泉・天然泥湯・日本三大美肌の湯で巡る極上湯治リトリート</span>
                  </Link>
                </li>
                <li key="furusato-tax-carbonated-spring-effervescent-onsen-stay">
                  <Link href="/furusato-tax-carbonated-spring-effervescent-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">天然炭酸泉＆シュワシュワ美肌の湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-castle-town-heritage-onsen-stay">
                  <Link href="/furusato-tax-castle-town-heritage-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【国宝・名城めぐり×ふるさと納税】天守を望む絶景露天風呂＆歴史ある城下町の名宿完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-cherry-blossom-spring-hanami-onsen-stay">
                  <Link href="/furusato-tax-cherry-blossom-spring-hanami-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【全国の桜名所×ふるさと納税】客室から夜桜を愛でるお花見露天風呂＆桜の絶景宿完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-emerald-valley-gorge-hot-spring-stay">
                  <Link href="/furusato-tax-emerald-valley-gorge-hot-spring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-famous-spring-waters-healing-stay">
                  <Link href="/furusato-tax-famous-spring-waters-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本名水百選の湧水地と名水仕込み美食・美肌温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-fuji-view-onsen-resort-stay">
                  <Link href="/furusato-tax-fuji-view-onsen-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景富士山ビュー露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-golf-resort-hotspring-stay">
                  <Link href="/furusato-tax-golf-resort-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【名門ゴルフ×ふるさと納税】極上トーナメントコース＆温泉ホテル宿泊パック完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-infinity-onsen-sky-ocean-view-stay">
                  <Link href="/furusato-tax-infinity-onsen-sky-ocean-view-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆インフィニティプール宿完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-japan-three-great-hot-springs-heritage-stay">
                  <Link href="/furusato-tax-japan-three-great-hot-springs-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名泉＆天下の名湯・格式ある老舗温泉旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-japanese-whisky-distillery-retreat-stay">
                  <Link href="/furusato-tax-japanese-whisky-distillery-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ</span>
                  </Link>
                </li>
                <li key="furusato-tax-literary-heritage-historic-onsen-stay">
                  <Link href="/furusato-tax-literary-heritage-historic-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">文豪の愛した名湯・文学ゆかりの老舗旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-luxury-hotspring-ryokan-stay">
                  <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿をふるさと納税で予約する完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-oceanfront-wave-sound-healing-stay">
                  <Link href="/furusato-tax-oceanfront-wave-sound-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景オーシャンフロント×波音ヒーリングの海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-pet-sauna-private-hotspring-stay">
                  <Link href="/furusato-tax-pet-sauna-private-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！ふるさと納税クーポンのスマート活用術</span>
                  </Link>
                </li>
                <li key="furusato-tax-sake-brewery-pairing-onsen-stay">
                  <Link href="/furusato-tax-sake-brewery-pairing-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本酒ペアリング＆酒蔵直結名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-scenic-train-torokko-railway-onsen-stay">
                  <Link href="/furusato-tax-scenic-train-torokko-railway-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景ローカル線＆トロッコ列車めぐり温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-scenic-train-trolley-onsen-stay">
                  <Link href="/furusato-tax-scenic-train-trolley-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【絶景観光列車×ふるさと納税】トロッコ列車＆ローカル線途中下車で巡る名湯温泉旅館ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-secluded-canyon-isolated-onsen-stay">
                  <Link href="/furusato-tax-secluded-canyon-isolated-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">秘境・渓谷の一軒宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-secret-hotspring-lamp-retreat-stay">
                  <Link href="/furusato-tax-secret-hotspring-lamp-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【秘湯・ランプの宿×ふるさと納税】電波の届かぬ渓谷野天風呂で過ごすデジタルデトックス名湯旅</span>
                  </Link>
                </li>
                <li key="furusato-tax-shinkansen-station-walk-hotspring-stay">
                  <Link href="/furusato-tax-shinkansen-station-walk-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【車なし・雪道運転不要】新幹線駅直結＆駅徒歩圏内の名湯温泉旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-solo-retreat-private-onsen-stay">
                  <Link href="/furusato-tax-solo-retreat-private-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【おひとり様贅沢ステイ】客室露天風呂＆部屋食で心身をリセットするソロ温泉ワーケーションふるさと納税旅</span>
                  </Link>
                </li>
                <li key="furusato-tax-starry-sky-astronomy-retreat-stay">
                  <Link href="/furusato-tax-starry-sky-astronomy-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大星空・天体観測リゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-famous-waterfalls-healing-stay">
                  <Link href="/furusato-tax-three-famous-waterfalls-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名瀑ヒーリング＆マイナスイオンの清流・名水と豪快な滝見温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-gorge-open-air-baths-retreat-stay">
                  <Link href="/furusato-tax-three-gorge-open-air-baths-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大渓谷露天風呂＆大自然パノラマ野天温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-bihada-onsen-stay">
                  <Link href="/furusato-tax-three-great-bihada-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美肌の湯＆とろとろ重曹泉・美肌会席宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gorges-canyon-onsen-stay">
                  <Link href="/furusato-tax-three-great-gorges-canyon-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-green-tea-regions-healing-stay">
                  <Link href="/furusato-tax-three-great-green-tea-regions-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘茶の産地＆大茶園パノラマ・茶香炉ヒーリング宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-hotsprings-luxury-villas-stay">
                  <Link href="/furusato-tax-three-great-hotsprings-luxury-villas-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名湯の別邸＆極上離れ・客室露天風呂とおこもり贅沢宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-medicinal-baths-onsen-stay">
                  <Link href="/furusato-tax-three-great-medicinal-baths-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大薬湯＆奇跡の濃厚湯治宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-medicinal-springs-healing-stay">
                  <Link href="/furusato-tax-three-great-medicinal-springs-healing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大薬湯＆濃厚生薬湯治宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-secret-hotsprings-stay">
                  <Link href="/furusato-tax-three-great-secret-hotsprings-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大秘湯＆原生林の一軒宿・ケーブルカー露天風呂</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-waterfalls-onsen-stay">
                  <Link href="/furusato-tax-three-great-waterfalls-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名瀑＆ダイナミック滝見露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-major-bihada-hotspring-stay">
                  <Link href="/furusato-tax-three-major-bihada-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美肌の湯×炭酸水素塩泉・とろとろ美肌温泉</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-major-forest-therapy-retreat-stay">
                  <Link href="/furusato-tax-three-major-forest-therapy-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林＆巨樹・森林セラピー癒やしの宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-medicinal-hotsprings-stay">
                  <Link href="/furusato-tax-three-medicinal-hotsprings-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-sacred-temple-bells-retreat-stay">
                  <Link href="/furusato-tax-three-sacred-temple-bells-retreat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-waterfall-river-gorge-healing-onsen-stay">
                  <Link href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">清流渓谷＆名瀑ヒーリング温泉宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🏯 歴史・文化・寺社仏閣 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🏯</span>
                  歴史・文化・寺社仏閣
                  <span className="text-xs font-normal text-stone-400 ml-1">(34件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">名城・庭園・古社・古都・宿場町——千年の歴史を肌で感じるタイムスリップ旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-famous-castles-stone-walls-stay">
                  <Link href="/furusato-tax-famous-castles-stone-walls-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本百名城の石垣美と天守を望む城下町名門ホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-historical-kaido-post-town-ryokan-stay">
                  <Link href="/furusato-tax-historical-kaido-post-town-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">歴史街道・宿場町めぐり名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-national-treasure-castle-view-luxury-stay">
                  <Link href="/furusato-tax-national-treasure-castle-view-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">国宝天守・城下町キャッスルビュー名門宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-tangible-cultural-property-architectural-ryokan-stay">
                  <Link href="/furusato-tax-tangible-cultural-property-architectural-ryokan-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">登録有形文化財・宮大工名建築旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-temple-shukubo-shojin-mindfulness-stay">
                  <Link href="/furusato-tax-temple-shukubo-shojin-mindfulness-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">古刹宿坊＆本格精進料理ステイ</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ancient-capitals-heritage-stay">
                  <Link href="/furusato-tax-three-great-ancient-capitals-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古都＆千年千載の雅と武家の誇り・歴史息づく町並み宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ancient-shrines-sacred-stay">
                  <Link href="/furusato-tax-three-great-ancient-shrines-sacred-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古社＆神話と悠久の祈り・神域に寄り添う聖地宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ancient-trails-historic-stay">
                  <Link href="/furusato-tax-three-great-ancient-trails-historic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古道＆歴史巡礼の山林トレッキング名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-bell-towers-historic-stay">
                  <Link href="/furusato-tax-three-great-bell-towers-historic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名鐘＆心の琴線に響く梵鐘・悠久の寺町宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-buddhas-heritage-stay">
                  <Link href="/furusato-tax-three-great-buddhas-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大仏＆歴史古都の門前町・国宝仏閣と伝統会席宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-castles-historic-stay">
                  <Link href="/furusato-tax-three-great-castles-historic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名城＆不落の巨城を望む城見ステイ</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-daimyo-gardens-stay">
                  <Link href="/furusato-tax-three-great-daimyo-gardens-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名園＆江戸大名庭園の四季美と城下町風雅宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-famous-stones-gardens-stay">
                  <Link href="/furusato-tax-three-great-famous-stones-gardens-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大銘石＆枯山水庭園・名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gardens-heritage-luxury-stay">
                  <Link href="/furusato-tax-three-great-gardens-heritage-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名園＆大名庭園を愛でる名門宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gardens-heritage-stay">
                  <Link href="/furusato-tax-three-great-gardens-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名園＆大名庭園を望む老舗旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-hachiman-shrines-sacred-stay">
                  <Link href="/furusato-tax-three-great-hachiman-shrines-sacred-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大八幡宮＆厄除け開運祈願・門前町名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-inari-shrines-stay">
                  <Link href="/furusato-tax-three-great-inari-shrines-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大稲荷＆千本鳥居・商売繁盛開運祈願と門前町グルメ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-kannon-temples-stay">
                  <Link href="/furusato-tax-three-great-kannon-temples-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大観音＆諸願成就の霊場・下町風情と湖畔の祈り宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-mountain-castles-history-stay">
                  <Link href="/furusato-tax-three-great-mountain-castles-history-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大山城・天空の城の雲海と歴史浪漫宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-mountain-castles-stay">
                  <Link href="/furusato-tax-three-great-mountain-castles-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大山城＆天空の要塞・雲海に浮かぶ石垣美ホテル宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pagodas-heritage-stay">
                  <Link href="/furusato-tax-three-great-pagodas-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pagodas-scenic-stay">
                  <Link href="/furusato-tax-three-great-pagodas-scenic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名塔＆国宝五重塔の木造美と悠久の古都歴史宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-post-towns-nakasendo-stay">
                  <Link href="/furusato-tax-three-great-post-towns-nakasendo-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大宿場町＆木曽路の出桁造り・江戸の面影残す街道名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-traditional-townscapes-stay">
                  <Link href="/furusato-tax-three-great-traditional-townscapes-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大伝統的町並み＆小江戸・白壁土蔵の重伝建と歴史情緒宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-water-castles-seaside-stay">
                  <Link href="/furusato-tax-three-great-water-castles-seaside-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大水城＆海に浮かぶ名城展望・瀬戸内海鮮名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-water-castles-stay">
                  <Link href="/furusato-tax-three-great-water-castles-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大水城＆海を抱く名城天守・海水堀クルーズ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-zen-temples-mindfulness-stay">
                  <Link href="/furusato-tax-three-great-zen-temples-mindfulness-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大禅寺＆静寂の枯山水庭園・心洗われる坐禅・精進料理宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-national-treasure-teahouses-stay">
                  <Link href="/furusato-tax-three-national-treasure-teahouses-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">国宝三大茶室＆数寄屋建築の名旅館宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-sacred-hachiman-shrines-stay">
                  <Link href="/furusato-tax-three-sacred-hachiman-shrines-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大八幡宮＆厄除開運・勝運祈願の聖地巡礼宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-sacred-mountains-sky-resort-stay">
                  <Link href="/furusato-tax-three-sacred-mountains-sky-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三霊山＆富士山・白山・立山を仰ぐ天空パノラマリゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-sacred-mountains-stay">
                  <Link href="/furusato-tax-three-sacred-mountains-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大霊峰の神気満ちる聖地と雲海・高山温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-thatched-roof-villages-heritage-stay">
                  <Link href="/furusato-tax-three-thatched-roof-villages-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大茅葺きの里＆原風景ノスタルジー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-torii-gates-sacred-stay">
                  <Link href="/furusato-tax-three-great-torii-gates-sacred-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鳥居＆聖地パワースポット宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-torii-sacred-stay">
                  <Link href="/furusato-tax-three-great-torii-sacred-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鳥居＆神聖なる巨木の門・古都の歴史宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🌊 海・川・湖・水辺 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🌊</span>
                  海・川・湖・水辺
                  <span className="text-xs font-normal text-stone-400 ml-1">(42件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">清流・渓谷・水郷・美港・岬・砂丘——水の絶景に包まれるリフレッシュ旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-caldera-blue-lake-resort-stay">
                  <Link href="/furusato-tax-caldera-blue-lake-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">神秘のコバルトブルー・カルデラ湖畔ホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-cycling-shimanami-lake-resort-stay">
                  <Link href="/furusato-tax-cycling-shimanami-lake-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景サイクリング＆海沿いサイクリスト温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-river-activity-canoe-fishing-resort-stay">
                  <Link href="/furusato-tax-river-activity-canoe-fishing-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">清流アクティビティ＆リバービュー温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-riverside-kawadoko-cooling-inn-stay">
                  <Link href="/furusato-tax-riverside-kawadoko-cooling-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">清流川床料理＆避暑せせらぎ名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-coastal-pine-glamping-resort-stay">
                  <Link href="/furusato-tax-three-coastal-pine-glamping-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大松原・海岸グランピング宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ancient-lakes-resort-stay">
                  <Link href="/furusato-tax-three-great-ancient-lakes-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大古代湖＆数十万年の歴史美・湖畔リゾートと温泉名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-beautiful-ports-stay">
                  <Link href="/furusato-tax-three-great-beautiful-ports-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美港＆世界遺産富士山と夜景パノラマ・ウォーターフロント宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-capes-ocean-panorama-stay">
                  <Link href="/furusato-tax-three-great-capes-ocean-panorama-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大岬＆地球の丸みを感じる断崖・絶景パノラマ海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-clear-rivers-stay">
                  <Link href="/furusato-tax-three-great-clear-rivers-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大清流＆奇跡の透明度と川魚・名水グルメ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-clear-stream-valleys-stay">
                  <Link href="/furusato-tax-three-great-clear-stream-valleys-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林清流渓谷＆エメラルドグリーンの激流と原生林リトリート温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-coastal-sceneries-stay">
                  <Link href="/furusato-tax-three-great-coastal-sceneries-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大白砂青松＆海の絶景パノラマ・海岸リゾート温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-columnar-joints-gorges-stay">
                  <Link href="/furusato-tax-three-great-columnar-joints-gorges-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大柱状節理峡谷＆幾何学絶壁とエメラルド清流名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-dunes-oceanview-stay">
                  <Link href="/furusato-tax-three-great-dunes-oceanview-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-fireworks-riverside-stay">
                  <Link href="/furusato-tax-three-great-fireworks-riverside-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大花火大会＆リバーサイド展望宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gorges-boat-ride-stay">
                  <Link href="/furusato-tax-three-great-gorges-boat-ride-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大渓谷＆爽快舟下り・清流の奇岩と水辺の温泉名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gorges-canyon-scenery-stay">
                  <Link href="/furusato-tax-three-great-gorges-canyon-scenery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大峡谷＆断崖絶壁・エメラルド渓谷宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-gorges-scenery-stay">
                  <Link href="/furusato-tax-three-great-gorges-scenery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大渓谷美＆エメラルドグリーンの清流・奇岩絶景宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-harbor-cruises-luxury-stay">
                  <Link href="/furusato-tax-three-great-harbor-cruises-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大港クルーズ＆夜景ディナークルーズ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-historic-canals-stay">
                  <Link href="/furusato-tax-three-great-historic-canals-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大運河＆水郷レトロ・白壁の蔵屋敷と舟流し情趣の名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pine-groves-ocean-stay">
                  <Link href="/furusato-tax-three-great-pine-groves-ocean-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大松原＆白砂青松オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pine-groves-oceanview-stay">
                  <Link href="/furusato-tax-three-great-pine-groves-oceanview-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大松原の白砂青松オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pine-groves-sandbar-stay">
                  <Link href="/furusato-tax-three-great-pine-groves-sandbar-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大松原＆白砂青松オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pine-groves-stay">
                  <Link href="/furusato-tax-three-great-pine-groves-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大松原＆白砂青松ドライブ・絶景シーサイドオーシャンビュー温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-ports-waterfront-luxury-stay">
                  <Link href="/furusato-tax-three-great-ports-waterfront-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美港＆客船クルーズ・ウォーターフロント名門ホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapid-currents-strait-stay">
                  <Link href="/furusato-tax-three-great-rapid-currents-strait-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急潮＆豪快うず潮パノラマ・激流海峡オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapid-rivers-stay">
                  <Link href="/furusato-tax-three-great-rapid-rivers-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急流＆爽快川下り舟と清流鮎グルメ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapid-tidal-currents-stay">
                  <Link href="/furusato-tax-three-great-rapid-tidal-currents-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急潮＆激流うず潮パノラマ・鳴門鯛と関門ふぐ美食宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapids-river-activity-stay">
                  <Link href="/furusato-tax-three-great-rapids-river-activity-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急流＆爽快川下り・リバーアクティビティ名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapids-river-boat-stay">
                  <Link href="/furusato-tax-three-great-rapids-river-boat-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急流＆舟下り・リバーサイド宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rapids-river-stay">
                  <Link href="/furusato-tax-three-great-rapids-river-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急流の豪快な舟下りと大自然リバーサイド温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-rivers-riverside-stay">
                  <Link href="/furusato-tax-three-great-rivers-riverside-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大河川の雄大な流れを望むリバーサイド名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sand-dunes-coastal-stay">
                  <Link href="/furusato-tax-three-great-sand-dunes-coastal-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大砂丘＆風紋パノラマ・海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sand-dunes-resort-stay">
                  <Link href="/furusato-tax-three-great-sand-dunes-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sand-dunes-stay">
                  <Link href="/furusato-tax-three-great-sand-dunes-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大砂丘＆雄大な風紋美と夕日オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sea-caves-mystery-stay">
                  <Link href="/furusato-tax-three-great-sea-caves-mystery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-subterranean-waterfalls-caves-stay">
                  <Link href="/furusato-tax-three-great-subterranean-waterfalls-caves-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大地底滝鍾乳洞＆地底アドベンチャー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-tidal-flats-nature-stay">
                  <Link href="/furusato-tax-three-great-tidal-flats-nature-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大干潟＆野鳥と海の満ち引きパノラマ・絶景海鮮シーサイド宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-valleys-riverside-stay">
                  <Link href="/furusato-tax-three-great-valleys-riverside-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大渓流の清澄を愛でる渓谷美露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-water-towns-canal-stay">
                  <Link href="/furusato-tax-three-great-water-towns-canal-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大水郷の情緒あふれる川下りと水辺の名旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-water-towns-riverside-stay">
                  <Link href="/furusato-tax-three-great-water-towns-riverside-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大水郷＆川下り舟舟遊び・水上情景リバーサイド宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-waterfalls-resort-stay">
                  <Link href="/furusato-tax-three-great-waterfalls-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名瀑＆豪快な水煙と滝見リゾート・温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-whitewater-rafting-canyoning-adventure-stay">
                  <Link href="/furusato-tax-whitewater-rafting-canyoning-adventure-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">激流ラフティング＆清流キャニオニング・水上アクティビティ宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* ⛰ 山・森・高原・大自然 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">⛰</span>
                  山・森・高原・大自然
                  <span className="text-xs font-normal text-stone-400 ml-1">(44件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">美林・竹林・原生林・カルスト・棚田・ロープウェイ——雄大な自然を五感で味わう旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-highland-resort-french-auberge-stay">
                  <Link href="/furusato-tax-highland-resort-french-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">高原リゾート＆美食フレンチオーベルジュ</span>
                  </Link>
                </li>
                <li key="furusato-tax-scenic-drives-highland-resort-stay">
                  <Link href="/furusato-tax-scenic-drives-highland-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本百名道の絶景ドライブルートと高原温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-bamboo-groves-stay">
                  <Link href="/furusato-tax-three-great-bamboo-groves-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大竹林＆風にそよぐ緑の回廊・静寂の美林と風雅名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-beautiful-forests-stay">
                  <Link href="/furusato-tax-three-great-beautiful-forests-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林＆天然木アロマと森林浴・癒やしのリトリート温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-beautiful-forests-wood-stay">
                  <Link href="/furusato-tax-three-great-beautiful-forests-wood-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林＆天然木アロマ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-cable-cars-ropeway-stay">
                  <Link href="/furusato-tax-three-great-cable-cars-ropeway-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大山岳ロープウェイ＆雲上パノラマ・絶景空中散歩のリゾート名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-calderas-geopark-stay">
                  <Link href="/furusato-tax-three-great-calderas-geopark-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大カルデラ＆地球の息吹・巨大火口原パノラマと名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-caves-ice-adventure-stay">
                  <Link href="/furusato-tax-three-great-caves-ice-adventure-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大氷穴・洞窟探検宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-caves-underground-stay">
                  <Link href="/furusato-tax-three-great-caves-underground-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鍾乳洞の神秘の地底美と山麓名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-forests-wood-villa-stay">
                  <Link href="/furusato-tax-three-great-forests-wood-villa-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美林の木漏れ日と森林セラピー・ウッドヴィラ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-giant-sacred-trees-stay">
                  <Link href="/furusato-tax-three-great-giant-sacred-trees-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大巨樹＆樹齢千年の神木パワースポット・森林浴名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-high-mountain-passes-stay">
                  <Link href="/furusato-tax-three-great-high-mountain-passes-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大急坂・天空峠道＆雲海パノラマ・絶景ドライブ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-highlands-resort-stay">
                  <Link href="/furusato-tax-three-great-highlands-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大高原＆爽快マウンテンリゾート・白樺と星空の露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-karsts-highland-drive-stay">
                  <Link href="/furusato-tax-three-great-karsts-highland-drive-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大カルスト台地＆絶景スカイドライブ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-karsts-highland-stay">
                  <Link href="/furusato-tax-three-great-karsts-highland-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大カルストの白銀石灰岩パノラマと高原リゾート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-limestone-caves-mystery-stay">
                  <Link href="/furusato-tax-three-great-limestone-caves-mystery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鍾乳洞＆神秘の地底美宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-limestone-caves-stay">
                  <Link href="/furusato-tax-three-great-limestone-caves-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鍾乳洞＆地底の神秘美・涼感アドベンチャー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-primeval-forests-nature-stay">
                  <Link href="/furusato-tax-three-great-primeval-forests-nature-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大原生林＆世界遺産ネイチャーリゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-scenic-passes-panorama-stay">
                  <Link href="/furusato-tax-three-great-scenic-passes-panorama-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大峠＆雲海パノラマ・歴史街道の難所と高原温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-scenic-wonders-stay">
                  <Link href="/furusato-tax-three-great-scenic-wonders-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇勝の壮麗な岩壁美と秘湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-stalactite-caves-stay">
                  <Link href="/furusato-tax-three-great-stalactite-caves-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大鍾乳石洞窟＆無数の石筍が創る地底宮殿・ジオアドベンチャー名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-strange-sceneries-geopark-stay">
                  <Link href="/furusato-tax-three-great-strange-sceneries-geopark-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇景＆奇岩怪石ジオパーク・絶景パノラマ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-wonders-rock-scenery-stay">
                  <Link href="/furusato-tax-three-great-wonders-rock-scenery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇勝＆巨岩奇峰パノラマ・大自然の彫刻美を愛でる宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-karst-plateaus-mountain-resort-stay">
                  <Link href="/furusato-tax-three-karst-plateaus-mountain-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大カルスト台地＆白亜の石灰岩パノラマ高原リゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-top100-hidden-paradise-stay">
                  <Link href="/furusato-tax-top100-hidden-paradise-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">秘境百選の隠れ宿と源泉秘湯オーベルジュ</span>
                  </Link>
                </li>
                <li key="furusato-tax-alps-trekking-mountain-resort-stay">
                  <Link href="/furusato-tax-alps-trekking-mountain-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本アルプス＆高山トレッキング山岳リゾート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-distillery-whisky-pairing-stay">
                  <Link href="/furusato-tax-distillery-whisky-pairing-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">国産ウイスキー蒸溜所＆銘酒ペアリング宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-diving-ocean-resort-stay">
                  <Link href="/furusato-tax-diving-ocean-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">海中展望＆ダイビング・シュノーケリング直結リゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-ise-kumano-sacred-power-spot-stay">
                  <Link href="/furusato-tax-ise-kumano-sacred-power-spot-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【お伊勢参り＆熊野古道×ふるさと納税】日本最強パワースポット巡礼と心洗われる老舗門前宿ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-japan-oldest-classic-hotel-heritage-stay">
                  <Link href="/furusato-tax-japan-oldest-classic-hotel-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本最古のクラシックリゾートホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-kominka-heritage-townhouse-auberge-stay">
                  <Link href="/furusato-tax-kominka-heritage-townhouse-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【古民家再生・町家オーベルジュ×ふるさと納税】築100年の土蔵・重伝建商家に泊まる文化財ステイ完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-kumano-kodo-world-heritage-stay">
                  <Link href="/furusato-tax-kumano-kodo-world-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">世界遺産・熊野古道の祈りの巡礼路と名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-kura-sauna-private-villa-charter-stay">
                  <Link href="/furusato-tax-kura-sauna-private-villa-charter-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">蔵サウナ＆一棟貸しプライベートヴィラ</span>
                  </Link>
                </li>
                <li key="furusato-tax-open-air-bath-with-majestic-fuji-view-stay">
                  <Link href="/furusato-tax-open-air-bath-with-majestic-fuji-view-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">富士山ビュー客室露天風呂宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-preservation-districts-heritage-stay">
                  <Link href="/furusato-tax-preservation-districts-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">重要伝統的建造物群保存地区（重伝建）の歴史町家宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-private-villa-hanare-hideaway-stay">
                  <Link href="/furusato-tax-private-villa-hanare-hideaway-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-remote-island-luxury-resort-stay">
                  <Link href="/furusato-tax-remote-island-luxury-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ</span>
                  </Link>
                </li>
                <li key="furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay">
                  <Link href="/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">夕映えリアス式海岸＆伊勢海老・鮑料理の海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-sea-of-clouds-sky-terrace-hotel-stay">
                  <Link href="/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">雲海テラス＆天空パノラマリゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-ski-snowboard-slope-resort-stay">
                  <Link href="/furusato-tax-ski-snowboard-slope-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ゲレンデ直結×白銀リゾート】スキー・スノボ＆雪見露天風呂をふるさと納税でお得に楽しむ旅</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-famous-waters-culinary-stay">
                  <Link href="/furusato-tax-three-famous-waters-culinary-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名水＆清冽な湧水仕込みの美食宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-precipitous-coasts-stay">
                  <Link href="/furusato-tax-three-great-precipitous-coasts-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名勝断崖海岸＆パノラマ海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-scenic-coasts-stay">
                  <Link href="/furusato-tax-three-great-scenic-coasts-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名勝海岸＆奇岩断崖パノラマ・白砂青松の絶景オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-spring-waters-stay">
                  <Link href="/furusato-tax-three-great-spring-waters-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名水・湧水水源地＆清流酒蔵グルメ・名水露天風呂宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 📸 絶景・夜景・星空・サンセット */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">📸</span>
                  絶景・夜景・星空・サンセット
                  <span className="text-xs font-normal text-stone-400 ml-1">(11件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">三大夜景・星空・夕日・イルミネーション——一生モノの景色と出会うフォトジェニック旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-lighthouse-cliff-ocean-panorama-stay">
                  <Link href="/furusato-tax-lighthouse-cliff-ocean-panorama-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">白亜の灯台＆断崖絶景オーシャンビュー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-new-three-major-night-views-sky-stay">
                  <Link href="/furusato-tax-new-three-major-night-views-sky-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">新日本三大夜景＆天空スカイパノラマ宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-starry-sky-open-air-bath-observatory-stay">
                  <Link href="/furusato-tax-starry-sky-open-air-bath-observatory-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">満天の星空露天風呂＆天体ドーム天文台リゾート</span>
                  </Link>
                </li>
                <li key="furusato-tax-sunset-ocean-magic-hour-stay">
                  <Link href="/furusato-tax-sunset-ocean-magic-hour-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">絶景夕日・サンセット特等席の海宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-illuminations-resort-stay">
                  <Link href="/furusato-tax-three-great-illuminations-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大イルミネーション直結リゾートホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-illuminations-stay">
                  <Link href="/furusato-tax-three-great-illuminations-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大イルミネーション＆光の祭典・ファンタジーリゾートホテル宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-night-views-romantic-stay">
                  <Link href="/furusato-tax-three-great-night-views-romantic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大夜景＆煌めく光の海・100万ドルのパノラマ名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-train-views-scenic-stay">
                  <Link href="/furusato-tax-three-great-train-views-scenic-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大車窓を望む絶景鉄道旅と名湯リゾート宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-train-window-views-stay">
                  <Link href="/furusato-tax-three-great-train-window-views-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大車窓＆絶景スイッチバック・高原パノラマ温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-major-night-view-luxury-hotel-stay">
                  <Link href="/furusato-tax-three-major-night-view-luxury-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大夜景＆天空スカイラウンジホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-scenic-views-heritage-stay">
                  <Link href="/furusato-tax-three-scenic-views-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三景の絶景オーシャンビュー宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🎆 祭り・花火・イベント */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🎆</span>
                  祭り・花火・イベント
                  <span className="text-xs font-normal text-stone-400 ml-1">(8件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">三大祭り・花火大会・奇祭・七夕——熱狂と感動を共有する日本の夏と伝統行事</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-three-great-bon-dances-heritage-stay">
                  <Link href="/furusato-tax-three-great-bon-dances-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大盆踊り＆伝統文化・城下町宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-curious-festivals-heritage-stay">
                  <Link href="/furusato-tax-three-great-curious-festivals-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇祭＆天下の熱狂カルチャー宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-festivals-heritage-stay">
                  <Link href="/furusato-tax-three-great-festivals-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大美祭＆伝統工芸・山鉾の街の老舗旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-fire-festivals-passion-stay">
                  <Link href="/furusato-tax-three-great-fire-festivals-passion-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大火祭り＆燃え盛る情熱の伝統宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-fireworks-resort-stay">
                  <Link href="/furusato-tax-three-great-fireworks-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大花火大会の特等席と快適眺望ホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-pottery-festivals-stay">
                  <Link href="/furusato-tax-three-great-pottery-festivals-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大陶器まつり＆名窯の里・器と美食を愛でる工芸温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-strange-festivals-stay">
                  <Link href="/furusato-tax-three-great-strange-festivals-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇祭＆天下の奇祭・熱狂の伝統文化と歴史名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-tanabata-festivals-stay">
                  <Link href="/furusato-tax-three-great-tanabata-festivals-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大七夕まつり＆星空短冊散策宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🍶 日本酒・ワイン・地ビール */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🍶</span>
                  日本酒・ワイン・地ビール
                  <span className="text-xs font-normal text-stone-400 ml-1">(7件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">酒蔵・ワイナリー・クラフトブルワリー——醸造の里で味わう大人の旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-craft-beer-brewery-hotel-stay">
                  <Link href="/furusato-tax-craft-beer-brewery-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">クラフトビール＆ご当地ブルワリーホテル</span>
                  </Link>
                </li>
                <li key="furusato-tax-craft-cider-hop-brewery-stay">
                  <Link href="/furusato-tax-craft-cider-hop-brewery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">クラフトシードル＆ご当地ホップ醸造宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-sake-bar-unlimited-tasting-stay">
                  <Link href="/furusato-tax-sake-bar-unlimited-tasting-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">地酒BAR＆日本酒利き酒し放題の名湯宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sake-capitals-brewery-stay">
                  <Link href="/furusato-tax-three-great-sake-capitals-brewery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大酒どころ＆酒蔵ツーリズム宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-master-brewers-toji-sake-inn-stay">
                  <Link href="/furusato-tax-three-master-brewers-toji-sake-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-winery-craft-beer-auberge-stay">
                  <Link href="/furusato-tax-winery-craft-beer-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ワイン＆地ビール×ふるさと納税】ぶどう畑を望むワイナリーホテル＆クラフト醸造オーベルジュ旅</span>
                  </Link>
                </li>
                <li key="furusato-tax-winery-vineyard-auberge-stay">
                  <Link href="/furusato-tax-winery-vineyard-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">銘酒ワイナリー＆葡萄畑オーベルジュ</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🎨 ものづくり・伝統工芸 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🎨</span>
                  ものづくり・伝統工芸
                  <span className="text-xs font-normal text-stone-400 ml-1">(8件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">和紙・陶芸・漆器・刃物・瓦・ガラス——職人技に触れる大人の知的好奇心旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-six-ancient-kilns-pottery-stay">
                  <Link href="/furusato-tax-six-ancient-kilns-pottery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-cutlery-towns-craft-stay">
                  <Link href="/furusato-tax-three-great-cutlery-towns-craft-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大刃物の里＆職人クラフト宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-glass-craft-towns-stay">
                  <Link href="/furusato-tax-three-great-glass-craft-towns-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大ガラス工芸の町＆光の芸術・切子の輝きと風雅名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-lacquerwares-stay">
                  <Link href="/furusato-tax-three-great-lacquerwares-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大漆器＆匠の塗りと会席料理・伝統工芸名旅館宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-roof-tile-towns-stay">
                  <Link href="/furusato-tax-three-great-roof-tile-towns-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大瓦の町＆美しいいぶし銀の街並み・赤瓦景観と名湯美食宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-sake-vessels-pottery-stay">
                  <Link href="/furusato-tax-three-great-sake-vessels-pottery-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大酒器＆銘酒を引き立てる名陶の里・窯元巡りと美食名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-washi-craft-heritage-stay">
                  <Link href="/furusato-tax-three-great-washi-craft-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大和紙の里＆工芸温泉宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-washi-papers-stay">
                  <Link href="/furusato-tax-three-great-washi-papers-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大和紙＆清流の里の手漉き体験・紙漉き文化の湯宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🌉 名橋・建築遺産 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🌉</span>
                  名橋・建築遺産
                  <span className="text-xs font-normal text-stone-400 ml-1">(6件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">眼鏡橋・錦帯橋・奇橋・登録有形文化財——建築美を訪ねるヘリテージ旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-three-famous-bridges-heritage-stay">
                  <Link href="/furusato-tax-three-famous-bridges-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三名橋＆歴史遺産を望むリバーサイド名宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-bridges-heritage-stay">
                  <Link href="/furusato-tax-three-great-bridges-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名橋の歴史美と城下町名門宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-bridges-history-stay">
                  <Link href="/furusato-tax-three-great-bridges-history-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大名橋＆伝統建築美を渡る歴史街道宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-curious-bridges-canyon-stay">
                  <Link href="/furusato-tax-three-great-curious-bridges-canyon-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三奇橋＆スリル満点の名橋・渓谷宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-stone-bridges-heritage-stay">
                  <Link href="/furusato-tax-three-great-stone-bridges-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大眼鏡橋＆石造アーチの造形美・川風感じる水辺宿</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-great-unusual-bridges-stay">
                  <Link href="/furusato-tax-three-great-unusual-bridges-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大奇橋＆木造アーチ・断崖渓谷の刎橋と名湯宿</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 🌸 四季の旅・季節限定 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">🌸</span>
                  四季の旅・季節限定
                  <span className="text-xs font-normal text-stone-400 ml-1">(1件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">桜・紅葉・冬景色——その季節だけの特別な風景を追いかける旅</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-three-great-night-cherry-blossoms-stay">
                  <Link href="/furusato-tax-three-great-night-cherry-blossoms-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">日本三大夜桜の名所と春の宵を彩る名門ホテル</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 👨‍👩‍👧 旅行スタイル別 */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">👨‍👩‍👧</span>
                  旅行スタイル別
                  <span className="text-xs font-normal text-stone-400 ml-1">(6件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">家族旅行・赤ちゃん連れ・3世代・ソロ・カップル・グランピング・宿坊——あなたの旅に合う1軒</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-anniversary-luxury-suite-villa-stay">
                  <Link href="/furusato-tax-anniversary-luxury-suite-villa-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【一度は泊まりたい憧れの最高峰宿】記念日・プロポーズに選ぶ極上スイート＆ヴィラ</span>
                  </Link>
                </li>
                <li key="furusato-tax-luxury-glamping-bbq-dome-stay">
                  <Link href="/furusato-tax-luxury-glamping-bbq-dome-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【豪華グランピング×ふるさと納税】手ぶら炭火BBQ＆薪割り焚き火！星空ドームテント完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-sky-open-air-glamping-resort-stay">
                  <Link href="/furusato-tax-sky-open-air-glamping-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">天空の露天風呂付きグランピング＆星空ドーム</span>
                  </Link>
                </li>
                <li key="furusato-tax-themepark-aquarium-family-hotel-stay">
                  <Link href="/furusato-tax-themepark-aquarium-family-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">水族館・テーマパーク直結ホテル×ふるさと納税活用ガイド【2026年最新】鴨川・白浜・富士急のパスポート付き宿泊パック</span>
                  </Link>
                </li>
                <li key="furusato-tax-three-generation-family-luxury-stay">
                  <Link href="/furusato-tax-three-generation-family-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂・離れ宿完全ガイド</span>
                  </Link>
                </li>
                <li key="furusato-tax-welcome-baby-family-kids-stay">
                  <Link href="/furusato-tax-welcome-baby-family-kids-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【赤ちゃん・未就学児連れ安心×ふるさと納税】ウェルカムベビー認定宿＆離乳食・貸切風呂完備の家族温泉旅ガイド</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* 📖 ふるさと納税 使い方ガイド */}
            <section className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 px-6 py-4 border-b border-stone-200/60">
                <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  ふるさと納税 使い方ガイド
                  <span className="text-xs font-normal text-stone-400 ml-1">(1件)</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">予約済みでも使えるあとから適用テクなど、実践ノウハウはこちら</p>
              </div>
              <ul className="p-4 grid gap-0.5 sm:grid-cols-2">
                <li key="furusato-tax-travel-after-booking-discount-guide">
                  <Link href="/furusato-tax-travel-after-booking-discount-guide" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                    <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                    <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【予約済みでも間に合う】楽天トラベル「ふるさと納税クーポンあとから適用」完全攻略ガイド</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-amber-50">
            まずは控除上限額をシミュレーション
          </h2>
          <p className="text-stone-300 text-sm mb-6 max-w-2xl mx-auto">
            「自分はいくらまで寄付できるのか？」を知ることが、ふるさと納税旅行の第一歩。楽天ふるさと納税の無料シミュレーターなら、年収と家族構成を入力するだけで30秒で分かります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm border border-amber-400/30"
            >
              ふるさと納税トラベルクーポンをチェック →
            </a>
          </div>
        </section>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-8 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の制度・プラン内容は各公式サイトでご確認ください。</p>
          <p className="mt-1">※ふるさと納税の控除上限額は年収・家族構成・他の控除により異なります。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
