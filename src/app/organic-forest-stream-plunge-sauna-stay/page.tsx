import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選",
  description: "薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。",
  keywords: "渓流 露天風呂 サウナ, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-stream-plunge-sauna-stay',
  },
  openGraph: {
    title: "【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選",
    description: "薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。",
    url: 'https://croud-travel.com/organic-forest-stream-plunge-sauna-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選",
    description: "薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選",
    "description": "薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。",
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
      "@id": "https://croud-travel.com/organic-forest-stream-plunge-sauna-stay"
    }
  };

  const hotelList = [
            {
              name: "ベル・ザ・キャット　貸切温泉５サウナ付２豚しゃぶお酒食べ飲み放題",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2937/2937.jpg",
              rating: 4.4,
              reviews: 404,
              price: "¥5,980〜",
              access: "那須IC下車湯本方面へサファリ入口左折。橋を渡ったら。左側にある当館の看板２つ目を右折後奥100ｍ",
              features: ["木造小さなペンション！個室で豚しゃぶ＆つまみ＆デザート食放題＆飲放題！貸切温泉５サウナ２！露天付高額", "那須郡那須町高久乙3814-17", "楽天アワード受賞歴"]
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
              name: "会津東山温泉　客室専用露天風呂付のスイートルーム　はなれ　松島閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139955/139955.jpg",
              rating: 4.3,
              reviews: 751,
              price: "¥17,600〜",
              access: "【電車】ＪＲ磐越西線「会津若松駅」下車タクシー１０分【お車】「磐越自動車道」会津若松ＩＣより国道４９号線経由",
              features: ["全10部屋客室専用露天風呂付のスイートルーム♪本館『庄助の宿　瀧の湯』特別客室（スイートルーム）♪", "会津若松市東山町湯本滝ノ湯107（庄助の宿 瀧の湯）", "楽天アワード受賞歴"]
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
              name: "人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg",
              rating: 4.7,
              reviews: 640,
              price: "¥22,300〜",
              access: "富山地方鉄道　宇奈月温泉駅から送迎車あり",
              features: ["令和5年3月オープン☆川側特別室　宇奈月の山々と眼下に清流黒部川　貸切岩盤浴や貸切露天風呂も好評！", "黒部市宇奈月温泉1397-2", "楽天アワード受賞歴"]
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
            <span>清流ダイブ＆森の薪サウナ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              火照った体を清流の冷水で一気にクールダウン。大自然と一体化する究極のアウトドアサウナ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            サウナファンの間で熱狂的な人気を集める「天然の川を水風呂にする」リバーサウナ体験。木々に囲まれた本格的な薪サウナでセルフロウリュを堪能した後は、目の前を流れるエメラルドグリーンの清流へ飛び込み！川のせせらぎと鳥の声、木漏れ日を浴びながらのリクライニングチェアでの外気浴は別格です。サウナ後は宿の天然温泉で温まり、地元グルメに舌鼓を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">清流直結の本格薪ストーブサウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">川のすぐそばに設置されたサウナ小屋。薪の香りと熱々のロウリュで深部から発汗。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">エメラルドグリーンの天然清流水風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">飲めるほど澄んだ清流へダイブ！自然の水流と冷たさが極上の快感をもたらします。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">渓流を望むウッドデッキ外気浴スペース</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">インフィニティチェアで森林浴。川のせせらぎとマイナスイオンに包まれるととのい。</p>
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
