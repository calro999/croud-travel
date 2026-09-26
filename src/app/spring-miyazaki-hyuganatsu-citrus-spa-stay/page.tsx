import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選",
  description: "黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。",
  keywords: "宮崎 温泉 リゾート ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/spring-miyazaki-hyuganatsu-citrus-spa-stay',
  },
  openGraph: {
    title: "【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選",
    description: "黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。",
    url: 'https://croud-travel.com/spring-miyazaki-hyuganatsu-citrus-spa-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選",
    description: "黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選",
    "description": "黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。",
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
      "@id": "https://croud-travel.com/spring-miyazaki-hyuganatsu-citrus-spa-stay"
    }
  };

  const hotelList = [
            {
              name: "天然温泉”たまゆらの湯”　宮崎観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17916/17916.jpg",
              rating: 4.2,
              reviews: 2657,
              price: "¥5,500〜",
              access: "JR宮崎駅よりタクシーで約5分　宮崎空港より車で約15分　橘通1丁目バス停より徒歩約10分",
              features: ["楽天トラベルからお申込み頂いた方専用ラウンジ10/26OPEN★17時からは宮崎の焼酎もご用意♪", "宮崎市松山1-1-1", "楽天アワード受賞歴"]
            },
            {
              name: "ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg",
              rating: 4.4,
              reviews: 2166,
              price: "¥5,040〜",
              access: "宮崎自動車道宮崎ICから国道220号線で15分。宮崎ブーゲンビリア空港から車で15分。JRこどものくに駅から徒歩7分。",
              features: ["サウナ付天然温泉完備で泉質は美肌の湯、海を眺めながらご入浴が可能な展望大浴場です", "宮崎市青島1-16-1", "楽天アワード受賞歴"]
            },
            {
              name: "ホテル日南北郷リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5370/5370.jpg",
              rating: 4.1,
              reviews: 536,
              price: "¥6,100〜",
              access: "九州自動車道、日南北郷ＩＣより車で7分。",
              features: ["宮崎の奥座敷、天然温泉を生かした山の上のリゾートホテルです。", "日南市北郷町大字郷之原甲2821-1", "楽天アワード受賞歴"]
            },
            {
              name: "渚のリゾート・吉良　竜宮ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1461/1461.jpg",
              rating: 3.9,
              reviews: 2055,
              price: "¥6,300〜",
              access: "名古屋鉄道蒲郡線吉良吉田駅から車で10分。",
              features: ["海と語る渚のリゾート！テーマは「光と海」をコンセプトにした絶景・料理・風呂自慢の宿", "西尾市吉良町宮崎宮前12", "楽天アワード受賞歴"]
            },
            {
              name: "三河湾リゾートリンクス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75347/75347.jpg",
              rating: 4.1,
              reviews: 1700,
              price: "¥5,000〜",
              access: "名鉄吉良吉田駅より車で約１０分、無料送迎バス有（予約制）車：東名音羽蒲郡ICより約40分",
              features: ["三河湾から昇る感動の朝日が見られる絶景リゾートホテル♪ビュッフェと和・洋・中の選べる楽しみ", "西尾市吉良町宮崎中道下15", "楽天アワード受賞歴"]
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
            <span>宮崎日向夏＆青島美肌温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              甘酸っぱい日向夏スイーツと極上宮崎牛。青島のパームツリー揺れる南国リゾート
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            温暖な気候と豊かな日差しが降り注ぐ宮崎県。爽やかな香りの日向夏ジュースや特製タルト、そしてとろける霜降りが自慢の宮崎牛ステーキはまさに至高の組み合わせ。青島温泉のとろりとした重曹泉は「美肌の湯」として名高く、太平洋の水平線を望む展望大浴場でリフレッシュ。南国情緒あふれる青島の海辺で、優雅なバカンスをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">宮崎特産「完熟日向夏」のスイーツ＆カクテル</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">白皮ごと食べる独特の美味しさ。パティシエ特製の爽やかなタルトやパフェ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">最高峰5等級「宮崎牛」の炭火焼きステーキ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">内閣総理大臣賞受賞の誇り。濃厚な肉の旨味ととろけるような脂の甘み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鬼の洗濯板を一望する「青島美肌温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">化粧水のようなトロトロの湯ざわり。太平洋から昇る朝日を望む展望露天風呂。</p>
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
