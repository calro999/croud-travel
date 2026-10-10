import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "砂丘サンドバギー激走：鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選",
  description: "雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。",
  keywords: "鳥取砂丘 ホテル 温泉, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/super-panoramic-sand-buggy-adventure-stay/",
  },
  openGraph: {
    title: "砂丘サンドバギー激走：鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選",
    description: "雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。",
    url: 'https://croud-travel.pages.dev/super-panoramic-sand-buggy-adventure-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【砂丘サンドバギー激走】鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "砂丘サンドバギー激走：鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選",
    description: "雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【砂丘サンドバギー激走】鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選",
    "description": "雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。",
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
      "@id": "https://croud-travel.pages.dev/super-panoramic-sand-buggy-adventure-stay"
    }
  };

  const hotelList = [
            {
              name: "城崎温泉　西村屋ホテル招月庭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg",
              rating: 4.7,
              reviews: 1179,
              price: "¥35,200〜",
              access: "【電車】JR城崎温泉駅から旅館組合無料乗合バスで5～15分【車】北近畿豊岡自動車道・豊岡出石ICから約18分",
              features: ["かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有", "豊岡市城崎町湯島1016-2", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　皆生シーサイドホテル　海の四季",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5020/5020.jpg",
              rating: 4.4,
              reviews: 4969,
              price: "¥5,940〜",
              access: "米子自動車道・米子ＩＣより車で約10分、ＪＲ米子駅よりタクシー又はバスで約15分、米子空港よりタクシー又はバスで約20分",
              features: ["【楽天アワード2025受賞】14年連続＆通算17回目！全室オーシャンフロント！", "米子市皆生温泉3-4-3", "楽天アワード受賞歴"]
            },
            {
              name: "山陰湯村温泉　湧泉の宿　ゆあむ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10636/10636.jpg",
              rating: 4.5,
              reviews: 1528,
              price: "¥6,400〜",
              access: "近畿豊岡道日高神鍋高原ICより約35分/大阪梅田より阪急特急バス「湯村温泉行」1日1～2便",
              features: ["【和モダンな温泉宿】2023年2月温泉付客室＜かわみ＞3タイプ誕生。全34室", "美方郡新温泉町湯1610", "楽天アワード受賞歴"]
            },
            {
              name: "皆生温泉　華水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg",
              rating: 4.6,
              reviews: 942,
              price: "¥8,800〜",
              access: "ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分",
              features: ["お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿", "米子市皆生温泉4-19-10", "楽天アワード受賞歴"]
            },
            {
              name: "湯村温泉郷　御宿コトブキ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183930/183930.jpg",
              rating: 4.5,
              reviews: 178,
              price: "¥9,500〜",
              access: "JR浜坂駅よりバスで約15分　八鹿氷ノ山ICより車で50分（冬期は冬用タイヤの着用をお願いします）",
              features: ["7月8月は白いか姿造り（2、3名様に1匹）、9月10月は香住ガニを全ての夕食にお付けします。", "美方郡新温泉町湯1561-1", "楽天アワード受賞歴"]
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
            <span>砂丘サンドバギー＆日本海温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">「砂丘サンドバギー激走」鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【砂丘サンドバギー激走】鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「城崎温泉 西村屋ホテル招月庭」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋ホテル招月庭」へは、電車 JR城崎温泉駅から旅館組合無料乗合バスで5～15分 車 北近畿豊岡自動車道・豊岡出石ICから約18分。最寄りの城崎駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「城崎温泉 西村屋ホテル招月庭」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋ホテル招月庭」は『かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「城崎温泉 西村屋ホテル招月庭」と「皆生温泉 皆生シーサイドホテル 海の四季。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【砂丘サンドバギー激走】鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選","item":"https://croud-travel.pages.dev/super-panoramic-sand-buggy-adventure-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              広大な砂のキャンバスを駆け抜ける大興奮！アクティビティと海の幸を満喫する砂丘ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            風が創り出す「風紋」や日本海の青さが広がる鳥取砂丘。専用コースをバギーで疾走したり、パラグライダーやサンドボードなど多彩なアウトドア体験が楽しめます。思い切りアクティブに楽しんだ後は、温泉街の名湯に浸かり、冬は松葉がに、春から秋はモサエビや白イカなど日本海の極上海鮮に舌鼓。爽快感と寛ぎを両立した旅へご案内します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">砂丘を疾走するサンドバギー＆ファットバイク</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">砂地をダイナミックに走る爽快感！初心者向けのレクチャー付きで安全に体験可能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本海を一望するパノラマ展望大浴場</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">水平線に沈む夕日や漁火を眺めながら入る天然温泉。体の芯から温まる癒やし湯。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本海の獲れたて極上「松葉ガニ＆白イカ」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">甘み濃厚なカニ刺しや炭火焼き、透き通る白イカのお造りなど鮮度抜群の海鮮料理。</p>
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
              【1泊2日】城崎温泉 西村屋ホテル招月庭を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 城崎駅よりアクセス。電車 JR城崎温泉駅から旅館組合無料乗合バスで5～15分 車 北近畿豊岡自動車道・豊岡出石ICから約18分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「城崎温泉 西村屋ホテル招月庭」にチェックイン。かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「城崎温泉 西村屋ホテル招月庭」の湯処へ。かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「城崎温泉 西村屋ホテル招月庭」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「城崎温泉 西村屋ホテル招月庭」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「城崎温泉 西村屋ホテル招月庭」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「皆生温泉 皆生シーサイドホテル 海の四季。」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と城崎温泉 西村屋ホテル招月庭の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「城崎温泉 西村屋ホテル招月庭」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋ホテル招月庭」へは、電車 JR城崎温泉駅から旅館組合無料乗合バスで5～15分 車 北近畿豊岡自動車道・豊岡出石ICから約18分。最寄りの城崎駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「城崎温泉 西村屋ホテル招月庭」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋ホテル招月庭」は『かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「城崎温泉 西村屋ホテル招月庭」と「皆生温泉 皆生シーサイドホテル 海の四季。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/fukui"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ishikawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                石川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="super-panoramic-sand-buggy-adventure-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
