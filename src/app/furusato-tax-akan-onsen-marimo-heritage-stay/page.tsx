import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル',
  description: '道東の大自然とアイヌ文化が息づく阿寒摩周国立公園・北海道阿寒湖温泉を楽天ふるさと納税でお得に贅沢ステイ！最上階展望風呂と阿寒湖絶景を誇る「あかん遊久の里 鶴雅」、全室露天風呂付き・大人の至高オールインクルーシブ「あかん鶴雅別荘 鄙の座」、屋上インフィニティ温泉の「ニュー阿寒ホテル」を徹底比較。釧路市トラベルクーポン活用術を網羅。',
  keywords: '阿寒湖温泉 ふるさと納税,阿寒 鶴雅 ふるさと納税,あかん遊久の里 鶴雅 クーポン,鄙の座 阿寒湖 宿泊,釧路市 ふるさと納税 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-akan-onsen-marimo-heritage-stay',
  },
  openGraph: {
    title: '【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル',
    description: '道東の大自然とアイヌ文化が息づく阿寒摩周国立公園・北海道阿寒湖温泉を楽天ふるさと納税でお得に贅沢ステイ！最上階展望風呂と阿寒湖絶景を誇る「あかん遊久の里 鶴雅」、全室露天風呂付き・大人の至高オールインクルーシブ「あかん鶴雅別荘 鄙の座」、屋上インフィニティ温泉の「ニュー阿寒ホテル」を徹底比較。釧路市トラベルクーポン活用術を網羅。',
    url: 'https://croud-travel.pages.dev/furusato-tax-akan-onsen-marimo-heritage-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル',
    description: '道東の大自然とアイヌ文化が息づく阿寒摩周国立公園・北海道阿寒湖温泉を楽天ふるさと納税でお得に贅沢ステイ！最上階展望風呂と阿寒湖絶景を誇る「あかん遊久の里 鶴雅」、全室露天風呂付き・大人の至高オールインクルーシブ「あかん鶴雅別荘 鄙の座」、屋上インフィニティ温泉の「ニュー阿寒ホテル」を徹底比較。釧路市トラベルクーポン活用術を網羅。',
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
    datePublished: '2026-09-10T17:00:00+09:00',
    dateModified: '2026-09-10T17:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/furusato-tax-akan-onsen-marimo-heritage-stay',
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
        <span className="text-stone-700 font-medium truncate">【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>北海道釧路市 ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          道東の大自然とアイヌ文化が息づく阿寒摩周国立公園・北海道阿寒湖温泉を楽天ふるさと納税でお得に贅沢ステイ！最上階展望風呂と阿寒湖絶景を誇る「あかん遊久の里 鶴雅」、全室露天風呂付き・大人の至高オールインクルーシブ「あかん鶴雅別荘 鄙の座」、屋上インフィニティ温泉の「ニュー阿寒ホテル」を徹底比較。釧路市トラベルクーポン活用術を網羅。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            神秘の湖畔に広がる太古の森とアイヌの魂——雄阿寒岳・雌阿寒岳の雄姿を望む名湯リゾートで過ごす至高の休日
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            北海道釧路市阿寒町、阿寒摩周国立公園の中心に位置する阿寒湖（あかんこ）温泉。特別天然記念物「マリモ」が生息する神秘のカルデラ湖の南岸に湧き出る名湯です。阿寒湖温泉の歴史は古く、1858年に松浦武四郎が調査した際、すでにアイヌの人々が温泉を利用していた記録が残されています。湖の向こうには雄大な円錐形の山容を誇る「雄阿寒岳」がそびえ、四季折々の針葉樹林と穏やかな湖面が織りなす大自然のパノラマは、息を呑むほどの美しさです。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            阿寒湖温泉の大きな特徴は、北海道屈指の知名度と格式を誇る「鶴雅グループ」の洗練されたリゾート空間と、隣接する北海道最大の「阿寒湖アイヌコタン」で育まれる伝統文化に触れられる点。夕食には十勝牛や阿寒湖名物のワカサギ、ニジマス、道東の新鮮な海の幸を取り入れた創作会席や豪華ビュッフェが並びます。北海道釧路市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの高級リゾート宿へお得に宿泊でき、一生忘れられない北の大自然トリップが叶います。
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
                  <td className="p-3 font-bold text-amber-900">あかん遊久の里鶴雅</td>
                  <td className="p-3 font-bold">★ 4.53</td>
                  <td className="p-3 text-stone-600">最上階展望大浴場「天頂の湯」と阿寒湖一望の空中露天風呂！鶴雅グループのフラッグシップ名門リゾート</td>
                  <td className="p-3 text-stone-600">最高峰の歴史・大自然パノラマ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">阿寒湖温泉　あかん鶴雅別荘鄙の座</td>
                  <td className="p-3 font-bold">★ 4.86</td>
                  <td className="p-3 text-stone-600">全二十五室すべてに温泉露天風呂を完備！十三歳未満お断りの大人のための至極のオールインクルーシブ宿</td>
                  <td className="p-3 text-stone-600">大人の洗練・極上プライベート</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-900">ニュー阿寒ホテル（グランベルホテルズ&リゾーツ）</td>
                  <td className="p-3 font-bold">★ 4.13</td>
                  <td className="p-3 text-stone-600">阿寒湖と一体化する屋上インフィニティ温泉「天空ガーデンスパ」！パノラマ絶景と豪華リゾートバイキング</td>
                  <td className="p-3 text-stone-600">パノラマ展望・充実のスパ体験</td>
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/40045/40045.jpg"
                alt="あかん遊久の里鶴雅"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.53（口コミ 1835件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道釧路市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  あかん遊久の里鶴雅
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  最上階展望大浴場「天頂の湯」と阿寒湖一望の空中露天風呂！鶴雅グループのフラッグシップ名門リゾート
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  あかん遊久の里 鶴雅（つるが） —— 阿寒湖と連峰を見晴らす天空の湯。大自然と調和する圧倒的スケール
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 阿寒湖と雄阿寒岳の絶景を眼下に望む展望大浴場「天頂の湯」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">最上階に位置するパノラマ露天風呂。湖面を渡る清らかな風を感じながら、まるで空に浮かんでいるかのような極上の開放感を味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 阿寒湖の波打ち際に湧く一階大浴場「鹿泉の湯」の野天風呂
                    </h5>
                    <p className="text-stone-600 leading-relaxed">巨岩を配した野趣あふれる庭園露天風呂。丸太風呂や洞窟風呂など多彩な湯船で、阿寒の名湯を贅沢に満喫できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> オープンキッチンで道東の山海の幸が並ぶ豪華ディナービュッフェ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">目の前で焼き上げるステーキや新鮮な握り寿司、北海道スイーツがずらりと並ぶ人気ビュッフェ。個室料亭での本格和食会席も選べます。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.43点、口コミ3400件超。「展望露天風呂からの阿寒湖の眺めが圧巻」「食事の種類が多くどれも絶品、スタッフの気配りも素晴らしかった」と絶賛の声。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 釧路市阿寒町阿寒湖温泉4-6-10</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥19,541〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>40045</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】あかん遊久の里鶴雅 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 2 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/37362/37362.jpg"
                alt="阿寒湖温泉　あかん鶴雅別荘鄙の座"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.86（口コミ 245件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道釧路市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  阿寒湖温泉　あかん鶴雅別荘鄙の座
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  全二十五室すべてに温泉露天風呂を完備！十三歳未満お断りの大人のための至極のオールインクルーシブ宿
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  阿寒湖温泉 あかん鶴雅別荘 鄙の座（ひなのざ） —— 故郷のような温もりと最高峰の贅。客室露天風呂と阿寒湖の静寂
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 全客室に阿寒湖を望むプライベート温泉露天風呂を完備
                    </h5>
                    <p className="text-stone-600 leading-relaxed">ゆったりとした広さの専用露天風呂。誰にも邪魔されず、静かな湖面と森を眺めながら贅沢な源泉掛け流し温泉を堪能できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> バーラウンジや客室冷蔵庫のドリンクが無料のオールインクルーシブ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">宿泊代金に飲食が含まれるストレスフリーなシステム。バーカウンターで阿寒湖の夜景を眺めながら銘酒を心ゆくまで味わえます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 個室料亭でいただく道東の厳選素材を極めた創作茶懐石
                    </h5>
                    <p className="text-stone-600 leading-relaxed">料理長が一品一品に情熱を注ぎ込む芸術的な懐石料理。オホーツクの海鮮や十勝牛など、北海道の旬の旨味が凝縮されています。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.83点という驚異的な超高スコア。「お部屋の露天風呂、バーの雰囲気、お料理すべてが人生で一番」「静かに大人の休日を過ごすには最高の宿」と絶賛されています。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 釧路市阿寒町阿寒湖温泉2丁目8-1</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥48,279〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>37362</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D37362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】阿寒湖温泉　あかん鶴雅別荘鄙の座 の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>

          {/* ホテル 3 */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/9568/9568.jpg"
                alt="ニュー阿寒ホテル（グランベルホテルズ&リゾーツ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ 4.13（口コミ 2486件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">北海道釧路市</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ニュー阿寒ホテル（グランベルホテルズ&リゾーツ）
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  阿寒湖と一体化する屋上インフィニティ温泉「天空ガーデンスパ」！パノラマ絶景と豪華リゾートバイキング
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ニュー阿寒ホテル —— 屋上インフィニティスパからの絶景。阿寒湖畔に建つ大人気エンタメ温泉ホテル
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 阿寒湖と空が一体化する屋上インフィニティ温泉「天空ガーデンスパ」
                    </h5>
                    <p className="text-stone-600 leading-relaxed">専用の湯浴み着を着て男女一緒に楽しめる屋上絶景スパ。阿寒湖の大パノラマと満天の星空を仰ぐ唯一無二の入浴体験が人気です。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 最上階展望大浴場「雲海」とガラス張りのサウナ
                    </h5>
                    <p className="text-stone-600 leading-relaxed">阿寒湖を見下ろす広々とした大浴場。セルフロウリュが楽しめる本格サウナと冷水風呂で、極上の「ととのい」を体験できます。</p>
                  </div>
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> 北海道の食材をふんだんに取り入れた豪華和洋中リゾートバイキング
                    </h5>
                    <p className="text-stone-600 leading-relaxed">出来立ての鉄板焼きや握り寿司、北海道スイーツが並ぶ充実のディナー。家族連れやグループ旅行にも最適です。</p>
                  </div>
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">楽天トラベル評価4.24点、口コミ3800件超。「屋上のインフィニティスパが本当に素晴らしく夕日や星空が最高」「サウナもお風呂もバイキングも大満足」と高評価。</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>北海道 釧路市阿寒町阿寒湖温泉2-8-8</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>¥10,200〜 /人</div>
                <div><span className="font-semibold text-stone-700">楽天施設ID：</span>9568</div>
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D9568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】ニュー阿寒ホテル（グランベルホテルズ&リゾーツ） の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> 阿寒湖温泉・アイヌコタン＆マリモ観光船ガイド
          </h2>
          <div className="grid gap-4">

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">1</span>
                阿寒湖アイヌコタンでの伝統芸能「古式舞踊」鑑賞と木彫り工芸
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                約120名が暮らす北海道最大のアイヌの集落。アイヌシアター「イコロ」でのユネスコ無形文化遺産「アイヌ古式舞踊」や「ロストカムイ」の上演、民芸品店巡りが楽しめます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">2</span>
                阿寒湖遊覧船でのマリモ観察（チュウルイ島）
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                湖上を巡る定期遊覧船。途中で立ち寄るチュウルイ島のマリモ展示観察センターでは、巨大で美しい球状マリモを間近で見学できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">3</span>
                ボッケ遊歩道（泥火山）の原生林散策
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                温泉街のすぐ裏手に広がる遊歩道。地中の泥が熱いガスとともに湧き出る「ボッケ（泥火山）」や、エゾシカやエゾリスが生息する豊かな森の散歩を楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              北海道釧路市ふるさと納税×楽天トラベルクーポン活用手順
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">

            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 1: 楽天ふるさと納税で「北海道釧路市」クーポンを獲得
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                楽天ふるさと納税で釧路市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 2: たんちょう釧路空港または女満別空港経由で阿寒湖へアクセス
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                たんちょう釧路空港から阿寒バスで約1時間15分。3年間の有効期間内で、新緑の夏や冬の凍結湖でのワカサギ釣り・冬華火に合わせて計画できます。
              </p>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                遊久の里鶴雅、鄙の座、ニュー阿寒ホテルなどの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。
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
              <Link href="/furusato-tax-tsukioka-onsen-emerald-bihada-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 月岡温泉 エメラルドグリーン硫黄泉＆極上越後会席
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shima-onsen-retro-sekizenkan-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 四万温泉 レトロ重要文化財「元禄の湯」＆四万ブルー
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
