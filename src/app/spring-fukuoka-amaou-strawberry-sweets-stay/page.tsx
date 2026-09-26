import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選",
  description: "「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。",
  keywords: "原鶴温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-fukuoka-amaou-strawberry-sweets-stay',
  },
  openGraph: {
    title: "【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選",
    description: "「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。",
    url: 'https://croud-travel.com/spring-fukuoka-amaou-strawberry-sweets-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選",
    description: "「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選",
    "description": "「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。",
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
      "@id": "https://croud-travel.com/spring-fukuoka-amaou-strawberry-sweets-stay"
    }
  };

  const hotelList = [
            {
              name: "原鶴温泉　旅館とよとみ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44156/44156.jpg",
              rating: 4.5,
              reviews: 124,
              price: "¥7,150〜",
              access: "ＪＲ　筑後吉井駅より車で１０分",
              features: ["～至福のときを求めるあなたへ～　7つの湯めぐりで癒される原鶴の隠れ宿。", "朝倉市杷木久喜宮1343-1", "楽天アワード受賞歴"]
            },
            {
              name: "原鶴温泉　旅館　佐藤荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51701/51701.jpg",
              rating: 4.5,
              reviews: 55,
              price: "¥8,800〜",
              access: "ＪＲ筑後吉井駅より車で7～8分/杷木ＩＣより車で5分/朝倉ＩＣより車で10分/杷木バス停よりタクシー5分　",
              features: ["2023年春かけ流し温泉の内湯付き特別室オープン☆プライベートルームで温泉本来の効能効果を堪能♪", "朝倉市杷木久喜宮1890", "楽天アワード受賞歴"]
            },
            {
              name: "原鶴温泉　ホテルパーレンス小野屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15772/15772.jpg",
              rating: 4.3,
              reviews: 1982,
              price: "¥8,415〜",
              access: "福岡市内から約60分！大分自動車道・杷木ＩＣより約5分！名跡『秋月城址』まで車で30分、太宰府まで車で50分",
              features: ["【楽天トラベルアワード9年連続受賞】創業145年。優しさが詰った畳風呂と、心尽しの美食が人気の老舗宿", "朝倉市杷木久喜宮1841-1", "楽天アワード受賞歴"]
            },
            {
              name: "原鶴温泉　泰泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37876/37876.jpg",
              rating: 4.2,
              reviews: 1104,
              price: "¥7,040〜",
              access: "大分自動車道杷木インターより車で5分／ＪＲ筑後吉井駅より車で10分／日田行き高速バスで杷木下車、車で５分",
              features: ["“ダブル美肌湯”と称される原鶴の良泉を宿名物ジャングル風呂などの個性あふれるお風呂でお楽しみ下さい。", "朝倉市杷木志波20", "楽天アワード受賞歴"]
            },
            {
              name: "原鶴温泉　ビューホテル平成",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12665/12665.jpg",
              rating: 4.2,
              reviews: 499,
              price: "¥11,000〜",
              access: "（福岡空港）から大分日田行き高速バスで６０分→（杷木バス停）下車。宿まで車で１５分「無料送迎有り」",
              features: ["ミシュランガイド福岡・佐賀2014年特別版に掲載。原鶴温泉の中で1番高台にあるホテルをご満喫下さい。", "朝倉市杷木志波203-1", "楽天アワード受賞歴"]
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
            <span>博多あまおう＆原鶴W美肌湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              甘くジューシーな博多あまおうとダブル美肌の湯。福岡・筑後路で過ごす口福な温泉旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            福岡が誇るいちごの王様「博多あまおう」。大粒で果汁たっぷりの苺をふんだんに盛り付けた特製パフェやウェルカムスイーツは旅の気分を一気に高めてくれます。弱アルカリ性温泉と単純硫黄泉の2つの美肌成分を持つ原鶴温泉は「ダブル美肌の湯」として名高く、湯上がりのお肌はつるつるすべすべ。名物・博多水炊きや筑後川の鮎料理とともにご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">産地直送「博多あまおう」のプレミアムスイーツ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">濃厚な甘みと酸味のベストバランス。パティシエ特製のいちごタルトやパフェ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">美肌成分をダブルで含む「原鶴名湯」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">古い角質を落とし肌を潤す極上温泉。筑後川の雄大な景色を望む展望露天風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">濃厚白濁スープの「博多水炊き」と旬会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">じっくり煮込んだ鶏の旨味が凝縮された名物水炊きと、地元の新鮮野菜・川魚。</p>
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
