import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選",
  description: "若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。",
  keywords: "嬉野温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-nagasaki-hasami-yaki-porcelain-stay',
  },
  openGraph: {
    title: "【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選",
    description: "若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。",
    url: 'https://croud-travel.com/traditional-nagasaki-hasami-yaki-porcelain-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選",
    description: "若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選",
    "description": "若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。",
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
      "@id": "https://croud-travel.com/traditional-nagasaki-hasami-yaki-porcelain-stay"
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
              name: "嬉野温泉　割烹旅館　鯉登苑（りとうえん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80886/80886.jpg",
              rating: 4.4,
              reviews: 283,
              price: "¥12,130〜",
              access: "嬉野ICより車で約５分、嬉野温泉駅から約１０分",
              features: ["【総合★4.5】趣異なる全10室の料理旅館。日本三大美肌の湯嬉野温泉と絶品料理で心を満たす滞在を", "嬉野市嬉野町岩屋川内甲437", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　旅館大村屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12624/12624.jpg",
              rating: 4.6,
              reviews: 519,
              price: "¥12,300〜",
              access: "JR西九州新幹線「嬉野温泉駅��よりお車で約5分 / 長崎自動車道 嬉野ICより５分",
              features: ["【自家源泉保有】源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天・半露天付客室有", "嬉野市嬉野町大字下宿乙848", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　旅館　初音荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13775/13775.jpg",
              rating: 4.4,
              reviews: 671,
              price: "¥9,900〜",
              access: "『嬉野IC』より車で8分／『武雄温泉駅』より嬉野温泉までバスで30分＊平面駐車場完備でご家族マイカーでの来館も安心です。",
              features: ["お子様満足度120％保証！お子様連れ特化旅館でお子様との大切な思い出の旅をお届けいたします♪", "嬉野市嬉野町岩屋川内甲340-1", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　風の宿　旅館　千湯樓（せんとうろう）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70219/70219.jpg",
              rating: 4.2,
              reviews: 170,
              price: "¥8,400〜",
              access: "■嬉野インターより車で１０分■嬉野バスセンターからの無料送迎もございます（要予約）",
              features: ["嬉野の奥座敷。清流と大自然に囲まれた蛍の訪れる山あいの静かな宿。館内無線LAN完備", "嬉野市嬉野町岩屋川内乙2117-1", "楽天アワード受賞歴"]
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
            <span>波佐見焼の器＆創作美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              モダンで洗練された波佐見焼と長崎創作美食。美肌温泉で過ごす感性豊かな休日
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            400年の歴史を持ちながら、日常に溶け込むモダンなデザインで全国的な人気を集める長崎の「波佐見焼」。カラフルで洗練された器に盛り付けられるのは、長崎近海の新鮮な魚介や長崎和牛を使った創作フレンチやモダン会席。日本三大美肌の湯・嬉野温泉や雲仙の白濁硫黄泉に浸かり、アートと美食、名湯が融合した贅沢なひとときをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">選び抜かれた「波佐見焼」のモダンな器</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">北欧デザインにも通じるスタイリッシュなうつわ。料理の色彩を引き立てる演出。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">長崎和牛と近海魚介の特選創作フレンチ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">地元の契約農家野菜と旬の海の幸。シェフが腕を振るう美しいフルコース。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本三大美肌の湯「嬉野温泉」のトロトロ美肌湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">重曹泉の滑らかな湯ざわり。美肌効果抜群の源泉かけ流し露天風呂。</p>
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
