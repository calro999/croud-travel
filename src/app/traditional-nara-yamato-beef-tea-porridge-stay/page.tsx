import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選",
  description: "鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。",
  keywords: "奈良 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-nara-yamato-beef-tea-porridge-stay',
  },
  openGraph: {
    title: "【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選",
    description: "鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。",
    url: 'https://croud-travel.com/traditional-nara-yamato-beef-tea-porridge-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選",
    description: "鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選",
    "description": "鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。",
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
      "@id": "https://croud-travel.com/traditional-nara-yamato-beef-tea-porridge-stay"
    }
  };

  const hotelList = [
            {
              name: "奈良の温泉旅館　宝来温泉　奈良パークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7941/7941.jpg",
              rating: 4.0,
              reviews: 976,
              price: "¥6,200〜",
              access: "第二阪奈自動車道　宝来ランプよりすぐ",
              features: ["奈良市内では数少ない天然温泉を庭園露天風呂で！大和牛など奈良のブランド食材を使用した会席料理が自慢", "奈良市宝来4-18-1", "楽天アワード受賞歴"]
            },
            {
              name: "湯の山温泉　三峯園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13550/13550.jpg",
              rating: 4.3,
              reviews: 121,
              price: "¥14,300〜",
              access: "車…新名神・菰野ICより15分　電車…近鉄・湯の山温泉駅よりタクシー8分　バス…湯の山温泉・御在所RW前より徒歩25分",
              features: ["湯の山温泉の一番奥にたたずむ小さな湯宿。自慢の食事とせせらぎが心地よい温泉が好評です", "三重郡菰野町湯の山温泉", "楽天アワード受賞歴"]
            },
            {
              name: "さるさわ池　よしだや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50455/50455.jpg",
              rating: 4.5,
              reviews: 509,
              price: "¥6,600〜",
              access: "近鉄奈良駅より徒歩で８分 JR奈良駅より徒歩15分　関西国際空���よりバス60分　駐車場無料（最大24時間）",
              features: ["興福寺まで徒歩1分☆鹿さんの行進とかまど炊きごはんで朝が始まる、猿沢池の美しい夕焼けを一望できる宿", "奈良市高畑町２４６", "楽天アワード受賞歴"]
            },
            {
              name: "洞川温泉　行者の宿　角甚",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9273/9273.jpg",
              rating: 4.7,
              reviews: 295,
              price: "¥20,900〜",
              access: "近鉄電車下市口駅より、奈良交通バスで約８０分。タクシ-で４０分。南阪奈道路　橿原終点より車で約７０分。",
              features: ["昔ながらの縁側、旅籠の風情を残す全８室の和空間。露天風呂付客室人気", "吉野郡天川村洞川240", "楽天アワード受賞歴"]
            },
            {
              name: "おごと温泉　びわこ緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg",
              rating: 4.7,
              reviews: 2482,
              price: "¥20,140〜",
              access: "名神京都東Ｉ．Ｃから湖西道路経由で20分。ＪＲおごと温泉駅から送迎あり（要電話）",
              features: ["滋賀県おごと温泉、琵琶湖畔の旅館、露天風呂付客室や近江牛のプラン、家族・カップルに人気の旅館。", "大津市雄琴6-1-6", "楽天アワード受賞歴"]
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
            <span>大和牛すき焼き＆古都奈良名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              千年の歴史息づく古都の味覚「大和牛」と滋味豊かな茶粥。心静まる奈良の休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本のはじまりの地・奈良。良質な脂と柔らかな赤身が調和した「大和牛」は、特製の割り下でいただくすき焼きや陶板焼きでその真価を発揮します。朝食には芳しい大和茶で炊き上げた胃腸に優しい「大和の茶粥」を堪能。若草山や奈良公園の緑を望む風情ある露天風呂に浸かり、古都の悠久の時に思いを馳せる大人のステイをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">厳選銘柄牛「大和牛」の贅沢すき焼き会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">上品な霜降りと深いコク。料理長特製の割り下とこだわり卵で味わう極上肉。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">朝の体を温める名物「大和の茶粥」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ほうじ茶の香ばしさとふっくら炊き上げた米の甘み。奈良伝統の滋味深い朝食。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">古都の借景を望む風雅な露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">木々の緑と静寂に包まれる天然温泉。世界遺産の街歩きの疲れを優しく癒やす名湯。</p>
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
