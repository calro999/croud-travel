import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選",
  description: "創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。",
  keywords: "雲仙温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-nagasaki-castella-champon-stay',
  },
  openGraph: {
    title: "【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選",
    description: "創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。",
    url: 'https://croud-travel.com/spring-nagasaki-castella-champon-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選",
    description: "創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選",
    "description": "創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。",
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
      "@id": "https://croud-travel.com/spring-nagasaki-castella-champon-stay"
    }
  };

  const hotelList = [
            {
              name: "雲仙温泉　名湯の宿　　雲仙いわき旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6000/6000.jpg",
              rating: 4.1,
              reviews: 351,
              price: "¥9,900〜",
              access: "JR長崎本線諌早駅よりバスにて80分（雲仙行）",
              features: ["【避暑にもオススメの雲仙エリア！】雲仙地獄まで徒歩3分！源泉100%かけ流しの名湯をどうぞ", "雲仙市小浜町雲仙318", "楽天アワード受賞歴"]
            },
            {
              name: "雲仙温泉・源泉かけ流し＆おしどりの池を望む美食の宿　東園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41803/41803.jpg",
              rating: 4.5,
              reviews: 546,
              price: "¥11,385〜",
              access: "諫早駅より路線バスで８０分",
              features: ["和の贅を尽くした客室からの眺めが素晴らしい。湯処「莉園」は池を一望することが出来るかけ流し温泉です。", "雲仙市小浜町雲仙181", "楽天アワード受賞歴"]
            },
            {
              name: "雲仙温泉　ゆやど　雲仙新湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31749/31749.jpg",
              rating: 4.5,
              reviews: 715,
              price: "¥8,893〜",
              access: "ＪＲ諫早駅より車で60分、長崎空港から車で90分",
              features: ["【美肌の湯】 は、どこよりも濃く。 “最上のご褒美” をお届け。個室食プラン、露天風呂付きプランあり", "雲仙市小浜町雲仙320", "楽天アワード受賞歴"]
            },
            {
              name: "雲仙温泉　雲仙スカイホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31933/31933.jpg",
              rating: 3.8,
              reviews: 396,
              price: "¥15,750〜",
              access: "島鉄バス　雲仙営業所前／長崎自動車道　諫早インターより車にて６０分／島原港より車にて４０分",
              features: ["雲仙国立公園温泉街の中心に位置する温泉旅館。雲仙地蔵入口徒歩１分、源泉掛け流し大浴場露天風呂が自慢", "雲仙市小浜町雲仙323-1", "楽天アワード受賞歴"]
            },
            {
              name: "雲仙温泉　雲仙宮崎旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28126/28126.jpg",
              rating: 4.9,
              reviews: 871,
              price: "¥30,530〜",
              access: "ＪＲ諫早駅下車バス８０分、長崎自動車道諫早ICより島原道路へ乗換え長野ICより車で５０分",
              features: ["【2022年12月新築リニューアル】雲の中のラグジュアリーリゾート", "雲仙市小浜町雲仙320番地", "楽天アワード受賞歴"]
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
            <span>長崎カステラ＆雲仙硫黄名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              地獄の湯けむりと異国情緒あふれる美食文化。長崎・雲仙の歴史ある名湯ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本で最初の国立公園に指定された雲仙。硫黄の香りと白濁した源泉かけ流しのにごり湯は、古くから多くの外国人に愛された高原リゾートです。おもてなしのウェルカムカステラや、和華蘭（わからん）文化が融合した名物・卓袱会席、長崎和牛のステーキは絶品。橘湾に沈む美しい夕日を望む小浜温泉とともに、ロマンあふれる長崎の旅をお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">雲仙地獄から直接引く白濁硫黄温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">殺菌効果と美肌効果に優れた濃厚なにごり湯。湯けむりに包まれる風情ある露天風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本場長崎の「極上カステラ」とおもてなし</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ザラメの食感としっとり濃厚な甘み。老舗の味をお茶とともに味わう贅沢。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">和・華・蘭が織りなす伝統「卓袱会席料理」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">長崎の新鮮な魚介と長崎和牛、名物豚の角煮など彩り豊かな郷土の美味。</p>
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
