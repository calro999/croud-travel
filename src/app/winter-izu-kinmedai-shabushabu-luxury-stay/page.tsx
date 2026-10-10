import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選",
  description: "11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。",
  keywords: "伊豆 温泉 金目鯛 旅館, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-izu-kinmedai-shabushabu-luxury-stay/",
  },
  openGraph: {
    title: "【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選",
    description: "11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。",
    url: 'https://croud-travel.pages.dev/winter-izu-kinmedai-shabushabu-luxury-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選",
    description: "11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選",
    "description": "11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。",
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
      "@id": "https://croud-travel.pages.dev/winter-izu-kinmedai-shabushabu-luxury-stay"
    }
  };

  const hotelList = [
            {
              name: "西伊豆三津浜・湯の花温泉　安田屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13557/13557.jpg",
              rating: 4.7,
              reviews: 328,
              price: "¥18,700〜",
              access: "東名沼津ICより車で30分／伊豆箱根鉄道『伊豆長岡駅』よりバスで15分／東海道線『沼津駅』よりバスで35分",
              features: ["明治２０年創業【太宰治ゆかりの宿】天然温泉と新鮮な魚介、歴史の情緒あふれる館内をお楽しみください。", "沼津市内浦三津19", "楽天アワード受賞歴"]
            },
            {
              name: "伊豆稲取の金目鯛一筋に　旅館はまべ荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/166441/166441.jpg",
              rating: 4.0,
              reviews: 7,
              price: "¥20,920〜",
              access: "伊豆稲取駅より徒歩にて約７分",
              features: ["館主が稲取漁港で買い付けた地金目鯛、本物の稲取金目鯛を食べられる温泉宿。(稲取漁港の鮮魚入札権保有)", "賀茂郡東伊豆町稲取373", "楽天アワード受賞歴"]
            },
            {
              name: "伊豆熱川温泉　六つの貸切風呂を湯めぐり　ふたりの湯宿　湯花満開",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28425/28425.jpg",
              rating: 4.5,
              reviews: 775,
              price: "¥10,500〜",
              access: "伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。伊豆熱川駅から海へ徒歩３～５分。当館海側に無料駐車場あり。",
              features: ["2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸のお食事が人気。伊豆熱川駅5分", "賀茂郡東伊豆町奈良本987-1", "楽天アワード受賞歴"]
            },
            {
              name: "伊豆長岡温泉　ホテル茜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9042/9042.jpg",
              rating: 4.4,
              reviews: 190,
              price: "¥12,800〜",
              access: "直通特急（踊り子号）をご利用の場合、東京から伊豆長岡まで約２時間",
              features: ["実る心地よさに出逢うたび・・・", "伊豆の国市長岡123", "楽天アワード受賞歴"]
            },
            {
              name: "伊豆長岡温泉　招福の宿　ゑびすや（えびすや）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51448/51448.jpg",
              rating: 4.5,
              reviews: 662,
              price: "¥6,600〜",
              access: "東名沼津ＩＣ・新東名長泉沼津ＩＣより車で25分。伊豆箱根鉄道伊豆長岡駅より徒歩２０分・車で５分（１５時～１８時送迎可）",
              features: ["海にも近い伊豆長岡温泉！鎌倉時代より続く伊豆長岡温泉古奈に佇む全１５室の小さな宿。", "伊豆の国市古奈1186", "楽天アワード受賞歴"]
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
            <span>極上金目鯛会席＆伊豆絶景温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」へは、伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。最寄りの伊豆熱川駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」は『2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸のお食事が人気。伊豆。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」と「伊豆長岡温泉 ホテル茜」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選","item":"https://croud-travel.pages.dev/winter-izu-kinmedai-shabushabu-luxury-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              とろける極上の脂と甘み。初冬の伊豆が誇る「稲取金目鯛」とオーシャンビュー名湯ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日戻り操業の一本釣りで水揚げされる高級ブランド「稲取キンメ」。冬場は身にたっぷりと上品な脂を蓄え、刺身やしゃぶしゃぶで口に運ぶと上品な甘みが広がります。こってりと甘辛く煮付けた名物の「金目鯛の姿煮」はご飯もお酒も進む絶品の極み。相模湾や伊豆諸島を望むパノラマ展望露天風呂に浸かり、海から昇る朝日や満天の星空を眺める至福の休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">一番脂がのる初冬の「極上地金目鯛しゃぶしゃぶ＆姿煮」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">一本釣りブランド稲取キンメ。刺身、煮付け、しゃぶしゃぶ、釜飯で味わい尽くす。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">相模湾の水平線を一望するインフィニティ展望露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">海風を感じながらの湯浴み。塩化物泉でポカポカ温まり美肌効果も抜群。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">伊勢海老・アワビ・地魚のお造り盛り合わせ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">伊豆の海の幸が勢揃い。職人が腕を振るう贅沢な磯懐石料理。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">11・12月おすすめ宿泊施設</span>
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

        
        
        
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 伊豆熱川駅よりアクセス。伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」にチェックイン。2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸のお食事が人気。伊豆熱川駅5分などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」の湯処へ。2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「伊豆長岡温泉 ホテル茜」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」へは、伊豆急行線・伊豆熱川温泉駅／Ｒ１３５を通り、熱海から約１時間。最寄りの伊豆熱川駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」は『2023年12月半露天風呂付き客室誕生！6つの源泉掛け流し温泉、海の幸のお食事が人気。伊豆。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」と「伊豆長岡温泉 ホテル茜」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
            <Link
              href="/furusato-tax-three-great-fireworks-resort-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大花火大会の特等席と快適眺望ホテル×ふるさと納税完全ガイド【2026年最新】大曲・長岡・土浦
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-niigata-yahiko-iwamuro-autumn-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  新潟・越後一宮 弥彦神社もみじ谷＆弥彦温泉！菊まつりと越後名物・のどぐろ・岩船米コシヒカリ | クラウドトラベルふるさと納税
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-miso-capitals-gastronomy-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大味噌の郷＆百花繚乱の郷土発酵美・老舗蔵と郷土鍋の名湯宿×ふるさと納税完全ガイド【2026年最新】信州味噌・八丁味噌・仙台味噌
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-tendo-yamadera-autumn-leaves-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  松尾芭蕉ゆかりの山寺・立石寺の絶景紅葉＆天童温泉！山形牛と名湯旅館×ふるさと納税完全ガイド【2026年最新秋旅】山形
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/iwate"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岩手県の宿・温泉
              </Link>
              <Link
                href="/prefectures/ishikawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                石川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kochi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
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
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】伊豆稲取の金目鯛一筋に 旅館はまべ荘を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 伊豆稲取駅へ到着。伊豆稲取駅より徒歩にて約７分でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「伊豆稲取の金目鯛一筋に 旅館はまべ荘」にチェックイン。館主が稲取漁港で買い付けた地金目鯛、本物の稲取金目鯛を食べられる温泉宿。(稲取漁港の鮮魚入を満喫。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 本格サウナと天然温泉のととのい体験で夕暮れの贅沢な湯浴み時間をゆったり過ごす。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 特選ブランド牛と地場産品を味わう夕食。地元の恵みを五感で味わう至福のディナー。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の澄み渡る空気のなか目覚めの朝風呂。清々しい風を感じる至福のひととき。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 宿自慢の朝食でエネルギーチャージ。地元食材の優しい味わいを堪能。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「伊豆熱川温泉 六つの貸切風呂を湯めぐり ふたりの湯宿 湯花満開。」周辺の景勝地へ立ち寄り。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> ご当地グルメのランチとお土産選びを楽しみ、大満足で家路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link
              href="/furusato-tax-yugawara-onsen-ryotei-kaiseki-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/tokyo-kanazawa-bus-vs-shinkansen-guide"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【東京から金沢 安く行く方法】新幹線と高速バスどっち？料金・時間比較＆1泊2日モデルコース【2026年最新】 ｜ 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-cable-cars-ropeway-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大山岳ロープウェイ＆雲上パノラマ・絶景空中散歩のリゾート名宿×ふるさと納税完全ガイド【2026年最新】千畳敷・立山・箱根駒ヶ岳
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-sand-bath-sunamushi-detox-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  天然砂むし温泉＆海辺の名湯で極上デトックス！名門湯宿×ふるさと納税完全ガイド【2026年最新】指宿・別府
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
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
                href="/prefectures/kagoshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/wakayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                和歌山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-izu-kinmedai-shabushabu-luxury-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
