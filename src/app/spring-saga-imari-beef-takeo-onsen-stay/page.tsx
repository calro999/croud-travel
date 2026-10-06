import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選",
  description: "澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。",
  keywords: "武雄温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/spring-saga-imari-beef-takeo-onsen-stay/",
  },
  openGraph: {
    title: "【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選",
    description: "澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。",
    url: 'https://croud-travel.pages.dev/spring-saga-imari-beef-takeo-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選",
    description: "澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選",
    "description": "澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-03-27T00:00:00+09:00",
    "dateModified": "2026-03-27T00:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/spring-saga-imari-beef-takeo-onsen-stay"
    }
  };

  const hotelList = [
            {
              name: "史跡旅館　花月　大正館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188055/188055.jpg",
              rating: 4.1,
              reviews: 70,
              price: "¥30,712〜",
              access: "JR武雄温泉駅から車で５分",
              features: ["大人ラグジュアリーな体験を。茶房・Cafe・茶室を完備。", "武雄市武雄町武雄7385-7", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　旅館大村屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12624/12624.jpg",
              rating: 4.6,
              reviews: 519,
              price: "¥12,300〜",
              access: "JR西九州新幹線「嬉野温泉駅」よりお車で約5分 / 長崎自動車道 嬉野ICより５分",
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
              name: "嬉野温泉　旅館千代乃屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13719/13719.jpg",
              rating: 4.6,
              reviews: 259,
              price: "¥5,500〜",
              access: "ＪＲ長崎線『武雄温泉駅』よりバスで３０分『／長崎道『嬉野ＩＣ』より車で７分。御希望で嬉野ＩＣまでは出向きます。",
              features: ["出張滞在に便利格安。飲食物持ち込み自由。", "嬉野市嬉野町下宿乙800", "楽天アワード受賞歴"]
            },
            {
              name: "嬉野温泉　旅館　吉田屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40786/40786.jpg",
              rating: 4.3,
              reviews: 1232,
              price: "¥17,600〜",
              access: "博多駅～70分/長崎空港～車40分/SAGAアリーナ～車50分/御船山らかんの湯～車20分/ハウステンボス～車40分",
              features: ["新大浴場露天風呂＆テラス＆客室が誕生！日本宿TOP49・アワード8年連続受賞★ミシュラン３☆受賞", "嬉野市嬉野町岩屋川内甲379", "楽天アワード受賞歴"]
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
            <span>A5伊万里牛＆武雄温泉美肌湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「嬉野温泉 旅館大村屋」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「嬉野温泉 旅館大村屋」へは、JR西九州新幹線「嬉野温泉駅」よりお車で約5分 / 長崎自動車道 嬉野ICより５分。最寄りの武雄温泉駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「嬉野温泉 旅館大村屋」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「嬉野温泉 旅館大村屋」は『自家源泉保有 源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天・半露天付客室有』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「嬉野温泉 旅館大村屋」と「嬉野温泉 旅館 初音荘」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選","item":"https://croud-travel.pages.dev/spring-saga-imari-beef-takeo-onsen-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              とろける極上のサシと1300年の美肌湯。歴史の街・武雄温泉で味わう佐賀の最高峰ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            宮本武蔵やシーボルトも浸かったとされる名湯「武雄温泉」。弱アルカリ性のぬめりあるお湯は「美肌の湯」として名高く、湯上がりの肌をしっとりと包み込みます。夕食には、きめ細やかな霜降りと上品な甘みが特徴の「A5ランク伊万里牛・佐賀牛」の炭火焼きや陶板焼きをご用意。有明海産の竹崎カニや地元のブランド米とともに、至高の九州美食をご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">口溶けまろやかな最高峰「A5伊万里牛ステーキ」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">全国屈指の肉質を誇るブランド牛。特製わさび醤油と岩塩でシンプルに。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">1300年の歴史を誇る「武雄温泉」源泉かけ流し</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">弱アルカリ単純温泉の柔らかな湯ざわり。疲労回復と美肌効果抜群。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">辰野金吾建築の楼門や御船山楽園の四季パノラマ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">歴史的建造物と広大な日本庭園。アートと自然が融合する空間。</p>
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
              【1泊2日】嬉野温泉 旅館大村屋を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 武雄温泉駅よりアクセス。JR西九州新幹線「嬉野温泉駅」よりお車で約5分 / 長崎自動車道 嬉野ICより５分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「嬉野温泉 旅館大村屋」にチェックイン。自家源泉保有 源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天・半露天付客室有などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「嬉野温泉 旅館大村屋」の湯処へ。自家源泉保有 源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「嬉野温泉 旅館大村屋」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「嬉野温泉 旅館大村屋」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「嬉野温泉 旅館大村屋」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「嬉野温泉 旅館 初音荘」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と嬉野温泉 旅館大村屋の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「嬉野温泉 旅館大村屋」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嬉野温泉 旅館大村屋」へは、JR西九州新幹線「嬉野温泉駅」よりお車で約5分 / 長崎自動車道 嬉野ICより５分。最寄りの武雄温泉駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「嬉野温泉 旅館大村屋」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嬉野温泉 旅館大村屋」は『自家源泉保有 源泉100％かけ流しの貸切湯と音楽を愉しめる老舗宿。露天・半露天付客室有』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「嬉野温泉 旅館大村屋」と「嬉野温泉 旅館 初音荘」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aomori"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                青森県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="spring-saga-imari-beef-takeo-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
