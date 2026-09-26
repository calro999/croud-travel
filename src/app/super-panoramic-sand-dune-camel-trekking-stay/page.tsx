import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選",
  description: "鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。",
  keywords: "皆生温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/super-panoramic-sand-dune-camel-trekking-stay',
  },
  openGraph: {
    title: "【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選",
    description: "鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。",
    url: 'https://croud-travel.com/super-panoramic-sand-dune-camel-trekking-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選",
    description: "鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選",
    "description": "鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。",
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
      "@id": "https://croud-travel.com/super-panoramic-sand-dune-camel-trekking-stay"
    }
  };

  const hotelList = [
            {
              name: "皆生温泉　皆生つるや　四季を奏でるさらさの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg",
              rating: 4.4,
              reviews: 1179,
              price: "¥7,260〜",
              access: "ICより431号直進15分、空港から車、タクシー20分。米子駅から車で15分、バス25分。勝田神社まで車15分",
              features: ["大山と日本海を遠望できる東館、庭園を眺める風情ある南館など多彩な客室を有する、料理自慢の温泉宿。", "米子市皆生温泉2-5-1", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　皆生シーサイドホテル　海の四季",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5020/5020.jpg",
              rating: 4.4,
              reviews: 4969,
              price: "¥5,940〜",
              access: "米子自動車道・米子ＩＣより車で約10分、ＪＲ米子駅よりタクシー又はバスで約15分、米子空港よりタクシー又はバスで約20分",
              features: ["【楽天アワード2025受賞】14年連続＆通算17回目！全室オーシャンフロント！", "米子市皆生温泉3-4-3", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　皆生菊乃家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12677/12677.jpg",
              rating: 4.5,
              reviews: 1415,
              price: "¥6,600〜",
              access: "ＪＲ米子駅よりタクシーで約15分/米子ＩＣ下車、境港方面へ５ｋｍ/米子空港よりタクシーで約20分",
              features: ["【部屋食・個室食確約プラン有】部屋から日本海一望♪又行きたくなる宿", "米子市皆生温泉4-29-10", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　華水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg",
              rating: 4.6,
              reviews: 942,
              price: "¥8,800〜",
              access: "ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分",
              features: ["2026年7月18日お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿", "米子市皆生温泉4-19-10", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　海潮園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14707/14707.jpg",
              rating: 4.3,
              reviews: 702,
              price: "¥5,500〜",
              access: "ＪＲ米子駅→皆生温泉行バス観光センター下車徒歩3分／米子道米子ＩＣ→車で約10分",
              features: ["主人自ら山陰の漁港境港に出向き新鮮な魚介類を吟味", "米子市皆生温泉3-3-3", "楽天アワード受賞歴"]
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
            <span>砂丘らくだ体験＆皆生海鮮名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              砂丘を歩くらくだの背から眺める夕景。エキゾチックな山陰の魅力と海の温泉ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本とは思えない砂漠のような景観が広がる鳥取砂丘。らくだに乗って砂丘を散策する体験や、パラグライダー、サンドボードなどアクティビティが目白押しです。夕暮れに黄金色に輝く砂の風紋を鑑賞した後は、海から湧く温泉として名高い皆生温泉へ。美肌と保温効果の高い塩泉に浸かり、松葉ガニやモサエビ、紅ズワイガニなど山陰の海の幸を満喫しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鳥取砂丘名物「らくだライド体験」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">らくだの背に揺られながら砂丘と日本海を一望。記念撮影スポットとしても大人気。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">海から湧く名湯「皆生温泉」の展望露天</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ミネラル豊富な塩化物泉で美肌＆デトックス。弓ヶ浜の白砂青松を望むパノラマ風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本海直送「旬の活ガニ＆モサエビ会席」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">甘みの強いモサエビのお造りや香ばしい焼きガニ、鳥取和牛のステーキを堪能。</p>
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
