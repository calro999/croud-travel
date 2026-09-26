import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選",
  description: "日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。",
  keywords: "嬉野温泉 佐賀牛 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-saga-arita-yaki-imari-stay',
  },
  openGraph: {
    title: "【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選",
    description: "日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。",
    url: 'https://croud-travel.com/traditional-saga-arita-yaki-imari-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選",
    description: "日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選",
    "description": "日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。",
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
      "@id": "https://croud-travel.com/traditional-saga-arita-yaki-imari-stay"
    }
  };

  const hotelList = [
            {
              name: "嬉野温泉　旅館　吉田屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
              rating: 4.3,
              reviews: 1232,
              price: "¥17,600〜",
              access: "博多駅～70分/長崎空港～車40分/SAGAアリーナ～車50分/御船山らかんの湯～車20分/ハウステンボス～車40分",
              features: ["新大浴場露天風呂＆テラス＆客室が誕生！日本宿TOP49・アワード8年連続受賞★ミシュラン３☆受賞", "嬉野市嬉野町岩屋川内甲379", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　風の宿　旅館　千湯樓（せんとうろう）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70219/70219.jpg",
              rating: 4.2,
              reviews: 170,
              price: "¥8,400〜",
              access: "■嬉野インターより車で１０分■嬉野バスセンターからの無料送迎もございます（要予約）",
              features: ["嬉野の奥座敷。清流と大自然に囲まれた蛍の訪れる山あいの静かな宿。館内無線LAN完備", "嬉野市嬉野町岩屋川内乙2117-1", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　旅館大村屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12624/12624.jpg",
              rating: 4.6,
              reviews: 519,
              price: "¥12,300〜",
              access: "JR西九州新幹線「嬉野温泉駅」よりお車で約5分 / 長崎自動車道 嬉野ICより５分",
              features: ["【自家源泉保有】源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天・半露天付客室有", "嬉野市嬉野町大字下宿乙848", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　割烹旅館　鯉登苑（りとうえん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80886/80886.jpg",
              rating: 4.4,
              reviews: 283,
              price: "¥12,130〜",
              access: "嬉野ICより車で約５分、嬉野温泉駅から約１０分",
              features: ["【総合★4.5】趣異なる全10室の料理旅館。日本三大美肌の湯嬉野温泉と絶品料理で心を満たす滞在を", "嬉野市嬉野町岩屋川内甲437", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　ホテル華翠苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/107623/107623.jpg",
              rating: 4.3,
              reviews: 2347,
              price: "¥7,348〜",
              access: "【JR】武雄温泉駅から「新幹線」で嬉野温泉駅まで約5分。　【高速】嬉野ICより車で5分　【飛行機】福岡空港より車で８０分",
              features: ["楽天トラベル【シニアに人気の宿】全国1位を獲得！心ほどける嬉野温泉旅は華翠苑で♪", "嬉野市嬉野町岩屋川内甲333　", "楽天アワード受賞歴"]
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
            <span>有田焼の器＆佐賀牛美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              有田焼の名陶が彩る最高峰の佐賀牛会席。日本三大美肌の湯・嬉野温泉で過ごす極上休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            白磁に鮮やかな絵付けが施された有田焼・伊万里焼。老舗旅館の料理長が器に合わせて仕立てる会席料理は、まさに食べる芸術品です。最高等級A5佐賀牛のとろける旨味と、嬉野名物「温泉湯どうふ」のなめらかな舌触り。入浴後はお肌がつるつるになる重曹泉の美肌湯に癒やされ、歴史と伝統文化の奥深さを五感で楽しむ贅沢なひとときをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">選び抜かれた「有田焼・伊万里焼」の器</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">名窯が手がけた器で供される四季折々の料理。目でも楽しめる伝統の器美学。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">最高峰A5ランク佐賀牛ステーキ＆湯どうふ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">美しい霜降り肉のジューシーな旨味と、温泉水でトロトロに溶ける名物湯豆腐。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本三大美肌の湯「嬉野温泉」の重曹泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">化粧水のようなトロトロの湯ざわり。美肌効果抜群の源泉かけ流し温泉。</p>
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
