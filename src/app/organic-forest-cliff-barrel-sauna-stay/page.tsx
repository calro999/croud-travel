import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選",
  description: "大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。",
  keywords: "バレルサウナ 温泉 宿, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-cliff-barrel-sauna-stay',
  },
  openGraph: {
    title: "【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選",
    description: "大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。",
    url: 'https://croud-travel.com/organic-forest-cliff-barrel-sauna-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選",
    description: "大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選",
    "description": "大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。",
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
      "@id": "https://croud-travel.com/organic-forest-cliff-barrel-sauna-stay"
    }
  };

  const hotelList = [
            {
              name: "蓼科温泉　いろりの宿　蓼科パークホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16099/16099.jpg",
              rating: 3.3,
              reviews: 787,
              price: "¥4,950〜",
              access: "ＪＲ茅野駅下車タクシー２０分バス３０分／中央道諏訪ＩＣより約３０分",
              features: ["晴れた夜には満天の星空を眺めながらの温泉　囲炉裏を囲んで愉しむご夕食で思い出に残るご旅行へ", "茅野市北山5522", "楽天アワード受賞歴"]
            },
            {
              name: "奥札幌の秘湯　湖畔の宿支笏湖　丸駒温泉旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30970/30970.jpg",
              rating: 4.4,
              reviews: 941,
              price: "¥10,000〜",
              access: "ＪＲ千歳駅／新千歳空港より車で５０分、札幌市内、エスコンフィールド、苫小牧港から車で６０分",
              features: ["【2024,2025年連続アワード受賞宿】2024年リニューアル、国立公園の絶景温泉とサウナが自慢", "千歳市幌美内7番地", "楽天アワード受賞歴"]
            },
            {
              name: "天然温泉露天風呂全室完備　満天の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147856/147856.jpg",
              rating: 4.4,
              reviews: 134,
              price: "¥17,750〜",
              access: "東海北陸自動車道　白鳥ＩＣ、高鷲ＩＣから約３０分（ウイングヒルズ白鳥リゾート第2駐車場内）",
              features: ["全室露天風呂付客室！1日8室だけの贅沢な隠れ宿で温泉と懐石料理を堪能！", "郡上市白鳥町石徹白峠山1-1", "楽天アワード受賞歴"]
            },
            {
              name: "洲本温泉　淡路インターナショナルホテル　ザ・サンプラザ　＜淡路島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9104/9104.jpg",
              rating: 4.4,
              reviews: 2990,
              price: "¥10,230〜",
              access: "大阪駅より高速バス120分/三宮駅より高速バス80分/神戸淡路鳴門道洲本ICより15分",
              features: ["海を一望するオーシャンビューに包まれ、四季の移ろいを五感で味わう、特別な旅を。洲本温泉うるおいの湯。", "洲本市小路谷1279-13", "楽天アワード受賞歴"]
            },
            {
              name: "きわど温泉リトリート　悠久の季",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/193488/193488.jpg",
              rating: 4.2,
              reviews: 29,
              price: "¥13,200〜",
              access: "黄波戸駅より徒歩約２０分。ホテルから黄波戸駅まで送迎が無料でできます※前日迄の予約制",
              features: ["元乃隅神社最寄りの国定公園に佇む湯宿。長門五名湯「黄波戸温泉」で心ほどけるひととき。", "長門市日置上1597-2", "楽天アワード受賞歴"]
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
            <span>絶壁バレルサウナ＆天空水風呂</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              木のぬくもりと圧倒的パノラマ。崖の上のバレルサウナで味わう異次元のととのい
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            樽型の形状が生み出す抜群の熱循環と、シダーウッドの心地よいアロマ。断崖絶壁や山頂に設置されたバレルサウナの全面ガラス窓からは、眼下に広がる渓谷や雲海、夕景の絶景が広がります。セルフロウリュで限界まで温まった後は、キンキンに冷えた天然湧水風呂へ。空に浮かんでいるかのようなデッキでの外気浴は、サウナー垂涎の極上体験です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">パノラマガラス付き本格木製バレルサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">熱が均一に回る円形デザイン。絶景を眺めながらアロマロウリュを堪能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">地下から汲み上げる天然湧水かけ流し水風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">まろやかな天然水が火照った体を優しく包み込み、抜群のクーリング効果。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">雲海や満天の星を仰ぐ天空外気浴デッキ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">リクライニングチェアに身を委ね、吹き抜ける山の風に包まれる至高のディープリラックス。</p>
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
