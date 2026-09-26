import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選",
  description: "青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。",
  keywords: "富良野 温泉 ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-sunflower-deck',
  },
  openGraph: {
    title: "【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選",
    description: "青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-sunflower-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選",
    description: "青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選",
    "description": "青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-sunflower-deck"
    }
  };

  const hotelList = [
            {
              name: "富良野リゾートホテル　エーデルヴェルメ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16240/16240.jpg",
              rating: 4.1,
              reviews: 455,
              price: "¥6,000〜",
              access: "札幌ICから道央自動車道、三笠ICまで約30分、道道116号岩見沢三笠線/国道38号線、北の峰経由で約1時間30分",
              features: ["大雪山・十勝岳連峰と富良野の雄大な景色を堪能できる北欧風リゾートホテルでコンセプトルームを多数ご用意", "富良野市北の峰町9-20", "楽天アワード受賞歴"]
            },
            {
              name: "芦別温泉スターライトホテル＆おふろｃａｆｅ星遊館　満天の星空×サウナリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109464/109464.jpg",
              rating: 4.3,
              reviews: 1024,
              price: "¥10,395〜",
              access: "芦別駅から10分／旭川駅から約60分／旭川空港から約80分／札幌・新千歳空港から約120分（車移動）",
              features: ["おふろcafeでのんびり！星空露天風呂と３種のサウナでととのう旅を♪　空知・旭川・富良野美瑛観光に！", "芦別市旭町油谷1", "楽天アワード受賞歴"]
            },
            {
              name: "新富良野プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30804/30804.jpg",
              rating: 4.4,
              reviews: 1604,
              price: "¥5,412〜",
              access: "ＪＲ富良野駅タクシー10分／道央自動車道 三笠ＩＣより車で約60分／旭川空港・新千歳空港から路線バスあり（終点当ホテル）",
              features: ["冬の富良野を満喫するチャンス！期間限定タイムセール開催中。今だけ使えるクーポン配布中！", "富良野市中御料", "楽天アワード受賞歴"]
            },
            {
              name: "富良野リゾート　オリカ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9215/9215.jpg",
              rating: 4.9,
              reviews: 203,
              price: "¥32,120〜",
              access: "■新千歳空港からお車で約2時間30分　■札幌からお車で約2時間　■旭川空港からお車で約45分",
              features: ["上質で魅力あるステイを「丘の上の邸宅」で。　※11月と4月は休館", "空知郡中富良野町西2線北17号", "楽天アワード受賞歴"]
            },
            {
              name: "十勝川温泉　観月苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19237/19237.jpg",
              rating: 4.5,
              reviews: 2012,
              price: "¥13,750〜",
              access: "【バス】JR帯広駅より30分（観月苑前下車）｜【お車】帯広駅より20分、音更帯広ICより20分、帯広空港より40分",
              features: ["十勝川温泉初！２０２０年５月フィンランド式サウナへリニューアル！", "河東郡音更町十勝川温泉南14-2", "楽天アワード受賞歴"]
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
            <span>ひまわり畑絶景＆展望露天</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              太陽に向かって咲き誇る黄金色の花畑。展望露天風呂から愛でる感動のサマーパノラマ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            夏から秋にかけて一面を黄色く染め上げるひまわりの大パノラマ。宿の敷地内や目の前に広がる花畑を、プライベートテラスや露天風呂から眺める時間は、心まで明るく前向きにしてくれます。夕暮れ時には夕日に照らされて黄金色に輝くロマンチックな景観に変化。地元で採れたての夏野菜や旬のフルーツをふんだんに使ったリゾート料理とともに、特別な休日を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室テラスから一望する満開のひまわり畑</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">遮るもののない大パノラマ。黄色の花々と青空が織りなす圧倒的なフォトジェニック空間。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">夕暮れに黄金色に染まるサンセット露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">夕日に照らされる花畑を眺めながら入る天然温泉。体の芯から温まる癒やしの湯。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">高原の採れたて旬野菜とグリル料理</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">トウモロコシやトマトなど瑞々しい高原野菜と、ジューシーなブランド肉のディナー。</p>
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
