import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選",
  description: "すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。",
  keywords: "城崎温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-hyogo-tajima-beef-crab-spa-stay',
  },
  openGraph: {
    title: "【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選",
    description: "すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。",
    url: 'https://croud-travel.com/spring-hyogo-tajima-beef-crab-spa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選",
    description: "すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選",
    "description": "すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。",
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
      "@id": "https://croud-travel.com/spring-hyogo-tajima-beef-crab-spa-stay"
    }
  };

  const hotelList = [
            {
              name: "城崎温泉　旅館　つばき乃",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8642/8642.jpg",
              rating: 4.4,
              reviews: 229,
              price: "¥11,000〜",
              access: "中国自動車道及び山陽道から播但自動車道 こうのとり但馬空港I.C.より30分。JR城崎駅より徒歩5分。",
              features: ["温泉街の入り口・外湯地蔵湯のそば。外湯めぐりや観光に便利な立地", "豊岡市城崎町湯島781", "楽天アワード受賞歴"]
            },
            {
              name: "城崎温泉　西村屋ホテル招月庭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg",
              rating: 4.7,
              reviews: 1179,
              price: "¥35,200〜",
              access: "【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分",
              features: ["かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有", "豊岡市城崎町湯島1016-2", "楽天アワード受賞歴"]
            },
            {
              name: "城崎温泉　ときわ別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28079/28079.jpg",
              rating: 4.7,
              reviews: 209,
              price: "¥12,100〜",
              access: "JR山陰本線「城崎温泉駅」、無料バスで5分 ／北近畿豊岡道「但馬空港IC」より国道312号線、県道3号線経由で約30分。",
              features: ["夕朝お部屋食・露天風呂付き客室で、静かに籠る休日を。ラウンジでの無料ドリンクサービス有", "豊岡市城崎町湯島1013番地", "楽天アワード受賞歴"]
            },
            {
              name: "城崎温泉　旅館　お宿　白山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18819/18819.jpg",
              rating: 4.3,
              reviews: 2662,
              price: "¥11,000〜",
              access: "ＪＲ城崎温泉駅より徒歩７分／  中国自動車道吉川IC～舞鶴自動車道～北近畿豊岡自動車⇒大阪池田ICより約２時間３０分",
              features: ["宿は、誠意と心意気!心配りｘ笑顔ｘ美味しいお料理と７つの無料貸切風呂無料！", "豊岡市城崎町今津548-1", "楽天アワード受賞歴"]
            },
            {
              name: "城崎温泉　但馬屋（たじまや）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56951/56951.jpg",
              rating: 4.6,
              reviews: 343,
              price: "¥18,700〜",
              access: "ＪＲ　城崎温泉駅より徒歩１３分, 車　大阪より　中国道→吉川JCT→舞鶴若狭自動車道→春日JCT→北近畿豊岡自動車道",
              features: ["癒しをテーマに土壁、古木、竹、炭を用いた和モダンな城崎温泉の小粋なお宿。３ヶ所の貸切温泉は大人気", "豊岡市城崎町湯島453", "楽天アワード受賞歴"]
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
            <span>但馬牛＆城崎外湯めぐり</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              浴衣で巡る外湯七湯と極上の但馬牛会席。開湯1300年の城崎温泉で過ごす雅な時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            大谿川（おおたにがわ）沿いの柳並木と太鼓橋が情緒あふれる城崎温泉。色浴衣を選んでカランコロンと下駄を鳴らしながら巡る外湯めぐりは城崎ならではの楽しみです。夕食には世界が認める神戸牛や松阪牛の素牛である「但馬牛」のステーキや、みずみずしく甘い香住ガニを贅沢に味わう会席料理。伝統と風情が織りなす極上の温泉旅へご案内します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">最高級ブランド「但馬牛」の炭火焼きステーキ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">肉本来の濃厚な旨味と香ばしいサシ。わさび醤油や岩塩で味わう本物の黒毛和牛。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">春の味覚！香住港直送「香住ガニ」づくし</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">甘みが強くジューシーな紅ズワイガニ。茹でガニ、カニ刺し、焼きガニで堪能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">浴衣で楽しむ名物「城崎温泉外湯めぐり」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">一の湯、御所の湯など個性豊かな7つの外湯パス付き。情緒あふれる温泉街散策。</p>
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
