import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選",
  description: "重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。",
  keywords: "花巻温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-iwate-morioka-reimen-nanbu-stay',
  },
  openGraph: {
    title: "【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選",
    description: "重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。",
    url: 'https://croud-travel.com/traditional-iwate-morioka-reimen-nanbu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選",
    description: "重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選",
    "description": "重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。",
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
      "@id": "https://croud-travel.com/traditional-iwate-morioka-reimen-nanbu-stay"
    }
  };

  const hotelList = [
            {
              name: "花巻温泉　割烹旅館　廣美亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10689/10689.jpg",
              rating: 4.6,
              reviews: 329,
              price: "¥15,400〜",
              access: "東北自動車道花巻ＩＣより5分・JR花巻空港駅よりタクシーで15分・東北新幹線新花巻駅より無料送迎バスあり（要プラン確認）",
              features: ["花巻温泉で唯一の割烹旅館。岩手の旬の素材を使った本格会席料理が自慢の宿。", "花巻市湯本1-88-1", "楽天アワード受賞歴"]
            },
            {
              name: "花巻温泉　佳松園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13482/13482.jpg",
              rating: 4.7,
              reviews: 1108,
              price: "¥20,900〜",
              access: "花巻IC：右折後直進4km（5分）、JR新花巻駅・JR花巻駅：無料送迎バス20分（定時運行・完全予約制）",
              features: ["とろとろの湯と心に残るおもてなし。特別な日を佳松園で過ごす愉しみ。花巻ICよりわずか5分の別世界。", "花巻市湯本第1地割125-2", "楽天アワード受賞歴"]
            },
            {
              name: "岩手　花巻温泉郷　鉛温泉　藤三旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9536/9536.jpg",
              rating: 4.5,
              reviews: 2672,
              price: "¥6,600〜",
              access: "新花巻駅より４０分・花巻駅より３０分（送迎バスあり、協力金：片道100円、予約必須）。花巻南Ｉ��よりお車で２０分。",
              features: ["2024年6月宮沢賢治をテーマにした「なめとこ山サウナ」がグランドオープン", "花巻市鉛中平75-1", "楽天アワード受賞歴"]
            },
            {
              name: "花巻温泉郷　台温泉　いやしろの湯　ホテル三右ェ門",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56915/56915.jpg",
              rating: 4.0,
              reviews: 357,
              price: "¥8,200〜",
              access: "ＪＲ東北本線　花巻駅より車で１５分／東北新幹線　新花巻駅より車で２０分／花巻空港より車で１５分",
              features: ["閑静で落ち着いた昔変らぬ宿心。移り変わる風情とともに、台温泉で過ごすお時間をごゆるりとお寛ぎ下さい", "花巻市台２－４５", "楽天アワード受賞歴"]
            },
            {
              name: "囲炉裏懐石と天然温泉を楽しむ　秘境の隠れ家　やまゆりの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28738/28738.jpg",
              rating: 4.5,
              reviews: 592,
              price: "¥8,130〜",
              access: "新花巻駅より車で２０分／東北自動車道花巻ＩＣより車で１０分／花巻空港より車で１５分",
              features: ["前沢牛と新鮮三陸魚介、地元食材による囲炉裏会席が好評！敷地内で自噴する温泉は効能豊かな源泉かけ流し！", "花巻市台第２地割57-9", "楽天アワード受賞歴"]
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
            <span>南部鉄器＆前沢牛美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              南部鉄器の鉄鍋で焼き上げる極上前沢牛。花巻温泉郷の名湯に包まれるイーハトーブの旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            400年以上の歴史を誇る岩手の伝統工芸「南部鉄器」。熱伝導と蓄熱性に優れた鉄鍋で焼き上げる「前沢牛」は、表面はカリッと中は驚くほど柔らかくジューシーに仕上がります。〆にはコシの強い麺と牛骨スープが絶品の盛岡冷麺を堪能。宮沢賢治が愛した花巻温泉郷の風情ある露天風呂に浸かり、岩手の大自然と美食文化に癒やされる贅沢なひとときをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">伝統「南部鉄器」で焼き上げる前沢牛ステーキ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">肉の旨味を閉じ込める南部鉄器の magic。選び抜かれたA5ランク前沢牛の濃厚な甘み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本場仕込みの「盛岡冷麺＆じゃじゃ麺」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">弾力ある自家製麺とコク深い澄んだスープ。お好みで辛味を加えて味わう名物麺。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">歴史ある「花巻温泉郷・繋温泉」の湯めぐり</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">台川沿いの渓流露天風呂や広々とした大浴場。豊富に湧き出る美肌の湯でリフレッシュ。</p>
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
