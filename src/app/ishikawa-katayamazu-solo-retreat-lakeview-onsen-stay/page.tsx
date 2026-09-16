import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【加賀温泉郷・片山津温泉ひとり旅・柴山潟パノラマおこもり】白山連峰一望・湖畔絶景露天風呂・加賀会席＆ズワイガニ！北陸新幹線加賀温泉駅厳選3宿',
  description: '柴山潟の湖面に映る名峰白山と七色に変わる湖水美を誇る加賀・片山津温泉！柴山潟を一望する絶景露天風呂と料理が口コミ★4.6の「湖畔の宿 森本」、加賀情緒あふれる空間美と開放的な大浴場を誇る名門「佳水郷」、源泉元湯の良質な湯と真心の料理が評判の「かのや光楽苑」を楽天API最新データに基づき徹底比較。',
  keywords: '片山津温泉 一人旅 宿,片山津 ホテル 一人 温泉,森本 片山津,佳水郷 加賀,かのや光楽苑,片山津 柴山潟 ひとり旅',
  openGraph: {
    title: '【加賀温泉郷・片山津温泉ひとり旅・柴山潟パノラマおこもり】白山連峰一望・湖畔絶景露天風呂・加賀会席＆ズワイガニ！北陸新幹線加賀温泉駅厳選3宿',
    description: '柴山潟の湖面に映る名峰白山と七色に変わる湖水美を誇る加賀・片山津温泉！柴山潟を一望する絶景露天風呂と料理が口コミ★4.6の「湖畔の宿 森本」、加賀情緒あふれる空間美と開放的な大浴場を誇る名門「佳水郷」、源泉元湯の良質な湯と真心の料理が評判の「かのや光楽苑」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/ishikawa-katayamazu-solo-retreat-lakeview-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【加賀温泉郷・片山津温泉ひとり旅・柴山潟パノラマおこもり】白山連峰一望・湖畔絶景露天風呂・加賀会席＆ズワイガニ！北陸新幹線加賀温泉駅厳選3宿',
    description: '柴山潟の湖面に映る名峰白山と七色に変わる湖水美を誇る加賀・片山津温泉！柴山潟を一望する絶景露天風呂と料理が口コミ★4.6の「湖畔の宿 森本」、加賀情緒あふれる空間美と開放的な大浴場を誇る名門「佳水郷」、源泉元湯の良質な湯と真心の料理が評判の「かのや光楽苑」を楽天API最新データに基づき徹底比較。',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
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
    datePublished: '2026-09-16T00:00:00+09:00',
    dateModified: '2026-09-16T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/ishikawa-katayamazu-solo-retreat-lakeview-onsen-stay',
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* パンくずリスト */}
      <nav className="border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-800">ホーム</Link>
          <span>›</span>
          <span className="text-stone-400">特集</span>
          <span>›</span>
          <span className="text-stone-800 font-medium truncate">【加賀温泉郷・片山津温泉ひとり旅・柴山潟パノラマおこもり】白山連峰一望・湖畔絶景露天風呂・加賀会席＆ズワイガニ！北陸新幹線加賀温泉駅厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            石川・片山津温泉ひとり旅＆柴山潟レイクビューおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【加賀温泉郷・片山津温泉ひとり旅・柴山潟パノラマおこもり】白山連峰一望・湖畔絶景露天風呂・加賀会席＆ズワイガニ！北陸新幹線加賀温泉駅厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              北陸新幹線・加賀温泉駅から車・バスで約10分。柴山潟の向こうにそびえる雪嶺・霊峰白山を望み、一日に七度色を変える湖畔のいで湯で心洗われる静寂ステイ
            </p>
            <p>
              加賀三代藩主・前田利常公の時代に柴山潟の湖底から湧出しているのが発見された片山津温泉。塩分を非常に多く含むナトリウム・カルシウム-塩化物泉は「温まりの湯」として名高く、湯上がりも汗が引かないほどの保温効果があります。夕暮れ時に湖面へ打ち上がる大噴水や、遠く白山連峰の雄姿を眺めながら一人湯に浸かる贅沢は格別です。
            </p>
            <p>
              湖の最前列で息を呑むレイクパノラマを堪能できる老舗宿から、加賀の伝統美と快適性を両立した大型温泉旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
            </p>
          </div>
        </header>

        {/* 目次 */}
        <section className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-10">
          <h2 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
            <span>📑</span>
            <span>この記事で紹介する厳選ホテル（楽天トラベル最新評価順）</span>
          </h2>
          <ul className="text-xs sm:text-sm space-y-2">
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 片山津温泉　湖畔の宿　森本（★4.6 / 最低目安：7,700円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 加賀片山津温泉　佳水郷（アパホテルズ＆リゾーツ）（★4.41 / 最低目安：7,920円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 片山津温泉　源泉元湯の宿　かのや光楽苑（★4.21 / 最低目安：8,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">石川県 加賀市片山津温泉乙６周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              片山津温泉　湖畔の宿　森本
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5419/5419.jpg"
                  alt="片山津温泉　湖畔の宿　森本 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              白山を望む静かな湖畔の宿でのんびりゆっくり美食旅を
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>白山を望む静かな湖畔の宿でのんびりゆっくり美食旅を</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【立地NO.1】ＪＲ加賀温泉駅より（無料送迎・要連絡）、片山津ＩＣより車５分、小松空港より車１５分、金沢市内より車４５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5419"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-2" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第2位</span>
              <span className="text-xs text-stone-500 font-medium">石川県 加賀市潮津町イ72-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              加賀片山津温泉　佳水郷（アパホテルズ＆リゾーツ）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.41 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,920円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28355/28355.jpg"
                  alt="加賀片山津温泉　佳水郷（アパホテルズ＆リゾーツ） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              全室絶景湖畔を望む割烹温泉旅館。霊峰白山と柴山潟を一望できる大浴殿、サウナ、旬の逸品会席が好評！！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>全室絶景湖畔を望む割烹温泉旅館</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>霊峰白山と柴山潟を一望できる大浴殿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>旬の逸品会席が好評！！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：【電車】JR加賀温泉駅から車で10分（無料送迎有、要予約）【車】片山津ICから5分【飛行機】小松空港から車で20分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D28355"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>

        <article id="hotel-3" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第3位</span>
              <span className="text-xs text-stone-500 font-medium">石川県 加賀市片山津温泉乙6周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              片山津温泉　源泉元湯の宿　かのや光楽苑
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.21 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4997/4997.jpg"
                  alt="片山津温泉　源泉元湯の宿　かのや光楽苑 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              柴山潟に面し、客室からは湖が望めます。源泉を流し込む湯量豊富な温泉と加賀料理が自慢の元湯の宿
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>柴山潟に面し</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>客室からは湖が望めます</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>源泉を流し込む湯量豊富な温泉と加賀料理が自慢の元湯の宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR加賀温泉駅より車で10分（無料送迎有／定時運行／要事前予約）、北陸自動車道片山津ＩＣより10分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4997"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition"
              >
                <span>空室状況・最新料金を確認</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </article>
        </div>

        {/* 現地お役立ち情報 */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-6 flex items-center gap-2 border-b border-stone-100 pb-3">
            <span>💡</span>
            <span>片山津温泉ひとり旅・柴山潟サイクリングと総湯建築を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「加賀片山津温泉 街湯」世界的建築家・谷口吉生設計のモダン建築</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">湖の上に浮かぶガラス張りのスタイリッシュな総湯。「潟の湯」「森の湯」の2つの浴室から柴山潟と白山を一人静かに望むアート体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">柴山潟サイクリングロードと大噴水のライトアップ鑑賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">湖畔を一周できる遊歩道。レンタサイクルで風を切りながら一周約7kmを散策し、高さ70mまで吹き上がるダイナミックな大噴水を鑑賞。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">加賀名物「加賀カニごはん」と橋立港直送の朝獲れ鮮魚</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">香箱ガニ（雌のズワイガニ）を贅沢に使ったご当地グルメ。北陸の地酒「手取川」「菊姫」とともに味わう一人贅沢な晩酌。</p>
            </div>
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-amber-50/40 rounded-2xl border border-amber-200/60 p-6 sm:p-8 mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span>❓</span>
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で柴山潟を間近に望む絶景露天風呂と加賀の味覚を味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「片山津温泉 湖畔の宿 森本」は全客室および露天風呂から柴山潟と白山を一望でき、楽天口コミ★4.6。きめ細やかなもてなしが一人旅に大絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>広々とした空間と充実した施設で贅沢におこもりしたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「加賀片山津温泉 佳水郷」は柴山潟に面した壮大なスケールの温泉旅館。美しい日本庭園と湖のパノラマ大浴場で極上のリラックスが叶います。
              </p>
            </div>
          </div>
        </section>

        {/* 記事末尾CTA */}
        <div className="text-center bg-stone-900 text-white p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">気になる宿は見つかりましたか？</h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            週末や連休、観光シーズンのピークは部屋数が限られます。楽天トラベルの最新空室カレンダーからお早めの日程チェックをおすすめします。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5419"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
          >
            一番人気の宿をチェックする（楽天トラベル）
          </a>
        </div>
      </main>
    </div>
  );
}
