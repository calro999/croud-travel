import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選",
  description: "澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。",
  keywords: "石垣島 リゾート ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-okinawa-ishigaki-beef-yaeyama-stay',
  },
  openGraph: {
    title: "【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選",
    description: "澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。",
    url: 'https://croud-travel.com/traditional-okinawa-ishigaki-beef-yaeyama-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選",
    description: "澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選",
    "description": "澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。",
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
      "@id": "https://croud-travel.com/traditional-okinawa-ishigaki-beef-yaeyama-stay"
    }
  };

  const hotelList = [
            {
              name: "さくらリゾートホテル石垣＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/160889/160889.jpg",
              rating: 4.4,
              reviews: 93,
              price: "¥9,500〜",
              access: "■レンタカー■石垣空港より約25分。離島ターミナルより約10分　■路線バス■バス停フサキビーチリゾートより徒歩約5分。",
              features: ["八重山ブルーの海、八重山の島々を見下ろす絶好のロケーション。島内でも屈指のサンセットをご堪能下さい。", "石垣市新川1585-218", "楽天アワード受賞歴"]
            },
            {
              name: "フサキビーチリゾート　ホテル＆ヴィラズ　＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38599/38599.jpg",
              rating: 4.6,
              reviews: 1613,
              price: "¥15,510〜",
              access: "石垣空港より　車で約35分。石垣港より車で約15分。空港・ホテル間の無料送迎バスもございます。",
              features: ["【楽天トラベルアワード受賞】島内随一の天然ビーチとプールエリアで極上の休日を", "石垣市新川1625番地", "楽天アワード受賞歴"]
            },
            {
              name: "ホテル　リゾートイン石垣島＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67844/67844.jpg",
              rating: 4.0,
              reviews: 537,
              price: "¥2,337〜",
              access: "駐車場無料！新石垣空港→車：約20分　路線バス：白保経由空港線30分（サンエー前バス停 ）",
              features: ["新空港⇔港・市街地を結ぶバス停/石垣唯一の大型ショッピングモール目の前！全室キッチン＆充実家電☆", "石垣市真栄里491-2", "楽天アワード受賞歴"]
            },
            {
              name: "グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/69360/69360.jpg",
              rating: 4.5,
              reviews: 1249,
              price: "¥8,760〜",
              access: "新石垣空港より車で40分",
              features: ["オーシャンズウィングとヴィラガーデン　趣の異なる２つの宿泊エリアと充実の施設が魅力的な南国リゾート", "石垣市新川舟蔵2481-1", "楽天アワード受賞歴"]
            },
            {
              name: "Ｈａｒｕｈｏｏ　Ｒｅｓｏｒｔ　ＩＳＨＩＧＡＫＩ＜石垣島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182648/182648.jpg",
              rating: 4.4,
              reviews: 41,
              price: "¥9,400〜",
              access: "新石垣空港より車で約１０分／離島ターミナルまで車で約１５分",
              features: ["6部屋だけのプライベートリゾート！2階5室オーシャンビュー。石垣島の心地よい風を感じられます。", "石垣市宮良92-3", "楽天アワード受賞歴"]
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
            <span>石垣牛美食＆八重山リゾート</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              南国の太陽が育んだ最高峰A5石垣牛。エメラルドグリーンの海に抱かれる至福の島時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本最南端の黒毛和牛「石垣牛」。脂が重くなく甘みのあるジューシーな赤身と霜降りのバランスは、南国リゾートのディナーにぴったりです。全室オーシャンビューの客室バルコニーから眺める夕日や、満天の星の下で楽しむプールサイドBAR。朝食には手打ちの八重山そばや島フルーツが並ぶ贅沢なブッフェを味わい、極上のアイランドバカンスをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">最高峰A5石垣牛の炭火グリル＆握り</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">芳醇な香りととろけるような肉質。島の天然塩やシークヮーサーポン酢で堪能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">川平湾・竹富島を望むパノラマオーシャンビュー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">グラデーションに輝く美ら海と夕暮れのサンセット。波音に癒やされるバルコニー。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">島野菜と八重山そばが並ぶ贅沢朝食</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">島豆腐や紅芋、パイナップルなど南国の恵みが詰まった極上モーニングビュッフェ。</p>
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
