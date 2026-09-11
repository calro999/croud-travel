import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【松山・道後温泉ひとり旅】日本最古の名湯・坊っちゃん湯・松山城・絶品鯛めし！文学と名湯に浸る大人のおこもり宿 厳選3選',
  description: '日本三古湯の一つ・3000年の歴史を誇る愛媛県松山市「道後温泉」！「夏目漱石や皇室を迎えてきた創業390年の名旅館」の「ふなや」、能舞台を備え数寄屋造りの風格が漂う「大和屋本店」、大街道の真ん中で松山城を望む最上階スカイスパ「CANDEO HOTELS 松山大街道」を徹底特集。',
  keywords: '道後温泉 一人旅 宿,松山 ホテル 一人旅 おすすめ,道後温泉 ふなや 宿泊,大和屋本店 一人,松山 鯛めし 温泉 ホテル',
  openGraph: {
    title: '【松山・道後温泉ひとり旅】日本最古の名湯・坊っちゃん湯・松山城・絶品鯛めし！文学と名湯に浸る大人のおこもり宿 厳選3選',
    description: '日本三古湯の一つ・3000年の歴史を誇る愛媛県松山市「道後温泉」！「夏目漱石や皇室を迎えてきた創業390年の名旅館」の「ふなや」、能舞台を備え数寄屋造りの風格が漂う「大和屋本店」、大街道の真ん中で松山城を望む最上階スカイスパ「CANDEO HOTELS 松山大街道」を徹底特集。',
    url: 'https://croud-travel.pages.dev/matsuyama-dogo-solo-retreat-onsen-taimeshi-stay',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【松山・道後温泉ひとり旅】日本最古の名湯・坊っちゃん湯・松山城・絶品鯛めし！文学と名湯に浸る大人のおこもり宿 厳選3選',
    description: '日本三古湯の一つ・3000年の歴史を誇る愛媛県松山市「道後温泉」！「夏目漱石や皇室を迎えてきた創業390年の名旅館」の「ふなや」、能舞台を備え数寄屋造りの風格が漂う「大和屋本店」、大街道の真ん中で松山城を望む最上階スカイスパ「CANDEO HOTELS 松山大街道」を徹底特集。',
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
    datePublished: '2026-09-11T12:30:00+09:00',
    dateModified: '2026-09-11T12:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/matsuyama-dogo-solo-retreat-onsen-taimeshi-stay',
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
        <span className="text-stone-700 font-medium">松山・道後温泉＆鯛めしおこもり特集</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">【松山・道後温泉ひとり旅】日本最古の名湯・坊っちゃん湯・松山城・絶品鯛めし！文学と名湯に浸る大人のおこもり宿 厳選3選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>松山・道後温泉＆鯛めしおこもり特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          【松山・道後温泉ひとり旅】日本最古の名湯・坊っちゃん湯・松山城・絶品鯛めし！文学と名湯に浸る大人のおこもり宿 厳選3選
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          日本三古湯の一つ・3000年の歴史を誇る愛媛県松山市「道後温泉」！「夏目漱石や皇室を迎えてきた創業390年の名旅館」の「ふなや」、能舞台を備え数寄屋造りの風格が漂う「大和屋本店」、大街道の真ん中で松山城を望む最上階スカイスパ「CANDEO HOTELS 松山大街道」を徹底特集。
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            道後温泉本館の振鷺閣に響く刻太鼓の音と、湯神社から見下ろす城下町——夏目漱石や正岡子規が愛した名湯で心を解きほぐす「松山・道後大人の湯治旅」
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            羽田から松山空港まで約1時間25分、新大阪から新幹線と特急しおかぜで約3時間半。日本最古の歴史を誇る「道後温泉」と、現存天守がそびえる名城「松山城」を擁する四国随一の観光都市・松山。夏目漱石の小説『坊っちゃん』の舞台であり、俳人・正岡子規の故郷でもあるこの街には、至るところに文学の薫りと温かなもてなしの心が息づいています。
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            そんな松山滞在の醍醐味は、アルカリ性単純温泉のまろやかな美肌の湯に浸かり、愛媛名物の「宇和島鯛めし（生卵とタレで和える刺身風）」や「松山鯛めし（炊き込みご飯）」に舌鼓を打つ至福のひととき。伝統ある老舗旅館でのおこもり湯浴みや、繁華街大街道の展望スカイスパなど、大人がひとりで豊かに羽を伸ばせる松山の厳選3宿をご紹介します。
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332.jpg"
                alt="道後温泉　ふなや"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第1選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.74 点（2015件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業三百九十有余年！夏目漱石や昭和天皇も逗留した道後屈指の老舗旅館・自然川が流れる広大な日本庭園
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉 ふなや —— 歴史と風格の迎賓館。清流を望む川席「渓流亭」と美肌の源泉掛け流し湯
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">敷地内を流れる小川と四季の木々が彩る約1,500坪の広大な日本庭園</p>
                    <p className="text-xs text-stone-600 leading-relaxed">文豪たちも散策した庭園の緑。川床のような足湯やテラスで、鳥のさえずりを聞きながら静かな読書時間を過ごせます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">道後温泉の引き湯を贅沢に楽しむ檜の湯「桧湯」と御影石の露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">肌になめらかに染み入る名湯。手入れの行き届いた清潔な湯船で心身の疲れを洗い流せます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">瀬戸内の天然真鯛や伊予牛を贅沢に使った伝統の会席料理</p>
                    <p className="text-xs text-stone-600 leading-relaxed">おひとりさまでも気兼ねなく味わえる部屋食プランや落ち着いた食事処。愛媛の地酒とともに極上の夕餉を堪能できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.74点。「お庭の散歩が素晴らしく、温泉もお料理も一流でした」「一人旅でもとても丁寧にもてなしていただき、最高の滞在になりました」と絶賛。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛媛県松山市道後湯之町1-33</p>
                  <p>🚆 道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D11332"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/13429/13429.jpg"
                alt="道後温泉　大和屋本店"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第2選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.62 点（2279件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  創業慶応四年！ロビーに本物の「能舞台」が鎮座する純和風数寄屋造りの名門ホテル
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  道後温泉 大和屋本店 —— 伝統文化とおもてなしの融合。男湯・女湯の風情ある露天岩風呂と足湯カフェ
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">道後温泉本館から徒歩わずか1分の好立地！早朝や夜の温泉街散歩に最適</p>
                    <p className="text-xs text-stone-600 leading-relaxed">浴衣と下駄でカラコロと本館前へ。観光客の少ない早朝の一番風呂巡りにもこれ以上ないロケーションです。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">檜の香る大浴場と巨石を配した野趣あふれる露天風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">豊かな湯量を誇る道後の名湯。湯上がりには日本酒や駄菓子を振る舞う無料サービスも楽しめます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">館内の本格能舞台「千寿殿」での能楽体験や狂言鑑賞イベント</p>
                    <p className="text-xs text-stone-600 leading-relaxed">日本の伝統芸能に触れる知的な時間。文化の街・松山ならではの優雅な非日常を体験できます。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.62点。「道後温泉本館のすぐ隣で便利、館内の能舞台も圧巻でした」「温泉の泉質が良く、一人でも居心地の良い名旅館です」と高評価。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛媛県松山市道後湯之町20-8</p>
                  <p>🚆 ＪＲ『松山駅』より車で約20分・松山ＩＣより車で約２０分／松山空港より車で約３０分</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13429"
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
                src="https://img.travel.rakuten.co.jp/share/HOTEL/148952/148952.jpg"
                alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第3選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ 4.22 点（2351件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  松山市最大の繁華街「大街道」直結！最上階13階の展望スカイスパから松山城を一望
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  CANDEO HOTELS（カンデオホテルズ）松山大街道 —— 都心の天空オアシス。夜景露天風呂とサウナシュラン仕様のととのい体験
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">最上階に位置する開放的な展望露天風呂「スカイスパ」＆本格サウナ・水風呂</p>
                    <p className="text-xs text-stone-600 leading-relaxed">ライトアップされた松山城を眺めながらの外気浴。街の真ん中で極上のととのいへと誘われます。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">伊予鉄道「大街道電停」目の前！道後温泉や松山城ロープウェイへ直結アクセス</p>
                    <p className="text-xs text-stone-600 leading-relaxed">市内観光のハブとして最高のフットワーク。周辺には鯛めし専門店や老舗バーが多数点在しています。</p>
                  </div>
                  
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">小上がりソファを備えたスタイリッシュで機能的な客室空間</p>
                    <p className="text-xs text-stone-600 leading-relaxed">靴を脱いでリラックスできる設計。高速Wi-Fi完備で出張のテレワークにも快適です。</p>
                  </div>
                  
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">楽天トラベル評価4.22点。「最上階のお風呂から見える松山城の夜景が最高でした」「大街道の目の前で飲食店が多く、ビジネス・一人旅に抜群の立地」と好評。</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 愛媛県松山市大街道2-5-12　</p>
                  <p>🚆 松山空港よりリムジンバス乗車約25分、一番町下車徒歩約3分。松山市駅より伊予鉄道利用、大街道駅より徒歩1分。</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D148952"
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
              道後温泉と松山城を一人旅で満喫するモデルコース
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                1. 朝イチの道後温泉本館（午前6:00開館）で刻太鼓の音とともに一番風呂
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                保存修理工事を終えて全館営業を再開した本館。神の湯の歴史ある湯船に体を沈める瞬間は一生の思い出です。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                2. 坊っちゃん列車に乗って大街道へ移動し、松山城天守閣へ
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                SLを模したディーゼル機関車に揺られるレトロ体験。松山城へはロープウェイまたはリフトで空中散歩を楽しみながら登れます。
              </p>
            </div>
            
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                3. 昼食または夕食に「宇和島鯛めし」と松山の地酒「道後ビール」
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                新鮮な真鯛の刺身を出汁醤油と生卵に絡め、アツアツのご飯に乗せてかきこむ至福。道後温泉の地ビールとの相性も抜群です。
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
                <span>松山空港から道後温泉や市内中心部へのアクセスはどうですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                松山空港から道後温泉直行リムジンバスが運行しており、大街道まで約30分、道後温泉前まで約40分でスムーズに直行できます。
              </p>
            </div>
            
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>一人で入りやすい鯛めし専門店はありますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                道後温泉本館前や大街道周辺には「かどや」や「丸水（がんすい）」などの有名店があり、カウンター席で一人でも気兼ねなく二大鯛めしを味わえます。
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
