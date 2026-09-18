import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【10月・11月秋の宮城鳴子温泉ひとり旅・鳴子峡の錦秋大渓谷と日本一多彩な泉質おこもり】貸切庭園露天・重曹美肌湯・黒毛和牛！みちのく湯治リトリート厳選3宿',
  description: '10月中旬〜11月上旬は東北屈指の紅葉名所「鳴子峡」のベストシーズン！日本に湧出する泉質11種のうち8種が集まる宮城・鳴子温泉。離れの貸切露天風呂「母里の湯」と重曹泉が絶賛される「極上の貸切露天風呂 旅館大沼」、純重曹泉と自家源泉かけ流しが評判の「鳴子旅館」、多彩な源泉風呂を誇る「旅館すがわら」を楽天API最新データに基づき徹底比較。',
  keywords: '鳴子温泉 一人旅 宿,鳴子温泉 10月 11月 紅葉 温泉,鳴子温泉 旅館大沼 一人旅,鳴子旅館,旅館すがわら,鳴子峡 紅葉 一人旅 おこもり',
  openGraph: {
    title: '【10月・11月秋の宮城鳴子温泉ひとり旅・鳴子峡の錦秋大渓谷と日本一多彩な泉質おこもり】貸切庭園露天・重曹美肌湯・黒毛和牛！みちのく湯治リトリート厳選3宿',
    description: '10月中旬〜11月上旬は東北屈指の紅葉名所「鳴子峡」のベストシーズン！日本に湧出する泉質11種のうち8種が集まる宮城・鳴子温泉。離れの貸切露天風呂「母里の湯」と重曹泉が絶賛される「極上の貸切露天風呂 旅館大沼」、純重曹泉と自家源泉かけ流しが評判の「鳴子旅館」、多彩な源泉風呂を誇る「旅館すがわら」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/miyagi-naruko-autumn-solo-retreat-gorge-momiji-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【10月・11月秋の宮城鳴子温泉ひとり旅・鳴子峡の錦秋大渓谷と日本一多彩な泉質おこもり】貸切庭園露天・重曹美肌湯・黒毛和牛！みちのく湯治リトリート厳選3宿',
    description: '10月中旬〜11月上旬は東北屈指の紅葉名所「鳴子峡」のベストシーズン！日本に湧出する泉質11種のうち8種が集まる宮城・鳴子温泉。離れの貸切露天風呂「母里の湯」と重曹泉が絶賛される「極上の貸切露天風呂 旅館大沼」、純重曹泉と自家源泉かけ流しが評判の「鳴子旅館」、多彩な源泉風呂を誇る「旅館すがわら」を楽天API最新データに基づき徹底比較。',
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
    datePublished: '2026-09-17T00:00:00+09:00',
    dateModified: '2026-09-17T00:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/miyagi-naruko-autumn-solo-retreat-gorge-momiji-stay',
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
          <span className="text-stone-800 font-medium truncate">【10月・11月秋の宮城鳴子温泉ひとり旅・鳴子峡の錦秋大渓谷と日本一多彩な泉質おこもり】貸切庭園露天・重曹美肌湯・黒毛和牛！みちのく湯治リトリート厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            宮城鳴子温泉・10-11月秋の鳴子峡紅葉＆美肌湯治ひとり旅おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【10月・11月秋の宮城鳴子温泉ひとり旅・鳴子峡の錦秋大渓谷と日本一多彩な泉質おこもり】貸切庭園露天・重曹美肌湯・黒毛和牛！みちのく湯治リトリート厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月17日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              深さ100mの断崖絶壁を染め上げる燃えるような錦秋の鳴子峡。日本屈指の泉質数を誇る美肌の湯に浸かり、こけしの微笑みと素朴な湯治文化に包まれる秋の東北一人旅
            </p>
            <p>
              東北新幹線・古川駅から陸羽東線に乗り換えてアクセスできる奥州の名湯・鳴子温泉郷。10月中旬から11月上旬にかけて、鳴子峡は大谷川の清流と奇岩怪石を覆うブナ・カエデ・モミジの紅葉で黄金と真紅のグラデーションに染まります。鳴子温泉の最大の魅力は圧倒的な泉質の豊かさ。肌がツルツルになる弱アルカリ性重曹泉や硫黄泉など、本物の源泉かけ流しが旅人の疲れた心身を根底から癒やします。
            </p>
            <p>
              古き良き湯治の精神を受け継ぐ大人の隠れ家宿から、貸切露天風呂自慢の老舗旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 鳴子温泉郷　極上の貸切露天風呂　旅館大沼（★4.58 / 最低目安：13,530円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 鳴子温泉　鳴子旅館（★4.67 / 最低目安：7,370円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 鳴子温泉　旅館すがわら（★4.44 / 最低目安：4,500円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">宮城県 大崎市鳴子温泉赤湯3周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              鳴子温泉郷　極上の貸切露天風呂　旅館大沼
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.58 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,530円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/106139/106139.jpg"
                  alt="鳴子温泉郷　極上の貸切露天風呂　旅館大沼 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              美肌湯が自慢の宮城・東鳴子温泉の秘湯宿。源泉かけ流しの天然温泉を使用した大浴場・家族風呂をご堪能。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>美肌湯が自慢の宮城</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>東鳴子温泉の秘湯宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>源泉かけ流しの天然温泉を使用した大浴場</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、徒歩５分。鳴子温泉からはタクシーで約5分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106139%2F106139.html"
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
              <span className="text-xs text-stone-500 font-medium">宮城県 大崎市鳴子温泉車湯5周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              鳴子温泉　鳴子旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.67 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,370円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31108/31108.jpg"
                  alt="鳴子温泉　鳴子旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              家庭的な雰囲気でのんびりくつろげる様に心がけている小さな温泉旅館
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>家庭的な雰囲気でのんびりくつろげる様に心がけている小さな温泉旅館</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ陸羽東線　鳴子温泉駅より徒歩１７分位／東北道古川ＩＣより国道４７号線（約３０ｋｍ）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31108%2F31108.html"
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
              <span className="text-xs text-stone-500 font-medium">宮城県 大崎市鳴子温泉新屋敷周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              鳴子温泉　旅館すがわら
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.44 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">4,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13456/13456.jpg"
                  alt="鳴子温泉　旅館すがわら 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              貸切風呂（自家源泉掛け流し）は４箇所有り全て無料！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>貸切風呂（自家源泉掛け流し）は４箇所有り全て無料！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ陸羽東線『鳴子温泉駅』より徒歩10分／東北自動車道『古川ＩＣ』より約３５分/高速バス「仙台駅前」から８５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13456%2F13456.html"
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
            <span>鳴子温泉10-11月ひとり旅・鳴子峡紅葉と湯治文化を楽しむ現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「鳴子峡見晴台」深さ約100mのV字渓谷と大深沢橋の絶景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">鳴子峡レストハウスの見晴台から眺める紅葉の大パノラマ。鉄橋（大深沢橋）を渡る列車と紅葉のコラボレーションは息を呑む美しさ。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「鳴子こけし通り散策」木地師の手仕事と足湯巡り</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街には伝統のこけし工房や無料の足湯・手湯が点在。木彫りの温もりに触れながら一人静かに下駄を鳴らして散策できます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">鳴子名物「栗だんご」と仙台牛・みちのくきのこ鍋</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">大きな栗をまるごと餅で包み、甘辛いみたらし餡をたっぷりかけた熱々の「栗だんご」。夕食には秋の山菜や黒毛和牛を堪能。</p>
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
                <span>一人旅で本格的な湯治体験と上質な貸切露天風呂を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「旅館大沼」は現代湯治を提案する名宿。離れの貸切露天「母里の湯」は庭園の紅葉に囲まれ、一人旅の極上の癒やしとして大人気です。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>鳴子峡の紅葉のベストシーズンと混雑対策は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年10月中旬〜11月上旬が見頃です。週末の日中は周辺道路が混雑するため、平日の午前中や早朝の訪問がスムーズでおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* 記事末尾CTA */}
        <div className="text-center bg-stone-900 text-white p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">気になる宿は見つかりましたか？</h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            10月・11月の紅葉ハイシーズンは部屋数が限られます。楽天トラベルの最新空室カレンダーからお早めの日程チェックをおすすめします。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106139%2F106139.html"
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
