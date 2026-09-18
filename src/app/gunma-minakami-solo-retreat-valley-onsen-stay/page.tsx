import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【水上温泉郷ひとり旅・谷川岳大自然おこもり】利根川源流の渓谷美・満天星空露天風呂・太宰治逗留の歴史！上越新幹線直通のリフレッシュ厳選3宿',
  description: '谷川岳の麓、利根川上流の渓谷美を誇る群馬・水上温泉郷！屋上の「天空の湯」から谷川連峰の星空を仰ぐ口コミ★4.6超の「なかや旅館」、太宰治が名作『姥捨』を執筆した歴史と檜風呂が評判の「旅館たにがわ」、11種の貸切露天風呂や広大な高原自然を誇る「ホテルサンバード」を楽天API最新データに基づき徹底比較。',
  keywords: '水上温泉 一人旅 宿,みなかみ ホテル 一人 温泉,なかや旅館 水上,旅館たにがわ,ホテルサンバード 水上,水上温泉 ひとり旅 おこもり',
  openGraph: {
    title: '【水上温泉郷ひとり旅・谷川岳大自然おこもり】利根川源流の渓谷美・満天星空露天風呂・太宰治逗留の歴史！上越新幹線直通のリフレッシュ厳選3宿',
    description: '谷川岳の麓、利根川上流の渓谷美を誇る群馬・水上温泉郷！屋上の「天空の湯」から谷川連峰の星空を仰ぐ口コミ★4.6超の「なかや旅館」、太宰治が名作『姥捨』を執筆した歴史と檜風呂が評判の「旅館たにがわ」、11種の貸切露天風呂や広大な高原自然を誇る「ホテルサンバード」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gunma-minakami-solo-retreat-valley-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【水上温泉郷ひとり旅・谷川岳大自然おこもり】利根川源流の渓谷美・満天星空露天風呂・太宰治逗留の歴史！上越新幹線直通のリフレッシュ厳選3宿',
    description: '谷川岳の麓、利根川上流の渓谷美を誇る群馬・水上温泉郷！屋上の「天空の湯」から谷川連峰の星空を仰ぐ口コミ★4.6超の「なかや旅館」、太宰治が名作『姥捨』を執筆した歴史と檜風呂が評判の「旅館たにがわ」、11種の貸切露天風呂や広大な高原自然を誇る「ホテルサンバード」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/gunma-minakami-solo-retreat-valley-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【水上温泉郷ひとり旅・谷川岳大自然おこもり】利根川源流の渓谷美・満天星空露天風呂・太宰治逗留の歴史！上越新幹線直通のリフレッシュ厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            群馬・水上温泉郷ひとり旅＆谷川岳渓谷おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【水上温泉郷ひとり旅・谷川岳大自然おこもり】利根川源流の渓谷美・満天星空露天風呂・太宰治逗留の歴史！上越新幹線直通のリフレッシュ厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              東京駅から上越新幹線で約60分の上毛高原駅、またはJR上越線水上駅。雪解け水清らかな利根川のせせらぎと谷川岳の勇姿に包まれる静寂の隠れ里
            </p>
            <p>
              水上温泉郷は、水上・谷川・湯檜曽・宝川・猿ヶ京など多様な温泉地からなる一大湯処。古くから越後と上州を結ぶ三国街道の要所として栄え、太宰治や若山牧水ら多くの文人が逗留しました。無色透明でさらりとした弱アルカリ性の石膏泉は、疲れた筋肉を優しくほぐし、一人旅の深いリフレッシュを約束します。
            </p>
            <p>
              谷川岳の星空を眺める屋上露天が人気の宿から、文学の歴史薫る静かな老舗旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 水上温泉郷　湯檜曽温泉　天空の湯　なかや旅館（★4.67 / 最低目安：8,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 水上温泉郷　谷川温泉　旅館たにがわ（★4.53 / 最低目安：20,925円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. １１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード（★4.03 / 最低目安：8,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">群馬県 利根郡みなかみ町湯桧周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              水上温泉郷　湯檜曽温泉　天空の湯　なかや旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.67 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2370/2370.jpg"
                  alt="水上温泉郷　湯檜曽温泉　天空の湯　なかや旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              4万組以上のママパパに選ばれた赤ちゃんファーストの温泉宿★安心の設備でママもほっと一息できる癒し��間
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>4万組以上のママパパに選ばれた赤ちゃんファーストの温泉宿★安心の設備でママもほっと一息できる癒し��間</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：車：水上ICから約15分　車以外：上越線ゆびそ駅より徒歩5分、又は水上駅よりバス・タクシーで約10分　</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2370%2F2370.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 利根郡みなかみ町谷川周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              水上温泉郷　谷川温泉　旅館たにがわ
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.53 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">20,925円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999.jpg"
                  alt="水上温泉郷　谷川温泉　旅館たにがわ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              太宰治ゆかりの宿【スタッフの笑顔と創作料理・おもてなしの心】・貸切露天風呂・足湯も大好評
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>太宰治ゆかりの宿【スタッフの笑顔と創作料理</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>おもてなしの心】</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>貸切露天風呂</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ水上駅より車で７分（送迎あり）、関越自動車道水上ＩＣより１５分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6999%2F6999.html"
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
              <span className="text-xs text-stone-500 font-medium">群馬県 利根郡みなかみ町��周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              １１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.03 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9340/9340.jpg"
                  alt="１１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              １１種の貸切露天風呂や滝を望む高台の露天風呂など湯めぐりを満喫！高原ＢＢＱプランも大人気！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>１１種の貸切露天風呂や滝を望む高台の露天風呂など湯めぐりを満喫！高原ＢＢＱプランも大人気！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：車で関越自動車道・水上ＩＣから３０分・ＪＲで上越線　水上駅より　湯ノ小屋行きバスで藤原スキー場入口下車900M</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9340%2F9340.html"
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
            <span>水上温泉ひとり旅・谷川岳一ノ倉沢と諏訪峡を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「谷川岳ロープウェイ」天神平からの一大パノラマ絶景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">標高1,319mの天神平までわずか10分。山頂駅の展望デッキから望む谷川連峰のダイナミックな岩壁と高山植物の群生に圧倒されます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「諏訪峡遊歩道」奇岩と利根川の渓流を巡る遊歩道散歩</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">笹笛橋や吊り橋を渡りながら、エメラルドグリーンの清流と巨岩が織りなす渓谷美を一人静かに鑑賞。秋の紅葉や新緑の美しさは格別です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">みなかみ名物「生どら焼き」と奥利根の地酒「水芭蕉」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">小豆と生クリームが絶妙にマッチした老舗和菓子店の生どら。夜は利根川水系の清冽な水で醸された純米酒を片手に川の音に耳を澄ませる至福。</p>
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
                <span>一人旅で満天の星空を仰ぐ絶景露天風呂と温かいもてなしを体験できる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「水上温泉郷 湯檜曽温泉 天空の湯 なかや旅館」は屋上露天風呂からの星空ビューと細やかなサービスで楽天口コミ★4.6超の絶賛を集めています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>太宰治ゆかりの文学散歩と落ち着いた純和風の滞在を求めるなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「水上温泉郷 谷川温泉 旅館たにがわ」は太宰治ミニギャラリーを備え、谷川岳の静寂に包まれた極上の温泉ステイが一人旅に大好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2370%2F2370.html"
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
