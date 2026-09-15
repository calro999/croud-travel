import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【宇奈月温泉ひとり旅・黒部峡谷秘境おこもり】日本一の透明度・峡谷美露天風呂・富山湾の白えび＆寒鰤！トロッコ電車玄関口の名湯厳選3宿',
  description: 'V字峡谷の絶景を抱く富山屈指の名湯・宇奈月温泉！峡谷の四季と富山の旬菜料理が評判のラグジュアリー宿「サン柳亭」、露天風呂とサウナ・充実のラウンジサービスを備えた「グランヴィリオホテル宇奈月温泉」、竹久夢二や川端康成ゆかりの黒部川沿いの老舗「延対寺荘」を楽天API最新データに基づき徹底比較。',
  keywords: '宇奈月温泉 一人旅 宿,宇奈月 ホテル 一人 温泉,サン柳亭 宇奈月,グランヴィリオホテル宇奈月温泉,延対寺荘 宇奈月,黒部峡谷 ひとり旅 おこもり',
  openGraph: {
    title: '【宇奈月温泉ひとり旅・黒部峡谷秘境おこもり】日本一の透明度・峡谷美露天風呂・富山湾の白えび＆寒鰤！トロッコ電車玄関口の名湯厳選3宿',
    description: 'V字峡谷の絶景を抱く富山屈指の名湯・宇奈月温泉！峡谷の四季と富山の旬菜料理が評判のラグジュアリー宿「サン柳亭」、露天風呂とサウナ・充実のラウンジサービスを備えた「グランヴィリオホテル宇奈月温泉」、竹久夢二や川端康成ゆかりの黒部川沿いの老舗「延対寺荘」を楽天API最新データに基づき徹底比較。',
    url: 'https://croud-travel.pages.dev/toyama-unazuki-solo-retreat-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【宇奈月温泉ひとり旅・黒部峡谷秘境おこもり】日本一の透明度・峡谷美露天風呂・富山湾の白えび＆寒鰤！トロッコ電車玄関口の名湯厳選3宿',
    description: 'V字峡谷の絶景を抱く富山屈指の名湯・宇奈月温泉！峡谷の四季と富山の旬菜料理が評判のラグジュアリー宿「サン柳亭」、露天風呂とサウナ・充実のラウンジサービスを備えた「グランヴィリオホテル宇奈月温泉」、竹久夢二や川端康成ゆかりの黒部川沿いの老舗「延対寺荘」を楽天API最新データに基づき徹底比較。',
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
    mainEntityOfPage: 'https://croud-travel.pages.dev/toyama-unazuki-solo-retreat-onsen-stay',
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
          <span className="text-stone-800 font-medium truncate">【宇奈月温泉ひとり旅・黒部峡谷秘境おこもり】日本一の透明度・峡谷美露天風呂・富山湾の白えび＆寒鰤！トロッコ電車玄関口の名湯厳選3宿</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダーエリア */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
            富山・宇奈月温泉ひとり旅＆黒部峡谷おこもり特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            【宇奈月温泉ひとり旅・黒部峡谷秘境おこもり】日本一の透明度・峡谷美露天風呂・富山湾の白えび＆寒鰤！トロッコ電車玄関口の名湯厳選3宿
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mb-6">
            更新日：2026年9月16日 | 監修：クラウドトラベル ひとり旅・出張調査班（楽天トラベルAPI最新提携）
          </p>
          
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 sm:p-6 text-stone-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p className="font-bold text-amber-950 text-base sm:text-lg">
              日本有数の透明度を誇る弱アルカリ性単純温泉。黒部川のエメラルドグリーンの清流を眺め、富山湾「天然の生簀」の海の幸を一人静かに堪能する至福の休日
            </p>
            <p>
              北陸新幹線の黒部宇奈月温泉駅から富山地方鉄道で約25分。立山連峰と黒部峡谷の雄大な大自然に囲まれた宇奈月温泉は、無色透明で肌に優しい「美肌の湯」。黒部峡谷トロッコ電車の起点としても名高く、四季折々のダイナミックな山肌と清らかな水音が、忙しい日常を完全にリセットしてくれます。
            </p>
            <p>
              プライベート感あふれる渓谷沿いの隠れ宿から、近代的な快適設備とサウナを備えたリゾートホテルまで、楽天トラベル公式APIより直接取得した最新スペックをもとに厳選紹介します。
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
            <li><a href="#hotel-1" className="text-amber-800 hover:underline">▶ 1. 人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭（★4.7 / 最低目安：22,300円〜）</a></li>
            <li><a href="#hotel-2" className="text-amber-800 hover:underline">▶ 2. グランヴィリオホテル宇奈月温泉－ルートインホテルズ－（★4.62 / 最低目安：11,200円〜）</a></li>
            <li><a href="#hotel-3" className="text-amber-800 hover:underline">▶ 3. 宇奈月温泉の老舗旅館　延対寺荘（★4.32 / 最低目安：13,200円〜）</a></li>
          </ul>
        </section>

        {/* 各ホテル紹介 */}
        <div className="space-y-8 mb-12">
        <article id="hotel-1" className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-20">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">第1位</span>
              <span className="text-xs text-stone-500 font-medium">富山県 黒部市宇奈月温泉13周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.7 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">22,300円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg"
                  alt="人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              令和5年3月オープン☆川側特別室　宇奈月の山々と眼下に清流黒部川　貸切岩盤浴や貸切露天風呂も好評！
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>令和5年3月オープン☆川側特別室　宇奈月の山々と眼下に清流黒部川　貸切岩盤浴や貸切露天風呂も好評！</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：富山地方鉄道　宇奈月温泉駅から送迎車あり</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39383"
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
              <span className="text-xs text-stone-500 font-medium">富山県 黒部市宇奈月温泉7-周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              グランヴィリオホテル宇奈月温泉－ルートインホテルズ－
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.62 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">11,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/184485/184485.jpg"
                  alt="グランヴィリオホテル宇奈月温泉－ルートインホテルズ－ 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              2022年9月28日(水)OPEN！天然温泉大浴場を備えたリゾートホテルで癒しのひとときを
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>2022年9月28日(水)OPEN！天然温泉大浴場を備えたリゾートホテルで癒しのひとときを</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：富山地方鉄道 宇奈月温泉駅より 徒歩5分/北陸道 黒部ICより 車で約20分</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D184485"
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
              <span className="text-xs text-stone-500 font-medium">富山県 黒部市宇奈月温泉53周辺</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              宇奈月温泉の老舗旅館　延対寺荘
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="text-amber-600 font-bold flex items-center gap-1 text-base">
                ★ 4.32 <span className="text-xs text-stone-500 font-normal">（楽天トラベル高評価）</span>
              </span>
              <span className="text-stone-600 text-xs">
                宿泊目安：<strong className="text-stone-900 text-sm">13,200円〜</strong> / 人（税込）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 sm:col-span-2">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804.jpg"
                  alt="宇奈月温泉の老舗旅館　延対寺荘 外観・館内"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。
            </p>

            <div className="bg-stone-50 p-4 rounded-xl mb-6">
              <h3 className="text-xs font-bold text-stone-700 mb-2">このホテルの注目ポイント</h3>
              <ul className="text-xs text-stone-600 space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>温泉街でも最も眺望の良い場所に立地し</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>源泉１００％の加温</span></li>
                    <li className="flex items-start gap-2"><span className="text-amber-600 font-bold">✓</span><span>加水無しの湯がお楽しみいただけます</span></li>
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-500">アクセス：北陸自動車道黒部 Ｉ．Ｃより２０分。富山地方鉄道「宇奈月温泉駅」より徒歩５分。</span>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D4804"
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
            <span>宇奈月温泉ひとり旅・黒部峡谷トロッコとやまやきグルメを巡る現地TIPS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">黒部峡谷トロッコ電車で鐘釣・欅平へ秘境クルーズ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">開放感あふれるトロッコ電車に揺られ、後曳橋や万年雪、黒部川の深い碧さを間近に体感。大自然のマイナスイオンを一人占めできます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">「想影橋」「やまびこ遊歩道」を歩く峡谷森林浴散歩</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">黒部川にかかるアーチ橋や旧軌道敷を活用した遊歩道。紅葉や新緑のトンネルを抜け、鉄橋を渡るトロッコ電車のシャッターチャンスも狙えます。</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">富山湾の宝石「白えび」「紅ズワイガニ」と名水地ビール</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">黒部の名水で仕込んだクラフトビール「宇奈月ビール」とともに、甘みあふれる白えびのお造りや天ぷらを味わう贅沢な一人晩酌。</p>
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
                <span>一人旅で富山の旬の味覚とプライベートな露天風呂空間を極めるなら？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「宇奈月温泉 サン柳亭」は全室から峡谷を望み、富山湾の厳選食材を用いた会席料理と上質な温泉空間で一人旅でも極上の安らぎを得られます。
              </p>
            </div>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                <span className="text-amber-700 font-bold">Q.</span>
                <span>サウナや充実のホテルライクなサービスを求める一人旅におすすめは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                「グランヴィリオホテル宇奈月温泉」はルートイングループのハイグレードリゾート。温泉露天風呂に加え本格サウナや快適な無料ラウンジが一人旅に大好評です。
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
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D39383"
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
