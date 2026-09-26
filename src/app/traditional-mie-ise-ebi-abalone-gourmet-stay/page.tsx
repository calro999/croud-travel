import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選",
  description: "ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。",
  keywords: "鳥羽 温泉 伊勢海老 宿, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-mie-ise-ebi-abalone-gourmet-stay',
  },
  openGraph: {
    title: "【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選",
    description: "ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。",
    url: 'https://croud-travel.com/traditional-mie-ise-ebi-abalone-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選",
    description: "ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選",
    "description": "ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。",
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
      "@id": "https://croud-travel.com/traditional-mie-ise-ebi-abalone-gourmet-stay"
    }
  };

  const hotelList = [
            {
              name: "榊原温泉　鳥羽・相差　海女の宿　ひょうすけ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27735/27735.jpg",
              rating: 3.7,
              reviews: 70,
              price: "¥15,150〜",
              access: "近鉄・ＪＲ「鳥羽駅」～お車で約３０分／パールロード相差ＩＣ～約７分",
              features: ["現役２代海女がおもてなし★名物料理「大漁焼き」と貸切風呂（無料）が人気です♪", "鳥羽市相差町346", "楽天アワード受賞歴"]
            },
            {
              name: "鳥羽ビューホテル　花真珠",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15548/15548.jpg",
              rating: 4.4,
              reviews: 1693,
              price: "¥15,675〜",
              access: "伊勢神宮より車で３０分/近鉄 鳥羽駅から車で8分／伊勢自動車道伊勢西ＩＣより２５分",
              features: ["★★ファミリー旅おすすめ！【キッズパーク】完備★★　鳥羽でココだけ！【絶景露天】×【バラ風呂】", "鳥羽市安楽島町1075-98", "楽天アワード受賞歴"]
            },
            {
              name: "伊勢神宮のお膝元　鳥羽　胡蝶蘭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31542/31542.jpg",
              rating: 4.4,
              reviews: 1479,
              price: "¥8,250〜",
              access: "鳥羽駅よりお車で5分・近鉄鳥羽駅無料送迎あり(14:45～18:00)・ 伊勢IC～伊勢二見鳥羽ライン経由25分程",
              features: ["ご夕食はゆったりお部屋食♪優しいおもてなしで寛ぎの旅！鳥羽駅から車で5分、伊勢神宮までは車で約30分", "鳥羽市小浜町237-1", "楽天アワード受賞歴"]
            },
            {
              name: "南鳥羽・相差　食彩の湯宿　冨久家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/24569/24569.jpg",
              rating: 4.3,
              reviews: 462,
              price: "¥14,300〜",
              access: "ＪＲ、近鉄鳥羽駅より車で約３０分／近鉄松尾駅より車で約１５分。車でスペイン村約15分、伊勢神宮約60分と観光に便利",
              features: ["無料貸切風呂（内湯＆露天）でのんびり旅情満喫。新鮮海の幸と小規模宿ならではのおもてなしの温泉宿です。", "鳥羽市相差町462", "楽天アワード受賞歴"]
            },
            {
              name: "南鳥羽相差　味覚の宿　幸洋荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27732/27732.jpg",
              rating: 4.4,
              reviews: 168,
              price: "¥15,950〜",
              access: "伊勢二見鳥羽ライン～第二伊勢道路へ終点左折～松尾交差点右折約１５分／近鉄鳥羽駅から無料送迎あり（事前予約制）車で約３０分",
              features: ["舟盛付会席をお部屋食で…無料貸切風呂とPH9.3の温泉…心と体があったまる南鳥羽の知る人ぞ知る穴場", "鳥羽市相差町1110-1", "楽天アワード受賞歴"]
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
            <span>伊勢海老＆あわび会席</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              海の王様「伊勢海老」と贅沢「鮑」を味わい尽くす。伊勢志摩の絶景と名湯に癒やされる旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            古くから「御食国（みけつくに）」として朝廷に豊かな海の幸を献上してきた伊勢志摩。透き通る甘みの活伊勢海老のお造りや香ばしい鬼殻焼き、熱々ふっくらと焼き上げる鮑（あわび）の踊り焼きは、旅の醍醐味そのもの。伊勢神宮のお膝元で、リアス海岸の美しい夕景を望む露天風呂とともに、至高の海鮮美食ステイをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">伊勢海老を「姿造り」「鬼殻焼き」で</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">獲れたてピチピチの活伊勢海老。ぷりぷりの歯ごたえと濃厚な甘みが口いっぱいに広がります。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">目の前で焼き上げる鮑の踊り焼き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">バター醤油やレモンでいただく肉厚あわび。驚くほど柔らかくジューシーな極上の味わい。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鳥羽湾・英虞湾を一望する絶景温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">穏やかな波音と満天の星に包まれる露天風呂で、旅の疲れをじんわりほぐす極上の癒やし。</p>
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
