import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "初夏の幻想蛍夜：客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選",
  description: "初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。",
  keywords: "ホタル 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/luxury-private-onsen-with-scenic-firefly-deck/",
  },
  openGraph: {
    title: "初夏の幻想蛍夜：客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選",
    description: "初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。",
    url: 'https://croud-travel.pages.dev/luxury-private-onsen-with-scenic-firefly-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【初夏の幻想蛍夜】客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "初夏の幻想蛍夜：客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選",
    description: "初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【初夏の幻想蛍夜】客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選",
    "description": "初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T00:00:00+09:00",
    "dateModified": "T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/luxury-private-onsen-with-scenic-firefly-deck"
    }
  };

  const hotelList = [
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
              name: "平山温泉　ほたるの長屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52134/52134.jpg",
              rating: 4.8,
              reviews: 94,
              price: "¥15,000〜",
              access: "ＪＲ鹿児島本線　大牟田駅または玉名駅より車で４５分／福岡空港より高速道路　植木ＩＣより車で２５分",
              features: ["女性オーナーシェフが手がける、ミシュランガイド掲載旅館の創作料理。全5棟の客室に源泉100％温泉付宿", "山鹿市平山5206-7", "楽天アワード受賞歴"]
            },
            {
              name: "ほたる温泉　ホテルハイツ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31984/31984.jpg",
              rating: 3.8,
              reviews: 48,
              price: "¥7,425〜",
              access: "上信越自動車道信州中野ＩＣより約28Ｋｍ約40分。ＪＲ長野駅より志賀高原行バスで７０分",
              features: ["志賀高原をアクティブに楽しむ方にお薦め☆源泉掛け流し温泉が魅力の宿", "下高井郡山ノ内町大字平穏7148-31", "楽天アワード受賞歴"]
            },
            {
              name: "山梨県の温泉旅館　下部温泉郷　下部ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916.jpg",
              rating: 4.4,
              reviews: 1284,
              price: "¥15,400〜",
              access: "ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分",
              features: ["泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます", "南巨摩郡身延町上之平1900", "楽天アワード受賞歴"]
            },
            {
              name: "天川・洞川温泉　温泉・名水・後鬼の里　旅館　紀の国屋甚八",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7840/7840.jpg",
              rating: 4.2,
              reviews: 307,
              price: "¥13,800〜",
              access: "近鉄下市口駅より奈良交通バス(洞川温泉行)で80分。",
              features: ["◆スーパーSALE参加中◆創業300年　露天庭風呂（貸切・24H入浴可）・美味料理・１２時アウト", "吉野郡天川村洞川222-1", "楽天アワード受賞歴"]
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
            <span>ホタル鑑賞＆清流露天</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">「初夏の幻想蛍夜」客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【初夏の幻想蛍夜】客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「由布院温泉 旅館 ほたるの宿 仙洞」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「由布院温泉 旅館 ほたるの宿 仙洞」へは、由布院駅より車で５分／湯布院ＩＣより車で１０分。最寄りの湯布院駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「由布院温泉 旅館 ほたるの宿 仙洞」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「由布院温泉 旅館 ほたるの宿 仙洞」は『金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。全客室Wi－Fi接続。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「由布院温泉 旅館 ほたるの宿 仙洞」と「平山温泉 ほたるの長屋」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【初夏の幻想蛍夜】客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選","item":"https://croud-travel.pages.dev/luxury-private-onsen-with-scenic-firefly-deck"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              闇夜を優美に舞う蛍の光と湯けむり。初夏限定の幻想的なプライベート温泉ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            水が清らかな山あいの宿でしか出逢えない、初夏の風物詩「ホタル」。客室の専用テラスや川沿いの露天風呂に浸かりながら、漆黒の夜空と木々の間を淡く明滅しながら行き交う蛍の群れを眺める時間は、息をのむほど贅沢です。ホタル観賞スポットへの案内ツアーや、初夏の旬をあしらった涼やかな懐石料理とともに、心に残る特別な夜をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用テラス・露天風呂から望む蛍</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">誰にも邪魔されず、湯船やプライベートデッキから幻想的なホタルの光を鑑賞。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">宿専用のホタル鑑賞路＆ガイドツアー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">敷地内のビオトープや清流沿いの小径で、間近に蛍が飛び交う絶景ポイントへ案内。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">初夏の味覚「鮎・若鮎」と涼味懐石</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">清流で獲れた香ばしい鮎の塩焼きや、蓴菜・初夏野菜を彩り豊かに仕立てた会席料理。</p>
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
      
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】由布院温泉 旅館 ほたるの宿 仙洞を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 湯布院駅よりアクセス。由布院駅より車で５分／湯布院ＩＣより車で１０分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「由布院温泉 旅館 ほたるの宿 仙洞」にチェックイン。金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。全客室Wi－Fi接続可。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「由布院温泉 旅館 ほたるの宿 仙洞」の湯処へ。金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「由布院温泉 旅館 ほたるの宿 仙洞」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「由布院温泉 旅館 ほたるの宿 仙洞」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「由布院温泉 旅館 ほたるの宿 仙洞」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「平山温泉 ほたるの長屋」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と由布院温泉 旅館 ほたるの宿 仙洞の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「由布院温泉 旅館 ほたるの宿 仙洞」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「由布院温泉 旅館 ほたるの宿 仙洞」へは、由布院駅より車で５分／湯布院ＩＣより車で１０分。最寄りの湯布院駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「由布院温泉 旅館 ほたるの宿 仙洞」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「由布院温泉 旅館 ほたるの宿 仙洞」は『金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。全客室Wi－Fi接続。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「由布院温泉 旅館 ほたるの宿 仙洞」と「平山温泉 ほたるの長屋」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/tokyo"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                東京都の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="luxury-private-onsen-with-scenic-firefly-deck" />
</div>
        </section>

      </main>
    </article>
  );
}
