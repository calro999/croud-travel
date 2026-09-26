import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選",
  description: "風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。",
  keywords: "秋保温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-miyagi-sendai-zunda-sweets-stay',
  },
  openGraph: {
    title: "【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選",
    description: "風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。",
    url: 'https://croud-travel.com/traditional-miyagi-sendai-zunda-sweets-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選",
    description: "風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選",
    "description": "風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。",
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
      "@id": "https://croud-travel.com/traditional-miyagi-sendai-zunda-sweets-stay"
    }
  };

  const hotelList = [
            {
              name: "仙台　秋保温泉　華乃湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8074/8074.jpg",
              rating: 4.3,
              reviews: 2768,
              price: "¥12,000〜",
              access: "東北自動車道仙台南ICより約10分、仙台駅より車で約30分、仙台駅無料送迎バスのご予約は公式HP専用フォームより受付",
              features: ["新styleカジュアルな【オールインクルーシブ】と効能豊かな湯めぐり、創作ビュッフェを愉しむホテル☆", "仙台市太白区秋保町湯元字除33-1", "楽天アワード受賞歴"]
            },
            {
              name: "秋保温泉　篝火の湯　緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15989/15989.jpg",
              rating: 4.2,
              reviews: 1451,
              price: "¥10,450〜",
              access: "東北自動車道仙台南ICから約15分。仙台中心部まで車で約30分。JR仙台駅東口より無料シャトルバス毎日運行（※要予約）",
              features: ["仙台駅から車で約30分。秋保温泉の高台に佇む一軒宿！篝火を灯す幻想的な露天風呂が人気です。", "仙台市太白区秋保町湯元上原27-2", "楽天アワード受賞歴"]
            },
            {
              name: "秋保温泉　茶寮宗園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38345/38345.jpg",
              rating: 4.9,
              reviews: 86,
              price: "¥49,500〜",
              access: "仙台駅～車で約30分/仙台南IC～車で15分/仙台宮城IC～車で約20分/JR仙台駅～送迎バス（要予約）",
              features: ["美食・温泉・建築「三つの美」を五感で楽しむ秋保温泉の上質な湯宿", "仙台市太白区秋保町湯元釜土東1", "楽天アワード受賞歴"]
            },
            {
              name: "秋保温泉　心和む名湯の宿　曽良一",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5770/5770.jpg",
              rating: 4.2,
              reviews: 1504,
              price: "¥9,900〜",
              access: "ＪＲ仙台駅よりバス５０分。秋保温泉湯元バス停下車１分。仙台南インターよりお車で１５分。",
              features: ["客室は全１６室。華やかさではなく、静かに寄り添う“こころなごむひととき”を。", "仙台市太白区秋保町湯元字薬師108", "楽天アワード受賞歴"]
            },
            {
              name: "秋保温泉　秋保グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15098/15098.jpg",
              rating: 4.3,
              reviews: 5155,
              price: "¥10,450〜",
              access: "JR仙台駅よりバスで５０分、車で３０分/東北自動車道仙台南ICより車で１０分",
              features: ["楽天アワード「レジャー部門」銀賞連続受賞　人気のビュッフェ　にぎり鮨などが食べ放題", "仙台市太白区秋保町湯元枇杷原12-2", "楽天アワード受賞歴"]
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
            <span>仙台ずんだ＆三陸海鮮名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              鮮やかな緑と芳醇な枝豆の香り。仙台伝統「ずんだ」と奥州名湯・秋保温泉の口福ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            伊達政宗公の時代から愛される宮城の郷土の味「ずんだ」。お宿のウェルカムスイーツやカフェラウンジで味わう出来立てのずんだ餅、濃厚なずんだシェイクやロールケーキは大好評です。夕食には三陸直送の新鮮なお造りや仙台牛の陶板焼きを堪能。磊々峡（らいらいきょう）の渓谷美を望む秋保温泉の露天風呂に浸かり、心温まる東北の休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">職人仕込みの濃厚「仙台ずんだスイーツ」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">枝豆の豊かな風味と程よい甘み。ずんだ餅や特製パフェ、ずんだプリン。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">三陸直送！鮮度抜群の海の幸会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">金華サバ、気仙沼フカヒレ、三陸鮑など宮城の海が誇る最高峰の味覚。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">奥州三名湯「秋保温泉」の源泉かけ流し</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">塩化物泉の温もりと渓谷美。磊々峡のせせらぎを聴く露天風呂でリフレッシュ。</p>
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
