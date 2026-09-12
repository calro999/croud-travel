import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【霧島温泉ひとり旅・神話の湯治泊】14源泉の大浴場・桜島展望露天・天然泥パック！坂本龍馬ゆかりの地で魂を再生する名宿 厳選3選',
  description: '日本初の国立公園・天孫降臨神話が息づく南九州随一の名湯「鹿児島県霧島温泉郷」！「14源泉・1日1400万リットルの圧巻の大浴場硫黄谷庭園大風呂」を誇る「霧島ホテル」、全室客室露天風呂付き南欧風プレミアムリゾート「ラビスタ霧島ヒルズ」、森の露天風呂と天然泥パックが自慢の「旅行人山荘」を徹底特集。',
  keywords: '霧島温泉 一人旅 宿,霧島ホテル 宿泊,ラビスタ霧島ヒルズ 一人,旅行人山荘 露天風呂,霧島 湯治 ひとり旅',
  openGraph: {
    title: '【霧島温泉ひとり旅・神話の湯治泊】14源泉の大浴場・桜島展望露天・天然泥パック！坂本龍馬ゆかりの地で魂を再生する名宿 厳選3選',
    description: '日本初の国立公園・天孫降臨神話が息づく南九州随一の名湯「鹿児島県霧島温泉郷」！「14源泉・1日1400万リットルの圧巻の大浴場硫黄谷庭園大風呂」を誇る「霧島ホテル」、全室客室露天風呂付き南欧風プレミアムリゾート「ラビスタ霧島ヒルズ」、森の露天風呂と天然泥パックが自慢の「旅行人山荘」を徹底特集。',
    url: 'https://croud-travel.pages.dev/kirishima-solo-retreat-doroyu-onsen-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【霧島温泉ひとり旅・神話の湯治泊】14源泉の大浴場・桜島展望露天・天然泥パック！坂本龍馬ゆかりの地で魂を再生する名宿 厳選3選',
    description: '日本初の国立公園・天孫降臨神話が息づく南九州随一の名湯「鹿児島県霧島温泉郷」！「14源泉・1日1400万リットルの圧巻の大浴場硫黄谷庭園大風呂」を誇る「霧島ホテル」、全室客室露天風呂付き南欧風プレミアムリゾート「ラビスタ霧島ヒルズ」、森の露天風呂と天然泥パックが自慢の「旅行人山荘」を徹底特集。',
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
    datePublished: '2026-09-12T15:45:00+09:00',
    dateModified: '2026-09-12T15:45:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/kirishima-solo-retreat-doroyu-onsen-stay',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">霧島温泉・湯治泥湯＆絶景おこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【霧島温泉ひとり旅・神話の湯治泊】14源泉の大浴場・桜島展望露天・天然泥パック！坂本龍馬ゆかりの地で魂を再生する名宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>霧島温泉・湯治泥湯＆絶景おこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【霧島温泉ひとり旅・神話の湯治泊】14源泉の大浴場・桜島展望露天・天然泥パック！坂本龍馬ゆかりの地で魂を再生する名宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          日本初の国立公園・天孫降臨神話が息づく南九州随一の名湯「鹿児島県霧島温泉郷」！「14源泉・1日1400万リットルの圧巻の大浴場硫黄谷庭園大風呂」を誇る「霧島ホテル」、全室客室露天風呂付き南欧風プレミアムリゾート「ラビスタ霧島ヒルズ」、森の露天風呂と天然泥パックが自慢の「旅行人山荘」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            立ち上る真っ白な噴気と深緑の杉木立、硫黄の香りが漂う乳白色の秘湯——天孫降臨の神話の森で魂を解き放つ「霧島温泉大人の湯治リトリート」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            鹿児島空港から車や路線バスで約30〜40分。霧島連山の雄大な山懐に抱かれた「霧島温泉郷」は、坂本龍馬とお龍が日本最初の新婚旅行で訪れたことでも知られる日本屈指の温泉天国です。硫黄谷、丸尾、林田など泉質の異なる温泉が点在し、濛々と立ち上る湯煙、木々のざわめき、鳥のさえずりが旅人を迎えます。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな霧島でのソロステイを圧倒的なものにしてくれるのが、日本屈指のスケールを誇る巨大硫黄谷庭園大風呂や、森の中にぽつんと佇む天然泥パック付き露天風呂、そして全室客室露天風呂を備えたプレミアムリゾートです。何ものにも邪魔されず名湯に身を沈め、鹿児島の黒豚やキビナゴ、薩摩の地酒を味わう至福。今回は霧島温泉の厳選3宿をご紹介します。
          </p>
        </section>

        {/* 厳選ホテルリスト */}
        <div className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              編集部が厳選！おすすめの極上宿・ホテル詳細
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルの最新APIデータを反映。口コミ高評価＆こだわり設備を徹底チェック
            </p>
          </div>

          
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/38553/38553.jpg"
                alt="霧島温泉郷　霧島ホテル"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.63 点（2122件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  14の源泉から1日1400万リットルが湧出！圧巻のスケールを誇る「硫黄谷庭園大風呂」の驚異的な温泉力
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  霧島温泉郷 霧島ホテル —— 温泉ファンの聖地。硫黄泉・明礬泉・塩化物泉・鉄泉の4泉質を巡る至極の湯浴み
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">体育館のような広大さを誇る「硫黄谷庭園大風呂」（混浴ゾーン・女性専用時間あり）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">立ち湯や寝湯、打たせ湯など多彩な浴槽。青みがかった乳白色の濃厚な硫黄泉が旅の疲れを完全に浄化します。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">樹齢数百年の杉木立に囲まれた静寂なロケーションと広々とした客室</p>
                    <p className="text-xs text-stone-600 leading-relaxed">歴史ある名門温泉宿。窓の外に広がる豊かな自然を眺めながら静かな時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">鹿児島黒豚のしゃぶしゃぶや薩摩の郷土料理を味わう会席料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">地元の旬の美味を一品ずつ堪能。一人旅でも気兼ねなく美味しい夕餉を満喫できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.63点。「硫黄谷庭園大風呂の迫力と泉質の素晴らしさは日本一！温泉好きなら絶対に一度は行くべき」「一人で心ゆくまで温泉三昧できました」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県霧島市牧園町高千穂3948</p>
                  <p>🚆 ＪＲ　日豊本線　霧島神宮駅から車で２５分／鹿児島空港から車で３０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/168482/168482.jpg"
                alt="ラビスタ霧島ヒルズ（共立リゾート）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.54 点（1630件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  全室バルコニーに客室天然温泉露天風呂完備！桜島と錦江湾を見下ろす南欧風プレミアムリゾート
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ラビスタ霧島ヒルズ（共立リゾート） —— 霧島温泉の高台に佇む異国情緒。眺望露天風呂と無料貸切風呂
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">全客室のテラスに桜島を望む天然温泉露天風呂を完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">好きな時にいつでも客室露天風呂へ。夕暮れに赤く染まる桜島を眺めながら極上のプライベート湯浴みが叶います。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">予約不要で無料で利用できる3つの趣異なる貸切風呂（檜・岩・陶器）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">館内の湯巡りも充実。大浴場には本格サウナや水風呂も完備されています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">鹿児島の旬食材を贅沢に取り入れたイタリアンまたは和食のフルコースディナー</p>
                    <p className="text-xs text-stone-600 leading-relaxed">洗練されたレストラン空間。夜鳴きそばの無料サービスも大好評です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.54点。「部屋の露天風呂から見る桜島が美しすぎて感動しました」「貸切風呂も無料で食事も美味しく、自分への最高のご褒美になりました」と大人気。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県霧島市牧園町高千穂3812-6</p>
                  <p>🚆 鹿児島空港、横川ICよりそれぞれ車で約30分。霧島神宮駅より無料送迎有《要予約》</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D168482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="https://img.travel.rakuten.co.jp/share/HOTEL/25134/25134.jpg"
                alt="霧島温泉　霧島　旅行人山荘"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.79 点（1069件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業80余年！約5万坪の広大な自然林に囲まれる一軒宿・鹿が遊ぶ森の貸切露天風呂「赤松の湯」
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  霧島温泉 霧島 旅行人山荘 —— 楽天トラベル評価4.79点。天然泥パックと桜島パノラマ大浴場の大人の隠れ宿
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">森の中に佇む静寂の貸切露天風呂「赤松の湯」（野生の鹿が姿を見せることも）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">木漏れ日が差し込む原生林の特等席。小鳥のさえずりと風の音だけに包まれる至高の瞑想空間です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">大浴場「大浪の湯」で体験できる天然温泉泥パック（湯の花泥パック）</p>
                    <p className="text-xs text-stone-600 leading-relaxed">顔や体に塗って洗い流せばツルツルのお肌に。美肌効果抜群の温泉エンタメを体験できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">標高700mの高台から桜島や錦江湾を見渡す絶景ロビーと図書ラウンジ</p>
                    <p className="text-xs text-stone-600 leading-relaxed">こだわりの選書が並ぶライブラリー。コーヒーを片手に優雅な読書時間を過ごせます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.79点。「赤松の湯の静けさと泥パックが素晴らしかった」「スタッフの皆様がとても親切で、一人旅を温かく包み込んでくれる素晴らしいお宿」と感動の声多数。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 鹿児島県霧島市牧園町高千穂字龍石3865</p>
                  <p>🚆 JR霧島神宮駅～霧島行きバスにて３０分・「丸尾」下車／九州自動車道・横川ＩＣ～３０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D25134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            
        </div>

        {/* ガイド・ノウハウセクション */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-block bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-md">
              TIPS & GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              霧島温泉郷と坂本龍馬ゆかりの地を一人旅で巡るパワースポット散策
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 国宝「霧島神宮」の壮麗な朱塗りの社殿と樹齢800年の御神木に参拝
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                天孫降臨神話の主神・ニニギノミコトを祀る南九州屈指のパワースポット。凛とした空気の中で心を静かに清める。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 丸尾滝（まるおのたき）で湯煙を上げる珍しい温泉滝を見学
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                道路沿いにある落差約23mの豪快な滝。上流の温泉水が集まって流れ落ちるため、冬には滝全体から湯煙が立ち上る幻想的な光景。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 霧島温泉市場の足湯と温泉蒸し卵・蒸し饅頭でほっこりおやつタイム
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                温泉街の中心部。無料の足湯に浸かりながら、温泉の噴気で蒸し上げられた温泉たまごを味わう素朴な幸せ。
              </p>
            </div>
            
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 border-b border-stone-200 pb-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>鹿児島空港から霧島温泉郷へのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                鹿児島空港から霧島いわさきホテル行き路線バス（鹿児島交通）が運行しており、丸尾温泉や霧島温泉市場まで約30〜35分でスムーズにアクセスできます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人でレンタカーなしでも霧島温泉を満喫できますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                主要宿が集まる丸尾温泉周辺は徒歩や路線バスで移動可能で、霧島神宮へも路線バスが運行しています。宿の送迎サービスを活用すれば車なしでも快適に湯治ステイが可能です。
              </p>
            </div>
            
          </div>
        </section>

        {/* 関連リンク・ナビゲーション */}
        <div className="text-center pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            ← クラウドトラベル トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
