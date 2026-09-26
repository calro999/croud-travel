import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選",
  description: "江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。",
  keywords: "三朝温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-tottori-kurayoshi-kasuri-stay',
  },
  openGraph: {
    title: "【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選",
    description: "江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。",
    url: 'https://croud-travel.com/traditional-tottori-kurayoshi-kasuri-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選",
    description: "江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選",
    "description": "江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。",
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
      "@id": "https://croud-travel.com/traditional-tottori-kurayoshi-kasuri-stay"
    }
  };

  const hotelList = [
            {
              name: "三朝温泉　旅館　大橋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40046/40046.jpg",
              rating: 4.4,
              reviews: 278,
              price: "¥14,300〜",
              access: "JR山陰本線-倉吉駅下車～バス20分／中国道-院庄ICよりＲ１７９号を倉吉方面に約50分/ANA羽田～鳥取～バス～倉吉",
              features: ["舘は国登録有形文化財。自家源泉５ヶ所の内、自噴泉が３ヶ所ある「巌窟の湯」が名物風呂！", "東伯郡三朝町三朝302-1", "楽天アワード受賞歴"]
            },
            {
              name: "三朝温泉　依山楼　岩崎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5840/5840.jpg",
              rating: 4.4,
              reviews: 2190,
              price: "¥6,050〜",
              access: "◆車 中国道院庄IC60分／山陰道泊東郷IC20分 ◆JR 倉吉駅送迎バス14時20分～18時 ※要予約（前日まで）",
              features: ["1920年(大正9年)創業★文人墨客に愛された三朝の老舗宿で回遊式大庭園風呂と山陰の旬味覚を満喫", "東伯郡三朝町三朝365-1", "楽天アワード受賞歴"]
            },
            {
              name: "三朝温泉　かがり火の宿　有楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28068/28068.jpg",
              rating: 4.5,
              reviews: 202,
              price: "¥7,150〜",
              access: "ＪＲ倉吉駅より三朝温泉行きバスで温泉南口下車徒歩２分／中国道・院庄ＩＣ下車１７９Ｒ経由で５０分",
              features: ["世界屈指のラジウム泉、名湯三朝温泉。岩造りの露天風呂、大浴場でお楽しみ下さい。", "東伯郡三朝町三朝642-1", "楽天アワード受賞歴"]
            },
            {
              name: "三朝温泉　渓泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80535/80535.jpg",
              rating: 4.2,
              reviews: 142,
              price: "¥7,700〜",
              access: "ＪＲ　倉吉駅よりお車で１５分",
              features: ["三朝の湯けむり、渓流の音。鳥取グルメと大浴場・露天風呂の他にサウナなど種類豊富な三朝温泉を堪能！", "東伯郡三朝町山田180", "楽天アワード受賞歴"]
            },
            {
              name: "しあわせひょうたんの宿　旅館水郷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4772/4772.jpg",
              rating: 3.4,
              reviews: 146,
              price: "¥5,000〜",
              access: "山陰本線倉吉駅より車で１０分。",
              features: ["食事は部屋食か完全個室。源泉かけ流し。エレベーター完備。サイクリストに優しい宿。", "東伯郡湯梨浜町はわい温泉6-1", "楽天アワード受賞歴"]
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
            <span>倉吉伝統美＆三朝ラジウム名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              世界屈指のラジウム泉と日本一の鳥取和牛。歴史ある山陰の風情に癒やされる旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            「三たび朝を迎えると元気になる」と称される三朝温泉。高濃度のラドンを含むラジウム泉は、浸かって良し、吸って良し、飲んで良しの三拍子揃った奇跡の名湯です。風情ある温泉街の散策や倉吉絣の着物体験、そして夕食にはとろける脂と赤身のコクが絶妙な最高級鳥取和牛の会席料理。心身の免疫力を高める贅沢な山陰の休日をお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">世界屈指の高濃度「三朝ラジウム温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ホルミシス効果で新陳代謝を促進。源泉かけ流しの露天風呂やオンドル室・飲泉場。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本一の肉質！特選「鳥取和牛」の炭火焼き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">オレイン酸を豊富に含む上質な脂。口の中でとろける柔らかさと上品な旨味。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">倉吉白壁土蔵群と絣の伝統工芸散策</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">白壁と赤瓦が連なる風情ある町並み。伝統織物の着物レンタルや工房見学。</p>
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
