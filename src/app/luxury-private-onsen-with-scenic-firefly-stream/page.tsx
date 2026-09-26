import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選",
  description: "清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。",
  keywords: "ホタル 露天風呂 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-firefly-stream',
  },
  openGraph: {
    title: "【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選",
    description: "清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-firefly-stream',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選",
    description: "清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選",
    "description": "清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-firefly-stream"
    }
  };

  const hotelList = [
            {
              name: "蔵王ほたるの庭　－　温泉露天風呂付き貸別荘　－　蔵王山水苑　ガイアリゾート　＾",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/190671/190671.jpg",
              rating: 4.5,
              reviews: 120,
              price: "¥11,032〜",
              access: "東白石駅から車で約２８分",
              features: ["　", "刈田郡蔵王町遠刈田温泉字小妻坂53-93　蔵王ほたるの庭　-　温泉露天風呂付き貸別荘　-　蔵王山水苑　ガイアリゾート", "楽天アワード受賞歴"]
            },
            {
              name: "平山温泉　ほたるの長屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52134/52134.jpg",
              rating: 4.8,
              reviews: 94,
              price: "¥15,000〜",
              access: "ＪＲ鹿児島本線　大牟田駅または玉名駅より車で４５分／福岡空港より高速道路　植木ＩＣより車で２５分",
              features: ["女性オーナーシェフが手がける、ミシュランガイド掲載旅館の創作料理。全5棟の客室に源泉100％温泉付宿", "山鹿市平山5206-7", "楽天アワード受賞歴"]
            },
            {
              name: "由布院温泉　旅館　ほたるの宿　仙洞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41834/41834.jpg",
              rating: 4.3,
              reviews: 890,
              price: "¥9,500〜",
              access: "由布院駅より車で５分／湯布院ＩＣより車で１０分",
              features: ["金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。全客室Wi－Fi接続可。", "由布市湯布院町川上2634-1", "楽天アワード受賞歴"]
            },
            {
              name: "ほろしん温泉　ほたる館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44918/44918.jpg",
              rating: 4.3,
              reviews: 181,
              price: "¥8,374〜",
              access: "JR石狩沼田駅より町営バス20分。旭川から国道12号線で50分。札幌から道央自動車道で90分",
              features: ["北空知の雄大な自然に囲まれた静かな温泉宿。豊かな森と田園風景に抱かれ温泉でゆったりと♪", "雨竜郡沼田町幌新377", "楽天アワード受賞歴"]
            },
            {
              name: "ほたる温泉　ホテルハイツ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31984/31984.jpg",
              rating: 3.8,
              reviews: 48,
              price: "¥7,425〜",
              access: "上信越自動車道信州中野ＩＣより約28Ｋｍ約40分。ＪＲ長野駅より志賀高原行バスで７０分",
              features: ["志賀高原をアクティブに楽しむ方にお薦め☆源泉掛け流し温泉が魅力の宿", "下高井郡山ノ内町大字平穏7148-31", "楽天アワード受賞歴"]
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
            <span>ホタル乱舞＆清流露天風呂</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              暗闇に浮かぶ無数の緑の光。清流のせせらぎとホタルの舞に包まれる初夏の奇跡の夜
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            水と空気が清らかな山あいの温泉地でしか見られない初夏の風物詩「ホタル」。客室テラスや庭園の遊歩道から、淡く光りながら飛び交うゲンジボタルやヘイケボタルの幻想的な光景に心奪われます。湯量豊富な源泉かけ流しの露天風呂に浸かりながら、夜風とともに初夏の涼を味わう贅沢。静寂と光のアートに癒やされる特別な温泉ステイをお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">敷地内の清流で舞う「幻想的なホタルの光」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">初夏限定のプレミアム体験。宿の庭園や専用テラスから眺める天然のイルミネーション。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">川のせせらぎを聴く源泉かけ流し露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">マイナスイオンたっぷりの渓流沿い温泉。肌を優しく潤す極上の湯浴み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">初夏の味覚！若鮎の塩焼きと地場産山菜会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">香ばしい焼き魚や初夏の山の恵み。地酒とともに味わう郷土の味覚。</p>
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
