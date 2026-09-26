import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選",
  description: "天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。",
  keywords: "修善寺温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-shizuoka-unagi-wasabi-gourmet-stay',
  },
  openGraph: {
    title: "【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選",
    description: "天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。",
    url: 'https://croud-travel.com/traditional-shizuoka-unagi-wasabi-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選",
    description: "天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選",
    "description": "天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。",
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
      "@id": "https://croud-travel.com/traditional-shizuoka-unagi-wasabi-gourmet-stay"
    }
  };

  const hotelList = [
            {
              name: "修善寺温泉　国の登録文化財の宿　新井旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865.jpg",
              rating: 4.6,
              reviews: 267,
              price: "¥24,420〜",
              access: "伊豆箱根鉄道線 修善寺駅よりバスまたはタクシーで10分／東名・新東名高速 沼津ICより伊豆縦貫道経由45分",
              features: ["ミシュランで二つ星の竹林の小径まで徒歩2分、修善寺温泉の中心で観光に便利です", "伊豆市修善寺970", "楽天アワード受賞歴"]
            },
            {
              name: "修善寺温泉　瑞の里　〇久（まるきゅう）旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29806/29806.jpg",
              rating: 4.4,
              reviews: 680,
              price: "¥17,050〜",
              access: "修善寺駅よりタクシー約10分／東名高速　沼津ＩＣより伊豆縦貫道を通り約30分",
              features: ["冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿", "伊豆市修善寺1146", "楽天アワード受賞歴"]
            },
            {
              name: "修善寺温泉　柳生の庄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797.jpg",
              rating: 5.0,
              reviews: 36,
              price: "¥54,450〜",
              access: "伊豆箱根鉄道　修善寺駅から車で約１０分 東名高速道路沼津ICまたは新東名高速道路長泉沼津ICから30分　",
              features: ["修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。", "伊豆市修善寺1116-6", "楽天アワード受賞歴"]
            },
            {
              name: "修善寺　離れ宿　鬼の栖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187409/187409.jpg",
              rating: 5.0,
              reviews: 13,
              price: "¥37,000〜",
              access: "伊豆箱根鉄道駿豆線「修善寺駅」駅からタクシーで約10分。",
              features: ["風情漂う日本庭園と全室離れの各お部屋には専用風呂あり。修善寺の奥座敷、大人の離れ宿をご堪能ください。", "伊豆市修善寺1163", "楽天アワード受賞歴"]
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
            <span>修善寺名湯＆伊豆うなぎ美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              伊豆の清流が育む本わさびと炭火香る極上うなぎ。修善寺の風情に浸る美食旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            「伊豆の小京都」と呼ばれる修善寺温泉。天城の豊かな湧水で育った生わさびを自分ですりおろしていただく名物丼や、脂の乗った肉厚うなぎをじっくり備長炭で焼き上げた蒲焼きはまさに絶品。竹林の小径や桂川のせせらぎを眺めながら、弘法大師ゆかりの歴史ある名湯露天風呂に身を委ね、心静かに大人の美食時間をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">職人手焼きの香ばしい特選うな重</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">外はパリッと香ばしく身はふんわり。創業から受け継がれる熟成タレが絡む逸品。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">採れたて天城産「生本わさび」体験</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">鮫皮おろしですりたての爽やかな香りと上品な辛味。お造りやステーキのアクセントに。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">桂川のせせらぎ響く風雅な庭園露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">竹林や四季の日本庭園を望むアルカリ性単純温泉。肌に優しい湯ざわりで心身をリセット。</p>
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
