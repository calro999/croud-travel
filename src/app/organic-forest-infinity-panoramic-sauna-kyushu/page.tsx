import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選",
  description: "由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。",
  keywords: "由布院 サウナ 温泉, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-infinity-panoramic-sauna-kyushu',
  },
  openGraph: {
    title: "【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選",
    description: "由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。",
    url: 'https://croud-travel.com/organic-forest-infinity-panoramic-sauna-kyushu',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選",
    description: "由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選",
    "description": "由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。",
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
      "@id": "https://croud-travel.com/organic-forest-infinity-panoramic-sauna-kyushu"
    }
  };

  const hotelList = [
            {
              name: "由布院温泉　榎屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28502/28502.jpg",
              rating: 4.6,
              reviews: 266,
              price: "¥19,354〜",
              access: "ＪＲ由布院駅より徒歩１３分／大分空港より高速バスで５５分",
              features: ["2023年春リニューアルOPEN！湯の坪街道にほど近い湯布院の街中で、静かにペットと泊まれる温泉宿", "由布市湯布院町川上1086-2", "楽天アワード受賞歴"]
            },
            {
              name: "由布院温泉　湯布院旅館のぎく",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153349/153349.jpg",
              rating: 4.6,
              reviews: 65,
              price: "¥9,625〜",
              access: "由布院駅より徒歩にて約１０分、またはお車にて約５分",
              features: ["【全室温泉風呂付・素泊まり】口コミ高評価の和モダン貸切サウナ「天照」「月読」でととのう贅沢な温泉旅", "由布市湯布院町川上2879-1", "楽天アワード受賞歴"]
            },
            {
              name: "由布院温泉　日の春旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30707/30707.jpg",
              rating: 5.0,
              reviews: 97,
              price: "¥19,800〜",
              access: "ＪＲ久大線　由布院駅／大分自動車道　湯布院ＩＣよりお車で１０分",
              features: ["自然の趣きを大切にした宿。観光の中心地にありながら露天風呂と由布院ならではの美味しい料理を味わえる。", "由布市湯布院町川上1082-1", "楽天アワード受賞歴"]
            },
            {
              name: "由布院���泉　旅館　古都の花心",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147695/147695.jpg",
              rating: 3.7,
              reviews: 75,
              price: "¥3,480〜",
              access: "湯布院駅から車で１０分★湯布院インターから市街地方面に進んで、ローソン次にガソリンスタンドがあり、左側の黄色い看板が目印",
              features: ["全室離れにホット一息つける隠れ宿。良質な由布院温泉と新鮮食材を使ったお食事も好評", "由布市湯布院町川上1018-7", "楽天アワード受賞歴"]
            },
            {
              name: "由布院温泉　旅館光の家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14835/14835.jpg",
              rating: 4.5,
              reviews: 121,
              price: "¥7,700〜",
              access: "由布院駅より車で５分／湯布院ＩＣから１０分",
              features: ["由布岳の麓通りにある小さな湯宿 -盆地の傍 静かな暮らしを‐ 古道具屋、古着屋、図書室、茶室を備える", "由布市湯布院町川上2490", "楽天アワード受賞歴"]
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
            <span>九州名峰サウナ＆阿蘇天然湧水</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              由布岳の威容と阿蘇の清冽な名水。九州屈指の自然美に包まれる本格アウトドアサウナ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            豊かな地熱と天然温泉に恵まれた九州のサウナパラダイス。由布院や黒川温泉の自然豊かな敷地に佇むデザイナーズサウナでは、ヒノキの香りに包まれるセルフロウリュと、阿蘇・九重連山由来のミネラル豊富な天然湧水かけ流し水風呂が待っています。高原の澄んだ風を浴びるウッドデッキ外気浴でととのった後は、豊後牛や熊本あか牛の炭火焼きを堪能する贅沢をお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">由布岳や森を一望するパノラマ展望フィンランドサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">薪ストーブの柔らかな熱とアロマロウリュ。ガラス越しに広がる絶景ビュー。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">阿蘇・九重水系の「超軟水・天然湧水かけ流し水風呂」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">飲用可能なほど清らかな名水。肌当たりが優しく爽快なクールダウン。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大自然の風と鳥の声に抱かれる天空外気浴デッキ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">リクライニングチェア完備。雄大な九州の山並みを眺める至高のととのい。</p>
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
