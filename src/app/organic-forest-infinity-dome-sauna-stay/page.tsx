import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選",
  description: "近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。",
  keywords: "ドームテント サウナ 温泉, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-infinity-dome-sauna-stay',
  },
  openGraph: {
    title: "【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選",
    description: "近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。",
    url: 'https://croud-travel.com/organic-forest-infinity-dome-sauna-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選",
    description: "近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選",
    "description": "近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。",
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
      "@id": "https://croud-travel.com/organic-forest-infinity-dome-sauna-stay"
    }
  };

  const hotelList = [
            {
              name: "全室源泉かけ流し温泉付き旅館＆グランピング　美肌の湯　こしかの温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/171946/171946.jpg",
              rating: 4.6,
              reviews: 509,
              price: "¥4,620〜",
              access: "鹿児島空港より車で約15分【19時までなら鹿児島空港・国分駅まで無料送迎（要予約）】",
              features: ["温泉宿・グランピング全室で源泉掛け流しの天然炭酸泉が満喫できます。ペットOKの客室もございます。", "霧島市隼人町松永2625", "楽天アワード受賞歴"]
            },
            {
              name: "プレジャーリゾート伊豆赤沢温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/107696/107696.jpg",
              rating: 4.4,
              reviews: 1955,
              price: "¥6,600〜",
              access: "伊豆高原駅、南口より無料送迎バスで約１５分※ダイヤは事前にご確認ください。",
              features: ["2026年4月27日OPEN！湯のぬくもりと遊び尽くせない多彩なレジャーがあふれる海辺の温泉リゾート", "伊東市赤沢浮山163-1", "楽天アワード受賞歴"]
            },
            {
              name: "ピリカ温泉　クアプラザピリカ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147652/147652.jpg",
              rating: 4.3,
              reviews: 206,
              price: "¥6,750〜",
              access: "JR函館本線長万部駅より函館バス／道央自動車道国縫ICより車で約15分",
              features: ["ピリカスキー場を併設する森に囲まれた温泉宿泊施設。深山、清流、２つの海、道南めぐりの拠点におすすめ。", "瀬棚郡今金町美利河205-1", "楽天アワード受賞歴"]
            },
            {
              name: "那須温泉グランピング　Ｎｅｎｎ（ネン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184489/184489.jpg",
              rating: 4.3,
              reviews: 228,
              price: "¥9,600〜",
              access: "JR那須塩原駅より車で30分",
              features: ["那須高原で天然温泉も楽しめる一味違ったグランピングで素敵な時間をお過ごしください。", "那須郡那須町高久甲5461-1", "楽天アワード受賞歴"]
            },
            {
              name: "神の宮温泉　かわら亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165683/165683.jpg",
              rating: 4.7,
              reviews: 314,
              price: "¥10,450〜",
              access: "上越妙高駅よりお車にて約１０分■駐車場無料■",
              features: ["北陸新幹線「上越妙高駅」から一番近い『温泉宿』　化粧水のようなアルカリ性のお湯は身体も心も癒します", "妙高市神宮寺31-3　", "楽天アワード受賞歴"]
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
            <span>ドームサウナ＆湧水インフィニティ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              幾何学ドームの美学と自然の融合。森の中に佇む最新ドームサウナで極上の覚醒体験
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            パノラマガラスから自然光が差し込む美しい球体ドームサウナ。木製のベンチに腰掛け、ハーブや白樺のアロマ水でセルフロウリュを行えば、熱波がドームの曲面に沿って滑らかに全身を包み込みます。サウナ後は森と一体化するインフィニティ湧水風呂へ。ウッドデッキでの外気浴は、まさに心身が完全に解放される至高の体験です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">360度パノラマビューの球体ドームサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">熱効率の高い幾何学構造。森の景観を眺めながらのアロマセルフロウリュ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">天然湧水かけ流しインフィニティ水風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">水面が森とシームレスに溶け合う設計。まろやかな天然水で肌あたり抜群。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">森林浴と一体化する天空デッキ外気浴</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">インフィニティチェアに横たわり、マイナスイオンを浴びる極上のととのい時間。</p>
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
