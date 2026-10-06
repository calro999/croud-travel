import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選",
  description: "11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。",
  keywords: "金沢 温泉 旅館, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kanazawa-kenrokuen-yukizuri-stay/",
  },
  openGraph: {
    title: "【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選",
    description: "11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。",
    url: 'https://croud-travel.pages.dev/winter-kanazawa-kenrokuen-yukizuri-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選",
    description: "11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選",
    "description": "11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。",
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
      "@id": "https://croud-travel.pages.dev/winter-kanazawa-kenrokuen-yukizuri-stay"
    }
  };

  const hotelList = [
            {
              name: "金沢湯涌温泉　日本料理　さかえや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109160/109160.jpg",
              rating: 4.2,
              reviews: 175,
              price: "¥18,200〜",
              access: "金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分",
              features: ["全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。", "金沢市湯涌町イ161", "楽天アワード受賞歴"]
            },
            {
              name: "金沢湯涌温泉　湯の出旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg",
              rating: 4.7,
              reviews: 480,
              price: "¥17,325〜",
              access: "兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。",
              features: ["金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。", "金沢市湯涌荒屋町77-2", "楽天アワード受賞歴"]
            },
            {
              name: "金沢辰口温泉　まつさき",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38847/38847.jpg",
              rating: 4.7,
              reviews: 417,
              price: "¥20,625〜",
              access: "関東方面：IR松任駅より車20分、関西方面：JR小松駅より車20分　小松空港より車25分　※要予約で送迎がございます",
              features: ["温泉客室24室【鳳凰は露天風呂付】料理自慢＆全て個室食。金沢駅から電車と送迎で30分。お一人様歓迎", "能美市辰口町3-1", "楽天アワード受賞歴"]
            },
            {
              name: "金沢湯涌温泉　百楽荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg",
              rating: 4.7,
              reviews: 785,
              price: "¥19,470〜",
              access: "★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK",
              features: ["2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞", "金沢市湯涌荒屋町92-3", "楽天アワード受賞歴"]
            },
            {
              name: "金沢湯涌温泉　古香里庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167495/167495.jpg",
              rating: 4.6,
              reviews: 42,
              price: "¥18,700〜",
              access: "金沢駅よりお車にて約40分",
              features: ["2018年6月オープン「金沢湯涌温泉　古香里庵」全4室温泉露天風呂付と食事処は個室", "金沢市湯涌町イ68", "楽天アワード受賞歴"]
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
            <span>兼六園雪吊り＆加賀百万石美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「金沢湯涌温泉 日本料理 さかえや」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 日本料理 さかえや」へは、金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分。最寄りの金沢駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「金沢湯涌温泉 日本料理 さかえや」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 日本料理 さかえや」は『全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 日本料理 さかえや」と「金沢湯涌温泉 湯の出旅館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選","item":"https://croud-travel.pages.dev/winter-kanazawa-kenrokuen-yukizuri-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              雪から名木を守る伝統の縄飾り「雪吊り」。冬の金沢・兼六園の美学と加賀名湯ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            金沢の冬の訪れを象徴する兼六園の「雪吊り」。唐崎松をはじめとする名木に数百本の縄が張られる職人技の幾何学美は、まさに日本の伝統美の極致です。ひがし茶屋街や近江町市場で冬の味覚を散策した後は、開湯1300年の歴史を誇る山代温泉や金沢の奥座敷・湯涌温泉へ。のどぐろの塩焼きやタグ付き加能ガニ、じぶ煮など加賀懐石の粋を味わい、優雅な冬の休日をご堪能ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本三名園「兼六園」の圧巻の雪吊りライトアップ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">11月〜冬期限定の絶景。黄金色にライトアップされる唐崎松の幻想美。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本海の冬の王様「加能ガニ＆高級魚のどぐろ塩焼き」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">青いタグ付き石川県産ズワイガニと脂の乗ったのどぐろ。職人の極上加賀会席。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">開湯1300年！山代・湯涌温泉の源泉かけ流し美肌湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">北大路魯山人や竹久夢二ゆかりの名湯。庭園露天風呂で心静かに温まる。</p>
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
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】金沢湯涌温泉 日本料理 さかえやを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 金沢駅よりアクセス。金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「金沢湯涌温泉 日本料理 さかえや」にチェックイン。全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「金沢湯涌温泉 日本料理 さかえや」の湯処へ。全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「金沢湯涌温泉 日本料理 さかえや」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「金沢湯涌温泉 日本料理 さかえや」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「金沢湯涌温泉 日本料理 さかえや」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「金沢湯涌温泉 湯の出旅館」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と金沢湯涌温泉 日本料理 さかえやの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「金沢湯涌温泉 日本料理 さかえや」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 日本料理 さかえや」へは、金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分。最寄りの金沢駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「金沢湯涌温泉 日本料理 さかえや」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 日本料理 さかえや」は『全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 日本料理 さかえや」と「金沢湯涌温泉 湯の出旅館」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              全国の人気エリア・温泉地から宿を探す
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/prefectures/okinawa"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              沖縄県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/gunma"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              群馬県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/oita"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              大分県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/shimane"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              島根県のおすすめ宿・温泉一覧 →
            </Link>
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
              【1泊2日】金沢湯涌温泉 日本料理 さかえやを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 金沢駅へ到着。金沢西ＩＣよりお車で約30分 / 金沢駅より「湯涌温泉行バス」約40分でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「金沢湯涌温泉 日本料理 さかえや」にチェックイン。全7室、部屋食で四季を味わう金沢の宿。ミシュラン『最上級の快適』を受賞。を満喫。</li>
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
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「金沢湯涌温泉 湯の出旅館」周辺の景勝地へ立ち寄り。</li>
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
              href="/furusato-tax-yoro-keikoku-autumn-leaves-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  関東で最も遅い紅葉！千葉・養老渓谷の粟又の滝＆房総黒湯温泉旅館×ふるさと納税完全ガイド【2026年最新秋旅】千葉
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【12月開幕！蔵王樹氷スノーモンスター】幻想的な白銀世界と白濁硫黄泉のにごり湯宿5選
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-iseshima-autumn-ise-lobster-gourmet-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  10月漁解禁！本場・伊勢志摩の活伊勢海老・あわび・松阪牛尽くし美食温泉旅館×ふるさと納税完全ガイド【2026年最新秋旅】鳥取本浦・相差 | 旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-setouchi-island-luxury-ocean-resort-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  穏やかな海と多島美に癒やされる瀬戸内アイランドリゾート名宿×ふるさと納税完全ガイド【2026年最新】小豆島・鞆の浦・生口島
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
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/miyagi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮城県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-kanazawa-kenrokuen-yukizuri-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
