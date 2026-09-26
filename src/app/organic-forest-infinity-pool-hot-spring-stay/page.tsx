import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選",
  description: "原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。",
  keywords: "インフィニティプール 温泉 宿, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-infinity-pool-hot-spring-stay',
  },
  openGraph: {
    title: "【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選",
    description: "原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。",
    url: 'https://croud-travel.com/organic-forest-infinity-pool-hot-spring-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選",
    description: "原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選",
    "description": "原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。",
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
      "@id": "https://croud-travel.com/organic-forest-infinity-pool-hot-spring-stay"
    }
  };

  const hotelList = [
            {
              name: "ホテル四季の蔵　高台から海を臨む　貸切温泉のペットリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30048/30048.jpg",
              rating: 4.4,
              reviews: 351,
              price: "¥17,710〜",
              access: "東名高速沼津ＩＣから５０ｋｍ、９０分",
              features: ["●自家源泉●愛犬と過ごす森の中の休日。アジアンテイストの癒しの隠れ家的スモールホテルです。", "賀茂郡河津町峰1169-13", "楽天アワード受賞歴"]
            },
            {
              name: "北谷温泉　レクー沖縄北谷スパ＆リゾート｜ＬｅＱｕ　沖縄北谷｜ベッセルホテルズ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/178706/178706.jpg",
              rating: 4.6,
              reviews: 882,
              price: "¥12,312〜",
              access: "那覇空港より車で約４０分、沖縄アリーナより車で15分、北谷アメリカンビレッジとサンセットビーチまで徒歩５分以内",
              features: ["天然北谷温泉やバリエーションに富んだ客室を保有するベッセルグループ初のリゾートホテル", "中頭郡北谷町美浜34-2", "楽天アワード受賞歴"]
            },
            {
              name: "オリオンホテル　モトブリゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145419/145419.jpg",
              rating: 4.6,
              reviews: 950,
              price: "¥21,120〜",
              access: "那覇空港からお車で高速利用約100分。空港バス利用約150分ホテル前停車。美ら海水族館へ徒歩7分、海洋博公園隣接",
              features: ["【楽天トラベル ブロンズアワード2024受賞】「しぜんとしぜんに」を体現する洗練された南国リゾート", "国頭郡本部町備瀬148-1", "楽天アワード受賞歴"]
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
              name: "ＡＮＡインターコンチネンタル別府リゾート＆スパ　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172910/172910.jpg",
              rating: 4.6,
              reviews: 108,
              price: "¥30,500〜",
              access: "別府駅より車で約20分、大分空港より車で約50分。別府駅⇒ホテル間の送迎サービス有（ご予約制・11時～17時・1時間毎）",
              features: ["温泉地・別府に誕生した、まったく新しいラグジュアリーリゾート。心と五感を解き放つ、 真の贅沢の旅へ", "別府市大字鉄輪499-18", "楽天アワード受賞歴"]
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
            <span>インフィニティプール＆温泉スパ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              水面に映る森と空のグラデーション。温水インフィニティプールで過ごすラグジュアリー時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            森の深緑とどこまでも続く空の境界線が溶け合うインフィニティプール。温泉水を使用した温水プールなら、季節を問わず快適に水上の浮遊感を楽しめます。プールサイドのデッキチェアで読書やカクテルを楽しみ、サウナや天然温泉大浴場で体の芯まで温まるリトリート。忙しい日常を完全にリセットできる、大人のためのラグジュアリーリゾートをご案内します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">通年利用可能な温水インフィニティプール</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">森のパノラマを一望。水面に空が反射するフォトジェニックなインフィニティ空間。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">水着サウナ＆天然温泉ジャグジー完備</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">プールサイドで楽しむ本格サウナと外気浴。カップルやグループで一緒に体験可能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">自然派オーガニックディナー＆カクテル</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">地元の契約農家野菜やオーガニック食材を使ったモダンフレンチ＆ナチュールワイン。</p>
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
