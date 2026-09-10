import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑',
  description: '日本一の湧出量を誇る温泉パラダイス・大分県別府温泉郷を楽天ふるさと納税でお得に贅沢ステイ！五段の棚田露天風呂「棚湯」が話題のメガリゾート「杉乃井ホテル」、全室客室露天風呂付きオーシャンリゾート「潮騒の宿 晴海」、鉄輪の高台に佇む能舞台の格式名門「山荘 神和苑」を徹底比較。別府市トラベルクーポン活用術を網羅。',
  keywords: '別府温泉 ふるさと納税,杉乃井ホテル クーポン,潮騒の宿 晴海 ふるさと納税,山荘 神和苑 宿泊,別府市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-beppu-onsen-suginoi-jigoku-stay',
  },
  openGraph: {
    title: '【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑',
    description: '日本一の湧出量を誇る温泉パラダイス・大分県別府温泉郷を楽天ふるさと納税でお得に贅沢ステイ！五段の棚田露天風呂「棚湯」が話題のメガリゾート「杉乃井ホテル」、全室客室露天風呂付きオーシャンリゾート「潮騒の宿 晴海」、鉄輪の高台に佇む能舞台の格式名門「山荘 神和苑」を徹底比較。別府市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-beppu-onsen-suginoi-jigoku-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑',
    description: '日本一の湧出量を誇る温泉パラダイス・大分県別府温泉郷を楽天ふるさと納税でお得に贅沢ステイ！五段の棚田露天風呂「棚湯」が話題のメガリゾート「杉乃井ホテル」、全室客室露天風呂付きオーシャンリゾート「潮騒の宿 晴海」、鉄輪の高台に佇む能舞台の格式名門「山荘 神和苑」を徹底比較。別府市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:10:00+09:00',
    dateModified: '2026-09-10T17:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-beppu-onsen-suginoi-jigoku-stay',
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
        <span className="text-stone-700 font-medium truncate">【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>大分県別府市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          日本一の湧出量を誇る温泉パラダイス・大分県別府温泉郷を楽天ふるさと納税でお得に贅沢ステイ！五段の棚田露天風呂「棚湯」が話題のメガリゾート「杉乃井ホテル」、全室客室露天風呂付きオーシャンリゾート「潮騒の宿 晴海」、鉄輪の高台に佇む能舞台の格式名門「山荘 神和苑」を徹底比較。別府市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            街のいたるところから立ち上る湯けむりと圧倒的な湯量——別府八湯の多彩な泉質と絶景温泉リゾートを極める旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            大分県別府市、鶴見岳と伽藍岳の麓から別府湾に向かって広がる別府温泉郷。毎分約8万3,000リットルという日本一の温泉湧出量を誇り、世界中から温泉ファンが訪れる世界屈指の温泉都市です。「別府八湯（べっぷはっとう）」と呼ばれる八つの温泉エリア（別府、鉄輪、観海寺、明礬、柴石、亀川、堀田、浜脇）からなり、地球上に存在する全10種類の泉質のうち実に7種類が揃うという、まさに生きた地球の博物館です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            青い海地獄や赤い血の池地獄をめぐる「別府地獄めぐり」や、名物「地獄蒸し料理」、関アジ・関サバ、豊後牛の贅沢会席など、別府ならではの食と体験は尽きることがありません。山の手から別府湾を見下ろす展望露天風呂や、海辺の波打ち際で楽しむ客室露天風呂など、宿の個性も豊か。大分県別府市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、家族旅行や記念日旅行が最高の思い出になります。
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
                  <td className="p-3 font-bold text-amber-900">別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）</td>
                  <td className="p-3 font-bold">★ 4.63</td>
                  <td className="p-3 text-stone-600">五段の棚田状大展望露天風呂「棚湯」と大噴水ショー！西日本最大級の温泉エンターテインメントリゾート</td>
                  <td className="p-3 text-stone-600">最高峰の絶景・憧れのステイ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）</td>
                  <td className="p-3 font-bold">★ 4.61</td>
                  <td className="p-3 text-stone-600">全客室が海に面した源泉掛け流し客室露天風呂付き！別府湾の波打ち際に佇む大人のモダンラグジュアリー</td>
                  <td className="p-3 text-stone-600">充実の施設・アクティブ寛ぎ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">別府鉄輪温泉　山荘　神和苑</td>
                  <td className="p-3 font-bold">★ 4.51</td>
                  <td className="p-3 text-stone-600">鉄輪温泉の高台に佇む名門！能舞台と千坪の日本庭園、自家源泉掛け流しの湯を誇る大人の隠れ家料亭旅館</td>
                  <td className="p-3 text-stone-600">落ち着いた風情・アットホーム旅</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg"
                alt="別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.63（口コミ 12861件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県別府市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  五段の棚田状大展望露天風呂「棚湯」と大噴水ショー！西日本最大級の温泉エンターテインメントリゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  別府温泉 杉乃井ホテル（オリックスホテルズ＆リゾーツ） —— 別府のシンボルリゾート。宙館の最上階展望露天と豪華ビュッフェ
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 別府湾と街並みを見下ろす五段の棚田露天風呂「棚湯」と宙館「宙湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">圧倒的な開放感を誇る名物露天風呂。標高250メートルの最上階から別府湾を一望し、晴れた日には四国佐田岬まで見渡せる絶景パノラマが広がります。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 水着で楽しむ温泉プール「アクアガーデン」と光と噴水のショー
                    </h5>
                    <p className="text-stone-600 leading-relaxed">幻想的な音と光と水が躍動する大迫力の噴水アートショー。家族連れやカップルで夜空の下、感動のエンターテインメントを体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> シェフが目の前で腕を振るう豪華プレミアムビュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">和洋中の出来立て料理や刺身、ステーキ、デザートが並ぶ圧巻のビュッフェレストラン「TERRACE & DINING SORA」。全世代が大満足できる美食空間です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ11000件超という異次元の圧倒的実績。「棚湯からの別府湾の眺めが最高」「噴水ショーもビュッフェもすべてが桁違いに楽しかった」と絶大な人気。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 別府市観海寺1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥16,600〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>5547</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/78242/78242.jpg"
                alt="ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.61（口コミ 686件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">大分県別府市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全客室が海に面した源泉掛け流し客室露天風呂付き！別府湾の波打ち際に佇む大人のモダンラグジュアリー
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  AMANE RESORT SEIKAI（潮騒の宿 晴海） —— 海景と名湯の静寂。波の音を聞くプライベート温泉と極上会席
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室テラスに備えられた別府湾を望む温泉露天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">海風を感じながら24時間好きな時に浸かれるプライベート露天風呂。朝日に染まる水平線や夜の月の光を眺める贅沢な湯浴みが叶います。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 海抜ゼロメートルの波打ち際露天風呂「潮騒の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">まるで海に浸かっているかのような感覚を味わえる一階大浴場。最上階の展望大浴場「昇陽の湯」とともに二つの絶景温泉を満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 関アジ・関サバやおおいた和牛を味わう三つのシグネチャーダイニング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">日本料理「玄」、海鮮料理「えいたろう」、ビストロ「BAN-YA」から好みに合わせて選べる洗練されたディナーコース。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.66点、口コミ2600件超。「全室露天風呂付きで海が目の前、スタッフの接客も料理も超一流」「大人の贅沢ステイにこれ以上の宿はない」と絶賛。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 別府市上人ヶ浜町6-24</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥22,770〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>78242</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D78242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/158425/158425.jpg"
                alt="別府鉄輪温泉　山荘　神和苑"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
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
                  鉄輪温泉の高台に佇む名門！能舞台と千坪の日本庭園、自家源泉掛け流しの湯を誇る大人の隠れ家料亭旅館
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  別府鉄輪温泉 山荘 神和苑（かんなわえん） —— 日本建築の粋を集めた最高峰。庭園の滝と本格懐石料理の宿
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 能舞台や茶室が配された千坪の美しい池泉回遊式庭園
                    </h5>
                    <p className="text-stone-600 leading-relaxed">滝が流れ、四季折々の木々や花々が彩る格式高い庭園。夜には美しくライトアップされ、幽玄な日本の伝統美を体感できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 鉄輪の高温良質な自家源泉を100％掛け流しで湛える大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">青みを帯びた神秘的なメタけい酸豊富な美肌温泉。客室露天風呂付きプランでは、名湯を誰にも邪魔されず独り占めできます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 豊後牛や瀬戸内の高級魚介を極めた伝統の京風懐石・鉄板焼き
                    </h5>
                    <p className="text-stone-600 leading-relaxed">熟練の料理人が一皿一皿魂を込めて仕立てる料理。器の美しさと繊細な味付けが特別な日を最高に演出します。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.70点の超高スコア。「庭園と能舞台の雰囲気が圧巻で別世界」「温泉もお料理も素晴らしく、最高の記念日になった」と高い評価を得ています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>大分県 別府市鉄輪345</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥15,950〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>158425</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D158425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】別府鉄輪温泉　山荘　神和苑 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 別府温泉郷・地獄めぐり＆鉄輪湯けむり展望台ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                別府地獄めぐり（海地獄・血の池地獄・白池地獄など七地獄）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                千年以上前から噴気や熱泥、熱湯が噴出していたことから「地獄」と呼ばれた景勝地。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」など、地球のエネルギーを五感で体感できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                湯けむり展望台からの夜景（日本夜景遺産）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                鉄輪温泉街から立ち上る無数の湯けむりと、後方の鶴見岳、別府湾を一望するビュースポット。夜には湯けむりがライトアップされ、幻想的な夜景が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                鉄輪温泉街での「地獄蒸し工房」体験
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉から噴き出る高温の蒸気熱を利用して、野菜や魚介、卵などを蒸し上げる伝統調理法「地獄蒸し」。素材本来の甘みと旨味が凝縮されたヘルシーな郷土料理を体験できます。
              </p>
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

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「大分県別府市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で別府市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 大分空港やJR特急ソニック・にちりんで別府へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                大分空港から空港特急バスで約45分、博多駅から特急ソニックで約2時間。3年間の有効期間内で、四季折々のイベントに合わせてゆったり計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                杉乃井ホテル、潮騒の宿晴海、山荘神和苑などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-jozankei-onsen-keikoku-retreat-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 定山渓温泉 豊平峡渓谷美＆源泉かけ流しリゾート特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shuzenji-onsen-bamboo-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 修善寺温泉 伊豆最古の名湯・竹林の小径＆文化財宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
