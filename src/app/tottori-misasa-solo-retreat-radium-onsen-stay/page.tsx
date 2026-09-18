import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【三朝温泉ひとり旅・世界屈指ラジウム泉おこもり】三徳山投入堂・回遊式大庭園露天風呂・鳥取和牛！三日目の朝に病が消える現代湯治厳選3宿',
  description: '世界有数の高濃度ラドン含有量を誇る三朝温泉！アットホームなぬくもりと口コミ★4.9点超の「ちくま旅館」、回遊式大庭園露天風呂「翠の湯」で多彩な湯処を巡る名門「依山楼 岩崎」、三朝川沿いでかがり火と純和風美を堪能できる「かがり火の宿 有楽」を楽天API最新データに基づき徹底比較。',
  keywords: '三朝温泉 一人旅 宿,三朝 ホテル 一人 温泉,ちくま旅館 三朝,依山楼 岩崎,かがり火の宿 有楽,三朝温泉 ラジウム ひとり旅',
  openGraph: {
    title: '【三朝温泉ひとり旅・世界屈指ラジウム泉おこもり】三徳山投入堂・回遊式大庭園露天風呂・鳥取和牛！三日目の朝に病が消える現代湯治厳選3宿',
    description: '世界有数の高濃度ラドン含有量を誇る三朝温泉！アットホームなぬくもりと口コミ★4.9点超の「ちくま旅館」、回遊式大庭園露天風呂「翠の湯」で多彩な湯処を巡る名門「依山楼 岩崎」、三朝川沿いでかがり火と純和風美を堪能できる「かがり火の宿 有楽」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/tottori-misasa-solo-retreat-radium-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【三朝温泉ひとり旅・世界屈指ラジウム泉おこもり】三徳山投入堂・回遊式大庭園露天風呂・鳥取和牛！三日目の朝に病が消える現代湯治厳選3宿',
    description: '世界有数の高濃度ラドン含有量を誇る三朝温泉！アットホームなぬくもりと口コミ★4.9点超の「ちくま旅館」、回遊式大庭園露天風呂「翠の湯」で多彩な湯処を巡る名門「依山楼 岩崎」、三朝川沿いでかがり火と純和風美を堪能できる「かがり火の宿 有楽」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/tottori-misasa-solo-retreat-radium-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【三朝温泉ひとり旅・世界屈指ラジウム泉おこもり】三徳山投入堂・回遊式大庭園露天風呂・鳥取和牛！三日目の朝に病が消える現代湯治厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            鳥取・三朝温泉ひとり旅＆世界屈指ラジウム泉おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【三朝温泉ひとり旅・世界屈指ラジウム泉おこもり】三徳山投入堂・回遊式大庭園露天風呂・鳥取和牛！三日目の朝に病が消える現代湯治厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              「三朝の湯に浸かり、吸い、飲むことで三日目の朝には病が消える」。三朝川のせせらぎと湯煙に包まれ、新陳代謝を促すホルミシス効果に心身が目覚める究極のソロ湯治
            </p>
            <p>
              平安末期、源義朝の家臣・大久保左馬之祐が白狼を助けた恩返しに発見されたと伝わる鳥取県・三朝（みささ）温泉。高濃度のラドンを含む放射能泉は世界屈指の品質を誇り、浸かるだけでなく湯気吸入や飲泉によって身体の免疫力・自然治癒力を高める現代湯治リトリートとして絶大な支持を集めています。
            </p>
            <p>
              文豪・島崎藤村や与謝野晶子も愛した創業百年の大庭園旅館から、一人旅を温かく迎えてくれる料理自慢の隠れ宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 三朝温泉　ちくま旅館（★4.9 / 最低目安：6,050円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 三朝温泉　依山楼　岩崎（★4.43 / 最低目安：6,050円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 三朝温泉　かがり火の宿　有楽（★4.46 / 最低目安：7,150円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">鳥取県 東伯郡三朝町山田12周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              三朝温泉　ちくま旅館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.9 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,050円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/168566/168566.jpg"
                  alt="三朝温泉　ちくま旅館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              ８５０年の歴史を誇る古湯・三朝温泉。女性３代で営み、心を込めた田舎料理とおもてなしが自慢の宿です。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>８５０年の歴史を誇る古湯・三朝温泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>女性３代で営み、心を込めた田舎料理とおもてなしが自慢の宿です</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ　倉吉駅よりお車にて約２０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168566%2F168566.html"
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
              <span className="text-xs text-stone-500 font-medium">鳥取県 東伯郡三朝町三朝36周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              三朝温泉　依山楼　岩崎
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.43 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">6,050円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5840/5840.jpg"
                  alt="三朝温泉　依山楼　岩崎 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              1920年(大正9年)創業★文人墨客に愛された三朝の老舗宿で回遊式大庭園風呂と山陰の旬味覚を満喫
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>1920年(大正9年)創業★文人墨客に愛された三朝の老舗宿で回遊式大庭園風呂と山陰の旬味覚を満喫</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：◆車 中国道院庄IC60分／山陰道泊東郷IC20分 ◆JR 倉吉駅送迎バス14時20分～18時 ※要予約（前日まで）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5840%2F5840.html"
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
              <span className="text-xs text-stone-500 font-medium">鳥取県 東伯郡三朝町三朝64周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              三朝温泉　かがり火の宿　有楽
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.46 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">7,150円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28068/28068.jpg"
                  alt="三朝温泉　かがり火の宿　有楽 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              世界屈指のラジウム泉、名湯三朝温泉。岩造りの露天風呂、大浴場でお楽し��下さい。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>世界屈指のラジウム泉、名湯三朝温泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>岩造りの露天風呂、大浴場でお楽し��下さい</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ倉吉駅より三朝温泉行きバスで温泉南口下車徒歩２分／中国道・院庄ＩＣ下車１７９Ｒ経由で５０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28068%2F28068.html"
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
            <span>三朝温泉ひとり旅・ラドン湯治と三徳山を極める現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">三朝橋の河原露天風呂「株湯」と足湯「かじかの湯」めぐり</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街のシンボル三朝橋のたもとに湧く開放的な河原風呂。川のせせらぎを聞きながら無料の足湯に浸かり、元湯「株湯」で新鮮な飲泉も楽しめます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">日本一危険な国宝「三徳山三仏寺 投入堂」の神秘遥拝</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">断崖絶壁の窪みに建てられた奇跡の木造建築。ふもとの遥拝所から望遠鏡で仰ぎ見るだけでも、修験道の霊山が放つ神聖な空気に圧倒されます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">鳥取名物「松葉ガニ」と鳥取和牛オレイン55の一人会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">旨味成分オレイン酸を豊富に含むブランド和牛「鳥取和牛オレイン55」。冬は甘みたっぷりの焼きガニや甲羅味噌焼きとともに、銘酒「日置桜」を傾けられます。</p>
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
                <span>一人旅で三朝温泉を代表する多彩な大庭園露天風呂を巡るなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「三朝温泉 依山楼 岩崎」は野趣あふれる回遊式大庭園露天風呂「山の湯」「左の湯」を誇り、一人旅でも贅沢な湯めぐり三昧が体験できます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>一人旅で口コミ評価が極めて高く、心温まる料理と湯治を楽しむなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「三朝温泉 ちくま旅館」は楽天トラベル口コミ★4.9点を誇る名宿。ラジウム温泉と温かい手作り料理が一人旅の湯治客に絶賛されています。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168566%2F168566.html"
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
