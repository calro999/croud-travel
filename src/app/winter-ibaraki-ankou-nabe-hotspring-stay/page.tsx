import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "解禁！冬の贅沢あんこう鍋＆どぶ汁で過ごす冬の旅（11月）！濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選",
  description: "11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。",
  keywords: "大洗 温泉 旅館, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ibaraki-ankou-nabe-hotspring-stay/",
  },
  openGraph: {
    title: "解禁！冬の贅沢あんこう鍋＆どぶ汁で過ごす冬の旅（11月）！濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選",
    description: "11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。",
    url: 'https://croud-travel.pages.dev/winter-ibaraki-ankou-nabe-hotspring-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11月解禁！冬の贅沢あんこう鍋＆どぶ汁】濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "解禁！冬の贅沢あんこう鍋＆どぶ汁で過ごす冬の旅（11月）！濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選",
    description: "11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11月解禁！冬の贅沢あんこう鍋＆どぶ汁】濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選",
    "description": "11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。",
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
      "@id": "https://croud-travel.pages.dev/winter-ibaraki-ankou-nabe-hotspring-stay"
    }
  };

  const hotelList = [
            {
              name: "大洗　民宿旅館　白浜荘＜茨城県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13716/13716.jpg",
              rating: 4.0,
              reviews: 109,
              price: "¥9,000〜",
              access: "大洗鹿島線「大洗駅」より車で5分 / 北関東自動車道 東水戸道路 水戸・大洗ICより6km約10分",
              features: ["大洗漁港上　高台から太平洋を一望する味覚の宿　男女別アルカリミネラル風呂　ビジネス客応相談", "東茨城郡大洗町磯浜6863", "楽天アワード受賞歴"]
            },
            {
              name: "大洗鴎松亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198457/198457.jpg",
              rating: 4.5,
              reviews: 1,
              price: "¥14,350〜",
              access: "大洗鹿島線「大洗駅」よりお車で約10分",
              features: ["緑豊かな松林の中で、潮騒の音色とやさしい潮風に包まれながら、ごゆっくりとお寛ぎください。", "東茨城郡大洗町磯浜町8179-5", "楽天アワード受賞歴"]
            },
            {
              name: "割烹旅館　肴屋本店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109198/109198.jpg",
              rating: 4.3,
              reviews: 83,
              price: "¥8,800〜",
              access: "大洗駅からタクシーで約５分（送迎・要電話連絡）",
              features: ["茨城の新鮮な地魚料理が自慢！老舗の割烹旅館で、常陸牛・鹿島灘はまぐりなど旬の味を満喫。", "東茨城郡大洗町磯浜町715", "楽天アワード受賞歴"]
            },
            {
              name: "益子温泉　益子舘　里山リゾートホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54520/54520.jpg",
              rating: 4.0,
              reviews: 1610,
              price: "¥7,012〜",
              access: "真岡鉄道益子駅より車で約5分／真岡ICから車で20分／桜川筑西ICから車で15分／モビリティリゾートもてぎから車で25分",
              features: ["都心から車で1時間30分で温泉満喫♪♪2024年2月ロウリュウ対応「森のサウナ」リニューアルオープン", "芳賀郡益子町益子池下243-3", "楽天アワード受賞歴"]
            },
            {
              name: "旅館民宿　セイラーズ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19115/19115.jpg",
              rating: 4.5,
              reviews: 24,
              price: "¥18,000〜",
              access: "鹿島臨海鉄道：大洗駅より徒歩で１５分・車で３分／常磐自動車道：水戸ＩＣより約15分",
              features: ["大洗サンビーチ前で磯料理の豊富な宿。宿より、海浜公園まで５分、アウトレツトまで１０分", "東茨城郡大洗町大貫町163-6", "楽天アワード受賞歴"]
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
            <span>極上あんこう鍋＆太平洋絶景温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">解禁！冬の贅沢あんこう鍋＆どぶ汁で過ごす冬の旅（11月）！濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11月解禁！冬の贅沢あんこう鍋＆どぶ汁】濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「大洗鴎松亭」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「大洗鴎松亭」へは、大洗鹿島線「大洗駅」よりお車で約10分。最寄りの大洗駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「大洗鴎松亭」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「大洗鴎松亭」は『緑豊かな松林の中で、潮騒の音色とやさしい潮風に包まれながら、ごゆっくりとお寛ぎください。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「大洗鴎松亭」と「益子温泉 益子舘 里山リゾートホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11月解禁！冬の贅沢あんこう鍋＆どぶ汁】濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選","item":"https://croud-travel.pages.dev/winter-ibaraki-ankou-nabe-hotspring-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              冬の茨城が誇る海のフォアグラ「あん肝」の深いコク。名物どぶ汁と五浦・大洗の美肌温泉ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            「東のあんこう、西のふぐ」と称される冬の高級魚アンコウ。11月に入ると肝が丸々と肥え、一番美味しい旬を迎えます。水を一切使わず大根とあん肝の水分だけで煮込む究極の漁師料理「どぶ汁」や、上品な味噌仕立てのあんこう鍋は、身体の芯から温まる絶品の極み。太平洋の荒波と奇岩を望む五浦温泉や大洗温泉の露天風呂に浸かり、日の出パノラマと常陸牛、地酒に酔いしれる贅沢な休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本場・茨城の伝統技「濃厚あんこう鍋＆どぶ汁」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">あん肝を炒って溶かし込んだ濃厚スープ。七つ道具（皮・肝・身・ヒレ等）の美味。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">太平洋の水平線を一望するインフィニティ展望露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ナトリウム塩化物泉の温まり名湯。海から昇る朝日の絶景パノラマ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">常陸牛ステーキ＆大洗・那珂湊の獲れたて地魚会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">A5常陸牛の陶板焼きと旬のヒラメ・アワビ。茨城の銘酒とともに。</p>
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
              【1泊2日】大洗鴎松亭を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 大洗駅よりアクセス。大洗鹿島線「大洗駅」よりお車で約10分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「大洗鴎松亭」にチェックイン。緑豊かな松林の中で、潮騒の音色とやさしい潮風に包まれながら、ごゆっくりとお寛ぎください。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「大洗鴎松亭」の湯処へ。緑豊かな松林の中で、潮騒の音色とやさしい潮風に包まれながら、ごゆっくりとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「大洗鴎松亭」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「大洗鴎松亭」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「大洗鴎松亭」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「益子温泉 益子舘 里山リゾートホテル」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と大洗鴎松亭の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「大洗鴎松亭」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「大洗鴎松亭」へは、大洗鹿島線「大洗駅」よりお車で約10分。最寄りの大洗駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「大洗鴎松亭」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「大洗鴎松亭」は『緑豊かな松林の中で、潮騒の音色とやさしい潮風に包まれながら、ごゆっくりとお寛ぎください。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「大洗鴎松亭」と「益子温泉 益子舘 里山リゾートホテル」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
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
              href="/furusato-tax-luxury-buffet-gourmet-resort-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  豪華ディナービュッフェ＆出来たてライブキッチン極上温泉宿×ふるさと納税完全ガイド【2026年最新】鬼怒川あさや・別府杉乃井・登別グランド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/traditional-nagasaki-champon-gourmet-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【2026年】長崎名物・海鮮ちゃんぽん＆卓袱料理！雲仙地獄・小浜温泉の絶景名湯宿5選 | 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-kochi-shimanto-ashizuri-autumn-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  高知・日本最後の清流 四万十川と足摺岬！太平洋パノラマ絶景温泉＆戻り鰹タタキ・天然鮎 | クラウドトラベルふるさと納税
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-izumo-kamiarizuki-tamatsukuri-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  全国の神々が集う出雲大社「神在月（11月）」参拝＆日本最古の美肌温泉「玉造温泉」・しまね和牛 | クラウドトラベルふるさと納税
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
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岡山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
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
              【1泊2日】大洗 民宿旅館 白浜荘＜茨城県＞を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 大洗駅へ到着。大洗鹿島線「大洗駅」より車で5分 / 北関東自動車道 東水戸道路 水戸・大洗ICより6km約10分でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「大洗 民宿旅館 白浜荘＜茨城県＞」にチェックイン。大洗漁港上　高台から太平洋を一望する味覚の宿　男女別アルカリミネラル風呂　ビジネス客応相談を満喫。</li>
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
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「大洗鴎松亭」周辺の景勝地へ立ち寄り。</li>
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
              href="/miyagi-naruko-solo-retreat-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【鳴子温泉ひとり旅・湯めぐりこけしおこもり】日本屈指の多種泉質・源蔵の湯・鳴子峡渓谷美！千年の湯治場で心ほぐれる極上厳選3宿
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-luxury-glamping-bbq-dome-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【豪華グランピング×ふるさと納税】手ぶら炭火BBQ＆薪割り焚き火！星空ドームテント完全ガイド | クラウドトラベル
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/geothermal-hell-steamed-cuisine-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【2026年】噴き出す温泉蒸気で素材の旨味を凝縮！名物「地獄蒸し」料理が自慢の温泉宿5選 ｜ 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-shirahone-kamikochi-autumn-leaves-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  上高地・大正池と河童橋の黄金カラマツ紅葉！乳白色の秘湯・白骨温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】長野
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
                href="/prefectures/akita"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                秋田県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kochi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                高知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/miyazaki"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮崎県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kyoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                京都府の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-ibaraki-ankou-nabe-hotspring-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
