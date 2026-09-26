import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選",
  description: "轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。",
  keywords: "滝 露天風呂 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-waterfall-basin',
  },
  openGraph: {
    title: "【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選",
    description: "轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-waterfall-basin',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選",
    description: "轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選",
    "description": "轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-waterfall-basin"
    }
  };

  const hotelList = [
            {
              name: "栃木温泉　鮎返りの滝を望む宿　小山旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38417/38417.jpg",
              rating: 4.4,
              reviews: 368,
              price: "¥11,550〜",
              access: "■熊本ICより：５７号線へ30分、新阿蘇大橋から5分　■熊本空港より：40分",
              features: ["源泉かけ流しの温泉につかり、白川水系の美しい鮎返りの滝と原生林を間近に眺められます。", "阿蘇郡南阿蘇村河陽4284", "楽天アワード受賞歴"]
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
              name: "登別温泉　第一滝本館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30109/30109.jpg",
              rating: 4.5,
              reviews: 3942,
              price: "¥17,290〜",
              access: "JR登別駅よりバス又はタクシーで約15分／道央道登別東ＩＣから車で約10分／新千歳空港から車で約60分",
              features: ["地獄谷と対峙するロケーション。湧き出る5つの泉質を35種の浴槽で。ようこそ、『第一滝本館』へ。", "登別市登別温泉町55", "楽天アワード受賞歴"]
            },
            {
              name: "宮島温泉　滝乃荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/136088/136088.jpg",
              rating: 4.6,
              reviews: 261,
              price: "¥12,100〜",
              access: "ＪＲ石動駅よりお車で１５分 　 金沢市内よりお車で４０分",
              features: ["金沢市内へも車で約40分！富山湾直送のきときと鮮魚と美湯を愉しむ宮島峡のひそかな隠れ宿です。", "小矢部市名ケ滝378", "楽天アワード受賞歴"]
            },
            {
              name: "会津東山温泉　くつろぎ宿　千代滝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5675/5675.jpg",
              rating: 4.5,
              reviews: 2517,
              price: "¥12,800〜",
              access: "【車】会津若松ＩＣ～約20分【会津若松駅より】周遊バスにて「会津武家屋敷前」下車徒歩約15分or送迎有：到着時TEL",
              features: ["郷土料理ビュッフェと展望露天風呂が自慢☆会津の日本酒が楽しめる地酒の館/ライブラリーラウンジ好評♪", "会津若松市東山町湯本寺屋敷43", "楽天アワード受賞歴"]
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
            <span>滝見露天＆マイナスイオン</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              豪快な滝の音と清らかな飛沫。五感を研ぎ澄ます滝見プライベート露天風呂の旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            深山幽谷の森に響き渡る滝の音。湯船に浸かりながら目の前に流れ落ちる滝の姿を眺め、たっぷりのマイナスイオンを浴びる贅沢は、まさに大人のための極上リフレッシュです。夜にはライトアップされ、昼とは一変して幻想的な姿を見せる名瀑。川魚や旬の山菜をふんだんに使った滋味あふれる料理とともに、非日常の癒やしをご体感ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">目の前に名瀑を望む絶景滝見露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">豪快な水流と滝壺のエメラルドグリーンを眺めながら入る、圧倒的開放感の名湯。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">夜の名瀑ライトアップの幻想美</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">闇夜に浮かび上がる白い滝筋と湯けむり。息をのむほどドラマチックな夜の景観。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">清流が育む岩魚・山女魚と山菜料理</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">炭火でじっくり焼き上げた川魚の塩焼きや、山の幸を丁寧に仕立てた会席ディナー。</p>
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
