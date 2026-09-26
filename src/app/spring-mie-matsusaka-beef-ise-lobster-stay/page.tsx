import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選",
  description: "日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。",
  keywords: "鳥羽 伊勢志摩 松阪牛 伊勢海老 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-mie-matsusaka-beef-ise-lobster-stay',
  },
  openGraph: {
    title: "【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選",
    description: "日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。",
    url: 'https://croud-travel.com/spring-mie-matsusaka-beef-ise-lobster-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選",
    description: "日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選",
    "description": "日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。",
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
      "@id": "https://croud-travel.com/spring-mie-matsusaka-beef-ise-lobster-stay"
    }
  };

  const hotelList = [
            {
              name: "伊勢志摩国立公園　／　鳥羽温泉郷　戸田家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4761/4761.jpg",
              rating: 4.4,
              reviews: 2273,
              price: "¥9,240〜",
              access: "【電車】近鉄・JR鳥羽駅より徒歩3分（送迎有）【お車】伊勢道伊勢ICより伊勢二見鳥羽ライン経由約15分",
              features: ["【鳥羽駅徒歩圏内の温泉旅館】鳥羽湾一望の客室と13の湯めぐり、地魚解体ショーが人気", "鳥羽市鳥羽1丁目24-26", "楽天アワード受賞歴"]
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
              name: "伊勢志摩　鳥羽　扇野の里　扇芳閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27855/27855.jpg",
              rating: 4.3,
              reviews: 1257,
              price: "¥5,500〜",
              access: "近鉄線またはＪＲ参宮線鳥羽駅下車 近鉄側1番出口より送迎バスで5分／伊勢自動車道伊勢ＩＣより約２０分",
              features: ["100平米！半露天風呂付スイート特別和洋室は３世代旅行にも◎。松阪牛・伊勢海老・バリアフリー客室", "鳥羽市鳥羽2-12-24", "楽天アワード受賞歴"]
            },
            {
              name: "伊勢志摩　ＴＥＰＰＡＮオーベルジュ　ＣａｒｏＣａｒｏ　鳥羽浦別邸（旧　あじ蔵ＣａｒｏＣａｒｏ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13855/13855.jpg",
              rating: 4.7,
              reviews: 161,
              price: "¥23,856〜",
              access: "伊勢西ＩＣより二見鳥羽ライン経由　パールロード方向　麻生浦大橋手前右折／鳥羽駅下車　送迎バス２０分",
              features: ["美食と温泉に包まれて、伊勢志摩の恵みを五感で味わう。大人の隠れ家で、心ほぐれる癒しのひとときを。", "鳥羽市浦村町今浦222　本浦温泉", "楽天アワード受賞歴"]
            },
            {
              name: "湯めぐり海百景　鳥羽シーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15780/15780.jpg",
              rating: 4.4,
              reviews: 1612,
              price: "¥7,700〜",
              access: "近鉄・ＪＲ鳥羽駅より車で１０分（無料送迎有・定期運行）／伊勢自動車道　伊勢ＩＣ→伊勢二見鳥羽ライン２５分",
              features: ["伊勢神宮まで車で３０分　☆お客様が選ぶ４つ星以上の人気宿☆", "鳥羽市安楽島町1084", "楽天アワード受賞歴"]
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
            <span>松阪牛＆伊勢海老の豪華共演</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              海の至宝と陸の王者の贅沢な出逢い。伊勢海老・松阪牛と鳥羽・賢島の美肌温泉ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            伊勢神宮のお膝元、豊かな海の恵みと肥沃な大地が育んだ日本屈指のグルメ王国・三重。夕食では、プリプリのお造りや香ばしい鬼殻焼きでいただく「伊勢海老」と、きめ細やかなサシがとろける「A5松阪牛」のすき焼きやサーロインステーキをダブルで味わう至高の贅沢。英虞湾や鳥羽湾の青い海を望む絶景露天風呂に浸かり、身も心も満たされる至福の旅へ。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">活伊勢海老のお造り＆香ばしい鬼殻焼き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">甘みと弾力ある食感。頭はお味噌汁で余すところなく味わう海の至宝。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">A5ランク松阪牛の陶板焼き＆極上すき焼き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">芳醇な甘みととろける柔らかさ。特選ダレとこだわり地卵で贅沢に。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">英虞湾・鳥羽湾を一望する絶景インフィニティ露天</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">海と空が溶け合うパノラマ。ナトリウム塩化物泉でポカポカ温まる名湯。</p>
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
