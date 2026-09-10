import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【道後温泉×ふるさと納税】日本最古の名湯・道後温泉本館＆飛鳥乃湯泉！名門老舗宿ガイド｜ふなや・道後御湯・茶玻瑠',
  description: '三千年の歴史を誇る日本最古の温泉・愛媛県道後温泉を楽天ふるさと納税でお得に贅沢旅！創業三百九十余年・皇室や夏目漱石ゆかりの名門「ふなや」、全室客室露天風呂付き現代湯治のラグジュアリー宿「道後御湯」、本館すぐ隣・屋上露天風呂の「茶玻瑠」を徹底比較。伊予牛会席や松山市トラベルクーポン活用術を解説。',
  keywords: '道後温泉 ふるさと納税,道後温泉本館 宿 ふるさと納税,道後温泉 ふなや クーポン,道後御湯 ふるさと納税,茶玻瑠 松山市 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-honkan-heritage-stay',
  },
  openGraph: {
    title: '【道後温泉×ふるさと納税】日本最古の名湯・道後温泉本館＆飛鳥乃湯泉！名門老舗宿ガイド｜ふなや・道後御湯・茶玻瑠',
    description: '三千年の歴史を誇る日本最古の温泉・愛媛県道後温泉を楽天ふるさと納税でお得に贅沢旅！創業三百九十余年・皇室や夏目漱石ゆかりの名門「ふなや」、全室客室露天風呂付き現代湯治のラグジュアリー宿「道後御湯」、本館すぐ隣・屋上露天風呂の「茶玻瑠」を徹底比較。伊予牛会席や松山市トラベルクーポン活用術を解説。',
    url: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-honkan-heritage-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【道後温泉×ふるさと納税】日本最古の名湯・道後温泉本館＆飛鳥乃湯泉！名門老舗宿ガイド｜ふなや・道後御湯・茶玻瑠',
    description: '三千年の歴史を誇る日本最古の温泉・愛媛県道後温泉を楽天ふるさと納税でお得に贅沢旅！創業三百九十余年・皇室や夏目漱石ゆかりの名門「ふなや」、全室客室露天風呂付き現代湯治のラグジュアリー宿「道後御湯」、本館すぐ隣・屋上露天風呂の「茶玻瑠」を徹底比較。伊予牛会席や松山市トラベルクーポン活用術を解説。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T16:45:00+09:00',
    dateModified: '2026-09-10T16:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-dogo-onsen-honkan-heritage-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【道後温泉×ふるさと納税】日本最古の名湯・道後温泉本館＆飛鳥乃湯泉！名門老舗宿ガイド｜ふなや・道後御湯・茶玻瑠</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>愛媛県松山市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【道後温泉×ふるさと納税】日本最古の名湯・道後温泉本館＆飛鳥乃湯泉！名門老舗宿ガイド｜ふなや・道後御湯・茶玻瑠
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          三千年の歴史を誇る日本最古の温泉・愛媛県道後温泉を楽天ふるさと納税でお得に贅沢旅！創業三百九十余年・皇室や夏目漱石ゆかりの名門「ふなや」、全室客室露天風呂付き現代湯治のラグジュアリー宿「道後御湯」、本館すぐ隣・屋上露天風呂の「茶玻瑠」を徹底比較。伊予牛会席や松山市トラベルクーポン活用術を解説。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            神話の時代から湧き続ける日本最古の名湯——保存修理を終えた道後温泉本館と老舗名宿で過ごす優雅な休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            愛媛県松山市に位置する道後温泉は、兵庫の有馬、和歌山の白浜と並び「日本三古湯」の一つに数えられる三千年の歴史を持つ名湯です。白鷺が傷を癒やした伝説や、聖徳太子の来訪、そして文豪・夏目漱石の小説『坊っちゃん』の舞台としても広く親しまれています。温泉街の中央に堂々とそびえる「道後温泉本館」は、明治27年に建てられた国の重要文化財。全館保存修理工事を経て美しく甦り、木造多層の城郭風建築と「振鷺閣（しんろかく）」から響く刻太鼓の音が、旅情を心地よく刺激します。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            道後温泉の湯は、アルカリ性単純温泉で刺激が少なく滑らかな肌触りが特徴の「美人の湯」。本館や飛鳥乃湯泉の外湯散策を楽しんだ後は、宿で瀬戸内海の新鮮な真鯛を使った名物「鯛めし」や、柔らかくジューシーな「伊予牛」の会席料理に舌鼓を打つ極上の夜が待っています。愛媛県松山市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、四国・愛媛の豊かな歴史と食文化を堪能する特別な温泉旅行が叶います。
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                
                <tr>
                  <td className="p-3 font-bold text-amber-900">道後温泉　ふなや</td>
                  <td className="p-3 font-bold">★ 4.74</td>
                  <td className="p-3 text-stone-600">創業三百九十余年・皇族や文豪に愛された道後屈指の名門！千五百坪の自然庭園と渓流足湯</td>
                  <td className="p-3 text-stone-600">歴史と品格の最高峰ステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">道後御湯</td>
                  <td className="p-3 font-bold">★ 4.92</td>
                  <td className="p-3 text-stone-600">全室に温泉露天風呂を完備！現代湯治をコンセプトにした大人の洗練ラグジュアリーホテル</td>
                  <td className="p-3 text-stone-600">大人の洗練・絶景プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">道後温泉　茶玻瑠</td>
                  <td className="p-3 font-bold">★ 4.13</td>
                  <td className="p-3 text-stone-600">道後温泉本館まで徒歩1分！道後初の屋上露天風呂とモダンな和洋ビュッフェが人気のスタイリッシュ宿</td>
                  <td className="p-3 text-stone-600">温泉街散策・快適アクティブ旅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>

          {/* ホテル 1 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332.jpg"
                alt="道後温泉　ふなや"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.74（口コミ 2015件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉　ふなや
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業三百九十余年・皇族や文豪に愛された道後屈指の名門！千五百坪の自然庭園と渓流足湯
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後温泉 ふなや —— 歴史と品格が宿る最高峰旅館。渓流流れる広大な日本庭園と洗練された美食
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 千五百坪の自然庭園「詠風庭」とせせらぎの足湯テラス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">御手洗川の清流が流れる広大な庭園。四季折々の花木や苔むす小道を散策でき、川床や足湯テラスで爽やかな風を感じながら寛ぐことができます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 道後の名湯を引き込んだ檜大浴場「湯山」と御影石「水軍の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">無加水・無加温にこだわった良質なアルカリ性単純温泉。手足を伸ばしてゆったりと名湯に浸かり、旅の疲れを心地よく癒やせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 瀬戸内の天然真鯛や伊予牛を贅沢に盛り込んだ本格和風会席
                    </h5>
                    <p className="text-stone-600 leading-relaxed">愛媛の豊かな自然が育んだ海の幸・山の幸。繊細な出汁の味わいと美しい盛り付けに老舗のプライドが宿る極上の料理を堪能できます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.67点、口コミ1400件超。「庭園の美しさと静けさ、スタッフの接客の洗練さに感動」「料理が素晴らしく道後で泊まるなら絶対ここ」と絶大な信頼を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛媛県 松山市道後湯之町1-33</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,635〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>11332</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D11332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】道後温泉　ふなや の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/165194/165194.jpg"
                alt="道後御湯"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.92（口コミ 311件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後御湯
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全室に温泉露天風呂を完備！現代湯治をコンセプトにした大人の洗練ラグジュアリーホテル
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後御湯（みゆ） —— プライベートな癒やしを極める宿。客室露天風呂と松山城を望む展望ラウンジ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全三十室すべてに配されたプライベート温泉露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">客室の広々としたデッキに設えられた専用露天風呂。道後温泉の引湯を24時間いつでも好きな時にプライベートに堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階の展望大浴場と松山城・夜景を望むスカイラウンジ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">松山市街や松山城を見晴らすパノラマビュー。夕暮れどきや夜のライトアップを眺めながら、フリードリンクとともに贅沢なひとときを過ごせます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 愛媛の旬の味覚を五感で楽しむダイニング「tachibana」のモダン和食
                    </h5>
                    <p className="text-stone-600 leading-relaxed">瀬戸内海の旬魚や伊予牛、地元無農薬野菜を現代的なアレンジで仕立てた創作コース。洗練された空間で特別なディナーを味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.77点の最高峰スコア。「部屋のお風呂が最高で何度も入った」「ラウンジからの松山城の景色が美しく、料理も接客もパーフェクト」と大人の旅行者に大人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛媛県 松山市道後鷺谷町2-20</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥26,410〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>165194</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D165194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】道後御湯 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17668/17668.jpg"
                alt="道後温泉　茶玻瑠"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.13（口コミ 2819件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">愛媛県松山市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉　茶玻瑠
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  道後温泉本館まで徒歩1分！道後初の屋上露天風呂とモダンな和洋ビュッフェが人気のスタイリッシュ宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  道後温泉 茶玻瑠（ちゃはる） —— 本館至近の抜群ロケーション。屋上露天風呂からの街並み展望と美食ダイニング
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 道後の街並みと夜景を見晴らす道後初の「屋上露天風呂」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階から道後の風を感じながら入る展望露天風呂。金・土・日には女性露天風呂に生花を浮かべる「バラ風呂」も開催され大人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 道後温泉本館・商店街ハイカラ通りまで徒歩1分の好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">本館や飛鳥乃湯泉、お土産屋さんが並ぶ商店街へすぐ出られる抜群の立地。湯上がりのそぞろ歩きや買い物に最適です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 愛媛の郷土料理と本格洋食が融合したオープンキッチンディナー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">シェフが目の前で仕上げる出来立て料理や、名物の鯛めし、伊予牛のグリルなど、バラエティ豊かで上質な美食を楽しめます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ2600件超。「本館のすぐ隣で観光にとても便利」「屋上露天風呂が開放的で気持ちよく、お食事も美味しかった」と高い人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>愛媛県 松山市道後湯月町4-4</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥7,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>17668</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】道後温泉　茶玻瑠 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 道後温泉街・本館＆飛鳥乃湯泉と松山城観光ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                道後温泉本館と別館「飛鳥乃湯泉（あすかのゆ）」の湯巡り
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                重厚な木造建築が美しい本館と、飛鳥時代の建築様式を取り入れた飛鳥乃湯泉。伝統工芸と最新アートが融合した特別浴室での入浴や、休憩室でのお茶菓子接待が楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                道後ハイカラ通りの散策と「坊っちゃん団子」食べ歩き
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                本館から道後温泉駅へと続くアーケード商店街。三色の餡が可愛らしい「坊っちゃん団子」や、焼きたての一六タルト、今治タオルショップ巡りが人気です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                松山城天守閣からの瀬戸内海パノラマビュー
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                道後温泉から路面電車で約10分。標高132メートルの城山山頂にそびえる現存十二天守の一つ。ロープウェイで登れば、松山市街と瀬戸内海、石鎚山系を一望できます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              愛媛県松山市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「愛媛県松山市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で松山市を選び、寄付額の30%相当のトラベルクーポンを返礼品として申し込みます。楽天ポイントも通常通り付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 松山空港や新幹線・特急しおかぜでの旅行を計画
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                松山空港からリムジンバスで道後温泉直行約40分。3年間の有効期間内で、気候温暖な春や秋の行楽シーズンに合わせてゆったり計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ふなや、道後御湯、茶玻瑠などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
              </p>
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
              <Link href="/furusato-tax-kusatsu-onsen-yubatake-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 草津温泉 湯畑徒歩圏内の老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 有馬温泉 金泉・銀泉＆極上神戸牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
