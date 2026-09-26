import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選",
  description: "青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。",
  keywords: "箱根 露天風呂 離れ 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-hydrangea-deck',
  },
  openGraph: {
    title: "【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選",
    description: "青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-hydrangea-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選",
    description: "青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選",
    "description": "青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-hydrangea-deck"
    }
  };

  const hotelList = [
            {
              name: "箱根湯本温泉　離れ山家荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165731/165731.jpg",
              rating: 4.4,
              reviews: 53,
              price: "¥19,950〜",
              access: "箱根湯本駅より徒歩にて約１０分",
              features: ["全室離れお部屋食の宿", "足柄下郡箱根町湯本592", "楽天アワード受賞歴"]
            },
            {
              name: "箱根小涌園　三河屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181128/181128.jpg",
              rating: 4.2,
              reviews: 63,
              price: "¥22,100〜",
              access: "箱根湯本駅よりお車にて約２０分",
              features: ["創業明治１６年　歴史に触れ、自家源泉で癒される大人のための宿、箱根小涌園　三河屋旅館", "足柄下郡箱根町小涌谷503", "楽天アワード受賞歴"]
            },
            {
              name: "箱根湯本温泉　吉池旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108157/108157.jpg",
              rating: 4.4,
              reviews: 534,
              price: "¥17,600〜",
              access: "箱根湯本駅から徒歩で７分",
              features: ["６本の自家源泉と広大な日本庭園「山月園」が魅力の宿。源泉かけ流し温泉と季節の和会席で心ほどける滞在を", "足柄下郡箱根町湯本597", "楽天アワード受賞歴"]
            },
            {
              name: "箱根湯本温泉　ホテルおくゆもと",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5081/5081.jpg",
              rating: 4.4,
              reviews: 2931,
              price: "¥11,000〜",
              access: "◆箱根湯本温泉駅よりの送迎バスについてＰＣアクセスページをご確認下さい◆お車でお越しの方小田原箱根道路須雲川ＩＣより１分",
              features: ["★大自然に囲また露天風呂、熱々のお料理を～箱根湯本の奥座敷ホテルおくゆもとでお寛ぎ下さい♪", "足柄下郡箱根町湯本茶屋211", "楽天アワード受賞歴"]
            },
            {
              name: "箱根強羅　白檀",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153496/153496.jpg",
              rating: 4.6,
              reviews: 144,
              price: "¥45,100〜",
              access: "箱根登山鉄道　小涌谷駅よりご送迎承ります（車で約5分：事前にご連絡ください）　箱根バス「緑の村入り口」下車 徒歩2分",
              features: ["全室設置の源泉掛け流し露天と旬を彩る至極の懐石料理　雄大な箱根連山を眺めながら最上のひとときをどうぞ", "足柄下郡箱根町二ノ平1297-5", "楽天アワード受賞歴"]
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
            <span>あじさい庭園＆初夏客室露天</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              雨露にきらめく紫陽花と湯けむり。客室専用テラスから愛でる初夏の静謐プライベート温泉
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            梅雨から初夏にかけて見頃を迎える紫陽花。しっとりと濡れた青や紫の花びらが、新緑の庭園に美しいコントラストを描き出します。客室専用の露天風呂に浸かりながら、誰にも邪魔されずあじさいの小径を眺める贅沢。箱根や伊豆、鎌倉近郊の風情ある名旅館で、旬の鮎や夏野菜を取り入れた涼やかな懐石料理とともに、心落ち着く大人の休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用デッキから望む満開のあじさい庭園</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">色とりどりの紫陽花に囲まれる特等席。雨の日も風情ある特別な湯浴み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">初夏の味覚「若鮎の塩焼き」と涼味会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">香ばしい鮎の塩焼きや、蓴菜（じゅんさい）・夏野菜を使った目にも涼しい料理。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">肌をなめらかに包む初夏の名湯温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">弱アルカリ性の美肌湯でリフレッシュ。新緑と花々に包まれる極上の癒やし。</p>
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
