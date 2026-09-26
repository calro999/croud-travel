import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選",
  description: "白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。",
  keywords: "道後温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-ehime-tobe-yaki-ceramic-stay',
  },
  openGraph: {
    title: "【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選",
    description: "白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。",
    url: 'https://croud-travel.com/traditional-ehime-tobe-yaki-ceramic-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選",
    description: "白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選",
    "description": "白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。",
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
      "@id": "https://croud-travel.com/traditional-ehime-tobe-yaki-ceramic-stay"
    }
  };

  const hotelList = [
            {
              name: "道後温泉　旅亭　うめ乃や",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145017/145017.jpg",
              rating: 4.7,
              reviews: 137,
              price: "¥25,000〜",
              access: "伊予鉄松山市駅・JR松山駅から伊予鉄で道後温泉駅へ。道後温泉駅・道後温泉本館から徒歩5分。",
              features: ["湯築の杜を望む静かな落ち着き。数寄屋造りの歴史感じる温泉宿で過ごす大人の贅沢。", "松山市上市2-8-9", "楽天アワード受賞歴"]
            },
            {
              name: "道後温泉　道後舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10788/10788.jpg",
              rating: 4.7,
              reviews: 2063,
              price: "¥15,950〜",
              access: "◆道後温泉本館まで徒歩５分◆飛鳥乃湯泉は坂道降り���すぐ徒歩３分◆道後温泉駅徒歩７分◆",
              features: ["巨匠・黒川紀章が全館を設計。懐しく新しい近代和風空間と本物のおもてなしで、心からの満足をお約束します", "松山市道後多幸町7-26", "楽天アワード受賞歴"]
            },
            {
              name: "道後温泉　大和屋本店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13429/13429.jpg",
              rating: 4.6,
              reviews: 2310,
              price: "¥22,324〜",
              access: "ＪＲ『松山駅』より車で約20分・松山ＩＣより車で約２０分／松山空港より車で約３０分",
              features: ["慶応4年創業、道後温泉本館徒歩すぐの老舗宿。能舞台「千寿殿」や名物鯛めしの朝食で格式ある滞在を。", "松山市道後湯之町20-8", "楽天アワード受賞歴"]
            },
            {
              name: "道後温泉　ふなや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332.jpg",
              rating: 4.7,
              reviews: 2033,
              price: "¥19,635〜",
              access: "道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分",
              features: ["★文人ゆかりの宿・道後一の老舗★　日本庭園には、自然の川が流れ四季折々の風情がお楽しみいただけます。", "松山市道後湯之町1-33", "楽天アワード受賞歴"]
            },
            {
              name: "奥道後　壱湯の守（いちゆのもり）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27716/27716.jpg",
              rating: 4.4,
              reviews: 2705,
              price: "¥11,115〜",
              access: "ＪＲ松山駅よりお車もしくは伊予鉄バス(奥道後行)で３０分／松山ＩＣから国道３１７号線を通って今治方面に４０分",
              features: ["【西日本最大級の露天風呂で湯巡り♪】道後から車で１０分！大自然に佇む美人湯の宿", "松山市末町267", "楽天アワード受賞歴"]
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
            <span>砥部焼の器＆伊予牛美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              ぽってり温もりある砥部焼ととろける伊予牛。日本最古の名湯・道後温泉で過ごす雅な休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            200年以上の歴史を誇る愛媛の伝統工芸「砥部焼」。白磁に呉須（藍色）で描かれた唐草模様などの器は、厚手で手になじみ、料理の色彩を美しく引き立てます。きめ細やかなサシが特徴の「伊予牛絹の味」を砥部焼の器でいただく会席料理は絶品。道後温泉本館の風情や飛鳥乃湯泉を巡り、歴史あるアルカリ性単純温泉でつるつるの美肌を手に入れましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">職人手作りの「砥部焼」で彩る特選会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">藍色と白磁のコントラストが料理を引き立てる。目でも楽しむ器の美学。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">柔らかくジューシーな「伊予牛絹の味」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">絹のように繊細な肉質。陶板焼きやしゃぶしゃぶで味わう愛媛の最高峰ブランド牛。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本最古の名湯「道後温泉」の美肌源泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">刺激の少ないアルカリ性単純温泉。湯上がりの肌がしっとり潤う極上の名湯。</p>
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
