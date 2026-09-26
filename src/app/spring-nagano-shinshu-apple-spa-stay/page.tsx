import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選",
  description: "甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。",
  keywords: "信州 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-nagano-shinshu-apple-spa-stay',
  },
  openGraph: {
    title: "【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選",
    description: "甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。",
    url: 'https://croud-travel.com/spring-nagano-shinshu-apple-spa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選",
    description: "甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選",
    "description": "甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。",
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
      "@id": "https://croud-travel.com/spring-nagano-shinshu-apple-spa-stay"
    }
  };

  const hotelList = [
            {
              name: "湯田中温泉　山崎屋旅館＜長野県下高井郡＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14559/14559.jpg",
              rating: 4.7,
              reviews: 298,
              price: "¥9,900〜",
              access: "長野電鉄「湯田中駅」下車、 バスまたはタクシーで約６分/ 上信越道 信州中野ICより約２０分",
              features: ["全予約、時間割り貸切り風呂制を実施中。", "下高井郡山ノ内町平穏2299", "楽天アワード受賞歴"]
            },
            {
              name: "中尾山温泉松仙閣＜長野県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4670/4670.jpg",
              rating: 3.3,
              reviews: 510,
              price: "¥5,170〜",
              access: "長野駅より車で２０分約９㎞、JR今井駅より車で５分約２.５ｋｍ、長野Ｉ．Ｃより車で１５分。善光寺までは車で２５分。",
              features: ["お夕食と肌スベ天然温泉が人気。お見合い露天風呂」やカラオケ風呂のユニーク風呂も♪無線LAN可能", "長野市篠ノ井小松原2475", "楽天アワード受賞歴"]
            },
            {
              name: "信州渋温泉　渋白銀屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/134773/134773.jpg",
              rating: 4.3,
              reviews: 188,
              price: "¥10,000〜",
              access: "●渋温泉郷内 七番湯「七操の湯」すぐ前● 電車/長野電鉄湯田中駅よりお車5分 車/信州中野ICよりお車約20分",
              features: ["■全8室 京町屋を思わせる温泉旅館。九湯巡り・地産地消の郷土会席・女将手造りの果実酒を堪能■", "下高井郡山ノ内町平穏2054", "楽天アワード受賞歴"]
            },
            {
              name: "信州松本　美ヶ原温泉　翔峰",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38930/38930.jpg",
              rating: 4.6,
              reviews: 3131,
              price: "¥14,300〜",
              access: "ＪＲ　松本駅から車で20分／松本駅前バスターミナルより美ヶ原温泉行きのバスで20分",
              features: ["楽天アワード2021受賞★松本エリア唯一の5つ星の宿◆北アルプスと松本城下町を一望！", "松本市里山辺527", "楽天アワード受賞歴"]
            },
            {
              name: "奥白馬温泉　ホテルグリーンプラザ白馬",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11010/11010.jpg",
              rating: 4.3,
              reviews: 1742,
              price: "¥10,185〜",
              access: "上信越道 長野IC オリンピック道路 R148号経由90分/『南小谷駅』より無料送迎バス有り 約20分（予約制）",
              features: ["白馬の大自然＆温泉＆バイキングを満喫！夏レジャー、紅葉、スキー♪オールシーズン楽しめる高原リゾート", "北安曇郡小谷村千国乙12860-1", "楽天アワード受賞歴"]
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
            <span>信州りんご＆果実美肌湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              甘い香りに包まれるりんご風呂と焼きたて絶品アップルパイ、信州の恵みを五感で味わう旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本有数のりんごの産地・長野県。湯船に浮かぶ真っ赤なりんごから広がる甘酸っぱい天然のアロマは、美肌効果とリラックス効果が抜群です。湯上がりには館内パティシエ特製の焼きたてアップルパイや濃厚なりんごジュースを味わい、夕食には信州牛や信州サーモンをふんだんに使った会席料理を堪能。長野ならではの温かなおもてなしに癒やされます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">ぷかぷか浮かぶ天然りんご風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ビタミンとポリフェノールが溶け出す果実湯。甘い香りに包まれて心身ともにリフレッシュ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">パティシエ特製プレミアムアップルパイ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">信州産ふじりんごを贅沢に使用。発酵バターの香ばしさと果実のジューシーさが絶妙。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">信州牛×信州サーモンの特選会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">清流で育った信州サーモンのお造りと、柔らかくジューシーな信州プレミアム牛のステーキ。</p>
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
