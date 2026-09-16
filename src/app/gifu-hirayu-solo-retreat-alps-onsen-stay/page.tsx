import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【奥飛騨・平湯温泉ひとり旅・北アルプス秘湯おこもり】毎分1万リットル湧出・飛騨牛炭火焼き・新穂高ロープウェイ！乗鞍・上高地玄関口の厳選3宿',
  description: '北アルプスの麓に湧く奥飛騨最古の名湯・平湯温泉！岐阜料理師範の主人が手掛ける飛騨牛会席と無料貸切露天風呂が口コミ★4.7超の「お宿 栄太郎」、庭園露天風呂と自家源泉掛け流しが自慢の「湯の平館」、築150年の飛騨民家を移築した囲炉裏情緒の「おやど 甚九郎」を楽天API最新データに基づき徹底比較。',
  keywords: '平湯温泉 一人旅 宿,平湯温泉 ホテル 一人,お宿栄太郎 平湯,湯の平館 平湯温泉,おやど甚九郎,奥飛騨 ひとり旅 おこもり',
  openGraph: {
    title: '【奥飛騨・平湯温泉ひとり旅・北アルプス秘湯おこもり】毎分1万リットル湧出・飛騨牛炭火焼き・新穂高ロープウェイ！乗鞍・上高地玄関口の厳選3宿',
    description: '北アルプスの麓に湧く奥飛騨最古の名湯・平湯温泉！岐阜料理師範の主人が手掛ける飛騨牛会席と無料貸切露天風呂が口コミ★4.7超の「お宿 栄太郎」、庭園露天風呂と自家源泉掛け流しが自慢の「湯の平館」、築150年の飛騨民家を移築した囲炉裏情緒の「おやど 甚九郎」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/gifu-hirayu-solo-retreat-alps-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【奥飛騨・平湯温泉ひとり旅・北アルプス秘湯おこもり】毎分1万リットル湧出・飛騨牛炭火焼き・新穂高ロープウェイ！乗鞍・上高地玄関口の厳選3宿',
    description: '北アルプスの麓に湧く奥飛騨最古の名湯・平湯温泉！岐阜料理師範の主人が手掛ける飛騨牛会席と無料貸切露天風呂が口コミ★4.7超の「お宿 栄太郎」、庭園露天風呂と自家源泉掛け流しが自慢の「湯の平館」、築150年の飛騨民家を移築した囲炉裏情緒の「おやど 甚九郎」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/gifu-hirayu-solo-retreat-alps-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【奥飛騨・平湯温泉ひとり旅・北アルプス秘湯おこもり】毎分1万リットル湧出・飛騨牛炭火焼き・新穂高ロープウェイ！乗鞍・上高地玄関口の厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            岐阜・平湯温泉ひとり旅＆奥飛騨北アルプスおこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【奥飛騨・平湯温泉ひとり旅・北アルプス秘湯おこもり】毎分1万リットル湧出・飛騨牛炭火焼き・新穂高ロープウェイ！乗鞍・上高地玄関口の厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              標高1,250m、乗鞍岳や笠ヶ岳を間近に仰ぐ奥飛騨温泉郷の玄関口。武田信玄の家臣が白猿によって導かれたと伝わる野趣あふれる秘湯で、心身を解き放つ休日
            </p>
            <p>
              松本や高山から特急バスでアクセスできる山岳温泉郷・平湯温泉。奥飛騨の中でも最も古い歴史を持ち、ナトリウム・カルシウム・マグネシウムを含む炭酸水素塩泉が豊富に自噴しています。湯量豊富で湯の花が舞う茶褐色の源泉掛け流し風呂と、香ばしく焼き上げられた飛騨牛の旨味が、山歩きや一人旅の夜を至福の寛ぎで満たします。
            </p>
            <p>
              料理人の技が光る絶品グルメの隠れ宿から、飛騨の古民家情緒あふれる囲炉裏宿まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 無料露天付貸切風呂と岐阜料理師範の宿　お宿　栄太郎（★4.77 / 最低目安：14,850円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 奥飛騨　平湯温泉　湯の平館（★4.49 / 最低目安：14,000円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 築１５０年の飛騨民家　おやど　甚九郎（★4.56 / 最低目安：11,770円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷平周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              無料露天付貸切風呂と岐阜料理師範の宿　お宿　栄太郎
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.77 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,850円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20691/20691.jpg"
                  alt="無料露天付貸切風呂と岐阜料理師範の宿　お宿　栄太郎 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              天然温泉１００％かけ流し。料理でお客様を笑顔にできるよう、一品一品真心込めてご提供！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>天然温泉１００％かけ流し</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>料理でお客様を笑顔にできるよう</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>一品一品真心込めてご提供！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ高山線高山駅又はＪＲ中央線松本駅よりバス／東海北陸道清見ＩＣ、長野自動車道松本ＩＣよりＲ158経由で平湯温泉</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20691"
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
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷平周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              奥飛騨　平湯温泉　湯の平館
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.49 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">14,000円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20692/20692.jpg"
                  alt="奥飛騨　平湯温泉　湯の平館 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              珍しい２種の自家源泉。３つの貸切露天風呂は空いていれば自由に利用可能。大浴場２４���間入浴可能。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>珍しい２種の自家源泉</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>３つの貸切露天風呂は空いていれば自由に利用可能</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>大浴場２４���間入浴可能</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：ＪＲ高山駅又はＪＲ松本駅よりバスで平湯温泉／東海北陸道高山西ＩＣ、長野自動車道松本ＩＣよりＲ158経由で平湯温泉</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20692"
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
              <span className="text-xs text-stone-500 font-medium">岐阜県 高山市奥飛騨温泉郷一周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              築１５０年の飛騨民家　おやど　甚九郎
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.56 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,770円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/140780/140780.jpg"
                  alt="築１５０年の飛騨民家　おやど　甚九郎 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              【新平湯温泉】総檜造りの飛騨古民家宿。自慢の露天風呂と郷土料理。Wi-Fi利用可能
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>【新平湯温泉】総檜造りの飛騨古民家宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>自慢の露天風呂と郷土料理</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>Wi-Fi利用可能</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：JR高山駅―新穂高温泉行バス「禅通寺前」下車―徒歩2分。高山ICより車で60分。松本ＩＣより70分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D140780"
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
            <span>平湯温泉ひとり旅・平湯大滝と新穂高ロープウェイを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「新穂高ロープウェイ」日本唯一の2階建てゴンドラで標高2,156m雲上へ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">槍ヶ岳や西穂高岳の雄大な360度大パノラマデッキ。澄み渡る空気の中で北アルプスの頂を仰ぐ、圧倒的なスケールのネイチャー体験。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「平湯大滝」日本の滝百選・落差64mのダイナミックな名瀑散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">温泉街から遊歩道を歩いて行ける名瀑。四季折々に表情を変え、冬には滝全体が巨大な氷柱と化す結氷まつりも圧巻の迫力です。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">平湯名物「はんたい玉子」（温泉卵）と「飛騨牛朴葉味噌焼き」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">白身が半熟で黄身が固い不思議な温泉卵。夕食には香ばしい朴葉の香りと自家製味噌が絡み合う飛騨牛ステーキを地酒「飛騨娘」とともに。</p>
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
                <span>一人旅で極上の飛騨牛料理と無料の貸切露天風呂を楽しめる宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「無料露天付貸切風呂と岐阜料理師範の宿 お宿 栄太郎」は楽天口コミ★4.7超。飛騨牛の絶品料理と源泉掛け流しの貸切露天風呂が一人旅の宿泊者から大絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>飛騨の伝統的な古民家のぬくもりと囲炉裏料理を味わうなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「築１５０年の飛騨民家 おやど 甚九郎」は歴史ある梁や柱が美しい木造民家宿。源泉掛け流しの露天風呂と素朴で温かい郷土料理が一人旅に大人気です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D20691"
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
