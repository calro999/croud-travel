import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選",
  description: "香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。",
  keywords: "下呂温泉 飛騨牛 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-gifu-hida-beef-houba-miso-stay',
  },
  openGraph: {
    title: "【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選",
    description: "香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。",
    url: 'https://croud-travel.com/traditional-gifu-hida-beef-houba-miso-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選",
    description: "香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選",
    "description": "香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。",
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
      "@id": "https://croud-travel.com/traditional-gifu-hida-beef-houba-miso-stay"
    }
  };

  const hotelList = [
            {
              name: "下呂温泉　源泉かけ流しのおやど　菊半旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38508/38508.jpg",
              rating: 4.4,
              reviews: 224,
              price: "¥7,150〜",
              access: "ＪＲ高山線　下呂駅より徒歩１２分",
              features: ["下呂でも数少ない加水、加温、循環なしの100%源泉かけ流し。温泉街も近く散策にも便利な宿。", "下呂市湯之島281", "楽天アワード受賞歴"]
            },
            {
              name: "下呂温泉　小川屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10716/10716.jpg",
              rating: 4.4,
              reviews: 4963,
              price: "¥7,700〜",
              access: "ＪＲ高山線下呂駅下車(徒歩８分／中央道中津川ＩＣよりＲ２５７で５０ｋｍ　",
              features: ["楽天トラベルアワード金賞受賞！東海最大級100帖空間畳風呂と朝ごはん2年連続日本一受賞の宿", "下呂市湯之島570", "楽天アワード受賞歴"]
            },
            {
              name: "下呂温泉　ホテルくさかべアルメリア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56778/56778.jpg",
              rating: 4.2,
              reviews: 4750,
              price: "¥7,920〜",
              access: "ＪＲ高山線　下呂駅より車で３分（無料送迎バス有り）/東海環状道富加関ＩＣより７０分又は中央道中津川ＩＣより６０分",
              features: ["下呂市街を一望出来る展望露天風呂！和洋中50種を超えるバイキングや飛騨牛を使用したフルコース会席！", "下呂市幸田1811", "楽天アワード受賞歴"]
            },
            {
              name: "下呂温泉　山形屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9627/9627.jpg",
              rating: 4.1,
              reviews: 2120,
              price: "¥10,450〜",
              access: "※下呂駅からの送迎方法はお問合せくださいませ。中央道　中津川ＩＣよりお車にて６０分。",
              features: ["江戸時代からつづく、寛ぎの宿。時代のなかで培われてきたくつろぎの空間", "下呂市湯之島260-1", "楽天アワード受賞歴"]
            },
            {
              name: "下呂温泉　紅葉館別館　わん泊亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108730/108730.jpg",
              rating: 4.3,
              reviews: 1008,
              price: "¥8,000〜",
              access: "中央自動車道　中津川ICより60分 又は 東海環状自動車道　富加関ICより60分／ＪＲ高山線下呂駅より車5分（送迎あり）",
              features: ["下呂温泉の中心で食べ歩きにも便利♪愛犬と過ごせるお部屋・家族風呂・室内ミニドッグランも完備！", "下呂市湯之島544", "楽天アワード受賞歴"]
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
            <span>飛騨牛朴葉味噌＆下呂名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              朴葉の上で香ばしく焼けるA5飛騨牛とつるつる美肌湯。飛騨路を味わい尽くす贅沢ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            きめ細やかな霜降りと上品な甘みが特徴の「飛騨牛」。香ばしい朴葉の上で特製味噌と絡めながら焼き上げる郷土料理は、ご飯もお酒も止まらなくなる美味しさです。日本三名泉に数えられる下呂温泉のトロリとした泉質は「美人の湯」として名高く、湯上がり肌もしっとり。飛騨川のせせらぎや合掌造りの風情を感じながら、心温まる美食ステイをご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">香ばしい香り立つ「A5飛騨牛朴葉味噌焼き」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">朴葉の香りと熟成味噌が霜降り肉の旨味を最大限に引き出す伝統の名物料理。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">極上「飛騨牛すき焼き＆炭火ステーキ」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">口の中でとろける柔らかさ。厳選された部位を贅沢に味わう特選会席コース。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本三名泉「下呂温泉」の極上美肌湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">美容液のように滑らかなアルカリ性単純温泉。飛騨川を望む絶景露天風呂。</p>
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
