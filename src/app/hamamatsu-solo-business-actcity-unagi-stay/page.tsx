import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【浜松出張＆ソログルメ泊】新幹線直結アクトシティ・地上45階スカイビュー・絶品うなぎ！ものづくりの街の快適拠点 厳選3選',
  description: '東海道新幹線ひかり停車駅・静岡県浜松市！「楽器の街を象徴する45階建てランドマークタワー」を誇る「オークラアクトシティホテル浜松」、浜松駅徒歩すぐで国際水準の快適性を備えた「ANAクラウンプラザホテル浜松（旧ホテルクラウンパレス）」、浜松城公園の緑を望むシティリゾート「ホテルコンコルド浜松」を徹底特集。',
  keywords: '浜松 出張 ホテル おすすめ,浜松 一人旅 ホテル,オークラアクトシティホテル浜松 宿泊,ANAクラウンプラザホテル浜松 出張,浜松 うなぎ ホテル',
  openGraph: {
    title: '【浜松出張＆ソログルメ泊】新幹線直結アクトシティ・地上45階スカイビュー・絶品うなぎ！ものづくりの街の快適拠点 厳選3選',
    description: '東海道新幹線ひかり停車駅・静岡県浜松市！「楽器の街を象徴する45階建てランドマークタワー」を誇る「オークラアクトシティホテル浜松」、浜松駅徒歩すぐで国際水準の快適性を備えた「ANAクラウンプラザホテル浜松（旧ホテルクラウンパレス）」、浜松城公園の緑を望むシティリゾート「ホテルコンコルド浜松」を徹底特集。',
    url: 'https://croud-travel.pages.dev/hamamatsu-solo-business-actcity-unagi-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【浜松出張＆ソログルメ泊】新幹線直結アクトシティ・地上45階スカイビュー・絶品うなぎ！ものづくりの街の快適拠点 厳選3選',
    description: '東海道新幹線ひかり停車駅・静岡県浜松市！「楽器の街を象徴する45階建てランドマークタワー」を誇る「オークラアクトシティホテル浜松」、浜松駅徒歩すぐで国際水準の快適性を備えた「ANAクラウンプラザホテル浜松（旧ホテルクラウンパレス）」、浜松城公園の緑を望むシティリゾート「ホテルコンコルド浜松」を徹底特集。',
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
    datePublished: '2026-09-11T02:50:00+09:00',
    dateModified: '2026-09-11T02:50:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/hamamatsu-solo-business-actcity-unagi-stay',
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
        <span className="text-stone-700 font-medium">浜松・出張＆うなぎ・アクトシティ特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【浜松出張＆ソログルメ泊】新幹線直結アクトシティ・地上45階スカイビュー・絶品うなぎ！ものづくりの街の快適拠点 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>浜松・出張＆うなぎ・アクトシティ特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【浜松出張＆ソログルメ泊】新幹線直結アクトシティ・地上45階スカイビュー・絶品うなぎ！ものづくりの街の快適拠点 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          東海道新幹線ひかり停車駅・静岡県浜松市！「楽器の街を象徴する45階建てランドマークタワー」を誇る「オークラアクトシティホテル浜松」、浜松駅徒歩すぐで国際水準の快適性を備えた「ANAクラウンプラザホテル浜松（旧ホテルクラウンパレス）」、浜松城公園の緑を望むシティリゾート「ホテルコンコルド浜松」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            ハーモニカを模した摩天楼タワーと、芳ばしいうなぎの蒲焼きの香り——ものづくりの街で効率と安らぎを手に入れる「浜松スマート出張」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            東京と大阪のほぼ中間に位置し、ヤマハ・カワイ・スズキ・ホンダ発祥の地として世界的な産業が集結する静岡県浜松市。東海道新幹線の要所であり、日夜多くのエンジニアやビジネスパーソンが行き交います。日中の商談や工場視察を終えた後の楽しみは、何と言っても浜名湖産の肉厚な「うなぎ重」や、パリッと焼き上げられた「浜松餃子」、そして遠州灘の新鮮な海の幸です。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな浜松出張の成否を握るのが、新幹線改札からのアクセスと客室のデスク・快眠環境です。駅直結のランドマークタワーなら雨の日も荷物を持って歩き回る必要がなく、高層階からのパノラマビューが移動の疲れを一瞬で忘れさせてくれます。今回は出張とソログルメを完璧にサポートする浜松の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2055/2055.jpg"
                alt="オークラアクトシティホテル浜松（オークラホテルズ＆リゾーツ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.57 点（5057件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR浜松駅東口から動く歩道で直結！音楽の街を象徴する超高層45階タワーとオークラ伝統の格式美
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  オークラアクトシティホテル浜松 —— 東海道随一のスカイビュー。地上数十階から見下ろす遠州灘と富士山パノラマ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">浜松駅改札から動く歩道で雨に濡れずに直結する抜群のフットワーク</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アクトシティ浜松内に位置し、国際会議場やホールへも直結。新幹線の時間ギリギリまで客室で快適に過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">楽器の街にちなんだ音楽モチーフの客室とオークラならではの上質リネン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">全客室が32階以上の高層階。南側は遠州灘、北側は南アルプスや天気が良ければ富士山まで見渡せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ホテルオークラ伝統のフレンチ、中国料理、鉄板焼き、和食レストラン</p>
                    <p className="text-xs text-stone-600 leading-relaxed">一流シェフが腕を振るう美食空間。朝食ビュッフェでは地元遠州の食材をふんだんに味わえます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.57点。「駅直結で立地最高、高層階からの夜景が素晴らしい」「スタッフの立ち振る舞いが洗練されており、浜松出張の際は必ずここに泊まります」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県浜松市中央区板屋町111-2</p>
                  <p>🚆 ＪＲ浜松駅２階メイワン改札より連絡通路で徒歩３分。浜松IC.浜松西ICより車で約20分。エコパから電車で約40分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2055"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/2920/2920.jpg"
                alt="ＡＮＡクラウンプラザホテル浜松　ｂｙＩＨＧ（旧：ホテルクラウンパレス浜松）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.17 点（2452件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  JR浜松駅北口徒歩5分！IHGブランドの信頼と快適なワークスペース・睡眠プログラム
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ANAクラウンプラザホテル浜松（旧ホテルクラウンパレス浜松） —— ビジネスとリラックスの融合。独自の快眠プログラム「スリープ・アドバンテージ」
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">快適な睡眠をサポートする「スリープ・アドバンテージ」アメニティを無料提供</p>
                    <p className="text-xs text-stone-600 leading-relaxed">アイウォーマーや入浴剤、朝用・夜用のオリジナルブレンド茶を用意。出張の疲れを翌朝に残しません。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">ビジネス街や遠鉄百貨店、飲食店街へアクセス至便な北口好ロケーション</p>
                    <p className="text-xs text-stone-600 leading-relaxed">駅近ながら落ち着いた通りに面し、夜は静かに休息。周辺の人気うなぎ店や餃子店へも徒歩圏内です。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">広々としたワーキングデスクとエルゴノミクスチェアを完備</p>
                    <p className="text-xs text-stone-600 leading-relaxed">高速Wi-Fi完備で客室でのテレワークや資料作成が非常に快適。出張ビジネスパーソンを力強く支えます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.17点。「駅近で部屋が広く、スリープアドバンテージのおかげで熟睡できました」「スタッフの対応も丁寧でコストパフォーマンスが非常に高い」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県浜松市中央区板屋町110-17</p>
                  <p>🚆 駅北口・バスターミナルから地下道直結で徒歩３分。東名浜松ＩＣから約２０分。浜松西ＩＣからは約３０分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2920"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/1570/1570.jpg"
                alt="ホテルコンコルド浜松"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.31 点（3931件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  徳川家康ゆかりの出世城「浜松城公園」目の前！緑豊かな景色を望むシティリゾートホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ホテルコンコルド浜松 —— 都心のオアシス。浜松城天守閣と豊かな自然を眼下に眺める静寂ステイ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">浜松城公園に隣接し、客室の窓から四季折々の緑やライトアップされた天守閣を一望</p>
                    <p className="text-xs text-stone-600 leading-relaxed">歴史のロマンを感じる特等席。朝は澄んだ空気の中で浜松城公園のウォーキングが楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">名物「うなぎご飯」や静岡ご当地食材が並ぶ大人気の朝食バイキング</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライブキッチンで焼き上げるオムレツや名物料理。朝から活力みなぎる美味しい食事を堪能できます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">平面駐車場200台分無料完備！車での出張やドライブ一人旅に最強の利便性</p>
                    <p className="text-xs text-stone-600 leading-relaxed">新東名・東名高速からのアクセス良好。大型車でもストレスなく駐車可能です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.31点。「浜松城が目の前で朝の散歩がとても気持ちよかった」「朝食バイキングのうなぎご飯が美味しく、駐車場無料もありがたかった」と定評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 静岡県浜松市中央区元城町109-18</p>
                  <p>🚆 ■駐車場無料／東名「三方原スマートIC」から約15分or「浜松IC」から約20分■JR浜松駅より路線バスで約6分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D1570"
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
              浜松の二大ご当地グルメ「うなぎ＆餃子」を一人で味わう攻略法
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. うなぎは「関東風（蒸し焼き）」と「関西風（地焼き）」の好みを把握
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                浜名湖周辺は東西の食文化が交差する地。ふっくら柔らかな関東風か、皮がパリッと香ばしい関西風か、名店ごとに異なる焼き方を食べ比べるのが通です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 浜松餃子は駅構内や周辺の有名店（むつぎく、石松など）で円盤焼き
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                キャベツたっぷりのあっさり餡と、中央に添えられた茹でもやしが特徴。一人前（8〜10個）でもペロリと完食できます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 浜松駅北口の「有楽街」で地酒「花の舞」と遠州灘の刺身
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                地元・浜松の酒蔵「花の舞酒造」の純米吟醸。すっきり辛口の酒質が、脂の乗ったうなぎや餃子の旨味をキレよく引き立てます。
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
                <span>浜松駅周辺で一人で入りやすいうなぎ屋さんはありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                駅ビル「メイワン」やアクトシティ内、駅南口・北口の老舗（うな炭亭、八百徳など）はすべてカウンター席や一人用テーブルを備えており、出張客が気兼ねなく利用しています。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>新幹線「ひかり」と「こだま」の所要時間はどれくらいですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                東京駅から「ひかり」で約1時間25分、新大阪駅から「ひかり」で約1時間20分と、どちらのメガ都市からも乗り換えなしでアクセスできます。
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
