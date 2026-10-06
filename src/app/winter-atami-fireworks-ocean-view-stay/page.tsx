import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選",
  description: "11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。",
  keywords: "熱海 温泉 露天風呂 旅館 花火, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-atami-fireworks-ocean-view-stay/",
  },
  openGraph: {
    title: "【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選",
    description: "11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。",
    url: 'https://croud-travel.pages.dev/winter-atami-fireworks-ocean-view-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選",
    description: "11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選",
    "description": "11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-09-27T00:00:00+09:00",
    "dateModified": "2026-09-27T00:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-atami-fireworks-ocean-view-stay"
    }
  };

  const hotelList = [
            {
              name: "熱海温泉　古屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg",
              rating: 4.9,
              reviews: 571,
              price: "¥39,380〜",
              access: "ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪",
              features: ["【創業220周年】安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流し温泉", "熱海市東海岸町5-24", "楽天アワード受賞歴"]
            },
            {
              name: "熱海温泉　さくらや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54665/54665.jpg",
              rating: 4.4,
              reviews: 717,
              price: "¥18,150〜",
              access: "ＪＲ　熱海駅から徒歩５分　",
              features: ["◆熱海駅から徒歩5分◆旬の天然素材にこだわり手間を惜しまず丁寧に。五感に届く熱海の旬をお部屋食で堪能", "熱海市東海岸町9-11", "楽天アワード受賞歴"]
            },
            {
              name: "熱海温泉　旅館　立花",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14505/14505.jpg",
              rating: 4.2,
              reviews: 525,
              price: "¥12,100〜",
              access: "東名厚木ＩＣより小田原厚木有料道路経由、国道１３５号で熱海へ／ＪＲ熱海駅",
              features: ["海まで徒歩１分！熱海中心街で観光に好立地。口コミ料理部門★４，５★源泉100％露天風呂有。", "熱海市昭和町5-13", "楽天アワード受賞歴"]
            },
            {
              name: "熱海温泉　山木旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3044/3044.jpg",
              rating: 4.5,
              reviews: 229,
              price: "¥6,875〜",
              access: "熱海駅から車で５分。熱海駅よりバスでのご利用は「清水町」もしくは「銀座」下車徒歩約5分",
              features: ["【夕・朝食ともにお部屋食】＜昭和7年創業＞熱海の緑の庭園に囲まれた閑静な和風温泉旅館", "熱海市中央町14-9", "楽天アワード受賞歴"]
            },
            {
              name: "料亭旅館　熱海　小嵐亭（旧　迎賓館　熱海小嵐亭）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15488/15488.jpg",
              rating: 4.4,
              reviews: 120,
              price: "¥32,000〜",
              access: "車／東名厚木ICより小田原厚木道路経由（約60分）　電車／東京より東海道新幹線で熱海下車（約45分）",
              features: ["■全館禁煙（喫煙所あり）■　熱海の老舗旅館で心休まる寛ぎの時間をごゆっくりお過ごしください。", "熱海市小嵐町1-16", "楽天アワード受賞歴"]
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
            <span>冬の熱海花火＆客室露天風呂</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              澄み渡る夜空と海を照らす光と轟音。客室露天風呂から見上げる冬の熱海海上花火大会
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            すり鉢状の地形が生み出す天然の音響効果で、身体の芯まで響く大迫力の熱海海上花火大会。冬は湿度が低く空気が澄み渡るため、花火の色彩が際立ち、フィナーレの「大空中ナイアガラ」は言葉を失う美しさです。温泉街の喧騒を離れ、客室の展望露天風呂で温まりながら見上げる贅沢。金目鯛の煮付けや相模湾の獲れたて地魚会席とともに、特別な冬の一夜を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用テラス・露天風呂から望む大迫力の海上花火</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">混雑なしで真正面に打ち上がる花火を独占鑑賞。海面に映る光の反射が絶景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">名物「金目鯛の姿煮」と相模湾の朝獲れ鮮魚会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">秘伝のタレでふっくら煮付けた高級金目鯛。伊勢海老やアワビの豪華料理。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">徳川家康も愛した熱海温泉の源泉かけ流し美肌湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">塩化物泉の温まり効果で湯冷め知らず。海風を感じるインフィニティ露天風呂。</p>
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
              【1泊2日】熱海温泉 古屋旅館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 熱海駅よりアクセス。ＪＲ熱海駅からタクシーで５分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「熱海温泉 古屋旅館」にチェックイン。創業220周年 安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流し温泉などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「熱海温泉 古屋旅館」の湯処へ。創業220周年 安心の全室部屋食！2026年7月新タイプの露天付き客室とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「熱海温泉 古屋旅館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「熱海温泉 古屋旅館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「熱海温泉 古屋旅館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「熱海温泉 さくらや旅館」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と熱海温泉 古屋旅館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「熱海温泉 古屋旅館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「熱海温泉 古屋旅館」へは、ＪＲ熱海駅からタクシーで５分。最寄りの熱海駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「熱海温泉 古屋旅館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「熱海温泉 古屋旅館」は『創業220周年 安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「熱海温泉 古屋旅館」と「熱海温泉 さくらや旅館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
              href="/tokyo-takayama-shirakawago-highway-bus-guide"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【東京・新宿〜飛騨高山・白川郷】直行高速バスが最強！電車との料金・時間比較＆飛騨牛1泊2日モデルコース ｜ 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/kyoto-solo-retreat-temple-modern-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/kanagawa-hakone-yumoto-solo-retreat-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【箱根湯本ひとり旅・自然渓流おこもり】ロマンスカー直通・渓流露天風呂・旬会席！都心から85分の極上ソロ温泉リトリート厳選3宿
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/kyoto-amanohashidate-ine-funaya-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【京都・天橋立＆伊根の舟屋】股のぞき・舟屋クルーズ＆冬の間人ガニ・名湯宿 完全ガイド ｜ 日本全国・旅宿クラウド
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
                href="/prefectures/kagoshima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                鹿児島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/oita"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大分県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
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
              【1泊2日】熱海温泉 古屋旅館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 熱海駅へ到着。ＪＲ熱海駅からタクシーで５分でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「熱海温泉 古屋旅館」にチェックイン。創業220周年 安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流を満喫。</li>
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
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「熱海温泉 さくらや旅館」周辺の景勝地へ立ち寄り。</li>
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
              href="/furusato-tax-nasu-highland-onsen-resort-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  ロイヤルリゾート那須の自然と名湯！那須温泉の美肌露天風呂＆極上とちぎ和牛・豪華高原バイキング×ふるさと納税完全攻略ガイド【2026年最新】エピナール那須・山楽・グランドメルキュール
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-miyajima-itsukushima-shrine-luxury-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-limestone-caves-mystery-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  furusato-tax-three-great-limestone-caves-mystery-stay
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/fukui-solo-business-echizen-soba-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【福井出張＆越前美食ひとり旅】北陸新幹線福井駅前・マリオット最新開業・天然温泉大浴場！越前おろしそばとソースカツ丼を満喫する極上宿 厳選3選
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
                href="/prefectures/shimane"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                島根県の宿・温泉
              </Link>
              <Link
                href="/prefectures/wakayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                和歌山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shiga"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                滋賀県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-atami-fireworks-ocean-view-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
