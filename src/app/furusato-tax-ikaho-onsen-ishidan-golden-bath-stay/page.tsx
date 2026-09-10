import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭',
  description: '365段の石段街が有名な名湯・群馬県伊香保温泉を楽天ふるさと納税でお得に満喫！創業440年の最高峰老舗「福一」、石段街徒歩1分・黄金の湯掛け流しの「森秋旅館」、文豪徳富蘆花ゆかりの源泉宿「千明仁泉亭」を徹底比較。上州牛会席や渋川市トラベルクーポン活用術を網羅。',
  keywords: '伊香保温泉 ふるさと納税,伊香保温泉 石段街 宿 ふるさと納税,伊香保 福一 クーポン,森秋旅館 ふるさと納税,千明仁泉亭 宿泊',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
  },
  openGraph: {
    title: '【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭',
    description: '365段の石段街が有名な名湯・群馬県伊香保温泉を楽天ふるさと納税でお得に満喫！創業440年の最高峰老舗「福一」、石段街徒歩1分・黄金の湯掛け流しの「森秋旅館」、文豪徳富蘆花ゆかりの源泉宿「千明仁泉亭」を徹底比較。上州牛会席や渋川市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭',
    description: '365段の石段街が有名な名湯・群馬県伊香保温泉を楽天ふるさと納税でお得に満喫！創業440年の最高峰老舗「福一」、石段街徒歩1分・黄金の湯掛け流しの「森秋旅館」、文豪徳富蘆花ゆかりの源泉宿「千明仁泉亭」を徹底比較。上州牛会席や渋川市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T16:35:00+09:00',
    dateModified: '2026-09-10T16:35:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
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
        <span className="text-stone-700 font-medium truncate">【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>群馬県渋川市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          365段の石段街が有名な名湯・群馬県伊香保温泉を楽天ふるさと納税でお得に満喫！創業440年の最高峰老舗「福一」、石段街徒歩1分・黄金の湯掛け流しの「森秋旅館」、文豪徳富蘆花ゆかりの源泉宿「千明仁泉亭」を徹底比較。上州牛会席や渋川市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            万葉集にも詠まれた歴史の石段街——茶褐色の「黄金の湯」と透明な「白銀の湯」で巡る心潤す温泉旅
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            群馬県渋川市伊香保町、榛名山の中腹標高約700メートルに広がる伊香保温泉。万葉集や古今和歌集にもその名が詠まれ、戦国時代には武田勝頼の命により長篠の戦いで傷ついた武士たちの湯治場として整備された歴史を持ちます。伊香保の象徴である「365段の石段街」は、温泉街の中心を貫く石段の両側に射的場やお土産屋、足湯、温泉まんじゅう店が連なり、浴衣と下駄で歩けばまるでタイムスリップしたかのようなノスタルジーに浸ることができます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            伊香保温泉には二つの異なる名湯が存在します。鉄分を豊富に含み空気に触れると独特の茶褐色に濁る、身体を芯から温める伝統の「黄金（こがね）の湯」。そして近年湧出が確認された、疲労回復や健康増進に優れた無色透明のメタけい酸泉「白銀（しろがね）の湯」。この二大源泉の贅沢な湯比べと、地元群馬の上州牛や上州麦豚、清らかな水で打たれた日本三大うどん「水沢うどん」を味わう旅は格別です。群馬県渋川市へのふるさと納税で獲得できる楽天トラベルクーポンを使えば、寄付額の30%相当が割引され、名門旅館へお得に宿泊できます。
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
                  <td className="p-3 font-bold text-amber-900">伊香保温泉　福一</td>
                  <td className="p-3 font-bold">★ 4.3</td>
                  <td className="p-3 text-stone-600">創業四百四十年・石段街最上段に佇む伊香保随一の名門！「黄金の湯」と「白銀の湯」の二大名湯を完備</td>
                  <td className="p-3 text-stone-600">由緒ある歴史・贅沢な湯巡り</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">伊香保温泉　森秋旅館</td>
                  <td className="p-3 font-bold">★ 4.26</td>
                  <td className="p-3 text-stone-600">創業明治元年・石段街まで徒歩1分の好立地！茶褐色の「黄金の湯」を掛け流しで愉しむ風情宿</td>
                  <td className="p-3 text-stone-600">抜群の好立地・絶景の眺望</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">伊香保温泉　千明仁泉亭（ちぎらじんせんてい）</td>
                  <td className="p-3 font-bold">★ 4.58</td>
                  <td className="p-3 text-stone-600">文豪徳富蘆花ゆかりの老舗！黄金の湯を贅沢に100％源泉掛け流しで注ぐ名物大浴場と貸切風呂</td>
                  <td className="p-3 text-stone-600">大人の静寂・上質なおこもり</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/28606/28606.jpg"
                alt="伊香保温泉　福一"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.3（口コミ 1701件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊香保温泉　福一
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業四百四十年・石段街最上段に佇む伊香保随一の名門！「黄金の湯」と「白銀の湯」の二大名湯を完備
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊香保温泉 福一（ふくいち） —— 歴史と格式を今に伝える最高峰。石段街直結のロケーションと至福の二大名湯
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊香保で希少な「黄金の湯」と「白銀の湯」の両方を引く大浴場
                    </h5>
                    <p className="text-stone-600 leading-relaxed">茶褐色の黄金の湯と透明な白銀の湯の二つの湯船を備えた大浴場。泉質の違いを入り比べながら、歴史ある名湯の恵みを全身で享受できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 石段街の最上段（19段目）に直結する抜群の散策ロケーション
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿のエレベーターから直接石段街へ出られる便利な連絡口を完備。伊香保神社や石段街の散策をストレスなく気軽に楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州の厳選素材を匠の技で仕立てた本格季節会席料理
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州牛のサーロインステーキや陶板焼き、群馬の新鮮野菜を取り入れた月替わりの会席。優雅なお食事処で上質な時間を過ごせます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.56点、口コミ1900件超。「石段街直結で観光に便利、お風呂も二種類の源泉に入れて最高」「スタッフの接客が洗練されていてお料理も大変美味しかった」と名門ならではの高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 渋川市伊香保町伊香保香湯5-4</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥9,636〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>28606</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D28606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】伊香保温泉　福一 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17741/17741.jpg"
                alt="伊香保温泉　森秋旅館"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.26（口コミ 2281件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊香保温泉　森秋旅館
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  創業明治元年・石段街まで徒歩1分の好立地！茶褐色の「黄金の湯」を掛け流しで愉しむ風情宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊香保温泉 森秋旅館（もりあき） —— 石段街の賑わいと源泉のぬくもり。湯口から注がれる本物の掛け流し黄金の湯
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊香保本来の茶褐色に濁る「黄金の湯」を惜しみなく掛け流し
                    </h5>
                    <p className="text-stone-600 leading-relaxed">引湯口から直接引き込まれる良質な黄金の湯。大浴場「名竹の湯」や露天風呂「雨情の湯」で、鉄分豊富な天然温泉の温もりを堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 石段街のほぼ中央まで徒歩わずか1分の絶好アクセス
                    </h5>
                    <p className="text-stone-600 leading-relaxed">温泉街の活気を感じながら、夜の石段街のライトアップや射的遊び、朝の散策にいつでも気軽に出かけられる立地が魅力です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 上州牛と地元採れたて食材を盛り込んだ手作り和食膳
                    </h5>
                    <p className="text-stone-600 leading-relaxed">上州牛のすき焼きや旬の鍋料理、群馬名物の手作り料理が並ぶ満足度の高い夕食。落ち着いた雰囲気の中で美味を味わえます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.40点、口コミ2100件超。「石段街がすぐそこで便利、お湯が正真正銘の茶褐色の黄金の湯で最高だった」「接客が親切で居心地が良かった」と好評です。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 渋川市伊香保町伊香保60</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥14,100〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>17741</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17741"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】伊香保温泉　森秋旅館 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/147464/147464.jpg"
                alt="伊香保温泉　千明仁泉亭（ちぎらじんせんてい）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.58（口コミ 580件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">群馬県渋川市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  伊香保温泉　千明仁泉亭（ちぎらじんせんてい）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  文豪徳富蘆花ゆかりの老舗！黄金の湯を贅沢に100％源泉掛け流しで注ぐ名物大浴場と貸切風呂
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  伊香保温泉 千明仁泉亭（ちぎらじんせんてい） —— 文学の薫る歴史宿。滝のように注ぐ黄金の湯と四つの無料貸切風呂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 伊香保屈指の湯量を誇る「黄金の湯」完全掛け流し
                    </h5>
                    <p className="text-stone-600 leading-relaxed">伊香保の源泉湧出量の主要な権利を持つ宿。大浴場「仁乃湯」では、湯口からドバドバと滝のように注がれる新鮮な黄金の湯を贅沢に味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 空いていれば予約不要・無料で何度でも入れる四つの貸切風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">プライベートに源泉を満喫できる四つの貸切露天風呂・家族風呂を完備。ご夫婦やカップル、ファミリーで気兼ねなく湯浴みを楽しめます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 名作『不如帰』の舞台となった歴史と落ち着いた和モダン空間
                    </h5>
                    <p className="text-stone-600 leading-relaxed">徳富蘆花が滞在し名作を執筆した由緒ある宿。木の温もりを大切にしたリノベーション客室で、静かな時の流れに浸ることができます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.60点、口コミ1100件超。「黄金の湯の湯量が桁違いで最高のお湯」「無料の貸切風呂がたくさんあり、石段街も近くて最高だった」と熱心な温泉ファンから支持。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>群馬県 渋川市伊香保町伊香保　４５番地</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥18,700〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>147464</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D147464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】伊香保温泉　千明仁泉亭（ちぎらじんせんてい） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 伊香保温泉街・石段街散策＆水沢うどん街ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                365段の石段街散策と伊香保神社への参拝
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                「温泉街が1年365日にぎわうように」との願いが込められた365段の石段。登りきった最上段には縁結びや子宝の神様として知られる「伊香保神社」があり、街を見下ろす絶景が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                河鹿橋の紅葉と源泉湧出地の散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                伊香保神社の奥、湯元付近にある朱塗りの太鼓橋「河鹿橋」。春の新緑、秋の鮮やかなモミジの紅葉ライトアップは息を呑む美しさです。隣接する飲泉所で鉄分を含む温泉の試飲もできます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                水沢うどん街道での日本三大うどんランチ
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                伊香保温泉から車で約10分の場所にある水沢うどん街道。400年以上の歴史を持ち、讃岐・稲庭と並ぶ日本三大うどんの一つ。コシのある透き通った麺と胡麻ダレの組み合わせが絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              群馬県渋川市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「群馬県渋川市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で渋川市を選び、寄付額の30%相当のトラベルクーポンを返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: 関越道やJR上越線・特急草津・四万号で快適アクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                上野駅から特急草津・四万号で渋川駅まで約1時間40分、そこから路線バスで約25分。3年間の有効期間内で、石段街の祭りや紅葉シーズンに合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                福一、森秋旅館、千明仁泉亭などの対象宿プランを選び、決済確認画面でクーポンを選択すれば宿泊料金から大幅な値引きが適用されます。
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-gora-onsen-private-roten-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 全室客室露天風呂付き極上宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
