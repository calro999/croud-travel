import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選",
  description: "秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。",
  keywords: "秋田 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-akita-magewappa-kiritanpo-stay',
  },
  openGraph: {
    title: "【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選",
    description: "秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。",
    url: 'https://croud-travel.com/traditional-akita-magewappa-kiritanpo-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選",
    description: "秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選",
    "description": "秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。",
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
      "@id": "https://croud-travel.com/traditional-akita-magewappa-kiritanpo-stay"
    }
  };

  const hotelList = [
            {
              name: "田沢湖水沢温泉郷セルリアンリゾートＡＯＮＩ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70772/70772.jpg",
              rating: 4.3,
              reviews: 336,
              price: "¥13,400〜",
              access: "田沢湖駅よりバスで約２５分（乳頭線、水沢温泉郷で降車）、タクシーで約１５分",
              features: ["★2024年露天風呂リニューアル！美肌成分豊富な源泉かけ流しの露天風呂付き大浴場と地元食材の料理", "仙北市田沢湖生保内下高野73-13", "楽天アワード受賞歴"]
            },
            {
              name: "からまつ山荘　東兵衛温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158810/158810.jpg",
              rating: 4.0,
              reviews: 47,
              price: "¥6,400〜",
              access: "秋田新幹線　角館駅よりお車にて約4０分",
              features: ["目前に迫る出羽山地の山々は圧巻！源泉かけ流し子宝・安産の湯でほっこり。夕食は秋田比内地鶏を堪能。", "大仙市協和船岡東兵衛屋敷91", "楽天アワード受賞歴"]
            },
            {
              name: "強首温泉　樅峰苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106118/106118.jpg",
              rating: 4.5,
              reviews: 69,
              price: "¥19,800〜",
              access: "ＪＲ奥羽本線　峰吉川駅よりお車にて７～８分（送迎有・要予約）",
              features: ["【登録有形文化財】歴史的技法が施されたお屋敷を当時のまま維持保全。成分の濃さ・希少性が自慢の温泉。", "大仙市強首強首268", "楽天アワード受賞歴"]
            },
            {
              name: "ファームｉｎｎ緑の風",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/66519/66519.jpg",
              rating: 4.3,
              reviews: 5,
              price: "¥6,050〜",
              access: "角館駅より車で１５分",
              features: ["ピザ作りやサウナなどワクワク体験が盛りだくさんの宿！自家製の野菜やお米を使っています♪", "仙北市角館町西長野川下田368", "楽天アワード受賞歴"]
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
            <span>大館曲げわっぱ＆乳頭秘湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              秋田杉の温もりときりたんぽ鍋の芳醇な出汁。憧れの乳頭温泉郷で過ごす秘湯時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            ブナの原生林に抱かれた乳頭温泉郷。足元からぷくぷくと自噴する乳白色の野趣あふれる混浴露天風呂や木のぬくもりある湯小屋は、まさに日本の秘湯の原風景です。夕食には大館曲げわっぱの器に盛られた美しい前菜や、日本三大地鶏「比内地鶏」の旨味が溶け出した熱々のきりたんぽ鍋。秋田の温かな人情と伝統の味に心までほぐれるステイをお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">憧れの秘湯「乳頭温泉郷」の七湯めぐり</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">乳白色、黄金色、透明など多彩な源泉。ブナ林に囲まれた野趣あふれる名物露天風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本場仕込みの「比内地鶏きりたんぽ鍋」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">香ばしい焼き目のたんぽと濃厚な比内地鶏の極上スープ。セリの根の香りがアクセント。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">伝統工芸「大館曲げわっぱ」の器美学</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">天然秋田杉の柾目が生み出す優美な曲線。ご飯やお料理の美味しさを引き立てる器。</p>
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
