import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【西伊豆・土肥温泉ひとり旅・駿河湾茜色夕日おこもり】全館畳敷き露天風呂・駿河湾地魚舟盛り・黄金の湯治場！駿河湾フェリーで行く西海岸厳選3宿',
  description: '西伊豆随一の歴史と湧出量を誇る夕日の街・土肥温泉！全室趣の異なる客室と板前割烹料理が口コミ★4.7超の隠れ宿「花暖簾」、全館畳敷きで波打ち際の絶景露天風呂を誇る「湯の花亭」、駿河湾の夕日を客室から望む「明治館」を楽天API最新データに基づき徹底比較。',
  keywords: '土肥温泉 一人旅 宿,土肥 ホテル 一人 温泉,花暖簾 土肥,湯の花亭 土肥温泉,明治館 土肥,西伊豆 ひとり旅 おこもり',
  openGraph: {
    title: '【西伊豆・土肥温泉ひとり旅・駿河湾茜色夕日おこもり】全館畳敷き露天風呂・駿河湾地魚舟盛り・黄金の湯治場！駿河湾フェリーで行く西海岸厳選3宿',
    description: '西伊豆随一の歴史と湧出量を誇る夕日の街・土肥温泉！全室趣の異なる客室と板前割烹料理が口コミ★4.7超の隠れ宿「花暖簾」、全館畳敷きで波打ち際の絶景露天風呂を誇る「湯の花亭」、駿河湾の夕日を客室から望む「明治館」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shizuoka-toi-solo-retreat-sunset-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【西伊豆・土肥温泉ひとり旅・駿河湾茜色夕日おこもり】全館畳敷き露天風呂・駿河湾地魚舟盛り・黄金の湯治場！駿河湾フェリーで行く西海岸厳選3宿',
    description: '西伊豆随一の歴史と湧出量を誇る夕日の街・土肥温泉！全室趣の異なる客室と板前割烹料理が口コミ★4.7超の隠れ宿「花暖簾」、全館畳敷きで波打ち際の絶景露天風呂を誇る「湯の花亭」、駿河湾の夕日を客室から望む「明治館」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-toi-solo-retreat-sunset-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【西伊豆・土肥温泉ひとり旅・駿河湾茜色夕日おこもり】全館畳敷き露天風呂・駿河湾地魚舟盛り・黄金の湯治場！駿河湾フェリーで行く西海岸厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            静岡・土肥温泉ひとり旅＆西伊豆夕日おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【西伊豆・土肥温泉ひとり旅・駿河湾茜色夕日おこもり】全館畳敷き露天風呂・駿河湾地魚舟盛り・黄金の湯治場！駿河湾フェリーで行く西海岸厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              修善寺駅から東海バスで約50分、または清水港から駿河湾フェリーで直行。駿河湾に沈む黄金色の夕日と、無色透明でまろやかな塩化物・硫酸塩泉に包まれる贅沢な西伊豆リトリート
            </p>
            <p>
              江戸時代に金山採掘の坑道から湯が湧き出したことから開湯した土肥温泉。伊豆半島西海岸で最大の規模と湯量を誇り、肌に優しくさらりとした泉質が特徴です。目の前に広がる駿河湾が茜色から紫色へと刻一刻と染まりゆく夕暮れ時、露天風呂に浸かりながら水平線を一人眺める時間は、日常の慌ただしさをすべて忘れさせてくれます。
            </p>
            <p>
              わずか数室で極上の手料理を味わえる大人の隠れ宿から、お風呂から廊下まで全館畳敷きの贅沢な海辺旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 西伊豆土肥温泉　和の匠　花暖簾（はなのれん）（★4.73 / 最低目安：19,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 土肥温泉　たたみの宿　湯の花亭（★4.6 / 最低目安：9,350円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 西伊豆土肥温泉　碧き凪ぎの宿明治館（★4.2 / 最低目安：7,700円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市土肥748周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              西伊豆土肥温泉　和の匠　花暖簾（はなのれん）
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.73 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">19,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108240/108240.jpg"
                  alt="西伊豆土肥温泉　和の匠　花暖簾（はなのれん） 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              本物の寛ぎが叶う僅か５室の隠れ宿。駿河湾の幸を使用した心を込めた料理と温泉をご堪能ください。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>本物の寛ぎが叶う僅か５室の隠れ宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>駿河湾の幸を使用した心を込めた料理と温泉をご堪能ください</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：修善寺駅よりバスで４５分「馬場（ばんば）」停留所下車　徒歩３分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D108240"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市土肥2849-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              土肥温泉　たたみの宿　湯の花亭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">9,350円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/64790/64790.jpg"
                  alt="土肥温泉　たたみの宿　湯の花亭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              2014年楽天アワード受賞！全室オーシャンビュー。全館4000畳の畳敷き、海辺の純和風旅館。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2014年楽天アワード受賞！全室オーシャンビュー</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>全館4000畳の畳敷き</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>海辺の純和風旅館</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：修善寺駅よりバスにて50分(「湯の川」下車)</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D64790"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 伊豆市土肥町2849周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              西伊豆土肥温泉　碧き凪ぎの宿明治館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.2 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,700円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30756/30756.jpg"
                  alt="西伊豆土肥温泉　碧き凪ぎの宿明治館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              オールインクルーシブの宿！ビーチまで徒歩10秒！全客室オーシャンビュー☆
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>オールインクルーシブの宿！ビーチまで徒歩10秒！全客室オーシャンビュー☆</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆箱根鉄道線　修善寺駅より堂ヶ島・松崎行きバス（約50分）湯の川下車徒歩１分／東名高速沼津ＩＣより約70分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30756"
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
            <span>土肥温泉ひとり旅・土肥金山と恋人岬の夕日を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「土肥金山」ギネス認定250kgの巨大金塊タッチと坑道探検</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">江戸・明治期に栄えた金山の歴史坑道。純度99.99%・時価数十億円の巨大金塊に実際に触れて金運パワーをチャージするユニークな一人体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「旅人岬」「恋人岬」富士山と駿河湾の180度夕日パノラマ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">海岸沿いの絶壁展望スポット。海に沈みゆく夕日と、天気が良ければ海の向こうにシルエットを現す夕暮れ富士山を一人静かに鑑賞。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">駿河湾名物「深海魚料理（メギス・赤むつ）」と伊勢海老鬼殻焼き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日本一深い駿河湾ならではの深海魚の刺身や天ぷら。濃厚な味噌が詰まった獲れたての伊勢海老とともに地酒「白隠正宗」を味わう至福。</p>
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
                <span>一人旅で口コミ評価が極めて高く、静かな隠れ家空間で過ごせる土肥の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「西伊豆土肥温泉 和の匠 花暖簾」は楽天口コミ★4.7超。わずか5室の贅沢な小宿で、専用貸切露天風呂と手の込んだ板前料理が一人旅に大絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>全館畳敷きの心地よさと海辺の絶景露天風呂を味わうなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「土肥温泉 たたみの宿 湯の花亭」はお風呂の床まで畳が敷かれたユニークな名宿。素足の解放感と目の前に広がる駿河湾の波音に癒やされます。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D108240"
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
