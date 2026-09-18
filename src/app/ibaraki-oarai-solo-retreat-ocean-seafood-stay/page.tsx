import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【茨城・大洗ひとり旅・大洗磯前神社神磯鳥居おこもり】太平洋の荒波朝日・冬のアンコウ鍋・常陸牛！水戸駅直通鹿島臨海鉄道の海辺厳選3宿',
  description: '海上の岩礁に立つ神磯の鳥居と豊かな黒潮の幸に恵まれた茨城・大洗！家庭的な温かいもてなしと地魚会席が口コミ★4.7の「旅館・民宿くるみ屋」、格調高い老舗の伝統と美食を誇る「料亭旅館 大洗山口楼」、アンコウ料理と落ち着いた和の風情が評判の「割烹旅館 肴屋本店」を楽天API最新データに基づき徹底比較。',
  keywords: '大洗 一人旅 宿,大洗 ホテル 一人 旅館,くるみ屋 大洗,大洗山口楼,肴屋本店 大洗,大洗 ひとり旅 おこもり',
  openGraph: {
    title: '【茨城・大洗ひとり旅・大洗磯前神社神磯鳥居おこもり】太平洋の荒波朝日・冬のアンコウ鍋・常陸牛！水戸駅直通鹿島臨海鉄道の海辺厳選3宿',
    description: '海上の岩礁に立つ神磯の鳥居と豊かな黒潮の幸に恵まれた茨城・大洗！家庭的な温かいもてなしと地魚会席が口コミ★4.7の「旅館・民宿くるみ屋」、格調高い老舗の伝統と美食を誇る「料亭旅館 大洗山口楼」、アンコウ料理と落ち着いた和の風情が評判の「割烹旅館 肴屋本店」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/ibaraki-oarai-solo-retreat-ocean-seafood-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【茨城・大洗ひとり旅・大洗磯前神社神磯鳥居おこもり】太平洋の荒波朝日・冬のアンコウ鍋・常陸牛！水戸駅直通鹿島臨海鉄道の海辺厳選3宿',
    description: '海上の岩礁に立つ神磯の鳥居と豊かな黒潮の幸に恵まれた茨城・大洗！家庭的な温かいもてなしと地魚会席が口コミ★4.7の「旅館・民宿くるみ屋」、格調高い老舗の伝統と美食を誇る「料亭旅館 大洗山口楼」、アンコウ料理と落ち着いた和の風情が評判の「割烹旅館 肴屋本店」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/ibaraki-oarai-solo-retreat-ocean-seafood-stay',
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
          <span className="text-stone-800 font-medium truncate">【茨城・大洗ひとり旅・大洗磯前神社神磯鳥居おこもり】太平洋の荒波朝日・冬のアンコウ鍋・常陸牛！水戸駅直通鹿島臨海鉄道の海辺厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            茨城・大洗ひとり旅＆太平洋神磯おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【茨城・大洗ひとり旅・大洗磯前神社神磯鳥居おこもり】太平洋の荒波朝日・冬のアンコウ鍋・常陸牛！水戸駅直通鹿島臨海鉄道の海辺厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              上野駅からJR常磐線特急ひたちで水戸まで約70分、鹿島臨海鉄道でわずか約15分。太平洋の白波が打ち寄せる海岸線で、神秘的な日の出と冬の味覚・鮟鱇（あんこう）料理に酔いしれる週末旅
            </p>
            <p>
              白砂青松の海岸美と古くからの漁港文化が息づく茨城・大洗。徳川光圀公も絶賛した景勝地であり、太平洋に面した大洗磯前神社の「神磯の鳥居」は、岩礁に砕け散る波しぶきと朝日が織りなす日本屈指の聖地です。冷え込む冬の「あんこう鍋（どぶ汁）」をはじめ、夏秋の岩牡蠣、春のシラスなど、黒潮と親潮が交わる鹿島灘の新鮮な海の幸が一人旅を迎えます。
            </p>
            <p>
              一人旅を温かく迎えてくれる料理自慢の割烹民宿から、伝統の粋を極めた老舗料亭旅館まで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 旅館・民宿くるみ屋（★4.7 / 最低目安：5,800円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. 料亭旅館　大洗山口楼（★4.6 / 最低目安：8,379円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 割烹旅館　肴屋本店（★4.27 / 最低目安：8,800円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">茨城県 鉾田市造谷605-6周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              旅館・民宿くるみ屋
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.7 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">5,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14519/14519.jpg"
                  alt="旅館・民宿くるみ屋 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              秋の茨城を満喫♪海の幸と寛ぎの宿くるみ屋
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>秋の茨城を満喫♪海の幸と寛ぎの宿くるみ屋</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：北関東自動車道（東水戸道路）水戸大洗ＩＣ～国道５１号鹿嶋方面へ１５分／鹿島旭駅車５分/茨城空港車２０分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14519%2F14519.html"
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
              <span className="text-xs text-stone-500 font-medium">茨城県 東茨城郡大洗町磯浜町周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              料亭旅館　大洗山口楼
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.6 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,379円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/84743/84743.jpg"
                  alt="料亭旅館　大洗山口楼 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              潮騒が心地よい全５室の宿。新鮮な食材を目の前で焼き上げる名物うしお鉄板焼き、冬はあんこう鍋をご用意
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>潮騒が心地よい全５室の宿</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>新鮮な食材を目の前で焼き上げる名物うしお鉄板焼き</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>冬はあんこう鍋をご用意</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：大洗駅から車で約7分／水戸駅から車で約28分／水戸大洗ICから車で約18分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84743%2F84743.html"
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
              <span className="text-xs text-stone-500 font-medium">茨城県 東茨城郡大洗町磯浜町周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              割烹旅館　肴屋本店
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.27 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">8,800円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/109198/109198.jpg"
                  alt="割烹旅館　肴屋本店 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              茨城の新鮮な地魚料理が自慢！老舗の割烹旅館で、常陸牛・鹿島灘はまぐりなど旬の味を満喫。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>茨城の新鮮な地魚料理が自慢！老舗の割烹旅館で</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>鹿島灘はまぐりなど旬の味を満喫</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：大洗駅からタクシーで約５分（送迎・要電話連絡）</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109198%2F109198.html"
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
            <span>大洗ひとり旅・神磯の鳥居とアクアワールドを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「大洗磯前神社 神磯の鳥居」太平洋の岩礁に昇る日の出祈願</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">荒波が洗う岩礁の上に立つ鳥居。夜明けの空が白み始め、水平線から昇る朝日が鳥居を黄金色に染め上げる荘厳な光景を一人静かに拝む時間。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「アクアワールド茨城県大洗水族館」日本一のサメ飼育数を誇る大水族館</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">約60種ものサメや日本最大級の専用水槽で泳ぐマンボウ。太平洋に面した開放的なデッキで海風を感じながら、大人の知的好奇心を満たす一人歩き。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">大洗名物「あんこう鍋（どぶ汁）」と那珂湊おさかな市場の回転寿司</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">あん肝を鍋肌で乾煎りして味噌と出汁で溶かした濃厚などぶ汁。那珂湊港の市場で味わう分厚いネタの地魚握り寿司も一人ランチの醍醐味。</p>
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
                <span>一人旅でとにかく温かいおもてなしと美味しい地魚料理を味わえる大洗の宿は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「旅館・民宿くるみ屋」は楽天口コミ★4.7超。気さくなもてなしとボリューム満点の海鮮料理が一人旅の宿泊者から絶賛されています。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>大洗名物のアンコウ料理や本格的な割烹会席を堪能したいなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「割烹旅館 肴屋本店」は大洗の老舗割烹。冬のあんこう料理をはじめとする旬の魚介会席と落ち着いた客室で、静かに美食を極める一人旅にぴったりです。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14519%2F14519.html"
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
