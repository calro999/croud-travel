import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選",
  description: "轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。",
  keywords: "滝 サウナ 温泉 宿, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-tent-sauna-waterfall-plunge-stay',
  },
  openGraph: {
    title: "【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選",
    description: "轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。",
    url: 'https://croud-travel.com/organic-forest-tent-sauna-waterfall-plunge-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選",
    description: "轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選",
    "description": "轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-03-27T00:00:00+09:00",
    "dateModified": "2026-03-27T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/organic-forest-tent-sauna-waterfall-plunge-stay"
    }
  };

  const hotelList = [
            {
              name: "磐梯熱海温泉　伊東園ホテル磐梯向滝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167546/167546.jpg",
              rating: 4.1,
              reviews: 527,
              price: "¥7,898〜",
              access: "ＪＲ　磐梯熱海駅よりお車にて約５分",
              features: ["磐越三大美人の湯に数えられる源泉をかけ流しにてお楽しみいただけます。", "郡山市熱海町熱海5-295", "楽天アワード受賞歴"]
            },
            {
              name: "蓼科温泉　蓼科グランドホテル滝の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8177/8177.jpg",
              rating: 4.2,
              reviews: 4431,
              price: "¥11,520〜",
              access: "東京より：車／諏訪南ICより約30分、関西より：車／諏訪ICよりビーナスライン経由で約30分　電車：茅野駅よりバス30分",
              features: ["楽天トラベル【ゴールドアワード2025】受賞！渓流露天風呂＆庭園大浴場＆約70種ビュッフェで魅了", "茅野市北山4028", "楽天アワード受賞歴"]
            },
            {
              name: "登別温泉　第一滝本館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30109/30109.jpg",
              rating: 4.5,
              reviews: 3942,
              price: "¥17,290〜",
              access: "JR登別駅よりバス又はタクシーで約15分／道央道登別東ＩＣから車で約10分／新千歳空港から車で約60分",
              features: ["地獄谷と対峙するロケーション。湧き出る5つの泉質を35種の浴槽で。ようこそ、『第一滝本館』へ。", "登別市登別温泉町55", "楽天アワード受賞歴"]
            },
            {
              name: "登別温泉郷　滝乃家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72815/72815.jpg",
              rating: 4.2,
              reviews: 361,
              price: "¥18,000〜",
              access: "ＪＲ　登別駅よりお車",
              features: ["滝の音を聞きながら、時を重ねた旅の宿「登別温泉郷滝乃家」", "登別市登別温泉町162", "楽天アワード受賞歴"]
            },
            {
              name: "会津東山温泉　客室専用露天風呂付のスイートルーム　はなれ　松島閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139955/139955.jpg",
              rating: 4.3,
              reviews: 751,
              price: "¥17,600〜",
              access: "【電車】ＪＲ磐越西線「会津若松駅」下車タクシー１０分【お車】「磐越自動車道」会津若松ＩＣより国道４９号線経由",
              features: ["全10部屋客室専用露天風呂付のスイートルーム♪本館『庄助の宿　瀧の湯』特別客室（スイートルーム）♪", "会津若松市東山町湯本滝ノ湯107（庄助の宿 瀧の湯）", "楽天アワード受賞歴"]
            }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[580px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80')" }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-semibold tracking-wider mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>滝壺ダイブ＆大自然サウナ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              豪快な滝の水しぶきと熱狂のロウリュ。大自然のエネルギーを全身で浴びるととのい旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            サウナーなら誰もが一度は夢見る「天然の滝壺を水風呂にする」アドベンチャーサウナ。テントサウナ内の薪ストーブで温めた熱々のサウナストーンにアロマ水を注ぎ、たっぷり汗をかいた後はエメラルドグリーンの滝壺へジャンプ！滝から降り注ぐ冷水とマイナスイオンが全身を駆け巡り、森のデッキでの外気浴は異次元の多幸感をもたらします。温泉と地元グルメも充実。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">滝の目の前に設営された本格テントサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">薪ストーブのパワフルな熱気とセルフロウリュ。滝の轟音を聴きながらの瞑想サウナ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">エメラルドグリーンの天然滝壺水風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">澄み切った天然の冷水へダイブ！滝のミストを浴びながらの異次元クーリング。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">原生林に囲まれたリクライニング外気浴</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">木漏れ日とマイナスイオンを浴びるデッキスペース。究極のととのいへ誘う環境。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">Recommended Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金・空室情報は季節により変動します</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col md:flex-row group"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] overflow-hidden">
                  <Image 
                    src={hotel.img} 
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    第{index + 1}位
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">
                      {hotel.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs md:text-sm text-stone-500 mb-4">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {hotel.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-500 block">参考料金 (2名1室利用時/1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-600">{hotel.price}</span>
                    </div>
                    <Link 
                      href={`/hotels/${encodeURIComponent(hotel.name)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature summary tips */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-amber-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              旅をより最高にするためのワンポイントアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300">
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                ベストシーズンの早期予約が鍵
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                特に週末や連休は数ヶ月前から予約が埋まりやすいため、日程が決まり次第早めの確保がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                こだわりの食事プランを選択
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                夕食の会席コースや特別な部屋食プランなど、宿自慢のグルメプランを事前に指定するとより満足度の高い滞在になります。
              </p>
            </div>
          </div>
        </section>

        {/* Related Callout */}
        <section className="text-center py-8 border-t border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-3">他の特集記事もチェック</h3>
          <p className="text-sm text-stone-500 mb-6">全国各地の魅力あふれるテーマ別おすすめ宿泊施設をご紹介しています</p>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>特集一覧ページへ戻る</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </article>
  );
}
