import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選",
  description: "パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。",
  keywords: "湯原温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-okayama-muscat-sweets-stay',
  },
  openGraph: {
    title: "【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選",
    description: "パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。",
    url: 'https://croud-travel.com/spring-okayama-muscat-sweets-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選",
    description: "パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選",
    "description": "パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。",
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
      "@id": "https://croud-travel.com/spring-okayama-muscat-sweets-stay"
    }
  };

  const hotelList = [
            {
              name: "湯原温泉　湯めぐりの宿　松の家花泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39303/39303.jpg",
              rating: 4.0,
              reviews: 767,
              price: "¥7,000〜",
              access: "米子自動車道　湯原ＩＣ下車",
              features: ["10の湯めぐりが楽しめる湯めぐりの宿。料理長が厳選した食材で造る創作懐石も魅力。", "真庭市湯原温泉320-1", "楽天アワード受賞歴"]
            },
            {
              name: "湯原温泉　湯の蔵　つるや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15060/15060.jpg",
              rating: 4.5,
              reviews: 556,
              price: "¥8,800〜",
              access: "米子道「湯原IC」より湯原温泉方面へ5分。中国銀行手前右折50ｍ。お車は向かいの市営駐車場へ無料完備",
              features: ["創業110年の元酒蔵のお宿。美味しいお酒と料理をきどらないおもてなしで、源泉掛け流しの温泉宿", "真庭市湯原温泉144", "楽天アワード受賞歴"]
            },
            {
              name: "湯原温泉　元禄旅籠　油屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147649/147649.jpg",
              rating: 4.4,
              reviews: 121,
              price: "¥13,310〜",
              access: "ＪＲ　姫新線　中国勝山駅よりバスで４９分湯原温泉バス停下車　バス停までの送迎あります。",
              features: ["当館地下より湧く源泉と地元の旬食材を愉しむ西洋料理が自慢。心と身体が満たされる、非日常をあなたに。", "真庭市湯原温泉29", "楽天アワード受賞歴"]
            },
            {
              name: "湯原温泉　旅館　かじか荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137067/137067.jpg",
              rating: 4.7,
              reviews: 246,
              price: "¥7,260〜",
              access: "中国勝山駅よりバスで４５分",
              features: ["消毒・加水・加熱をしない１００％源泉掛け流し・露天風呂（砂湯）まで歩いて２分のお宿。【全館禁煙】", "真庭市湯原温泉13-6", "楽天アワード受賞歴"]
            },
            {
              name: "さつき荘＜岡山県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56321/56321.jpg",
              rating: 4.4,
              reviews: 18,
              price: "¥4,950〜",
              access: "米子自動車道　湯原ＩＣより１０分",
              features: ["四季折々の旬の味を豊富に取り揃えています。音楽・バイク好き大歓迎です♪", "真庭市湯原温泉155", "楽天アワード受賞歴"]
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
            <span>岡山マスカット＆美作三湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              高糖度シャインマスカットの贅沢デザートと名湯美肌湯。フルーツ王国岡山の癒やし旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            「晴れの国」岡山が誇る最高峰フルーツ、シャインマスカットとピオーネ。大粒の果実をふんだんに使用したウェルカムパフェやタルト、お部屋で味わうカットフルーツプレートが大好評です。さらに西日本を代表する名湯「美作三湯」のまろやかな湯に浸かり、美肌効果を実感。千屋牛（ちやぎゅう）や旬の山の幸を取り入れた華やかな会席料理をご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">旬の岡山産シャインマスカットスイーツ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">芳醇な香りと強い甘み。パティシエ特製の贅沢パフェやフルーツオードブル。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">美肌の湯「美作三湯」の多彩な名湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">湯原の砂湯、奥津の足踏み洗濯湯、湯郷の美肌湯。それぞれ個性豊かな極上温泉。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">幻の和牛「千屋牛」と瀬戸内・美作の美食</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ほどよいサシと深い旨味の千屋牛ステーキや、地元野菜・山菜を使った里山会席。</p>
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
