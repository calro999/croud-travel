import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【信州・乗鞍高原温泉ひとり旅・北アルプス白濁硫黄泉おこもり】乳白色源泉掛け流し・満天星空露天風呂・信州蕎麦と岩魚！乗鞍岳山麓の秘湯厳選3宿',
  description: '乗鞍岳の標高1,500mに湧く日本屈指の白濁ミルキー温泉・信州乗鞍高原温泉！囲炉裏料理と濃厚な乳白色露天風呂が口コミ★4.6超の「旅館 仙山乗鞍」、星空と大自然に囲まれたペンション「ピーポロ乗鞍」、純度100%掛け流しの濁り湯が評判の「温泉宿 けやき山荘」を楽天API最新データに基づき徹底比較。',
  keywords: '乗鞍高原温泉 一人旅 宿,乗鞍 ホテル 一人 温泉,仙山乗鞍,ピーポロ乗鞍,けやき山荘 乗鞍,乗鞍 ひとり旅 おこもり',
  openGraph: {
    title: '【信州・乗鞍高原温泉ひとり旅・北アルプス白濁硫黄泉おこもり】乳白色源泉掛け流し・満天星空露天風呂・信州蕎麦と岩魚！乗鞍岳山麓の秘湯厳選3宿',
    description: '乗鞍岳の標高1,500mに湧く日本屈指の白濁ミルキー温泉・信州乗鞍高原温泉！囲炉裏料理と濃厚な乳白色露天風呂が口コミ★4.6超の「旅館 仙山乗鞍」、星空と大自然に囲まれたペンション「ピーポロ乗鞍」、純度100%掛け流しの濁り湯が評判の「温泉宿 けやき山荘」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/nagano-norikura-solo-retreat-milky-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【信州・乗鞍高原温泉ひとり旅・北アルプス白濁硫黄泉おこもり】乳白色源泉掛け流し・満天星空露天風呂・信州蕎麦と岩魚！乗鞍岳山麓の秘湯厳選3宿',
    description: '乗鞍岳の標高1,500mに湧く日本屈指の白濁ミルキー温泉・信州乗鞍高原温泉！囲炉裏料理と濃厚な乳白色露天風呂が口コミ★4.6超の「旅館 仙山乗鞍」、星空と大自然に囲まれたペンション「ピーポロ乗鞍」、純度100%掛け流しの濁り湯が評判の「温泉宿 けやき山荘」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/nagano-norikura-solo-retreat-milky-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【信州・乗鞍高原温泉ひとり旅・北アルプス白濁硫黄泉おこもり】乳白色源泉掛け流し・満天星空露天風呂・信州蕎麦と岩魚！乗鞍岳山麓の秘湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            長野・乗鞍高原温泉ひとり旅＆北アルプス白濁美肌湯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【信州・乗鞍高原温泉ひとり旅・北アルプス白濁硫黄泉おこもり】乳白色源泉掛け流し・満天星空露天風呂・信州蕎麦と岩魚！乗鞍岳山麓の秘湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              松本駅から松本電鉄上高地線と路線バスを乗り継ぎ約80分。白樺の原生林と乗鞍岳の雄姿を仰ぎ、湯の花が沈殿する濃厚な乳白色の硫黄泉に浸かる山岳リトリート
            </p>
            <p>
              乗鞍岳の中腹、地下深くの火山活動によって生まれた乗鞍高原温泉。pH3前後の酸性硫黄泉は、空気に触れることで青みがかった乳白色に濁り、湯の花が舞う極上の湯触りを誇ります。夜には街明かりが一切ない標高1,500mの漆黒の夜空に天の川がくっきりと瞬き、露天風呂に浸かりながら満天の星を一人占めする時間は、人生観が変わるほどの感動を与えてくれます。
            </p>
            <p>
              素朴な囲炉裏端で山菜や岩魚を味わえる温かい温泉民宿から、星空鑑賞にも最適な静かな山岳ロッヂまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 乗鞍高原温泉　旅館　仙山乗鞍（★4.63 / 最低目安：11,300円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 乗鞍高原温泉　ピーポロ乗鞍（★4.62 / 最低目安：13,530円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 信州乗鞍高原温泉　濁り湯・掛け流し　温泉宿けやき山荘（★4.47 / 最低目安：6,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">長野県 松本市安曇4238-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              乗鞍高原温泉　旅館　仙山乗鞍
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.63 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,300円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5135/5135.jpg"
                  alt="乗鞍高原温泉　旅館　仙山乗鞍 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              県公認【信州オリジナル食材】提供する宿の登録宿。また、国内産・県内産にこだわる証「緑提灯」登録宿。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>県公認【信州オリジナル食材】提供する宿の登録宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>県内産にこだわる証「緑提灯」登録宿</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：新島々駅よりバスで６０分、松本ＩＣより５０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5135%2F5135.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 松本市安曇4306 周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              乗鞍高原温泉　ピーポロ乗鞍
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.62 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,530円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70179/70179.jpg"
                  alt="乗鞍高原温泉　ピーポロ乗鞍 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              木々に囲まれ自然を満喫出来る宿。乳白色の温泉露天で心くつろぐひと時を。夕食は安心の個室食
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>木々に囲まれ自然を満喫出来る宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>乳白色の温泉露天で心くつろぐひと時を</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>夕食は安心の個室食</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：松本電鉄上高地線　新島々駅よりバスにて１時間で観光センター前到着、徒歩１０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70179%2F70179.html"
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
              <span className="text-xs text-stone-500 font-medium">長野県 松本市安曇鈴蘭425周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              信州乗鞍高原温泉　濁り湯・掛け流し　温泉宿けやき山荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.47 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8400/8400.jpg"
                  alt="信州乗鞍高原温泉　濁り湯・掛け流し　温泉宿けやき山荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              江戸時代の古民家を移築しました、温泉は白い濁り湯です。上高地への駐車場までは１５分と便利です
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>江戸時代の古民家を移築しました</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温泉は白い濁り湯です</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>上高地への駐車場までは１５分と便利です</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：高速長野道松本ＩＣより４０km(約６０分)</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8400%2F8400.html"
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
            <span>乗鞍高原ひとり旅・善五郎の滝と一の瀬園地を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「一の瀬園地」白樺林とまいめの池に映る乗鞍岳の逆さ絶景散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">広大な高原湿原。整備された木道を一人歩き、澄んだ池の水面に映る残雪や紅葉の乗鞍岳を眺めながら静かな森林浴ウォーキング。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「善五郎の滝」「三本滝」日本の滝百選の雄大な滝巡りハイキング</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">落差21.5mの善五郎の滝は展望台から乗鞍岳をバックに滝を仰げる名所。滝壺からの飛沫を浴びて心身をリフレッシュするネイチャー体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">乗鞍名物「とうじそば」と信州サーモン・地酒「大雪渓」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">小分けにした蕎麦を投じ籠に入れ、山菜やキノコたっぷりの鍋にサッとくぐらせていただく伝統の温かい蕎麦。冷えた体に染み渡る一人鍋の至福。</p>
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
                <span>一人旅で濃厚な乳白色の源泉掛け流し風呂と信州の囲炉裏料理を楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「乗鞍高原温泉 旅館 仙山乗鞍」は楽天口コミ★4.6超。白濁した本物の硫黄泉露天風呂と、岩魚の塩焼きや山菜料理が一人旅の宿泊者から絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で気軽に掛け流しの濁り湯と静かな高原ステイを味わえる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「信州乗鞍高原温泉 温泉宿 けやき山荘」は手頃な価格帯でありながら、内湯・露天ともに純度100%掛け流しの乳白色泉を備え、コスパ抜群の一人旅が叶います。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5135%2F5135.html"
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
