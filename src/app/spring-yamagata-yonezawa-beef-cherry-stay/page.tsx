import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選",
  description: "日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。",
  keywords: "天童温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-yamagata-yonezawa-beef-cherry-stay',
  },
  openGraph: {
    title: "【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選",
    description: "日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。",
    url: 'https://croud-travel.com/spring-yamagata-yonezawa-beef-cherry-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選",
    description: "日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選",
    "description": "日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。",
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
      "@id": "https://croud-travel.com/spring-yamagata-yonezawa-beef-cherry-stay"
    }
  };

  const hotelList = [
            {
              name: "天童温泉　湯の香　松の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg",
              rating: 4.8,
              reviews: 185,
              price: "¥19,360〜",
              access: "山形新幹線東京駅から天童駅まで約2時間45分。天童駅から車で約5分",
              features: ["天童唯一二種類の源泉100%を掛流し☆山形牛付お部屋食", "天童市鎌田本町2-2-54", "楽天アワード受賞歴"]
            },
            {
              name: "天童温泉　美味求真の宿　天童ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5954/5954.jpg",
              rating: 4.5,
              reviews: 1849,
              price: "¥12,100〜",
              access: "山形新幹線で東京駅ー天童駅3H。天童駅東口から無料送迎4分（要予約）。天童ICから10分、山形北ICから15分。街中の宿",
              features: ["【楽天トラベルゴールドアワード】【楽天トラベル日本の宿】2024年W受賞！山形の旬を味わえる会席料理", "天童市鎌田本町2-1-3", "楽天アワード受賞歴"]
            },
            {
              name: "天童温泉　ほほえみの空湯舟　つるや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/146875/146875.jpg",
              rating: 4.6,
              reviews: 363,
              price: "¥18,700〜",
              access: "JR天童駅よりお車にて５分、徒歩にて１５分（無料送迎あり）。山形北ＩＣより１５分。",
              features: ["全館畳敷きの宿。山形の四季折々のお料理、ほほえみ一杯のおもてなしで癒しのひとときを", "天童市鎌田本町2-5-14", "楽天アワード受賞歴"]
            },
            {
              name: "天童温泉　ほほえみの宿　滝の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg",
              rating: 4.6,
              reviews: 1042,
              price: "¥18,150〜",
              access: "ＪＲ山形新幹線　天童駅より車にて３分、徒歩にて１５分（無料送迎あり）　山形北ＩＣより２０分",
              features: ["天童温泉と宿泊者専用ラウンジで、心身をやさしく整える滞在をお楽しみください。", "天童市鎌田本町1-1-30", "楽天アワード受賞歴"]
            },
            {
              name: "天童荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70387/70387.jpg",
              rating: 4.8,
              reviews: 22,
              price: "¥35,200〜",
              access: "ＪＲ　天童駅より車で５分",
              features: ["二十四節気のおもてなし。古き良き日本の宿でございます。", "天童市鎌田2-2-18", "楽天アワード受賞歴"]
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
            <span>米沢牛すき焼き＆佐藤錦スイーツ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              とろけるA5米沢牛と甘酸っぱい完熟佐藤錦。山形が誇る最高峰の味覚と名湯ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            細やかな霜降りと口溶けの良さで全国に名を馳せる「米沢牛」。料理長特製の割り下で煮込むすき焼きや、炭火で香ばしく焼き上げるサーロインステーキは絶品の極みです。初夏にはルビーのように輝く高級さくらんぼ「佐藤錦」を使った特製デザートを堪能。将棋駒の露天風呂で有名な天童温泉や、蔵王連峰を望むかみのやま温泉で、心満たされる美食の旅をお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">最高峰A5ランク米沢牛の特選すき焼き会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">芳醇な香りと柔らかな肉質。地元産こだわり卵と絡めて味わう至福の一口。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">旬の山形産「佐藤錦」さくらんぼデザート</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">甘みと酸味のパーフェクトバランス。パティシエ特製のタルトやジュレ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">美肌と温まりの名湯「天童・かみのやま温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">豊富に湧き出る美肌の湯。蔵王の山並みを望む展望パノラマ露天風呂。</p>
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
