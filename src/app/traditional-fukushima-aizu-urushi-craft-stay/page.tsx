import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選",
  description: "400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。",
  keywords: "東山温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-fukushima-aizu-urushi-craft-stay',
  },
  openGraph: {
    title: "【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選",
    description: "400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。",
    url: 'https://croud-travel.com/traditional-fukushima-aizu-urushi-craft-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選",
    description: "400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選",
    "description": "400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。",
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
      "@id": "https://croud-travel.com/traditional-fukushima-aizu-urushi-craft-stay"
    }
  };

  const hotelList = [
            {
              name: "会津東山温泉　今昔亭（こんじゃくてい）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39377/39377.jpg",
              rating: 4.3,
              reviews: 395,
              price: "¥12,100〜",
              access: "ＪＲ磐越西線　会津若松駅からタクシーで１５分／磐越自動車道　会津若松ＩＣから２０分☆送迎は要連絡☆",
              features: ["美しき隠れ家「今昔亭」へようこそ。", "会津若松市東山町湯本247", "楽天アワード受賞歴"]
            },
            {
              name: "会津東山温泉　くつろぎ宿　新滝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7526/7526.jpg",
              rating: 4.7,
              reviews: 2461,
              price: "¥12,800〜",
              access: "【お車】会津若松ＩＣ～約２０分【会津若松駅より】タクシー１３分／周遊バス「あかべぇ」１６分「東山温泉駅バス停」～徒歩３分",
              features: ["明治、大正、昭和と多くの文人、墨客に愛された宿です。趣の異なる多彩な湯処が自慢。", "会津若松市東山町湯本川向222", "楽天アワード受賞歴"]
            },
            {
              name: "会津東山温泉　いろりの宿　芦名",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5887/5887.jpg",
              rating: 4.4,
              reviews: 209,
              price: "¥7,260〜",
              access: "最寄駅：会津若松駅���らタクシー又は「東山温泉」へ向かう路線バスで約20分　最寄IC:会津若松から約15分",
              features: ["7つの囲炉裏に7つの客室。懐かしい佇まいのいろりの宿。お客様より４つ星以上の人気宿に選ばれました", "会津若松市東山町湯本下原232-1", "楽天アワード受賞歴"]
            },
            {
              name: "会津東山温泉　くつろぎ宿　千代滝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5675/5675.jpg",
              rating: 4.5,
              reviews: 2517,
              price: "¥11,000〜",
              access: "【車】会津若松ＩＣ～約20分【会津若松駅より】周遊バスにて「会津武家屋敷前」下車徒歩約15分or送迎有：到着時TEL",
              features: ["郷土料理ビュッフェと展望露天風呂が自慢☆会津の日本酒が楽しめる地酒の館/ライブラリーラウンジ好評♪", "会津若松市東山町湯本寺屋敷43", "楽天アワード受賞歴"]
            },
            {
              name: "函館・湯の川温泉　ホテル万惣（オリックスホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151068/151068.jpg",
              rating: 4.4,
              reviews: 1339,
              price: "¥10,620〜",
              access: "ＪＲ函館駅より車で15分、函館空港より車で10分。湯の川温泉電停より徒歩5分",
              features: ["お食事と温泉が大好評！　函館空港より車で10分　ファミリー・カップル歓迎♪", "函館市湯川町1-15-3", "楽天アワード受賞歴"]
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
            <span>会津漆器の器＆歴史美肌温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              艶やかな会津漆器と歴史ある奥羽三楽郷の名湯。会津若松・東山温泉で過ごす雅な休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            会津塗の職人が丹精込めて塗り重ねた漆器は、手に取るだけで温もりを感じる日本の美の象徴。宿の会席料理では、朱や黒の美しい漆器に盛られた会津地鶏の焼き物、福島牛ステーキ、名物の「こづゆ」や手打ち蕎麦が並びます。湯川の渓流沿いに広がる開湯1300年の東山温泉で、歴史ある源泉に身を委ね、川のせせらぎを聴きながら心洗われるひとときをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">伝統工芸「会津漆器」の艶やかな器で楽しむ郷土会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">漆の滑らかな質感と色彩。会津の食文化と工芸美が融合した逸品。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">福島牛・会津地鶏・名物「こづゆ」の贅沢フルコース</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">豊かな自然が育んだ食材の旨味。地酒とのマリアージュも格別。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">開湯1300年！湯川のせせらぎを聴く東山温泉の露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">硫酸塩泉のまろやかな名湯。渓谷美と歴史情緒に包まれる湯浴み。</p>
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
