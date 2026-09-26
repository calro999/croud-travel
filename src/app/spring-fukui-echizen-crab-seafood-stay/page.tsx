import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選",
  description: "黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。",
  keywords: "あわら温泉 カニ 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-fukui-echizen-crab-seafood-stay',
  },
  openGraph: {
    title: "【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選",
    description: "黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。",
    url: 'https://croud-travel.com/spring-fukui-echizen-crab-seafood-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選",
    description: "黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選",
    "description": "黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。",
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
      "@id": "https://croud-travel.com/spring-fukui-echizen-crab-seafood-stay"
    }
  };

  const hotelList = [
            {
              name: "愛犬と添い寝できる温泉旅館　あわら温泉　月香",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944.jpg",
              rating: 4.4,
              reviews: 305,
              price: "¥16,000〜",
              access: "ＪＲ　あわら温泉駅よりお車にて約１５分",
              features: ["愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいただけます。", "あわら市舟津9-8", "楽天アワード受賞歴"]
            },
            {
              name: "越前あわら温泉　長谷川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17657/17657.jpg",
              rating: 4.4,
              reviews: 603,
              price: "¥6,600〜",
              access: "北陸自動車道金津ＩＣより車15分 　ＪＲでお越しの場合　芦原温泉駅より送迎有（約10分）15時～18時",
              features: ["令和4年3月　和洋室　リニューアル！　全館Wi-Fi完備！　レトロでモダンな刻を過ごせる宿", "あわら市二面48-14", "楽天アワード受賞歴"]
            },
            {
              name: "あわら温泉　光風湯圃　べにや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28319/28319.jpg",
              rating: 4.8,
              reviews: 253,
              price: "¥47,300〜",
              access: "ＪＲ芦原温泉駅より車で15分。送迎有（前日21時までに要予約）／北陸自動車道・金津ＩＣ～１５分",
              features: ["◆25年度 1ミシュランキーに選出◆越前がに懐石◆全室半露天風呂付き◆朝・夕部屋食◆", "あわら市温泉4-510", "楽天アワード受賞歴"]
            },
            {
              name: "三国温泉　展望自慢の料理旅館　はれや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142842/142842.jpg",
              rating: 4.3,
              reviews: 161,
              price: "¥6,600〜",
              access: "ＪＲ　芦原温泉駅よりお車にて１０分",
              features: ["美しいオーシャンビューを独り占め！温泉展望露天風呂と新鮮魚介の会席料理が自慢の全15室の料理宿", "坂井市三国町梶26-45-1", "楽天アワード受賞歴"]
            },
            {
              name: "北陸　福井　あわら温泉　清風荘（北陸最大級の庭園露天風呂の宿　清風荘）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19549/19549.jpg",
              rating: 4.6,
              reviews: 3789,
              price: "¥19,541〜",
              access: "ＪＲ：芦原温泉駅より15分(迎えバス有り・要予約)/お車：北陸道金津ＩＣより20分",
              features: ["北陸最大級の庭園露天風呂をはじめ多彩な浴槽、旬の地元食材や海鮮を劇場型ビュッフェや会席料理で堪能！", "あわら市温泉3丁目803", "楽天アワード受賞歴"]
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
            <span>越前がに＆若狭ふぐ極上会席</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              黄色いタグが誇る本物の越前がにと繊細な若狭ふぐ。あわら温泉の名宿で味わう北陸の極み
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            北陸新幹線延伸でますます身近になった福井県。冬から春にかけての主役は、ぎっしり詰まった甘い蟹身と濃厚なカニ味噌が絶品の「越前がに」と、日本海の荒波で引き締まった「若狭ふぐ」。あわら温泉の老舗旅館が手がけるフルコース会席は、まさに人生で一度は味わいたい贅沢。広大な日本庭園と美肌温泉に包まれる至福のひとときをお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">産地証明黄色タグ付き「活越前がに」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">茹でガニ、焼きガニ、カニ刺し、甲羅味噌焼きまで、丸ごと一杯を贅沢に食べ尽くす極上プラン。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">てっさ・てっちりで味わう名物若狭ふぐ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">熟練の職人が薄造りに仕立てた芸術的なてっさと、出汁の旨味が染み渡る熱々ふぐ鍋。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">名湯百選「あわら温泉」の多彩な自家源泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">各宿ごとに異なる泉源を持つ贅沢なお湯。広々とした庭園露天風呂で心身ともにリラックス。</p>
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
