import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選",
  description: "日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。",
  keywords: "蒲郡 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-aichi-seto-ware-pottery-stay',
  },
  openGraph: {
    title: "【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選",
    description: "日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。",
    url: 'https://croud-travel.com/traditional-aichi-seto-ware-pottery-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選",
    description: "日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選",
    "description": "日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。",
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
      "@id": "https://croud-travel.com/traditional-aichi-seto-ware-pottery-stay"
    }
  };

  const hotelList = [
            {
              name: "蒲郡温泉　銀河伝説煌めく天空の宿　天の丸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31249/31249.jpg",
              rating: 4.2,
              reviews: 1611,
              price: "¥8,400〜",
              access: "ＪＲ東海道本線　蒲郡駅／東名岡崎ＩＣより県道２６号、国道２４８号経由三河湾スカイラインへ ※送迎バス送り10時発",
              features: ["蒲郡の夜景×伊勢海老・鮑・黒毛和牛のグルメ会席でカップル・ファミリー問わず忘れられない思い出。", "額田郡幸田町荻遠峰10", "楽天アワード受賞歴"]
            },
            {
              name: "蒲郡温泉　天の丸別邸　風の谷の庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54864/54864.jpg",
              rating: 4.1,
              reviews: 238,
              price: "¥35,350〜",
              access: "ＪＲ東海道本線「蒲郡駅」より車にて２０分※南口より無料送迎（１日３便・要事前予約前日まで）お送りは１０時・１１時発の２便",
              features: ["全９室の露天風呂付き四季を感じ快眠をお届けする癒しの隠れ宿。スイートルームプライベートサウナ付♪", "額田郡幸田町荻遠峰10", "楽天アワード受賞歴"]
            },
            {
              name: "旅館　やまと＜愛知県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7717/7717.jpg",
              rating: 4.4,
              reviews: 40,
              price: "¥5,500〜",
              access: "東名岡崎インターより車で約５０分",
              features: ["当館のすぐ前は海！最高のロケーションです。", "西尾市吉良町宮崎西部田15", "楽天アワード受賞歴"]
            },
            {
              name: "料理旅館　宮嶋舘　",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7262/7262.jpg",
              rating: 2.0,
              reviews: 42,
              price: "¥6,600〜",
              access: "東名岡崎ＩＣより国道２４８－２４７経由車で５０分",
              features: ["とびっきり新鮮な海の幸を食膳へ", "西尾市吉良町宮崎馬道24", "楽天アワード受賞歴"]
            },
            {
              name: "西浦温泉　ホテル龍城（たつき）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76400/76400.jpg",
              rating: 4.0,
              reviews: 456,
              price: "¥8,800〜",
              access: "R23で交通至便。名古屋から車で１時間/名鉄西浦駅送迎無料",
              features: ["絶景雄大三河湾　碧い海青い空白い灯台", "蒲郡市西浦町大山25", "楽天アワード受賞歴"]
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
            <span>瀬戸焼の器＆三河うなぎ美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              瀬戸焼のうつわが引き立てる極上三河うなぎ。三河湾のオーシャンビュー温泉に寛ぐ休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            「せともの」の語源となった千年以上の歴史を持つ瀬戸焼。その洗練された器に盛り付けられるのは、全国屈指のブランド「三河一色産うなぎ」。外はパリッと中はふっくら香ばしく焼き上げたうな重やひつまぶしは絶品の極みです。三河湾を望む美肌温泉・三谷温泉や南知多温泉の絶景露天風呂に浸かり、愛知の豊かな海の幸と歴史ある伝統美をご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">名物「三河一色産うなぎ」のひつまぶし会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">職人が備長炭で焼き上げる極上うなぎ。そのまま、薬味、出汁茶漬けと3つの美味しさ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">作家が手がけた瀬戸焼・常滑焼のうつわ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">土の温もりとモダンな釉薬が料理を引き立てる、目でも舌でも楽しむ芸術的ディナー。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">三河湾の夕日と潮風を感じる展望露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">波穏やかな海を一望するパノラマ温泉。夕暮れに茜色に染まる水面を眺めてリフレッシュ。</p>
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
