import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '【超初心者向け】ふるさと納税で旅行・ホテルに安く泊まる完全マニュアル｜仕組み・お金の流れ・失敗しない使い方を徹底解説【2026年最新】',
  description: 'ふるさと納税を一度も使ったことがない完全初心者でも大丈夫！「なぜ旅行代金が安くなるのか」「実質2,000円ってどういうこと？」「確定申告なしでスマホで終わるワンストップ特例」「予約済みの宿へのあとから適用方法」まで、失敗ゼロで誰でもできる手順をステップバイステップで完全解説。',
  keywords: [
    'ふるさと納税 旅行 使い方',
    'ふるさと納税 トラベル 初心者',
    'ふるさと納税 ホテル 安く泊まる',
    'ふるさと納税 仕組み 実質2000円',
    '楽天トラベル ふるさと納税 クーポン 使い方',
    'ワンストップ特例 楽天トラベル',
    'ふるさと納税 あとから割引 手順',
    'ふるさと納税 旅行 失敗'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-travel-beginners-complete-guide' },
  openGraph: {
    title: '【超初心者向け】ふるさと納税で旅行・ホテルに安く泊まる完全マニュアル｜仕組み・お金の流れ・失敗しない使い方を徹底解説【2026年最新】',
    description: 'ふるさと納税を一度も使ったことがない完全初心者でも大丈夫！仕組み、お金の流れ、確定申告不要のワンストップ特例、予約済みのホテルへの適用法まで完全解説。',
    url: baseUrl + '/furusato-tax-travel-beginners-complete-guide',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoTaxTravelBeginnersGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ふるさと納税で旅行できる仕組みはどうなっていますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '旅行先の自治体に寄付を行うと、返礼品として「楽天トラベルクーポン（寄付額の最大30％相当）」が即時〜数日で付与されます。さらに、寄付した金額のうち2,000円を超える部分は翌年の所得税・住民税から控除されるため、実質2,000円の負担だけで数万円分の旅行割引を受けられます。',
        },
      },
      {
        '@type': 'Question',
        name: '会社員ですが、確定申告をしないと利用できませんか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、確定申告は不要です。「ワンストップ特例制度」を使えば、寄付時にオンライン（マイナンバーカードをスマホで読み取るだけ）で申請が5分で完了します。年間5自治体までの寄付であれば確定申告の必要は一切ありません。',
        },
      },
      {
        '@type': 'Question',
        name: 'すでに予約してしまった旅行やホテルにも使えますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、使えます。楽天トラベルの「クーポンあとから適用」機能により、すでに予約済みの宿泊であっても、チェックイン前であれば寄付後に獲得したクーポンを後から適用して宿泊代金を割引できます。',
        },
      },
      {
        '@type': 'Question',
        name: 'クーポンの有効期限はどれくらいですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '楽天ふるさと納税トラベルクーポンの有効期限は「発行から3年間」です。年末の駆け込みで寄付枠を消化しておき、翌年や翌々年の大型連休、記念日旅行にゆっくり使うことができます。',
        },
      },
      {
        '@type': 'Question',
        name: '初心者が特に注意すべき失敗ポイントは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '最も多い失敗は「寄付先自治体とホテルの所在地の不一致」「楽天IDと住民税を払っている本人の名義違い」「年間控除上限額の超過」の3点です。泊まりたい宿がどの市町村にあるかを必ず確認し、寄付上限額シミュレーターで上限を確認した上で、税金を納めている本人の楽天アカウントから寄付を行ってください。',
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
      { '@type': 'ListItem', position: 3, name: 'ふるさと納税×旅行 超初心者向け完全マニュアル', item: baseUrl + '/furusato-tax-travel-beginners-complete-guide' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行費の節約術ガイド</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">初心者向け完全マニュアル</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-10 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            はじめてのふるさと納税トラベル 完全攻略
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-6 leading-snug tracking-tight text-amber-50">
            【超初心者向け】ふるさと納税で旅行・ホテルに安く泊まる完全マニュアル
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6">
            「ふるさと納税って聞くけど、手続きが難しそう…」「確定申告なんてやったことがない」「本当に安くなるの？」とためらっていませんか？<br />
            実は、会社員なら<strong>マイナンバーカードをスマホでピッとするだけ（確定申告なし）</strong>で、たった2,000円の自己負担で憧れの温泉旅館や高級リゾートに数万円引きで泊まることができます。<br />
            この記事では、これまで一度もふるさと納税をやったことがない方に向けて、お金の流れから具体的なスマホ操作、失敗しない注意点まで、誰でもわかる言葉で徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 面倒な確定申告は不要（スマホで5分申請）</span>
            <span>✓ すでに予約した宿にも「あとから割引」可能</span>
            <span>✓ クーポン有効期限はたっぷり3年間</span>
          </div>

          <div className="mt-8">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベル公式ページを見る →
            </a>
          </div>
        </header>

        {/* ハブページへの誘導バナー */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="text-xs font-bold text-amber-800 mb-1">🏨 全国238のテーマ別厳選宿はこちら</div>
            <p className="text-xs text-stone-700">三大和牛・露天風呂・名城・絶景など、クーポンが使える宿をジャンル別に探したい方はハブページへ！</p>
          </div>
          <Link
            href="/travel-savings-guide"
            className="shrink-0 inline-flex items-center gap-1.5 bg-stone-900 text-amber-300 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-stone-800 transition"
          >
            テーマ別おすすめ宿一覧へ ➔
          </Link>
        </div>

        {/* 目次 */}
        <nav className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 mb-12">
          <h2 className="text-base font-bold text-stone-800 mb-3">📑 目次（タップでジャンプできます）</h2>
          <ol className="space-y-2 text-xs sm:text-sm text-stone-600">
            <li><a href="#section-1" className="hover:text-amber-700 transition">1. 「ふるさと納税で旅行」ってどういうこと？基本の仕組み</a></li>
            <li><a href="#section-2" className="hover:text-amber-700 transition">2. なぜ「実質2,000円」になるの？お金の流れを図解</a></li>
            <li><a href="#section-3" className="hover:text-amber-700 transition">3. あなたはいくら寄付できる？年収別上限額の早見表</a></li>
            <li><a href="#section-4" className="hover:text-amber-700 transition">4. 確定申告不要！「ワンストップ特例」のカンタン申請法</a></li>
            <li><a href="#section-5" className="hover:text-amber-700 transition">5. 実際の予約手順（予約前・予約後の2パターン）</a></li>
            <li><a href="#section-6" className="hover:text-amber-700 transition">6. 初心者が絶対避けるべき「5つの落とし穴・失敗例」</a></li>
            <li><a href="#section-7" className="hover:text-amber-700 transition">7. よくある質問（FAQ）</a></li>
          </ol>
        </nav>

        {/* セクション1: 基本の仕組み */}
        <section id="section-1" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">STEP 1</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              「ふるさと納税で旅行」ってどういうこと？基本の仕組み
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 space-y-4 text-sm text-stone-700 leading-relaxed">
            <p>
              ふるさと納税というと、「お米」や「お肉」などの特産品が自宅に届くイメージをお持ちの方が多いかもしれません。
            </p>
            <p>
              しかし、楽天ふるさと納税では<strong>「全国の自治体にあるホテル・温泉旅館で使える電子宿泊クーポン」</strong>が返礼品として用意されています。
            </p>
            <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-2">💡 一言で言うと…</h3>
              <p className="text-amber-950 font-medium">
                「旅行先の市町村に寄付すると、その寄付額の最大30％相当の宿泊クーポンがもらえて、寄付したお金は翌年の税金から引かれる」制度です。
              </p>
            </div>
            <p>
              例えば、伊豆の温泉宿に泊まりたい場合、伊豆市に寄付をすると、伊豆市内の対象宿で使えるクーポンが手に入ります。
              モノではなく「旅の体験」に税金を充てられるため、冷蔵庫の空き容量を気にする必要もなく、家族旅行や自分へのご褒美に最も人気の返礼品となっています。
            </p>
          </div>
        </section>

        {/* セクション2: 実質2,000円の仕組み */}
        <section id="section-2" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">STEP 2</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              なぜ「実質2,000円」になるの？お金の流れを図解
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 space-y-6 text-sm text-stone-700 leading-relaxed">
            <p>
              「実質2,000円って怪しくない？」「あとから請求が来るんじゃないの？」と不安に思う初心者の方も非常に多いです。
              実態はとてもシンプルで、<strong>「来年どうせ支払う住民税を、いま旅行代金に前払いしているだけ」</strong>なのです。
            </p>

            {/* お金の流れボックス */}
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-300">
              <h3 className="font-bold text-stone-900 text-base mb-4 text-center">
                📊 【例】年収600万円の人が「50,000円」寄付した場合
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <div className="text-xs text-stone-500 font-bold mb-1">① いま支払うお金</div>
                  <div className="text-2xl font-black text-rose-600 mb-1">50,000円</div>
                  <p className="text-xs text-stone-500">楽天で旅行先自治体に寄付（クレカ払いOK）</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <div className="text-xs text-amber-700 font-bold mb-1">② 即座にもらえる</div>
                  <div className="text-2xl font-black text-amber-600 mb-1">15,000円分</div>
                  <p className="text-xs text-stone-500">宿泊割引クーポン獲得（最大30%還元・有効3年）</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <div className="text-xs text-blue-700 font-bold mb-1">③ 翌年引かれる税金</div>
                  <div className="text-2xl font-black text-blue-600 mb-1">48,000円</div>
                  <p className="text-xs text-stone-500">翌年6月からの住民税が丸々安くなる</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 text-center">
                <p className="text-stone-800 font-bold text-base">
                  結果：支払った50,000円 − 戻ってくる48,000円 ＝ <span className="text-rose-600 text-xl font-black">自己負担はたったの2,000円！</span>
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  2,000円の手数料を払って、15,000円分の宿泊クーポンを手に入れた計算になります（差引13,000円の純得）。
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-500">
              ※楽天ポイントも寄付額に対して付与されるため、SPUやお買い物マラソンを活用すると、実質2,000円の負担すらポイント還元でプラスになってしまうことも珍しくありません。
            </p>
          </div>
        </section>

        {/* セクション3: 年収別上限額の早見表 */}
        <section id="section-3" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">STEP 3</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              あなたはいくら寄付できる？年収別上限額の早見表
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 space-y-4 text-sm text-stone-700 leading-relaxed">
            <p>
              ふるさと納税で最も重要なのは、<strong>「自分が自己負担2,000円で寄付できる上限額（控除限度額）」</strong>を知ることです。
              上限を超えた金額はただの自腹（寄付）になってしまうので、必ず上限額の範囲内で寄付を行いましょう。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 border-b border-stone-300">
                    <th className="p-3 font-bold">年収（額面）</th>
                    <th className="p-3 font-bold">独身 / 共働き</th>
                    <th className="p-3 font-bold">夫婦（配偶者控除有）</th>
                    <th className="p-3 font-bold">夫婦＋子1人（高校生）</th>
                    <th className="p-3 font-bold text-amber-800">もらえるクーポン目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-3 font-bold">300万円</td>
                    <td className="p-3">約28,000円</td>
                    <td className="p-3">約19,000円</td>
                    <td className="p-3">約11,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約8,400円分</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold">400万円</td>
                    <td className="p-3">約42,000円</td>
                    <td className="p-3">約33,000円</td>
                    <td className="p-3">約25,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約12,600円分</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">500万円</td>
                    <td className="p-3">約61,000円</td>
                    <td className="p-3">約49,000円</td>
                    <td className="p-3">約40,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約18,300円分</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold">600万円</td>
                    <td className="p-3">約77,000円</td>
                    <td className="p-3">約69,000円</td>
                    <td className="p-3">約60,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約23,100円分</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">700万円</td>
                    <td className="p-3">約108,000円</td>
                    <td className="p-3">約86,000円</td>
                    <td className="p-3">約78,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約32,400円分</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="p-3 font-bold">800万円</td>
                    <td className="p-3">約129,000円</td>
                    <td className="p-3">約120,000円</td>
                    <td className="p-3">約111,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約38,700円分</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">1,000万円</td>
                    <td className="p-3">約176,000円</td>
                    <td className="p-3">約166,000円</td>
                    <td className="p-3">約159,000円</td>
                    <td className="p-3 text-amber-700 font-bold">〜約52,800円分</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-stone-500 mt-2">
              ※上記は住宅ローン控除や医療費控除などを考慮しない目安です。より正確な金額は楽天ふるさと納税の「詳細シミュレーター（無料）」で源泉徴収票を見ながら確認することをおすすめします。
            </p>
          </div>
        </section>

        {/* セクション4: ワンストップ特例 */}
        <section id="section-4" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">STEP 4</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              確定申告不要！「ワンストップ特例」のカンタン申請法
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 space-y-4 text-sm text-stone-700 leading-relaxed">
            <p>
              「税金の手続きなんて難しそうで無理…」という会社員の方のために作られたのが<strong>「ワンストップ特例制度」</strong>です。
              以下の条件に当てはまる方なら、確定申告は一切不要です。
            </p>

            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 mb-2">✅ ワンストップ特例が使える条件</h3>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-emerald-950">
                <li>もともと確定申告をする必要がない会社員・公務員であること</li>
                <li>1年間（1月1日〜12月31日）で寄付する自治体の数が「5自治体以内」であること</li>
              </ul>
            </div>

            <h3 className="font-bold text-stone-900 text-base pt-2">📱 いまは「スマホで完結（紙の郵送も不要）」が主流！</h3>
            <p>
              かつては申請書を印刷して身分証コピーを貼り、封筒に入れて切手を貼って郵送する必要がありましたが、現在は<strong>「自治体マイページ」等のオンラインワンストップアプリ</strong>に対応する自治体が急増しています。
            </p>
            <ol className="list-decimal list-inside space-y-2 bg-stone-50 p-4 rounded-xl text-xs sm:text-sm text-stone-700">
              <li>楽天ふるさと納税で寄付する際、「ワンストップ特例を希望する」にチェックを入れる</li>
              <li>寄付完了後、自治体から届くメールまたはハガキに記載のオンライン申請URLを開く</li>
              <li>スマホでマイナンバーカードをかざして暗証番号を入力する（約3分で完了！）</li>
            </ol>
            <p className="text-xs text-stone-500">
              ※翌年1月10日までに申請を完了させる必要があります。オンラインなら年明けギリギリでも間に合います。
            </p>
          </div>
        </section>

        {/* セクション5: 予約手順 */}
        <section id="section-5" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">STEP 5</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              実際の予約手順（予約前・予約後の2パターン）
            </h2>
          </div>
          <div className="space-y-6">
            {/* パターンA */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8">
              <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-stone-800 text-white text-xs px-2.5 py-0.5 rounded-full">パターンA</span>
                これから旅行先・ホテルを決めて予約する場合（通常手順）
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>泊まりたいホテルと自治体を確認する</strong><br />
                    楽天トラベルで泊まりたい宿を見つけ、その宿が所在する市町村（例：静岡県伊東市）を確認します。
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>楽天ふるさと納税でトラベルクーポンを申し込む</strong><br />
                    その自治体のトラベルクーポン（返礼品）を寄付購入します。通常、数分〜翌日には楽天トラベルの「マイクーポン」に付与されます。
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>ホテル予約画面でクーポンを選択して完了！</strong><br />
                    支払い情報入力画面で付与されたふるさと納税クーポンにチェックを入れます。合計金額からクーポン額が丸々差し引かれます。
                  </div>
                </div>
              </div>
            </div>

            {/* パターンB */}
            <div className="bg-gradient-to-r from-amber-50/70 to-orange-50/70 rounded-2xl shadow-sm border border-amber-300 p-6 md:p-8">
              <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs px-2.5 py-0.5 rounded-full">パターンB</span>
                【神機能】すでに予約しちゃった宿にあとから適用する場合
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 mb-4">
                「もう旅行の予約取っちゃったよ…」という方も諦める必要はありません！楽天トラベルは<strong>「クーポンあとから適用」</strong>に対応しています。
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-stone-700 bg-white/80 p-4 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                  <div>予約しているホテルの所在地自治体のクーポンを楽天ふるさと納税で寄付</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                  <div>クーポンが付与されたら、楽天トラベルの「個人ページ（現在の予約）」を開く</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                  <div>該当の予約にある「クーポンの利用条件を変更する」ボタンをタップ</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">4</span>
                  <div>獲得したトラベルクーポンを選択して更新 → 予約金額が即座に割引されます！</div>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                ※チェックイン当日の一定時間前までであれば、予約済みの宿泊にもあとからクーポンを当てられます（一部除外条件あり）。
              </p>
            </div>
          </div>
        </section>

        {/* セクション6: 5つの落とし穴 */}
        <section id="section-6" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">CAUTION</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              初心者が絶対避けるべき「5つの落とし穴・失敗例」
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 md:p-8 space-y-4 text-sm text-stone-700 leading-relaxed">
            <p>
              お得すぎるふるさと納税ですが、ルールを知らないと「控除を受けられなかった」「クーポンが使えなかった」というトラブルに繋がります。以下の5つだけは必ずチェックしてください。
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <h3 className="font-bold text-stone-900 text-sm">❌ 落とし穴1：泊まりたい宿と自治体がズレている</h3>
                <p className="text-xs text-stone-600 mt-1">
                  例えば「箱根温泉」に泊まりたい場合、寄付先は「神奈川県箱根町」でなければなりません。隣の小田原市や熱海市に寄付しても箱根の宿には使えません。必ず「宿の住所」を確認してから寄付してください。
                </p>
              </div>

              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <h3 className="font-bold text-stone-900 text-sm">❌ 落とし穴2：楽天IDの名義と税金を払う人の名義が違う</h3>
                <p className="text-xs text-stone-600 mt-1">
                  専業主婦（夫）の楽天アカウントで寄付し、支払いを配偶者の名義にすると、住民税控除が正しく受けられなくなります。<strong>「住民税を納めている本人の楽天ID」</strong>でログインして寄付を行ってください。
                </p>
              </div>

              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <h3 className="font-bold text-stone-900 text-sm">❌ 落とし穴3：控除上限額を大幅に超えて寄付してしまう</h3>
                <p className="text-xs text-stone-600 mt-1">
                  上限6万円の人が10万円寄付した場合、オーバーした4万円は単なる寄付（自腹）になります。まずはシミュレーターで上限額を確かめてから金額を決めましょう。
                </p>
              </div>

              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <h3 className="font-bold text-stone-900 text-sm">❌ 落とし穴4：ワンストップ特例の申請期限（翌年1月10日）を過ぎてしまう</h3>
                <p className="text-xs text-stone-600 mt-1">
                  期限内に申請しなかった場合、自動的には控除されません（その場合は確定申告をすれば後からでも控除を受けられますが、手間が増えます）。寄付したらその日のうちにオンライン申請を済ませるのが鉄則です。
                </p>
              </div>

              <div className="border-l-4 border-rose-500 pl-4 py-1">
                <h3 className="font-bold text-stone-900 text-sm">❌ 落とし穴5：年内に6自治体以上に寄付してワンストップが無効になる</h3>
                <p className="text-xs text-stone-600 mt-1">
                  ワンストップ特例が使えるのは「年間5自治体まで」です。6自治体以上に寄付した時点で、すべての寄付について確定申告が必須になります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション7: FAQ */}
        <section id="section-7" className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">Q&A</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-800">
              よくある質問（FAQ）
            </h2>
          </div>

          <div className="space-y-3">
            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-4 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                クーポンの有効期限は本当に3年間もあるの？
              </summary>
              <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                はい、楽天ふるさと納税トラベルクーポンの有効期限は「発行から3年間」です。年末の駆け込みで枠を使い切っておき、来年や再来年の旅行にゆっくり使うことができます。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-4 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                他の割引クーポンやポイントと併用できる？
              </summary>
              <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                併用可能です。楽天トラベルの「全国旅行支援クーポン」「宿独自割引クーポン」「早割プラン」「楽天ポイント利用」などと重ねて使えるため、驚くほど安く宿泊できます。
              </div>
            </details>

            <details className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden group">
              <summary className="p-4 cursor-pointer font-bold text-stone-800 hover:bg-stone-50 transition flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-amber-500 group-open:rotate-90 transition-transform">▸</span>
                家族旅行で複数部屋を予約する場合でも使える？
              </summary>
              <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                1回の予約であれば複数部屋・連泊・複数名利用の合計金額に対してクーポンが適用されます。上限額が大きい方は一括して家族全員分の旅行代金をカバーできます。
              </div>
            </details>
          </div>
        </section>

        {/* 次のアクション案内（ハブページへの強力な導線） */}
        <section className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-3 text-amber-50">
            仕組みが分かったら、泊まりたい宿を探してみよう！
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
            当サイトでは、全国のふるさと納税対象宿を「三大和牛」「露天風呂」「名城」「大自然」「家族旅行」など13ジャンル・238テーマに分類して徹底ガイドしています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/travel-savings-guide"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm"
            >
              🏨 全238テーマの厳選宿ハブページを見る ➔
            </Link>

            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl border border-white/20 transition text-sm"
            >
              楽天トラベル ふるさと納税公式 ➔
            </a>
          </div>
        </section>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の法令・各制度に基づく情報です。最新情報は各自治体・楽天ふるさと納税公式サイトをご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
