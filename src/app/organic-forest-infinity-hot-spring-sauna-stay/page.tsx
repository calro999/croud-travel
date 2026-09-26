import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選",
  description: "視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。",
  keywords: "インフィニティ 露天風呂 サウナ 温泉, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-infinity-hot-spring-sauna-stay',
  },
  openGraph: {
    title: "【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選",
    description: "視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。",
    url: 'https://croud-travel.com/organic-forest-infinity-hot-spring-sauna-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選",
    description: "視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選",
    "description": "視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。",
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
      "@id": "https://croud-travel.com/organic-forest-infinity-hot-spring-sauna-stay"
    }
  };

  const hotelList = [
            {
              name: "湯田上温泉　ホテル小柳",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16089/16089.jpg",
              rating: 4.3,
              reviews: 1258,
              price: "¥11,500〜",
              access: "関越道 三条・燕ICよりR403を車で30分／JR信越線 田上駅下車（無料送迎あり）",
              features: ["新潟市へ一番近い美食を満喫できる温泉宿★インフィニティ露天風呂とこだわりのサウナが人気！", "南蒲原郡田上町田上乙1322-1", "楽天アワード受賞歴"]
            },
            {
              name: "琉球温泉　瀬長島ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139989/139989.jpg",
              rating: 4.5,
              reviews: 1289,
              price: "¥9,090〜",
              access: "那覇空港よりお車にて約15分/ 路線バスで約20分　那覇空港‐赤嶺駅‐瀬長島ホテル前",
              features: ["那覇空港より一番近い離島”瀬長島”に天然温泉誕生！露天風呂付客室では源泉を楽しめます！", "豊見城市字瀬長174-5", "楽天アワード受賞歴"]
            },
            {
              name: "那須温泉　ホテル・フロラシオン那須",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28442/28442.jpg",
              rating: 4.2,
              reviews: 1895,
              price: "¥6,375〜",
              access: "東北新幹線那須塩原駅シャトルバスで約３５分（要予約：前日21時まで）/東北自動車道那須ICより車で約１０ｋｍ約１３分",
              features: ["那須の滞在型ホテルへようこそ～高原の自然に囲まれて、温泉とお食事をご堪能いただけます。", "那須郡那須町高久丙1796", "楽天アワード受賞歴"]
            },
            {
              name: "犬吠埼潮の湯温泉　犬吠埼観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40498/40498.jpg",
              rating: 4.3,
              reviews: 626,
              price: "¥13,750〜",
              access: "銚子電鉄　犬吠駅より車で３分　犬吠駅よりお電話にて送迎承ります。銚子駅より車で15分",
              features: ["全室オーシャンビュー！まるで海と繋がるかのような露天風呂？！◆温泉宿ホテル総選挙´２１犬吠埼地区１位", "銚子市犬吠埼10293", "楽天アワード受賞歴"]
            },
            {
              name: "洲本温泉　ホテルニューアワジ別亭　淡路夢泉景　＜淡路島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17856/17856.jpg",
              rating: 4.7,
              reviews: 1586,
              price: "¥14,960〜",
              access: "車:洲本ICから15分／高速バス:大阪120分・三宮80分で洲本BCへ",
              features: ["見たかった海がここにある。朝陽の絶景を眺めるインフィニティバスで海・空・湯の一体感にどっぷりと。", "洲本市小路谷1052-2", "楽天アワード受賞歴"]
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
            <span>インフィニティ温泉＆天空サウナ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              空と湯船の境界線が消える奇跡の眺望。インフィニティ温泉と絶景サウナで極上の癒やし
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            湯船の縁が見えず、まるで空や海、原生林の上に浮かんでいるかのようなインフィニティ露天風呂。併設された本格フィンランドサウナでは、ガラス越しに広がる絶景を眺めながらアロマロウリュを堪能できます。水風呂の後は、絶景テラスのインフィニティチェアで風に吹かれながら外気浴。五感を研ぎ澄ます至福のスパリゾートステイをお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">空・海・森と一体化するインフィニティ露天</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">水面が風景とシームレスにつながる絶景設計。朝焼けや夕景のドラマチックな色彩。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">パノラマビューの本格フィンランドサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">絶景を望むサウナ室。天然アロマのセルフロウリュと天然水風呂で深い発汗。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">絶景テラスでのインフィニティ外気浴</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">大自然の風を感じる特等席。心地よい浮遊感とともに究極のととのい体験。</p>
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
