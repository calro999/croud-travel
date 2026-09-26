import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選",
  description: "風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。",
  keywords: "竹林 露天風呂, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-bamboo-deck',
  },
  openGraph: {
    title: "【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選",
    description: "風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-bamboo-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選",
    description: "風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選",
    "description": "風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-bamboo-deck"
    }
  };

  const hotelList = [
            {
              name: "竹林院群芳園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10706/10706.jpg",
              rating: 3.8,
              reviews: 211,
              price: "¥12,450〜",
              access: "近鉄南大阪線吉野神宮駅からタクシー約１０分（吉野駅まで送迎有り１４：３０～１８：００、４月除）",
              features: ["太閤秀吉ゆかりの庭園群芳園（大和三庭園の一つ）を有し、千三百年の歴史と文化を今に伝える当館です。", "吉野郡吉野町吉野山2142", "楽天アワード受賞歴"]
            },
            {
              name: "竹林庭瑞穂　旅籠きこり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27796/27796.jpg",
              rating: 4.2,
              reviews: 343,
              price: "¥9,400〜",
              access: "ＪＲ中央線・石和温泉駅→タクシーにて５分（徒歩１０分）／中央自動車道・一宮御坂ＩＣ→Ｒ２０経由で５分",
              features: ["竹林にかこまれ麗しい和の風情漂い木の温もりが優しく伝わる潤いの宿。最上のお寛ぎをお約束します。", "笛吹市石和町川中島325-1", "楽天アワード受賞歴"]
            },
            {
              name: "絶景の離れの宿　月のうさぎ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68203/68203.jpg",
              rating: 4.6,
              reviews: 236,
              price: "¥52,030〜",
              access: "伊豆急行線　川奈駅より車で約１０分",
              features: ["日本TV「一度は行ってみたい憧れの湯宿ベスト20全国第１位全室に大島を眼前に望む絶景温泉露天風呂付", "伊東市富戸1299-3", "楽天アワード受賞歴"]
            },
            {
              name: "ａｎｄ　ＦＯＲＥＳＴ勝浦　竹の離れ　＾",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/191183/191183.jpg",
              rating: 4.5,
              reviews: 120,
              price: "¥28,175〜",
              access: "総元駅から徒歩で約６分",
              features: ["　", "勝浦市佐野853　ａｎｄ　ＦＯＲＥＳＴ勝浦　竹の離れ", "楽天アワード受賞歴"]
            },
            {
              name: "全室源泉掛け流し温泉付離れの旅館　四季の杜　紫尾庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/143298/143298.jpg",
              rating: 4.8,
              reviews: 172,
              price: "¥19,800〜",
              access: "【鹿児島空港】より北薩横断道路経由お車で約50分【出水駅、川内駅】それぞれお車で約40分【横川IC】よりお車で約45分！",
              features: ["わずか8室の離れの宿。温泉付客室で贅沢なひとときをごゆっくりとお過ごしください。", "薩摩郡さつま町紫尾1663", "楽天アワード受賞歴"]
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
            <span>竹林絶景＆隠れ宿</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              笹鳴りの音と幻想的なライトアップ。竹林の静寂美に抱かれるプライベート温泉時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日常の喧騒から完全に解き放たれる、竹林に囲まれた隠れ宿。青々とした竹が風に揺れる昼の爽やかさから、夕暮れ以降の幻想的なライトアップまで、刻一刻と表情を変える竹林景観。客室専用の露天風呂や広々としたウッドデッキから眺める景色はまさに一幅の日本画です。京都や伊豆、有馬などの名湯で、大人の静かな贅沢をご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用デッキから望む竹林庭園</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">誰にも邪魔されず、湯船に浸かりながら目の前に広がる竹林の幽玄美を独り占め。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">夜の幻想的な竹林ライトアップ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">計算された光と影のコントラストが魅せる、夜の幻想的な美しさに酔いしれるひととき。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">数寄屋造りと美食の贅沢なおもてなし</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">伝統の職人技が光る客室空間と、旬の厳選素材をあしらった本格懐石料理。</p>
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
