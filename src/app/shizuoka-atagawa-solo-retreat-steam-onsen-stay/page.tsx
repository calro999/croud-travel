import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【東伊豆・熱川温泉ひとり旅・自噴湯けむりおこもり】自家源泉100度超・六つの貸切露天風呂・金目鯛姿煮！伊豆急直通の海辺厳選3宿',
  description: '温泉櫓から豪快に立ち上る白い湯けむりが象徴的な東伊豆・熱川温泉！6つの多彩な貸切露天風呂と充実のサービスが口コミ★4.5超の「湯花満開」、相模灘を一望する屋上展望露天風呂が圧巻の「熱川プリンスホテル」、源泉掛け流しの湯守の宿「みはるや」を楽天API最新データに基づき徹底比較。',
  keywords: '熱川温泉 一人旅 宿,熱川 ホテル 一人 温泉,湯花満開 熱川,熱川プリンスホテル,みはるや 熱川,熱川 ひとり旅 おこもり',
  openGraph: {
    title: '【東伊豆・熱川温泉ひとり旅・自噴湯けむりおこもり】自家源泉100度超・六つの貸切露天風呂・金目鯛姿煮！伊豆急直通の海辺厳選3宿',
    description: '温泉櫓から豪快に立ち上る白い湯けむりが象徴的な東伊豆・熱川温泉！6つの多彩な貸切露天風呂と充実のサービスが口コミ★4.5超の「湯花満開」、相模灘を一望する屋上展望露天風呂が圧巻の「熱川プリンスホテル」、源泉掛け流しの湯守の宿「みはるや」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/shizuoka-atagawa-solo-retreat-steam-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【東伊豆・熱川温泉ひとり旅・自噴湯けむりおこもり】自家源泉100度超・六つの貸切露天風呂・金目鯛姿煮！伊豆急直通の海辺厳選3宿',
    description: '温泉櫓から豪快に立ち上る白い湯けむりが象徴的な東伊豆・熱川温泉！6つの多彩な貸切露天風呂と充実のサービスが口コミ★4.5超の「湯花満開」、相模灘を一望する屋上展望露天風呂が圧巻の「熱川プリンスホテル」、源泉掛け流しの湯守の宿「みはるや」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/shizuoka-atagawa-solo-retreat-steam-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【東伊豆・熱川温泉ひとり旅・自噴湯けむりおこもり】自家源泉100度超・六つの貸切露天風呂・金目鯛姿煮！伊豆急直通の海辺厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            静岡・熱川温泉ひとり旅＆東伊豆自噴湯けむりおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【東伊豆・熱川温泉ひとり旅・自噴湯けむりおこもり】自家源泉100度超・六つの貸切露天風呂・金目鯛姿煮！伊豆急直通の海辺厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              東京駅から伊豆急行線・特急踊り子号で直通約2時間15分。温泉街のいたる所から白い湯けむりが噴き上がるノスタルジックな海岸線で、濃厚な塩化物泉に浸かる至福の休日
            </p>
            <p>
              平安時代に太田道灌が手負いの猿が湯浴みしているのを見て発見したと伝わる熱川温泉。約100度の熱湯が自噴する豊富な湯量を誇り、ナトリウム・カルシウム-塩化物・硫酸塩泉は保温・保湿に優れ、冷え性や日々の疲労を根底から解きほぐします。眼前に広がる相模灘の水平線と波音、脂の乗った金目鯛の煮付けが一人旅の五感を深く満たします。
            </p>
            <p>
              プライベート感満点の貸切風呂巡りができる上質宿から、海一望の絶景パノラマ露天風呂を備えた名門リゾートまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開（★4.55 / 最低目安：10,500円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 熱川温泉　熱川プリンスホテル（★4.51 / 最低目安：9,900円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 伊豆熱川　自家源泉　おもてなしの宿　みはるや（★4.43 / 最低目安：13,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町奈良本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.55 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">10,500円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/28425/28425.jpg"
                  alt="伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸のお食事が人気。伊豆熱川駅5分
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>海の幸のお食事が人気</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊豆熱川駅5分</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。伊豆熱川駅から海へ徒歩３～５分。当館海側に無料駐車場あり。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28425%2F28425.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町奈良本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              熱川温泉　熱川プリンスホテル
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.51 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">9,900円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1222/1222.jpg"
                  alt="熱川温泉　熱川プリンスホテル 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              【星4.5】個性豊かな12の湯船と天空露天風呂、 空と海との一体感が味わえる魅力が光る贅沢宿！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【星4.5】個性豊かな12の湯船と天空露天風呂</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>空と海との一体感が味わえる魅力が光る贅沢宿！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：東京駅から乗換なしでスムーズ♪直通電車「踊り子号」を利用すれば、最短1時間40分で到着！伊豆熱川駅徒歩10分。送迎有</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1222%2F1222.html"
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
              <span className="text-xs text-stone-500 font-medium">静岡県 賀茂郡東伊豆町奈良本周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              伊豆熱川　自家源泉　おもてなしの宿　みはるや
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.43 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13731/13731.jpg"
                  alt="伊豆熱川　自家源泉　おもてなしの宿　みはるや 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              美食と源泉掛け流しに癒される、わずか10室の静かな湯宿。伊豆唯一の砂風呂も備える
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>美食と源泉掛け流しに癒される</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>わずか10室の静かな湯宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>伊豆唯一の砂風呂も備える</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：伊豆熱川駅より徒歩1分／東名高速道路厚木ＩＣより熱海経由約２時間半</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13731%2F13731.html"
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
            <span>熱川温泉ひとり旅・湯けむり散歩とバナナワニ園を巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「熱川バナナワニ園」世界有数のワニコレクションと熱帯植物</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉熱を利用して世界のワニ約140頭やマナティ、ニシレッサーパンダを飼育。温室に咲く色鮮やかな熱帯スイレンや洋ランを一人静かに鑑賞。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">温泉街の「お湯かけ弁財天」と自噴源泉で作る温泉たまご体験</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">約100度の温泉が噴き出すパワースポット。ザルに入れた卵を源泉池に浸して待つこと十数分、茹でたてのアツアツ温泉たまごを味わう素朴な旅情。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">熱川海岸遊歩道の潮風散歩と「伊豆熱川キンメ丼」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">白波が打ち寄せる海岸沿いのプロムナード。ランチには甘辛い煮汁が染み渡る金目鯛の切り身を贅沢に盛ったご当地丼を味わえます。</p>
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
                <span>一人旅で多彩な貸切風呂巡りと細やかなおもてなしを楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「伊豆熱川温泉 ふたりの湯宿 湯花満開」は6つの無料貸切風呂を備え、楽天口コミ★4.5超。一人旅でも贅沢な湯巡りと美味しい会席料理を満喫できます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>相模灘を見渡す絶景屋上露天風呂で開放的な滞在をしたいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「熱川温泉 熱川プリンスホテル」は高台に位置し、海と空に包まれるような屋上展望露天風呂や多彩なスパ施設が一人旅に大好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28425%2F28425.html"
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
