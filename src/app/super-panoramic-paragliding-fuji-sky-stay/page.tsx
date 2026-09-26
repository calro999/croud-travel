import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選",
  description: "霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。",
  keywords: "富士山 パラグライダー ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/super-panoramic-paragliding-fuji-sky-stay',
  },
  openGraph: {
    title: "【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選",
    description: "霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。",
    url: 'https://croud-travel.com/super-panoramic-paragliding-fuji-sky-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選",
    description: "霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選",
    "description": "霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。",
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
      "@id": "https://croud-travel.com/super-panoramic-paragliding-fuji-sky-stay"
    }
  };

  const hotelList = [
            {
              name: "庭園と感動の宿　富士山温泉　ホテル鐘山苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19206/19206.jpg",
              rating: 4.7,
              reviews: 1138,
              price: "¥22,000〜",
              access: "富士急行線富士山駅より１３時～１８時の間無料送迎あり／車８分／駅到着時にお電話下さい／翌日のお送りは８：００より３０分毎",
              features: ["富士山の見える絶景露天風呂！【２０２４年プロが選んだ旅館１００選・全国総合８位】", "富士吉田市上吉田東9-1-18", "楽天アワード受賞歴"]
            },
            {
              name: "山梨県の温泉旅館　下部温泉郷　下部ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
              rating: 4.4,
              reviews: 1284,
              price: "¥15,400〜",
              access: "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
              features: ["泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます", "南巨摩郡身延町上之平1900", "楽天アワード受賞歴"]
            },
            {
              name: "精進湖　富士山眺望の宿　精進マウントホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14151/14151.jpg",
              rating: 4.4,
              reviews: 454,
              price: "¥9,500〜",
              access: "富士急行・河口湖駅より車で約26分（路線バスで約40分）、中央高速道路・河口���ICより車で約25分",
              features: ["富士山を正面に望む絶好のロケーション。四季折々に表情を変える富士山と精進湖の景色を間近に感じられる宿", "南都留郡富士河口湖町精進301", "楽天アワード受賞歴"]
            },
            {
              name: "リゾートイン芙蓉　河口湖インター店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54114/54114.jpg",
              rating: 3.9,
              reviews: 1510,
              price: "¥5,150〜",
              access: "富士山駅より車で３分    河口湖　ICより車で２分 ※カーナビ登録は上吉田4259-2で！新西原クリニックさん隣",
              features: ["河口湖ＩＣより車で2分富士の麓のオアシス　大浴場・露天風呂・サウナ付リゾート感覚のビジネスホテル♪", "富士吉田市上吉田4261", "楽天アワード受賞歴"]
            },
            {
              name: "精進レークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9702/9702.jpg",
              rating: 4.6,
              reviews: 113,
              price: "¥8,000〜",
              access: "JR中央線「河口湖駅」より富士急バス30分 / 東名富士ICより60分 / 中央道河口湖ICより25分",
              features: ["全客室から富士山と精進湖が眺められます♪", "南都留郡富士河口湖町精進255", "楽天アワード受賞歴"]
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
            <span>富士山空中散歩＆パノラマ温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              富士山に向かってテイクオフ！大空を舞う感動体験と絶景富士見露天風呂の旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本屈指のパラグライダーの聖地「朝霧高原」。プロパイロットと二人乗りで飛ぶタンデムフライトなら、特別な技術がなくても富士山の大パノラマを眼下に空中散歩が楽しめます。フライトの興奮をそのままに、宿の展望露天風呂から夕暮れに赤く染まる紅富士や星空を鑑賞。地元静岡・山梨の甲州ワインビーフや富士宮やきそば、高原野菜ビュッフェをご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">富士山真正面！タンデムパラグライダーフライト</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">プロインストラクター操縦で安心。高度数百メートルからの大パノラマ絶景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">湯船から富士山を一望するパノラマ展望露天</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">朝の富士から夕暮れのシルエットまで。時間とともに表情を変える富士の名景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">高原の澄んだ空気と地元食材ビュッフェ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">富士山麓のブランド豚や高原野菜、朝霧高原ミルクの特製スイーツを満喫。</p>
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
