import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "！横浜みなとみらいクリスマス夜景で過ごす冬の旅（11・12月）！赤レンガ倉庫マーケットとベイビュー宿5選",
  description: "11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。",
  keywords: "横浜 みなとみらい 夜景 ホテル, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yokohama-minatomirai-christmas-stay/",
  },
  openGraph: {
    title: "！横浜みなとみらいクリスマス夜景で過ごす冬の旅（11・12月）！赤レンガ倉庫マーケットとベイビュー宿5選",
    description: "11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。",
    url: 'https://croud-travel.pages.dev/winter-yokohama-minatomirai-christmas-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月！横浜みなとみらいクリスマス夜景】赤レンガ倉庫マーケットとベイビュー宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "！横浜みなとみらいクリスマス夜景で過ごす冬の旅（11・12月）！赤レンガ倉庫マーケットとベイビュー宿5選",
    description: "11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12月！横浜みなとみらいクリスマス夜景】赤レンガ倉庫マーケットとベイビュー宿5選",
    "description": "11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。",
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
      "@id": "https://croud-travel.pages.dev/winter-yokohama-minatomirai-christmas-stay"
    }
  };

  const hotelList = [
            {
              name: "三井ガーデンホテル横浜みなとみらいプレミア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184792/184792.jpg",
              rating: 4.7,
              reviews: 878,
              price: "¥9,440〜",
              access: "みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分",
              features: ["(火)　新規オープン。", "横浜市西区みなとみらい3-3-3", "楽天アワード受賞歴"]
            },
            {
              name: "横浜みなとみらい　万葉倶楽部",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50200/50200.jpg",
              rating: 4.3,
              reviews: 1032,
              price: "¥10,925〜",
              access: "みなとみらい線　みなとみらい駅より徒歩５分／ＪＲ・横浜市営地下鉄　桜木町駅より徒歩１５分",
              features: ["観光・ビジネスにアクセス抜群！横浜みなとみらいで…熱海・湯河原から毎日運ばれる温泉で心身を癒して。", "横浜市中区新港2-7-1", "楽天アワード受賞歴"]
            },
            {
              name: "横浜桜木町ワシントンホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5242/5242.jpg",
              rating: 4.2,
              reviews: 9187,
              price: "¥5,550〜",
              access: "ＪＲ線・市営地下鉄　桜木町駅前！みなとみらい線馬車道駅から徒歩３分。パシフィコ横浜、横浜赤レンガ倉庫へも徒歩圏",
              features: ["桜木町駅前でビジネス・観光に抜群の立地！夜景ビュー客室からはみなとみらいが大パノラマでご覧頂けます！", "横浜市中区桜木町1-101-1", "楽天アワード受賞歴"]
            },
            {
              name: "横浜ベイホテル東急",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg",
              rating: 4.6,
              reviews: 10739,
              price: "¥8,800〜",
              access: "みなとみらい線みなとみらい駅徒歩約１分／ＪＲ・市営地下鉄線桜木町駅徒歩１０分",
              features: ["横浜港を一望できるアーバンリゾートで最上のくつろぎを", "横浜市西区みなとみらい2-3-7", "楽天アワード受賞歴"]
            },
            {
              name: "ＫＯＫＯ　ＨＯＴＥＬ　横浜鶴見",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/196891/196891.jpg",
              rating: 3.6,
              reviews: 238,
              price: "¥3,116〜",
              access: "JR鶴見駅より徒歩３分",
              features: ["横浜の喧騒を少し離れて、深呼吸させる場所。KOKOとともに、まだ知らない横浜の表情に出会ってください", "横浜市鶴見区鶴見中央4-29-1", "楽天アワード受賞歴"]
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
            <span>横浜クリスマス夜景＆赤レンガホテル</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">！横浜みなとみらいクリスマス夜景で過ごす冬の旅（11・12月）！赤レンガ倉庫マーケットとベイビュー宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11・12月！横浜みなとみらいクリスマス夜景】赤レンガ倉庫マーケットとベイビュー宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「三井ガーデンホテル横浜みなとみらいプレミア。」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「三井ガーデンホテル横浜みなとみらいプレミア。」へは、みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分。最寄りのみなとみらい駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「三井ガーデンホテル横浜みなとみらいプレミア。」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「三井ガーデンホテル横浜みなとみらいプレミア。」は『落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「三井ガーデンホテル横浜みなとみらいプレミア。」と「横浜みなとみらい 万葉倶楽部」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月！横浜みなとみらいクリスマス夜景】赤レンガ倉庫マーケットとベイビュー宿5選","item":"https://croud-travel.pages.dev/winter-yokohama-minatomirai-christmas-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              海風薫るみなとみらいの光のパノラマ。赤レンガクリスマスマーケットと絶景ベイサイドホテル
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            11月下旬から12月のクリスマスシーズン、横浜みなとみらいは街全体が光のアートに包まれます。赤レンガ倉庫のクリスマスマーケットでは、ヒュッテ（木の屋台）でグリューワインやシュトーレンを楽しみ、巨大ツリーの下でロマンチックなひとときを。高層階ホテルの客室からは、大観覧車コスモクロック21や横浜ベイブリッジの煌めくパノラマ夜景を独占。シェフ特製のクリスマスディナーとともに極上の思い出を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室バルコニーから見渡す大観覧車＆ベイブリッジの絶景夜景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">みなとみらい随一のパノラマビュー。シャンパンを片手に過ごすロマンチックな夜。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">横浜赤レンガ倉庫クリスマスマーケットへ徒歩すぐ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">本場ドイツのクリスマス気分を満喫。ホットワインや限定スイーツ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">ホテル最上階レストランのプレミアムクリスマスディナー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">厳選国産牛フィレ肉とオマール海老の極上フレンチ。ソムリエ厳選ペアリング。</p>
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
              【1泊2日】三井ガーデンホテル横浜みなとみらいプレミアを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> みなとみらい駅よりアクセス。みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「三井ガーデンホテル横浜みなとみらいプレミア。」にチェックイン。(火) 新規オープン。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「三井ガーデンホテル横浜みなとみらいプレミア。」の湯処へ。(火) 新規オープン。とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「三井ガーデンホテル横浜みなとみらいプレミア。」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「三井ガーデンホテル横浜みなとみらいプレミア。」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「三井ガーデンホテル横浜みなとみらいプレミア。」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「横浜みなとみらい 万葉倶楽部」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と三井ガーデンホテル横浜みなとみらいプレミアの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「三井ガーデンホテル横浜みなとみらいプレミア。」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「三井ガーデンホテル横浜みなとみらいプレミア。」へは、みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分。最寄りのみなとみらい駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「三井ガーデンホテル横浜みなとみらいプレミア。」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「三井ガーデンホテル横浜みなとみらいプレミア。」は『落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「三井ガーデンホテル横浜みなとみらいプレミア。」と「横浜みなとみらい 万葉倶楽部」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
              href="/furusato-tax-three-great-beautiful-forests-wood-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  furusato-tax-three-great-beautiful-forests-wood-stay
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/super-panoramic-paragliding-sky-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【大空を舞う空中散歩】爽快パラグライダー体験＆絶景パノラマ露天風呂！高原アクティビティ宿5選
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/nagano-azumino-wasabi-hotaka-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【長野・安曇野＆穂高温泉郷】大王わさび農場・水車小屋＆信州サーモン・わさび丼宿 完全ガイド ｜ 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/samurai-katana-armor-buke-yashiki-heritage-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  武家屋敷＆サムライ・甲冑・刀剣体験宿完全ガイド【会津・角館・知覧歴史旅】 | クラウドトラベル
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
                href="/prefectures/aichi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
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
              【1泊2日】三井ガーデンホテル横浜みなとみらいプレミアを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> みなとみらい駅へ到着。みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「三井ガーデンホテル横浜みなとみらいプレミア。」にチェックイン。(火)　新規オープン。を満喫。</li>
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
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「横浜みなとみらい 万葉倶楽部」周辺の景勝地へ立ち寄り。</li>
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
              href="/furusato-tax-mihara-onomichi-setoda-autumn-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  尾道・千光寺山の紅葉坂道としまなみ海道！瀬戸内海の多島美温泉・秋の地魚＆レモンポークを味わう広島旅 | クラウドトラベルふるさと納税
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-otaru-canal-asarigawa-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-fireworks-riverside-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  furusato-tax-three-great-fireworks-riverside-stay
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/hiroshima-miyajima-itsukushima-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【広島・宮島＆嚴島神社】海に浮かぶ大鳥居・弥山＆牡蠣・穴子飯宿 完全ガイド ｜ 日本全国・旅宿クラウド
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
                href="/prefectures/oita"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大分県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hokkaido"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                北海道の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/chiba"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                千葉県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-yokohama-minatomirai-christmas-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
